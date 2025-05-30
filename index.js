document.querySelector("form").addEventListener("submit", getTodo);

function getTodo(e) {
    e.preventDefault();
    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;
    console.log(taskName, taskPriority);
    
    let taskObj = { taskName, taskPriority };
    
    displayTable(taskObj);
    // displayTable(taskName , taskPriority);
}

// function displayTable(taskName , taskPriority){
function displayTable(taskObj) {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    // td1.innerText = taskName;
    td1.innerText = taskObj.taskName;

    let td2 = document.createElement("td");
    // td2.innerText = taskPriority;
    td2.innerText = taskObj.taskPriority;

    let td3 = document.createElement("td");
    td3.innerText = "Add to fav";
    row.append(td1, td2, td3);

    document.querySelector("tbody").append(row);
}


