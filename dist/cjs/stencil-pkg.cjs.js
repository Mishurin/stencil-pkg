'use strict';

const core = require('./core-97143d4d.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["child-component.cjs",[[0,"child-component"]]],["app-component.cjs",[[1,"app-component"]]],["button-component_2.cjs",[[1,"button-component"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
