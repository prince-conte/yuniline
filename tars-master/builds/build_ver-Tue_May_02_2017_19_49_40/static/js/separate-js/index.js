$(document).ready(function() {
    
    var checkBoxSubs = 0;
        checkBoxSec = 0;

fullPopup();
    
    
$('.shop_catalog__title').equalHeights();  
    
    
jQuery(function($){
   $("#date").mask("99/99/9999");
   $("#phone").mask("(999) 999-9999");
   $("#tin").mask("99-9999999");
   $("#ssn").mask("999-99-9999");
});
    
conteReg();   
    
shopSlider();
    
centerSlider(); 
    
    
SocialShareKit.init();


slickBanner();

    
bascetIn ();
    
openAddres();
	
selectBasket();
    

$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
    });
    
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


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