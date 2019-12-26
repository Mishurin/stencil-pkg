'use strict';

const core = require('./core-debf4271.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["app-component.cjs",[[1,"app-component"]]],["button-component.cjs",[[1,"button-component"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
