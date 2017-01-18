     
   
conteregClick = 0;

function openMenu() {
    if (openMenuClick == 0) {
        $("#mobileMenu").fadeIn(500);
        $("html").css('overflow' , 'hidden'); 
        openMenuClick = 1;
    }

    else {
        
        $("#mobileMenu").fadeOut(500);
        $("html").css('overflow' , 'auto');
        openMenuClick = 0;
        
        
    }
    
}
  

$("#tabs").on("click", ".mobile-menu__body-menu__item", function(){
    $(".active__sub").removeClass('active__sub'); 
	$(this).toggleClass("active__sub");
});


