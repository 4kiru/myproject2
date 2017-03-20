function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}


function network()
{
		datainfo = navigator.connection.type;
        navigator.notification.alert(datainfo);
}