import { r as registerInstance, h } from './core-66a77161.js';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ButtonComponent.prototype.render = function () {
        var _this = this;
        return (h("button", { onClick: function () { return _this.handleBtnClick(); } }, "I am a button component"));
    };
    ButtonComponent.prototype.handleBtnClick = function () {
        var appCmp = document.createElement("app-component");
        document.body.appendChild(appCmp);
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
