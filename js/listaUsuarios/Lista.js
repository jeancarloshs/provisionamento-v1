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

     let arrayDataJson = dataJson
     //console.log(arrayDataJson);

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

    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    btnEditar.forEach((element, index) => {
      const openModalButton = element

      
      element.addEventListener('click', () => {
        
        if (arrayDataJson !== arrayDataJson[index].nomeFuncionario) {
        //console.log('clicou', arrayDataJson[index].id)

          let conteudoModal = document.querySelector('.modal-body')

          conteudoModal.innerHTML = `
          <form funcionarioID=${arrayDataJson[index].id} id="formInformacoes" method="POST" class="formFormulario formValidation formUsuarios">
      
            <label for="nomeFuncionario"></label>
            <input type="text" id="nomeFuncionario" name="nomeFuncionario" placeholder="Nome Funcionario" data-rules="required|min=3" value="${arrayDataJson[index].nomeFuncionario}">

            <label for="tipoDeCargo" class="selectLabel"></label>
            <select name="tipoDeCargo" id="tipoDeCargo" class="grid-3 tipoDeCargo select selectPermissao" data-rules="required">
              <option value="" select>Cargo</option>
              <option value="Instalador">Instalador</option>
              <option value="Suporte">Suporte</option>
            </select>
      
            <label for="permissaoDoColaborador" class="selectLabel"></label>
            <select name="permissaoDoColaborador" id="permissaoDoColaborador" class="grid-3 suporte select selectPermissao" data-rules="required">
              <option value="" select>Permissão do Colaborador</option>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuario</option>
            </select>
      
            <label for="emailFuncionario"></label>
            <input type="text" name="emailFuncionario" id="emailFuncionario" placeholder="Email" data-rules="required" value="${arrayDataJson[index].emailFuncionario}">
      
            <label for="senhaFuncionario"></label>
            <input type="password" name="senhaFuncionario" id="senhaFuncionario" placeholder="Senha" data-rules="required" value="${arrayDataJson[index].senhaFuncionario}">

          </form>

          <button type="submit" id="btnSalvar" name="btnSalvar" class="btn btnSalvar" onclick="btnSalvar()">Salvar</button>
          <button type="submit" id="btnDeletar" name="btnDeletar" class="btn btnDeletar" onclick="btnDeletar()">Deletar</button>
          <!--<button type="submit" id="btnResetaForm" name="btnResetaForm" class="btn BtnCopiar btnAcoes">Resetar</button>-->`
       }
      })      

      openModalButton.addEventListener("click", () => toggleModal());

    })

    const toggleModal = () => {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    };

    closeModalButton.addEventListener('click', () => {
      modal.classList.toggle("hide")
      fade.classList.toggle("hide")
    })

  }

  catch (error) {
  //console.log('error: ',error)
  }
}) // FINAL FUNÇÃO QUE LISTA OS USUARIOS
();

function btnSalvar() {
  //const btnSalvar = document.querySelector("#btnSalvar")
  const formUsuarioID = document.querySelector('.formUsuarios')
  const idFuncionario = formUsuarioID.getAttribute('funcionarioID')
  console.log("Usuario Atualizado:", idFuncionario)

  const nomeFuncionario = document.querySelector('#nomeFuncionario').value;
  const cargoFuncionario = document.querySelector('#tipoDeCargo').value;
  const permissaoDoColaborador = document.querySelector('#permissaoDoColaborador').value;
  const emailFuncionario = document.querySelector('#emailFuncionario').value;
  const senhaFuncionario = document.querySelector('#senhaFuncionario').value;

  (async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({   
        "nomeFuncionario": nomeFuncionario,
        "cargoFuncionario": cargoFuncionario,
        "emailFuncionario": emailFuncionario,
        "senhaFuncionario": senhaFuncionario,
        "permissaoDoColaborador": permissaoDoColaborador,
        "update_at": ((new Date()).toISOString()).toLocaleString('br-SP', { hour12: false })
      });
      
    
    let response = await fetch(`https://hbnnejxzvuzwlmtekpos.supabase.co/rest/v1/tbUsuarios?id=eq.${idFuncionario}`, { 
      method: "PATCH",
      body: bodyContent,
      headers: headersList
    });
    
    let data = await response.text();
    console.log('Usuario Atualizado com Sucesso!!!', data);
    console.log('Response Status:', response.status)
    alert(`Usuario ${nomeFuncionario} atualizado com sucesso!!!`)
  
    } 

    catch (error) {
      console.log('error: ',error)
      console.log('Response Status:', response.status)
    }  
  })
  ();
}// FINAL btnSalvar()

function btnDeletar() {
  const formUsuarioID = document.querySelector('.formUsuarios')
  const idFuncionario = formUsuarioID.getAttribute('funcionarioID')
  console.log("Usuario Deletado:", idFuncionario)

  const nomeFuncionario = document.querySelector('#nomeFuncionario').value;

  (async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g"
       }
       
       let response = await fetch(`https://hbnnejxzvuzwlmtekpos.supabase.co/rest/v1/tbUsuarios?id=eq.${idFuncionario}`, { 
         method: "DELETE",
         headers: headersList
       });
       
    let data = await response.text();
    console.log('Usuario Deletado com Sucesso!!!', data);
    console.log('Response Status:', response.status)
    alert(`Usuario ${nomeFuncionario} deletado com sucesso!!!`)
  
    }

    catch (error) {
      console.log('error: ',error)
      console.log('Response Status:', response.status)
    }  
  })
  ();
} // FINAL btnDeletar()