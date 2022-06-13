//-------------------- BOTÕES --------------------//
const botaoProvisionar = document.getElementById('btnProvisionar');
const botaoRemover = document.getElementById('btnRemover');
const botaoPosicionar = document.getElementById('btnMac');
const botaoLocalizar = document.getElementById('btnLocalizar');
const botaoCopiar = document.getElementById('btnCopiar');
const botaoEnviarPlanilha = document.getElementById('btnEnviaPlanilha');
const botaoLimpaInputs = document.getElementById('btnLimpaInputs');

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

  // Para simplesmente remover acentos e cedilha de uma string e retornar a mesma string sem os acentos,
  // podemos usar o método String.prototype.normalize do ES6, seguido de um String.prototype.replace

  const parsedNome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const parsedEndereco = endereco.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  //console.log(parsedNome);

  //----- INSERE : NO SERIAL -----//
  const string = serialNumber;
  const metade = Math.floor(string.length / 3);
  const resultado = string.substr(0,metade)+":"+string.substr(metade);
  document.getElementById('serialNumber').innerHTML = resultado;

  const { createClient } = supabase;

  const _supabase = createClient("https://hbnnejxzvuzwlmtekpos.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g");

  //console.log('Supabase Instance: ', _supabase)

  const main = async () => {
  let { data, error } = await _supabase
    .from('PROVISIONAMENTO')
    .insert([
      { 
        clientes: nome,
        tecnicoRua: tecnicoExterno,
        numberSerial: serialNumber,
        tipoDeAtivacao: tipoDeServico,
        posicionamento: posicionamentoOLT,
        patrimonioNX: patrimonio,
        tecnicoSup: tecnicoInterno
      },
    ])
    

    if (error) {
      console.error(error)
      return
    }

    console.log(data)
  }

  main()

  //VALIDAÇÃO FORMULARIO
  // if (nome == '') {
  //   console.log('preencha o campo nome')
  // } if (endereco == '') {
  //   console.log('preencha o campo endereço')
  // } if (serialNumber == '') {
  //   console.log('preencha o campo serial Number')
  // } if (posicionamentoOLT == '') {
  //   console.log('preencha o campo posicionamento')
  // } if (patrimonio == '') {
  //   console.log('preencha o patrimonio')
  // } if (tipoDeServico == '') {
  //   console.log('preencha o tipo de serviço')
  // } if (tecnicoExterno == '') {
  //   console.log('preencha o Instalador')
  // } if (tecnicoInterno == '') {
  //   console.log('preencha o Suporte')
  // }

  // else {
  const scriptProvisionamento = (`configure equipment ont interface ${posicionamentoOLT} sw-ver-pland disabled desc1 "${parsedNome}" desc2 "${parsedEndereco}" sernum ${resultado} sw-dnload-version disabled pland-cfgfile1 PREALCO015 dnload-cfgfile1 PREALCO015
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
  exit all \n`
  );

  document.getElementById('scriptOLT').value = scriptProvisionamento;
  e.preventDefault();
  copiarTexto();
  console.log([parsedNome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno]);
};
// botaoProvisionar.addEventListener('click', criaScriptProvisionamento);


//-------------------- REMOVER --------------------//
function criaScriptRemover (e) {
  const posicionamentoOLT = document.getElementById('posicionamento').value;

const scriptRemoveONU = (`configure bridge port ${posicionamentoOLT}/14/1 no vlan-id 1005
configure bridge port ${posicionamentoOLT}/14/1 no vlan-id 202
configure equipment ont interface ${posicionamentoOLT} admin-state down
exit 
no interface ${posicionamentoOLT}
exit all \n`
);

    document.getElementById('scriptOLT'). value = scriptRemoveONU;
    e.preventDefault();
    copiarTexto();
};
// botaoRemover.addEventListener('click', criaScriptRemover); 


//-------------------- MAC --------------------//
function criaScriptPesquisaMac (e) {
  const posicionamentoOLT = document.getElementById('posicionamento').value;

  const scriptPesquisaMac = (`show vlan bridge-port-fdb ${posicionamentoOLT}/14/1 \n`);

    document.getElementById('scriptOLT').value = scriptPesquisaMac;
    e.preventDefault();
    copiarTexto();
};
// botaoPosicionar.addEventListener('click', criaScriptPesquisaMac);

//-------------------- LOCALIZAR --------------------//
function criaScriptLocalizar (e) {
  const serialNumber = document.getElementById('serialNumber').value;

    //----- INSERE : NO SERIAL -----//
    const string = serialNumber;
    const metade = Math.floor(string.length / 3);
    const resultado = string.substr(0,metade)+":"+string.substr(metade);
    document.getElementById('serialNumber').innerHTML = resultado;

  const scriptLocalizar = (`info configure equipment ont interface flat | match exact:${resultado} \n`);

    document.getElementById('scriptOLT').value = scriptLocalizar;
    e.preventDefault();
    copiarTexto();
};
// botaoLocalizar.addEventListener('click', criaScriptLocalizar);

function copiarTexto() {
  let textoCopiado = document.getElementById("scriptOLT");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoCopiado.value);
};


function enviaPlanilha() {
  const nome = document.getElementById('nome').value;
  const patrimonio = document.getElementById('patrimonio').value;
  const serialNumber = document.getElementById('serialNumber').value;
  const posicionamentoOLT = document.getElementById('posicionamento').value;
  const tipoDeServico = document.getElementById('tipoDeServico').value;
  const tecnicoExterno = document.getElementById('instalador').value;
  const tecnicoInterno = document.getElementById('suporte').value;
  salvar(nome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno);
  alert("Informações enviadas para Planilha!!")
}

function apagaForm() {
	document.getElementById('formInformacoes').reset();
	document.getElementById('scriptOLT').value = "";
}