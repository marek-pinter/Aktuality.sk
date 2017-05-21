	 $(function(){
	 	$(".hamburger").click(function(){
	 		$(".menu-side").toggleClass('open');
	 		$(".wrapper").toggleClass('open2');
	 	});

	 	$(".search").click(function(){
	 		$(this).css("padding-left","0");
	 		$(".fa-search").css({"border-radius":"0 4px 4px 0","border-left":"none"});
	 		$(".hide").hide();
	 		$(".search-width").show();
	 		$(".exit").show();
	 	});

	 	$(".exit").click(function(){
	 		$(".search").css("padding-left","50px");
	 		$(".exit").hide();
	 		$(".fa-search").css({
	 			"border-radius":"4px","border-left":" 1px solid #ddd"});
	 		$(".hide").show();
	 		$(".search-width").hide();
	 	});


	 	$('.top-right-switch').on('click',function () {

	 		var ckbox = $('.checkbox');
	 		var	bottom = $(".top-right-bottom"); 
	 		var	top = $(".top-right-top");

        	if (ckbox.is(':checked')) {
          		bottom.show();
            	top.hide();
        	} 	else {
            	bottom.hide();
            	top.show();
        	}
    });



	 	$(".btn-aktualne").click(function(e){

	 		var menu = $(".menu-dole")

	 		if ($(window).width() < 460) {
	 			e.stopPropagation();
				menu.show();
				menu.css('left', '0');
				}
				else {
					event.stopPropagation();
				   	menu.show();
				}
				    $(document).click( function(){
        			menu.hide();
    	});


	 	});

			$(window).resize(function(){
				if ($(window).width() <= 1024) {
			   		$(".top-left").prepend($(".zmena"));
					}
					else {
			 		$(".zmena2").prepend($(".zmena"));

					}
			})

});



