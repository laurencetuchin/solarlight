// Set the date we're counting down to
var countDownDate = new Date().getTime() + 10 * 60 * 1000;

// Update the countdown every second
var x = setInterval(function () {
	// Get the current time
	var now = new Date().getTime();

	// Find the distance between now and the countdown date
	var distance = countDownDate - now;

	// Calculate minutes and seconds
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the countdown timer
	document.querySelector(".countdown-timer").innerHTML =
		minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

	// If the countdown is finished, display a message
	if (distance < 0) {
		clearInterval(x);
		document.querySelector(".countdown-timer").innerHTML = "EXPIRED";
	}
}, 1000);
