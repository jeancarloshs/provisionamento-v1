(async () => {
  try {
    let headersList = {
      "Accept": "*/*",
      "apikey": "---",
      "Authorization": "Bearer ---"
     }
     
     let response = await fetch("https://---.supabase.co/rest/v1/tbUsuarios?select=nomeFuncionario,cargoFuncionario,admin,permissaoDoColaborador", { 
       method: "GET",
       headers: headersList,
     });
     
     let data = await response.json();
     let dataJson = data
     //console.log(dataJson);

     let arrayDataJson = dataJson

     
     let dadosUsuario = arrayDataJson.forEach((element, index) => {
        let nomeUsuario = element.nomeFuncionario;
        let cargo = element.cargoFuncionario;
        let permissaoDoColaborador = element.permissaoDoColaborador;

    })



  } catch (error) {
    //console.log('error: ',error)
    }

})
();
