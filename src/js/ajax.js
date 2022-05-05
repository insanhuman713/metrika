let message = {
    load:'Загрузка',
    succes:"Спасибо! Скоро мы отправим вам выбранный продукт!",
    failure: "Что-то пошло не так",
    fill:"Введите пожалуйста все поля для заполнения"
};
let form = document.querySelector('.form__form');
let modalMessage = document.querySelector('.modal__message');
let modalForm = document.querySelector('.modal__form');

let checkInputs = ()=>{//проверка на заполненность
    let inputs = form.querySelectorAll('input');
    let result = true;
    inputs.forEach(item => {
        result = item.value && result;
    });
    if (result) return true;
    else return false;
}
let deleteInputs = () =>{//удаление значений inputs
    let inputs = form.querySelectorAll('input');
    inputs.forEach(item => {
       item.value = '';
    });
}
deleteInputs();

form.addEventListener('submit',formSend);
async function formSend(event){//асинхронная функция которая возвращает promise
         event.preventDefault();
        if(checkInputs()){//Если все поля заполнены
        let formData = new FormData(form);
        let response = await fetch('../php/server.php',{//создаю response(объект) который содержит запрос на сервер
                        method: 'POST',
                        body: formData
                        });
            if (response.ok && response.status == 200) {
                modalMessage.querySelector('.modal__title').innerHTML=message.succes;
                modalMessage.style.display = 'block';
                modalForm.style.display = 'none';
                deleteInputs(); 
                modalForm.querySelector('.warning').innerHTML='';
                //отработка яндекс метрики
                console.log("цель 'Отправка формы' отработала");
                ym(88707858,'reachGoal','form');
            }
            else if(response.ok){
                modalMessage.querySelector('.modal__title').innerHTML = massage.load;
                modalMessage.style.display = 'block';
                modalForm.style.display = 'none';
                
            }
            else{
                modalMessage.querySelector('.modal__title').innerHTML = massage.failure;
                modalMessage.style.display = 'block';
                modalForm.style.display = 'none';
            } 
        }
        else{//Если не все поля заполнены
            modalForm.querySelector('.warning').innerHTML=message.fill;
        }
        
}