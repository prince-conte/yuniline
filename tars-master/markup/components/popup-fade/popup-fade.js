function fullPopup() {

    var $popupMessage = $('.js-full-popup');
    var $popupMessageClose = $('.js-close-full-popup');


    $popupMessageClose.on('click', function () {
        $popupMessage.fadeOut(500);

    });

    
}