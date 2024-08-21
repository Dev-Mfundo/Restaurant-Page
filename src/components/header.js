function header(){
    const header = document.createElement("header");
    document.body.prepend(header);

    const logo = document.createElement("p");
    logo.innerHTML="AFRICAN<br/> RESTUARANT";
    logo.className="logo";
    header.appendChild(logo);

    const nav = document.createElement("nav");
    nav.className="navbar";
    header.appendChild(nav);
    //navbar
    const home = document.createElement("button");
    home.innerHTML="Home";
    home.id="home";
    home.className="navBtn";
    nav.appendChild(home);
    const about = document.createElement("button");
    about.innerHTML="About";
    about.id="about";
    about.className="navBtn";
    nav.appendChild(about);
    const menu = document.createElement("button");
    menu.innerHTML="Menu";
    menu.id="menu";
    menu.className="navBtn";
    nav.appendChild(menu);
    const contact = document.createElement("button");
    contact.innerHTML="Contact";
    contact.id="contact";
    contact.className="navBtn";
    nav.appendChild(contact);
    const toggleDiv = document.createElement("div");
    toggleDiv.id="toggle-div";
    header.appendChild(toggleDiv);
    const navbarToggle = document.createElement("p");
    navbarToggle.id = "navbarToggle";
    navbarToggle.innerHTML = "☰";
    toggleDiv.appendChild(navbarToggle);
}

export default header;