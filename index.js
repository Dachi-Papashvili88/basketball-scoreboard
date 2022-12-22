let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let countHome = 0;
let countGuest = 0;

function homeScoreOne (){
  countHome += 1;
  homeScoreEl.textContent = countHome;
}

function homeScoreTwo (){
  countHome += 2;
  homeScoreEl.textContent = countHome;
}

function homeScoreThree(){
  countHome += 3;
  homeScoreEl.textContent = countHome;
}

function guestScoreOne(){
  countGuest += 1;
  guestScoreEl.textContent = countGuest;
}

function guestScoreTwo(){
  countGuest += 2;
  guestScoreEl.textContent = countGuest;
}

function guestScoreThree(){
  countGuest += 3;
  guestScoreEl.textContent = countGuest;
}