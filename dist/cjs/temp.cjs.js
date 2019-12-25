'use strict';

const core = require('./core-35344054.js');

core.patchBrowser().then(options => {
  core.globals();
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
