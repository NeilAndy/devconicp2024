// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Alert on email link click
const emailLink = document.querySelector('#Email a');
emailLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default email action
    alert('Email link clicked! Feel free to send me a message.');
    window.location.href = this.href; // Redirect to email client
});
