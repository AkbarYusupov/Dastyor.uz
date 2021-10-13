function burgeropen(){
  const burger__box =  document.getElementById('burger')    
       if (burger__box.style.display === "block") {
        burger__box.style.display ="none"
       } else{
         burger__box.style.display = "block";
       }
}

function open() {
  const modal = document.getElementById("burger_modal");
  modal.style.display = "block";
}
function close() {
  const modal = document.getElementById("burger_modal");
  modal.style.display = "none";
}
window.addEventListener('click',() => {
  if (window.matchMedia("(max-width: 1190px)").matches) {
  document.querySelector("#open").addEventListener("click", open);
  document.getElementById("closed").addEventListener("click", close);
  } 
  else {
    document.getElementById("box").addEventListener('click', burgeropen)
  } 
})

