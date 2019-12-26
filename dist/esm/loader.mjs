import { a as patchEsm, b as bootstrapLazy } from './core-66a77161.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["app-component",[[1,"app-component"]]],["button-component_2",[[1,"button-component"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
