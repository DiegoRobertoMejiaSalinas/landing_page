let toggle= document.querySelector("#toggle")
let list = document.querySelector(".header__list")

toggle.addEventListener("click", ()=>{
    list.classList.toggle("active")
})