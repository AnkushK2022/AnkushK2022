<script type="text/javascript">
let counter=0;
var counterreader=0;
var changetime=0 ,clickedtime=0 ,reactiontime=0;
function musicon(){
const gsound=document.getElementById("game-sound");
gsound.loop=true;
gsound.play();
document.getElementById("music-onoff-reader").innerHTML="on";
document.getElementById("msc-on-or-off").innerHTML="on";
btnsound1();
}
function musicoff(){
document.getElementById("game-sound").pause();
document.getElementById("music-onoff-reader").innerHTML="off";
document.getElementById("msc-on-or-off").innerHTML="off";
btnsound1();
}
function mnext(){
document.getElementById("m-next").style.display="none";
document.getElementById("music-on-off-window").style.display="none";
document.getElementById("sound-on-off-window").style.display="block";
btnsound2();
}
function soundon(){
document.getElementById("button-click-sound-1").play();
document.getElementById("sound-onoff-reader").innerHTML="on";
document.getElementById("snd-on-or-off").innerHTML="on";
}
function soundoff(){
document.getElementById("sound-onoff-reader").innerHTML="off";
document.getElementById("snd-on-or-off").innerHTML="off";
}
function snext(){
document.getElementById("s-next").style.display="none";
document.getElementById("s-back").style.display="none";
document.getElementById("m-next").style.display="none";
document.getElementById("sound-on-off-window").style.display="none";
document.getElementById("main-menu").style.display="block";
btnsound2();
}
function sback(){
document.getElementById("music-on-off-window").style.display="block";
document.getElementById("m-next").style.display="block";
document.getElementById("sound-on-off-window").style.display="none";
btnsound2();
}
var soundstatus = document.getElementById("sound-onoff-reader");
function btnsound1(){
  if(soundstatus.innerHTML=="on"){
  document.getElementById("button-click-sound-1").play();
  }
}
function btnsound2(){
  if(soundstatus.innerHTML=="on"){
  document.getElementById("button-click-sound-2").play();
  }
}
function successsound(){
  if(soundstatus.innerHTML=="on"){
  document.getElementById("success-sound").play();
  }
}
function gameoversound(){
  if(document.getElementById("sound-onoff-reader").innerHTML=="on"){
  document.getElementById("game-over-sound").play();
  }
}
function errorsound(){
  if(soundstatus.innerHTML=="on"){
  document.getElementById("error-sound").play();
  }
}
function achievementsound(){
  if(soundstatus.innerHTML=="on"){
  document.getElementById("achievement-sound").play();
  }
}
function changedbeepsound(){
  if(soundstatus.innerHTML=="on"){
  document.getElementById("changed-beep-sound").play();
  }
}

function startgame(){
document.getElementById("logo-menu").style.display="none";
document.getElementById("change-theme-button-wrapper").style.display="none";
document.getElementById("lifes").style.display="block";
document.getElementById("roundshape").style.display="block";
document.getElementById("main-content").style.display="block";
document.getElementById("get-color-change").style.display="block";
document.getElementById("colorbtns").style.display="block";
document.getElementById("pausebtn").style.display="block";
document.getElementById("pausebtn").style.display="block";
document.getElementById("quitbtn").style.display="block";
document.getElementById("score-board").style.display="block";
document.getElementById("welcome-text").style.display="block";
document.getElementById("scoring").innerHTML="0";
document.getElementById("change-theme-button").style.animation="appear 0.5s ease-in forwards 0s";
btnsound1();
f1();
}

