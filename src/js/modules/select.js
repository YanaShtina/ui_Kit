const getTemplate = (data, placeholder, selectedDefault) => {
  let defaultPlaceholder = placeholder ?? 'placeholder не задан'
  const optionİtem = data.map((item) => {
    let cls = ''
    if (item.id == selectedDefault) {
      defaultPlaceholder = item.value;
      cls = 'selected'
    }
    return ` <li class="select__item ${cls}" data-type="option" data-id="${item.id}">${item.value}</li>`
  })

  
  return `<div class="select__input" data-type="input">
  <span class="select__input-text" data-type="value">${defaultPlaceholder}</span>
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
    this.selectedId = options.selectedDefault;
    this.#render();
    this.#setup();
  }

  #render() {
    const {placeholder} = this.options;
    const {data} = this.options;
    // console.log('data', data);
    this.el.classList.add('select')
    this.el.innerHTML = getTemplate(data, placeholder, this.selectedId );
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this) 
    this.el.addEventListener('click', this.clickHandler)
    this.value = this.el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset

    //console.log( this.value, this.el )

    if (type === 'input') {
      this.toggle()
    } else if (type === 'option') {
      const { id } = event.target.dataset;
      this.select(id)
    }


  }

  get isOpened() {
    return this.el.classList.contains('opened')
  }


  get currentOption() {
    return this.options.data.find(item => item.id == this.selectedId)
    // return this.selectedId
    // return this.options.data
    // this.options.data.forEach((item) => console.log(item.id))
  }

  open() {
    this.el.classList.add('opened')
  }

  select(id) {
    this.selectedId = id;
    console.log('this.value.textContent ' , this.selectedId, this.currentOption)
    this.value.textContent = this.currentOption.value;

    this.el.querySelectorAll(`[data-type="option"]`).forEach((el) => {
      el.classList.remove('selected');
    })

    this.close();
    this.el.querySelector(`[data-id="${id}"]`).classList.add('selected')
  }


  toggle() {
    this.isOpened ? 
    this.el.classList.remove('opened') :
    this.el.classList.add('opened')
  }



  close() {
    this.el.classList.remove('opened')
  }

  destroy() {
    this.el.removeEventListener('click', this.clickHandler);
    this.el.innerHTML = '';
  }
}

module.exports = select;