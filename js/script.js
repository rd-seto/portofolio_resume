document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter-text');
    const text = "Nur Muchson Rahwanda Seto";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent = text.substring(0, index + 1); // Display characters one by one
            index++;
            setTimeout(type, 250); // Adjust typing speed here
        }
    }

    type(); // Start the typing effect
});
