export default class Alert {
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
  static colors = {
    Error: 'red',
    Warning: 'yellow',
    Success: 'green',
  };

  getTemplate() {
    return `<span
      class="
        inline-flex
        bg-${Alert.colors[this.type]}-600
        text-white
        rounded-full
        h-6
        px-3
        justify-center
        items-center
      "
      >${this.type}</span
    >
    <span class="inline-flex px-2">${this.message}</span>`;
  }

  display() {
    const alertContainer = document.createElement('div');
    const container = document.querySelector('.container');

    alertContainer.classList.add(
      'alert',
      'm-3',
      'inline-flex',
      'items-center',
      'bg-white',
      'leading-none',
      'text-red-600',
      'rounded-full',
      'p-2',
      'shadow',
      'text-teal',
      'text-sm'
    );
    alertContainer.innerHTML = this.getTemplate();
    container.appendChild(alertContainer);
  }
}
