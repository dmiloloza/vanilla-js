// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value') //# is id
const buttons = document.querySelectorAll('.btn') // all button with class of btn...

//buttons is Node list, some of array methods can be used.
//for each item from node list adding event listener
buttons.forEach(button => {
  button.addEventListener('click', e => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count
  });
});
