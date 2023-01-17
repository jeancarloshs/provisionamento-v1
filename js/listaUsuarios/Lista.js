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
     console.log(dataJson);

     let arrayDataJson = dataJson

     arrayDataJson.sort((a, b) => {
      if(a.nomeFuncionario > b.nomeFuncionario) {
          return 1;
      } else if(a.nomeFuncionario < b.nomeFuncionario) {
          return -1;
      } else {
          return 0;
      }
      });

    //console.log(arrayDataJson)

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
      const openModalButton = element
      const closeModalButton = document.querySelector("#close-modal");
      const modal = document.querySelector("#modal");
      const fade = document.querySelector("#fade");
      element.addEventListener('click', () => {
        
        toggleModal
        //console.log('clicou', index)
      })

      const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
      };
      [openModalButton, closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
      });
    })
    let conteudoModal = document.querySelector('.modal-body')
    for (let i = 0; i <= arrayDataJson.length; i++) {

    }
    conteudoModal.innerHTML += `
    <form id="formInformacoes" method="POST" class="formFormulario formValidation">

      <label for="nomeFuncionario"></label>
      <input type="text" id="nomeFuncionario" name="nomeFuncionario" placeholder="Nome Funcionario" data-rules="required|min=3" value="${arrayDataJson[0].nomeFuncionario}">

      <label for="cargoFuncionario"></label>
      <input type="text" name="cargoFuncionario" id="cargoFuncionario" placeholder="Cargo Funcionario" data-rules="required" value="${arrayDataJson[0].cargoFuncionario}">

      <label for="permissaoDoColaborador" class="selectLabel"></label>
      <select name="permissaoDoColaborador" id="permissaoDoColaborador" class="grid-3 suporte select" data-rules="required">
        <option value="" select>Permissão do Colaborador</option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
      </select>
      
      <label for="emailFuncionario"></label>
      <input type="text" name="emailFuncionario" id="emailFuncionario" placeholder="Email" data-rules="required" value="${arrayDataJson[0].emailFuncionario}">

      <button type="submit" id="btnProvisionar" name="btnProvisionar" class="btn btnProvisionar" onclick="check(event)">Salvar</button>
      <button type="submit" id="btnLimpaInputs" name="btnLimpaInputs" class="btn BtnCopiar btnAcoes" onclick="apagaForm()">Resetar</button>

    </form>`

  } catch (error) {
    //console.log('error: ',error)
    } 

})
();