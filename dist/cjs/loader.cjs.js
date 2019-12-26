'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-debf4271.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["app-component.cjs",[[1,"app-component"]]],["button-component.cjs",[[1,"button-component"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
