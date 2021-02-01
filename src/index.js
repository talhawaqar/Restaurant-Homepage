import './style.scss';
import 'bootstrap';
import navbar from './components/navbar';
import home from './components/home';
import menu from './components/menu';

document.body.prepend(navbar());
const content = document.getElementById('content');
// content.appendChild(home());
content.appendChild(menu());
