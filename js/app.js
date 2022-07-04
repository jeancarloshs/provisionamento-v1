window.onload = function(){
  initSupa()
}

function initSupa () {

  const { createClient } = supabase;
  const _supabase = createClient
  ('https://hbnnejxzvuzwlmtekpos.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g');
  
  const instalacaoJaneiro = async () => {
    let { data: instalacaoJaneiro, error } = await _supabase
    .from('PROVISIONAMENTO')
    .select('tipoDeAtivacao, data')
    .eq('tipoDeAtivacao', 'Instalação')
    .gte('data', '2022-01-01')
    .lte('data', '2022-01-31')

    if (error) {
      console.error('erro: ',error)
      return
    }
    //console.log('Sucesso Instalação Janeiro', instalacaoJaneiro);
    const resultAtivacaoJaneiro = instalacaoJaneiro;
    //console.log('RESULTADO: ',resultJaneiro.length)
    //const resultForEach = resultJaneiro.forEach(function(nome, i) { console.log('[forEach]', nome, i);})

    const mudancaJaneiro = async () => {
      let { data: mudancaDeEnderecoJaneiro, error } = await _supabase
      .from('PROVISIONAMENTO')
      .select('tipoDeAtivacao, data')
      .eq('tipoDeAtivacao', 'Mudança de Endereço')
      .gte('data', '2022-01-01')
      .lte('data', '2022-01-31')
  
      if (error) {
        console.error('erro: ',error)
        return
      }
      //console.log('Sucesso Instalação Janeiro', instalacaoJaneiro);
      const resultMudancaJaneiro = mudancaDeEnderecoJaneiro;

      const manobraJaneiro = async () => {
        let { data: manobraDePonJaneiro, error } = await _supabase
        .from('PROVISIONAMENTO')
        .select('tipoDeAtivacao, data')
        .eq('tipoDeAtivacao', 'Manobra de Pon')
        .gte('data', '2022-01-01')
        .lte('data', '2022-01-31')
    
        if (error) {
          console.error('erro: ',error)
          return
        }
        //console.log('Sucesso Instalação Janeiro', instalacaoJaneiro);
        const resultManobraJaneiro = manobraDePonJaneiro;

        const trocaJaneiro = async () => {
          let { data: trocaDeEquipamentoJaneiro, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Troca de Equipamento')
          .gte('data', '2022-01-01')
          .lte('data', '2022-01-31')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Janeiro', instalacaoJaneiro);
          const resultTrocaJaneiro = trocaDeEquipamentoJaneiro;
    
  const instalFevereiro = async () => {
    let { data: instalacaoFevereiro, error } = await _supabase
    .from('PROVISIONAMENTO')
    .select('tipoDeAtivacao, data')
    .eq('tipoDeAtivacao', 'Instalação')
    .gte('data', '2022-02-01')
    .lte('data', '2022-02-28')

    if (error) {
      console.error('erro: ',error)
      return
    }
    //console.log('Sucesso', instalacaoFevereiro);
    const resultAtivacaoFevereiro = instalacaoFevereiro;
    //console.log('RESULTADO: ',resultFevereiro.length)
  
      const mudancaFevereiro = async () => {
        let { data: mudancaDeEnderecoFevereiro, error } = await _supabase
        .from('PROVISIONAMENTO')
        .select('tipoDeAtivacao, data')
        .eq('tipoDeAtivacao', 'Mudança de Endereço')
        .gte('data', '2022-02-01')
        .lte('data', '2022-02-28')
    
        if (error) {
          console.error('erro: ',error)
          return
        }
        //console.log('Sucesso Instalação Fevereiro', instalacaoFevereiro);
        const resultMudancaFevereiro = mudancaDeEnderecoFevereiro;
  
        const manobraFevereiro = async () => {
          let { data: manobraDePonFevereiro, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Manobra de Pon')
          .gte('data', '2022-02-01')
          .lte('data', '2022-02-28')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Fevereiro', instalacaoFevereiro);
          const resultManobraFevereiro = manobraDePonFevereiro;
  
          const trocaFevereiro = async () => {
            let { data: trocaDeEquipamentoFevereiro, error } = await _supabase
            .from('PROVISIONAMENTO')
            .select('tipoDeAtivacao, data')
            .eq('tipoDeAtivacao', 'Troca de Equipamento')
            .gte('data', '2022-02-01')
            .lte('data', '2022-02-28')
        
            if (error) {
              console.error('erro: ',error)
              return
            }
            //console.log('Sucesso Instalação Fevereiro', instalacaoFevereiro);
            const resultTrocaFevereiro = trocaDeEquipamentoFevereiro;  

  const instalMarco = async () => {
    let { data: instalacaoMarco, error } = await _supabase
    .from('PROVISIONAMENTO')
    .select('tipoDeAtivacao, data')
    .eq('tipoDeAtivacao', 'Instalação')
    .gte('data', '2022-03-01')
    .lte('data', '2022-03-31')

    if (error) {
      console.error('erro: ',error)
      return
    }
    //console.log('Sucesso', instalacaoMarco)
    const resultAtivacaoMarco = instalacaoMarco;

    const mudancaMarco = async () => {
      let { data: mudancaDeEnderecoMarco, error } = await _supabase
      .from('PROVISIONAMENTO')
      .select('tipoDeAtivacao, data')
      .eq('tipoDeAtivacao', 'Mudança de Endereço')
      .gte('data', '2022-03-01')
      .lte('data', '2022-03-31')
  
      if (error) {
        console.error('erro: ',error)
        return
      }
      //console.log('Sucesso Instalação Marco', instalacaoMarco);
      const resultMudancaMarco = mudancaDeEnderecoMarco;

      const manobraMarco = async () => {
        let { data: manobraDePonMarco, error } = await _supabase
        .from('PROVISIONAMENTO')
        .select('tipoDeAtivacao, data')
        .eq('tipoDeAtivacao', 'Manobra de Pon')
        .gte('data', '2022-03-01')
        .lte('data', '2022-03-31')
    
        if (error) {
          console.error('erro: ',error)
          return
        }
        //console.log('Sucesso Instalação Marco', instalacaoMarco);
        const resultManobraMarco = manobraDePonMarco;

        const trocaMarco = async () => {
          let { data: trocaDeEquipamentoMarco, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Troca de Equipamento')
          .gte('data', '2022-03-01')
          .lte('data', '2022-03-31')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Marco', instalacaoMarco);
          const resultTrocaMarco = trocaDeEquipamentoMarco;  

  const instalAbril = async () => {
    let { data: instalacaoAbril, error } = await _supabase
    .from('PROVISIONAMENTO')
    .select('tipoDeAtivacao, data')
    .eq('tipoDeAtivacao', 'Instalação')
    .gte('data', '2022-04-01')
    .lte('data', '2022-04-30')

    if (error) {
      console.error('erro: ',error)
      return
    }
    //console.log('Sucesso', instalacaoAbril)
    const resultAtivacaoAbril = instalacaoAbril;

    const mudancaAbril = async () => {
      let { data: mudancaDeEnderecoAbril, error } = await _supabase
      .from('PROVISIONAMENTO')
      .select('tipoDeAtivacao, data')
      .eq('tipoDeAtivacao', 'Mudança de Endereço')
      .gte('data', '2022-04-01')
      .lte('data', '2022-04-30')
  
      if (error) {
        console.error('erro: ',error)
        return
      }
      //console.log('Sucesso Instalação Abril', instalacaoAbril);
      const resultMudancaAbril = mudancaDeEnderecoAbril;

      const manobraAbril = async () => {
        let { data: manobraDePonAbril, error } = await _supabase
        .from('PROVISIONAMENTO')
        .select('tipoDeAtivacao, data')
        .eq('tipoDeAtivacao', 'Manobra de Pon')
        .gte('data', '2022-04-01')
        .lte('data', '2022-04-30')
    
        if (error) {
          console.error('erro: ',error)
          return
        }
        //console.log('Sucesso Instalação Abril', instalacaoAbril);
        const resultManobraAbril = manobraDePonAbril;

        const trocaAbril = async () => {
          let { data: trocaDeEquipamentoAbril, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Troca de Equipamento')
          .gte('data', '2022-04-01')
          .lte('data', '2022-04-30')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Abril', instalacaoAbril);
          const resultTrocaAbril = trocaDeEquipamentoAbril; 

  const instalMaio = async () => {
    let { data: instalacaoMaio, error } = await _supabase
    .from('PROVISIONAMENTO')
    .select('tipoDeAtivacao, data')
    .eq('tipoDeAtivacao', 'Instalação')
    .gte('data', '2022-05-01')
    .lte('data', '2022-05-31')

    if (error) {
      console.error('erro: ',error)
      return
    }
    //console.log('Sucesso', instalacaoMaio)
    const resultAtivacaoMaio = instalacaoMaio;

    const mudancaMaio = async () => {
      let { data: mudancaDeEnderecoMaio, error } = await _supabase
      .from('PROVISIONAMENTO')
      .select('tipoDeAtivacao, data')
      .eq('tipoDeAtivacao', 'Mudança de Endereço')
      .gte('data', '2022-05-01')
      .lte('data', '2022-05-31')
  
      if (error) {
        console.error('erro: ',error)
        return
      }
      //console.log('Sucesso Instalação Maio', instalacaoMaio);
      const resultMudancaMaio = mudancaDeEnderecoMaio;

      const manobraMaio = async () => {
        let { data: manobraDePonMaio, error } = await _supabase
        .from('PROVISIONAMENTO')
        .select('tipoDeAtivacao, data')
        .eq('tipoDeAtivacao', 'Manobra de Pon')
        .gte('data', '2022-05-01')
        .lte('data', '2022-05-31')
    
        if (error) {
          console.error('erro: ',error)
          return
        }
        //console.log('Sucesso Instalação Maio', instalacaoMaio);
        const resultManobraMaio = manobraDePonMaio;

        const trocaMaio = async () => {
          let { data: trocaDeEquipamentoMaio, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Troca de Equipamento')
          .gte('data', '2022-05-01')
          .lte('data', '2022-05-31')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Maio', instalacaoMaio);
          const resultTrocaMaio = trocaDeEquipamentoMaio; 

    const instalacaoJunho = async () => {
      let { data: instalacaoJunho, error } = await _supabase
      .from('PROVISIONAMENTO')
      .select('tipoDeAtivacao, data')
      .eq('tipoDeAtivacao', 'Instalação')
      .gte('data', '2022-06-01')
      .lte('data', '2022-06-30')
  
      if (error) {
        console.error('erro: ',error)
        return
      }
      //console.log('Sucesso Instalação Junho', instalacaoJunho);
      const resultAtivacaoJunho = instalacaoJunho;
      //console.log('RESULTADO: ',resultJunho.length)
      //const resultForEach = resultJunho.forEach(function(nome, i) { console.log('[forEach]', nome, i);})
  
      const mudancaJunho = async () => {
        let { data: mudancaDeEnderecoJunho, error } = await _supabase
        .from('PROVISIONAMENTO')
        .select('tipoDeAtivacao, data')
        .eq('tipoDeAtivacao', 'Mudança de Endereço')
        .gte('data', '2022-06-01')
        .lte('data', '2022-06-30')
    
        if (error) {
          console.error('erro: ',error)
          return
        }
        //console.log('Sucesso Instalação Junho', instalacaoJunho);
        const resultMudancaJunho = mudancaDeEnderecoJunho;
  
        const manobraJunho = async () => {
          let { data: manobraDePonJunho, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Manobra de Pon')
          .gte('data', '2022-06-01')
          .lte('data', '2022-06-30')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Junho', instalacaoJunho);
          const resultManobraJunho = manobraDePonJunho;
  
          const trocaJunho = async () => {
            let { data: trocaDeEquipamentoJunho, error } = await _supabase
            .from('PROVISIONAMENTO')
            .select('tipoDeAtivacao, data')
            .eq('tipoDeAtivacao', 'Troca de Equipamento')
            .gte('data', '2022-06-01')
            .lte('data', '2022-06-30')
        
            if (error) {
              console.error('erro: ',error)
              return
            }
            //console.log('Sucesso Instalação Junho', instalacaoJunho);
            const resultTrocaJunho = trocaDeEquipamentoJunho;

    const instalacaoJulho = async () => {
      let { data: instalacaoJulho, error } = await _supabase
      .from('PROVISIONAMENTO')
      .select('tipoDeAtivacao, data')
      .eq('tipoDeAtivacao', 'Instalação')
      .gte('data', '2022-07-01')
      .lte('data', '2022-07-31')
  
      if (error) {
        console.error('erro: ',error)
        return
      }
      //console.log('Sucesso Instalação Julho', instalacaoJulho);
      const resultAtivacaoJulho = instalacaoJulho;
      //console.log('RESULTADO: ',resultJulho.length)
      //const resultForEach = resultJulho.forEach(function(nome, i) { console.log('[forEach]', nome, i);})
  
        const mudancaJulho = async () => {
          let { data: mudancaDeEnderecoJulho, error } = await _supabase
          .from('PROVISIONAMENTO')
          .select('tipoDeAtivacao, data')
          .eq('tipoDeAtivacao', 'Mudança de Endereço')
          .gte('data', '2022-07-01')
          .lte('data', '2022-07-31')
      
          if (error) {
            console.error('erro: ',error)
            return
          }
          //console.log('Sucesso Instalação Julho', instalacaoJulho);
          const resultMudancaJulho = mudancaDeEnderecoJulho;
    
            const manobraJulho = async () => {
              let { data: manobraDePonJulho, error } = await _supabase
              .from('PROVISIONAMENTO')
              .select('tipoDeAtivacao, data')
              .eq('tipoDeAtivacao', 'Manobra de Pon')
              .gte('data', '2022-07-01')
              .lte('data', '2022-07-31')
          
              if (error) {
                console.error('erro: ',error)
                return
              }
              //console.log('Sucesso Instalação Julho', instalacaoJulho);      
              const resultManobraJulho = manobraDePonJulho;
      
                const trocaJulho = async () => {
                  let { data: trocaDeEquipamentoJulho, error } = await _supabase
                  .from('PROVISIONAMENTO')
                  .select('tipoDeAtivacao, data')
                  .eq('tipoDeAtivacao', 'Troca de Equipamento')
                  .gte('data', '2022-07-01')
                  .lte('data', '2022-07-31')
              
                  if (error) {
                    console.error('erro: ',error)
                    return
                  }
                  //console.log('Sucesso Instalação Julho', instalacaoJulho);
                  const resultTrocaJulho = trocaDeEquipamentoJulho;        

    var options = {
      series: [{
      name: 'Instalações',
      data: [resultAtivacaoJaneiro.length, resultAtivacaoFevereiro.length, resultAtivacaoMarco.length, resultAtivacaoAbril.length, resultAtivacaoMaio.length, resultAtivacaoJunho.length, resultAtivacaoJulho.length, 1, 1, 1, 1, 1]
    }, {
      name: 'Mudanças de Endereços',
      data: [resultMudancaJaneiro.length, resultMudancaFevereiro.length, resultMudancaMarco.length, resultMudancaAbril.length, resultMudancaMaio.length, resultMudancaJunho.length, resultMudancaJulho.length, 1, 1, 1, 1, 1]
    }, {
      name: 'Manobras de Pons',
      data: [resultManobraJaneiro.length, resultManobraFevereiro.length, resultManobraMarco.length, resultManobraAbril.length, resultManobraMaio.length, resultManobraJunho.length, resultManobraJulho.length, 1, 1, 1, 1, 1]
    }, {
      name: 'Trocas de Equipamentos',
      data: [resultTrocaJaneiro.length, resultTrocaFevereiro.length, resultTrocaMarco.length, resultTrocaAbril.length, resultTrocaMaio.length, resultTrocaJunho.length, resultTrocaJulho.length, 1, 1, 1, 1, 1]
    }],
      chart: {
      type: 'bar',
      foreColor: "white",
      height: 500,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Serviços Realizados'
    },
    xaxis: {
      categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
    yaxis: {
      title: {
        text: 'Meses'
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 50
    }
    };
  
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    
  } // trocaJulho
    trocaJulho()
  } // manobraJulho
    manobraJulho()
  } // mudancaJulho
    mudancaJulho()
  } // instalacaoJulho
    instalacaoJulho()    
  } // trocaJunho
    trocaJunho()
  } // manobraJunho
    manobraJunho()
  } // mudancaJunho
    mudancaJunho()
  } // instalacaoJunho
    instalacaoJunho()
  } // trocaMaio
    trocaMaio()
  } // manobraMaio
    manobraMaio()
  } // mudancaMaio
    mudancaMaio()
  } // instalMaio
    instalMaio() 
  } // trocaAbril
    trocaAbril()
  } // manobraAbril
    manobraAbril()
  } // mudancaAbril
    mudancaAbril()
  } // instalAbril
    instalAbril()
  } // trocaMarco
    trocaMarco()
  } // manobraMarco
    manobraMarco()
  } // mudancaMarco
    mudancaMarco()
  } // instalMarco
    instalMarco()
  } // trocaFevereiro
    trocaFevereiro()
  } // manobraFevereiro
    manobraFevereiro()
  } // mudancaFevereiro
    mudancaFevereiro()    
  } // instalFevereiro
    instalFevereiro()
  } // trocaJaneiro
    trocaJaneiro()
  } // manobraJaneiro
    manobraJaneiro()
  } // mudancaJaneiro
    mudancaJaneiro()
  } // instalacaoJaneiro
    instalacaoJaneiro()
}