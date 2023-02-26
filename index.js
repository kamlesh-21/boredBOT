const colors = ["mojito", "fun", "marine", "purple", "rea"]

const inputEl = document.getElementById("input-el")
const buttonEl= document.getElementById("button-el")
// const inputEl = document.getElementById("input-el")

buttonEl.addEventListener("click", function(){
   fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("input-el").textContent = data.activity
        document.body.classList.toggle(colors[Math.round(Math.random()*4)])
    })
})
