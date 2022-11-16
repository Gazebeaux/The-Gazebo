 $(document).ready(function(){
	$('div.hidden').fadeIn(3000).removeClass('hidden');
	$("img").click(function(){
		$(this).attr("src", "images/gazebodealt.png");
    $(this).fadeOut(3000, function(){
     		  $('div.bg').addClass('hue');
    		});
	});
});
