// wheel events for horizontal scroll
const bktContainer = document.getElementById("npl-hero-cover-wrapper");

bktContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    console.log("npl", evt.deltaY)
    bktContainer.scrollLeft += evt.deltaY;
});

const hkContainer = document.getElementById("hk-hero-cover-wrapper");

hkContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    console.log("hk", evt.deltaY)
    hkContainer.scrollLeft += evt.deltaY;
});

const ptnContainer = document.getElementById("ind-hero-cover-wrapper");

ptnContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    console.log("ptn", evt.deltaY)
    ptnContainer.scrollLeft += evt.deltaY;
})
const abtContainer = document.getElementById("abt-hero-cover-wrapper");

abtContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    console.log(evt.deltaY)
    abtContainer.scrollLeft += evt.deltaY;
})



// for navigation link clicn event listener
const hk = document.getElementById('nav-hk');
hk.addEventListener("click", (evt) => {
    evt.preventDefault();
    showOnlyChosen("hk")
})

const bkt = document.getElementById('nav-npl');
bkt.addEventListener("click", (evt) => {
    evt.preventDefault();
    showOnlyChosen("npl")
})

const ptn = document.getElementById('nav-ind');
ptn.addEventListener("click", (evt) => {
    evt.preventDefault();
    showOnlyChosen("ind")
})

const abt = document.getElementById('nav-abt');
abt.addEventListener("click", (evt) => {


    evt.preventDefault();
    showOnlyChosen("abt")
})

// function to hide all containers, show the only one we clicked.
function showOnlyChosen(tgPlace) {
    const places = Array.from(document.getElementsByClassName("place"));
    places.forEach(place => {
        place.style.display = "none"
    })
    document.getElementById(tgPlace).style.display = "block"
}
