function centerSlider() {  
 
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
  
    
};    
     



