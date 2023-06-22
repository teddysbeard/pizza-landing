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
                console.log(node);
            }
        }
        return null;
    };
    let showPopup = function(target) {
        target.classList.add('is-active');
    }
    let closePopup = function(target) {
        target.classList.remove('is-active');
    }

    let toggleScroll = function() {
        body.classList.toggle('no-scroll')
    }
    body.addEventListener('click', function(e) {
       let target = e.target;
    //    let popupClass = target.getAttribute('data-popup');
        let popupClass = closestAttr(target, 'data-popup');
        console.log(popupClass);
        if (popupClass === null) {
            return;
        }
        else {
            e.preventDefault(); /* убираем стандартное поведение */
            let popup = document.querySelector('.' + popupClass);
            console.log('.' + popupClass);
            if (popup) {
                showPopup(popup);
                toggleScroll();
            }
            console.log(popup);
        }
    });
    // при нажатии ESC popup закрывается
    body.addEventListener('keydown', function(e) {
        // console.log(e.keyCode);
        let popup = document.querySelector('.popup.is-active');
        if (popup) {
            closePopup();
        }
    });
})();