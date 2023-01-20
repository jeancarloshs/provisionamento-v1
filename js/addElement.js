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
  window.location.assign('../index.html')
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
})();

(async () => {
  try {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g"
     }
     
     let response = await fetch("https://hbnnejxzvuzwlmtekpos.supabase.co/rest/v1/tbUsuarios", { 
       method: "GET",
       headers: headersList,
     });
     
     let data = await response.json();
     let dataJson = data
     //console.log(dataJson);

     dataJson.sort((a, b) => {
      if(a.nomeFuncionario > b.nomeFuncionario) {
          return 1;
      } else if(a.nomeFuncionario < b.nomeFuncionario) {
          return -1;
      } else {
          return 0;
      }
      });
     
        dataJson.forEach((element, index) => {
        let nomeUsuario = element.nomeFuncionario;
        let cargo = element.cargoFuncionario;
        let permissaoDoColaborador = element.permissaoDoColaborador;
        if (cargo == "Instalador") {
          let addSelectInstalador = document.querySelector('#instalador')
          addSelectInstalador.innerHTML += `
          <option value="${nomeUsuario}">${nomeUsuario}</option>`
          console.log(cargo)
        } 

        if (cargo == "Suporte") {
          let addSelectSuporte = document.querySelector('#suporte')
          addSelectSuporte.innerHTML += `
          <option value="${nomeUsuario}">${nomeUsuario}</option>`
          console.log(cargo)
        }

    })


  } catch (error) {
    //console.log('error: ',error)
    }

})
();