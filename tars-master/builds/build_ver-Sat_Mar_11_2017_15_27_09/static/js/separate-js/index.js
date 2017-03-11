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
    
     
$("#form-file-button").click(function() {
    
    $("#form-file-input").trigger('click');
});


$("#registration_feedback #form-check-subs").click(function() {
    
    if (checkBoxSubs == 0)
        
    {    
        $("#registration_feedback #check-box-subs").addClass('active');
        $("#registration_feedback #form-input-subs").val('1');
        checkBoxSubs = 1;
    }
    else          
    {    
        $("#registration_feedback #check-box-subs").removeClass('active');
        $("#registration_feedback #form-input-subs").val('');
        checkBoxSubs = 0;
    }
    
    
});
    
     
   
$("#registration_feedback #form-check-sec").click(function() {
    
    if (checkBoxSec == 0)       
    {    
        $("#registration_feedback #check-box-sec").addClass('active');
        $("#registration_feedback #form-input-sec").val('1');
        checkBoxSec = 1;
    }
    
    else
            
    {    
        $("#registration_feedback #check-box-sec").removeClass('active');
        $("#registration_feedback #form-input-sec").val('');
        checkBoxSec = 0;
    }
});

//обработчик форм в лк
$("#form-submit-button").click(function() {
    $("#form-submit-input").trigger('click');
});

$("#form-submit-button_pass").click(function() {
    $("#form-submit-input_pass").trigger('click');
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