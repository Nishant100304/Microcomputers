document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("queryForm");
    const formStatus = document.getElementById("formStatus");
    const WA_NUMBER = "919335155526"; // Your WhatsApp number with country code, no plus sign

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formStatus.style.color = "red";
            formStatus.textContent = "Please fill in all the fields.";
            return;
        }

        const encodedMessage = encodeURIComponent(
            `Query from Website:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        );

        const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;

        window.open(waUrl, "_blank");

        formStatus.style.color = "green";
        formStatus.textContent = "Redirecting to WhatsApp...";

        form.reset();
    });
});
