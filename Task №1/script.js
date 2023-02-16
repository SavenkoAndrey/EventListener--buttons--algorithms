/* First button */ 

const hoverResult = document.querySelector('.hoverResult');
const hoverButton = document.querySelector('.hoverButton');


hoverButton.addEventListener('mouseover', () => {
  const liBlue = document.querySelector('.blue');
  const liYellow = document.querySelector('.yellow')
  liBlue.textContent += ' Hovered!';
  liYellow.textContent += ' Hovered!';
  hoverResult.appendChild(liBlue);
  hoverResult.appendChild(liYellow);
});

/* Second button */

const clickButton = document.querySelector('.clickButton');
const clickResult = document.querySelector('.clickResult');
const classesToRemove = ['six', 'two', 'three', 'four', 'one', 'five'];
const classesToAdd = ['one', 'two', 'three', 'four', 'five', 'six'];
let currentIndex = 0;

clickButton.addEventListener('click', () => {
if(currentIndex < classesToRemove.length){
  clickResult.classList.remove(classesToRemove[currentIndex])
  currentIndex++;
  console.log(clickResult) // for check  
}else if (currentIndex < (classesToRemove.length + classesToAdd.length)) {
  clickResult.classList.add(classesToAdd[currentIndex - classesToRemove.length]);
  currentIndex++;
  console.log(clickResult) // for check 
}
});
console.log(clickResult)


/* The third button */ 

const lightButton = document.querySelector('.lightButton');
const lightResult = document.querySelector('.lightResult');
const colors = ['red', 'yellow', 'green'];
let currentColorIndex = 0;

lightButton.addEventListener('click', () => {
  lightResult.textContent = colors[currentColorIndex];
  currentColorIndex++;
  if (currentColorIndex === colors.length) {
    currentColorIndex = 0;
  }
});

/* The fourth button */

const keyboardButton = document.querySelector('.keyboardButton')
const keyboardResult = document.querySelector('.keyboardResult');
let count = 0;

keyboardButton.addEventListener('keypress', () => {
  count++;
  keyboardResult.textContent = `You have pressed a key ${count} time${count === 1 ? '' : 's'}.`;
});

