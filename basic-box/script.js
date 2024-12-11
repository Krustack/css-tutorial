const HTMLFontSizes = document.querySelector('#html-font input');
const inputWidth = document.querySelector('#width input');
const widthUnit = document.querySelector('#width select');
const inputHeight = document.querySelector('#height input');
const heightUnit = document.querySelector('#height select');
const bgColor = document.querySelector('#bg input');
const box = document.querySelector('#box-el');

function updateBox() {
  if(widthUnit.value === 'rem' || heightUnit.value === 'rem') {
    HTMLFontSizes.removeAttribute('disabled');
  }else{
    HTMLFontSizes.setAttribute('disabled', true);
  }
  box.style.width = inputWidth.value + widthUnit.value;
  box.style.height = inputHeight.value + heightUnit.value;
  box.style.backgroundColor = bgColor.value;
}
function updateHTMLFontSize() {
  document.documentElement.style.fontSize = HTMLFontSizes.value + 'px';
}

inputWidth.addEventListener('input', updateBox);
widthUnit.addEventListener('change', updateBox);
inputHeight.addEventListener('input', updateBox);
heightUnit.addEventListener('change', updateBox);
bgColor.addEventListener('input', updateBox);
HTMLFontSizes.addEventListener('input', updateHTMLFontSize);