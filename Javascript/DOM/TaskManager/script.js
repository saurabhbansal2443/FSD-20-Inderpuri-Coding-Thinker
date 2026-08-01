const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextArea = document.querySelector(".taskText");

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
