$(function (){
	var $popupDialog = $('.J_Popup'),
	$moon = $('.J_Moon'),
	moonX = $moon.offset().left,
	moonY = $moon.offset().top,
	moonW = $moon.width(),
	moonY = $moon.height(),
	popupW = 580;
	popupH = 760
	
	dialogFlag = false;
	$('.J_StartBtn').on('click', function (){
		if(dialogFlag){
			return;
		}
		dialogFlag = true;
		$popupDialog.removeClass('hidden');
		$popupDialog.animate({
			height:popupH,
			width:popupW,
			left: ($('body').width() - popupW)/2,
			top: 100
		},'normal','swing',function (){

		});
	})
	
	$('.J_Close').add('.J_BtnOne').add('.J_BtnTwo').on('click', function (){
		$popupDialog.animate({
			height: 0,
			width: 0,
			left:0,
			top:0,
		},'fast','swing',function(){
			$popupDialog.addClass('hidden');
			dialogFlag = false;
		});
	})
	
	$('body').on('mousemove', function (e){
		if(dialogFlag){
			return;
		}

		$moon.css({
			left: (e.clientX - moonX)/10,
			top: -(e.clientY - moonY)/10
		})
	})
	
	$(window).resize(function (){
		$popupDialog.css({
			left: ($('body').width() - popupW)/2
		})
	})
})