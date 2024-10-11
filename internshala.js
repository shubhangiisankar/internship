// Ensure DOM elements are loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth Scroll Functionality for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetElement = document.getElementById(targetId); // Find the target element by ID
            
            if (targetElement) { // Ensure the target element exists
                targetElement.scrollIntoView({
                    behavior: 'smooth',  // Smooth scrolling
                    block: 'start'
                });
            }
        });
    });

    // Hero Section Text Animation
    const animatedText = document.querySelector('.animated-text'); // Select the element with class .animated-text
    let textArray = ["Breathtaking Drama", "Epic Love Story", "Greek Mythology Reimagined"]; // Text to rotate
    let textIndex = 0;

    function changeText() {
        if (animatedText) {  // Check if element exists
            animatedText.textContent = textArray[textIndex]; // Update the text content
            textIndex = (textIndex + 1) % textArray.length; // Move to the next text, loop back at the end
        }
    }

    // Change text every 3 seconds
    setInterval(changeText, 3000); // Call changeText function every 3 seconds

    // Call-to-Action Button Interaction
    const ctaButton = document.querySelector('.cta-button'); // Select the button with class .cta-button
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Get ready to dive deeper into Lore Olympus!');
            window.location.href = '#read'; // Scroll to #read section when button is clicked
        });
    }

});
