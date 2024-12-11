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
const borderRadius = document.querySelector('#border-radius');
const radiusMode = document.querySelector('#radius-mode');
const box = document.querySelector('#box-el');

function updateRadius() {
  const radius1 = document.querySelector('#border-radius > div > div:nth-child(5) > input');
  const radius2 = document.querySelector('#border-radius > div > div:nth-child(6) > input');
  const radius3 = document.querySelector('#border-radius > div > div:nth-child(7) > input');
  const radius4 = document.querySelector('#border-radius > div > div:nth-child(8) > input');
  if(radiusMode.value === 'all') {
    box.style.borderRadius = radius1.value + 'px';
  }else if(radiusMode.value === 'y-x') {
    box.style.borderRadius = radius1.value + 'px ' + radius2.value + 'px';
  }else if(radiusMode.value === 'stand-alone') {
    box.style.borderRadius = radius1.value + 'px ' + radius2.value + 'px ' + radius3.value + 'px ' + radius4.value + 'px';
  }
  
}

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

function updateRadiusMode() {
  const p1 = document.querySelector('#border-radius > div > p:nth-child(1)');
  const p2 = document.querySelector('#border-radius > div > p:nth-child(2)');
  const p3 = document.querySelector('#border-radius > div > p:nth-child(3)');
  const p4 = document.querySelector('#border-radius > div > p:nth-child(4)');
  const input1 = document.querySelector('#border-radius > div > div:nth-child(5)');
  const input2 = document.querySelector('#border-radius > div > div:nth-child(6)');
  const input3 = document.querySelector('#border-radius > div > div:nth-child(7)');
  const input4 = document.querySelector('#border-radius > div > div:nth-child(8)');
  console.log(radiusMode.value);
  console.log(input1);
  if(radiusMode.value === 'all') {
    p1.textContent = 'radius';
    p2.textContent = '';
    p3.textContent = '';
    p4.textContent = '';
    input1.style.display = 'inline-block';
    input2.style.display = 'none';
    input3.style.display = 'none';
    input4.style.display = 'none';
  }
  if(radiusMode.value === 'y-x') {
    p1.textContent = 'y';
    p2.textContent = 'x';
    p3.textContent = '';
    p4.textContent = '';
    input1.style.display = 'inline-block';
    input2.style.display = 'inline-block';
    input3.style.display = 'none';
    input4.style.display = 'none';
  }
  if(radiusMode.value === 'stand-alone') {
    p1.textContent = 'top-left';
    p2.textContent = 'top-right';
    p3.textContent = 'bottom-right';
    p4.textContent = 'bottom-left';
    input1.style.display = 'inline-block';
    input2.style.display = 'inline-block';
    input3.style.display = 'inline-block';
    input4.style.display = 'inline-block';
  }
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
radiusMode.addEventListener('change', updateRadiusMode);
borderRadius.addEventListener('input', updateRadius);