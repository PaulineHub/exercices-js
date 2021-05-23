// Set initial count
let count = 0;
 
//select value and buttons
const value = document.getElementById("value");
const btnsCollection = document.getElementsByClassName("btn");
// nous donne une collection d'elts html, que l'on transforme en tableau :
const btns = Array.prototype.slice.call(btnsCollection);
console.log(btns)
btns.forEach(function(btn) {
 btn.addEventListener("click", function(e){
   const btnType = e.currentTarget.classList;
   console.log(btnType)
   if (btnType.contains("decrease")){
     count--;
   } else if (btnType.contains("increase")){
     count++;
   }else if(btnType.contains("reset")) {
     count = 0;
   } if (count > 0){
     value.style.color = "green";
   } else if (count < 0){
     value.style.color = "red";
   } else if (count === 0){
     value.style.color = "black";
   }
   value.textContent = count;
 });
});
``