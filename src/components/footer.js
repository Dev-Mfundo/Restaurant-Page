export default function footer(){
    const currentYear = new Date().getFullYear();
    const footer = document.createElement("footer");
    footer.id="footer";
    document.body.append(footer);
    const footerP = document.createElement("p");
    footerP.innerHTML=`&copy; ${currentYear} African Elegance Restaurant. All Rights Reserved.`;
    footer.appendChild(footerP);
}
