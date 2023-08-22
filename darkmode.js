function darkmode() {
  var header = document.querySelector('header');
  var logo = document.getElementById('logo');
  var container1 = document.getElementById('container-01');
  var container2 = document.getElementById('container-02');
  var container3 = document.getElementById('container-03');
  var projects = document.querySelectorAll('.projects');
  var projectprog = document.querySelectorAll('.projects-inprogress');
  var projectscontainer = document.getElementById('container-projects')
  var skills = document.getElementById('container-skills');
  var skill = document.querySelectorAll('.skill');
  var container4 = document.getElementById('container-04');
  var certificates = document.querySelectorAll('.certificates');
  var footer = document.querySelector('footer');

  if (container1.classList.contains('dark-mode')) {
    container1.classList.remove('dark-mode');
    header.style.backgroundColor = '';
    header.style.color = '';
    logo.src = '/Logo/logo.png';

    container1.style.backgroundColor = '';
    container1.style.color = '';

    container2.style.backgroundColor = '';
    container2.style.color = '';

    container3.style.backgroundColor = '';
    container3.style.color = '';

    skills.style.backgroundColor = '';
    skills.style.color = '';

    projectscontainer.style.backgroundColor = '';
    projectscontainer.style.color = '';

    skill.forEach(skill => {
      skill.style.backgroundColor = '';
      skill.style.color = '';
    });

    container4.style.backgroundColor = '';
    container4.style.color = '';

    projects.forEach(project => {
      project.style.backgroundColor = '';
      project.style.color = '';
    });

    projectprog.forEach(projectprog => {
      projectprog.style.backgroundColor = '';
      projectprog.style.color = '';
    });

    certificates.forEach(cert => {
      cert.style.backgroundColor = '';
      cert.style.color = '';
    });

    footer.style.backgroundColor = '';
    footer.style.color = '';
  } else {
    container1.classList.add('dark-mode');

    header.style.backgroundColor = 'var(--background-color)';
    logo.src = '/Logo/logo-white.png';
    header.style.backgroundColor = 'var(--background-color)';

    container1.style.backgroundColor = 'var(--background-color-2)';
    container1.style.color = 'black';

    container2.style.backgroundColor = 'var(--background-color)';
    container2.style.color = 'black';

    skills.style.backgroundColor = 'var(--background-color-2)';
    skills.style.color = 'black';
    container3.style.backgroundColor = 'var(--background-color)';
    container3.style.color = 'black';

    projectscontainer.style.backgroundColor = 'var(--background-color-2)';
    projectscontainer.style.color = 'black';

    skill.forEach(skill => {
      skill.style.backgroundColor = 'var(--background-color)';
      skill.style.color = 'black';
    });

    container4.style.backgroundColor = 'var(--background-color-2)';
    container4.style.color = 'black';

    projects.forEach(project => {
      project.style.backgroundColor = 'var(--background-color)';
      project.style.color = 'black';
    });

    projectprog.forEach(projectprog => {
      projectprog.style.backgroundColor = 'var(--background-color)';
      projectprog.style.color = 'black';
    });

    certificates.forEach(cert => {
      cert.style.backgroundColor = 'var(--background-color)';
      cert.style.color = 'black';
    });

    footer.style.backgroundColor = 'var(--background-color)';
    footer.style.color = 'black';
  }
}
