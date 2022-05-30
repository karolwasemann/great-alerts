// Import stylesheets
import './style.css';
import Alert from './Alert.js';
const container = document.querySelector('.container');

const Error = new Alert('Error', 'Coś totalnie poszło nie tak');

const Warning = new Alert('Warning', 'Uważaj! To co robisz, nie jest ok!');

const Success = new Alert('Success', 'Cudownie! Działaj dalej');

const displayAlert = () => {
  setTimeout(() => {
    Error.display();
  }, 700);

  setTimeout(() => {
    Warning.display();
  }, 1200);

  setTimeout(() => {
    Success.display();
  }, 2000);
};
displayAlert();

const removeAlert = () => {
  container.addEventListener('click', (e) => {
    if (!e.target.closest('.alert')) return null;

    e.target.closest('.alert').classList.add('remove');

    setTimeout(() => {
      e.target.closest('.alert').remove();
      statusAlert();
    }, 800);
  });
};

const statusAlert = () => {
  const alerts = [Error, Warning, Success];
  if (container.childElementCount < 3) {
    const randomNumber = Math.floor(Math.random() * 3);
    const randomAlert = alerts[randomNumber];
    setTimeout(() => {
      randomAlert.display();
    }, 1200);
  }
};

removeAlert();
