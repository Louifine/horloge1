function heure(){
    let time = document.getElementById("heure");
    var now = new Date();
    var heure   = now.getHours();
    var minute  = now.getMinutes();
    var seconde = now.getSeconds();
    if(seconde % 3 == 0){
        return redAlert(heure, minute, seconde);
    }
    else{
        return time.innerHTML="<p>"+ heure + ":" + minute
        + ":" + seconde + "</p>";
    }
    
}

function redAlert(heure, minute, seconde){
    let time = document.getElementById("heure");
    return time.innerHTML="<p style=\"color:red; font-weight: bold;\">"+ heure + ":" + minute
    + ":" + seconde + "</p>";
}

let eachSecond = setInterval(heure, 1000);