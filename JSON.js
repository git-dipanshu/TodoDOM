document.querySelector("form").addEventListener("submit", getTodo);

let tArr = JSON.parse(localStorage.getItem("todoArr"))||[];
let fArr = JSON.parse(localStorage.getItem("favArr"))|| [];
displayTable(tArr);

function getTodo(e) {
    e.preventDefault();
    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;

    let taskObj = { taskName,taskPriority };
    tArr.push(taskObj);
    localStorage.setItem("todoArr",JSON.stringify(tArr));
     
    displayTable(tArr);

}
function displayTable(tArr){
    document.querySelector("tbody").innerText="";
    tArr.forEach(element => {
       

 let row = document.createElement("tr");


 let td1 = document.createElement("td");
 td1.innerText = element.taskName;


 let td2 = document.createElement("td");
 td2.innerText = element.taskPriority;


 let td3 = document.createElement("button");
 td3.innerText = "❤️";
 td3.addEventListener("click",function(){

    fArr.push(element);
    localStorage.setItem("favArr",JSON.stringify(fArr));
  
 })


 row.append(td1,td2,td3);
 document.querySelector("tbody").append(row)

});
 }

