class Cadastro extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="container">
        <div class="grid-6 formLogin box">
      
          <form id="formFormulario" method="POST" class="formFormulario">
            <h2>Cadastro</h2>
      
            <label for="name"></label>
            <input type="name" id="name" name="name" placeholder="Nome" class="inputName" data-rules="required|min=3">
      
            <label for="tipoDeCargo" class="selectLabel"></label>
            <select name="tipoDeCargo" id="tipoDeCargo" class="grid-3 tipoDeCargo select" data-rules="required">
              <option value="" select>Cargo</option>
              <option value="Instalador">Instalador</option>
              <option value="Suporte">Suporte</option>
            </select>
      
            <label for="permissaoDeADMIN" class="selectLabel"></label>
            <select name="permissaoDeADMIN" id="permissaoDeADMIN" class="grid-3 permissaoDeADMIN select" data-rules="required">
              <option value="" select>Permissões</option>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuario</option>
            </select>
      
            <label for="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" class="inputEmail" data-rules="required|min=3">
      
            <label for="password"></label>
            <input type="text" id="senhaUsuario" name="password" placeholder="Senha" class="inputPWD" data-rules="required|min=8">
      
            <!-- <label for="confirmePWD"></label>
            <input type="text" id="confirmePWD" name="confirmePWD" placeholder="Confirme a senha" class="inputPWD" data-rules="required|min=1"> -->
      
            
          </form>
          <button type="submit" id="btnLogin" name="btnLogin" class="btn btnLogin inputLogin" onclick="salvaCadastro()">Cadastrar</button>
          <button type="submit" id="btnLimpaLogin" name="btnLimpaLogin" class="btn BtnCopiar btnAcoes inputLogin" onclick="apagaLogin(event)">Limpar</button>
          <br />
      
        </div>
      
      </section>
        `
      // browser calls this method when the element is added to the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
    disconnectedCallback() {
      // browser calls this method when the element is removed from the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
  }
  
  customElements.define('form-cadastro', Cadastro);