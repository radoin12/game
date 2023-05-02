var numberOfValue=document.getElementsByTagName("input")[0];
var startGame=document.getElementsByTagName("button");
var displayContent=document.getElementById("container");
var displayPointPlayer=document.getElementById("restPoint");
const displayPointDragon=document.getElementById("restPointTwo")






const displayChancePlayer=document.getElementsByClassName("test")[0];




startGame[0].className="startGame";
startGame[1].classList.add("restart")

startGame[0].addEventListener("click",eventGame)
startGame[1].addEventListener("click",restart)


var pointLifePlayer=Math.round(Math.random()*10)+100;
var pointLifeDragonDifficile=Math.round(Math.random()*10)+100;
var pointLifePlayerDifficile=Math.round(Math.random()*5)+100;
var pointLifeDragon=Math.round(Math.random()*5)+100;
let pointDamage=Math.round(Math.random()*6)+46;
let pointDamageMoy=Math.round(Math.random()*6)+55;
let pointDommageMinoré=pointDamage-Math.round((Math.random()*6)+20*(10/100));
let pointDomageMajoré=pointDamage+Math.round((Math.random()*6)+20*(10/100));
let j=0;

let text="";
let chancePlayerToAttack=[];
let chanceDragonToAttack=[];
let  tabRestPlayer=[];
let tabRestDragon=[];
let chancePlayerToAttackMoy=[]
let chanceDragonToAttackMoy=[]

 for (let i = 0; i < 3; i++) {
    
    chancePlayerToAttackMoy.push(Math.round(Math.random()*5)+100)
 }
 for (let i = 0; i < 3; i++) {
    
    chanceDragonToAttackMoy.push(Math.round(Math.random()*5)+100)
 }


