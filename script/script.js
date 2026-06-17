/* 
   HEADER – scroll effect
*/
const header = document.getElementById('site-header');

function handleScroll() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* 
   MOBILE NAV – burger / close / backdrop
 */
const burgerBtn  = document.getElementById('burger-btn');
const closeBtn   = document.getElementById('mobile-nav-close');
const mobileNav  = document.getElementById('mobile-nav');
const backdrop   = document.getElementById('nav-backdrop');

function openNav() {
  mobileNav.classList.add('is-open');
  burgerBtn.classList.add('is-open');
  backdrop.classList.add('is-visible');
  document.body.classList.add('nav-open');
}

function closeNav() {
  mobileNav.classList.remove('is-open');
  burgerBtn.classList.remove('is-open');
  backdrop.classList.remove('is-visible');
  document.body.classList.remove('nav-open');
}

burgerBtn.addEventListener('click', () => {
  mobileNav.classList.contains('is-open') ? closeNav() : openNav();
});

closeBtn.addEventListener('click', closeNav);
backdrop.addEventListener('click', closeNav);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
  if (e.matches) closeNav();
});

/* 
   АНІМАЦІЯ ПРИ ПРОКРУТЦІ 
  */
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observerOptions = {
    root: null,         // відносно вікна перегляду (viewport)
    rootMargin: '0px 0px -80px 0px', // спрацьовує на 80px раніше, ніж елемент доторкнеться до низу екрана
    threshold: 0.1      // 10% елемента має з'явитися на екрані
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Додаємо клас активного стану
        entry.target.classList.add('is-visible');
        // Відписуємося від спостереження за цим елементом, щоб анімація відпрацювала лише один раз
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Запуск спостереження за кожним елементом
  revealElements.forEach(element => {
    scrollObserver.observe(element);
  });
});