$(document).ready(function() {
    
   
    
 
$('.center').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
      
      
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '310px',
        slidesToShow: 1
      }
    }, 
      
      
      
      
    {
      breakpoint: 1800,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1
      }
    },
            
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
      
      
      
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});    
  
    
    
    

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
    
     
      
     

    
});