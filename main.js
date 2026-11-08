
// Get the form element
const studentForm = document.getElementById("studentForm");

// Add submit event to the form
studentForm.addEventListener("submit", function(event) {

    // Prevent page from reloading
    event.preventDefault();

    // Get input values
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();

    // Get error message element
    const errorMessage = document.getElementById("errorMessage");

    // Validate input fields
    if (name === "" || email === "") {

        errorMessage.textContent = "Please enter both your name and email.";

    } else {

        // Display updated information
        document.getElementById("displayName").textContent = name;
        document.getElementById("displayEmail").textContent = email;

        // Clear error message
        errorMessage.textContent = "";

        // Clear form fields
        studentForm.reset();

        alert("Student information updated successfully!");
    }

});



// Get hamburger button, navigation menu and icon
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const menuIcon = document.getElementById("menuIcon");

// Toggle navigation menu
menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("hidden");

    // Change hamburger icon to close icon
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

    // Update accessibility attribute
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !isExpanded);

});

// Close menu after clicking a navigation link
const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.add("hidden");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuButton.setAttribute("aria-expanded", "false");

    });

});
