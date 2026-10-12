const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
if (button.textContent.includes("Shop Now")) {
alert("Welcome to Furniq! Explore our furniture collection.");

} else if (button.textContent.includes("View Details")) {
    alert("product details coming soon!");

} else if (button.textContent.includes("See More Collection")) {
    alert("Discover more beautiful furniture collections!");

} else if (button.textContent.includes("View all products")) {
    alert ("Explore our furniture for this space!");

} else if (button.textContent.includes("Contact Us")){
    alert("Thank you for your interest! please contact our team.");

} else if (button.classList.contains("search-btn")) {
    alert("Search for favourite furniture!");

} else if (button.textContent.includes("Login")) {
alert("Login functionality comming soon!");

} else if (button.classList.contains("user-btn")) {
alert("Your account options are coming soon!");

} else if (button.classList.contains("menu-btn")) {
alert("Explore the Furniq navigation menu!");

} else {
    alert("Thank you for visiting Furniq!");
}
    });
});

const login = document.querySelector(".login-btn");

login.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Login functionality coming soon!");
});