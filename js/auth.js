
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click',()=>{
  
  const login = document.getElementById('email').value;
  const pwd = document.getElementById('password').value;

  const { createClient } = supabase;

  const _supabase = createClient("https://hbnnejxzvuzwlmtekpos.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g");

  (() => { 
    let { user, error } = _supabase.auth.signInWithOtp({
      email: login,
    })

      if (error) {
        console.error('erro: ',error)
        return
      } 

      console.log("user:", user)

        window.location.assign("https://www.w3schools.com")
        console.log('login ', user)
  });
})


function apagaLogin(e) {  
	document.getElementById('formFormulario').reset();
  e.preventDefault();
};// FINAL function apagaForm