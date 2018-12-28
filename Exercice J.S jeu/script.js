var inGame = false;

var setI;

var container1 = document.createElement("div")//div ecran 1
document.body.appendChild(container1)
container1.style.display = "none"
container1.style.textAlign = "center"
container1.style.padding = "100px"
container1.style.backgroundColor = "#778899"

var container2 = document.createElement("div")//div ecran 2
document.body.appendChild(container2)
container2.style.display = "none"
container2.style.backgroundColor = "#778899"


var container3 = document.createElement("div")
document.body.appendChild(container3)
container3.style.display = "none"
container3.style.backgroundColor = "#778899"


//-----------------------------ECRAN-1------------------------------------------------//
var nameGame = document.createElement("h1");
container1.appendChild(nameGame);
nameGame.textContent = "Speed Letter";
nameGame.style.color = "Orange";
nameGame.style.fontSize = "3em";

var ruleGame = document.createElement("h2")
container1.appendChild(ruleGame)
ruleGame.textContent = "Règles du jeu"

var buttonStart = document.createElement("input")
container1.appendChild(buttonStart)
buttonStart.type = "button"
buttonStart.value = "Jouer"
container1.style.display = "block";



//----------fonction pour passer à l'ecran 2----------
buttonStart.addEventListener("click", continuer, false)

function continuer(){
  if(buttonStart.checked == true){
    inGame = true;
    setI = setInterval(diminuerCompteur, 1000);
  } else{container1.style.display = "none"
  container2.style.display = "block"
  }
}

//-----------------------------------ECRAN-2--------------------------------------


var nameGameScreen2 = document.createElement("h1")
container2.appendChild(nameGameScreen2)
nameGameScreen2.textContent = "Speed Letter"
nameGameScreen2.style.color = "orange"
nameGameScreen2.style.fontSize = "3em"
container2.style.textAlign = "center"
container2.style.padding = "100px 500px"

var score = 0;

var tempsRestant = document.createElement("h2")
container2.appendChild(tempsRestant)
tempsRestant.textContent = "3"


window.addEventListener("keydown", function keyPush(event) {
    //fonction anonyme quand on appuie sur une touche
    if (event.key === letter.textContent.toLowerCase()){
      letterRandom = Math.floor(Math.random() * (25 - 1)) + 1;//nombre compris entre 0 et la longeur du tableau -1
      displayLetter = myArray[letterRandom];
      letter.textContent = displayLetter;//affiche une lettre au hasard//
      timeS = 3;
      score +=1;
  }

  else{
  container2.style.display = "none";
  container1.style.display = "none";
  container3.style.display = "block";
  inGame == false;

  scoreS.textContent = "score : " + score;
}
}, false)


var timeS = 3;


function diminuerCompteur() {
    timeS-- //décrémentation de timeS
    // Conversion en nombre du texte du compteur    score +=1;

    tempsRestant.textContent = timeS;
    if(timeS === 0){
    container2.style.display = "none"
    container3.style.display = "block"
      clearInterval(setI);//clearInterval bloque le temps
    inGame = false;
  }
}  setI = setInterval(diminuerCompteur, 1000)
  // Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)//
//toute les secondes setInterval utilise la fonction diminuerCompteur et utilise la décrémentation --//



var letter = document.createElement("h1")
container2.appendChild(letter)
letter.style.fontSize = "5em";
letter.style.border = "2px solid black"
letter.style.margin = "45px"
letter.style.borderRadius = "100px"
letter.style.padding = "50px"


var myArray = ["A","M","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//A = indice 0, M=indice 1, C = indice 2, D = indice 3...etc//

var min = 0
var max = myArray.length -1

var letterRandom = Math.floor(Math.random() * (25 - 1)) + 1;//Math.random Permet de générer un nombre aléatoire entre 25 et 0
var displayLetter = myArray[letterRandom];//Ceci renvoie une lettre//
letter.textContent = displayLetter;

/*=========================================================================*/








/*------------------------------ECRAN 3----------------------------------------------------*/


var gameOver = document.createElement("h1"); /*creation du Game Over*/
container3.appendChild(gameOver);
gameOver.textContent = "GAME OVER";
gameOver.style.color = "orange"
container3.style.textAlign = "center";
container3.style.padding = "100px 500px"



var scoreS = document.createElement("h2")
container2.appendChild(scoreS)
container3.appendChild(scoreS)
