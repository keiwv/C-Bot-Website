document.addEventListener('DOMContentLoaded', function () {
    var aboutButton = document.getElementById('aboutButton');

    aboutButton.addEventListener('click', function () {
        var aboutSection = document.getElementById('aboutSection');

        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
