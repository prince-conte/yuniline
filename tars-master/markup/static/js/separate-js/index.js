$(document).ready(function() {
    
    var openMenuClick = 0;

$("#footer_smb").click(function() {
    
    $("#footer_smb_inp").trigger('click');
});
    
    
    
    

function openMenu() {
    
    if (openMenuClick == 0) {
    
        $("#mobile_menu").fadeIn(500);
        $("html").css('overflow' , 'hidden');
        openMenuClick = 1;
        
}

    else {
        
        $("#mobile_menu").fadeOut(500);
        $("html").css('overflow' , 'auto');
        openMenuClick = 0;
        
        
    }
    
}
    

    
    
   
$("#openmenu_button").click(function() {

    
    openMenu();
    
    
});
    
     
   
$("#closemenu_button").click(function() {
    
    openMenu();
    
});
    
     
    

    
});