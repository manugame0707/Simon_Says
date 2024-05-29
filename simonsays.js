let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highScore = 0;
let btns = ['yellow', 'red', 'purple', 'green'];
document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('game satrted');
        started = true;
        levelUp();
    };
});
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 500);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randbtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randbtn);
    gameFlash(randbtn);
    gameSeq.push(randCol);
    console.log(gameSeq);


}
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 500);
}
function btnPress() {
    // console.log(this);
    let bttn = this;
    userFlash(bttn);
    userCol = bttn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length - 1);
};
let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
};
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game is over! Your score was <b> ${level}</b> Press any key to start.`;
        //h3.innerText = `Highest Score is ${highScore}`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () { document.querySelector('body').style.backgroundColor = 'white'; }, 150);
        if (highScore > level) {
            h3.innerText = `Your last higest score is ${highScore}`;

        } else {
            highScore = level;
            h3.innerText = `Your last higest score is ${highScore}`;
        }
        reset();

    }
};
function reset() {
    // highScore = level;

    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
};

