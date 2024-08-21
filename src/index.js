import "./styles.css";
import header from "./components/header";
import footer from "./components/footer";
import home from "./components/home";
import menu from "./components/menu";
import about from "./components/about";
import contact from "./components/contact";

const App = (() => {
    header();
    footer();
    
    const homeBtn = document.getElementById("home");
    const aboutBtn = document.getElementById("about");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");
    const mainBody = document.createElement("main");
    document.body.appendChild(mainBody);
    const togglebtn = document.getElementById("navbarToggle");

    togglebtn.addEventListener("click", function() {
        const navbar = document.getElementsByClassName("navbar")[0];
        
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "flex";
        } else {
            navbar.style.display = "none";
        }
    });
    

    function showContent(mainContent) {
        mainBody.innerHTML = "";
        (() => {
            mainBody.appendChild(mainContent);
        })(); 
    }

    homeBtn.addEventListener("click", function() {
        showContent(home());
    });

    aboutBtn.addEventListener("click", function() {
        showContent(about());
    });

    menuBtn.addEventListener("click", function() {
        showContent(menu());
    });

    contactBtn.addEventListener("click", function() {
        showContent(contact());
    });

    showContent(home());
})();
