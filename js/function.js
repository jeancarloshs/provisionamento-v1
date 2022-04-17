
const nome = document.getElementById('nome').value;
const endereco = document.getElementById('endereco').value;
const patrimonio = document.getElementById('patrimonio').value;
const serialNumber = document.getElementById('serialNumber').value;
const posicionamentoOLT = document.getElementById('posicionamento').value;
const tipoDeServico = document.getElementById('tipoDeServico').value;
const tecnicoExterno = document.getElementById('instalador').value;
const tecnicoInterno = document.getElementById('suporte').value;

  const script = (
    "configure equipment ont interface " + posicionamentoOLT + " sw-ver-pland disabled desc1 \""+nome+"\" desc2 \""+endereco+"\" sernum ALCLB:" +(serialNumber.substr(4))+ " sw-dnload-version disabled pland-cfgfile1 PREALCO015 dnload-cfgfile1 PREALCO015" + '\n' + 
    "configure equipment ont interface "+ posicionamentoOLT +" admin-state up" + '\n' + 
    "configure equipment ont slot "+posicionamentoOLT+"/14 planned-card-type veip plndnumdataports 1 plndnumvoiceports 0" + '\n' + "configure equipment ont slot "+posicionamentoOLT+"/14 admin-state up" + '\n' +              
    "configure qos interface "+posicionamentoOLT+"/14/1 upstream-queue 0 bandwidth-profile name:HSI_1G_UP" + '\n' +
    "configure qos interface "+posicionamentoOLT+"/14/1 queue 0 shaper-profile name:HSI_1G_DOWN" + '\n' +
    "configure qos interface "+posicionamentoOLT+"/14/1 upstream-queue 3 bandwidth-profile name:HSI_1M_UP" + '\n' +
    "configure interface port uni:"+posicionamentoOLT+"/14/1 admin-up" + '\n' +
    "configure bridge port "+posicionamentoOLT+"/14/1 max-unicast-mac 4" + '\n' +
    "configure bridge port "+posicionamentoOLT+"/14/1 vlan-id 1005 tag single-tagged" + '\n' +
    "configure bridge port "+posicionamentoOLT+"/14/1 vlan-id 202 tag single-tagged" + '\n' +
    "exit all" + '\n'
  );

function criaScript () {
  addEventListener('click', function (e) {
    document.getElementById('scriptOLT').value = script;
    e.preventDefault()
    console.log(criaScript,script);
  });
};
