//with a variable
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

//without a variable
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  alert(`Hello ${prompt("What is your name?")}, nice to see you!`); //prompt EVERY time
  headingB.textContent = `Welcome ${prompt("What is your name?")}`;
};
