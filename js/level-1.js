const nextLevel = () => {
    window.location.href = "/level-2";
};

const step1 = () => {
    closeAllExcept("start", true);
};

let checked;

const step2 = () => {
    const closeAllWarningsExcept = value => {
        document.querySelectorAll(".error").forEach(elt => {
            if (elt.id === value) {
                elt.style.display = "block";
            } else {
                elt.style.display = "none";
            }
        });
    };

    // const first = document.getElementById("first").value;
    // const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    const wipeOutPass = () => {
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
    };

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
        closeAllWarningsExcept("emailError");
    } else if (pass1 !== pass2) {
        closeAllWarningsExcept("matchError");
        wipeOutPass();
    } else if (pass1.replace(/[^a-z]/gi, "").length < 8) {
        closeAllWarningsExcept("lowerLettersError");
        wipeOutPass();
    } else if (pass1.replace(/[^A-Z]/g, "").length < 2) {
        closeAllWarningsExcept("upperLettersError");
        wipeOutPass();
    } else if (pass1.replace(/[^0-9]/g, "").length < 4) {
        closeAllWarningsExcept("numbersError");
        wipeOutPass();
    } else if (pass1.replace(/[^@#$%^&*(){}?~]/g, "").length < 4) {
        closeAllWarningsExcept("specialCharsError");
        wipeOutPass();
    } else {
        closeAllExcept("tos", true);
    }
};

const step3 = () => {
    if (document.getElementById("agree").checked) {
        closeAllExcept("plan", true);
    } else {
        document.getElementById("agreeError").style.display = "block";
    }
};

const skippedPlan = () => {
    checked = 0;
};

const chosePlan = () => {
    checked = 1;
};

const optOut = () => {
    document.querySelectorAll(".trap").forEach(elt => {
        elt.checked = true;
    });
    document.getElementById("contactOpts").style.display = "block";
};

const step4 = () => {
    closeAllExcept("contact", true);
};

const finish = () => {
    if (document.getElementById("first").value !== "") {
        checked++;
    }
    if (document.getElementById("last").value !== "") {
        checked++;
    }

    if (document.getElementById("contactOpts").style.display === "") {
        checked += 7;
    } else {
        document.querySelectorAll(".trap").forEach(elt => {
            if (!elt.checked) checked++;
        });
    }
    closeAllExcept("wow", false);

    updateGameScore(checked * 5, id, levelNum);

    document.getElementById("num").innerText = checked;

    const currentScore = getTime(id);
    document.getElementById("final").innerText = currentScore;
};