function openhowtoplaydiv(){
document.getElementById("logo-menu").style.display="none";
document.getElementById("how-to-play").style.display="block";
btnsound1();
}
function openhighscorediv(){
document.getElementById("logo-menu").style.display="none";
document.getElementById("high-score-div").style.display="block";
document.getElementById("exitreseths").style.display="block";
document.getElementById("average-reaction-time-div").style.display="block";
console.log(localStorage.getItem('hslclstrg'));
var arct=localStorage.getItem('artimelclstrg');
document.getElementById("average-reaction-time").innerHTML=arct;
btnsound1();
}
function exithtpdiv(){
document.getElementById("logo-menu").style.display="block";
document.getElementById("how-to-play").style.display="none";
btnsound2();
}
function exithsddiv(){
document.getElementById("logo-menu").style.display="block";
document.getElementById("high-score-div").style.display="none";
document.getElementById("exitreseths").style.display="none";
document.getElementById("average-reaction-time-div").style.display="none";
btnsound2();
}
function openaboutdiv(){
document.getElementById("logo-menu").style.display="none";
document.getElementById("about-div").style.display="block";
btnsound1();
}
function exitaboutdiv(){
document.getElementById("logo-menu").style.display="block";
document.getElementById("about-div").style.display="none";
btnsound2();
}
function openoptionsdiv(){
document.getElementById("logo-menu").style.display="none";
document.getElementById("options-div").style.display="block";
btnsound1();
}
function openmusicdiv(){
document.getElementById("options-div").style.display="none";
document.getElementById("o-m-back").style.display="block";
document.getElementById("music-on-off-window").style.display="block";
btnsound1();
}
function exitmusicdiv(){
document.getElementById("options-div").style.display="block";
document.getElementById("o-m-back").style.display="none";
document.getElementById("music-on-off-window").style.display="none";
btnsound2();
}
function opensounddiv(){
document.getElementById("options-div").style.display="none";
document.getElementById("o-s-back").style.display="block";
document.getElementById("sound-on-off-window").style.display="block";
btnsound1();
}
function exitsounddiv(){
document.getElementById("options-div").style.display="block";
document.getElementById("o-s-back").style.display="none";
document.getElementById("sound-on-off-window").style.display="none";
btnsound2();
}
function exitoptionsdiv(){
document.getElementById("logo-menu").style.display="block";
document.getElementById("options-div").style.display="none";
btnsound2();
}
var comfirmexitgame = document.getElementById("comfirmexitgame");
var egbtn = document.getElementById("exitgame");
var closeceg = document.getElementsByClassName("close-comfirmexitgame")[0];
egbtn.onclick = function() {
  comfirmexitgame.style.display = "block";
  btnsound1();
}
closeceg.onclick = function() {
  comfirmexitgame.style.display = "none";
  btnsound2();
}
function noexitgame(){
  comfirmexitgame.style.display="none";
  btnsound2();
}
function exitgame(){
document.getElementById("game-sound").pause();
document.getElementById("game-body").style.display="none";
}
var comfirmreset = document.getElementById("comfirmreset");
var rbtn = document.getElementById("reset-hs");
var closecr = document.getElementsByClassName("close-comfirmreset")[0];
rbtn.onclick = function() {
  comfirmreset.style.display = "block";
  btnsound2();
}
closecr.onclick = function() {
  comfirmreset.style.display = "none";
  btnsound2();
}
function noreseths(){
  comfirmreset.style.display="none";
  btnsound2();
}
function reseths(){
document.getElementById("high-scoring").innerHTML="0";
document.getElementById("average-reaction-time").innerHTML="0";
comfirmreset.style.display="none";
btnsound2();
localStorage.removeItem('hslclstrg');
localStorage.removeItem('artimelclstrg');
}

var pausegame = document.getElementById("play-pause");
var pbtn = document.getElementById("pausebtn");
pbtn.onclick = function() {
  pausegame.style.display = "block";
  document.getElementById("change-theme-button-wrapper").style.display="block";
  if(document.getElementById("msc-on-or-off").innerHTML=="on"){
   document.getElementById("game-sound").pause();
  }
  if(document.getElementById("snd-on-or-off").innerHTML=="on"){
   document.getElementById("sound-onoff-reader").innerHTML="off";
  }
  btnsound2();
}
function replay(){
 pausegame.style.display="none";
 document.getElementById("change-theme-button-wrapper").style.display="none";
 if(document.getElementById("msc-on-or-off").innerHTML=="on"){
  document.getElementById("game-sound").play();
 }
 if(document.getElementById("snd-on-or-off").innerHTML=="on"){
  document.getElementById("sound-onoff-reader").innerHTML="on";
 }
 btnsound2();
 f1();
}

function checkwhite(){if(document.getElementById("white").innerHTML==document.getElementById("color-change").innerHTML){white();}else{reducelifes();}}
function checklime(){if(document.getElementById("lime").innerHTML==document.getElementById("color-change").innerHTML){lime();}else{reducelifes();}}
function checkviolet(){if(document.getElementById("violet").innerHTML==document.getElementById("color-change").innerHTML){violet();}else{reducelifes();}}
function checkindigo(){if(document.getElementById("indigo").innerHTML==document.getElementById("color-change").innerHTML){indigo();}else{reducelifes();}}
function checkblue(){if(document.getElementById("blue").innerHTML==document.getElementById("color-change").innerHTML){blue();}else{reducelifes();}}
function checkgreen(){if(document.getElementById("green").innerHTML==document.getElementById("color-change").innerHTML){green();}else{reducelifes();}}
function checkyellow(){if(document.getElementById("yellow").innerHTML==document.getElementById("color-change").innerHTML){yellow();}else{reducelifes();}}
function checkorange(){if(document.getElementById("orange").innerHTML==document.getElementById("color-change").innerHTML){orange();}else{reducelifes();}}
function checkred(){if(document.getElementById("red").innerHTML==document.getElementById("color-change").innerHTML){red();}else{reducelifes();}}
function checkpurple(){if(document.getElementById("purple").innerHTML==document.getElementById("color-change").innerHTML){purple();}else{reducelifes();}}

