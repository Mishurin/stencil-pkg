import { r as registerInstance, h } from './core-66a77161.js';
var ChildComponent = /** @class */ (function () {
    function ChildComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ChildComponent.prototype.render = function () {
        return (h("div", { class: "alert alert-light", role: "alert" }, "A simple light alert\u2014check it out!"));
    };
    Object.defineProperty(ChildComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return ChildComponent;
}());
export { ChildComponent as child_component };
