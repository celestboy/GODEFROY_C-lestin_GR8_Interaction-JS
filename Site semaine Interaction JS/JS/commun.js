
let colorText = "black"
let colorBack = "white"

let p = document.querySelectorAll("p")
// let h1 = document.querySelectorAll("h1")
// let h2 = document.querySelectorAll("h2")
let h3 = document.querySelectorAll("h3")
let h4 = document.querySelectorAll("h4")
let button = document.querySelectorAll("button")
let label = document.querySelectorAll("label")
let input = document.querySelectorAll("input")
let fieldset = document.querySelectorAll("fieldset")

let body = document.querySelectorAll("body")
let inscriptionDiv = document.querySelectorAll("#inscription_div")
let connectionDiv = document.querySelectorAll("#connection_div")

let mainReserver = document.querySelectorAll("#main_reserver")
let articleReserver = document.querySelectorAll(".article_reserver")
// let titreAccueil = document.querySelectorAll(".titre_accueil")
// let titreReserver = document.querySelectorAll("#titre_reserver")
// let titreApropos = document.querySelectorAll("#titre_a-propos")




document.querySelectorAll(".dark_mode").forEach(function(e) {
    e.addEventListener("click", () => {
        if (colorText == "black") {
            colorText = "white"
            colorBack = "black"

            e.textContent = "Mode clair"
            input.forEach(function(e) {e.style.border = "1px solid white"})

            mainReserver.forEach(function(e) { e.style.background = "black" }) 
            articleReserver.forEach(function(e) { e.style.background = "#030625" }) 
            // titreAccueil.forEach(function(e) { e.style.color = "colorBack" }) 
            // titreReserver.forEach(function(e) { e.style.color = "colorBack" }) 
            // titreApropos.forEach(function(e) { e.style.color = "colorBack" }) 
        }
        else {
            colorText = "black"
            colorBack = "white"

            e.textContent = "Mode sombre"
            input.forEach(function(e) {e.style.border = "1px solid black"})

            mainReserver.forEach(function(e) { e.style.background = "linear-gradient(rgb(176, 190, 211), rgb(75, 75, 103))" }) 
            articleReserver.forEach(function(e) { e.style.background = "rgb(134, 172, 198)" }) 
            // titreAccueil.forEach(function(e) { e.style.color = "wheat" }) 
            // titreReserver.forEach(function(e) { e.style.color = "rgb(145, 187, 223)" }) 
            // titreApropos.forEach(function(e) { e.style.color = "black" }) 
        }


        p.forEach(function(e) { e.style.color = colorText })
        // h1.forEach(function(e) { e.style.color = colorText })
        // h2.forEach(function(e) { e.style.color = colorText }) 
        h3.forEach(function(e) { e.style.color = colorText })
        h4.forEach(function(e) { e.style.color = colorText })
        button.forEach(function(e) { e.style.color = colorText })
        label.forEach(function(e) { e.style.color = colorText })
        input.forEach(function(e) { e.style.color = colorText })
        fieldset.forEach(function(e) { e.style.color = colorText })

        body.forEach(function(e) { e.style.backgroundColor = colorBack })
        button.forEach(function(e) { e.style.backgroundColor = colorBack})
        input.forEach(function(e) { e.style.backgroundColor = colorBack})
        inscriptionDiv.forEach(function(e) { e.style.backgroundColor = colorBack })
        connectionDiv.forEach(function(e) { e.style.backgroundColor = colorBack })
        
        
        
    })
})











