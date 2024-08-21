export default function about() {
    const sectionOne = document.createElement("section");
    sectionOne.className = "hero";

    const divOne = document.createElement("div");
    divOne.className = "hero-content";
    sectionOne.appendChild(divOne);
    
    const firstHeading = document.createElement("h1");
    firstHeading.innerHTML = "Our Story";
    divOne.appendChild(firstHeading);
    
    const firstParagraph = document.createElement("p");
    firstParagraph.innerHTML = "Discover how our passion for African culture and cuisine brought us here.";
    divOne.appendChild(firstParagraph);

    const img = document.createElement("img");
    img.src = "./assets/about-us.jpg";
    img.className = "about-image";
    sectionOne.appendChild(img);

    const sectionTwo = document.createElement("section");
    sectionTwo.className = "about-details";
    
    const secondHeading = document.createElement("h2");
    secondHeading.innerHTML = "Rooted in Tradition, Elevated for Today";
    sectionTwo.appendChild(secondHeading);
    
    const secondParagraph = document.createElement("p");
    secondParagraph.innerHTML = "African Elegance was born from a desire to bring the essence of African culture and culinary arts to the world. Our dishes are inspired by the diverse regions of Africa, where each ingredient tells a story of heritage, flavor, and history.";
    
    const thirdParagraph = document.createElement("p");
    thirdParagraph.innerHTML = "From the aromatic spices of West Africa to the fresh flavors of the East African coast, we offer a culinary journey that will excite your taste buds and open your heart to Africa's rich and vibrant traditions.";
    
    sectionTwo.appendChild(secondParagraph);
    sectionTwo.appendChild(thirdParagraph);

    const container = document.createElement("div");
    container.appendChild(sectionOne);
    container.appendChild(sectionTwo);
    return container;
}
