import { a as patchEsm, b as bootstrapLazy } from './core-2c1eaee6.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["app-component", [[1, "app-component"]]], ["button-component", [[1, "button-component"]]], ["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
    });
};
export { defineCustomElements };
