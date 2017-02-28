



function selectShop(){
    $(".js-shop-addres-select").select2({
  placeholder: "Выберите адрес из сохраненных",
  allowClear: true
});
}



function openAddres() {
    

        
        
        
         $("#shop-addres-open").on("click", function() {

    var price = + $("#price").text();
    var itogTotal = + $("#itog-price-element").text();
          
             
             console.log(price);
             console.log(itogTotal);
    
    if (itogTotal >= price) {
        
            $("#shop-addres").fadeIn();
            selectShop();
            $(this).fadeOut();
            var elementClick = $(this).attr("href")
            var destination = $('#shop-addres').offset().top - 180;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        
}

        });   
        
    }




