let hScore = document.getElementById("h-score");
let gScore = document.getElementById("g-score");
let msgHome = "Home is in the lead. Let's go!!!"
let msgGuest = "Guest are leading. Keep going!!!"
let equal = "Both Home and Guest are going toe-to-toe!!!"
let update = document.getElementById("update");
let hcount = 0;
let gcount = 0;

function hone() {
    hcount += 1;
    hScore.textContent = hcount;
    if (hcount > gcount) {
        update.textContent = msgHome
    }
    else if (hcount == gcount) {
        update.textContent = equal
    }
}

function gone() {
    gcount += 1;
    gScore.textContent = gcount;
    if (hcount < gcount) {
        update.textContent = msgGuest
    }
    else if (hcount == gcount) {
        update.textContent = equal
    }
}

function htwo() {
    hcount += 2;
    hScore.textContent = hcount;
    if (hcount > gcount) {
        update.textContent = msgHome
    }
    else if (hcount == gcount) {
        update.textContent = equal
    }
}

function gtwo() {
    gcount += 2;
    gScore.textContent = gcount;
    if (hcount < gcount) {
        update.textContent = msgGuest
    }
    else if (hcount == gcount) {
        update.textContent = equal
    }
}

function hthree() {
    hcount += 3;
    hScore.textContent = hcount;
    if (hcount > gcount) {
        update.textContent = msgHome
    }
    else if (hcount == gcount) {
        update.textContent = equal
    }
}

function gthree() {
    gcount += 3;
    gScore.textContent = gcount;
    if (hcount < gcount) {
        update.textContent = msgGuest
    }
    else if (hcount == gcount) {
        update.textContent = equal
    }
}

function newgame() {
    hcount = 0;
    gcount = 0;
    gScore.textContent = 0;
    hScore.textContent = 0;
    update.textContent = "The game begins soon. Get seated!";
}
