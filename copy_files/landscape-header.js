// JavaScript Document
$(document).ready(function(){
	
	$buildingup = false;
	
	$("#sliders>*").show();
	
	$("a.toggle").click(function(){
		
		if ($buildingup == false){
			
			$(this).toggleClass('open')
			$("#titlebar").fadeOut(100);
			$(this).delay(1000,function(){
				$(".village").stop().animate({left : '32%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
				$(".cloudbar").stop().animate({left : '68%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
				$(".trigger").stop().animate({left:'15%'}, {queue:false, duration:1200, easing: 'easeInQuad'});
				$buildingup = true;
			});
			$(this).delay(2500, function() {
			$(".village div").show();
			$(".cloudbar div").show();
			});
		
		}else{
			$(this).toggleClass('open')
			$(".village").stop().animate({left : '50%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
			$(".cloudbar").stop().animate({left:  '50%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
			$(".trigger").stop().animate({left:'30%'}, {queue:false, duration:1200, easing: 'easeOutQuad'});
			$(".village div").hide(500);
			$(".cloudbar div").hide(500);
			$buildingup = false;
			
			$(this).delay(2000,function(){
				$("#titlebar").fadeIn(100);
			});
			
		}
		
	});
	
	//Change background color of body
	$("a.change").click(function(){
		$('body').css('background-color','#FFF');				 
	});
	 
});