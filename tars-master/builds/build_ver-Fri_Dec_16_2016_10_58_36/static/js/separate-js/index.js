$(document).ready(function() {
 
    var openMenuClick = 0;
   
centerSlider()  

$("#footer_smb").click(function() {
    
    $("#footer_smb_inp").trigger('click');
});
    
    

   
$("#header_region_popup").click(function() {
    openRegion();  
});
    
    
$("#header_region_close").click(function() {   
    openRegion();
});
    
      
   
$("#header_login_popup").click(function() {
    openLogin();  
});
    
    
$("#header_login_close").click(function() {   
    openLogin();
});
    

    
    
   
$("#openmenu_button").click(function() {
    openMenu();  
});
    
    
$("#closemenu_button").click(function() {   
    openMenu();
});
    
     
      
     
   


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




    
});