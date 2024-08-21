function header(){
    const header = document.createElement("header");
    document.body.appendChild(header);

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
    nav.appendChild(home);
    const about = document.createElement("button");
    about.innerHTML="About";
    about.id="about";
    nav.appendChild(about);
    const menu = document.createElement("button");
    menu.innerHTML="Menu";
    menu.id="menu";
    nav.appendChild(menu);
    const contact = document.createElement("button");
    contact.innerHTML="Contact";
    contact.id="contact";
    nav.appendChild(contact);
}

export default header;