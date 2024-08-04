// DOM Elements
const modalBackground = document.querySelector(".bground");
const fermerModalBtn = document.querySelector(".close");
const checkboxConditionValide = document.querySelector("#checkbox1");
const submitBtn = document.querySelector(".btn-submit");
const prenomInput = document.querySelector("#first");
const nomInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const dateNaissanceInput = document.querySelector("#birthdate");
const modalButtons = document.querySelectorAll(".modal-btn");
const quantiteInput = document.querySelector("#quantity");
const formInputs = document.querySelectorAll(".formData");
const location1 = document.querySelector("#location1");
const form = document.querySelector("#registerForm");
const modalConfirmation = document.querySelector(".modalConfirmation");
const fermerConfirmationButton = document.querySelector(".btn-close");
const hmbgMenu = document.querySelector(".fa.fa-bars")
const mainNavbar = document.querySelector(".main-navbar")


// Evenement qui lance la modal
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));


// Fermer le fomulaire de la modal
fermerModalBtn.addEventListener("click", closeModal);

// Fermer le formulaire de confirmation
fermerConfirmationButton.addEventListener("click", closeModal);

// Bloquer le rechargement de la page si le formulaire n'est pas valide
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    handleSubmit();
  } else {
    form.reportValidity();
  }
});

// Ajouter un background blanc au menu hamburger quand on clique dessus
hmbgMenu.addEventListener("click", function(){
  mainNavbar.classList.toggle("add-white-bg");
})

// Verifications de la validité des inputs
prenomInput.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
);
nomInput.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
);
emailInput.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Veuillez entrer une adresse mail valide.")
);
dateNaissanceInput.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Vous devez entrer votre date de naissance.")
);
location1.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Veuillez choisir une option.")
);
quantiteInput.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Veuillez entrer un nombre de tournois.")
);
checkboxConditionValide.addEventListener("invalid", (event) =>
  flashErrorMessage(event, "Veuillez accepter les conditions d'utilisation.")
);

// Cacher la modal du formulaire et afficher la modal de confirmation
function handleSubmit() {
  document.querySelector(".modal-body").style.display = "none";
  modalConfirmation.style.display = "flex";
  setTimeout(removeErrorMessages, 10000);
}

// Afficher les messages d'erreur liés aux inputs
function flashErrorMessage(event, message) {
  const target = event.target;
  const parent = target.parentElement;

  parent.setAttribute("data-error", message);
  parent.setAttribute("data-error-visible", "true");
  setTimeout(removeErrorMessages, 10000);
}

// Retirer les messages d'erreur liés aux inputs
function removeErrorMessages() {
  const errorMessages = document.querySelectorAll("[data-error]");
  errorMessages.forEach((errorMessage) => {
    errorMessage.removeAttribute("data-error");
    errorMessage.removeAttribute("data-error-visible");
  });
}

// Fermer la modal d'inscription
function closeModal() {
  modalBackground.style.display = "none";
  form.reset();
  document.querySelector(".modal-body").style.display = "block";
  modalConfirmation.style.display = "none";
}

// Ouvrir la modal d'inscription
function launchModal() {
  modalBackground.style.display = "block";
  document.querySelector(".modal-body").style.display = "block";
  modalConfirmation.style.display = "none";
}
// Cette fonction sert à afficher le menu hamburger quand le responsive réduit de largeur
function editNav() {
  const topNavBar = document.getElementById("myTopnav");
  topNavBar.classList.toggle("responsive");
}
