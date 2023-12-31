function typeWriter(element) {
    let anim = true;
    return new Promise(resolve => {
        const text = element.textContent.trim();
        element.textContent = "";
        let index = 0;
        const intervalId = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(intervalId);
                resolve(); // Résoudre la promesse lorsque l'animation est terminée
            }
        }, 110);
    });
}

async function startAnimation() {
    const title = document.querySelector("h2");
    await typeWriter(title); // Attendre la fin de l'animation de la machine à écrire
    setTimeout(() => {
        const nextDiv = document.querySelector("#aPropos");
        nextDiv.scrollIntoView({ behavior: "smooth" }); // Faire défiler jusqu'au div d'en dessous
        anim = false
    }, 2000); // Attendre 2 secondes après la fin de l'animation
}
// if (anim == false){
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     document.getElementById("homePage").style.display = "none";
// }

startAnimation();