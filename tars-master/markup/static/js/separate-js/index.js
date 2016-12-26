$(document).ready(function() {

    
centerSlider(); 
    

    
SocialShareKit.init();



slickBanner()

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

openMenu()

});
    
    
$("#closemenu_button").click(function() {   

openMenu()
});
    
$(".page").addClass('fadein')
    
});

