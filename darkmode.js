function darkmode() {
  //DECLARAÇAO DA VARIAVEL DE HEADER
  var header = document.querySelector('header')
  var logo = document.getElementById('logo');

  //DECLARAÇAO DA VAR CONTAINER 1
  var container1 = document.getElementById('container-01');

  //DECLARAÇAO DA VAR CONTAINER 2
  var container2 = document.getElementById('container-02');

  //DECLARAÇAO DA VAR CONTAINER 3
  var container3 = document.getElementById('container-03');

  //DECLARAÇAO DA VAR CONTAINER DE PROJETOS
  var projects = document.querySelectorAll('.projects');
  var projectprog = document.querySelectorAll('.projects-inprogress')

    //DECLARAÇAO DA VAR CONTAINER DE SKILLS
    var skills = document.getElementById('container-skills');
    var skill = document.querySelectorAll('.skill');

    //DECLARAÇAO DA VAR CONTAINER 4 E CERTIFICADOS
    var container4 = document.getElementById('container-04');
    var certified = document.querySelectorAll('certificates');

    //DECLARAÇAO DAS VARIAVES DO FOOTER
    var footer = document.querySelector('footer');


  if (container1.classList.contains('dark-mode')) {
    container1.classList.remove('dark-mode');
    header.style.backgroundColor=""
    header.style.color=""
    logo.src = '/Logo/logo.png';

    container1.style.backgroundColor = '';
    container1.style.color = '';

    container2.style.backgroundColor = '';
    container2.style.color = '';

    container3.style.backgroundColor = '';
    container3.style.color = '';

    skill.style.backgroundColor = '';
    skills.style.color = '';

    container4.style.backgroundColor = '';
    container4.style.color = '';

    projects.forEach(project => {
      project.style.backgroundColor = '';
      project.style.color = '';

    })

    projectprog.forEach(projectprog => {
      projectprog.style.backgroundColor = '';
      projectprog.style.color = '';

    })

    footer.style.backgroundColor = ""
    footer.style.color = ""
    ;
  } else {
    container1.classList.add('dark-mode');

    //DEFININDO ESTILO DO HEADER

    header.style.backgroundColor = "var(--background-color)"
    logo.src = '/Logo/logo-white.png';
    header.style.backgroundColor = "var(--background-color)"


    //DEFININDO ESTILO DOS CONTAINERS
    container1.style.backgroundColor = 'var(--background-color-2)';
    container1.style.color = 'black';

    container2.style.backgroundColor = 'var(--background-color)';
    container2.style.color = 'black';

    //DEFININDO ESTILO DO CONTAINER 3 E DAS DIVS INTERNAS
    container3.style.backgroundColor = 'var(--background-color-2)';
    container3.style.color = 'black';

    projects.forEach(project => {
      project.style.backgroundColor = 'var(--background-color)';
      project.style.color = 'black';
    });

    projectprog.forEach(projectprog => {
      projectprog.style.backgroundColor = 'var(--background-color)';
      projectprog.style.color = 'black';
    });

    //DEFININDO ESTILO DO CONTAINER SKILL E DAS DIVS INTERNAS

    skills.style.backgroundColor = 'var(--background-color)';
    skills.style.color = 'black';

    skill.forEach(skill =>{
      skill.style.backgroundColor = 'var(--background-color-2)';
      skill.style.color = 'black';
    })

    //DEFININDO ESTILO DO CONTAINER DE CERTIFICADOS E DAS DIVS INTERNAS

    container4.style.backgroundColor = 'var(--background-color-2)';
    container4.style.color = 'black';

    certified.forEach(certified =>{
      certified.style.backgroundColor = 'var(--background-color)';
      certified.style.color = 'black';
    })

    // DEFININDO ESTILO DO FOOTER 

    footer.style.backgroundColor="var(--background-color)"
    footer.style.color="black"
  }
}
