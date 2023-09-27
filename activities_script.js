function init() {
    document.getElementById("boxPicto").onclick = functionDisplay; // document.getElementById("boxPicto") = correspond à l'objet BoxPicto. On pointe vers la fonction, donc pas de (), sinon ca va l'appeler.
    document.getElementById("cardioPicto").onclick = functionDisplay;
    document.getElementById("musculationPicto").onclick = functionDisplay;
    document.getElementById("yogaPicto").onclick = functionDisplay;
    document.getElementById("aquagymPicto").onclick = functionDisplay;
    document.getElementById("aquabikePicto").onclick = functionDisplay;

    function functionDisplay() {

        if (document.getElementById("global").dataset.active != this.dataset.section) {

            let articleActive = document.getElementById("global").dataset.active; // on récupère l'élément précédent actif
            console.log(articleActive);
            //rajouter ici un settimeout pour avoir un décalage avec l'arrivée et départ ?

            document.getElementById(articleActive).classList.add("disappear"); // on le fait dispparaitre (via ajout class disappear)
            document.getElementById(articleActive).classList.remove("appear"); // on nettoye son ancienne classe appear


            setTimeout(() => {
                console.log(this);
                document.getElementById(this.dataset.section).classList.add("appear"); // on ajoute la classe appear à l'élément qui a été séléctionné pour le faire apparaitre
                document.getElementById(this.dataset.section).classList.remove("disappear"); // on nettoye son ancienne classe dissappear

                document.getElementById("global").dataset.active = this.dataset.section; // on associe que l'élément séléctionné devient aussi l'élément "précédent actif" pour le prochain move
                console.log(this.dataset.section);
            }, 700);

        }
    }

}














// Ci dessous code fonctionnel de Guillaume avant function réutilisable

// function show_card_boxe() {
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     if (card_boxe.style.display === "none"){
//         card_boxe.style.display = "contents";
//         card_cardio.style.display = "none";
//         card_musculation.style.display = "none";
//         card_yoga.style.display = "none";
//         card_aquagym.style.display = "none";
//         card_aquabike.style.display = "none";
//     }
// }

// function show_card_cardio() {
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     if (card_cardio.style.display === "none"){
//         card_boxe.style.display = "none";
//         card_cardio.style.display = "contents";
//         card_musculation.style.display = "none";
//         card_yoga.style.display = "none";
//         card_aquagym.style.display = "none";
//         card_aquabike.style.display = "none";
//     }
// }

// function show_card_musculation() {
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     if (card_musculation.style.display === "none"){
//         card_boxe.style.display = "none";
//         card_cardio.style.display = "none";
//         card_musculation.style.display = "contents";
//         card_yoga.style.display = "none";
//         card_aquagym.style.display = "none";
//         card_aquabike.style.display = "none";
//     }
// }

// function show_card_yoga() {
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     if (card_yoga.style.display === "none"){
//         card_boxe.style.display = "none";
//         card_cardio.style.display = "none";
//         card_musculation.style.display = "none";
//         card_yoga.style.display = "contents";
//         card_aquagym.style.display = "none";
//         card_aquabike.style.display = "none";
//     }
// }

// function show_card_aquagym() {
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     if (card_aquagym.style.display === "none"){
//         card_boxe.style.display = "none";
//         card_cardio.style.display = "none";
//         card_musculation.style.display = "none";
//         card_yoga.style.display = "none";
//         card_aquagym.style.display = "contents";
//         card_aquabike.style.display = "none";
//     }
// }

// function show_card_aquabike() {
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     if (card_aquabike.style.display === "none"){
//         card_boxe.style.display = "none";
//         card_cardio.style.display = "none";
//         card_musculation.style.display = "none";
//         card_yoga.style.display = "none";
//         card_aquagym.style.display = "none";
//         card_aquabike.style.display = "contents";
//     }
// }


// function hide() {
//     let card_boxe = document.querySelector("div.card_boxe");
//     let card_cardio = document.querySelector("div.card_cardio");
//     let card_musculation = document.querySelector("div.card_musculation");
//     let card_yoga = document.querySelector("div.card_yoga");
//     let card_aquagym = document.querySelector("div.card_aquagym");
//     let card_aquabike = document.querySelector("div.card_aquabike");
//     card_boxe.style.display = "none";
//     card_cardio.style.display = "none";
//     card_musculation.style.display = "none";
//     card_yoga.style.display = "none";
//     card_aquagym.style.display = "none";
//     card_aquabike.style.display = "none";
// }


