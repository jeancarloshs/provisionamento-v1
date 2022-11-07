const { createClient } = supabase;

const _supabase = createClient(process.env.URL_SUPABASE, process.env.SUPABASE_API_KEY);
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
        tecnicoSup: tecnicoInterno,
        data: ((new Date()).toISOString()).toLocaleString('br-SP', { hour12: false })
      },
    ])


    if (error) {
      console.error(error)
      return
    }

    console.log("DB", data)
    
    main();
}


  // VALIDADOR DE FORMULARIO
  let inputValidator = {
    handleSubmit:(event)=>{
      event.preventDefault();
      let send = true;
  
      let inputs = form.querySelectorAll('input');
      let selects = form.querySelectorAll('select');

      inputValidator.clearErrors();
  
      for(let i=0; i<inputs.length; i++) {
        let input = inputs[i];
        let check = inputValidator.checkInput(input);
        if (check !== true) {
          send = false;
          // exibir o erro
          inputValidator.showError(input, check);

          console.log("inputs:", inputs)
          console.log("erro:", check)
        }
      }
  
      if(send) {
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
                tecnicoSup: tecnicoInterno,
                data: ((new Date()).toISOString()).toLocaleString('br-SP', { hour12: false })
              },
            ])
            
        
            if (error) {
              console.error(error)
              return
            }
        
            console.log(data)
          }
        
          main()

  
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
  console.log("PlanInfo", [parsedNome, tecnicoExterno, serialNumber, posicionamentoOLT, patrimonio, tipoDeServico, tecnicoInterno]);
  
}      
    },
    checkInput:(input) => {
      let rules = input.getAttribute('data-rules');
  
      if (rules !== null) {
        rules = rules.split('|'); // separa as regras
        for(let k in rules) {
          let rDetails = rules[k].split('=');
  
          switch(rDetails[0]) {
            case 'required':
              if(input.value == "") {
                return 'Campo não pode ser Vazio.';
              }
            break;
            case 'min':
              if(input.value.length < rDetails[1]) {
                return 'Número de caracteres insuficientes, digite mais '+rDetails[1]+'.';
              }
            break;
          }
        }
      }
      return true;
    },
    showError:(input, error) => {
      input.style.borderColor = '#FF0000';

      let errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error;
      input.parentElement.insertBefore(errorElement, input.nextSibling);
    },
    clearErrors:() => {
      let inputs = form.querySelectorAll('input');
      for(let i=0; i<inputs.length; i++) {
        inputs[i].style = '';
      }

      let errorElement = document.querySelectorAll('.error');
      for(let i=0; i<errorElement.length; i++) {
        errorElement[i].remove();
      }
    }
  }
  
  let form = document.querySelector('.formValidation');
  form.addEventListener('submit', inputValidator.handleSubmit);











// const { createClient } = supabase;

// const _supabase = createClient(process.env.URL_SUPABASE, process.env.SUPABASE_API_KEY);
// //console.log('Supabase Instance: ', _supabase)  

// const main = async () => {
//   let { data, error } = await _supabase
//     .from('PROVISIONAMENTO')
//     .insert([
//       { 
//         clientes: nome,
//         tecnicoRua: tecnicoExterno,
//         numberSerial: serialNumber,
//         tipoDeAtivacao: tipoDeServico,
//         posicionamento: posicionamentoOLT,
//         patrimonioNX: patrimonio,
//         tecnicoSup: tecnicoInterno,
//         data: ((new Date()).toISOString()).toLocaleString('br-SP', { hour12: false })
//       },
//     ])

//     if (error) {
//       console.error("error_DB:", error)
//       return
//     }        
//     console.log("DB", data)
// }

// main();