$('.tovar-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.tovar-slider',
  dots: false,   
  centerMode: false,
  focusOnSelect: true
});

function bascetIn () {
    
    
    
    
    $('#js-subscribe label').on("click", function(){
        
        var activeMonth = $(this).data('shopin');
        
        if (activeMonth) {
        
        bascetIn = $(this).data('bascetin');
        monthId = $(this).attr('id');
        thisInput = '#' + monthId + ' input'
        if (bascetIn == 0) {
            $(this).data('bascetin', 1).attr('data-bascetin', 1)
            $(thisInput).val('1');
            total ();         
            return false
        }
        
        else if (bascetIn == 1) {
            $(this).data('bascetin', 0).attr('data-bascetin', 0)
            $(thisInput).val('0');
            total();
            return false
        }
            
          
    
        }
        
    });
}