document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".form-engine-checkbox");
  const decimalboxes = document.querySelectorAll(".form-engine-decimalbox");
  const resultBlocks = document.querySelectorAll(".form-engine-result-block");

  function evaluateAllRules() {
    // 1. Index Group State Maps
    const groupStates = {};

    checkboxes.forEach(chk => {
      const group = chk.getAttribute("data-group");
      if (!group) return;
      if (!groupStates[group]) groupStates[group] = { checkboxes: [], decimals: [] };
      groupStates[group].checkboxes.push(chk);
    });

    decimalboxes.forEach(db => {
      const group = db.getAttribute("data-group");
      if (!group) return;
      if (!groupStates[group]) groupStates[group] = { checkboxes: [], decimals: [] };
      groupStates[group].decimals.push(db);
    });

    // 2. Loop and process result blocks
    resultBlocks.forEach(block => {
      const rawRule = block.getAttribute("data-rule");
      const blockId = block.getAttribute("id");
      const blockContext = blockId ? `'${blockId}'` : `[ ${rawRule} ]`;

      try {
        const isVisible = parseAndEvaluate(rawRule, groupStates);
        block.style.display = isVisible ? "block" : "none";
      } catch (error) {
        console.error(`❌ [Form Engine] Error evaluating result block ${blockContext}: ${error.message}`);
        block.style.display = "none";
      }
    });
  }

  function parseAndEvaluate(ruleStr, groupStates) {
    let expr = ruleStr.replace(/\s+/g, ' ');

    // Match Group Merging: e.g. (GroupA, GroupB).COUNT or (GroupA, GroupB).SUM
    const parenGroupRegex = /\(([^)]+)\)\.(\w+)/gi;
    expr = expr.replace(parenGroupRegex, (match, groupsSubstr, property) => {
      const groups = groupsSubstr.split(',').map(g => g.trim());
      return runAggregation(groups, property.toUpperCase(), groupStates);
    });

    // Match Single Group Targets: e.g. GroupA.COUNT or GroupA.SUM
    const singleGroupRegex = /\b(\w+)\.(\bCOUNT\b|\bSUM\b)/gi;
    expr = expr.replace(singleGroupRegex, (match, group, property) => {
      return runAggregation([group], property.toUpperCase(), groupStates);
    });

    // Match Element Specific Values: e.g. custom_id.VALUE
    const valueRegex = /\b(\w+)\.\bVALUE\b/gi;
    expr = expr.replace(valueRegex, (match, elementId) => {
      // Bypass standard boolean literal structures
      if (["TRUE", "FALSE"].includes(elementId.toUpperCase())) return match;

      const element = document.getElementById(elementId);
      if (!element) {
        throw new Error(`Element reference custom ID "${elementId}" could not be found on the page.`);
      }

      if (element.type === "checkbox") {
        return element.checked ? "1" : "0";
      } else {
        const val = parseFloat(element.value);
        return isNaN(val) ? "0" : val.toString();
      }
    });

    // Translate structural comparison and conditional keywords to JS expressions
    expr = expr.replace(/\bAND\b/gi, '&&');
    expr = expr.replace(/\bOR\b/gi, '||');
    expr = expr.replace(/\bNOT\b/gi, '!');
    expr = expr.replace(/\bTRUE\b/gi, 'true');
    expr = expr.replace(/\bFALSE\b/gi, 'false');

    try {
      return Function(`"use strict"; return (${expr});`)();
    } catch (e) {
      throw new Error(`Malformed syntax or expressions pattern mismatch.`);
    }
  }

  function runAggregation(groups, property, groupStates) {
    let checkboxPool = [];
    let decimalPool = [];

    groups.forEach(g => {
      if (!groupStates[g]) {
        throw new Error(`Group name "${g}" does not match any registered checkbox or decimalbox groups.`);
      }
      checkboxPool = checkboxPool.concat(groupStates[g].checkboxes);
      decimalPool = decimalPool.concat(groupStates[g].decimals);
    });

    if (property === "COUNT") {
      return checkboxPool.filter(chk => chk.checked).length.toString();
    } else if (property === "SUM") {
      let numericSum = 0;
      decimalPool.forEach(db => {
        const val = parseFloat(db.value);
        if (!isNaN(val)) numericSum += val;
      });
      return numericSum.toString();
    } else {
      throw new Error(`Unknown aggregator property ".${property}". Use .COUNT or .SUM.`);
    }
  }

  // Bind change listeners to trigger calculations interactively
  checkboxes.forEach(c => c.addEventListener("change", evaluateAllRules));
  decimalboxes.forEach(d => d.addEventListener("input", evaluateAllRules));

  // Initialize live states on loading complete
  evaluateAllRules();
});
