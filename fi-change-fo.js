 $(document).ready(function(){
	$('div.hidden').fadeIn(3000).removeClass('hidden');
	$("img").click(function(){
    $(this).fileDownload('images/pills.png');
		$(this).attr("src", "images/gazebodealt.png");
		$(this).fadeOut(5000);
	});
  });
