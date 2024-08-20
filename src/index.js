import "./styles.css";

App = (() =>{
    //Header
    const header = document.createElement("header");
    document.body.appendChild(header);
    //logo
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

    //main
    const main = document.createElement("main");
    document.body.appendChild(main);

    const sectionOne = document.createElement("section");
    sectionOne.className="hero";
    main.appendChild(sectionOne);

    //hero
    const divOne = document.createElement("div")
    divOne.className = "hero-content";
    sectionOne.appendChild(divOne);
    const firstHeading = document.createElement("h1")
    firstHeading.innerHTML="Experience the Taste of Africa";
    divOne.appendChild(firstHeading);
    const firstParagraph = document.createElement("p")
    firstParagraph.innerHTML="We bring the authenticity and diversity of African cuisine to the heart of the city, offering an unforgettable dining experience that combines modern elegance with traditional African hospitality.";
    divOne.appendChild(firstParagraph);

    //intro

    const sectionTwo = document.createElement("section");
    sectionTwo.className="intro";
    main.appendChild(sectionTwo);
    const secondHeading = document.createElement("h2");
    secondHeading.innerHTML="Our African Dining Experience";
    sectionTwo.appendChild(secondHeading);
    const secondParagraph = document.createElement("p");
    secondParagraph.innerHTML="Immerse yourself in the vibrant flavors and rich culture of Africa.";
    sectionTwo.appendChild(secondParagraph);
    const aTag= document.createElement("a");
    aTag.link="#";
    aTag.className="btn";
    aTag.innerHTML="Explore Our Menu";
    sectionTwo.appendChild(aTag);


    //footer

    const footer = document.createElement("footer");
    footer.id="footer";
    document.body.appendChild(footer);
    const footerP = document.createElement("p");
    footerP.innerHTML="&copy; 2024 African Elegance Restaurant. All Rights Reserved.";
    footer.appendChild(footerP);
    

})();

