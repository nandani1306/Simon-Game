let gameSeq = [];
let userSeq = [];
let maxScore = [];

let started = false;
let level = 0;

let btns = ["yellow","green","red","purple"];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        // console.log("game started");

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}   

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random()*3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randInd);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(ind){
    if(userSeq[ind] === gameSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your scrore was <b>${level}</b><br> Press any ket to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        maxScore.push(level);
        console.log(maxScore);
        let max = Math.max(...maxScore);
        h3.innerText = `Your Maximum Score was ${max}`;
        reset();
    }
}

function btnPress(event){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    // h3.innerText = "";
}