webpackJsonp([1],{0:function(t,e,n){t.exports=n("x35b")},"5xMp":function(t,e){t.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div style="text-align:center">\n  <h1 style="color: #00008bbf">\n    Welcome to {{ title }}!\n  </h1>\n  <img src="../assets/translate.jpeg" height="164" width="307" style="border-radius: 0.5em;"/>\n</div>\n\n<div style="margin-top: 15px" align="center">\n<textarea  #textbox placeholder="enter your wish1...:)" rows="4" cols="50" ></textarea>\n  <button mat-button (click)="submitFunction(textbox.value)">translate</button>\n  <textarea rows="4" cols="50" >{{translateResult}}</textarea>\n</div>\n<img style="position: fixed;vertical-align: center" src="../assets/machine_learning_loader.jpg" height="435" class="loader" width="639" [hidden]="!loader"/>\n\n'},Jnfr:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="Jnfr"},okgc:function(t,e){t.exports="textarea{\n  resize: none; border-radius: 0.4em; padding: 0.5em;\n}\nimg.loader {\n  -webkit-animation: mover 2s infinite  alternate;\n  animation: mover 2s infinite  alternate;\n  position: absolute;\n  left: 18%;\n  top: 25%;\n  border-radius: 0.5em;\n}\n@-webkit-keyframes mover {\n  0% { -webkit-transform: translateY(0); transform: translateY(0); }\n  100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\n}\n@keyframes mover {\n  0% { -webkit-transform: translateY(0); transform: translateY(0); }\n  100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\n}\n"},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("WT6e"),o=n("4PVY"),a=n("OE0E"),i=n("ItHS"),s=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.title="Auto Programming Translator",this.loader=!1}return t.prototype.submitFunction=function(t){var e=this;this.loader=!0,this.http.get("https://conduit.productionready.io/api/profiles/eric").subscribe(function(t){e.loader=!1,alert(JSON.stringify(t)),e.translateResult=JSON.stringify(t)})},t=s([Object(r.m)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]}),c("design:paramtypes",[i.a])],t)}(),f=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},u=function(){function t(){}return t=f([Object(r.E)({declarations:[l],imports:[a.a,i.b],providers:[],bootstrap:[l]})],t)}();Object(r._5)(),Object(o.a)().bootstrapModule(u).catch(function(t){return console.log(t)})}},[0]);