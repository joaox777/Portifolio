function inprogress(){
  window.alert('O projeto em questão está em andamento e estará disponível em breve no GitHub e neste Portifolio (Código e Deploy).')
}

function curseinprogress(){
  window.alert('O curso em questão está em andamento e estará disponível em breve na página de certificados.')
}

const darkmodeCheckbox = document.getElementById('darkmode');
const header = document.getElementById('header');

darkmodeCheckbox.addEventListener('change', function() {
  header.classList.toggle('dark', this.checked);
});

function indisponivel(){
  window.alert('Indisponivel no momento!')
}
