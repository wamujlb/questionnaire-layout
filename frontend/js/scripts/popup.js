'use strict';

export function popup() {

    $('.open-popup').on('click', function(e){
        e.preventDefault();

        let thisPopup = $(this).data('popup');

        $('#' + thisPopup).addClass('active-popup');
    });

    $('.close-popup').on('click', function(e){
        e.preventDefault();

        $('.popup-wrapper').removeClass('active-popup');
    })

}