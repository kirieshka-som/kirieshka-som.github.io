function showTime() {

	document.getElementById('currenttime').innerHTML = new Date().toUTCString();

}

showTime();

setInterval(function () {

	showTime();

}, 1000);
