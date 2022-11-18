$(document).ready(function () {
  $("div.hidden").fadeIn(2000).removeClass("hidden");
  $("img").hover(function () {
    $(this).attr("src", "images/gazebodealt.png");
    $(this).fadeOut(6000, function play() {
           var audio = document.getElementById("audio");
           audio.play();
      $("div.popup").removeClass("popup");
      $("div.bg").mousemove(function(e) {
        var X = e.pageX;
        var Y = e.pageY;
        $("div.bdfilter").css("backdrop-filter", "hue-rotate(" + (.1 * X + Y * .1) + "deg)");
      });
  });
});
});
