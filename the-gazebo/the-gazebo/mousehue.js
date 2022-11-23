$("div.bg").mousemove(function(e) {
  var X = e.pageX;
  var Y = e.pageY;
  $("div.bg").css("filter", "hue-rotate(" + (X + Y) + "deg)");
});
