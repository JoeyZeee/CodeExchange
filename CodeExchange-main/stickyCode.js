// window.onscroll = function () { myFunction() };

var currentTop = 1;
// var navbar = document.getElementById("post" + currentTop);
var navbar = document.getElementsByClassName("post" + currentTop);
var sticky = navbar[0].offsetTop;
// var navbar = document.getElementById("navbar");
// var navbar = document.getElementById("post2");

function myFunction() {
    if (window.pageYOffset <= sticky + 500) {
        // math to determine curr location
        // navbar.classList.add("sticky");
        navbar[0].setAttribute("id", "sticky");
        // } else if (navbar.classList.contains("sticky")) {
    } else if (document.getElementById("sticky") != undefined) {
        // navbar.classList.remove("sticky");
        navbar[0].removeAttribute("id", "sticky");
        currentTop = currentTop + 1;
        navbar = document.getElementsByClassName("post" + currentTop);
        sticky = navbar[0].offsetTop;
    }
}
