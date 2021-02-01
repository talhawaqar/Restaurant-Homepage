import Logo from '../images/logo.png';

const navbar = () => {
  const nav = document.createElement('nav');
  const navbarBrand = document.createElement('a');
  const brandImage = document.createElement('img');

  const toggleButton = document.createElement('button');
  const toggleButtonSpan = document.createElement('span');

  const navUlDiv = document.createElement('div');
  const navUl = document.createElement('ul');

  const navHomeLi = document.createElement('li');
  const navHomeA = document.createElement('a');

  const navMenuLi = document.createElement('li');
  const navMenuA = document.createElement('a');

  const navContactLi = document.createElement('li');
  const navContactA = document.createElement('a');

  nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');
  navbarBrand.classList.add('navbar-brand');

  toggleButton.classList.add('navbar-toggler');
  toggleButtonSpan.classList.add('navbar-toggler-icon');

  navUlDiv.classList.add('collapse', 'navbar-collapse');
  navUl.classList.add('navbar-nav', 'mr-auto');

  navHomeLi.classList.add('nav-item', 'active');
  navHomeA.classList.add('nav-link');
  navHomeA.style.cssText = "font-size: 20px !important; cursor: pointer;";

  navMenuLi.classList.add('nav-item');
  navMenuA.classList.add('nav-link');
  navMenuA.style.cssText = "font-size: 20px !important; cursor: pointer;";

  navContactLi.classList.add('nav-item');
  navContactA.classList.add('nav-link');
  navContactA.style.cssText = "font-size: 20px !important; cursor: pointer;";

  navUlDiv.id = 'navbarSupportedContent';
  navHomeA.id = 'home';
  navMenuA.id = 'menu';
  navContactA.id = 'contact';

  toggleButton.setAttribute('data-toggle', "collapse");
  toggleButton.setAttribute('data-target', "#navbarSupportedContent");
  toggleButton.setAttribute('aria-controls', "navbarSupportedContent");
  toggleButton.setAttribute('aria-expanded', "false");
  toggleButton.setAttribute('aria-label', "Toggle navigation");
  brandImage.src = Logo;
  brandImage.style.cssText = "width:150px";
  navbarBrand.appendChild(brandImage);

  navHomeA.textContent = 'Home';
  navMenuA.textContent = 'Menu';
  navContactA.textContent = 'Contact';

  toggleButton.appendChild(toggleButtonSpan);

  navHomeLi.appendChild(navHomeA);
  navMenuLi.appendChild(navMenuA);
  navContactLi.appendChild(navContactA);

  navUl.appendChild(navHomeLi);
  navUl.appendChild(navMenuLi);
  navUl.appendChild(navContactLi);

  navUlDiv.appendChild(navUl);

  nav.appendChild(navbarBrand);
  nav.appendChild(toggleButton);
  nav.appendChild(navUlDiv);

  navHomeA.addEventListener('click', ()=>{

  });

  navMenuA.addEventListener('click', ()=> {

  });

  navContactA.addEventListener('click', ()=>{

  });
  return nav;
};

export default navbar;