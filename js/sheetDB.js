var axios = require("axios");

function salvar(nome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno){
    axios.post('https://sheetdb.io/api/v1/f8t5fv0yuh1xs',{
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