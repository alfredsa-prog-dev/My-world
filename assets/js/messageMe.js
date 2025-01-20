<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Collecting form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Example action: displaying the form data in an alert
        alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

        // You can replace the alert with actual form submission logic, e.g., sending data to a server
        // Example using fetch:
        /*
        fetch('https://example.com/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */
    });
</script>
