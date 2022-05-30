export default class Alert {
  constructor(type, color, text) {
    this.type = type;
    this.color = color;
    this.text = text;
    this.textContent = `
    <div
      class="
        inline-flex
        items-center
        bg-white
        leading-none
        text-red-600
        rounded-full
        p-2
        shadow
        text-teal text-sm
      "
    >
      <span
        class="
          inline-flex
          bg-${color}-600
          text-white
          rounded-full
          h-6
          px-3
          justify-center
          items-center
        "
        >${type}</span
      >
      <span class="inline-flex px-2">${text}</span>
    </div>`;
  }

  display() {
    const alertContainer = document.createElement('div');
    const container = document.querySelector('.container');
    alertContainer.classList.add('p-2', 'alert', `${this.type}`);
    alertContainer.innerHTML = this.textContent;
    container.appendChild(alertContainer);
    // console.log(alertContainer);
  }
}

// class Success extends Alert {}

// class Warning extends Alert {}

class Error extends Alert {
  constructor(type, color, text) {}
}
