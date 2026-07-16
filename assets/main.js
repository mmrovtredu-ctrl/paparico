// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Revelar ao rolar
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('show'), (i % 4) * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('show'));
}

// Filtro de produtos (página Produtos)
const chips = document.querySelectorAll('.chip');
const products = document.querySelectorAll('[data-cat]');
if (chips.length && products.length) {
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      products.forEach(p => {
        const show = filter === 'todos' || p.dataset.cat === filter;
        p.style.display = show ? '' : 'none';
      });
    });
  });
}

// Formulário de contato -> abre WhatsApp com a mensagem
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = encodeURIComponent(form.nome.value || '');
    const pet = encodeURIComponent(form.pet ? form.pet.value : '');
    const servico = encodeURIComponent(form.servico ? form.servico.value : '');
    const msg = encodeURIComponent(form.mensagem.value || '');
    const texto = `Olá! Meu nome é ${nome}.%0APet: ${pet}%0AInteresse: ${servico}%0A%0A${msg}`;
    window.open(`https://wa.me/5522999632670?text=${texto}`, '_blank');
  });
}
