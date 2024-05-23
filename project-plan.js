document.addEventListener("DOMContentLoaded", function() {
    const planTripForm = document.querySelector("form");
    const tripDetails = document.getElementById("trip-details");

    planTripForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const startDate = this.querySelector("#start-date").value;
        const endDate = this.querySelector("#end-date").value;

        // Display planned trip details
        tripDetails.innerHTML = `
            <p>Start Date: ${startDate}</p>
            <p>End Date: ${endDate}</p>
            <p>Have a nice flight!</p>
            <!-- Display additional trip details -->
        `;
    });
});
