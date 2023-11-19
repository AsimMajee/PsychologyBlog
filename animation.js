// animation.js

// Function to simulate typing effect
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';
    
    // Set the desired font and size
    element.style.fontFamily = 'Lexend';
    element.style.fontSize = '1.5em';

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

// Trigger the typing effect on page load
document.addEventListener('DOMContentLoaded', function () {
    const headerText = document.querySelector('.header-text');
    
    // Call the typeEffect function with the desired speed
    typeEffect(headerText, 100); // Adjust the speed as needed
});
