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

    const imagesContainer = document.createElement("div");
    imagesContainer.className = "hero-images";
    for (let i = 1; i <= 3; i++) {
        const img = document.createElement("img");
        img.src = `./assets/image${i}.jpg`; // Add the paths to your images
        imagesContainer.appendChild(img);
    }
    divOne.appendChild(imagesContainer);

    const sectionTwo = document.createElement("section");
    sectionTwo.className = "intro";
    const secondHeading = document.createElement("h2");
    secondHeading.innerHTML = "Our African Dining Experience";
    sectionTwo.appendChild(secondHeading);
    
    const secondParagraph = document.createElement("p");
    secondParagraph.innerHTML = "Immerse yourself in the vibrant flavors and rich culture of Africa.";
    sectionTwo.appendChild(secondParagraph);
    
    const aTag = document.createElement("a");
    aTag.href = "#menu";
    aTag.className = "btn";
    aTag.id = "linkMenu";
    aTag.innerHTML = "Explore Our Menu";
    sectionTwo.appendChild(aTag);

    const container = document.createElement("div");
    container.appendChild(sectionOne);
    container.appendChild(sectionTwo);
    return container;
}
