




document.getElementById("first_page_scroll_svg").addEventListener("click", () => {
    document.getElementById("scroll_img").scrollIntoView({
        behavior: 'smooth'
      });
})

window.addEventListener("scroll", () => {

    actual_scroll = window.pageYOffset

    if (actual_scroll > 400 && window.innerWidth > 650) {
        document.getElementById("top_page_scroll_svg").style.display = "initial"
        // console.log(window.innerWidth)
    }
    else {
        document.getElementById("top_page_scroll_svg").style.display = "none"
    }
})

document.getElementById("top_page_scroll_svg").addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
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