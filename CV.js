/*navigation header*/
$(document).on('scroll',function(){
                
        // menu show and hidde
        
        if(($(document).scrollTop()+1)>($("#Idcontent1").height())){
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

//parallax
$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.2)+'px');
}
/*Loading*/
$(window).load(function() {
  $(".loader").fadeOut("slow");
})