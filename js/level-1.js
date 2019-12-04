const step1 = () => {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("account").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("header").style.display = "block";
};

const notEvenClose = () => {
    document.getElementById("account").style.display = "none";
    document.getElementById("whoops").style.display = "block";
};
