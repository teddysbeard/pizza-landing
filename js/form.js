(function(){
    let forms = document.querySelectorAll('.form-send');
    console.log(forms);
    if (forms.length === 0) {
        return;
    }
    /* Функция отправляет форму */
    let formSend = function(form) {
        console.log(form);
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