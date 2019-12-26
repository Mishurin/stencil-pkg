import { r as registerInstance, h } from './core-743b0916.js';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ButtonComponent.prototype.render = function () {
        return h("button", null, "I am a button component");
    };
    Object.defineProperty(ButtonComponent, "style", {
        get: function () { return "button{background-color:green}"; },
        enumerable: true,
        configurable: true
    });
    return ButtonComponent;
}());
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.getText());
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { ButtonComponent as button_component, MyComponent as my_component };
