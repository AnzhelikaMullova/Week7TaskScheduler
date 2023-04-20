document.getElementById("clearbutton").disabled = true; 
const app = document.querySelector(".app").innerHTML="Нет задач";
const newTask = document.createElement("div");
document.getElementById("clearbutton");


let totalsString = "";

 function addTask (i){
    //сначала проверяем условие пустой список задач или нет
const app = document.querySelector(".app");
if( app.textContent === "" )
{
document.getElementById("cleanbutton").disabled = true; 
app.textContent = "Нет задач";
}
else{
document.getElementById("clearbutton").disabled = false; 
app.textContent = " ";
}
    const taskinput = document.getElementById("task").value; 
    totalsString = totalsString + taskinput;
    newTask.innerHTML=totalsString;

    app.appendChild(newTask);

    //создаем чекбокс
    const newCheck = document.createElement("input");
    newCheck.setAttribute("type", "checkbox");
    app.appendChild(newCheck);


}


function clearbutton(){

    if(newTask.textContent !==""){
    newTask.innerHTML=" ";
    newCheck.innerHTML=" ";
    }
}







let button = document.getElementById('addbutton');
button.addEventListener('click', () => {
addTask();
});
