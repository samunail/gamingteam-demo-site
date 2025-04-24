const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll');
      } else {
        navbar.classList.remove('navbar-scroll');
      }
    });


  // Bootstrap carousel 手動初期化（必要なら）
  document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel('#mainCarousel', {
      interval: 5000,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
  });

  const zoomElements = document.querySelectorAll('.zoom-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  zoomElements.forEach(el => observer.observe(el));
