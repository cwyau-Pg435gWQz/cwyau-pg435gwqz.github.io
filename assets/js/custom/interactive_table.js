document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject the Overlay HTML into the bottom of the body
  const overlayHTML = `
    <div id="itbl-overlay-pane" class="itbl-overlay">
      <div class="itbl-overlay-backdrop"></div>
      <div class="itbl-modal-content">
        <button class="itbl-modal-close">&times;</button>
        <div id="itbl-modal-body"></div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', overlayHTML);

  const overlay = document.getElementById('itbl-overlay-pane');
  const modalBody = document.getElementById('itbl-modal-body');
  const closeBtn = overlay.querySelector('.itbl-modal-close');
  const backdrop = overlay.querySelector('.itbl-overlay-backdrop');

  // 2. Global Event Listener for Triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.itbl-module-trigger');
    if (!trigger) return;

    e.preventDefault();
    const rawData = trigger.getAttribute('data-table');
    if (!rawData) return;

    try {
      const rows = JSON.parse(rawData);
      let contentHtml = '<div class="itbl-pane-container">';

      rows.forEach(row => {
        contentHtml += '<div class="itbl-pane-row">';
        row.cols.forEach(col => {
          const hasVideoClass = col.youtube ? 'itbl-col-video' : '';

          contentHtml += `<div class="itbl-pane-col ${hasVideoClass}">`;
          if (col.title) {
            const formattedTitle = col.title.replace(/\n/g, '<br>');
            contentHtml += `<div class="itbl-pane-title">${formattedTitle}</div>`;
          }
          if (col.descr) {
            const formattedDescr = col.descr.replace(/\n/g, '<br>');
            contentHtml += `<div class="itbl-pane-descr">${formattedDescr}</div>`;
          }

          // YouTube Logic
          if (col.youtube && col.youtube.id) {
            contentHtml += `
              <div class="itbl-video-container">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${col.youtube.id}?rel=0&controls=1&enablejsapi=1"
                  title="${col.youtube.title || 'YouTube Video'}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            `;
          }
          contentHtml += '</div>';
        });
        contentHtml += '</div>';
      });
      contentHtml += '</div>';

      modalBody.innerHTML = contentHtml;
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden'; // Stop background scroll
    } catch (err) {
      console.error("Failed to parse table data:", err);
    }
  });

  // 3. Close Logic
  const closeTableModal = () => {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';

    // IMPORTANT: Clear the innerHTML.
    // This stops the YouTube player immediately by removing the iframe from the DOM.
    modalBody.innerHTML = '';
  };

  closeBtn.addEventListener('click', closeTableModal);
  backdrop.addEventListener('click', closeTableModal);
});
