export default function homePage() {
    const sectionOne = document.createElement("section");
    sectionOne.className = "hero";

    const divOne = document.createElement("div");
    divOne.className = "hero-content";
    sectionOne.appendChild(divOne);
    
    const firstHeading = document.createElement("h1");
    firstHeading.innerHTML = "Experience the Taste of Africa";
    divOne.appendChild(firstHeading);
    
    const firstParagraph = document.createElement("p");
    firstParagraph.innerHTML = "We bring the authenticity and diversity of African cuisine to the heart of the city, offering an unforgettable dining experience that combines modern elegance with traditional African hospitality.";
    divOne.appendChild(firstParagraph);

    const sectionTwo = document.createElement("section");
    sectionTwo.className = "intro";
    const secondHeading = document.createElement("h2");
    secondHeading.innerHTML = "Our African Dining Experience";
    sectionTwo.appendChild(secondHeading);
    
    const secondParagraph = document.createElement("p");
    secondParagraph.innerHTML = "Immerse yourself in the vibrant flavors and rich culture of Africa.";
    sectionTwo.appendChild(secondParagraph);
    
    const pTag = document.createElement("p");
    pTag.className = "btn";
    pTag.id = "linkMenu";
    pTag.innerHTML = "Explore Our Menu";
    sectionTwo.appendChild(pTag);

    const container = document.createElement("div");
    container.appendChild(sectionOne);
    container.appendChild(sectionTwo);
    return container;
}
