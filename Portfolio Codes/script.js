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