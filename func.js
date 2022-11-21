$("div.bg").mousemove(function(e) {
        var X = e.pageX;
        var Y = e.pageY;
        $("div.bdfilter").css("backdrop-filter", "hue-rotate(" + (.1 * X + Y * .1) + "deg)");
      });
