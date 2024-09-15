
        // Function to send email
        function sendEmail() {
            // Collect data from form fields
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Set parameters for email template
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            // Send email using EmailJS
            email.send("service_rpn7z6j", "template_fle5rld", templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Email sent successfully!");
                }, function(error) {
                    console.log('FAILED...', error);
                    alert("Failed to send email. Please try again.");
                });
        }