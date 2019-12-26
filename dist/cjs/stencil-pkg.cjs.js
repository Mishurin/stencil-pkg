'use strict';

const core = require('./core-56aee79f.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["button-component_2.cjs",[[1,"button-component"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["app-component.cjs",[[1,"app-component"]]]], options);
});
