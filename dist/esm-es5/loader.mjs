import { a as patchEsm, b as bootstrapLazy } from './core-66a77161.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["child-component", [[0, "child-component"]]], ["app-component", [[1, "app-component"]]], ["button-component_2", [[1, "button-component"], [1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
    });
};
export { defineCustomElements };