function white(){
document.getElementById("circle").style.fill="white";
successsound();
score();
}
function lime(){
document.getElementById("circle").style.fill="lime";
successsound();
score();
}
function violet(){
document.getElementById("circle").style.fill="violet";
successsound();
score();
}
function indigo(){
document.getElementById("circle").style.fill="indigo";
successsound();
score();
}
function blue(){
document.getElementById("circle").style.fill="blue";
successsound();
score();
}
function green(){
document.getElementById("circle").style.fill="green";
successsound();
score();
}
function yellow(){
document.getElementById("circle").style.fill="yellow";
successsound();
score();
}
function orange(){
document.getElementById("circle").style.fill="orange";
successsound();
score();
}
function red(){
document.getElementById("circle").style.fill="red";
successsound();
score();
}
function purple(){
document.getElementById("circle").style.fill="purple";
successsound();
score();
}

lifes=document.getElementById("life-counts");
function reducelifes(){
  lifes.innerHTML-=1;
  errorsound();
  checklifes();
}
function checklifes(){
  if(lifes.innerHTML==0){
    displaygameover();
  }
}
function displaygameover(){
document.getElementById("game-over").style.display="block";
document.getElementById("play-again").style.display="block";
document.getElementById("gtmm").style.display="block";
document.getElementById("average-reaction-time-div").style.display="block";
document.getElementById("main-content").style.display="none";
document.getElementById("get-color-change").style.display="none";
document.getElementById("roundshape").style.display="none";
document.getElementById("lifes").style.display="none";
gameoversound();
nhs();
}
function playagain(){
document.getElementById("main-content").style.display="block";
document.getElementById("pausebtn").style.display="block";
document.getElementById("quitbtn").style.display="block";
document.getElementById("colorbtns").style.display="block";
document.getElementById("get-color-change").style.display="block";
document.getElementById("score-board").style.display="block";
document.getElementById("roundshape").style.display="block";
document.getElementById("lifes").style.display="block";
document.getElementById("game-over").style.display="none";
document.getElementById("play-again").style.display="none";
document.getElementById("gtmm").style.display="none";
document.getElementById('nhs').style.display='none';
document.getElementById('high-score-div').style.display='none';
document.getElementById("average-reaction-time-div").style.display="none";
btnsound2();
document.getElementById("scoring").innerHTML="0";
document.getElementById("life-counts").innerHTML="3";
counter=0;
counterreader=0;
t=2000;
interval=setInterval(f1,t);
}
var comfirmquit = document.getElementById("comfirmquit");
var quitbtn = document.getElementById("quitbtn");
var closecq = document.getElementsByClassName("close-comfirmquit")[0];
quitbtn.onclick = function() {
  comfirmquit.style.display = "block";
  btnsound2();
}
closecq.onclick = function() {
  comfirmquit.style.display = "none";
  btnsound2();
}
function noquit(){
  comfirmquit.style.display="none";
  btnsound2();
}
function quit(){
document.getElementById("logo-menu").style.display="block";
document.getElementById("change-theme-button-wrapper").style.display="block";
document.getElementById("game-over").style.display="none";
document.getElementById("play-again").style.display="none";
document.getElementById("gtmm").style.display="none";
document.getElementById("main-content").style.display="none";
document.getElementById("pausebtn").style.display="none";
document.getElementById("quitbtn").style.display="none";
document.getElementById("roundshape").style.display="none";
document.getElementById("colorbtns").style.display="none";
document.getElementById("score-board").style.display="none";
document.getElementById("get-color-change").style.display="none";
document.getElementById("lifes").style.display="none";
document.getElementById('nhs').style.display='none';
document.getElementById('high-score-div').style.display='none';
document.getElementById("comfirmquit").style.display="none";
document.getElementById("average-reaction-time-div").style.display="none";
btnsound2();
document.getElementById("scoring").innerHTML="0";
document.getElementById("life-counts").innerHTML="3";
counter=0;
counterreader=0;
t=2000;
clearInterval(interval);
}

function nhs(){
    var cs=document.getElementById("scoring");
    var chs=document.getElementById("high-scoring");
    if(cs.innerHTML >= chs.innerHTML && cs.innerHTML != 0){
      document.getElementById('nhs').style.display='block';
      document.getElementById('high-score-div').style.display='block';
   }
}


