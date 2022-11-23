$(document).ready(function () {
  $("div.hidden").fadeIn(3000).removeClass("hidden");
  $("img").click(function () {
    $(this).attr("src", "https://i.imgur.com/L46DAsN.png");
    $(this).fadeOut(3000, function () {
      $("div.popup").removeClass("popup");
    });
  });
});
