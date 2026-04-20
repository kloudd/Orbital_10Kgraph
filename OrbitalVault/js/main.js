/* ─────────────────────────────────────────────────────────
   Orbital Vault — Interactions
───────────────────────────────────────────────────────── */

// ── Navbar scroll ──────────────────────────────────────
const navbar = document.getElementById('navbar');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 20);
  lastY = y;
}, { passive: true });

// ── Mobile menu ────────────────────────────────────────
const mobileBtn  = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    mobileBtn.setAttribute('aria-expanded', String(!isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
  );
}

// ── Scroll reveal ──────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObs.observe(el);
});

// ── Stat blocks ────────────────────────────────────────
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const stats = e.target.querySelectorAll('.stat-block');
      stats.forEach((s, i) => {
        setTimeout(() => s.classList.add('visible'), i * 100);
      });
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
const statsSection = document.getElementById('stats-section');
if (statsSection) statObs.observe(statsSection);

// ── Architecture bars animation ────────────────────────
function animateBar(bar) {
  const target = parseInt(bar.dataset.target || '100', 10);
  let start = null;
  const duration = 900;
  bar.style.width = '0%';
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    bar.style.width = `${Math.round(ease * target)}%`;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const archObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.arch-bar').forEach(animateBar);
      archObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
const archSection = document.getElementById('architecture');
if (archSection) archObs.observe(archSection);

// ── Smooth scroll ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = navbar ? navbar.offsetHeight + 8 : 72;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ── Active nav link ────────────────────────────────────
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));

const activeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => {
        const active = l.getAttribute('href') === `#${e.target.id}`;
        l.classList.toggle('text-emerald-400', active);
        l.classList.toggle('text-zinc-400', !active);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => activeObs.observe(s));

// ── Sector row hover ───────────────────────────────────
document.querySelectorAll('.sector-row').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.background = 'rgba(16,185,129,0.04)';
  });
  row.addEventListener('mouseleave', () => {
    row.style.background = '';
  });
});

// ── Keyboard nav trap for mobile menu ─────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileBtn && mobileBtn.focus();
  }
});
