System.register(["./p-1e3a4c81.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var r=t("button_component",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=this;return n("button",{onClick:function(){return t.handleBtnClick()}},"I am a button component")};t.prototype.handleBtnClick=function(){var t=document.createElement("app-component");document.body.appendChild(t)};Object.defineProperty(t,"style",{get:function(){return"button{background-color:green}"},enumerable:true,configurable:true});return t}());function o(t,e,n){return(t||"")+(e?" "+e:"")+(n?" "+n:"")}var u=t("my_component",function(){function t(t){e(this,t)}t.prototype.getText=function(){return o(this.first,this.middle,this.last)};t.prototype.render=function(){return n("div",null,"Hello, World! I'm ",this.getText())};Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}())}}}));