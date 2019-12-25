'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6e643ac4.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.globals();
    core.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
