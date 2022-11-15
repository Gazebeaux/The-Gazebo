 $(document).ready(function(){
	$('div.hidden').fadeIn(3000).removeClass('hidden');
	$("img").click(function(){
                $(this).append('<embed id="embed_player" src="audio/frankensteinlearnstodance.mp3" autostart="true" hidden="true"></embed>');
		$(this).attr("src", "images/gazebodealt.png");
		$(this).fadeOut(5000);	
	});
  });