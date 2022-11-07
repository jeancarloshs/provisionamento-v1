require('dotenv').config()
console.log('process.env ', process.env)

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click',()=>{
  
  const login = document.getElementById('email').value;
  const pwd = document.getElementById('password').value;

  const { createClient } = supabase;

  const _supabase = createClient(process.env.URL_SUPABASE, process.env.SUPABASE_API_KEY);

  (() => { 
    let { user, error } = _supabase.auth.signIn({
      email: login
    })

      if (error) {
        console.error('erro: ',error)
        return
      } 

      console.log("user:", user)

        window.location.assign("https://www.w3schools.com")
        console.log('login ', user)
  });
  const session = _supabase.auth.session()
  console.log('session: ', session)
})


function apagaLogin(e) {  
	document.getElementById('formFormulario').reset();
  e.preventDefault();
};// FINAL function apagaForm