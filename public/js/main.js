(() => {
  // node_modules/@vizuaalog/bulmajs/src/Data.js
  var Data = class {
    constructor() {
      this._data = {};
    }
    set(uid, key, value) {
      if (!this._data.hasOwnProperty(uid)) {
        this._data[uid] = {};
      }
      this._data[uid][key] = value;
    }
    get(uid, key) {
      if (!this._data.hasOwnProperty(uid)) {
        return void 0;
      }
      return this._data[uid][key];
    }
    destroy(uid) {
      if (this._data.hasOwnProperty(uid)) {
        delete this._data[uid];
      }
    }
  };
  Data.uid = 1;
  var Data_default = Data;

  // node_modules/@vizuaalog/bulmajs/src/core.js
  function Bulma(selector) {
    if (!(this instanceof Bulma)) {
      return new Bulma(selector);
    }
    if (selector instanceof Bulma) {
      return selector;
    }
    if (selector instanceof HTMLElement) {
      this._elem = selector;
    } else {
      this._elem = document.querySelector(selector);
    }
    if (!selector) {
      this._elem = document.createElement("div");
    }
    if (!this._elem.hasOwnProperty(Bulma.id)) {
      this._elem[Bulma.id] = Data_default.uid++;
    }
    return this;
  }
  Bulma.VERSION = "0.12.1";
  Bulma.id = "bulma-" + new Date().getTime();
  Bulma.cache = new Data_default();
  Bulma.plugins = {};
  Bulma.create = (key, config) => {
    if (!key || !Bulma.plugins.hasOwnProperty(key)) {
      throw new Error("[BulmaJS] A plugin with the key '" + key + "' has not been registered.");
    }
    return new Bulma.plugins[key].handler(config);
  };
  Bulma.registerPlugin = (key, plugin, priority = 0) => {
    if (!key) {
      throw new Error("[BulmaJS] Key attribute is required.");
    }
    Bulma.plugins[key] = {
      priority,
      handler: plugin
    };
    Bulma.prototype[key] = function(config) {
      return new Bulma.plugins[key].handler(config, this);
    };
  };
  Bulma.parseDocument = (root = document) => {
    let sortedPlugins = Object.keys(Bulma.plugins).sort((a, b) => Bulma.plugins[a].priority < Bulma.plugins[b].priority);
    Bulma.each(sortedPlugins, (key) => {
      if (!Bulma.plugins[key].handler.hasOwnProperty("parseDocument")) {
        console.error("[BulmaJS] Plugin " + key + " does not have a parseDocument method. Automatic document parsing is not possible for this plugin.");
        return;
      }
      Bulma.plugins[key].handler.parseDocument(root);
    });
  };
  Bulma.createElement = (name, classes) => {
    if (!classes) {
      classes = [];
    }
    if (typeof classes === "string") {
      classes = [classes];
    }
    let elem = document.createElement(name);
    Bulma.each(classes, (className) => {
      elem.classList.add(className);
    });
    return elem;
  };
  Bulma.findOrCreateElement = (query, parent = document, elemName = "div", classes = []) => {
    var elem = parent.querySelector(query);
    if (!elem) {
      if (classes.length === 0) {
        classes = query.split(".").filter((item) => {
          return item;
        });
      }
      var newElem = Bulma.createElement(elemName, classes);
      parent.appendChild(newElem);
      return newElem;
    }
    return elem;
  };
  Bulma.each = (objects, callback) => {
    let i;
    for (i = 0; i < objects.length; i++) {
      callback(objects[i], i);
    }
  };
  Bulma.ajax = (url) => {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          resolve(Bulma._stripScripts(request.responseText));
        } else {
          reject();
        }
      };
      request.onerror = () => reject();
      request.send();
    });
  };
  Bulma._stripScripts = (htmlString) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString;
    var scripts = div.getElementsByTagName("script");
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML.replace(/  +/g, " ");
  };
  Bulma.getGlobalConfig = function(key, defaultValue = null) {
    if (!window.hasOwnProperty("bulmaOptions")) {
      return defaultValue;
    }
    if (!window.bulmaOptions.hasOwnProperty(key)) {
      return defaultValue;
    }
    return window.bulmaOptions[key];
  };
  Bulma.prototype.data = function(key, value) {
    if (!value) {
      return Bulma.cache.get(this._elem[Bulma.id], key);
    }
    Bulma.cache.set(this._elem[Bulma.id], key, value);
    return this;
  };
  Bulma.prototype.destroyData = function() {
    Bulma.cache.destroy(this._elem[Bulma.id]);
    return this;
  };
  Bulma.prototype.getElement = function() {
    return this._elem;
  };
  document.addEventListener("DOMContentLoaded", () => {
    if (Bulma.getGlobalConfig("autoParseDocument", true)) {
      Bulma.parseDocument();
    }
    if (Bulma.getGlobalConfig("onLoaded")) {
      Bulma.getGlobalConfig("onLoaded")();
    }
  });
  var core_default = Bulma;

  // node_modules/@vizuaalog/bulmajs/src/ConfigBag.js
  var ConfigBag = class {
    constructor(initialConfig = []) {
      if (typeof initialConfig !== "object") {
        throw new TypeError("initialConfig must be of type object.");
      }
      this._items = initialConfig;
    }
    set(key, value) {
      if (!key || !value) {
        throw new Error("A key and value must be provided when setting a new option.");
      }
      this._items[key] = value;
    }
    has(key) {
      if (!key) {
        throw new Error("A key must be provided.");
      }
      return this._items.hasOwnProperty(key) && this._items[key];
    }
    get(key, defaultValue = null) {
      if (defaultValue && !this.has(key)) {
        if (typeof defaultValue === "function") {
          return defaultValue();
        }
        return defaultValue;
      }
      return this._items[key];
    }
  };

  // node_modules/@vizuaalog/bulmajs/src/plugin.js
  var Plugin = class {
    static defaultConfig() {
      return {};
    }
    constructor(config = {}, root) {
      config.root = root instanceof core_default ? root._elem : root;
      this.config = new ConfigBag({ ...this.constructor.defaultConfig(), ...config });
      if (!root && !this.config.has("parent")) {
        throw new Error("A plugin requires a root and/or a parent.");
      }
      this.parent = this.config.get("parent", config.root ? config.root.parentNode : null);
      this._events = {};
    }
    on(event, callback) {
      if (!this._events.hasOwnProperty(event)) {
        this._events[event] = [];
      }
      this._events[event].push(callback);
    }
    trigger(event, data = {}) {
      if (!this._events.hasOwnProperty(event)) {
        return;
      }
      for (let i = 0; i < this._events[event].length; i++) {
        this._events[event][i](data);
      }
    }
    destroy() {
      core_default(this.root).destroyData();
    }
  };

  // node_modules/@vizuaalog/bulmajs/src/plugins/navbar.js
  var Navbar = class extends Plugin {
    static parseDocument(context) {
      let elements;
      if (typeof context.classList === "object" && context.classList.contains("navbar")) {
        elements = [context];
      } else {
        elements = context.querySelectorAll(".navbar");
      }
      core_default.each(elements, (element) => {
        core_default(element).navbar({
          sticky: element.hasAttribute("data-sticky") ? true : false,
          stickyOffset: element.hasAttribute("data-sticky-offset") ? element.getAttribute("data-sticky-offset") : 0,
          hideOnScroll: element.hasAttribute("data-hide-on-scroll") ? true : false,
          tolerance: element.hasAttribute("data-tolerance") ? element.getAttribute("data-tolerance") : 0,
          hideOffset: element.hasAttribute("data-hide-offset") ? element.getAttribute("data-hide-offset") : null,
          shadow: element.hasAttribute("data-sticky-shadow") ? true : false
        });
      });
    }
    static defaultconfig() {
      return {
        sticky: false,
        stickyOffset: 0,
        hideOnScroll: false,
        tolerance: 0,
        hideOffset: null,
        shadow: false
      };
    }
    constructor(config, root) {
      super(config, root);
      if (this.parent === null) {
        this.parent = this.config.get("root").parentNode;
      }
      this.root = this.config.get("root");
      this.root.setAttribute("data-bulma-attached", "attached");
      this.triggerElement = this.root.querySelector(".navbar-burger");
      this.target = this.root.querySelector(".navbar-menu");
      this.sticky = typeof window === "object" && !!this.config.get("sticky");
      this.stickyOffset = parseInt(this.config.get("stickyOffset"));
      this.hideOnScroll = !!this.config.get("hideOnScroll");
      this.tolerance = parseInt(this.config.get("tolerance"));
      this.shadow = !!this.config.get("shadow");
      this.hideOffset = parseInt(this.config.get("hideOffset", Math.max(this.root.scrollHeight, this.stickyOffset)));
      this.lastScrollY = 0;
      this.dropdowns = this.root.querySelectorAll(".navbar-item.has-dropdown:not(.is-hoverable)");
      this.handleScroll = this.handleScroll.bind(this);
      core_default(this.root).data("navbar", this);
      this.registerEvents();
    }
    registerEvents() {
      if (this.triggerElement) {
        this.triggerElement.addEventListener("click", this.handleTriggerClick.bind(this));
      }
      if (this.sticky) {
        this.enableSticky();
      }
      core_default.each(this.dropdowns, (dropdown) => {
        dropdown.addEventListener("click", this.handleDropdownTrigger);
      });
    }
    handleTriggerClick() {
      if (this.target.classList.contains("is-active")) {
        this.target.classList.remove("is-active");
        this.triggerElement.classList.remove("is-active");
      } else {
        this.target.classList.add("is-active");
        this.triggerElement.classList.add("is-active");
      }
    }
    handleScroll() {
      this.toggleSticky(window.pageYOffset);
    }
    handleDropdownTrigger() {
      if (this.classList.contains("is-active")) {
        this.classList.remove("is-active");
      } else {
        this.classList.add("is-active");
      }
    }
    enableSticky() {
      window.addEventListener("scroll", this.handleScroll);
      this.root.setAttribute("data-sticky", "");
      this.sticky = true;
    }
    disableSticky() {
      window.removeEventListener("scroll", this.handleScroll);
      this.root.removeAttribute("data-sticky");
      this.sticky = false;
    }
    enableHideOnScroll() {
      if (!this.sticky) {
        this.enableSticky();
      }
      this.root.setAttribute("data-hide-on-scroll", "");
      this.hideOnScroll = true;
    }
    disableHideOnScroll() {
      this.root.removeAttribute("data-hide-on-scroll");
      this.hideOnScroll = false;
      this.root.classList.remove("is-hidden-scroll");
    }
    toggleSticky(scrollY) {
      if (scrollY > this.stickyOffset) {
        this.root.classList.add("is-fixed-top");
        document.body.classList.add("has-navbar-fixed-top");
        if (this.shadow) {
          this.root.classList.add("has-shadow");
        }
      } else {
        this.root.classList.remove("is-fixed-top");
        document.body.classList.remove("has-navbar-fixed-top");
        if (this.shadow) {
          this.root.classList.remove("has-shadow");
        }
      }
      if (this.hideOnScroll) {
        let scrollDirection = this.calculateScrollDirection(scrollY, this.lastScrollY);
        let triggeredTolerance = this.difference(scrollY, this.lastScrollY) >= this.tolerance;
        if (scrollDirection === "down") {
          let isBeyondTopOffset = scrollY > this.hideOffset;
          if (triggeredTolerance && isBeyondTopOffset) {
            this.root.classList.add("is-hidden-scroll");
          }
        } else {
          let isAtVeryTop = scrollY < this.hideOffset;
          if (triggeredTolerance || isAtVeryTop) {
            this.root.classList.remove("is-hidden-scroll");
          }
        }
        this.lastScrollY = scrollY;
      }
    }
    difference(a, b) {
      if (a > b) {
        return a - b;
      } else {
        return b - a;
      }
    }
    calculateScrollDirection(currentY, lastY) {
      return currentY >= lastY ? "down" : "up";
    }
  };
  core_default.registerPlugin("navbar", Navbar);
})();
