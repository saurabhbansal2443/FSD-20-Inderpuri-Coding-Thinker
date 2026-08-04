const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextArea = document.querySelector(".taskText");
const taskAdderColorContainer = document.querySelector(".priotityColors2");
const taskAdderColors = document.querySelectorAll(".color2");

console.log(taskAdderColors);

let selectedColor = "red";

// add task button functionality
addButton.addEventListener("click", function () {
  taskAdderContainer.classList.toggle("hide");
});

// get the task text from task Adder
// Get the color from taskAdder

taskTextArea.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key != "Enter") {
    return;
  }

  const taskText = taskTextArea.value;
  console.log(taskText);
});

// Adding EventDelegation to task adder color container to attach event listner to color container

taskAdderColorContainer.addEventListener("click", function (event) {
  const targetElement = event.target;

  if (targetElement.classList[0] === "priotityColors2") {
    return;
  }

  // selecting the color

  selectedColor = targetElement.classList[1];

  taskAdderColors.forEach(function (colorEle) {
    colorEle.classList.remove("border");
  });

  targetElement.classList.add("border");

  console.log(selectedColor);
});
