var openMenuClick = 0;

function openMenu() {
    
  
    
    
    if (openMenuClick == 0) {
    
        
        $("html").css('overflow' , 'hidden');
        $("#mobilemenu").fadeIn(500);
        openMenuClick = 1;
        
}

    else {
        
        
        $("html").css('overflow' , 'auto');
        $("#mobilemenu").fadeOut(500);
        openMenuClick = 0;
        
        
    }
    
}
  
  