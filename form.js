let windowFeatures = "left=400,top=300,width=320,height=200";

function ouvrirPopup() {
    window.open("popupForm.html", "Confirmation d'envoi", windowFeatures);
}
// function ouvrirPopup() {
//     window.alert(" Votre demande de réservation a bien été prise en compte. Le coach reviendra vers vous dans les meilleurs délais. Toute l'équipe de GymStudio vous remercie pour l'intérêt que vous portez à ses cours et espère vous retrouvez bientôt dans nos salles!")
// }


const selectedCoach = document.getElementsByTagName("selectCoachName");
let choice = selectedCoach.value;

selectedCoach.addEventListener("change", selectCoach);

function selectCoach() {
    if (choice === "coachYoga") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormYoga").style.display = "flex";
    } else if (choice === "coachBoxe1") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormBox1").style.display = "flex";
    } else if (choice === "coachBoxe2") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormBox2").style.display = "flex";
    } else if (choice === "coachMuscu1") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormMuscu1").style.display = "flex";
    } else if (choice === "coachMuscu2") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormMuscu2").style.display = "flex";
    } else if (choice === "coachAquaBike") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormAquabike").style.display = "flex";
    } else if (choice === "coachCardio1") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormCardio1").style.display = "flex";
    } else if (choice === "coachCardio2") {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormCardio2").style.display = "flex";
    } else {
        document.querySelectorAll(".maskPic").style.display = "none";
        document.getElementById("coachFormAquaGym").style.display = "flex";
    }
}
