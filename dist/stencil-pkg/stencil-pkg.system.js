System.register(['./core-c2d56fa4.system.js'], function () {
    'use strict';
    var patchBrowser, globals, bootstrapLazy;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                globals = module.g;
                bootstrapLazy = module.b;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globals();
                return bootstrapLazy([["my-component.system", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
            });
        }
    };
});
