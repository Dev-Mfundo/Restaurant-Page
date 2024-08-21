export default function footer(){
    const footer = document.createElement("footer");
    footer.id="footer";
    document.body.append(footer);
    const footerP = document.createElement("p");
    footerP.innerHTML="&copy; 2024 African Elegance Restaurant. All Rights Reserved.";
    footer.appendChild(footerP);
}
