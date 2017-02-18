



function slickBanner() {

desktopWidthSlick = Modernizr.mq('(min-width: 1200px)');

$(window).load(function () {  
    var $bannerSlickBox = $(".baner-box");
    var widthBanner = $bannerSlickBox.width();
    var heightHeader = $(".header").outerHeight();
    var bannerCo = $bannerSlickBox.offset();
    var bannerToTop = bannerCo.top;
    $bannerSlickBox.css('width' , widthBanner)
    $bannerSlickBox.css('max-width' , widthBanner)
    
    
    
   
    
    
    
if (desktopWidthSlick) {
    
    $(window).scroll(function() {
        var pageTop = $(document).scrollTop();
        var pageHeight = $(document).outerHeight();
        var heightFooter = $(".footer").outerHeight();
        var critickScroll = pageHeight - heightFooter * 2;
        
        console.log(pageTop, pageHeight)
        
        if (pageTop >= bannerToTop)
            {
                $bannerSlickBox.addClass('baner-box--fixed');
                $bannerSlickBox.css('padding-top' , heightHeader + 20)
                return false

            } 
        
        else {
                $bannerSlickBox.removeClass('baner-box--fixed');
                $bannerSlickBox.css('padding-top' , '0')
            }
        
        
                
        if (pageTop >= critickScroll)
            {
                $bannerSlickBox.removeClass('baner-box--fixed');
                $bannerSlickBox.css('padding-top' , '0')
                return false

            } 
        

    });


}

});
}





//
//
//$(window).scroll(function() {
//	/*----------------------------------
//	sticky block script by makeasite.ru
//	----------------------------------*/
//	var sb_m = 100; /* отступ сверху и снизу */
//	var mb = 800; /* высота подвала с запасом */
//	var st = $(window).scrollTop();
//	var sb = $(".baner-box");
//	var sbi = $(".baner-box .sticky-block");
//	var sb_ot = sb.offset().top;
//	var sbi_ot = sbi.offset().top;
//	var sb_h = sb.height();
// 
//	if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
//		if(st > sb_ot) {
//			var h = Math.round(st - sb_ot) + sb_m;
//			sb.css({"paddingTop" : h});
//		}
//		else {
//			sb.css({"paddingTop" : 0});
//		}
//	}
//});
//
//



