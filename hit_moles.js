const grid$$ = document.body.querySelectorAll(".b-square");
const timeLeft$$ = document.body.querySelector('[data-function="time-left"]');
const score$$ = document.body.querySelector('[data-function="score"]');
let count = 30;
let score = 0;

const moleCheck = () => {
    const class$$ = event.target.getAttribute("class");
    console.log(class$$);
    if (class$$.indexOf("b-mole") !== -1) {
        score++;
        score$$.textContent = score;
    }
};

for (box of grid$$) {
    box.addEventListener("click", moleCheck);
}

const moleBox = () => {
    const num = parseInt(Math.random() * (9 - 0));
    grid$$[num].setAttribute("class", "b-square b-mole");
    setTimeout(() => {
        grid$$[num].setAttribute("class", "b-square");
    }, 500);
};

const countDown = () => {
    count--;
    timeLeft$$.textContent = count;

    if (count === 0) {
        clearInterval(countInterval);
        clearInterval(moleInterval);
        setTimeout(() => {
            alert(`¡Time Over!\nYour score is:   ${score}`);
        }, 100);
    }
};

const countInterval = setInterval(countDown, 1000);
const moleInterval = setInterval(moleBox, 500);
