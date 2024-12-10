const boxEl = document.querySelector('#box-el');
const pEl = document.querySelector('#box-el p');
const cssInputBoxEl = document.querySelector('#css-input-box');
const cssInputPEl = document.querySelector('#css-input-p');

cssInputBoxEl.addEventListener('input', function() {
  boxEl.style.cssText = cssInputBoxEl.value;
});

cssInputPEl.addEventListener('input', function() {
    pEl.style.cssText = cssInputPEl.value;
    });