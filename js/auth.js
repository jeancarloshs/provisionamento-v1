// window.addEventListener("load", (event) => {
//   localStorage.removeItem("TokenAuthentication");
//   localStorage.removeItem("isAdmin");
//   console.log("page is fully loaded");
//   return '';
// });

// window.onbeforeunload = function() {
//   localStorage.removeItem("TokenAuthentication");
//   localStorage.removeItem("isAdmin");
//   return '';
// };

// const addLiMenu = () => {
//   let verificaAdmin = localStorage.getItem('isAdmin', true);
//   if(verificaAdmin !== 'false') {
//     let URL = '<li><a href="opcoes.html">Opções</a></li>'
//     let newUl = document.querySelector('ul')
//     let newLi = document.createElement("li")
//     newUl.innerHTML = newUl.innerHTML + URL
//     console.log(newUl)
//   }
// }

function apagaLogin(e) {  
	document.getElementById('formFormulario').reset();
  e.preventDefault();
};// FINAL function apagaForm

function getIp(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}

function fazLogin(){
const emailUsuario = document.getElementById('email').value;
const senhaUsuario = document.getElementById('senhaUsuario').value;
let geraToken = Math.random().toString(16).substr(2) + 16;
const token = localStorage.setItem('TokenAuthentication', geraToken);
// let newUl = document.querySelector('ul');
// let newLi = document.createElement('li');
// newLi.innerHTML = `<a href="opcoes.html" class="addMenuOpcoes" id="addMenuOpcoes">Opções</a>`
// newUl.appendChild(newLi)
//let isAdmin = localStorage.setItem('addMenuOpcoes', addClassAdmin);

(async () => {
  try {
    let headersList = {
      "Accept": "*/*",
      "apikey": "---",
      "Authorization": "Bearer ---"
     }
     
     let response = await fetch("https://---.supabase.co/rest/v1/tbUsuarios?select=emailFuncionario,senhaFuncionario,admin", { 
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
        let userAdmin = arrayDataJson[index].admin;

        if (emailUsuario == emailValidado && senhaUsuario == senhaValidada) {
          array.lenght = array.indexOf(email)
          //console.log('array',array.lenght)
          token
          //window.location.assign('provisionamento.html')
            if (userAdmin == true) {
              let isAdmin = localStorage.setItem('isAdmin', userAdmin);
              isAdmin
              window.location.assign('../pages/provisionamento.html');
              //console.log('admin', userAdmin)
            } else {
              let isAdmin = localStorage.setItem('isAdmin', userAdmin);
              isAdmin
              window.location.assign('../pages/provisionamento.html');
            }
          //console.log('userAdmin', userAdmin)          
          return
        } else {
          // alert('Usuario ou senha invalidos!!!')
          console.error('Usuario ou senha invalidos')
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
