let verificaToken = sessionStorage.getItem('Token Authentication', );

if (verificaToken === null) {
  alert("Você precisa estar logado para ter acesso a página")
  window.location.assign('index.html');
} 