
function displayOptions(){
  let choicesDiv=document.createElement("div");

  choicesDiv.innerHTML = '<span id="opt1" title="boopthree">&#x1F308;</span> <span id="opt2" title="boopthree">&#x2600;</span> <span id="opt3" title="boopthree">&#x1F327;</span>'; 
   
  document.getElementById("choices").appendChild(choicesDiv);
}


function displayScore(u,c){
  let sU =document.querySelector("#scU");
  let sC =document.querySelector("#scC");
  let scoreU=parseInt(sU.textContent, 10);
  let scoreC=parseInt(sC.textContent, 10);
  let scoreDiv=document.querySelector("#score");

  let newScoreU = scoreU + u;
  let newScoreC = scoreC + c;

  if (newScoreU < 10 && newScoreC < 10) {
    sU.textContent = newScoreU;
    sC.textContent = newScoreC;
  }

  if (newScoreU === 10) {
    scoreDiv.innerHTML = '<h1>User Wins</h1>';
    scoreDiv.style.justifyContent = "center";
  } else if (newScoreC === 10) {
    scoreDiv.innerHTML = '<h1>Robot Wins</h1>';
    scoreDiv.style.justifyContent = "center";
  }
  
}

function makeChoices(emojis){
  let num1 = document.querySelector("#opt1");
  let num2 = document.querySelector("#opt2");
  let num3 = document.querySelector("#opt3");

  let userChoi = document.querySelector("#userChoice");
  let compuChoi = document.querySelector("#compChoice");

  userChoi.style.display="block";
  compuChoi.style.display="block";

  num1.addEventListener("click", function () {
    userChoi.textContent = emojis[0]; 
    let vari =Math.floor(Math.random() * emojis.length);
    compuChoi.textContent =emojis[vari];
    evaluate(0,vari);
  });

  num2.addEventListener("click", function () {
    userChoi.textContent = emojis[1]; 
    let vari =Math.floor(Math.random() * emojis.length);
    compuChoi.textContent =emojis[vari];
    evaluate(1,vari);
  });

  num3.addEventListener("click", function () {
    userChoi.textContent = emojis[2]; 
    let vari =Math.floor(Math.random() * emojis.length);
    compuChoi.textContent =emojis[vari];
    evaluate(2,vari);
  });

}

function evaluate(us,co){
  let userD = document.querySelector("#user");
  let compD = document.querySelector("#computer");
  let userStat=document.querySelector("#statusUser");
  let compStat=document.querySelector("#statusComp");
  if (us===co){
    // logic for tie 0,0
    userD.style.backgroundColor="#677E82";
    compD.style.backgroundColor="#677E82";
    userStat.textContent="\u{1F380}";
    compStat.textContent="\u{1F380}";
    displayScore(0,0);

    
  }
  else if( (us === 0 && co ===1) ||  (us === 1 && co ===2) || (us === 2 && co ===0))  {
    //user wins 1,0
    userD.style.backgroundColor="#BF8097";
    compD.style.backgroundColor="#734A32";
    userStat.textContent="\u{1F451}";
    compStat.textContent="\u{1F44E}";
    displayScore(1,0);
    
  }
  else {
    //computer wins 0,1
    userD.style.backgroundColor = "#734A32"; 
    compD.style.backgroundColor = "#BF8097";  
    userStat.textContent = "\u{1F44E}";  
    compStat.textContent = "\u{1F451}";
    displayScore(0,1);
     
  }

}


function main() {
  let scoreCard =document.querySelector("#score");
  scoreCard.style.display = "none";
  let scU=document.querySelector("#scU");
  let scC=document.querySelector("#scC");
  let scoreComp=0;
  let scoreUser=0;
  const emojis = ["\u{1F308}", "\u{2600}", "\u{1F327}"];
  let start =document.querySelector("#start");
  start.addEventListener("click", function () {
    start.style.display = "none";
    displayOptions();
    scoreCard.style.display = "flex";
    let [userPoint, compPoint]= makeChoices(emojis);
    scoreComp+=compPoint;
    scoreUser+=userPoint;
    scU.textContent =scoreUser.toString();
    scC.textContent =scoreComp.toString();

  });

}
main();

