document.getElementById('clearbutton').disabled = true;// делаем кновпку не активной


const app = document.querySelector('.app');
app.innerHTML = 'Нет задач';
document.getElementById('clearbutton');

let isEmpty = true; // переменная "нет задач"

function addTask() {
  const input = document.getElementById('task');
  const inputVal = input.value;  //берем значение из инпута
  if (app.textContent === '') { // если задач нет то кнопка заблокирована и задач нет
    document.getElementById('cleanbutton').disabled = true;
    app.textContent = 'Нет задач';
  } 
  if(isEmpty) {//чтобы при добавлении в app он каждый раз не очищался мы проверяем условие
    document.getElementById('clearbutton').disabled = false;
    app.textContent = '';
    isEmpty = false;
  }
  const newTaskElement = `<div>${inputVal} <input type="checkbox"></div>`;
  app.insertAdjacentHTML('beforeEnd', newTaskElement);
  input.value = "";
}

function clearbutton() {
    if (app.textContent !== '') {
      app.innerHTML = 'Нет задач';
      isEmpty = true;
    }
  }

let button = document.getElementById('addbutton');
button.addEventListener('click', () => {
  addTask();
});