var names = ['White', 'Lime', 'Violet', 'Indigo', 'Blue', 'Green', 'Yellow','Orange', 'Red', 'Purple'];
var t=2000;
var interval;
function f1(){
  clearInterval(interval);
  var rand = Math.floor(Math.random() * 10);
  document.getElementById("color-change").innerHTML = names[rand];
  document.getElementById("color-change").style.color = names[rand];
  changedbeepsound();
  changetime=Date.now();
  if(counterreader==5){
  achievementsound();
  changetimer();
  }
  if(document.getElementById("get-color-change").style.display == "block"){
    interval=setInterval(f1,t);
  }
}
function changetimer(){
if(counter==5){t=1850;counterreader=0;}
if(counter==10){t=1700;counterreader=0;}
if(counter==15){t=1550;counterreader=0;}
if(counter==20){t=1300;counterreader=0;}
if(counter==25){t=1150;counterreader=0;}
if(counter==30){t=1000;counterreader=0;}
if(counter==35){t=850;counterreader=0;}
if(counter==45){t=700;counterreader=0;}
if(counter==50){t=550;counterreader=0;}
if(counter==55){t=400;counterreader=0;}
}
var averctntm=document.getElementById("average-reaction-time");
var scored=document.getElementById("scoring");
function score(){
 counter=counter+1;
 counterreader+=1;
 console.log(counter);
 clickedtime=Date.now();
 reactiontime=(clickedtime-changetime)/1000;
 if(averctntm.innerHTML<reactiontime){
  averctntm.innerHTML=reactiontime;
  localStorage.setItem('artimelclstrg',reactiontime);
  }else{
  averctntm.innerHTML=averctntm.innerHTML;
 }
}

(function () {
    var old = console.log;
    var logger = document.getElementById('scoring');
    var logger2 = document.getElementById('high-scoring');
    console.log = function (message) {
            logger.innerHTML=message;
            if(logger2.innerHTML<message)
            {
            logger2.innerHTML=message;
            localStorage.setItem('hslclstrg',message);
            }else{
            logger2.innerHTML=logger2.innerHTML;
            }
        }
    }
)();

</script>
<script type="text/javascript">

function changetheme(){
 var ctb = document.getElementById("change-theme-button");
 var gb = document.getElementById("game-body");
 var pl = document.getElementById("pousedlayer");
 var cb = document.getElementById("colorbtns");
 var mmil = document.getElementsByTagName('a');
 var btnsthm = document.getElementsByTagName('button');
 if(ctb.innerHTML=="Dark theme"){
  document.body.style.backgroundImage="var(--backgroundimagedark)";
  document.getElementById("PauseGameContent").style.backgroundImage="var(--backgroundimagedark)";
  document.getElementById("ComformQuitContent").style.backgroundImage="var(--backgroundimagedark)";
  document.getElementById("ComformExitContent").style.backgroundImage="var(--backgroundimagedark)";
  document.getElementById("ComformResetContent").style.backgroundImage="var(--backgroundimagedark)";
  gb.style.color="aqua";
  pl.style.background="black";
  cb.style.opacity="0.7";
  ctb.innerHTML="Light theme";
  for(var i=0; i<9; i++){
  mmil[i].style.color="aqua";
  }
  for (var i = 0; i < btnsthm.length; i++) {
   var node = btnsthm[i];
   if (node.getAttribute('type') == 'button') {
    node.style.color="aqua";
    node.style.border="1px solid white"
   }
  }
  btnsound1();
 }
 else{
  if(ctb.innerHTML=="Light theme"){
   document.body.style.backgroundImage="var(--backgroundimage)";
   document.getElementById("PauseGameContent").style.backgroundImage="var(--backgroundimage)";
   document.getElementById("ComformQuitContent").style.backgroundImage="var(--backgroundimage)";
   document.getElementById("ComformExitContent").style.backgroundImage="var(--backgroundimage)";
   document.getElementById("ComformResetContent").style.backgroundImage="var(--backgroundimage)";
   gb.style.color="black";
   pl.style.background="aqua";
   cb.style.opacity="1";
   ctb.innerHTML="Dark theme";
   for(var i=0; i<9; i++){
    mmil[i].style.color="black";
   }
   for (var i = 0; i < btnsthm.length; i++) {
    var node = btnsthm[i];
    if (node.getAttribute('type') == 'button') {
     node.style.color="black";
     node.style.border="1px solid black"
    }
   }
  }
  btnsound2();
 } 
}

</script>
