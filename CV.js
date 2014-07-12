
/*navigation header*/
$(document).on('scroll',function(){             
  // menu show and hidde       
  if(($(document).scrollTop()+1)>($("#principal").height())){
    $("header").removeClass("hhidden").addClass("hshowed");
  } else{
    $("header").removeClass("hshowed").addClass("hhidden");
  }
  });

/*smooth scrolling */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// gorantz igo astiro
  $(function () {
    $('.scroll-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

//parallax
$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.2)+'px');
}

/*Loading
$(window).load(function() {
  $(".loader").fadeOut("slow");
  $(window).scrollTop(0);
})*/

/*maps*/
function initialize() {
  var myLatlng = new google.maps.LatLng(47.412400, 9.743790);
  var map_options = {
    center: myLatlng,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl:false
  }
  var map = new google.maps.Map(document.getElementById('map'), map_options);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'I live here!'
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;


/*position map markers*/

$(document).ready(pos);
$(window).resize(positionMapMarkers);
function pos(){

    var classes = {
      mapClass: 'worldMap',
      mapLocationMarker: 'map-location-marker',
      markerClassPrefix: 'marker-'
    };

    var settings = {
      mapWidth: 790,
      mapHeight: 489,
      markerLeft: '',
      markerTop: ''
    };

    var ratio = settings.mapHeight/settings.mapWidth;

    // -- End properties
    positionMapMarkers();

    // -- End public methods

    function positionMapMarkers()
    {
      var s=0,
          state,
          states = ['getxo', 'austria', 'cuba', 'morocco', 'ireland'];

      var l=0,
          leftMarker,
          leftMarkers = [30, 89, 516, 559, 717];

      var t=0,
          topMarker,
          topMarkers = [2750, 2750, 2750, 2750, 2750];

      var mapWidthD = $('.' + classes.mapClass).width();
      var mapHeightD = ratio * mapWidthD;

      while(leftMarker = leftMarkers[l++], topMarker = topMarkers[t++], state = states[s++]) {
        settings.markerLeft = mapWidthD * leftMarker / settings.mapWidth;
        settings.markerTop = mapHeightD * topMarker / settings.mapHeight;

        $('.' + classes.markerClassPrefix + state).css({
          'left': settings.markerLeft + 'px',
          'top': settings.markerTop + 'px',
        });

        $('.' + classes.markerClassPrefix + state).show();
      }
    }  
}
