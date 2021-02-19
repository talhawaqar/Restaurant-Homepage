import menuItem from './menuItem';
import Biryani from '../images/biryani.jpg';
import Mutton from '../images/mutton-karahi.jpeg';
import WhiteKarahi from '../images/white-karahi.jpg';

const menu = () => {
  const container = document.createElement('div');
  const row = document.createElement('div');

  container.classList.add('container');
  container.style.cssText = 'background: black;';
  row.classList.add('row');
  row.style.cssText = 'padding: 100px 0px;';
  row.appendChild(menuItem(Biryani, 'Bombai Biryani', 'Rice with layers having mouth watering tredational taste of Mumbai'));
  row.appendChild(menuItem(Mutton, 'Mutton Karahi', 'Rice with layers having mouth watering tredational taste of Mumbai'));
  row.appendChild(menuItem(WhiteKarahi, 'White Karahi', 'Rice with layers having mouth watering tredational taste of Mumbai'));

  container.appendChild(row);
  return container;
};

export default menu;
