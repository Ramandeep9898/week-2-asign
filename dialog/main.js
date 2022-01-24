var hideBtn = document.querySelector(".open-alert-btn")
var dialogBox = document.querySelector(".dialog-box")
var actionBtn = document.querySelector(".action-btn")
var actionBtn2 = document.querySelector(".action-btn2")


hideBtn.addEventListener( "click", ()=>{
    if(dialogBox.style.display === "none"){
    dialogBox.style.display = "block";
} else{
    dialogBox.style.display = "none";
}
})

// console.log(actionBtn)
actionBtn.addEventListener("click", ()=>{
    dialogBox.style.display="none"
})

actionBtn2.addEventListener("click", ()=>{
    dialogBox.style.display="none"
})

