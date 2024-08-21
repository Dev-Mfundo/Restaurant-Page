export default function(){
    const sectionOne = document.createElement("section");
    sectionOne.className="contact-hero";

    const divOne = document.createElement("div")
    divOne.className = "hero-content";
    sectionOne.appendChild(divOne);
    const firstHeading = document.createElement("h1")
    firstHeading.innerHTML="Contact Us";
    divOne.appendChild(firstHeading);
    const firstParagraph = document.createElement("p")
    firstParagraph.innerHTML="We’d love to hear from you. Reach out to us for reservations, feedback, or inquiries.";
    divOne.appendChild(firstParagraph);

    const sectionTwo = document.createElement("section");
    sectionTwo.className="contact-form";
    const secondHeading = document.createElement("h2");
    secondHeading.innerHTML="Get in Touch";
    sectionTwo.appendChild(secondHeading);

    const form = document.createElement("form");
    sectionTwo.appendChild(form);
    
    const labelName=document.createElement("label");
    labelName.innerHTML="Name: ";
    labelName.setAttribute("for", "name");
    form.appendChild(labelName);
    const inputName=document.createElement("input");
    inputName.required=true;
    inputName.id="name";
    form.appendChild(inputName);
    const labelEmail=document.createElement("label");
    labelEmail.innerHTML="Email: ";
    labelEmail.setAttribute("for","email");
    form.appendChild(labelEmail);
    const inputEmail=document.createElement("input");
    inputEmail.required=true;
    inputEmail.id="email";
    form.appendChild(inputEmail);
    const labelMessage=document.createElement("label");
    labelMessage.innerHTML="Message: ";
    labelMessage.setAttribute("for", "message");
    form.appendChild(labelMessage);
    const textArea=document.createElement("input");
    textArea.required=true;
    textArea.id="message";
    textArea.rows="4"
    form.appendChild(textArea);
    const submitBtn=document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.innerHTML="Send Message";
    form.appendChild(submitBtn);

    const container = document.createElement("div");
    container.appendChild(sectionOne);
    container.appendChild(sectionTwo);
    return container;
}