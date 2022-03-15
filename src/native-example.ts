let tmpl = document.createElement('template');

tmpl.innerHTML = `
  <style>
  b {
    color:red
  }
  </style> 
  <b>I'm in shadow dom!</b>
`;

(function define() {
  class AppDrawer extends HTMLElement {
    // A getter/setter for an open property.
    get open() {
      return this.hasAttribute('open');
    }

    set open(val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
      this.toggleDrawer();
    }

    // A getter/setter for a disabled property.
    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(val) {
      // Reflect the value of the disabled property as an HTML attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    // Can define constructor arguments if you wish.
    constructor() {
      // If you define a constructor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      // Setup a click listener on <app-drawer> itself.
      this.addEventListener('click', () => {
        // Don't toggle the drawer if it's disabled.
        if (this.disabled) {
          return;
        }
        this.toggleDrawer();
      });
    }

    toggleDrawer() {
      this.open = !this.open;
    }
  }

  customElements.define('app-drawer', AppDrawer);
})();
