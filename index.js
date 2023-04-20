document.getElementById("clearbutton").disabled = true; 
const app = document.querySelector(".app").innerHTML="Нет задач";
const newTask = document.createElement("div");



 function addTask (i){
    //сначала проверяем условие пустой список задач или нет
const app = document.querySelector(".app");
if( app == "" )
{

document.getElementById("cleanbutton").disabled = true; 
const app = document.querySelector(".app").innerHTML="Нет задач";

}
else{

document.getElementById("clearbutton").disabled = false; 
const app = document.querySelector(".app").innerHTML="";

}

let totalsString = ''






for(i=0; i<10 ; i++){
    const taskinput = document.getElementById("task").value; 
    //    const app = document.querySelector(".app");
   
   
    newTask.innerHTML=taskinput;

    
    app.appendChild(newTask);

}
 }


function clearbutton(){
    
    if(newTask == !""){
         newTask.remove();
    
    }

}





let button = document.getElementById('addbutton');

button.addEventListener('click', () => {

addTask();
});
