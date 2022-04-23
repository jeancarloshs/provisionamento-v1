window.onload = function(){
  initSupa()
}

function initSupa () {

  const { createClient } = supabase;
  const _supabase = createClient
  ('https://hbnnejxzvuzwlmtekpos.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g');
  const puxaInfo = async () => {
    let { data: PROVISIONAMENTO, error } = await _supabase
    .from('PROVISIONAMENTO')
    .select('tecnicoRua, tipoDeAtivacao, data')
    .eq('tipoDeAtivacao', 'Instalação')
    .eq('tecnicoRua', 'Willians')
    .gte('data', '2022-01-01')
    .lte('data', '2022-01-10')
    
    if (error) {
      console.error('erro: ',error)
      return
    }
    console.log('Sucesso', PROVISIONAMENTO);
  }

  puxaInfo()
}

  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Instalações',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [ 'red' ],
              borderColor: [ 'white' ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });