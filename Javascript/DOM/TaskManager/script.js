const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
// add task button functionality 
addButton.addEventListener("click", function () {
  taskAdderContainer.classList.toggle("hide");
});


// get the task text from task Adder 
// Get the color from taskAdder 