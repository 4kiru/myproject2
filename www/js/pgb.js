function init() {
	document.addEventListener("online", onlinemode, false);
    document.addEventListener("offline", offlinemode, false);
    
}

function onlinemode(){
    
    alert("urządzenie jest online");
    networkinfo = navigator.connection;
    navigator.notification.alert(networkinfo);
}

function(){
    alert("urzadzenie jest offline");
}


        
