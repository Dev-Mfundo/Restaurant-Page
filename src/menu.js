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
        { name: "Jollof Rice", price: "$12", img: "./R.jpg", desc: "A popular West African dish made with rice, tomatoes, and spices." },
        { name: "Suya", price: "$10", img: "./OIP (1).jpg", desc: "Grilled skewers of spicy, marinated beef, a Nigerian favorite." },
        { name: "Injera with Doro Wat", price: "$15", img: "../OIP (2).jpg", desc: "Ethiopian flatbread served with spicy chicken stew." },
        { name: "Bunny Chow", price: "$13", img: "../OIP.jpg", desc: "A South African street food made of hollowed-out bread filled with curry." },
        { name: "Bobotie", price: "$14", img: "", desc: "A South African dish made with spiced minced meat baked with an egg-based topping." },
        { name: "Tagine", price: "$18", img: "", desc: "A North African stew cooked in a clay pot, full of flavor and aroma." }
    ];

    dishes.forEach(dish => {
        const li = document.createElement("li");
        
        const img = document.createElement("img");
        img.src = dish.img;
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
