// 'use strict'

/* Ниже используется самовызывающаяся функция, которая вызывается сразу после объявления
к переменным, используемым внутри такой функции, доступа нет */
(function() {
    if (window.matchMedia('(max-width: 992px)').matches) {
        return;
    }
    let headerPage = document.querySelector('.header-page');
    window.addEventListener('scroll', function(){
        if (this.window.scrollY > 0) {
            headerPage.classList.add('is-active');
            console.log('good');
        }
        else {
            headerPage.classList.remove('is-active');
        }
    });
})();