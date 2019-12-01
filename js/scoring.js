const prepareLocalMem = game => {
    let oldGameObj = localStorage.getItem("gameScore");
    if (!oldGameObj) {
        let gameObj = {};
        gameObj[game] = 0;
        localStorage.setItem("gameScore", JSON.stringify(gameObj));
    } else {
        oldGameObj = JSON.parse(oldGameObj);
        oldGameObj[game] = 0;
        localStorage.setItem("gameScore", JSON.stringify(oldGameObj));
    }
};

const getGameScore = game => {
    return JSON.parse(localStorage.getItem("gameScore"))[game];
};

const getAllScores = () => {
    return JSON.parse(localStorage.getItem("gameScore"));
};

const updateGameScore = (newScore, game) => {
    let gameObj = JSON.parse(localStorage.getItem("gameScore"));
    gameObj[game] = newScore;
    localStorage.setItem("gameScore", JSON.stringify(gameObj));
};