let restLifePlayer=pointLifePlayer;
let restLifeDragon=pointLifeDragon;
let restLifePlayerDifficile=pointLifePlayerDifficile
let restLifeDragonDifficile=pointLifeDragonDifficile
let restLifeDragonMoyenne=pointLifePlayer;
let restLifePlayerMoyenne=pointLifePlayer;
    
    for ( i = 0; i< 4; i++) {
   
        chancePlayerToAttack.push(Math.round(Math.random()*5)+100)
       
    }
   



  
    for ( i = 0; i< 4; i++) {
   
        chanceDragonToAttack.push(Math.round(Math.random()*5)+100)
       
    }

 function eventGame() {
//  if(numberOfValue.value==0){
//     while (j<chanceDragonToAttack.length) {
//         if (chanceDragonToAttack[j]>chancePlayerToAttack[j]) {
//             restLifePlayer-=pointLifePlayer-pointDommageMinoré  
//             if (restLifeDragon>restLifePlayer) {
//                 restLifePlayer=0;
//                 console.log("loser")
//             }
           
//         }
//         else if (chanceDragonToAttack[j]<chancePlayerToAttack[j]) {
//             restLifeDragon-=pointLifePlayer-pointDomageMajoré
//             if(restLifeDragon<restLifePlayer){
//                 restLifeDragon=0;
//                 console.log("winner")
//               }
              
//         }
//         else if(chanceDragonToAttack[j]==chancePlayerToAttack[j]){
//             chanceDragonToAttack.push(Math.round(Math.random()*5)+100)
//             chancePlayerToAttack.push(Math.round(Math.random()*5)+100)
//         }
        
//         j++ ;
//     }
     
//     console.log("dragon",chanceDragonToAttack)
//     console.log("player",chancePlayerToAttack)
//     console.log("player ",restLifePlayer)
//     console.log("dragon",restLifeDragon)
    
    
//  } 
var mode=document.getElementsByClassName("mode")[0];

 displayContent.classList.add("title");
displayContent.innerHTML="<p></p>"+"<p></p>"+"<p></p>"+"<img>";
var disPlayer=document.querySelectorAll("#container p");
var imgWinner=document.querySelectorAll("#container img")[0];

 for (let i = 0; i < disPlayer.length; i++) {
    disPlayer[i].classList.add("styling")
    
 }

  
   
 switch (numberOfValue.value) {
    case "0":while (j<chanceDragonToAttack.length) {
         if(chanceDragonToAttack[j]==chancePlayerToAttack[j]){
            chanceDragonToAttack.push(Math.round(Math.random()*5)+100)
            chancePlayerToAttack.push(Math.round(Math.random()*5)+100)
        }
       else if (chanceDragonToAttack[j]>chancePlayerToAttack[j]) {
            restLifePlayer-=pointDommageMinoré  
            
            
            if (restLifePlayer<0) {
                restLifePlayer=0;
                disPlayer[1].innerText="loser"
                imgWinner.src="images/dragon-winner.png"
            }
            tabRestPlayer.push(restLifePlayer)
            
        }
        else if (chanceDragonToAttack[j]<chancePlayerToAttack[j]) {
            restLifeDragon-=pointDomageMajoré
            console.log("restDragon",restLifeDragon)
            if(restLifeDragon<0){
                restLifeDragon=0;
                disPlayer[1].innerText="winner"
                imgWinner.src="images/soldat.jpeg"
                
              }
              tabRestDragon.push(restLifeDragon)
              
        }
       
        
        j++ ;
    }
    displayChancePlayer.innerHTML="<p></p>"+"<p></p>";
 var player=displayChancePlayer.getElementsByTagName("p");




 for (let i = 0; i < chancePlayerToAttack.length; i++) {
    player[0].innerHTML+="chance "+ (i+1) +" for player: "+ chancePlayerToAttack[i]+"<br>";
    
}
for (let i = 0; i < chanceDragonToAttack.length; i++) {
    player[1].innerHTML+="chance "+ (i+1) +" for Dragon: "+ chanceDragonToAttack[i]+"<br>";
    
}
for (let i = 0; i < tabRestPlayer.length; i++) {
    displayPointPlayer.innerHTML+= "rest of point for player at  the round "+(i+1)+" is "+tabRestPlayer[i]+"<br>"
    
}
for (let i = 0; i < tabRestDragon.length; i++) {
    displayPointDragon.innerHTML+= "rest of point for Dragon at  the round "+(i+1)+" is "+tabRestDragon[i]+"<br>"
    
}
player[0].classList.add("modify")
player[1].classList.add("modify")
displayPointPlayer.classList.add("anotherChange")
displayPointDragon.classList.add("anotherChange")
displayPointDragon.innerHTML+="<br>"+"dragon score is :"+restLifeDragon  ;
displayPointPlayer.innerHTML+="<br>"+"player score is: "+restLifePlayer;
disPlayer[0].innerText="score of player :"+ " "+pointLifePlayer;
disPlayer[2].innerText= "score of dragon :"+ " "+pointLifeDragon;
mode.innerText="easy"


        
        break;
        case "1":while (j<chanceDragonToAttack.length) {
            if(chanceDragonToAttack[j]==chancePlayerToAttack[j]){
               chanceDragonToAttack.push(Math.round(Math.random()*5)+100)
               chancePlayerToAttack.push(Math.round(Math.random()*5)+100)
           }
          else if (chanceDragonToAttack[j]>chancePlayerToAttack[j]) {
            restLifePlayerDifficile-=pointDomageMajoré
               console.log(restLifePlayerDifficile)
               
               if (restLifePlayerDifficile<0) {
                restLifePlayerDifficile=0;
                   disPlayer[1].innerText="loser"
                   imgWinner.src="images/dragon-winner.png"
               }
               tabRestPlayer.push(restLifePlayerDifficile)
               
           }
           else if (chanceDragonToAttack[j]<chancePlayerToAttack[j]) {
               restLifeDragonDifficile-=pointDommageMinoré
               console.log("restDragon",restLifeDragonDifficile)
               if(restLifeDragonDifficile<0){
                restLifeDragonDifficile=0;
                   disPlayer[1].innerText="winner"
                   imgWinner.src="images/knight.png"
                   
                 }
                 tabRestDragon.push(restLifeDragonDifficile)
                 
           }
          
           
           j++ ;
       }
       displayChancePlayer.innerHTML="<p></p>"+"<p></p>";
    var player=displayChancePlayer.getElementsByTagName("p");
   
 
   
   
    for (let i = 0; i < chancePlayerToAttack.length; i++) {
       player[0].innerHTML+="chance "+ (i+1) +" for player: "+ chancePlayerToAttack[i]+"<br>";
       
   }
   for (let i = 0; i < chanceDragonToAttack.length; i++) {
       player[1].innerHTML+="chance "+ (i+1) +" for Dragon: "+ chanceDragonToAttack[i]+"<br>";
       
   }
   for (let i = 0; i < tabRestPlayer.length; i++) {
       displayPointPlayer.innerHTML+= "rest of point for player at  the round "+(i+1)+" is "+tabRestPlayer[i]+"<br>"
       
   }
   for (let i = 0; i < tabRestDragon.length; i++) {
       displayPointDragon.innerHTML+= "rest of point for Dragon at  the round "+(i+1)+" is "+tabRestDragon[i]+"<br>"
       
   }
   player[0].classList.add("modify")
   player[1].classList.add("modify")
   displayPointPlayer.classList.add("anotherChange")
   displayPointDragon.classList.add("anotherChange")
   displayPointDragon.innerHTML+="<br>"+"dragon score is :" +restLifeDragonDifficile;
   displayPointPlayer.innerHTML+="<br>"+"player score is: "+restLifePlayerDifficile;
   disPlayer[0].innerText="score of player : "+pointLifePlayerDifficile;
   disPlayer[2].innerText= "score of dragon : "+ pointLifeDragonDifficile;
   mode.innerText="hard"
   break ;
   case "2":while (j<chanceDragonToAttackMoy.length) {
    if(chanceDragonToAttackMoy[j]==chancePlayerToAttackMoy[j]){
       chanceDragonToAttackMoy.push(Math.round(Math.random()*5)+100)
       chancePlayerToAttackMoy.push(Math.round(Math.random()*5)+100)
   }
  else if (chanceDragonToAttackMoy[j]>chancePlayerToAttackMoy[j]) {
    restLifePlayerMoyenne-=pointDamageMoy
       
       
       if (restLifePlayerMoyenne<0) {
        restLifePlayerMoyenne=0;
           disPlayer[1].innerText="loser"
           imgWinner.src="images/dragon-winner.png"
       }
       tabRestPlayer.push(restLifePlayerMoyenne)
       
   }
   else if (chanceDragonToAttackMoy[j]<chancePlayerToAttackMoy[j]) {
       restLifeDragonMoyenne-=pointDamageMoy
       console.log("restDragon",restLifeDragonMoyenne)
       if(restLifeDragonMoyenne<0){
        restLifeDragonMoyenne=0;
           disPlayer[1].innerText="winner"
           imgWinner.src="images/knight.png"
           
         }
         tabRestDragon.push(restLifeDragonMoyenne)
         
   }
  
   
   j++ ;
}
displayChancePlayer.innerHTML="<p></p>"+"<p></p>";
var player=displayChancePlayer.getElementsByTagName("p");




for (let i = 0; i < chancePlayerToAttackMoy.length; i++) {
player[0].innerHTML+="chance "+ (i+1) +" for player: "+ chancePlayerToAttack[i]+"<br>";

}
for (let i = 0; i < chanceDragonToAttackMoy.length; i++) {
player[1].innerHTML+="chance "+ (i+1) +" for Dragon: "+ chanceDragonToAttack[i]+"<br>";

}
for (let i = 0; i < tabRestPlayer.length; i++) {
displayPointPlayer.innerHTML+= "rest of point for player at  the round "+(i+1)+" is "+tabRestPlayer[i]+"<br>"

}
for (let i = 0; i < tabRestDragon.length; i++) {
displayPointDragon.innerHTML+= "rest of point for Dragon at  the round "+(i+1)+" is "+tabRestDragon[i]+"<br>"

}
player[0].classList.add("modify")
player[1].classList.add("modify")
displayPointPlayer.classList.add("anotherChange")
displayPointDragon.classList.add("anotherChange")
displayPointDragon.innerHTML+="<br>"+"dragon score is :" +restLifeDragonMoyenne;
displayPointPlayer.innerHTML+="<br>"+"player score is: "+restLifePlayerMoyenne;
disPlayer[0].innerText="score of player : "+pointLifePlayer ;
disPlayer[2].innerText= "score of dragon : "+ pointLifePlayer;
mode.innerText="Moyenne"
   break;
  
 
    default:mode.innerHTML="that is not the level which can starting the game"
        break;
 }

 
}

function restart() {
    startGame[0].removeEventListener("click",eventGame) 
   
    
   
}

    







  


