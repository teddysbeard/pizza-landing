(function(){
    let toggleScroll = function() {
        body.classList.toggle('no-scroll');
        console.log(`toggle-scroll ${body.classList.contains('no-scroll')}`);
    }
    let forms = document.querySelectorAll('.form-send');
    console.log(forms);
    if (forms.length === 0) {
        return;
    }
    //  'name=value&name2=value2'
    
    let serialize = function(form) {
        let items = form.querySelectorAll('input, select, textarea'); /* выделяем все элементы формы (input, select и т.д.) */
        let str = '';
        for (let i = 0; i < items.length; i += 1) {
            let item = items[i]; /* берем i-ый элемент */
            let name = item.name; /* присваиваем в переменную name значение атрибута name */
            let value = item.value; /* присваиваем в переменную value значение введенное пользователем в элемент формы */
            let separator = i === 0 ? '' : '&'; /* добавляем разделитель & для всех элементов кроме 1-го */
            if (value) {
                str += separator + name + '=' + value; /* собираем строку для посылки */
            }
        }
        return str;
    };

    /* Функция отправляет форму через Ajax*/
    let formSend = function(form) {
        // let data = 'name=value&name2=value2'
        let data = serialize(form); /* сохраняем полученную функцией serialize строку */
        console.log(data);
        // return;
        let xhr = new XMLHttpRequest(); /* объявляем новый запрос на сервер */
        let url = 'mail/mail.php';

        xhr.open('POST', url); /* указываем метод и url-адрем */
        // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() { /* функция выполнится после отправки запроса */
            console.log(xhr.response);
            let activePopup = document.querySelector('.popup.is-active');
            if (activePopup) {
                activePopup.classList.remove('is-active');
            } else {
                toggleScroll();
            }
            // console.log('done');
            // console.log(xhr.response);
            if (xhr.response === 'success') {
                document.querySelector('.popup-thanks').classList.add('is-active');
            } else {
                document.querySelector('.popup-error').classList.add('is-active');
            }
            form.reset(); /* сбрасываем поля в форме после отправки */
        };
        xhr.send(data); /* отправляем данные */
    }

    /* -------------------------- */
    for (let i = 0; i < forms.length; i += 1) {
        forms[i].addEventListener('submit', function(e){ /* слушать событий на submit */
            e.preventDefault();
            let form = e.currentTarget;
            formSend(form);
        });
    }
})();