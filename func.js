$(document).ready(function () {
  $("div.hidden").fadeIn(3000).removeClass("hidden");
  $("img").click(function () {
    $(this).attr("src", "images/gazebodealt.png");
    $(this).fadeOut(3000, function () {
      $("div.popup").removeClass("popup");
      $("div.bg").mousemove(function(e) {
        var X = e.pageX;
        var Y = e.pageY;
        $("div.bg").css("filter", "hue-rotate(" + (.1 * X + Y * .1) + "deg)");
      });
  });
});
});
