const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    //i<6 car 6 elts dans une couleur hex
    for(let i = 0; i < 6; i++){
        // notation raccourcie, pour ecrire :
        // hexColor = hexColor + 1;
        //on ecrit :
        // hexColor += 1;
        hexColor += hex[getRandomNumber()];
    }
    colorName.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}