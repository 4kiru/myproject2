function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

        document.addEventListener("online", OnlineEvent, false)
        document.addEventListener("offline", OnDeviceOffline, false)
function network()
{
		
        
        
        function OnlineEvent(){
            alert("device is online");
            networkinfo = navigator.connection;
             navigator.notification.alert(networkinfo);
        }
        
        function OnDeviceOffline(){
        alert("device is offline");
        }
}