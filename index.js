addEventListener("DOMContentLoaded", (event) => {

    var stopAnimationBut = document.getElementById("pause-animation-but")
    stopAnimationBut.onclick = function() {stopAnimation();}

    
    function closePopup() {
        var popups = document.getElementById("popup");
        popups.style.visibility = "hidden";

    }

    var myPlant1 = document.getElementsByClassName("plant-1")
    var myPlant2 = document.getElementsByClassName("plant-2")
    var myPlant3 = document.getElementsByClassName("plant-3")
    var myPlant4 = document.getElementsByClassName("plant-4")

    for (var i = 0; i < myPlant1.length; i++) {
        myPlant1[i].addEventListener('click', plant1Funct);
    }

    for (var i = 0; i < myPlant2.length; i++) {
        myPlant2[i].addEventListener('click', plant2Funct);
    }

    for (var i = 0; i < myPlant3.length; i++) {
        myPlant3[i].addEventListener('click', plant3Funct);
    }

    for (var i = 0; i < myPlant4.length; i++) {
        myPlant4[i].addEventListener('click', plant4Funct);
    }

        
    var closePopupButtons = document.getElementById("closeThisPopup");
    closePopupButtons.onclick = function() {closePopup();}



    function stopAnimation() {
        document.getElementById("slide1").style.animationPlayState = "paused";
        document.getElementById("slide2").style.animationPlayState = "paused";
        document.getElementById("slide3").style.animationPlayState = "paused";
        document.getElementById("slide4").style.animationPlayState = "paused";
        document.getElementById("slide5").style.animationPlayState = "paused";
        document.getElementById("slide6").style.animationPlayState = "paused";
    }


    
    function plant1Funct() {
        document.getElementbyId("image-container").style.backgroundImage = "url('plantshome/Bromeliad.webp')"
        document.getElementbyId("image-container").style.backgroundSize = "150%"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Bromeliad"
        document.getElementById("plant-description").textContent = "Plant 1 info"
    }

    
    function plant2Funct() {
        document.getElementbyId("image-container").style.backgroundImage = "url('plantshome/Orchid.jpg')"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Orchid"
        document.getElementById("plant-description").textContent = "Plant 2 info"
    }
    
    function plant3Funct() {
        document.getElementbyId("image-container").style.backgroundImage = "url('plantshome/RedChineseEvergreen.webp')"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Red Chinese Evergreen"
        document.getElementById("plant-description").textContent = "Plant 3 info"

    }
    
    function plant4Funct() {
        document.getElementbyId("image-container").style.backgroundImage = "url('plantshome/RubberPlant.webp')"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Rubber Plant"
        document.getElementById("plant-description").textContent = "Plant 4 info"
    }


});
