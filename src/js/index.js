window.addEventListener('DOMContentLoaded',()=>{
    let modalForm = document.querySelector('.modal__form');
    let modalMessage = document.querySelector('.modal__message');
    let product_button = document.querySelectorAll('.product__buttom');//в карточке
    let overlay = document.querySelector('.overlay');
    let closeForm = document.querySelector('.modal__close_form');
    let closeMessage = document.querySelector('.modal__close_message');
    let inputProduct = document.querySelector('.form__text-product');
    let warning = document.querySelector('.warning');

    product_button.forEach((item)=>{
        item.addEventListener('click',()=>{
               warning.textContent =''; 
               overlay.style.display = 'block';
               modalForm.style.display = 'block';
               document.body.style.overflow = "hidden";
               
               //вставляю название продукта в форму
               let textValue = item.parentElement.parentElement.querySelector('h3').textContent;
               inputProduct.value = textValue;
               
        });
    });
//для формы закрытие
    closeForm.addEventListener('click',()=>{
        overlay.style.display = 'none';
        modalForm.style.display = 'none';
        document.body.style.overflow = "visible";
        
    });
    //для закрытия сообщения
    closeMessage.addEventListener('click',()=>{
        overlay.style.display = 'none';
        modalMessage.style.display = 'none';
        document.body.style.overflow = "visible";
       
    });
});