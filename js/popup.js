// "use strict"

(function(){
    
    let body = document.querySelector('body');
    /* при клике на любой элемент запускается проверка, далее запускается цикл, в котором берется атрибут элемента, если он совпадает с тем атрибутом, который передается closestAttr при вызове, он возвращается, если нет - берется родитель */
    const closestAttr = function(item, attr) {
        let node = item;
        while(node) {
            let attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }
            else {
                node = node.parentElement;
                // console.log(node);
            }
        }
        return null;
    };
    /* добавляем класс is-active при открытии popup */
    let showPopup = function(target) {
        target.classList.add('is-active');
    }
    /* убираем класс is-active при закрытии popup */
    let closePopup = function(target) {
        target.classList.remove('is-active');
    }
    /*  */
    let toggleScroll = function() {
        body.classList.toggle('no-scroll');
        console.log(`toggle-scroll ${body.classList.contains('no-scroll')}`);
    }

    /* находим ближайший родительский элемент с атрибутом data-popup */
    body.addEventListener('click', function(e) {
       let target = e.target;
    //    let popupClass = target.getAttribute('data-popup');
        let popupClass = closestAttr(target, 'data-popup');
        // console.log(popupClass);
        if (popupClass === null) {
            return;
        }
        else {
            e.preventDefault(); /* убираем стандартное поведение */
            let popup = document.querySelector('.' + popupClass); /* выделяем элемент по классу */
            console.log('.' + popupClass);
            if (popup) { /* если элемент с таким классом есть, вызываем функцию showPopup и toggleScroll */
                showPopup(popup);
                toggleScroll();
            }
            // else if (body.classList.contains('no-scroll')) {
            //     toggleScroll();
            // }
            // console.log(popup);
        }
    });
    /* ------------------------------------------------------------------------ */

    // const closestITemByClass = function(item, className) {
    //     let node = item;
    //     while(node) {
    //         if (node.classList.contains(className)) {
    //             return node;
    //         }
    //     }
    //     return null;
    // };


    /* при нажатии на кнопку btn-close или вне области закрываем модалку родителя этого элемента */
    body.addEventListener('click', function(e) {
        let popup = document.querySelector('.popup.is-active'); /* выделяем активный popup */
        let target = e.target;
        if (target.classList.contains('popup-close') || /* Если среди классов элемента есть popup__btn-close или popup__inner*/
        target.classList.contains('popup__inner')) {
            // console.log(target);
            popup.classList.remove('is-active'); /* удаляем класс is-active из списка классов элемент */
            toggleScroll(); /* убираем класс no-scroll  тега body*/
        }
        // return null;
    });
    /* ------------------------------------------------------------------------ */

    /* при нажатии ESC popup закрывается */
    body.addEventListener('keydown', function(e) {
        let popup = document.querySelector('.popup.is-active')
        if (e.code !== "Escape") {
            return;
        }
        else if (popup) {
            closePopup(popup);
            toggleScroll(); /* чтобы скролл появился */
        }   
    });
    /* ---------------------------------------------- */
})();