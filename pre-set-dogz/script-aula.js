console.log('Script aula.js carregado!');

async function loadPlataformas() {
  const response = await fetch('plataformas.html');
  const content = await response.text();
  document.getElementById('plataformas-container').innerHTML = content;
}
loadPlataformas();
