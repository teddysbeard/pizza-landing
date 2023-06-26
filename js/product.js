(function(){
    let catalog = document.querySelector('.catalog');
    const closestITemByClass = function(item, className) {
        let node = item;
        while(node) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };
    if (catalog === null) {
        return;
    }

    const changeProductSize = function(target) {
        // console.log(target);
        let product = closestITemByClass(target, 'product');
        // console.log(product);
        let previousBtnActive = product.querySelector('.product__size.is-active');
        previousBtnActive.classList.remove('is-active'); /* убираем у предыдущей кнопки класс is-active */
        target.classList.add('is-active'); /* добавляем текущей кнопке класс is-active */

    }
    const changeProductOrderInfo = function(target) {
        /* Берем значения (заголовок, размер, цена, изображение у ближайшего к target родительского элементам с классом product) */
        let product = closestITemByClass(target, 'product');
        let productTitle = product.querySelector('.product__title').textContent;
        let productSize = product.querySelector('.product__size.is-active').textContent;
        let productPriceValue = product.querySelector('.product-price__value').textContent;
        let productImgSrc = product.querySelector('.product__image').getAttribute('src');
        console.log(productTitle);
        console.log(productSize);
        console.log(productPriceValue);
        // console.log(productImgSrc);
        /* формируем информацию о выбранном для заказа продукте */
        let order = document.querySelector('.popup-order');
        /* в скрытые поля формы устанавливаем значения атрибутов (нужно для последующей отправки формы*/
        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-size').setAttribute('value', productSize);
        order.querySelector('.order-info-price').setAttribute('value', productPriceValue);
        /* ------------------------------------------------------------------------------ */
        /* в popup-order меняем информацию в соответствии с тем, на какой товар кликнули */
        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order__size').textContent = productSize;
        order.querySelector('.order-product-price').textContent = productPriceValue;
        order.querySelector('.order__img').setAttribute('src', productImgSrc);
        /* ------------------------------------------------------------------------------ */
    }
    catalog.addEventListener('click',function(e) {
       let target = e.target;
       if (target.classList.contains('product__size') && !target.classList.contains('is-active')) {
        console.log(target);    
        e.preventDefault();
            changeProductSize(target);
       }
       if (target.classList.contains('product__btn')) {
        e.preventDefault();
        changeProductOrderInfo(target);
       }
    });
})();