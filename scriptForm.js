let windowFeatures = "left=400,top=300,width=320,height=200";

function ouvrirPopup() {
    window.open("popupForm.html", "Confirmation d'envoi", windowFeatures);
}




const selectedCoach = document.getElementsByName("selectCoachName");

selectedCoach.addEventListener("change", selectCoach);

function selectCoach() {
    const choice = selectedCoach.value;
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
        document.getElementById("coachFormAquabike").style.display = "flex";
    } else if (choice === "coachCardio1") {
        document.getElementById("coachFormCardio1").style.display = "flex";
    } else if (choice === "coachCardio2") {
        document.getElementById("coachFormCardio2").style.display = "flex";
    } else {
        document.getElementById("coachFormAquaGym").style.display = "flex";
    }
}
