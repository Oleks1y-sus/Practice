const splide = new Splide('#testimonials-splide', {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  gap: '1rem',
  autoScroll: {
    speed: 0.8,
    pauseOnHover: true,
  },
//   arrows: false,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
});

splide.mount({ AutoScroll: window.splide?.Extensions?.AutoScroll });

document.getElementById('testimonials-prev').addEventListener('click', () => splide.go('<'));
document.getElementById('testimonials-next').addEventListener('click', () => splide.go('>'));