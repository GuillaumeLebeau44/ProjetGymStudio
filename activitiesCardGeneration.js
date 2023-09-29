// import createCardActivity from "./cardActivities";
// import listingActivities from "./listingActivities";

function createCardActivity(sportName, desc, price1, price2, difficulty, activityImg, link) {
    return `
    <div class="cardActivity">
                <div id="sports_title">
                    <h1>${sportName}</h1>
                </div>
                <div id="sports_paragraph">
                    <p>${desc}</p>
                </div>
                <div id="sports_diff">
                    <img src=${difficulty}>
                </div>
                <div id="sports_price">
                    <p>Séance Unique : ${price1}
                        <span style="display: block;">Pack 10 séances : ${price2}</span>
                    </p>
                </div>
                <div id="sports_illu">
                    <img src=${activityImg}>
                </div>
                <div id="coach_button">
                    <a href=${link}>Voir les coach</a>
                </div>
            </div>

    `;
}


const listingActivities = [
    {
        sportName: "LA BOXE",
        desc: "La boxe est un sport dynamique qui présente des atouts pour la forme et le mental. Elle permet d'améliorer le cardio vasculaire, l'endurance et la respiration. La boxe fait par conséquent travailler la respiration, l'endurance, l'équilibre et la force.",
        price1: "30 €",
        price2: "250 €",
        difficulty: "images/haltereDiff.PNG",
        activityImg: "images/activityBox.jpg",
        link: "twocoach.html"
    },
    {
        sportName: "LE CARDIO",
        desc: "Le cardio training est une forme d'activité physique rythmique qui permet d'augmenter votre fréquence cardiaque dans votre zone cible de fréquence cardiaque. C'est dans cette zone que votre corps brûle le plus de graisses et de calories.",
        price1: "30 €",
        price2: "250 €",
        difficulty: "images/haltereDiff.PNG",
        activityImg: "images/activityCardio.webp",
        link: "twocoach.html"
    },
    {
        sportName: "LA MUSCULATION",
        desc: "La musculation vise au développement des muscles squelettiques, pratiquée dans le but d'acquérir plus de force, d'endurance ou de volume musculaire. Les bienfaits sont notables, un bon régime d'entrainement physique a été prouvé comme étant bénéfique pour la santé physique et mentale.",
        price1: "30 €",
        price2: "275 €",
        difficulty: "images/haltereDiff.PNG",
        activityImg: "images/activityMusculation.jpg",
        link: "twocoach.html"
    },
    {
        sportName: "LE YOGA",
        desc: "Le yoga est une pratique qui nous vient de l'Inde et qui apporte un équilibre entre le corps, le mental et le spirituel.Le yoga permet d'améliorer sa force, sa souplesse et son équilibre en reforçant les muscles profonds. Lorsqu'il est pratiqué régulièrment il permet d'améliorer sa santé et sa vitalité.",
        price1: "30 €",
        price2: "250 €",
        difficulty: "images/haltereDiff.PNG",
        activityImg: "images/activtyYoga.jpg",
        link: "onecoach.html"
    },
    {
        sportName: "L'AQUAGYM",
        desc: "L'aquagym est une forme de gymnastique pratiquée dans l'eau. Les exercices sont effectués dans l'eau, dont la hauteur est choisie en fonction des exercices à pratiquer et de la résistance souhaitée. La pression de l'eau évite les chocs et minimise le risque de courbartures, de claquages ou d'élongations musculaires.",
        price1: "Séance unique : 30€",
        price2: "Pack 10 séances : 250€",
        difficulty: "images/haltereDiff.PNG",
        activityImg: "images/activity_AquaGym.jpg",
        link: "onecoach.html"
    },
    {
        sportName: "L'AQUABIKE",
        desc: "L'aquabike est pratiqué en piscine. Cela consiste à pédaler dans l'eau sur un vélo sans roue.En plus d'être une activité faisant travailler le cœur et brûlant les calories et les graisses en priorité, le fait de pratiquer dans l'eau permet de travailler en douceur.",
        price1: "Séance unique : 50€",
        price2: "Pack 10 séances : 450€",
        difficulty: "images/haltereDiff.PNG",
        activityImg: "images/activityAquaBike.jpg",
        link: "onecoach.html"
    }

];

const cardActivityContainer = document.querySelector(".cardActivityContainer");
const choiceSport = document.querySelectorAll(".choiceSport")

const generateCardActivities = (e) => {

    cardActivityContainer.innerHTML = "";
    for (let i = 0; i < listingActivities.length; i++) {
        if (e.target.name === listingActivities[i].sportName) {

            const html = createCardActivity(
                listingActivities[i].sportName,
                listingActivities[i].desc,
                listingActivities[i].price1,
                listingActivities[i].price2,
                listingActivities[i].difficulty,
                listingActivities[i].activityImg,
                listingActivities[i].link
            );
            cardActivityContainer.innerHTML += html;
        }

    }
}
    ;

for (let k = 0; k < choiceSport.length; k++) {
    choiceSport[k].addEventListener("click", generateCardActivities);
}