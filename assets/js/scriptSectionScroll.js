        $("nav li").click(function () {
            if ($(this).hasClass("")) {
                $("nav li").removeClass("select");
                $(this).toggleClass("select");

            }
        });

        $('.navbutton').click(function () {
            var divId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(divId).offset().top - 53
            }, 100);
        });
        
        $(window).bind('scroll', function() {
            var currentTop = $(window).scrollTop();
            var elems = $('.scrollspy');
            elems.each(function(index){
              var elemTop 	= $(this).offset().top - 150;
              var elemBottom 	= elemTop + $(this).height();
              if(currentTop >= elemTop && currentTop <= elemBottom){
                var id 		= $(this).attr('id');
                var navElem = $('a[href="#' + id+ '"]');
            navElem.parent().addClass('select').siblings().removeClass( 'select' );
              }
            })
        });