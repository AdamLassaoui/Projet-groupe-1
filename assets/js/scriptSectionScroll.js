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