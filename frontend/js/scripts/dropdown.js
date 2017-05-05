'use strict';

export function dropdown() {

    $('.dropdown-btn').on('click', function(e){
        e.preventDefault();

        let thisDropdown = $(this).siblings('.dropdown');

        $(this).addClass('active');

        thisDropdown.addClass('active');
    });

}

export function closeOutside(thisItem, activeItem, itemBtn, itemBtnClass, addBtnClass) {
    $(document).mouseup(function (e) {
        let item = $(thisItem);

        if(item.siblings(itemBtn).is(e.target) || item.siblings(itemBtn).children().is(e.target)) {
            return false;
        } else if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass(activeItem);
            $(itemBtn).removeClass(itemBtnClass).addClass(addBtnClass);
        }
    });
}