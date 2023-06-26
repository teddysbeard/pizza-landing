(function(){
    let body = document.querySelector('body');

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
    let scroll = function(target) {
        let targetTop = target.getBoundingClientRect().top;
        let scrollTop = window.scrollY;
        let targetOffsetTop = targetTop + scrollTop;
        /* учитываем ширину заголовка, чтобы при нажатии проскролить к началу раздела, без лишнего скролла */
        let headerOffset = document.querySelector('.header-page').clientHeight;
        window.scrollTo(0, targetOffsetTop - headerOffset);
    };
    body.addEventListener("click",function(e){
        let target = e.target;
        // let scrollToItemClass = target.getAttribute('data-scroll-to');
        let scrollToItemClass = closestAttr(target,'data-scroll-to');
        console.log(scrollToItemClass);
        if (scrollToItemClass === null) {
            return;
        }
        else {
            e.preventDefault();
            let scrollToItem = document.querySelector('.' + scrollToItemClass);
            if (scrollToItem) {
                scroll(scrollToItem);
            }
        }
    })
})();