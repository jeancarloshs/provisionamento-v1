var axios = require("axios");

function salvar(nome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno){
    axios.post('https://---.io/api/v1/---',{
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
