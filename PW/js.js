document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const emailForm = document.getElementById('emailForm');

    // Add event listener for form submission
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission (to avoid a page reload)

        // Get the entered email value
        const emailValue = document.getElementById('mail').value;

        // Log the entered email to the console (you can modify this to send it to a server)
        console.log('Email submitted:', emailValue);
        emailForm.reset();
    });
});
