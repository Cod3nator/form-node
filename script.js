document.getElementById("myForm").addEventListener("submit", function (event) {
    // Prevent the form from submitting and page refresh
    event.preventDefault();

    // Validate name
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }

    // Validate number
    const numberInput = document.getElementById("number");
    const numberError = document.getElementById("numberError");
    if (!/^\d{10}$/.test(numberInput.value)) {
        numberError.textContent = "Please enter a 10-digit number";
    } else {
        numberError.textContent = "";
    }

    // Validate email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address";
    } else {
        emailError.textContent = "";
    }

    // If all fields are valid, you can submit the form
    if (nameError.textContent === "" && numberError.textContent === "" && emailError.textContent === "") {
        alert("Form submitted successfully!");
    }
});
