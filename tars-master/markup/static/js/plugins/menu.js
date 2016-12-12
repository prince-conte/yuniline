openMenuClick = 0;

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
  
  