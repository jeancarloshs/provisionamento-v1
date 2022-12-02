var axios = require("axios");
var dotenv = require("dotenv");

function salvar(nome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno){
    axios.post(process.env.URL_SHEETS_DB,{
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