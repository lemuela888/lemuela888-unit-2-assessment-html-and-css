// Be able to click the ToggleButton
  // Get reference in the html (class name, id, tag
const btn = document.querySelector(".ToggleButton")

console.log(btn)


btn.addEventListener("click", function(){
  const navbar = document.querySelector(".navbar")
  navbar.classList.toggle('hide')
})
