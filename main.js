const barreRecherche = document.getElementById("barreRecherche");
const boutonRecherche = document.getElementById("boutonRecherche");
const listeExistante = document.getElementById("listeExistante");
const resultats = document.getElementById("resultats");

boutonRecherche.addEventListener("click", function() {
    const valeurRecherche = barreRecherche.value.toLowerCase();
    
    // Réinitialiser le style de tous les éléments existants
    const elementsExistants = Array.from(listeExistante.querySelectorAll("li"));
    elementsExistants.forEach(function(li) {
        li.classList.remove("surligne");
    });

    // Filtrer et surligner les éléments existants qui correspondent à la recherche
    elementsExistants.forEach(function(li) {
        const texteLi = li.textContent.toLowerCase();

        if (texteLi.includes(valeurRecherche)) {
            li.classList.add("surligne");
        }
    });
});





