let clicks = 0;

const step1 = () => {
    closeAllExcept("account", true);
};

const notEvenClose = () => {
    clicks++;
    closeAllExcept("whoops", true);
};

const payment = () => {
    clicks++;
    closeAllExcept("payment", true);
};

const devices = () => {
    clicks++;
    closeAllExcept("devices", true);
};

const help = () => {
    closeAllExcept("help", true);
};

const plan = () => {
    clicks++;
    closeAllExcept("plan", true);
};

const membership = () => {
    closeAllExcept("membership", true);
};

const end = () => {
    closeAllExcept("end", true);
};

const wow = () => {
    closeAllExcept("wow", false);
    updateGameScore(clicks * 5, id, levelNum);

    const currentScore = getTime(id);
    document.getElementById("num").innerText = clicks;

    document.getElementById("final").innerText = currentScore;
};

const updateInfo = () => {
    closeAllExcept("info", true);
};
