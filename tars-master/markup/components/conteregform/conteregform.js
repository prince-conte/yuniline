     
   

function conteReg() {

$("#contetabs").on("click", ".news-block__anons-article--conteregform", function()
                   
                   
    {
        $("#contetxt").fadeIn();
        $(".news-block__anons-article--conteregform-active").removeClass('news-block__anons-article--conteregform-active');
        $(this).toggleClass("news-block__anons-article--conteregform-active"); 

        var elementClick = $(this).attr("href")
        var destination = $('#contetxt').offset().top - 120;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    
    });


}


