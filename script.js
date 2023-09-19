//your JS code here. If required.

let browserName = navigator.appName;

let version= navigator.appVersion ;

let section = document.getElementById("browser-info");
section.innerText =`You are using ${browserName} version ${version}`;