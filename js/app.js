window.onload = function(){
  initSupa()
}

function initSupa () {



  const { createClient } = supabase;
  const _supabase = createClient
  ('https://hbnnejxzvuzwlmtekpos.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g');
  
  const puxaInfo = async () => {
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

    var options = {
      series: [{
      name: 'Instalações',
      data: [resultAtivacaoJaneiro.length, resultAtivacaoFevereiro.length, resultAtivacaoMarco.length, resultAtivacaoAbril.length, resultAtivacaoMaio.length, 1, 1, 1, 1, 1, 1, 1,]
    }, {
      name: 'Mudanças de Endereços',
      data: [resultMudancaJaneiro.length, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }, {
      name: 'Manobras de Pons',
      data: [resultManobraJaneiro.length, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }, {
      name: 'Trocas de Equipamentos',
      data: [resultTrocaJaneiro.length, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
  
  }
    instalMaio() 
  }
    instalAbril()
  }
    instalMarco()
  }
    instalFevereiro()
  }
    trocaJaneiro()
  }
    manobraJaneiro()
  }
    mudancaJaneiro()
  }
    puxaInfo()
}
