$(document).ready(function() {
    
    var checkBoxSubs = 0;
        checkBoxSec = 0;

 
conteReg();   
    
shopSlider();
    
centerSlider(); 
    
    
SocialShareKit.init();


slickBanner();

    
bascetIn ();
    
openAddres();

$("#footer_smb").click(function() {
    
    $("#footer_smb_inp").trigger('click');
});
    
    
   
$("#form-check-subs").click(function() {
    
    if (checkBoxSubs == 0)
        
    {    
        $("#form-input-subs").trigger('click');
        $("#check-box-subs").addClass('active');
        checkBoxSubs = 1;
    }
    
    else
            
    {    
        $("#form-input-subs").trigger('click');
        $("#check-box-subs").removeClass('active');
        checkBoxSubs = 0;
    }
    
    
});
    
     
   
$("#form-check-sec").click(function() {
    
    if (checkBoxSec == 0)
        
        
    {    
        $("#form-input-sec").trigger('click');
        $("#check-box-sec").addClass('active');
        checkBoxSec = 1;
    }
    
    else
            
    {    
        $("#form-input-sec").trigger('click');
        $("#check-box-sec").removeClass('active');
        checkBoxSec = 0;
    }
    
    
});
    
     
$("#form-file-button").click(function() {
    
    $("#form-file-input").trigger('click');
});
    
     
$("#form-submit-button").click(function() {
    $("#form-submit-input").trigger('click');
});
    
         
$("#form-submit-mobile-button").click(function() {
    $("#form-submit-mobile-input").trigger('click');
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
    
$(".page").addClass('fadein');
    
    
  
});