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

jQuery(document).ready(function(){
	var nid = jQuery('#detalle-modelo-renovado').attr('node-id');
	jQuery.ajax({
		type: "GET",
		url: '/traer/360',  
		data:{"nid":nid},     
		success: function(data)
		{
			//var datos360 = jQuery.parseJSON(data);					
			var datos360 = JSON.parse(data);
			pcImgPath = datos360.pcImgPath;
			spImgPath = datos360.spImgPath;
			Caption = datos360.caption;
			selectBtn = datos360.selectBtn;
			colorCount = datos360.selectBtn.length

			for(var i = 0; i<colorCount; i++){
				if(i <= 8){
					jQuery('#colorSelect ol').append('<li id="color0'+ (i+1) +'" class="circle"><div class="balloon"></div></li>')
				}else {
					jQuery('#colorSelect ol').append('<li id="color'+ (i+1) +'" class="circle"><div class="balloon"></div></li>')
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
	jQuery('#color'+idNo).click(function() {
		if (frameNo > 0) {
				loadingNo = frameNo;
		} else {
			loadingNo = 0;
		}

		console.log("imgRead"+"--"+loadingNo+"--"+frameNo);
		changeImage(idNo-1);
		jQuery('.circle').removeClass('active');
		jQuery(this).addClass('active');
		selectBtnInt(idNo);
		facadeShow(idNo-1,loadingNo);
		if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
				fadeFunc('#color'+idNo,100);
				jQuery('#color'+idNo+' div').fadeIn(100);
		}
	});

}

function fadeFunc(IdName,FadeSpeed) {
	if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
			for(var i = 1; i<= 20; i++){
				var idNo = ("0"+i).slice(-2);
				jQuery('#color'+idNo+' div').fadeOut(FadeSpeed);
			}
	} else {
		jQuery(IdName).mouseover(function() {
			jQuery(IdName+' div').fadeIn(FadeSpeed);
		});
		jQuery(IdName).mouseout(function() {
			jQuery(IdName+' div').fadeOut(FadeSpeed);
		});
	}
}

function CaptionTxt(No) {
	var idNo = ("0"+No).slice(-2);
	jQuery('#color'+idNo+' div').text(Caption[No-1]);

}

function loadSpin(frameNumber) {
	var touchAble = true;

	setDispSpinData();

	jQuery(spinClassName).spritespin({
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
		var data = jQuery(this).data("spritespin");
		if (data.onDrag != true) {
			//spinStageShow(data.frame);
		} else {
			spinStageHide();
		}
		if(frameNo!=frameNumber){
		if(!trackinFlg){
			trackinFlg = true;
			//ga('send','pageview',{'page':location.pathname + '360view_use_color_' + dispImageNum,'title': jQuery('title').text() + '-360view-color_' + dispImageNum});
		}
		}
	});
	
}

function setDispSpinData(){
	var stageWidth = jQuery(window).width();
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

	jQuery(".help").show();

	var stageWidth = jQuery(window).width();

	if(stageWidth<960) {
		if(stageWidth<320) {
			jQuery('body').css({'width': '100%'});
			jQuery('#view360').css({'width': '100%'});
		} else {
			jQuery('body').css({'width': '100%'});
			jQuery('#view360').css({'width': '100%'});
		}
	} else {
		jQuery('body').css({'width': '100%'});
		jQuery('#view360').css({'width': '100%'});
	}

	var selectBtnHeight= jQuery("#colorSelect").outerHeight();
	if(stageWidth<479) {
		if (selectBtnHeight >= 54) {
			jQuery('.help').css({'bottom': '30%'});
		} else {
			jQuery('.help').css({'bottom': '18%'});
		}
	} else if(stageWidth<542) {
		if (selectBtnHeight >= 54) {
			jQuery('.help').css({'bottom': '25%'});
		} else {
			jQuery('.help').css({'bottom': '18%'});
		}
	} else {
		jQuery('.help').css({'bottom': '18%'});
	}
}

function facadeShow(imageNum,No) {
if(jQuery(window).width() < 960) {
	var stageWidth = jQuery(window).width()+"px";
} else {
	var stageWidth = unitWidth+"px";
}

jQuery(".help").hide();
jQuery("#loading").empty();
jQuery("#loading").hide();
jQuery("#loading").append('<img src="'+dispImage[imageNum][No]+'" width="'+stageWidth+'" >');
jQuery("#loading").fadeIn(10);
}

function spinStageHide() {
	jQuery(".help").hide();
	jQuery(".balloon").hide();
}

function resizeSpin() {
	var orgDispRate = dispRate;
	setDispSpinData();
	if (orgDispRate != dispRate) {
		jQuery(spinClassName).spritespin("init", {source:dispImage[dispImageNum], frames:dispFrameNum, dispWidth:dispWidth, dispHeight:dispHeight});
	}
	loadSpinStage();
}

function changeImage(no) {
	
	if (dispImageNum != no) {
		console.log("changeImage"+"---"+dispImageNum+"--"+no);
		dispImageNum = no;
		jQuery(spinClassName).spritespin("init", {source:dispImage[dispImageNum]});
		
		if(!trackinFlg){trackinFlg = true}
		//ga('send','pageview',{'page': location.pathname + '360view_use_color_' + no,'title': jQuery('title').text() + '-360view-color_' + no});
	}

}

function getRateNumber(num) {
	return num * dispRate;
}

function selectBtnInt(no) {
	console.log("selectBtnInt"+"--"+no);
	for(var i = 1; i<= 20; i++){
		var idName = ("0"+i).slice(-2);
		jQuery("#color"+idName).css({'background-color': selectBtn[i-1]});

		var ParentWidth = jQuery("#color"+idName).outerWidth();
		var objWidth = jQuery("#color"+idName+" div").outerWidth();
		var centerPostion = (ParentWidth - objWidth) / 2;
		jQuery("#color"+idName+" div").css({'left': centerPostion});

	}

	for(var i = colorCount+1; i<= 20; i++){
		var idName = ("0"+i).slice(-2);
		jQuery("#color"+idName).css({display: 'none'});
	}

	/*for(var i = 0; i<= 20; i++){
		if (btnDisp[i] == "off") {
		var idName = ("0"+(i+1)).slice(-2);
			jQuery("#color"+idName).css({display: 'none'});
		}
	}*/


		var selectNo = ("0"+no).slice(-2);
	//jQuery('#color'+selectNo).css({'background-image': selectBtnOn[no-1]});

}


jQuery(window).resize(function() {
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
