let pointsHome = document.getElementById("points-home");
let pointsGuest = document.getElementById("points-guest");

let homeScore = 0;
let guestScore = 0;

function addOneHome(){
    homeScore += 1;
    pointsHome.textContent = homeScore;
};

function addTwoHome(){
    homeScore += 2;
    pointsHome.textContent = homeScore;
};

function addThreeHome(){
    homeScore += 3;
    pointsHome.textContent = homeScore;
};


function addOneGuest(){
    guestScore += 1;
    pointsGuest.textContent = guestScore;
};

function addTwoGuest(){
    guestScore += 2;
    pointsGuest.textContent = guestScore;
};

function addThreeGuest(){
    guestScore += 3;
    pointsGuest.textContent = guestScore;
};


function resetScore() {
    homeScore = 0;
    guestScore = 0;
    
    pointsHome.textContent = 0;
    pointsGuest.textContent = 0;
};