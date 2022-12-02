function fazLogin(){
  const btnLogin = document.getElementById('btnLogin');

  const login = btnLogin.addEventListener('click',()=>{
    
    const emailUsuario = document.getElementById('email').value;
    const pwd = document.getElementById('senhaUsuario').value;
  
    const { createClient } = supabase;
  
    const _supabase = createClient ('https://hbnnejxzvuzwlmtekpos.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g');
    
    const dadosUsuario = async () => {
      let { data: tbUsuarios, error } = await _supabase
      .from('tbUsuarios')
      .select('emailFuncionario, senhaFuncionario')

      if (emailUsuario != emailUsuario && pwd != pwd) {
        alert("usuario ou senha invalidos")
      }
  
      if (error) {
        console.error('erro: ',error)
        return
      }

      
  
      console.log('dados: ',dadosUsuario)
      window.location.assign("https://www.w3schools.com")
      console.log('login ', user)
    }
    console.log('login')
    
    dadosUsuario();
    
  })
}

function apagaLogin(e) {  
	document.getElementById('formFormulario').reset();
  e.preventDefault();
};// FINAL function apagaForm

