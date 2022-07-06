// noconst sum = require("./modules/sum.js");
const Select = require("./modules/select.js");


const selectApp = new Select('#elemId', {
  placeholder: 'Option',
  selectedDefault: '-1',
  data: [
    {id:0, value:'option1'},
    {id:1, value:'option2'},
    {id:2, value:'option3'},
    {id:3, value:'option4'},
    {id:4, value:'option5'},
    {id:5, value:'option6'},
  ],
  onSelect(option) {
    console.log('option', option);
  }
})

window.s = selectApp;


