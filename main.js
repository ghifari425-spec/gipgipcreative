const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 5) * 55}ms`; observer.observe(el); });

const nav = document.querySelector('.nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 32), { passive: true });
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', e => { const target = document.querySelector(link.getAttribute('href')); if(target){e.preventDefault(); target.scrollIntoView({behavior:'smooth'});} }));
