import './style.scss';
import 'bootstrap';
import navbar from './components/navbar';
import home from './components/home';

document.body.prepend(navbar());
const content = document.getElementById('content');
content.appendChild(home());
