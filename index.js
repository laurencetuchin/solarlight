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

function getDeliveryDate(deliveryDays) {
	// Get the current date
	const today = new Date();
	// Calculate the delivery date by adding the delivery days to the current date
	let deliveryDate = new Date(
		today.getTime() + deliveryDays * 24 * 60 * 60 * 1000
	);
	// If the delivery date is on a weekend, adjust it to the nearest weekday
	if (deliveryDate.getDay() == 6) {
		deliveryDate.setDate(deliveryDate.getDate() + 2);
	} else if (deliveryDate.getDay() == 0) {
		deliveryDate.setDate(deliveryDate.getDate() + 1);
	}
	// Format the delivery date as "Day, Month Date"
	const options = { weekday: "long", month: "long", day: "numeric" };
	const formattedDate = deliveryDate.toLocaleDateString("en-US", options);
	// Return the formatted delivery date
	return formattedDate;
}

function setDeliveryDate() {
	const deliveryDate = getDeliveryDate(4); // assuming 4 days of delivery time
	const deliveryDateElement = document.querySelector("#delivery-date");
	deliveryDateElement.textContent = deliveryDate;
}

// Call the setDeliveryDate function as soon as the page is loaded
window.addEventListener("load", setDeliveryDate);
