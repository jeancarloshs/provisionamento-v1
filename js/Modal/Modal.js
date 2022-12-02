class Modal extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div id="fade" class="hide"></div>
        <div id="modal" class="hide">
          <div class="modal-header">
            <h2 class="modal-h2">Concluido!!!</h2>
            <button id="close-modal">Fechar</button>
          </div>
          <div class="modal-body">
            <p>
              As informações foram enviadas para a Planilha com Sucesso!!
            </p>
          </div>
        </div>
        `
      // browser calls this method when the element is added to the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
    disconnectedCallback() {
      // browser calls this method when the element is removed from the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
  }
  
  customElements.define('modal-alert', Modal);