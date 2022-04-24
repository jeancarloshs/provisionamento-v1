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

    const resultJaneiro = instalacaoJaneiro;
    //console.log('RESULTADO: ',resultJaneiro.length)
    //const resultForEach = resultJaneiro.forEach(function(nome, i) { console.log('[forEach]', nome, i);})

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
    const resultFevereiro = instalacaoFevereiro;
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
    const resultMarco = instalacaoMarco;

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
    console.log('Sucesso', instalacaoAbril)
    const resultAbril = instalacaoAbril;

    var options = {
      series: [{
      name: 'Instalações',
      data: [resultJaneiro.length, resultFevereiro.length, resultMarco.length, resultAbril.length, 22, 43, 21]
    }, {
      name: 'Mudanças de Endereços',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'Manobras de Pons',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'Trocas de Equipamentos',
      data: [9, 7, 5, 8, 6, 9, 4]
    }],
      chart: {
      type: 'bar',
      foreColor: "white",
      height: 450,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Serviços Realizados'
    },
    xaxis: {
      categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
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
    instalAbril()
  }
    instalMarco()
    
  }
    instalFevereiro()
  }
    puxaInfo()

  






}