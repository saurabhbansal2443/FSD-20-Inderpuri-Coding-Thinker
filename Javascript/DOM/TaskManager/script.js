const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextArea = document.querySelector(".taskText");
const taskAdderColorContainer = document.querySelector(".priotityColors2");
const taskAdderColors = document.querySelectorAll(".color2");
const taskContainer = document.querySelector(".taskContainer");
const priorityColorContainer = document.querySelector(".priotityColors");
const deleteButton = document.getElementById("delete");
const allTaskButton = document.getElementById("all");

const lockIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path></svg>';
const unlockIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="red"><path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z"></path></svg>';

let selectedColor = "red";
let isDeleteActive = false;
let taskArray = []; // --> {task :"hello" , color :"red" , id : ""}

let localStorageTaskData = localStorage.getItem("TaskArray");

if (localStorageTaskData) {
  let parsedData = JSON.parse(localStorageTaskData);
  taskArray = parsedData;
  createTaskAndAddToUI();
}

let colorsArray = ["red", "blue", "green", "orange"];

function hideTaskAdder() {
  taskAdderContainer.classList.toggle("hide");
}
// add task button functionality
addButton.addEventListener("click", hideTaskAdder);

// Priority Colors
priorityColorContainer.addEventListener("click", function (event) {
  const targetElement = event.target;
  if (targetElement.classList[0] === "priotityColors") {
    return;
  }
  // selecting the color
  let priortyColor = targetElement.classList[1];

  let filteredTask = taskArray.filter(function (obj) {
    return obj.color == priortyColor;
  });

  createTaskAndAddToUI(filteredTask);
});
// All task button
allTaskButton.addEventListener("click", function () {
  createTaskAndAddToUI();
});
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
  // Update Local Storage
  updateLocalStorage();
  createTaskAndAddToUI();
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

// delete button Functionailty (changing the color of delete button and toggle the flag of delete)
deleteButton.addEventListener("click", function () {
  if (isDeleteActive) {
    // black
    deleteButton.setAttribute("fill", "black");
  } else {
    //red
    deleteButton.setAttribute("fill", "red");
  }
  isDeleteActive = !isDeleteActive;
});

// Create Task And task TO UI
function createTaskAndAddToUI(ticketTaskArray = taskArray) {
  taskContainer.innerHTML = "";
  ticketTaskArray.forEach(function (taskObj) {
    const { task, color, id } = taskObj;
    const ticketBox = document.createElement("div");
    ticketBox.classList.add("ticket");
    ticketBox.innerHTML = ` <div class="taskColor ${color}"></div>
        <div class="ticketTaskContainer">
          <p contentEditable="false" >${task}</p>
          <div class="lockContainer">
            ${lockIcon}
          </div>
        </div>`;

    const ticketPriorityColor = ticketBox.querySelector(".taskColor");
    const lockContainer = ticketBox.querySelector(".lockContainer");
    const ticketTaskTag = ticketBox.querySelector("p");

    let isTicketEditable = false;

    // color changing strip fuctionality
    ticketPriorityColor.addEventListener("click", function () {
      const currentColor = ticketPriorityColor.classList[1];
      const currentColorIndex = colorsArray.indexOf(currentColor);
      const nextColor =
        colorsArray[(currentColorIndex + 1) % colorsArray.length];
      // UI Layer --
      ticketPriorityColor.classList.remove(currentColor);
      ticketPriorityColor.classList.add(nextColor);
      // Data Layer --
      taskObj.color = nextColor;
      // Update Local Storage
      updateLocalStorage();
    });
    // delete functionality of ticket when delete flag is active
    ticketBox.addEventListener("dblclick", function () {
      if (!isDeleteActive) return;
      //UI Layer --> deleted the task from UI
      taskContainer.removeChild(ticketBox);
      // Data Layer --> delete Task from task array
      taskArray = taskArray.filter(function (obj) {
        return obj.id != id;
      });
      // Update Local Storage
      updateLocalStorage();
    });
    // Edit button functionality of ticker
    lockContainer.addEventListener("click", function () {
      if (isTicketEditable) {
        //lock
        lockContainer.innerHTML = lockIcon;
        // UI LAYER
        ticketTaskTag.setAttribute("contentEditable", "false");
      } else {
        //unlock
        lockContainer.innerHTML = unlockIcon;
        // UI LAYER
        ticketTaskTag.setAttribute("contentEditable", "true");
      }
      // DataLayer
      taskObj.task = ticketTaskTag.innerHTML;
      isTicketEditable = !isTicketEditable;
      // Update Local Storage
      updateLocalStorage();
    });
    taskContainer.appendChild(ticketBox);
  });
}

function updateLocalStorage() {
  localStorage.setItem("TaskArray", JSON.stringify(taskArray));
}
