let verificaAdmin = localStorage.getItem('isAdmin', true);
let token = localStorage.getItem('TokenAuthentication',);

if(verificaAdmin !== 'false') {
  let URL = '<li><a href="opcoes.html">Opções</a></li>'
  let newUl = document.querySelector('ul')
  let newLi = document.createElement("li")
  newUl.innerHTML = newUl.innerHTML + URL
  //console.log(newUl)
}

function btnSair(event) {
  localStorage.removeItem("TokenAuthentication");
  localStorage.removeItem('isAdmin');
  window.location.assign('index.html')
}

(()=>{
  let newUl = document.querySelector('ul')
  let newLi = document.createElement("li")
  let sair = '<li><a href="#" onclick="btnSair()">Sair</li>'
  newUl.innerHTML = newUl.innerHTML + sair

  // sair.addEventListener('click', () =>{
  //   localStorage.removeItem("TokenAuthentication");
  //   localStorage.removeItem('isAdmin');
  //   window.location.assign('index.html')
  //   console.log('clicou',event)
  //   return '';
  // })
})()

