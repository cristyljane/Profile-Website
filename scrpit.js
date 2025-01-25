document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('error-message');

    if (name === "" || email === "" || message === "") {
        errorMessage.style.display = 'block';  
    } else {
        errorMessage.style.display = 'none';  
    
        alert("Form submitted successfully!");
    }
});
