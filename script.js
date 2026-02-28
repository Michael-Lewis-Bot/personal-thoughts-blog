const btn = document.getElementById('themeBtn');
const saved = localStorage.getItem('blog_theme');
if (saved === 'light') document.body.classList.add('light');

if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('blog_theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();