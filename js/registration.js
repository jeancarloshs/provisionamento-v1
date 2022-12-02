function salvaDB() {
    const nome = document.getElementById('name').value;
    const cargo = document.getElementById('tipoDeCargo').value;
    const cargoAdmin = document.getElementById('permissaoDeADMIN').value
    const booleanCargoAdmin = cargoAdmin != 0
    //const tipoDePermissao = document.getElementById('permissaoDeADMIN').value;
    //const grupoDoColaborador = booleanCargoAdmin = 0 == "Usuario";
    // const booleanGrupoDoColaborador = grupoDoColaborador != 0 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senhaUsuario').value;

    const { createClient } = supabase;
  
    const _supabase = createClient ('https://hbnnejxzvuzwlmtekpos.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g');
    //console.log('Supabase Instance: ', _supabase)

        const main = async () => {
            let { data, error } = await _supabase
              .from('tbUsuarios')
              .insert([
                { 
                  nomeFuncionario: nome,
                  cargoFuncionario: cargo,
                  admin: booleanCargoAdmin,
                  //permissaoDoColaborador: grupoDoColaborador,
                  emailFuncionario: email,
                  senhaFuncionario: senha,
                  created_at: ((new Date()).toISOString()).toLocaleString('br-SP', { hour12: false })
                },
              ])
              
          
              if (error) {
                alert("Ops, algo deu errado, verifque o console com F12")
                console.error("error:", error)
                return
              } 
          
              console.log("data:", data)
           }
          
            main();

};// FINAL function salvaDB

function salvaCadastro(){
    const nome = document.getElementById('name').value;
    const cargoAdmin = document.getElementById('permissaoDeADMIN').value
    const booleanCargoAdmin = cargoAdmin != 0
    if (cargoAdmin == "") {
      //console.log(`Return Responde: \nCargo Admin Não Foi Preenchido ${cargoAdmin}`)
      alert('Escolha um tipo de Permissão')
    } else if (cargoAdmin == 1) {
      //console.log(`Return Responde: \nCargo Admin: ${cargoAdmin} \nBoleano Cargo Admin: ${booleanCargoAdmin}`)
      salvaDB();
      alert(`Usuario ${nome} cadastrado com Sucesso!!!`)
      return cargoAdmin
    } else {
      //console.log(`Return Responde: \nCargo Admin: ${cargoAdmin} \nBoleano Cargo Admin: ${booleanCargoAdmin}`)
      salvaDB();
      alert(`Usuario ${nome} cadastrado com Sucesso!!!`)
      return booleanCargoAdmin
    }
    alert("Usuario Cadastrado com Sucesso!!!")
    //console.log(`Return Responde: \nCargo Admin: ${cargoAdmin} \nBoleano Cargo Admin: ${booleanCargoAdmin}`)
}

function apagaForm() {  
	document.getElementById('formFormulario').reset();
};// FINAL function apagaForm