$(document).ready(()=>{
    $('#recruiterCarousel').carousel({
        interval: 3000, // Change slide every 1 second
        wrap: true // Enable continuous loop
    });

    // Handle form submission
    $('#recruiterForm').submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Simulate form submission
        simulateFormSubmission();
    });

    // Function to simulate form submission
    function simulateFormSubmission() {
        // Get the form data
        var name = $('#recruiterName').val();
        var email = $('#recruiterEmail').val();
        var query = $('#recruiterQuery').val();

        // Perform any desired actions with the form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Query:', query);

        // Optionally, show a success message or close the modal
        $('#recruiterFormModal').modal('hide');
        // You can add additional actions here
    }
});
