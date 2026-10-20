function copy_code(event) {
  const button = event.currentTarget;
  const code_source = button.parentElement.parentElement.querySelector('code');
  const txt = code_source.innerText;
  navigator.clipboard.writeText(txt);
  const original = button.innerHTML;
  button.innerHTML = button.dataset.success;
  button.style.color = '#28a745';
  setTimeout(() => {
    button.innerHTML = original;
    button.style.color = '#0366d6';
  }, 1500);
}