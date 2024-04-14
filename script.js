document.addEventListener('DOMContentLoaded', function () {
    var aboutButton = document.getElementById('aboutButton');
    var aboutSection = document.getElementById('aboutSection');

    aboutButton.addEventListener('click', function () {
        if (aboutSection.style.display === 'none') {
            aboutSection.style.display = 'block';
        } else {
            aboutSection.style.display = 'none';
        }
    });
});
