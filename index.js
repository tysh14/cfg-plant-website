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
        document.getElementById("image-container").style.backgroundImage = "url('plantshome/Bromeliad.webp')"
        document.getElementById("image-container").style.backgroundSize = "190%"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Bromeliad"
        document.getElementById("plant-description").textContent = "Keep me in a warm, bright spot indoors. It's a bit too cold for me outside, especialy in winter! Water me regularly and keep my humidity high. Sometimes I may have a little well in the middle of my rosette. Don't let it dry out and fill it with fresh water! Like a lot of my other plant friends, I also enjoy well-draining compost that isn't too soggy."
    }

    
    function plant2Funct() {
        document.getElementById("image-container").style.backgroundImage = "url('plantshome/Orchid.jpg')"
        document.getElementById("image-container").style.backgroundSize = "150%"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Orchid"
        document.getElementById("plant-description").textContent = "I prefer bright but indirect light and direct sunlight can scorch my leaves! You should water me once a week and be careful not to let my roots sit in water or they'll rot. I enjoy temperatures between 16-24°C and high humidity levels. My favourite type of soil is made of thigns like bark, perlite and sphagnum moss!"
    }
    
    function plant3Funct() {
        document.getElementById("image-container").style.backgroundImage = "url('plantshome/RedChineseEvergreen.webp')"
        document.getElementById("image-container").style.backgroundSize = "100%"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Red Chinese Evergreen"
        document.getElementById("plant-description").textContent = "I'm a compact plant and a relatively slow grower but I could reach as high as 1m. I like medium to moderate light. If my leaves are dark, they can handle more light, if they're light, I'll only be able to tolerate medium light. Keep my soil lightly moist constantly but be careful not to overwater me. Please feed me diluted fertiliser once a month during the growing season."

    }
    
    function plant4Funct() {
        document.getElementById("image-container").style.backgroundImage = "url('plantshome/RubberPlant.webp')"
        document.getElementById("image-container").style.backgroundSize = "150%"
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("plant-name").textContent = "Rubber Plant"
        document.getElementById("plant-description").textContent = "Like my friend Orchid, I also enjoy bright but indirect sunlight. Please watter me once the top inch of my soil is dry. Although I can adapt to average indoor humidity, my favourite conditions are high humidity and a temperature of 15-24°C! When I'm looking sad, clean my leaves with a damp cloth to get rid of the dust."
    }


});
