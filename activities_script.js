
document.getElementById("sports_boxe").click(function(){
    if (document.getElementsByClassName("card_boxe").style.display === "none"){
        document.getElementsByClassName("card_boxe").style.display = "block";
    }else { document.getElementsByClassName("card_boxe").style.display = "none";
    }
})

document.getElementById("sports_cardio").click(function(){
    if (document.getElementsByClassName("card_cardio").style.display === "none"){
        document.getElementsByClassName("card_cardio").style.display = "block";
    }else { document.getElementsByClassName("card_cardio").style.display = "none";
    }
})

