class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
      this.innerHTML = `
      <header class="header">
      <div class="container">
        <a href="index.html" class="grid-4">
          <img src="./img/naxos_telecom_logo.png" alt="Naxos Telecom" />
        </a>
        <nav class="grid-12 header_menu">
          <ul>
            <li><a href="listaTB.html">Lista</a></li>
            <li><a href="relatorios.html">Relatorios</a></li>
            <li><a href="bridge.html">Bridge</a></li>
            <li><a href="telefonia.html">Telefonia</a></li>
          </ul>
        </nav>
      </div>
    </header>
      `
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

}

customElements.define('index-teste', Header);