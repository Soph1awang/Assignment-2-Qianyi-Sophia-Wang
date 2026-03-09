document.addEventListener("DOMContentLoaded", function(){

const radios = document.querySelectorAll("input[type='radio']")
const overlay = document.querySelector(".overlay")

const instructionBox = document.querySelector(".instruction")
const wrongBox = document.querySelector(".wrong")
const correctBox = document.querySelector(".correct")

const readyBtn = document.querySelector(".ready-btn")
const retryBtn = document.querySelector(".retry-btn")
const closeBtn = document.querySelector(".close-btn")

const video = document.getElementById("shuffleVideo")
const list = document.querySelector(".todo-list")

let guessing = false

// Open instruction overlay
radios.forEach(function(radio){
radio.addEventListener("click",function(e){
if(!guessing){
e.preventDefault(); //prevents displaying the radio button as selected
overlay.style.display="flex"
instructionBox.classList.add("active")
}
});
});


// ready button
readyBtn.addEventListener("click", function(){
instructionBox.classList.remove("active")
overlay.style.display="none"

// hide radios
list.classList.add("hide-radios");

// play video
video.style.display = "block";
video.play();
});


// video ends
video.addEventListener("ended", function(){
video.style.display="none"

// show radios again
list.classList.remove("hide-radios");
guessing = true;
});


// guessing
radios.forEach(function(radio, index){
radio.addEventListener("click", function(){
if(!guessing) return;
overlay.style.display = "flex";

//button results
if(index === 2){
correctBox.classList.add("active");
radio.checked = true;
radio.closest("li").style.opacity = "0.5";
}else{
wrongBox.classList.add("active");
}
guessing = false;
});
});



// try again
retryBtn.addEventListener("click", function(){
wrongBox.classList.remove("active");
overlay.style.display = "none";

// restart video
list.classList.add("hide-radios");
video.style.display = "block";
video.currentTime = 0;
video.play();
});


// CLOSE
closeBtn.addEventListener("click", function(){
correctBox.classList.remove("active");
overlay.style.display = "none";
});
});