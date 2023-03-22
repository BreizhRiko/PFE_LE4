
// ouvrir un cv au format pdf
function openCV(personne) {
    switch (personne) {
        case 'robin':
            window.open('application/CV_DUFLOT.pdf', '_blank');
            break;
        case 'jeanne':
            window.open('application/SUEUR_CV.pdf', '_blank');
            break;
        case 'hugo':
            window.open('application/CV_DUFLOT.pdf', '_blank');
            break;
        case 'eric':
            window.open('application/CV_LeMeurEric_FR.pdf', '_blank');
            break; 
        case 'clement':
            window.open('application/CV_DUFLOT.pdf', '_blank');
            break; 
        case 'antoine':
            window.open('application/cv_v3_fr.pdf', '_blank');
            break;   
        case 'florian':
            window.open('', '_blank');
            break;         
    }
}

function openPlaquette() {
    window.open('images/information/V2-Hexoflow-Plaquette.pdf', '_blank');
}