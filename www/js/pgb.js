function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
    document.addEventListener("deviceready", onlinemode, false);
}

function onlinemode(){
    alert("urządzenie jest online");
    networkinfo = navigator.connection;
    navigator.notification.alert(networkinfo);
}

        
