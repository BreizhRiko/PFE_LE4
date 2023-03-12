// ouverture et fermeture du dialogue afficher infos équipes
function openDialog() {
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
}

function closeDialog() {
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
}


// ouvrir un cv au format pdf
function openCV(personne) {
    switch (personne) {
        case 'robin':
            window.open('application/CV_DUFLOT.pdf', '_blank');
            break;
        case 'jeanne':
            window.open('application/CV_DUFLOT.pdf', '_blank');
            break;
        case 'hugo':
            window.open('application/CV_DUFLOT.pdf', '_blank');
            break;
    }
}