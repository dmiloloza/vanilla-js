const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const changeColor = () => {
  //Math.random()* colors.length => because color array is 4 (math.random 0-1 without 1)
  const randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
};

const buttonClick = btn.addEventListener('click', changeColor);
