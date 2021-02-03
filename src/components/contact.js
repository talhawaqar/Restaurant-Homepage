import { constant } from "lodash";

const contact = () => {
  const container = document.createElement('div');
  const jumbotron = document.createElement('div');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  container.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center');
  jumbotron.classList.add('jumbotron', 'text-center');

  jumbotron.style.cssText = 'background: rgba(100, 200, 100, 0.7) !important;';
  container.style.cssText = 'height: 88vh; width:100%;'

  h1.innerText = 'Know more about us';
  h2.innerText = 'Contact on this email info.subway@xyz.com to get more details ';

  jumbotron.appendChild(h1);
  jumbotron.appendChild(h2);
  container.appendChild(jumbotron);
  
  return container;
};

export default contact;
