var timer = 60;
var score = 0;
var hitrn = 0;
function getNewHit()
{
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector(".pbtm").innerHTML= `<h1>GameOver<h1>`
        }
    }, 1000)
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function makeBubble() {
    var clutter = "";
    for (i = 1; i <= 184; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">
            ${rn}
        </div>`

    }
    document.querySelector(".pbtm").innerHTML = clutter;
}


getNewHit();
runTimer();
makeBubble();

document.querySelector(".pbtm").addEventListener("click",function(dets){
      let clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else
    {
        alert('wrong')
}
})
