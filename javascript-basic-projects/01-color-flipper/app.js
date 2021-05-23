const colors = ["#ffc996", "#ff8474", "#9f5f80", "#583D72"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number  entre 0 - 3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});

function getRandomNumber(){
    //math.random renvoie un nombre aleatoire entre [0, 1[
    //math.floor renvoie le plus grd entier inf ou = a un nb x
    return Math.floor(Math.random() * colors.length);
}