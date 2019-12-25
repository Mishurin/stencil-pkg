System.register(['./core-c2d56fa4.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            function format(first, middle, last) {
                return ((first || '') +
                    (middle ? " " + middle : '') +
                    (last ? " " + last : ''));
            }
            var MyComponent = exports('my_component', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.getText = function () {
                    return format(this.first, this.middle, this.last);
                };
                class_1.prototype.render = function () {
                    return h("div", null, "Hello, World! I'm ", this.getText());
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
