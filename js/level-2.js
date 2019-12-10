const step1 = () => {
    closeAllExcept("account", true);
};

const notEvenClose = () => {
    closeAllExcept("whoops", true);
};

const payment = () => {
    closeAllExcept("payment", true);
};

const devices = () => {
    closeAllExcept("devices", true);
};

const help = () => {
    closeAllExcept("help", true);
};

const plan = () => {
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
    const currentScore = getTime(id);
    document.getElementById("final").innerText = currentScore;
};

const updateInfo = () => {
    closeAllExcept("info", true);
};
