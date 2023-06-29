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
        let items = form.querySelectorAll('input, select, textarea');
        let str = '';
        for (let i = 0; i < items.length; i += 1) {
            let item = items[i];
            let name = item.name;
            let value = item.value;
            let separator = i === 0 ? '' : '&';
            if (value) {
                str += separator + name + '=' + value;
            }
        }
        return str;
    };

    /* Функция отправляет форму через Ajax*/
    let formSend = function(form) {
        // let data = 'name=value&name2=value2'
        let data = serialize(form);
        console.log(data);
        // return;
        let xhr = new XMLHttpRequest();
        let url = 'mail/mail.php';

        xhr.open('POST', url);
        // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
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
        };
        xhr.send(data);
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