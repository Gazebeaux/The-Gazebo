$(document).ready(function () {
  $("div.hidden").fadeIn(1500).removeClass("hidden");
  $("img").click(function () {
    $(this).attr("src", "https://i.imgur.com/mFSlehC.png");
    $("div.canvas").css("background", "url(https://i.imgur.com/FyViU1P.png)");
      $(document).mousemove(function(e) {
        var X = e.pageX;
        var Y = e.pageY;
        $("div.bdfilter").css("backdrop-filter", "hue-rotate(" + (.1 * X + Y * .1) + "deg)");
      });
  });
});
