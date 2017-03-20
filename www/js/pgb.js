function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}


function network()
{
		alrt(Json.stringify(navigator.connection));
}