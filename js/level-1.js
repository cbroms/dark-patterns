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
