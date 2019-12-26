import { r as registerInstance, h } from './core-2c1eaee6.js';
var AppComponent = /** @class */ (function () {
    function AppComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    AppComponent.prototype.render = function () {
        return h("div", null, "I am an app");
    };
    Object.defineProperty(AppComponent, "style", {
        get: function () { return ":host{background-color:#90ee90}"; },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
export { AppComponent as app_component };
