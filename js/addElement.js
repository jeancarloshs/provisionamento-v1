let verificaAdmin = localStorage.getItem('isAdmin', true);

if(verificaAdmin !== 'false') {
  let URL = '<li><a href="opcoes.html">Opções</a></li>'
  let newUl = document.querySelector('ul')
  let newLi = document.createElement("li")
  newUl.innerHTML = newUl.innerHTML + URL
  //console.log(newUl)
}