var axios = require("axios");

function salvar(nome, instalador, serialNumber, posicionamento, patrimonio, tipoDeAtivacao, tecnico){
    axios.post('https://sheetdb.io/api/v1/5xoth31j7gruf',{
        "data": {
            "Nome": nome,
            "Tecnico 1": instalador,
            "S/N": serialNumber,
            "Posicionamento": posicionamento,
            "Patrimonio": patrimonio,
            "Tipo de Ativação": tipoDeAtivacao,
            "Tecnico 2": tecnico,
        }
    },//{
        // "auth": {
        //     "username": "c9411whm",
        //     "password": "ao6ncehm1mgbkzt9ycn6"
        // }
    //}
    )
}

function coletar() {
    axios.get('https://sheetdb.io/api/v1/5xoth31j7gruf', {
        "data": {"Tipo de Ativação": "Instalação"}
    }).then( response => {
        console.log(response.data);
        return;
    });
}

export const data_base = {coletar};





















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