(function(){
    
    let catalogSection = document.querySelector('.section-catalog');
    /* функция находит элемент по классу */
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

    if (catalogSection === null) {
        return;
    }
    /* функция удаляет элементы-потомки */
    let removeChildrenItem = function(item) {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    }
    /* -------------------------------------- */
    /* функция обновляет элементы-потомки (карточки товара по признаку*/
    let updateChildren = function(item, children) {
        removeChildrenItem(item);
        for (let i = 0; i < children.length; i += 1) {
            item.appendChild(children[i]);
        }
    };

    let catalog = catalogSection.querySelector('.catalog');
    let catalogNav = catalogSection.querySelector('.catalog-nav');
    let catalogItems = catalogSection.querySelectorAll('.catalog__item');

    /* обработчик событий для catalog-nav */
    catalogNav.addEventListener('click',function(e){
        let target = e.target;
        let item = closestITemByClass(target, 'catalog-nav__btn'); /* находим кнопку по классу при помощи функции */
        // console.log(item);
        if (item === null || item.classList.contains('is-active')) {
            return;
        }
        e.preventDefault();
        let filterValue = item.getAttribute('data-filter'); /* берем атрибут, по которому происходит фильтрация */
        let previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');
        previousBtnActive.classList.remove('is-active'); /* делаем предыдущую активную кнопку неактивной */
        item.classList.add('is-active'); /* текущую кнопку делаем активной */
        // console.log(filterValue);
        if (filterValue === 'all') {
            updateChildren(catalog,catalogItems); /* если нажата кнопка all, делаем апдейт каталога */
            return;
        }
        let filteredItems = [];
        for (let i = 0; i < catalogItems.length; i += 1) {
            let current = catalogItems[i];
            /* делаем проверку, если атрибут категории совпадает с величиной filterValue */
            if (current.getAttribute('data-category') === filterValue) {
                filteredItems.push(current); /* добавляем текущий элемент в массив фильтрованных элементов */
            }
        }
        updateChildren(catalog, filteredItems); /* делаем апдейт каталога с отфильтрованными элементами */
    });
})();