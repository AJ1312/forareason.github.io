function unlockPage() {
    const passwordInput = document.getElementById('password');
    const imageSection = document.getElementById('image-section');
    const message = document.getElementById('message');
    
    const correctPassword = 'thala'; // Updated password

    if (passwordInput.value === correctPassword) {
        imageSection.style.display = 'block';  // Reveal the image section
        message.textContent = '';  // Clear any error message
        passwordInput.style.display = 'none'; // Hide the password input
        document.querySelector('.unlock-button').style.display = 'none'; // Hide the unlock button
    } else {
        message.textContent = 'Incorrect password. Please try again.'; // Show error message
    }
}
