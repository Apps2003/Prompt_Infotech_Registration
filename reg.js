document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Attach input event listeners to validate as the user types
    nameInput.addEventListener('input', validateName);
    phoneInput.addEventListener('input', validatePhone);

    // Form submission validation
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateName() {
        // Regular expression to allow only letters, spaces, and hyphens
        const nameRegex = /^[a-zA-Z\s\-]+$/;
        if (!nameRegex.test(nameInput.value)) {
            alert("Full Name should only contain letters, spaces, or hyphens.");
            nameInput.value = nameInput.value.replace(/[^a-zA-Z\s\-]/g, ''); // Remove invalid characters
        }
    }

    function validatePhone() {
        // Regular expression to allow only numbers
        const phoneRegex = /^[0-9]*$/;
        if (!phoneRegex.test(phoneInput.value)) {
            alert("Phone Number should only contain digits.");
            phoneInput.value = phoneInput.value.replace(/[^0-9]/g, ''); // Remove invalid characters
        }
    }

    function validateForm() {
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        // Basic email pattern to check if it contains "@" character
        const emailRegex = /@/;

        // Validate Full Name field
        if (nameValue === '' || !/^[a-zA-Z\s\-]+$/.test(nameValue)) {
            alert("Please enter a valid Full Name.");
            return false;
        }

        // Validate Email field
        if (emailValue === '' || !emailRegex.test(emailValue)) {
            alert("Please enter a valid email address containing '@'.");
            return false;
        }

        // Validate Phone Number field
        if (phoneValue === '' || !/^[0-9]+$/.test(phoneValue)) {
            alert("Please enter a valid Phone Number containing only digits.");
            return false;
        }

        // If all validations pass
        return true;
    }
});
