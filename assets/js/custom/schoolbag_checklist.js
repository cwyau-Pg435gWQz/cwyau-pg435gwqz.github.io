const copyBtn = document.getElementById('checked-items-copy-btn');
const checkedItemsArea = document.getElementById('checked-items-area');
const checkedItemsText = document.getElementById('checked-items-text');
const weightResultArea = document.getElementById('weight-result');
const checkboxResultArea = document.getElementById('checklist-result');

const googleFormAnchor = document.getElementById('google-form');
const googleFormURL = googleFormAnchor.href;
const whatsappFormAnchor = document.getElementById('whatsapp-form');
const whatsappFormURL = whatsappFormAnchor.href;

copyBtn.addEventListener('click', () => {
    const textToCopy = checkedItemsText.innerText;

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Success Feedback
            const btnIcon = copyBtn.querySelector('i');
            const btnText = copyBtn.querySelector('span');
            const original_btnText = btnText.textContent;

            btnIcon.className = 'fa-solid fa-check';
            btnText.textContent = ' 已複製!';

            setTimeout(() => {
                btnIcon.className = 'fa-regular fa-copy';
                btnText.textContent = original_btnText;
            }, 2000);
        });
    }

  navigator.clipboard.writeText();
});

function validateNumericInput(input) {
  // 1. Remove any character that isn't a digit or a dot
  let value = input.value.replace(/[^0-9.]/g, '');

  // 2. Ensure only the first dot is kept
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('');
  }

  input.value = value;
}

function updateSchoolBagFormStatus() {
  const kidWeight = parseFloat(document.getElementById('checklist-item10-1').value);
  const bagWeight = parseFloat(document.getElementById('checklist-item10-2').value);

  const checkboxGroup1Count = document.querySelectorAll('input.checklist-group1:checked').length;
  const checkboxGroup2Count = document.querySelectorAll('input.checklist-group2:checked').length;
  const checkboxGroup3Count = document.querySelectorAll('input.checklist-group3:checked').length;
  const checkboxGroup4Count = document.querySelectorAll('input.checklist-group4:checked').length;

  const checkedBoxes = document.querySelectorAll('input.checklist:checked');
  const checkedTexts = Array.from(checkedBoxes)
                            .map(cb => {
                              const label = document.querySelector(`label[for="${cb.id}"]`);
                              return label ? label.textContent.trim() : "";
                            });

  let whatsappText = "";
  let googleFormQuery = [];
  if (!Number.isNaN(kidWeight)) {
    googleFormQuery.push("entry.2145623731=" + kidWeight);
    whatsappText += `體重: ${kidWeight}kg\n`;
  }
  if (!Number.isNaN(bagWeight)) {
    googleFormQuery.push("entry.623543962=" + bagWeight);
    whatsappText += `書包重量: ${bagWeight}kg\n`;
  }
  if (checkedTexts.length > 0) {
    const checkboxQueries = checkedTexts.map(t => "entry.1196993608=" + encodeURIComponent(t));
    googleFormQuery.push(...checkboxQueries);
    whatsappText += "以下是勾選的居家檢查項目：\n" + checkedTexts.join("\n") + "\n";
  }

  // Apply results to all links
  googleFormAnchor.href = googleFormURL + "?" + googleFormQuery.join("&");
  whatsappFormAnchor.href = whatsappFormURL + "?text=" + encodeURIComponent("你好，我想進行線上書包與脊椎健康初步評估。\n\n" + whatsappText);
  whatsappConsultation = whatsappFormURL + "?text=" + encodeURIComponent("你好，我想了解有關書包與脊椎健康的首診評估。\n\n" + whatsappText);

  // Apply result to checkedItemsArea
  if (checkedTexts.length > 0) {
    checkedItemsArea.style.display = "block";
    checkedItemsText.innerText = checkedTexts.join("\n");
  } else {
    checkedItemsArea.style.display = "none";
    checkedItemsText.innerText = "";
  }

  // Apply result to checkboxResultArea
  let message = `
    <ol>
      <li><span style="color: green;">請繼續保持親子運動。</span></li>
    </ol>
  `;
  if (checkboxGroup1Count >= 1 || checkboxGroup2Count >= 1 || checkboxGroup3Count >= 1 || checkboxGroup4Count >= 2) {
    message = `
      <ol>
        <li><span style="color: blue;">請繼續保持親子運動。</span></li>
        <li><span style="color: blue;">孩子可能存在姿勢問題。</span><a href="${whatsappConsultation}" rel="noopener" target="_blank"><span> [按此預約邱忠榮物理治療首診評估] <i class="fab fa-whatsapp whatsapp-icon"></i></span> </a></li>
      </ol>
    `;
  }
  checkboxResultArea.innerHTML = message;

  // Apply result to weightResultArea
  if ( Number.isNaN(bagWeight) || Number.isNaN(kidWeight) ) {
    message = `
      <div style="color: green;">請輸入體重及書包重量</div>
    `;
  } else if ( bagWeight / kidWeight <= .1) {
    message = `
      <div style="color: green;">符合 10% 黃金比例</div>
    `;
  } else {
    const diff = (bagWeight - kidWeight * .1).toFixed(2);
    message = `
      <div style="color: blue;">已比10%建議負荷超出 ${diff}kg，可能增加脊椎受壓風險</div>
    `;
  }
  weightResultArea.innerHTML = message;
}

// Attach event listener to all checkboxes and weight editboxes
document.querySelectorAll('.checklist-group10').forEach(box => {
  box.addEventListener('input', updateSchoolBagFormStatus);
});

document.querySelectorAll('input[type="checkbox"]').forEach(box => {
  box.addEventListener('change', updateSchoolBagFormStatus);
});

// Run once on load
updateSchoolBagFormStatus();
