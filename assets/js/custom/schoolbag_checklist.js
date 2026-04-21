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

function updateChecklistStatus() {
  const result = document.getElementById('checklist-result');
  const group1Count = document.querySelectorAll('input.checklist-group1:checked').length;
  const group2Count = document.querySelectorAll('input.checklist-group2:checked').length;
  const group3Count = document.querySelectorAll('input.checklist-group3:checked').length;
  const group4Count = document.querySelectorAll('input.checklist-group4:checked').length;

  let message = `
    <ol>
      <li><span style="color: green;">請繼續保持親子運動。</span></li>
    </ol>
  `;
  if (group1Count >= 1 || group2Count >= 1 || group3Count >= 1 || group4Count >= 2) {
    message = `
      <ol>
        <li><span style="color: blue;">請繼續保持親子運動。</span></li>
        <li><span style="color: blue;">孩子可能存在姿勢問題。</span><a href="https://wa.me/85263578708" rel="noopener" target="_blank"><span> [按此預約邱忠榮物理治療首診評估] <i class="fab fa-whatsapp whatsapp-icon"></i></span> </a></li>
      </ol>
    `;
  }
  result.innerHTML = message;
}

// Attach event listener to all checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(box => {
  box.addEventListener('change', updateChecklistStatus);
});

// Run once on load
updateChecklistStatus();

function updateWeightStatus() {
  const result = document.getElementById('weight-result');
  const kidWeight = parseFloat(document.getElementById('checklist-item10-1').value);
  const bagWeight = parseFloat(document.getElementById('checklist-item10-2').value);

  let message = ``;
  if ( Number.isNaN(bagWeight) || Number.isNaN(kidWeight) ) {
    message = `
      <div style="color: green;">請輸入體重及書包重量</div>
    `;
  } else if ( bagWeight / kidWeight <= .15) {
    message = `
      <div style="color: green;">符合 15% 黃金比例</div>
    `;
  } else {
    const diff = (bagWeight - kidWeight * .15).toFixed(2);
    message = `
      <div style="color: blue;">已超過15%建議負荷 ${diff}kg，可能增加脊椎受壓風險</div>
    `;
  }
  result.innerHTML = message;
}

// Attach event listener to all checkboxes
document.querySelectorAll('.checklist-group10').forEach(box => {
  box.addEventListener('input', updateWeightStatus);
});

// Run once on load
updateWeightStatus();

