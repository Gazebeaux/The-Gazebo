$(document).ready(function () {
  $("div.hidden").fadeIn(1000).removeClass("hidden");
  $("img").click(function () {
    $(this).attr("src", "https://i.imgur.com/IBy5OZb.png");
   $(canvas).css("background-image", "url(" + imageUrl + ")");
      $("div.bg").mousemove(function(e) {
        var X = e.pageX;
        var Y = e.pageY;
        $("div.bdfilter").css("backdrop-filter", "hue-rotate(" + (.1 * X + Y * .1) + "deg)");
      });
  });
});
