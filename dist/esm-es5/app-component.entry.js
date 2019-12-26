import { r as registerInstance, h } from './core-743b0916.js';
var AppComponent = /** @class */ (function () {
    function AppComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    AppComponent.prototype.render = function () {
        return h("div", { class: "app-container" }, "I am an app");
    };
    Object.defineProperty(AppComponent, "style", {
        get: function () { return ".app-container{background-color:#90ee90}"; },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
export { AppComponent as app_component };
