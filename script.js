const THEME_KEY = 'portfolio-theme';

function applyTheme(theme){
  if(theme === 'light' || theme === 'dark'){
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function getPreferredTheme(){
  const stored = localStorage.getItem(THEME_KEY);
  if(stored){ return stored; }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  const btn = document.getElementById('themeToggle');
  if(btn){ btn.textContent = next === 'dark' ? '☀️' : '🌙'; }
}

document.addEventListener('DOMContentLoaded', () => {
  const initial = getPreferredTheme();
  applyTheme(initial);
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.textContent = initial === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', toggleTheme);
  }
});


