// const txtAnim = document.querySelector('h1');

//  console.log(new Typewriter(txtAnim));

document.addEventListener('DOMContentLoaded', function() {
    var homePage = document.getElementById('homePage');

    homePage.addEventListener('wheel', function(event) {
        event.preventDefault();
    });
});


