const HTMLFontSizes = document.querySelector('#html-font input');
const boxFontSize = document.querySelector('#box-font input');
const inputWidth = document.querySelector('#width input');
const widthUnit = document.querySelector('#width select');
const inputHeight = document.querySelector('#height input');
const heightUnit = document.querySelector('#height select');
const bgColor = document.querySelector('#bg input');
const borderSizes = document.querySelector('#border #line-size');
const borderStyles = document.querySelector('#border #line-style');
const borderColors = document.querySelector('#border #line-color');
const box = document.querySelector('#box-el');

function updateBox() {
  if(widthUnit.value === 'rem' || heightUnit.value === 'rem') {
    HTMLFontSizes.removeAttribute('disabled');
  }else{
    HTMLFontSizes.setAttribute('disabled', true);
  }
  if(widthUnit.value === 'em' || heightUnit.value === 'em') {
    boxFontSize.removeAttribute('disabled');
  }else{
    boxFontSize.setAttribute('disabled', true);
  }
  box.style.width = inputWidth.value + widthUnit.value;
  box.style.height = inputHeight.value + heightUnit.value;
  box.style.backgroundColor = bgColor.value;
  box.style.fontSize = boxFontSize.value + 'px';
  box.style.borderWidth = borderSizes.value + 'px';
  box.style.borderStyle = borderStyles.value;
  box.style.borderColor = borderColors.value;
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
boxFontSize.addEventListener('input', updateBox);
borderSizes.addEventListener('input', updateBox);
borderStyles.addEventListener('change', updateBox);
borderColors.addEventListener('input', updateBox);