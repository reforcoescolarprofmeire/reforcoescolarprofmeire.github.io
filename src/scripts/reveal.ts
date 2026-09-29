// Revela elementos .reveal conforme entram na tela.
// Sem suporte a IntersectionObserver ou com movimento reduzido, tudo aparece de imediato.
const elements = document.querySelectorAll<HTMLElement>('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!('IntersectionObserver' in window) || reduceMotion) {
  elements.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  elements.forEach((el) => observer.observe(el));
}
