// Sticky bar
const stickyBar = document.getElementById('stickyBar');
window.addEventListener('scroll', () => {
    stickyBar.classList.toggle('visible', window.scrollY > 400);
});

// Fade-up on scroll
const fadeEls = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
fadeEls.forEach(el => obs.observe(el));

// FAQ toggle
function toggleFaq(el) {
    el.closest('.faq-item').classList.toggle('open');
}

// Demo tabs
function switchTab(idx) {
    document.querySelectorAll('.demo-tab').forEach((t, i) => t.classList.toggle('active', i === idx));
    document.querySelectorAll('.demo-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
}

// Countdown (48h from load)
const end = Date.now() + 48 * 3600 * 1000;
function tick() {
    const diff = Math.max(0, end - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
}
tick();
setInterval(tick, 1000);