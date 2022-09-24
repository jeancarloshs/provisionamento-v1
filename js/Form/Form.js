class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
      this.innerHTML = `

      `
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

}

customElements.define('rodape-footer', Footer);