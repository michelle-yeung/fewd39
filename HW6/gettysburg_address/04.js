$('container').addClass('white');
$('container').on('click',function(){
	$('container').fadeIn();
	$('container').removeClass('white');	
})
$('p').hover(
	function(){
		$('p').css("background-color","yellow");
	}, function(){
		$('p').css("background-color","white");
	});
$('h2').on('click', function(){
 $('h2').fadeTo("slow",0.25);
 $('h2').css('margin-left', '+=20px');
 $('#speech').fadeTo("slow",0.5);
});