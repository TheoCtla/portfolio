function typeWriter(element) {
    element.classList.add("hidden"); // Masquer l'élément initialement
    setTimeout(() => {
        const text = element.textContent;
        element.textContent = ""; // Effacez le texte de l'élément
        element.classList.remove("hidden"); // Rendre l'élément visible avant d'écrire
        let index = 0;
        const intervalId = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(intervalId);
            }
        }, 110); // Délai entre chaque lettre : 110 ms
    }, 1775); // Attendre 1.775 secondes (1775 millisecondes) avant de commencer
}

const title = document.querySelector("h2");
title.classList.add("hidden"); // Masquer l'élément initialement
typeWriter(title);
