//virtual page
var trackinFlg = false;
var currentColor = NaN;

var spinClassName = ".spritespin";

var defaultDisp = {'width':960, 'height':540, 'rate':1};

var unitWidth = 960;
var unitHeight = 540;

var pcStepNum = 1;
var spStepNum = 1;

var dispImageNum = 0;
var dispImage = "";
var dispFrameNum = "";
var dispRate = defaultDisp['rate'];
var dispWidth = defaultDisp['width'];
var dispHeight = defaultDisp['height'];
var pcImgPath;
var spImgPath;
var Caption;
var selectBtn;
var colorCount = 0;		//Up to 20
var pcFrameNum = 36;
var spFrameNum = 36;
var loadingNo = 5;

frameNo = loadingNo;

$(document).ready(function(){
	var nid = $('#node-id').attr('node-id');
	$.ajax({
		type: "GET",
		url: '/traer/360',  
		data:{"nid":nid},     
		success: function(data)
		{
			//var datos360 = $.parseJSON(data);					
			var datos360 = data;
			pcImgPath = datos360.pcImgPath;
			spImgPath = datos360.spImgPath;
			Caption = datos360.caption;
			selectBtn = datos360.selectBtn;
			colorCount = datos360.selectBtn.length

			for(var i = 0; i<colorCount; i++){
				if(i <= 8){
					$('#colorSelect ol').append('<li id="color0'+ (i+1) +'" class="circle"><div class="balloon"></div></li>')
				}else {
					$('#colorSelect ol').append('<li id="color'+ (i+1) +'" class="circle"><div class="balloon"></div></li>')
				}
			}

			console.log(colorCount);

			loadSpin(loadingNo);
			facadeShow(0,loadingNo);
			for(var i = 1; i<= 20; i++){
				CaptionTxt(i);
			}
			selectBtnInt(1);

			for(var i = 1; i<= 20; i++){
				var idNo = ("0"+i).slice(-2);
				fadeFunc('#color'+idNo,100);
			}

			for(var i = 1; i<= 20; i++){
				var idNo = ("0"+i).slice(-2);
				imgRead(idNo);
			}
		}
	});
});

function imgRead(idNo) {
	$('#color'+idNo).click(function() {
		if (frameNo > 0) {
				loadingNo = frameNo;
		} else {
			loadingNo = 0;
		}
		changeImage(idNo-1);
	$('.circle').removeClass('active');
	$(this).addClass('active');
		selectBtnInt(idNo);
		facadeShow(idNo-1,loadingNo);
		if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
				fadeFunc('#color'+idNo,100);
				$('#color'+idNo+' div').fadeIn(100);
		}
	});

}

function fadeFunc(IdName,FadeSpeed) {
	if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
			for(var i = 1; i<= 20; i++){
				var idNo = ("0"+i).slice(-2);
				$('#color'+idNo+' div').fadeOut(FadeSpeed);
			}
	} else {
		$(IdName).mouseover(function() {
			$(IdName+' div').fadeIn(FadeSpeed);
		});
		$(IdName).mouseout(function() {
			$(IdName+' div').fadeOut(FadeSpeed);
		});
	}
}

function CaptionTxt(No) {
	var idNo = ("0"+No).slice(-2);
	$('#color'+idNo+' div').text(Caption[No-1]);

}

function loadSpin(frameNumber) {
	var touchAble = true;

	setDispSpinData();

	$(spinClassName).spritespin({
		dispWidth		: dispWidth,
		dispHeight	: dispHeight,
		frames			: dispFrameNum,
		width				: unitWidth,
		height			: unitHeight,
		sense				: -1,
		source			: dispImage[dispImageNum],
		frame				: frameNumber,
		animate			: false,
		loop				:	false,
		frameTime		: dispFrameNum,
		touchable		: touchAble
	}).bind("onLoad", function(){
		loadSpinStage();
	}).bind("onFrame", function(){
		var data = $(this).data("spritespin");
		if (data.onDrag != true) {
			//spinStageShow(data.frame);
		} else {
			spinStageHide();
		}
		if(frameNo!=frameNumber){
		if(!trackinFlg){
			trackinFlg = true;
			//ga('send','pageview',{'page':location.pathname + '360view_use_color_' + dispImageNum,'title': $('title').text() + '-360view-color_' + dispImageNum});
		}
		}
	});
	
}

