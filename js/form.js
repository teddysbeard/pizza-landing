(function(){
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
            if (name) {
                str += name + '=' + value;
            }
        }
    }

    /* Функция отправляет форму через Ajax*/
    let formSend = function(form) {
        // let data = 'name=value&name2=value2'
        let data = serialize(form);
        console.log(data);
        return;
        let xhr = new XMLHttpRequest();
        let url = 'mail/mail.php';

        xhr.open('POST', url);
        // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            // console.log('done');
            console.log(xhr.response);
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