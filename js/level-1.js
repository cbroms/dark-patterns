const section1Links = [
    {
        h: "https://www.amazon.com/gp/coins/account?ref_=ya_d_l_amazon_coins",
        t: "Your coins"
    }
];

const addLinks = (links, parent) => {
    links.map(elt => {
        link = document.createElement("A");
        link.href = elt.h;
        link.innerText = elt.t;
        parent.appendChild(link);
    });
};

const step1 = () => {
    document.getElementById("playArea").innerText = "";

    const optionsArea = document.createElement("DIV");
    optionsArea.id = "optionsArea";
    const title = document.createElement("H1");
    title.innerText = "Your Account";

    const section1 = document.createElement("DIV");
    const section1Title = document.createElement("H3");
    section1Title.innerText = "Memberships and Subscriptions";
    section1.appendChild(section1Title);
    section1.className = "section";

    addLinks(section1Links, section1);

    optionsArea.appendChild(title);
    optionsArea.appendChild(section1);
    document.getElementById("playArea").appendChild(optionsArea);
};