function setDispSpinData(){
	var stageWidth = $(window).width();
	if(stageWidth<960) {
		dispRate = stageWidth / defaultDisp['width'];
		dispWidth = stageWidth;
		dispHeight = defaultDisp['height'] * dispRate;
	} else {
		dispRate = defaultDisp['rate'];
		dispWidth = defaultDisp['width'];
		dispHeight = defaultDisp['height'] * dispRate;
	}

	if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		dispImage = spImgPath;
		dispFrameNum = spFrameNum;
	} else {
		dispImage = pcImgPath;
		dispFrameNum = pcFrameNum;
	}

}

function loadSpinStage() {

	$(".help").show();

	var stageWidth = $(window).width();

	if(stageWidth<960) {
		if(stageWidth<320) {
			$('body').css({'width': '320px'});
			$('#view360').css({'width': '320px'});
		} else {
			$('body').css({'width': '100%'});
			$('#view360').css({'width': '100%'});
		}
	} else {
		$('body').css({'width': '100%'});
		$('#view360').css({'width': '960px'});
	}

	var selectBtnHeight= $("#colorSelect").outerHeight();
	if(stageWidth<479) {
		if (selectBtnHeight >= 54) {
			$('.help').css({'bottom': '30%'});
		} else {
			$('.help').css({'bottom': '18%'});
		}
	} else if(stageWidth<542) {
		if (selectBtnHeight >= 54) {
			$('.help').css({'bottom': '25%'});
		} else {
			$('.help').css({'bottom': '18%'});
		}
	} else {
		$('.help').css({'bottom': '18%'});
	}
}

function facadeShow(imageNum,No) {
if($(window).width() < 960) {
	var stageWidth = $(window).width()+"px";
} else {
	var stageWidth = unitWidth+"px";
}

$(".help").hide();
$("#loading").empty();
$("#loading").hide();
$("#loading").append('<img src="'+dispImage[imageNum][No]+'" width="'+stageWidth+'" >');
$("#loading").fadeIn(10);
}

function spinStageHide() {
	$(".help").hide();
	$(".balloon").hide();
}

function resizeSpin() {
	var orgDispRate = dispRate;
	setDispSpinData();
	if (orgDispRate != dispRate) {
		$(spinClassName).spritespin("init", {source:dispImage[dispImageNum], frames:dispFrameNum, dispWidth:dispWidth, dispHeight:dispHeight});
	}
	loadSpinStage();
}

function changeImage(no) {

	if (dispImageNum != no) {
		dispImageNum = no
		$(spinClassName).spritespin("init", {source:dispImage[dispImageNum]});
		
		if(!trackinFlg){trackinFlg = true}
		//ga('send','pageview',{'page': location.pathname + '360view_use_color_' + no,'title': $('title').text() + '-360view-color_' + no});
	}

}

function getRateNumber(num) {
	return num * dispRate;
}

function selectBtnInt(no) {

	for(var i = 1; i<= 20; i++){
		var idName = ("0"+i).slice(-2);
		$("#color"+idName).css({'background-color': selectBtn[i-1]});

		var ParentWidth = $("#color"+idName).outerWidth();
		var objWidth = $("#color"+idName+" div").outerWidth();
		var centerPostion = (ParentWidth - objWidth) / 2;
		$("#color"+idName+" div").css({'left': centerPostion});

	}

	for(var i = colorCount+1; i<= 20; i++){
		var idName = ("0"+i).slice(-2);
		$("#color"+idName).css({display: 'none'});
	}

	/*for(var i = 0; i<= 20; i++){
		if (btnDisp[i] == "off") {
		var idName = ("0"+(i+1)).slice(-2);
			$("#color"+idName).css({display: 'none'});
		}
	}*/


		var selectNo = ("0"+no).slice(-2);
	//$('#color'+selectNo).css({'background-image': selectBtnOn[no-1]});

}


$(window).resize(function() {
		resizeSpin();
});

(function () {	
  var Loader = this.SpriteLoader = {};
  Loader.preload = function(images, callback){
	if (typeof (images) === "string") { images = [images]; }
	var i, data = {
	  callback : callback,
	  numLoaded: 0,
	  numImages: images.length,
	  images   : []
	};
	for (i = 0; i < images.length; i += 1 ) {
	  Loader.load(images[i], data); 
	}
  };
  Loader.load = function(imageSource, data){
	var image = new Image();
	data.images.push(image);
	image.onload = function(){
	  data.numLoaded += 1;
	  if (data.numLoaded === data.numImages) { 
		data.callback(data.images); 
	  }
	}; 
	image.src = imageSource;
  };
}());

