import { a as patchEsm, b as bootstrapLazy } from './core-743b0916.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["button-component_2", [[1, "button-component"], [1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]], ["app-component", [[1, "app-component"]]]], options);
    });
};
export { defineCustomElements };
