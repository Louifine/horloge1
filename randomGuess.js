const reponse = document.getElementById("guess");
console.log(reponse);

let findMe = Math.floor(Math.random()*101);

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('input[name="guess"]').onchange=changeEventHandler;
},false);

function changeEventHandler(e) {
    const zoneDeTexte = document.getElementById("textGame");
        if(e.target.value == findMe){
              let replay = document.getElementById("guessGame").innerHTML = "<p id=\"textGame\">Félicitations, vous avez trouvé le bon nombre !</p> <button id=\"play\">Voulez-vous rejouer ?</button>";
              document.querySelector('button[id="play"]').addEventListener('click', event=> {
                let restart = document.getElementById("guessGame").innerHTML= "<p id=\"textGame\">Trouvez mon nombre de 0 à 100 !</p> <input id=\"guess\" placeholder=\"Quel nombre est-ce ?\" name=\"guess\" />";
                findMe = Math.floor(Math.random()*101);
                document.querySelector('input[name="guess"]').onchange=changeEventHandler;
              });
        
        }   
        else if(e.target.value > findMe){
             zoneDeTexte.textContent = "Cherche encore, c'est moins";
        }
        else{
             zoneDeTexte.textContent = "Cherche encore, c'est plus";
        }
}


    
// function guessMyNumber(){
//     const zoneDeTexte = document.getElementById("textGame");
//     const reponse = document.getElementById("guess");
//     const findMe = Math.floor(Math.random()*101);
//     console.log(findMe);
//     console.log(reponse);
//     reponse.addEventListener('change', (e) =>{
//         console.log(e);
//         console.log(e.target);
//         if(reponse.value == findMe){
//             let replay = document.getElementById("guessGame").innerHTML = "<p id=\"textGame\">Félicitations, vous avez trouvé le bon nombre !</p> <button id=\"play\">Voulez-vous rejouer ?</button>";
//         }
//         else if(e.target.value > findMe){
//             zoneDeTexte.textContent = "Cherche encore, c'est moins";
//         }
//         else{
//             zoneDeTexte.textContent = "Cherche encore, c'est plus";
//         }
//     });
// }

// let letsGo = guessMyNumber();