// ========= EMAIL JS =========
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm("service_arty51p", "template_7xs1gkn", "#contact-form", "I7X8kMlk98tz6pv_m")
    .then(()=> {
        //show sent message
        contactMessage.textContent = "Message sent successfully ✅"

        //remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent=""
        }, 5000)

        //clear input fields
        contactForm.reset()

    }, () => {
        //show error message
        contactMessage.textContent = "Message not sent (service error) ❌"
    })
}

contactForm.addEventListener("submit", sendEmail)