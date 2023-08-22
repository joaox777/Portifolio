// PROJETOS

function seemore() {
    var inprogress = document.querySelectorAll('.projects-inprogress');

    inprogress.forEach(function(element) {
        if (element.classList.contains('seemore')) {
            element.classList.remove('seemore');
            element.style.display = "none";
        } else {
            element.classList.add('seemore');
            element.style.display = "inline-block";
        }
    });
}

// CERTIFICADOS

function seemorecert() {
    var inprogresscert = document.querySelectorAll('.course-inprogress , .course-hide');

    inprogresscert.forEach(function(element) {
        if (element.classList.contains('seemorecert')) {
            element.classList.remove('seemorecert');
            element.style.display = "none";
        } else {
            element.classList.add('seemorecert');
            element.style.display = "inline-block";
        }
    });
}