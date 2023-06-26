const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  const container = document.getElementById('container-01');
  container.classList.toggle('dark');
});