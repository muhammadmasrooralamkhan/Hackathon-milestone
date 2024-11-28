var togglebutton = document.getElementById("toggle-section");
var woekExperience = document.getElementById("work-experience");
togglebutton.addEventListener('click', function () {
    if (woekExperience.style.display === 'none') {
        woekExperience.style.display = 'block';
    }
    else {
        woekExperience.style.display = "none";
    }
});
