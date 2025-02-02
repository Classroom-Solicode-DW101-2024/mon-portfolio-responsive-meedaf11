window.addEventListener("scroll", function () {
    let header = document.getElementById("header");

    if (window.scrollY > 50) { 
        header.classList.add("scrolled"); 
    } else {
        header.classList.remove("scrolled"); 
    }
});


document.getElementById('menuToggle').addEventListener('click' , () =>{

    const menu = document.querySelector('.navList');
    let toggleIcon = document.getElementById('menuToggle');


    menu.classList.toggle("Active");

    if(menu.classList.contains("Active")){
        toggleIcon.innerHTML = "&#9747";
    }else{
        toggleIcon.innerHTML = "&#9776";
    }

})

document.querySelector(".clickable-div").addEventListener("click", function() {
    document.getElementById("particles-js").scrollIntoView({ behavior: "smooth" });
});

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navList li");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });
    navLinks.forEach((li) => {
        li.classList.remove("Active");

        const link = li.querySelector("a");
        if (link.getAttribute("href").substring(1) === currentSection) {
            li.classList.add("Active");
        }
    });

    if (window.scrollY < 50) {
        navLinks.forEach(li =>{
            li.classList.remove("Active");
        })
        document.querySelector(".navHome").classList.add("Active");
    }
}

window.addEventListener("scroll", updateActiveNav);
