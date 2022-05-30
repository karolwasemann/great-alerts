// Import stylesheets
import './style.css';
import Alert from './Alert.js';

const Error = new Alert('error', 'red');
const Warning = new Alert('warning', 'yellow');

Error.display();
Warning.display();
