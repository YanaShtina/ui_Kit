const getTemplate = (data, placeholder) => {

  const optionİtem = data.map((item) => {
    // console.log(item)
    return ` <li class="select__item" data-type="option" data-id="${item.id}">${item.value}</li>`
  })

  const defaultPlaceholder = placeholder ?? 'placeholder не задан'
  return `<div class="select__input" data-type="input">
  <span class="select__input-text">${defaultPlaceholder}</span>
  <i class="select__input-icon fa-solid fa-chevron-down"></i>
</div>

<div class="select__dropdown">
  <ul class="select__list">
  ${optionİtem.join('')}
  </ul>
</div>`
}

const select = class Select {
  constructor(selector, options) {
    this.el = document.querySelector(selector)
    this.options = options;
    this.#render();
    this.#setup();
  }

  #render() {
    const {placeholder} = this.options;
    const {data} = this.options;
    // console.log('data', data);
    this.el.classList.add('select')
    this.el.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this) 
    this.el.addEventListener('click', this.clickHandler)
  }

  clickHandler(event) {
    const { type } = event.target.dataset

    if (type === 'input') {
      this.toggle()
    } else if (type === 'option') {
      const { id } = event.target.dataset;
      console.log(id)
    }
  }

  open() {
    this.el.classList.add('opened')
  }

  toggle() {
    this.isOpened ? 
    this.el.classList.remove('opened') :
    this.el.classList.add('opened')
  }

  get isOpened() {
    return this.el.classList.contains('opened')
  }

  close() {
    this.el.classList.remove('opened')
  }

  destroy() {
    this.el.removeEventListener('click', this.clickHandler)
  }
}

module.exports = select;