'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-56aee79f.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["button-component_2.cjs",[[1,"button-component"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["app-component.cjs",[[1,"app-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
