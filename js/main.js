// $(".skewSection.withBanner").backstretch([
// 	  "img/MusicWallpaperArtWallpapersPicshd.jpg",
//   ], {duration: 3000, fade: 750});


$('.artistInfoBtn').click(function(){
	$('.artistInfo').fadeOut();
	$('.artistInfo').hide();
	$('.songInfo').fadeIn();
	$('.songInfo').show();
})

$('.songInfoBtn').click(function(){
	$('.artistInfo').fadeIn();
	$('.artistInfo').show();
	$('.songInfo').fadeOut();
	$('.songInfo').hide();
})