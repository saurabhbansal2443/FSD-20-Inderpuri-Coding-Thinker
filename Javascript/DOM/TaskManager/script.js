const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextArea = document.querySelector(".taskText");
const taskAdderColorContainer = document.querySelector(".priotityColors2");
const taskAdderColors = document.querySelectorAll(".color2");
const taskContainer = document.querySelector(".taskContainer");

let selectedColor = "red";
let taskArray = []; // --> {task :"hello" , color :"red" , id : ""}

function hideTaskAdder() {
  taskAdderContainer.classList.toggle("hide");
}
// add task button functionality
addButton.addEventListener("click", hideTaskAdder);

// get the task text from task Adder
taskTextArea.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key != "Enter") {
    return;
  }
  const taskText = taskTextArea.value;

  const taskObj = {
    task: taskText,
    color: selectedColor,
    id: Date.now(),
  };
  taskArray.push(taskObj);
  hideTaskAdder();
  taskTextArea.value = "";
  createTaskAndAddToUI(taskArray);
});
// Get the color from taskAdder
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
});

// Create Task And task TO UI

function createTaskAndAddToUI(taskArray) {
  taskArray.forEach(function (taskObj) {
    const { task, color, id } = taskObj;
    const ticketBox = document.createElement("div");
    ticketBox.classList.add("ticket");
    ticketBox.innerHTML = ` <div class="taskColor ${color}"></div>
        <div class="ticketTaskContainer">
          <p>${task}</p>
          <div class="lockContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                d="M6 10V20H19V10H6ZM18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM7 11H9V13H7V11ZM7 14H9V16H7V14ZM7 17H9V19H7V17Z"
              ></path>
            </svg>
          </div>
        </div>`;
    taskContainer.appendChild(ticketBox);
  });
}
