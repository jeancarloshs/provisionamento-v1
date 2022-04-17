//-------------------- BOTÕES --------------------//
const botaoProvisionar = document.getElementById('btnProvisionar');
const botaoRemover = document.getElementById('btnRemover');
const botaoPosicionar = document.getElementById('btnMac');
const botaoLocalizar = document.getElementById('btnLocalizar');

//-------------------- PROVISIONAMENTO --------------------//
function criaScriptProvisionamento (e) {
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const patrimonio = document.getElementById('patrimonio').value;
  const serialNumber = document.getElementById('serialNumber').value;
  const posicionamentoOLT = document.getElementById('posicionamento').value;
  const tipoDeServico = document.getElementById('tipoDeServico').value;
  const tecnicoExterno = document.getElementById('instalador').value;
  const tecnicoInterno = document.getElementById('suporte').value;

  const scriptProvisionamento = (`
  configure equipment ont interface ${posicionamentoOLT} sw-ver-pland disabled desc1 "${nome}" desc2 "${endereco}" sernum ALCLB:${(serialNumber.substr(4))} sw-dnload-version disabled pland-cfgfile1 PREALCO015 dnload-cfgfile1 PREALCO015
  configure equipment ont interface ${posicionamentoOLT} admin-state up
  configure equipment ont slot ${posicionamentoOLT}/14 planned-card-type veip plndnumdataports 1 plndnumvoiceports 0
  configure equipment ont slot ${posicionamentoOLT}/14 admin-state up
  configure qos interface ${posicionamentoOLT}/14/1 upstream-queue 0 bandwidth-profile name:HSI_1G_UP
  configure qos interface ${posicionamentoOLT}/14/1 queue 0 shaper-profile name:HSI_1G_DOWN
  configure qos interface ${posicionamentoOLT}/14/1 upstream-queue 3 bandwidth-profile name:HSI_1M_UP
  configure interface port uni:${posicionamentoOLT}/14/1 admin-up
  configure bridge port ${posicionamentoOLT}/14/1 max-unicast-mac 4
  configure bridge port ${posicionamentoOLT}/14/1 vlan-id 1005 tag single-tagged
  configure bridge port ${posicionamentoOLT}/14/1 vlan-id 202 tag single-tagged
  exit all`
  );

  addEventListener('click', function (e) {
    document.getElementById('scriptOLT').value = scriptProvisionamento;
    e.preventDefault()
  });
};
botaoProvisionar.addEventListener('click', criaScriptProvisionamento);

//-------------------- REMOVER --------------------//
function criaScriptRemover (e) {
  const posicionamentoOLT = document.getElementById('posicionamento').value;

  const scriptRemoveONU = (`
    configure bridge port ${posicionamentoOLT}/14/1 no vlan-id 1005
    configure bridge port ${posicionamentoOLT}/14/1 no vlan-id 202
    configure equipment ont interface ${posicionamentoOLT} admin-state down
    exit 
    no interface ${posicionamentoOLT}
    exit all`
  );

  addEventListener('click', function (e) {
    document.getElementById('scriptOLT'). value = scriptRemoveONU;
    e.preventDefault();
  });
};
botaoRemover.addEventListener('click', criaScriptRemover);

//-------------------- MAC --------------------//
function criaScriptPesquisaMac (e) {
  const posicionamentoOLT = document.getElementById('posicionamento').value;

  const scriptPesquisaMac = (
    `show vlan bridge-port-fdb ${posicionamentoOLT}/14/1`
  );

  addEventListener('click', function (e) {
    document.getElementById('scriptOLT').value = scriptPesquisaMac;
    e.preventDefault();
  });
};
botaoPosicionar.addEventListener('click', criaScriptPesquisaMac);

//-------------------- LOCALIZAR --------------------//
function criaScriptLocalizar (e) {
  const serialNumber = document.getElementById('serialNumber').value;

  const scriptLocalizar = (`
  info configure equipment ont interface flat | match exact:${(serialNumber)}`
  );

  addEventListener('click', function (e) {
    document.getElementById('scriptOLT').value = scriptLocalizar;
    e.preventDefault();
  });
};
botaoLocalizar.addEventListener('click', criaScriptLocalizar);