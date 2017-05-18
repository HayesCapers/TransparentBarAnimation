
$(document).ready(function(){
	$('.container').click(function(){
		toggleAnimate();
	})

	function toggleAnimate(){
		$('.bar').toggleClass('animate');
		$('.bar').removeClass('bar');
		for (let i = 1; i <= 9; i += 2){
			$('.bar' + i).delay(2000).animate({
				top: '-=300px',
				left: '+=50px'
			}, 1000);
			$('.bar' + i).delay(3000).animate({
				transform: 'rotate(90deg)'
			}, 500);
		}
		for (let i = 2; i <= 9; i += 2){
			$('.bar' + i).delay(2000).animate({
				top: '+=300px',
				left: '-=50px'
			}, 1000);
		}
	}
})