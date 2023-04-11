
// ouvrir un cv au format pdf
function openCV(personne) {
    switch (personne) {
        case 'robin':
            window.open('application/CV_DUFLOT_3.pdf', '_blank');
            break;
        case 'jeanne':
            window.open('application/CV_jeanne_V2.pdf', '_blank');
            break;
        case 'hugo':
            window.open('application/CV_Hugo_lux.pdf', '_blank');
            break;
        case 'eric':
            window.open('application/CV_LeMeurEric_2023_v2.pdf', '_blank');
            break; 
        case 'clement':
            window.open('application/CV_clement_becerra.pdf', '_blank');
            break; 
        case 'antoine':
            window.open('application/CV_FR_HEBERT_v2.pdf', '_blank');
            break;   
        case 'florian':
            window.open('application/CVFlo2023.pdf', '_blank');
            break;         
    }
}

function openPlaquette() {
    window.open('images/information/V2-Hexoflow-Plaquette.pdf', '_blank');
}