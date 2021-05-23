const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
 ];
  
 //***MAP***
 // crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant
 // var nouveauTableau = arr.map(callback)
  
 //1. Get array of all names
 const names = characters.map(character => {
    return character.name
 });
  
  
 //2. Get array of all heights
 // ecriture raccourcie avec return implicite
 const heights = characters.map(character => character.height);
  
 //3. Get array of objects with just name and height properties
 // comme on retourne un objet on doit ajouter des parentheses apres return en plus des accolades
 const nameHeight = characters.map(character => {
  return ({
  name: character.name,
  height: character.height
 })});
  
 //4. Get array of all first names
 //split divise une chaine en sous chaine
 const firstName = characters.map(character => {
  return character.name.split(' ')[0]
 });
 console.log(firstName)
  
 //***REDUCE***
 /*
 applique une fonction « accumulateur » qui traite chaque valeur d'une liste de la gauche vers la droite afin de la réduire à une seule valeur.
 syntaxe : arr.reduce(callback, valeurInitiale)
 syntaxe plus detaille: arr.reduce((acc, curr), valeurInitiale) */
  
 //1. Get total mass of all characters
 const totalMass = characters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.mass
  },0)
   //2. Get total height of all characters
  const totalHeight = characters.reduce((acc, cur) =>
     {return acc + cur.height }, 0)
   //3. Get total number of characters by eye color
  const characterByEyeColor = characters.reduce((acc, cur) => {
    if (acc[cur.eye_color]){
      acc[cur.eye_color]++;
    }else{
      acc[cur.eye_color] = 1;
    }
    return acc;
  }, {})
   //4. Get total number of characters in all the character names
  const numberCharactersInAllNames = characters.reduce((acc, cur) => {
    return acc + cur.name.length;
  }, 0);
  
 //***FILTER***
 /*crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
 syntaxe : var nouveauTableau = arr.filter(callback, thisArg); */
  
 //1. Get characters with mass greater than 100
 const massGreaterThan100 = characters.filter(character => {
    return character.mass > 100;
  })
   //2. Get characters with height less than 200
  const heightLessThan200 = characters.filter(character => {
    return character.height < 200;
  })
   //3. Get all male characters
  const maleChar = characters.filter(character => {
    return character.gender === 'male';
  });
   //4. Get all female characters
  const femaleChar = characters.filter(character => {
    return character.gender === 'female';
  })
  
 //***SORT***
 /*trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
 Syntaxe: arr.sort(fonctionComparaison(a, b)) */
  
 //1. Sort by mass
 const charByMass = characters.sort((a, b) => {
    return b.mass - a.mass
  })
   //2. Sort by height
  const charByHeight = characters.sort((a, b) => {
    return a.height - b.height
  })
   //3. Sort by name
  const charByName = characters.sort((a, b) => {
    if(a.name < b.name){
      return -1;
    }else{
      return 1;
    }  
  })
   //4. Sort by gender
  const byGender = characters.sort((a,b) => {
    if(a.gender === 'female') {
      return 1;
    }else{
      return -1;
    }
  })
  
 //***EVERY***
 /* tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Retourne booleen.
 syntaxe: arr.every(callback[, thisArg]) */
  
 //1. Does every character have blue eyes?
 const blueEyes = characters.every(character => {
    return character.eye_color === 'blue'
  })
   //2. Does every character have mass more than 40?
  const more40 = characters.every(character => {
    return character.mass > 40;
  })
   //3. Is every character shorter than 200?
  const shorter200 = characters.every(character => {
    return character.height < 200;
  })
   //4. Is every character male?
  const allMale = characters.every(character => {
    return character.gender === "male";
  })
  
 //***SOME***
 /* teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen */
  
 //1. Is there at least one male character?
 const oneMale = characters.some(character => {
    return character.gender === 'male';
  })
   //2. Is there at least one character with blue eyes? implicite return
  const blueEyes = characters.some(character => character.eye_color === 'blue')
   //3. Is there at least one character taller than 210?
  const taller210 = characters.some(character => character.height > 210)
   //4. Is there at least one character that has mass less than 50?
  const mass50 = characters.some(character => character.mass < 50)
  
 