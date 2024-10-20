document.addEventListener("DOMContentLoaded", function () {
    // Appointment form validation
    const appointmentForm = document.querySelector(".appointment-form");
    
    appointmentForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission for validation
        
        // Get form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const doctor = document.getElementById("doctor").value;
        const appointmentType = document.getElementById("type").value;

        // Simple validation
        if (!name || !email || !date || !doctor || !appointmentType) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Email format validation (basic)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Successful booking notification
        alert("Appointment booked successfully!");

        // Optionally, you could add code here to send the form data to a server
        // using AJAX or fetch API.
        
        // Clear the form after successful submission
        appointmentForm.reset();
    });

    // FAQ toggling functionality
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Toggle the answer visibility
            const answer = this.querySelector("p");
            answer.classList.toggle("visible");

            // Change the question color when expanded
            this.querySelector("h3").classList.toggle("active");
        });
    });

    // Notification/Reminder simulation
    function sendReminder(email, date) {
        console.log(`Reminder sent to ${email} for your appointment on ${date}`);
    }

    // Optional: Simulate sending a reminder notification (for future improvements)
    const reminderButton = document.getElementById("send-reminder"); // If you add such a button
    if (reminderButton) {
        reminderButton.addEventListener("click", function () {
            const email = prompt("Enter your email to receive a reminder:");
            const date = prompt("Enter the appointment date (YYYY-MM-DD):");
            sendReminder(email, date);
        });
    }
});


