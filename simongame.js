let gameSeq = [];
let userSeq = [];
let colors = ["red","violet","orange","aqua"]; 
let level =0;
let started = false;
let h3 = document.querySelector("h3");
// let highest = document.createElement("h3");
// let h =0;



document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started= true;
        levelinc();
        // highest.innerText = "Highest score :0";
        // h3.append(highest);
        
    }
});
function levelinc(){
    userSeq=[];
    level++;
    h3.innerText= `Level ${level}`;
    //button flash
    let no = Math.floor(Math.random()*4)+1;
    let box = document.querySelector(`.box${no}`);
    gameSeq.push(no);
    flash(box);
    console.log(gameSeq);
}
function flash(box){
    box.classList.add("flash");
    // console.log(box.classList);
    setTimeout(function(){
        box.classList.remove("flash");
    },200);
}

let allbtns = document.querySelectorAll("button");
//console.log(allbtns);
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    
    flash(this);
    let user = this.getAttribute("id");
    userSeq.push(user);
    console.log(userSeq);
    check(userSeq.length-1);
}

function check(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelinc,1000);
        }
    }
    else{
        h3.innerHTML= `Game Over! Your score is <b>${level}</b> <br> Press any key to start`;
        // if(level>h){
        //     highest.innerText = `Highest score : ${level}`;
        // }
        reset();
    }
}
function reset(){
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;
}