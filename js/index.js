//localStorage.removeItem("gameScore");
const id = gameInProgress();

// redirect to index if the game is not started
if (!id) {
    window.location.href = "/";
}

// var to store the interval used to score
let scoreTicker;

const getTime = id => {
    const currentScore = getGameScore(id, levelNum);
    const minutes = Math.floor(currentScore / 60);
    let seconds = currentScore - minutes * 60;
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
};

// update the score every second
const startPlay = () => {
    // setup the mem for the level
    prepareLocalMem(id, levelNum);

    // setup header with score and reset button
    const headerDiv = document.createElement("DIV");
    headerDiv.id = "playHeader";
    const headerContent = document.createElement("DIV");
    headerContent.id = "headerContent";
    const restartButton = document.createElement("BUTTON");
    restartButton.id = "restart";
    restartButton.innerText = "Restart Level";
    restartButton.onclick = () => {
        endPlay();
        step1();
        startPlay();
        // window.location.href = "/level-1/";
    };

    // create the div to show the score
    const scoreDiv = document.createElement("DIV");
    scoreDiv.id = "score";

    headerContent.appendChild(scoreDiv);
    headerContent.appendChild(restartButton);
    headerDiv.appendChild(headerContent);
    document.body.insertBefore(headerDiv, document.body.childNodes[0] || null);

    scoreTicker = window.setInterval(() => {
        updateGameScore(1, id, levelNum);

        const currentScore = getTime(id);

        document.getElementById(
            "score"
        ).innerText = `Your time: ${currentScore}`;
    }, 1000);
};

const endPlay = () => {
    window.clearInterval(scoreTicker);
    const headerDiv = document.getElementById("playHeader");
    headerDiv.style.display = "none";
};

const closeAllExcept = (id, headersAndFooters) => {
    document.querySelectorAll(".playStep").forEach(elt => {
        if (headersAndFooters && (elt.id === "footer" || elt.id === "header")) {
            elt.style.display = "block";
        } else if (elt.id !== id) {
            elt.style.display = "none";
        } else {
            elt.style.display = "block";
        }
    });
    window.scrollTo(0, 0);
};

//startPlay();

// prepareLocalMem("azy");
// console.log(getAllScores());
