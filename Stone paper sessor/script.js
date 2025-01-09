
document.addEventListener("DOMContentLoaded", function() {


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const scoreyou = document.getElementById("scoreyou");
const scorecomp = document.getElementById("scorecomp");
const wonscore = document.getElementById("wonscore");


let u = -1;
let y=0;
let c=0;

rock.addEventListener("click", function() {
    u=0; 
    checkwinner();
    
});
paper.addEventListener("click", function() {
    u=1; 
    checkwinner();
});
scissor.addEventListener("click", function() {
    u=2; 
    checkwinner();
});

function checkwinner(){
    
const r = Math.floor(Math.random() * 3);
    if(u==0&&r==2||u==1&&r==0||u==2&&r==1){
        console.log("You win")
        wonscore.textContent="YOU WON"
        wonscore.style.backgroundColor="green"
    y++;
    scoreyou.textContent=y;
    }
    else if(u==r){
        wonscore.textContent="TIE"
        wonscore.style.backgroundColor="blue"
    }
    else{
        console.log("You lost")
        wonscore.textContent="YOU LOST"
             wonscore.style.backgroundColor="red"
        c++;
        scorecomp.textContent=c;
    }
}
});





