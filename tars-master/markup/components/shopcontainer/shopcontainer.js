
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

//
//
//function total () {
//    
//    var total = 0; 
//    
//    monthMoney_1 = parseInt($('#js-month1 input').val())
//    monthMoney_2 = parseInt($('#js-month2 input').val())
//    monthMoney_3 = parseInt($('#js-month3 input').val())
//    monthMoney_4 = parseInt($('#js-month4 input').val())
//    monthMoney_5 = parseInt($('#js-month5 input').val())
//    monthMoney_6 = parseInt($('#js-month6 input').val())
//    monthMoney_7 = parseInt($('#js-month7 input').val())
//    monthMoney_8 = parseInt($('#js-month8 input').val())
//    monthMoney_9 = parseInt($('#js-month9 input').val())
//    monthMoney_10 = parseInt($('#js-month10 input').val())
//    monthMoney_11 = parseInt($('#js-month11 input').val())
//    monthMoney_12 = parseInt($('#js-month12 input').val())
//    
//    
//    
//    total = monthMoney_1 + monthMoney_2 + monthMoney_3 + monthMoney_4 + monthMoney_5 + monthMoney_6 + monthMoney_7 + monthMoney_8 + monthMoney_9 + monthMoney_10 + monthMoney_11 + monthMoney_12
//    alert(total);
//    
//} 
//



function total(){
   var total=0;
   var itogTotalPrice;
   var price = $('#price').html();
    
   $("#js-subscribe label input").each(function(){
      total=total+parseInt($(this).val())
   });
    
   itogTotalPrice = total * price; 
    
    
    $('#itog-price-element').text(itogTotalPrice.toFixed(2));

    
   return total;
}


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