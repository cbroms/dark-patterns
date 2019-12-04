//localStorage.removeItem("gameScore");
const id = gameInProgress();

// redirect to index if the game is not started
if (!id) {
    window.location.href = "/";
}

// var to store the interval used to score
let scoreTicker;

// update the score every second
const startPlay = () => {
    // setup the mem for the level
    prepareLocalMem(id, levelNum);

    // setup header with score and reset button
    const headerDiv = document.createElement("DIV");
    headerDiv.id = "playHeader";

    const restartButton = document.createElement("BUTTON");
    restartButton.id = "restart";
    restartButton.innerText = "Restart Level";
    restartButton.onclick = () => {
        endPlay();
        window.location.href = "/level-1/";
    };

    // create the div to show the score
    const scoreDiv = document.createElement("DIV");
    scoreDiv.id = "score";

    headerDiv.appendChild(scoreDiv);
    headerDiv.appendChild(restartButton);
    document.body.insertBefore(headerDiv, document.body.childNodes[0] || null);

    scoreTicker = window.setInterval(() => {
        updateGameScore(1, id, levelNum);
        currentScore = getGameScore(id);

        // format the time
        const minutes = Math.floor(currentScore / 60);
        let seconds = currentScore - minutes * 60;
        seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;

        document.getElementById(
            "score"
        ).innerText = `Your time: ${minutes}:${seconds}`;
    }, 1000);
};

const endPlay = () => {
    window.clearInterval(scoreTicker);
};

//startPlay();

// prepareLocalMem("azy");
// console.log(getAllScores());
