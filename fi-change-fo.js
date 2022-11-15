 $(document).ready(function(){
	$('div.hidden').fadeIn(3000).removeClass('hidden');
	$("img").click(function(){
		$(this).attr("src", "images/gazebodealt.png");
		$(this).fadeOut(5000);
    $(this).fileDownload('https://i.imgur.com/jXYlrtq.png');
	});
  });
