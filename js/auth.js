function apagaLogin(e) {  
	document.getElementById('formFormulario').reset();
  e.preventDefault();
};// FINAL function apagaForm

function fazLogin(){
const emailUsuario = document.getElementById('email').value;
const senhaUsuario = document.getElementById('senhaUsuario').value;

(async () => {
  try {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibm5lanh6dnV6d2xtdGVrcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MDY3MzksImV4cCI6MTk2NjA4MjczOX0.cSPYBGyNvEl_nq69kx3aFfjxWJIqQ-Fdm3EVNPzEA_g"
     }
     
     let response = await fetch("https://hbnnejxzvuzwlmtekpos.supabase.co/rest/v1/tbUsuarios?select=emailFuncionario,senhaFuncionario", { 
       method: "GET",
       headers: headersList,
     });
     
     let data = await response.json();
     let dataJson = data
     //console.log(dataJson);

     let arrayDataJson = dataJson

      arrayDataJson.forEach((email, index, array) => {
        let emailValidado = email.emailFuncionario;
        let senhaValidada = arrayDataJson[index].senhaFuncionario;

        if (emailUsuario == emailValidado && senhaUsuario == senhaValidada) {
          array.lenght = array.indexOf(email)
          console.log('array',array.lenght)
          //window.location.assign('provisionamento.html')
          return
        } else {
          console.log('Usuario ou senha invalidos')
        }

      //console.log(arrayDataJson[index])
      //console.log('Email Funcionario: ',emailValidado, '||','Senha Funcionario: ',senhaValidada)
      //console.log('Senha Funcionario: ',senhaValidada)
    })

    newArray = arrayDataJson
    //console.log('new array',newArray)
    
    //const jsonData = await response.json()
    //console.log('return: ',jsonData)
    //console.log('header: ',headersList)
    // console.log('Status Response:')
    // console.log('Response OK:',response.ok)
    // console.log('Response Status:',response.status)

  } catch (error) {
    //console.log('error: ',error)
    }

    

})
();









}