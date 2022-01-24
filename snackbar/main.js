var btn = document.querySelector(".btn-baseline")
var snackbar = document.querySelector(".snackbar")
var crossBtn = document.querySelector(".icon")
btn.addEventListener("click", ()=>{
    snackbar.style.display = "block";
})

crossBtn.addEventListener("click", ()=>{
    snackbar.style.display = "none";
})