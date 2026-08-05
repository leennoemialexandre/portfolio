// Work page: category filter tabs
(function filterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.work-item');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();

// Work page: expandable rows
(function expandableRows() {
  const rows = document.querySelectorAll('.work-row');
  rows.forEach(row => {
    row.addEventListener('click', () => {
      const item = row.closest('.work-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.work-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Auto-open if URL has a matching hash (e.g. work.html#tafia)
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const target = document.getElementById(hash);
    if (target && target.classList.contains('work-item')) {
      target.classList.add('open');
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }
})();

// Chip tooltip keyboard accessibility
(function chipAccessibility() {
  document.querySelectorAll('.chip').forEach(c => {
    c.setAttribute('tabindex', '0');
    c.setAttribute('role', 'button');
    c.setAttribute('aria-label', 'Sourcing detail: ' + c.getAttribute('data-verify'));
  });
})();
