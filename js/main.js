$(".skewSection.withBanner").backstretch([
	  "img/MusicWallpaperArtWallpapersPicshd.jpg",
  ], {duration: 3000, fade: 750});


(function($){
        $(window).on("load",function(){
            $(".scroll").mCustomScrollbar();
        });
})(jQuery);

$( 'audio' ).audioPlayer(
{
    classPrefix: 'audioplayer',
    strPlay: 'Play',
    strPause: 'Pause',
    strVolume: 'Volume'
});