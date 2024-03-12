let homeScoreEl =document.getElementById("home-score")
let homeScore = 0

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreEl = document.getElementById("guset-score")
let guestScore = 0

let guestScoreBtnOne = document.getElementById("guset-score-btn-1")
function increaseGusetScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
let guestScoreBtnTwo = document.getElementById("guset-score-btn-2")
function increaseGusetScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
let guestScoreBtnThree = document.getElementById("guset-score-btn-3")
function increaseGusetScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}