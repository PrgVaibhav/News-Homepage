function onToggle() {
  const navToggler = document.querySelector('.nav-toggler');
  navToggler.classList.toggle('active');
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    nav.style.maxHeight = nav.scrollHeight + 'px';
  } else {
    nav.setAttribute('style', '');
  }
}
