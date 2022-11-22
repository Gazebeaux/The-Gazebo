$(document).ready(function () {
  $("div.hidden").fadeIn(1500).removeClass("hidden");
  $("img").click(function () {
    $(this).attr("src", "images/gazebodealt.png");
    $("div.canvas").css("background", "url(images/pretty.png)");
      $(document).mousemove(function(e) {
        var X = e.pageX;
        var Y = e.pageY;
        $("div.bdfilter").css("backdrop-filter", "hue-rotate(" + (.1 * X + Y * .1) + "deg)");
      });
  });
});
