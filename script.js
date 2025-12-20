// script.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".tarifs_1, .tarifs_2, .tarifs_3, .Services");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

  
    if (name && email && message) {
      messageBox.textContent = "Merci " + name + ", votre message a été envoyé !";
      messageBox.style.color = "lightgreen";

      // Ici tu pourrais envoyer les données vers un serveur ou un service (ex: EmailJS)
      form.reset();
    } else {
      messageBox.textContent = "Veuillez remplir tous les champs.";
      messageBox.style.color = "red";
    }
  });
});
