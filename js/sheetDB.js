var axios = require("axios");

function salvar(nome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno){
    axios.post('https://sheetdb.io/api/v1/5xoth31j7gruf',{
        "data": {
            "CLIENTES": nome,
            "TÉCNICO 1": tecnicoExterno,
            "SN": serialNumber,
            "POSICIONAMENTO": posicionamentoOLT,
            "PATRIMONIO": patrimonio,
            "TIPO DE ATIVAÇÃO": tipoDeServico,
            "TÉCNICO": tecnicoInterno,
        }
    },{
         "auth": {
             "username": "LOGIN",
             "password": "SENHA"
         }
    }
    )
}

function coletar(){
    axios.get('https://sheetdb.io/api/v1/5xoth31j7gruf', {
        "auth": {
            "username": "LOGIN",
            "password": "SENHA"
        }
    })
     .then( response => {
          console.log(response.data);
      });
  }

  function produtoDe(nome){
    axios.get(`https://sheetdb.io/api/v1/5xoth31j7gruf/search?ID=${nome}`, {
        "auth": {
          "username": "LOGIN",
          "password": "SENHA"
        }
    })
     .then( response => {
       const data = response.data;
       const usuario = data[0]
       const produto = usuario.produto
       console.log(produto);
      });
  }



















// var axios = requite('axios');

// function salvar(valores){
//     axios.post('{URL}',{
//         "data": {"foo": "bar"}
//     },{
//         "auth": {
//             "username": "{USERNAME}",
//             "password": "{PASSWORD}"
//         }
//     })
// }