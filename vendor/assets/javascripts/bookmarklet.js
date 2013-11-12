(function() {
  var v = "1.10.2";
  
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }
  
  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
      jQuery.ajax({
        url: "http://www.savedpag.es/bookmarks",
        type: "POST",
        data: {
          url: "www.ebay.com",
          title: "EBAY",
          summary: "summary of ebay"
        },
        success: function(data) {
          showOverlay("awwyeah!");
          alert(data.id);
        }
      });
      
    })();
  }
  
  function showOverlay(message) {
    var overlay = jQuery("<div class='overlay'></div>").css({
      width: "100%",
      height: jQuery(document).height(),
      position: "absolute",
      left: 0,
      top: 0,
      display: "none",
      backgroundColor: "#333",
      opacity: 0.9,
      zIndex:10000000
    });
    if (typeof message != 'undefined') {
      var overlayText = jQuery("<span>" + message + "</span>").css({
        color: "#fff",
        fontSize: "50px",
        paddingTop: "100px",
        margin: "0 auto",
        fontFamily: "Helvetica Neue, Arial, sans-serif",
        zIndex:10000001
      });
      jQuery(overlay).prepend(overlayText);
    }
   
    jQuery("body").prepend(overlay);
    jQuery(".overlay").fadeIn(1000, function() {
      setTimeout(function() {
        jQuery(".overlay").fadeOut();  
      }, 3000);
    });
  }
  
})();

