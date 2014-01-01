var isPhoneGapReady= false ;

function init(){
	document.addEventListener("deviceready",OnDeviceReady,false);
	var interValId= window.setInterval(function(){
		if (PhoneGap.available) {
			onDeviceReady();
		}
	}, 500);
}

function onDeviceReady() {
	window.clearInterval(intervalID);
	// set to true
	isPhoneGapReady = true;
	alert('The device is now ready');
}
// Set an onload handler to call the init function
window.onload = init;
