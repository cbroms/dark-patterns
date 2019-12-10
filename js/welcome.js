console.log("hi");

// ask for notifications
Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
        var notification = new Notification("Hi there!");
    }
});

// ask for location
navigator.geolocation.getCurrentPosition(() => {
    console.log("great thanks for the location");
});

// Get the modal
const modal = document.getElementById("myModal");

document.getElementById("close").onclick = () => {
    done();
};

const np = () => {
    document.getElementById("first").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("close").style.display = "block";
};

const checkEmail = () => {
    const email = document.getElementById("email").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        document.getElementById("inputs").style.display = "none";
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
    } else {
        document.getElementById("bad").style.display = "block";
    }
};

const donate = () => {
    document.getElementById("second").style.display = "none";
    document.getElementById("fourth").style.display = "block";
};

const done = () => {
    modal.style.display = "none";
};

const okay = () => {
    document.getElementById("cookies").style.display = "none";
};

const fu = () => {
    document.getElementById("cookies").style.display = "none";
    document.getElementById("fu").style.display = "block";
};
