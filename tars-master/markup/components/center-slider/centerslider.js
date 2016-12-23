function centerSlider() {  
 
$('.center').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
      
      
    {
      breakpoint: 3000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '610px',
        slidesToShow: 1
      }
    }, 
           
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
        centerPadding: '290px',
        slidesToShow: 1
      }
    },
            
    {
      breakpoint: 1600,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '220px',
        slidesToShow: 1
      }
    },
      
      
      
    {
      breakpoint: 1400,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
          
    {
      breakpoint: 1200,
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
     



