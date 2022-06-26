var mosiac=""
var loadingprocess=""
var credits_alr_dis="no"
var clicked=""
var repeater="0"
var elem= document.documentElement;
var ghost = document.getElementsByClassName('ghost');
var bodyid= document.getElementById("new-bg")

const body = document.getElementById("new-bg");

function check(){
if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
hide.style.display='none';
fullscrnbtn.style.display='none';
console.log("filled now")
repeater="1"
}
else{
hide.style.display='block';
fullscrnbtn.style.display='block';
console.log("not filled");
}}

function fullscrn(){ 
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
        hide.style.display='none';
        fullscrnbtn.style.display='none';
      console.log("hidden?")}
  
function credit_display(){
if (credits_alr_dis !== "yes"){
document.getElementById("credits-popup").style.visibility= "visible";
credits_alr_dis= "yes"
console.log(credits_alr_dis);
}
else{
document.getElementById("credits-popup").style.visibility= "hidden";
credits_alr_dis= "no"
console.log(credits_alr_dis);
}
}

function login(){
if((document.getElementById("player_1_name").value.length == 0) || (document.getElementById("player_2_name").value.length == 0))
{
alert("Error 4201:One or more Usernames is not filled")
}
else{
var name1= document.getElementById("player_1_name").value;
var name2= document.getElementById("player_2_name").value;
console.log(name1 + name2);
localStorage.setItem("name1", name1);
localStorage.setItem("name2", name2);
for (var i = 0; i < ghost.length; i++ ) {
  ghost[i].style.display = "none";
}
document.getElementById("body-bg").id = "new-bg";
loadingprocess= "login done";
console.log(loadingprocess);
}}

function opendoor(){
  if(loadingprocess="login done"){
    console.log("im a idiot")
  timeout = setTimeout(actualopen, 7000);
  }}
  
  function actualopen(){
  console.log("new-bg is still here")
  document.getElementById("new-bg").id ="new2-bg";
  console.log("new-bg2 is here")}

function music(){
  mosiac="true"
  localStorage.setItem("music", mosiac);
  myAudio = new Audio('Main_Theme.mp3'); 
  if (typeof myAudio.loop == 'boolean')
  {
      myAudio.loop = true;
  }
  else
  {
      myAudio.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
  }, false);
  }
  myAudio.play();

  musicy.style.display='none'
  musicn.style.display='initial'
}

function nmusic(){
mosiac="false"
localStorage.setItem("music", mosiac);
musicy.style.display='initial'
musicn.style.display='none'
myAudio.pause();
myAudio.currentTime = 0;
}

