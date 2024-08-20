import "./styles.css";

const home = document.createElement("button");
home.innerHTML="Home";
home.id="home";
const about = document.createElement("button");
about.innerHTML="About";
about.id="about";
const menu = document.createElement("button");
menu.innerHTML="Menu";
menu.id="menu";
const contact = document.createElement("button");
contact.innerHTML="Contact";
contact.id="contact";

document.getElementById('navbar').appendChild(home);
document.getElementById('navbar').appendChild(about);
document.getElementById('navbar').appendChild(menu);
document.getElementById('navbar').appendChild(contact);