import { r as registerInstance, h } from './core-2c1eaee6.js';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ButtonComponent.prototype.render = function () {
        return h("button", null, "I am a button component");
    };
    Object.defineProperty(ButtonComponent, "style", {
        get: function () { return ":host{background-color:green}"; },
        enumerable: true,
        configurable: true
    });
    return ButtonComponent;
}());
export { ButtonComponent as button_component };
