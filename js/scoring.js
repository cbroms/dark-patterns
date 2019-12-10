// check if a game is currently being played and return the game ID
const gameInProgress = () => {
    return localStorage.getItem("gameStarted");
};

// start a game by placing the game ID in memory
const startGame = game => {
    localStorage.setItem("gameStarted", game);
};

// remove the game ID from mem
const endGame = () => {
    localStorage.removeItem("gameStarted");
};

// prepare to score a game by placing a scoring variable in mem and setting the game
// attribute to zero. if there's already a variable there, reset the current level only
const prepareLocalMem = (game, level) => {
    let oldGameObj = JSON.parse(localStorage.getItem("gameScore"));
    if (!oldGameObj) {
        let gameObj = {};
        gameObj[game] = [];
        gameObj[game][level - 1] = 0;
        localStorage.setItem("gameScore", JSON.stringify(gameObj));
    } else if (oldGameObj[game] === undefined) {
        oldGameObj[game] = [];
        oldGameObj[game][level - 1] = 0;
        localStorage.setItem("gameScore", JSON.stringify(oldGameObj));
    } else {
        oldGameObj[game][level - 1] = 0;
        localStorage.setItem("gameScore", JSON.stringify(oldGameObj));
    }
};

// get retrieve the game score from mem by getting the scoring var and getting
// game ID attribute
const getGameScore = (game, level) => {
    const levels = JSON.parse(localStorage.getItem("gameScore"))[game][
        level - 1
    ];
    return levels;
};

const getAllScores = () => {
    return JSON.parse(localStorage.getItem("gameScore"));
};

// add to the game's current score
const updateGameScore = (newScore, game, level) => {
    let gameObj = JSON.parse(localStorage.getItem("gameScore"));
    gameObj[game][level - 1] += newScore;
    localStorage.setItem("gameScore", JSON.stringify(gameObj));
};
