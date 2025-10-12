// Burger menu: toggle 'is-open' on nav container
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const menuLinks = document.querySelectorAll('#primary-menu a');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    const newExpanded = !expanded;

    console.log(
      'Toggle clicked. Current expanded:',
      expanded,
      'New expanded:',
      newExpanded
    );

    toggle.setAttribute('aria-expanded', String(newExpanded));
    toggle.setAttribute(
      'aria-label',
      newExpanded ? 'Закрити меню' : 'Відкрити меню'
    );
    nav.classList.toggle('is-open', newExpanded);

    // Debug: check which icons are visible
    const burgerIcon = toggle.querySelector('.icon-burger');
    const xIcon = toggle.querySelector('.icon-x');
    console.log(
      'Burger icon display:',
      window.getComputedStyle(burgerIcon).display
    );
    console.log('X icon display:', window.getComputedStyle(xIcon).display);
  });

  menuLinks.forEach(link =>
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Відкрити меню');
      nav.classList.remove('is-open');
    })
  );

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Відкрити меню');
      nav.classList.remove('is-open');
    }
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
