let result;
function salvaDB() {
    const nome = document.getElementById('name').value;
    const cargo = document.getElementById('tipoDeCargo').value;
    const cargoAdmin = document.getElementById('permissaoDeADMIN').value;
    //const booleanCargoAdmin = cargoAdmin != 0
    //const tipoDePermissao = document.getElementById('permissaoDeADMIN').value;
    //const grupoDoColaborador = booleanCargoAdmin = 0 == "Usuario";
    // const booleanGrupoDoColaborador = grupoDoColaborador != 0 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senhaUsuario').value;

    const { createClient } = supabase;
  
    const _supabase = createClient ('https://---.supabase.co', '---');
    //console.log('Supabase Instance: ', _supabase)

        const main = async () => {
            let { data, error } = await _supabase
              .from('tbUsuarios')
              .insert([
                { 
                  nomeFuncionario: nome,
                  cargoFuncionario: cargo,
                  admin: result,
                  permissaoDoColaborador: cargoAdmin,
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
              console.log(`Usuario Cadastrado!!!`)
           }
          
            main();

};// FINAL function salvaDB

function salvaCadastro() {
  const nome = document.getElementById('name').value;
  const cargoAdmin = document.getElementById('permissaoDeADMIN').value;
  
  if (cargoAdmin == "") {
      alert('Escolha um tipo de Permissão');
  } else {
      if (cargoAdmin == "Administrador") {
          result = true;
      } else {
          result = false;
      }
      console.log(`Return Responde: \nCargo Admin: ${cargoAdmin} \nPermissão Administrador: ${result}`);
      alert(`Usuario ${nome} cadastrado com Sucesso!!!`);
  }
  salvaDB()
  return result;
}


function apagaForm() {  
	document.getElementById('formFormulario').reset();
};// FINAL function apagaForm
