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
    

});
    
    
$("#closemenu_button").click(function() {   


    if (openMenuClick == 0) {
        $("div.mobile-menu").fadeIn(500);
        $("html").css('overflow' , 'hidden'); 
        openMenuClick = 1;
    }

    else {
        
        $("div.mobile-menu").fadeOut(500);
        $("html").css('overflow' , 'auto');
        openMenuClick = 0; 
        
    }
    

});
    
     
      
     
   


    
});