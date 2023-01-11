let verificaUsuario = (async () => {
  try {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g"
     }
     
     let response = await fetch("https://hbnnejxzvuzwlmtekpos.supabase.co/rest/v1/tbUsuarios?select=nomeFuncionario,cargoFuncionario,admin,permissaoDoColaborador", { 
       method: "GET",
       headers: headersList,
     });
     
     let data = await response.json();
     let dataJson = data
     //console.log(dataJson);

     let arrayDataJson = dataJson

     
      arrayDataJson.forEach((element, index) => {
        let nomeUsuario = element.nomeFuncionario;
        let cargo = element.cargoFuncionario;
        let permissaoDoColaborador = element.permissaoDoColaborador;

        let tabela = document.querySelector('table');
    
        tabela.innerHTML += `
        <tr indice=${index} class='info'>
            <td>${nomeUsuario}</td>
            <td>${cargo}</td>
            <td>${permissaoDoColaborador}</td>
            <td><button class="btnEditar"></button></td>
        </tr>`
    })

    let info = document.querySelectorAll('.info')
    info.forEach((item) => {
      const index = item.getAttribute('indice')
      if(index % 2 === 0) {
        //console.log(index)
        item.classList.add('info2')
      } 
    })

    let btnEditar = document.querySelectorAll('.btnEditar')
  
    //console.log(btnEditar)
    btnEditar.forEach((element, index) => {
      element.addEventListener('click', () => {

        const openModalButton = element
        const closeModalButton = document.querySelector("#close-modal");
        const modal = document.querySelector("#modal");
        const fade = document.querySelector("#fade");

        const toggleModal = () => {
          modal.classList.toggle("hide");
          fade.classList.toggle("hide");
        };

        [openModalButton, closeModalButton, fade].forEach((el) => {
          el.addEventListener("click", () => toggleModal());
        });

        console.log('clicou', index)
        
      })
    })
  } catch (error) {
    //console.log('error: ',error)
    }

})
();