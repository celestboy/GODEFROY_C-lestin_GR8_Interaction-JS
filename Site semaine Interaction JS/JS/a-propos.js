

let connected = false
let formCorrect = 0
let formCorrectBis = 0

let mail
let phone
let pseudo
let password
let camp

let mailConfirmed
let numComm
let message


let btnInscire = document.getElementById("inscription_btn")
let btnConnection = document.getElementById("connection_btn")
let btnSubmitMessage = document.getElementById("submit_message")
let mailConfirmedInput = document.getElementById("mail_confirmed")
let numCommInput = document.getElementById("num_comm")
let messageInput = document.getElementById("message")

let btnSubmitInscription = document.getElementById("submit_inscription")
let btnSubmitConnection = document.getElementById("submit_connection")
let emailInput = document.getElementById("mail_inscription")
let telInput = document.getElementById("tel_inscription")
let pseudoInput = document.getElementById("pseudo_inscription")
let passwordInput = document.getElementById("mdp_inscription")
let campInput = document.getElementsByName("camp")
let mailConnection = document.getElementById("mail_connection")
let passwordConnection = document.getElementById("mdp_connection")

let confirmationCreation = document.getElementById("confirmation_creation")
let confirmationConnection = document.getElementById("confirmation_connection")
let confirmationMessage = document.getElementById("confirmation_message")

let inscriptionContent = document.getElementById("formulaire_content")
let formulaireInscription = document.getElementById("inscription_div")
let connectionContent = document.getElementById("connection_content")
let formulaireConnection = document.getElementById("connection_div")


function verifconnection() {

    if (connected == false) {
        btnInscire.style.display = "initial"
        btnConnection.style.display = "initial"
        inscriptionContent.style.display = "none"

        document.querySelector("h3").textContent = "Vous n'êtes pas connecté"
    }

    else {
        btnInscire.style.display = "none" 
        btnConnection.style.display = "none" 
        inscriptionContent.style.display = "initial"

        document.querySelector("h3").textContent = "Bienvenue " + pseudo + ", une question ?"
    }
}
verifconnection()


        // CREATION DE COMPTE

btnInscire.addEventListener("click", () => {
    formulaireInscription.style.display = "initial"
    document.querySelector("body").style.overflow = "hidden"
    window.scrollTo(0, 0)
})

function validatePassword() {
    let passwordError = document.getElementById("password_error_inscription")

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    

    if (passwordRegex.test(passwordInput.value)) {
        formCorrect = 1
    }
    else {
        passwordError.textContent = "Mot de passe incorrect, il doit contenir entre 8 et 20 caractères, comporter au minimum une majuscule, une minuscule, un chiffre ainsi qu'un caractère spécial."
    }
}

btnSubmitInscription.addEventListener("click", () => {
    validatePassword()

    if (emailInput.value != "" && emailInput.value.includes("@") && emailInput.value.length >= 3) {
        formCorrect += 1
    }
    if (telInput.value != "") { formCorrect += 1 }
    if (pseudoInput.value != "") { formCorrect += 1 }



    if (formCorrect == 4) {
        formulaireInscription.style.display = "none"
        document.querySelector("body").style.overflow = "initial"

        confirmationCreation.style.display = "initial"
        setTimeout(() => {
            confirmationCreation.style.display = "none"            
        }, 2500);

        mail = emailInput.value
        tel = telInput.value
        pseudo = pseudoInput.value
        password = passwordInput.value

        for (let radio of campInput){
            if (radio.checked) {
                camp = radio.id;
            }
        }

        emailInput.value = ""
        telInput.value = ""
        pseudoInput.value = ""
        passwordInput.value = ""
        campInput.value = ""

        for (let radio of campInput){
            if (radio.checked) {
                let radio = document.querySelector('input[type=radio][name=camp]:checked');
                radio.checked = false;
            }
        }

        
    }

   

    

})

document.getElementById("return_button_inscription").addEventListener("click", () => {
    formulaireInscription.style.display = "none"
    document.querySelector("body").style.overflow = "initial"
})


        // CONNECTION A UN COMPTE

btnConnection.addEventListener("click", () => {
    formulaireConnection.style.display = "initial"
    document.querySelector("body").style.overflow = "hidden"
    window.scrollTo(0, 0)
})


btnSubmitConnection.addEventListener("click", () => {
    if (mailConnection.value == mail || mailConnection.value == pseudo &&
        passwordConnection.value == password && mailConnection != "" && passwordConnection != "") {
        formulaireConnection.style.display = "none"
        document.querySelector("body").style.overflow = "initial"

        connected = true
        verifconnection()

        confirmationConnection.style.display = "initial"
        setTimeout(() => {
            confirmationConnection.style.display = "none"
        }, 2500);
    }
    else {
        let passwordError2 = document.getElementById("password_error_connection")
        passwordError2.textContent = "Nom d'utilisateur ou mot de passe incorrect."
    }
})

document.getElementById("return_button_connection").addEventListener("click", () => {
    formulaireConnection.style.display = "none"
    document.querySelector("body").style.overflow = "initial"
})



    // FORMULAIRE DE CONTACT

btnSubmitMessage.addEventListener("click", () => {
    if (mailConfirmedInput.value != "" && mailConfirmedInput.value.includes("@") && mailConfirmedInput.value.length >= 3) {
        formCorrectBis += 1
    }
    if (messageInput.length >= 20) { formCorrectBis += 1 }

    if (formCorrectBis == 2) {
        mailConfirmed = mailConfirmedInput.value
        numComm = numCommInput.value
        message = messageInput.value

        confirmationMessage.style.display = "initial"
        setTimeout(() => {
            confirmationMessage.style.display = "none"
        }, 2500);

        mailConfirmedInput.value = ""
        numCommInput.value = ""
        messageInput.value = ""
    }
    else {
        document.getElementById("message_error").textContent = "Erreur, l'adresse mail doit être conforme et le message doit contenir au minimum 20 caractères."
    }
})



// NAV MENU BURGER 

document.addEventListener("DOMContentLoaded", () => {
    let burgerIcon = document.getElementById("burger_icon")
    let menu = document.getElementById("menu")
    let barHidden = document.querySelectorAll(".bar_hidden")

    burgerIcon.addEventListener("click", () => {
        menu.classList.toggle("active")
        barHidden.forEach(function(e) { e.classList.toggle("active") }) 
    })
})