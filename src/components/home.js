const home = () => {
  const heroDiv = document.createElement('div');
  const jumbotron = document.createElement('div');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');

  h2.textContent = 'Food you always love';
  h3.textContent = 'Try our different ranges of chinese and contiental dishes';

  heroDiv.classList.add('hero', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');
  jumbotron.classList.add('jumbotron', 'text-center');
  heroDiv.style.cssText = `width: 100%; height: ${window.screen.height - 200}px;`;
  jumbotron.style.cssText = 'background-color: rgba(100, 200, 100, 0.7);';
  h2.style.cssText = 'font-size: 40px;';
  h3.style.cssText = 'font-size: 30px;';

  jumbotron.appendChild(h2);
  jumbotron.appendChild(h3);
  heroDiv.appendChild(jumbotron);
  return heroDiv;
};

export default home;
