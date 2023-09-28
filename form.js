// let windowFeatures = "left=400,top=300,width=320,height=200";

// function ouvrirPopup() {
//     window.open("popupForm.html", "Confirmation d'envoi", windowFeatures);
// }

function ouvrirPopup() {
    window.alert(" Votre demande de réservation a bien été prise en compte. Le coach reviendra vers vous dans les meilleurs délais. Toute l'équipe de GymStudio vous remercie pour l'intérêt que vous portez à ses cours et espère vous retrouvez bientôt dans nos salles!")
}


// Chande de place la div lié au prénom de l'élève

window.addEventListener('resize', responsiveForm)
function responsiveForm() {
    if (screen.width < 581) {
        document.getElementById('sportCoachClient').append(document.getElementById('firstNameClient'))
    }
}


//Variables nécessaires aux fonctions ci-après:

const selectedCoach = document.querySelector("#selectCoachName")
const selectedSport = document.querySelector("#selectSportName")


// La sélection du sport entraine la réduction du choix des profs

selectedSport.addEventListener("change", reduceCoach);

function reduceCoach() {
    choiceSport = selectedSport.value;

    const maskCoach = document.querySelectorAll(".maskCoach");
    for (let i = 0; i < maskCoach.length; i++) {
        maskCoach[i].style.display = "none"
    }

    if (choiceSport === "sportBoxe") {
        selectedCoach[1].style.display = "block";
        selectedCoach[2].style.display = "block";
    } else if (choiceSport === "sportMuscu") {
        selectedCoach[3].style.display = "block";
        selectedCoach[4].style.display = "block";
    } else if (choiceSport === "sportCardio") {
        selectedCoach[7].style.display = "block";
        selectedCoach[6].style.display = "block";
    } else if (choiceSport === "sportYoga") {
        selectedCoach[9].style.display = "block";
    } else if (choiceSport === "sportAquaBike") {
        selectedCoach[5].style.display = "block";
    } else if (choiceSport === "sportAquaGym") {
        selectedCoach[8].style.display = "block";
    } else {
        selectedCoach[0].style.display = "block";
        selectedCoach[1].style.display = "block";
        selectedCoach[2].style.display = "block";
        selectedCoach[3].style.display = "block";
        selectedCoach[4].style.display = "block";
        selectedCoach[5].style.display = "block";
        selectedCoach[6].style.display = "block";
        selectedCoach[7].style.display = "block";
        selectedCoach[8].style.display = "block";
        selectedCoach[9].style.display = "block";
    }
}

// La sélection du prof entraine l'affichage de la bonne photo

selectedCoach.addEventListener("change", selectCoach);

function selectCoach() {
    choice = selectedCoach.value;

    const maskPic = document.querySelectorAll(".maskPic");

    for (let i = 0; i < maskPic.length; i++) {
        maskPic[i].style.display = "none";
    }

    if (choice === "coachYoga") {
        document.getElementById("coachFormYoga").style.display = "flex";
    } else if (choice === "coachBoxe1") {
        document.getElementById("coachFormBox1").style.display = "flex";
    } else if (choice === "coachBoxe2") {
        document.getElementById("coachFormBox2").style.display = "flex";
    } else if (choice === "coachMuscu1") {
        document.getElementById("coachFormMuscu1").style.display = "flex";
    } else if (choice === "coachMuscu2") {
        document.getElementById("coachFormMuscu2").style.display = "flex";
    } else if (choice === "coachAquaBike") {
        document.getElementById("coachFormAquaBike").style.display = "flex";
    } else if (choice === "coachCardio1") {
        document.getElementById("coachFormCardio1").style.display = "flex";
    } else if (choice === "coachCardio2") {
        document.getElementById("coachFormCardio2").style.display = "flex";
    } else {
        document.getElementById("coachFormAquaGym").style.display = "flex";
    }
}


// Lien entre page prof et formulaire

// const buttonBob = document.querySelector("#buttonBob");
// buttonBob.addEventListener("click", reserveCoach);
function reserveCoach() {
    selectedCoach[1].style.display = "block";

}
