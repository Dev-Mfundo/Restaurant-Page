import foodTwo from "../two.jpg";
import jollof from "../jollof.jpg";
import jollofina from "../jollofina.jpg";
export default function menu() {
    const sectionOne = document.createElement("section");
    sectionOne.className = "menu-hero";

    const divOne = document.createElement("div");
    divOne.className = "hero-content";
    sectionOne.appendChild(divOne);
    
    const firstHeading = document.createElement("h1");
    firstHeading.innerHTML = "Our Menu";
    divOne.appendChild(firstHeading);
    
    const firstParagraph = document.createElement("p");
    firstParagraph.innerHTML = "Explore the authentic flavors of Africa through our curated menu.";
    divOne.appendChild(firstParagraph);

    const sectionTwo = document.createElement("section");
    sectionTwo.className = "menu-list";
    
    const dishes = [
        { name: "Boerswors", price: "$10", img: foodTwo, desc: "South african boerwors, a South African favorite." },
        { name: "Jollof Pap", price: "$14", img: jollofina, desc: "A Nigerian dish made with spiced brrf meat served with pap." },
        { name: "Jollof Rice", price: "$18", img: jollof, desc: "A Nigerian dish called Jollof served with rice, full of flavor and aroma." },
    ];

    dishes.forEach(dish => {
        const li = document.createElement("li");
        
        const img = document.createElement("img");
        img.src = dish.img;
        img.id="menuImg";
        li.appendChild(img);
        
        const menuInfo = document.createElement("div");
        menuInfo.className = "menu-info";
        menuInfo.innerHTML = `<h3>${dish.name}</h3><p>${dish.price}</p><p>${dish.desc}</p>`;
        li.appendChild(menuInfo);
        
        sectionTwo.appendChild(li);
    });

    const container = document.createElement("div");
    container.appendChild(sectionOne);
    container.appendChild(sectionTwo);
    return container;
}
