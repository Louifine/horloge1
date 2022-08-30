// [...document.getElementsByClassName('dice')].forEach(item => console.log(item));
new Array(...document.getElementsByClassName('dice'));
[...document.getElementsByClassName('dice')].forEach(item => item.addEventListener("click", event => {
  let num = Math.floor((Math.random()*6)+1);
  let elementToChange = event.target;
  if(event.target.className != "dice"){
    elementToChange = event.target.parentNode;
  }

  if (num == 1){
      elementToChange.innerHTML = `<div class="dot"></div>`;
  }
  else if (num == 2){
    elementToChange.innerHTML = ` <div class="dotTL"></div>
    <div class="dotBR"></div>`;
  }
  else if (num == 3){
    elementToChange.innerHTML = ` <div class="dotTL"></div>
  <div class="dot"></div>
  <div class="dotBR"></div>`;
  }
  else if (num == 4){
    elementToChange.innerHTML = ` <div class="dotTL"></div>
  <div class="dotTR"></div>
  <div class="dotBL"></div>
  <div class="dotBR"></div>`;
  }
  else if (num == 5){
    elementToChange.innerHTML = ` <div class="dotTL"></div>
  <div class="dotTR"></div>
  <div class="dotBL"></div>
  <div class="dotBR"></div>
  <div class="dot"></div>`;
  }
  else if (num == 6){
    elementToChange.innerHTML = ` <div class="dotTL"></div>
  <div class="dotTR"></div>
  <div class="dotBL"></div>
  <div class="dotBR"></div>
  <div class="dotML"></div>
  <div class="dotMR"></div>`;
  }
  else{
    alert("humm le casino est en panne actuellement")
  }
  
}));