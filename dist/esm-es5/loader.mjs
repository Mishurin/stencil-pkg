import { a as patchEsm, g as globals, b as bootstrapLazy } from './core-0b82886a.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        globals();
        bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
    });
};
export { defineCustomElements };
