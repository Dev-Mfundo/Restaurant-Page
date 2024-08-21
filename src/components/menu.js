import food from "../one.jpg";
import foodTwo from "../two.jpg";
import foodThree from "../three.jpg";
import jollof from "../jollof.jpg";
import injera from "../photo0jpg.jpg";
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
        { name: "Jollof Rice", price: "$12", img: food, desc: "A popular West African dish made with rice, tomatoes, and spices." },
        { name: "Suya", price: "$10", img: foodTwo, desc: "Grilled skewers of spicy, marinated beef, a Nigerian favorite." },
        { name: "Injera with Doro Wat", price: "$15", img: foodThree, desc: "Ethiopian flatbread served with spicy chicken stew." },
        { name: "Bunny Chow", price: "$13", img: injera, desc: "A South African street food made of hollowed-out bread filled with curry." },
        { name: "Bobotie", price: "$14", img: jollofina, desc: "A South African dish made with spiced minced meat baked with an egg-based topping." },
        { name: "Tagine", price: "$18", img: jollof, desc: "A North African stew cooked in a clay pot, full of flavor and aroma." }
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
