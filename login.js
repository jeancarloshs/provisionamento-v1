class Login extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <div class="container">
          <a href="#" class="grid-4">
            <img src="./img/naxos_telecom_logo.png" alt="Naxos Telecom" />
          </a>
        </div>
      </header> <!-- header -->
    
    <section class="container">
      <div class="grid-6 formLogin box">
    
        <form id="formFormulario" method="POST" class="formFormulario">
    
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" class="inputLogin" data-rules="required|min=3">
    
          <!-- <label for="password"></label>
          <input type="password" name="password" id="password" placeholder="Senha" class="inputLogin" data-rules="required"> -->
    
          <button type="submit" id="btnLogin" name="btnLogin" class="btn btnLogin">Login</button>
          <button type="submit" id="btnLimpaLogin" name="btnLimpaLogin" class="btn BtnCopiar btnAcoes" onclick="apagaLogin(event)">Limpar</button>
          <br />
    
        </form>
    
      </div>
    
    </section>
    `
    // <script type="module" src="./js/auth.js"></script>
      // browser calls this method when the element is added to the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
    disconnectedCallback() {
      // browser calls this method when the element is removed from the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
  }
  
  customElements.define('login-auth', Login);