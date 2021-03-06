import './styles.css';
import menuTpl from './templates/menu-markup.hbs';
import menu from './menu.json';


// делаем разметку
const galleryMenu = document.querySelector('ul.js-menu');

const markupMenu = menuTpl(menu);
galleryMenu.insertAdjacentHTML('beforeend', markupMenu);


// делаем тему

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const STORAGE_KEY = 'light-Theme';


bodyRef.classList.add(theme.LIGHT)
themeSwitchRef.addEventListener('change', onThemeChenge);


function onThemeChenge(evt) {
  bodyRef.classList.toggle(theme.LIGHT)
  bodyRef.classList.toggle(theme.DARK)
  
  const currentTheme = bodyRef.classList.contains(theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, currentTheme);
  
}

const savedTheme = localStorage.getItem(STORAGE_KEY);
currentTheme(savedTheme)

function currentTheme(savedTheme) {
  if (savedTheme === '') {
  bodyRef.classList.add(theme.LIGHT);
}

if (savedTheme === 'false') {
  bodyRef.classList.remove(theme.LIGHT);
  bodyRef.classList.add(theme.DARK);
  themeSwitchRef.checked = true;
}
  
}

