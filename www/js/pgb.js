function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}


function network()
{
		networkinfo = navigator.connection;
        navigator.notification.alert(networkinfo);
}