document.getElementById("cleanbutton").disabled = true; 
const app = document.querySelector(".app").innerHTML="Нет задач";



 function addTask (i){
    //сначала проверяем условие пустой список задач или нет
const app = document.querySelector(".app");
if( app == "" )
{

document.getElementById("cleanbutton").disabled = true; 
const app = document.querySelector(".app").innerHTML="Нет задач";

}
else{

document.getElementById("cleanbutton").disabled = false; 
const app = document.querySelector(".app").innerHTML="";

}

let totalsString = ''

    const taskinput = document.getElementById("task").value; 
    //    const app = document.querySelector(".app");
    const newTask = document.createElement("div");
   
    newTask.innerHTML=taskinput;

    
    app.appendChild(newTask);

}



let button = document.getElementById('addbutton');

button.addEventListener('click', () => {

addTask();
});
