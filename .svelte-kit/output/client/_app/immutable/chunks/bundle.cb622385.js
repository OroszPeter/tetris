function he(S,lt){for(var x=0;x<lt.length;x++){const v=lt[x];if(typeof v!="string"&&!Array.isArray(v)){for(const c in v)if(c!=="default"&&!(c in S)){const u=Object.getOwnPropertyDescriptor(v,c);u&&Object.defineProperty(S,c,u.get?u:{enumerable:!0,get:()=>v[c]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}function le(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var $t={exports:{}};(function(S,lt){(function(x,v){S.exports=v()})(window,function(){return function(x){var v={};function c(u){if(v[u])return v[u].exports;var s=v[u]={i:u,l:!1,exports:{}};return x[u].call(s.exports,s,s.exports,c),s.l=!0,s.exports}return c.m=x,c.c=v,c.d=function(u,s,I){c.o(u,s)||Object.defineProperty(u,s,{enumerable:!0,get:I})},c.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},c.t=function(u,s){if(1&s&&(u=c(u)),8&s||4&s&&typeof u=="object"&&u&&u.__esModule)return u;var I=Object.create(null);if(c.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:u}),2&s&&typeof u!="string")for(var H in u)c.d(I,H,(function(B){return u[B]}).bind(null,H));return I},c.n=function(u){var s=u&&u.__esModule?function(){return u.default}:function(){return u};return c.d(s,"a",s),s},c.o=function(u,s){return Object.prototype.hasOwnProperty.call(u,s)},c.p="",c(c.s=1)}([function(x,v,c){var u;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(s,I,H,B){var A,J=["","webkit","Moz","MS","ms","o"],K=I.createElement("div"),R=Math.round,M=Math.abs,L=Date.now;function U(t,e,n){return setTimeout(d(t,n),e)}function z(t,e,n){return!!Array.isArray(t)&&(C(t,n[e],n),!0)}function C(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==void 0)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+`
`+n+` AT 
`;return function(){var r=new Error("get-stack-trace"),a=r&&r.stack?r.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=s.console&&(s.console.warn||s.console.log);return f&&f.call(s.console,i,a),t.apply(this,arguments)}}A=typeof Object.assign!="function"?function(t){if(t==null)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var _=y(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===void 0)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),p=y(function(t,e){return _(t,e,!0)},"merge","Use `assign`.");function m(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&A(i,n)}function d(t,e){return function(){return t.apply(e,arguments)}}function g(t,e){return typeof t=="function"?t.apply(e&&e[0]||void 0,e):t}function o(t,e){return t===void 0?e:t}function l(t,e,n){C(Q(e),function(i){t.addEventListener(i,n,!1)})}function b(t,e,n){C(Q(e),function(i){t.removeEventListener(i,n,!1)})}function It(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function j(t,e){return t.indexOf(e)>-1}function Q(t){return t.trim().split(/\s+/g)}function V(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function tt(t){return Array.prototype.slice.call(t,0)}function At(t,e,n){for(var i=[],r=[],a=0;a<t.length;){var f=e?t[a][e]:t[a];V(r,f)<0&&i.push(t[a]),r[a]=f,a++}return n&&(i=e?i.sort(function(E,h){return E[e]>h[e]}):i.sort()),i}function et(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),a=0;a<J.length;){if((i=(n=J[a])?n+r:e)in t)return i;a++}}var Jt=1;function Ct(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var Pt="ontouchstart"in s,Kt=et(s,"PointerEvent")!==void 0,Qt=Pt&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),St=["x","y"],nt=["clientX","clientY"];function P(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(i){g(t.options.enable,[t])&&n.handler(i)},this.init()}function te(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,a=1&e&&i-r==0,f=12&e&&i-r==0;n.isFirst=!!a,n.isFinal=!!f,a&&(t.session={}),n.eventType=e,function(E,h){var w=E.session,ht=h.pointers,kt=ht.length;w.firstInput||(w.firstInput=xt(h)),kt>1&&!w.firstMultiple?w.firstMultiple=xt(h):kt===1&&(w.firstMultiple=!1);var Ht=w.firstInput,G=w.firstMultiple,Lt=G?G.center:Ht.center,Ut=h.center=Ot(ht);h.timeStamp=L(),h.deltaTime=h.timeStamp-Ht.timeStamp,h.angle=pt(Lt,Ut),h.distance=it(Lt,Ut),function(D,T){var X=T.center,W=D.offsetDelta||{},q=D.prevDelta||{},k=D.prevInput||{};T.eventType!==1&&k.eventType!==4||(q=D.prevDelta={x:k.deltaX||0,y:k.deltaY||0},W=D.offsetDelta={x:X.x,y:X.y}),T.deltaX=q.x+(X.x-W.x),T.deltaY=q.y+(X.y-W.y)}(w,h),h.offsetDirection=Mt(h.deltaX,h.deltaY);var Z=Dt(h.deltaTime,h.deltaX,h.deltaY);h.overallVelocityX=Z.x,h.overallVelocityY=Z.y,h.overallVelocity=M(Z.x)>M(Z.y)?Z.x:Z.y,h.scale=G?(bt=G.pointers,wt=ht,it(wt[0],wt[1],nt)/it(bt[0],bt[1],nt)):1,h.rotation=G?function(D,T){return pt(T[1],T[0],nt)+pt(D[1],D[0],nt)}(G.pointers,ht):0,h.maxPointers=w.prevInput?h.pointers.length>w.prevInput.maxPointers?h.pointers.length:w.prevInput.maxPointers:h.pointers.length,function(D,T){var X,W,q,k,Y=D.lastInterval||T,Vt=T.timeStamp-Y.timeStamp;if(T.eventType!=8&&(Vt>25||Y.velocity===void 0)){var Gt=T.deltaX-Y.deltaX,Zt=T.deltaY-Y.deltaY,$=Dt(Vt,Gt,Zt);W=$.x,q=$.y,X=M($.x)>M($.y)?$.x:$.y,k=Mt(Gt,Zt),D.lastInterval=T}else X=Y.velocity,W=Y.velocityX,q=Y.velocityY,k=Y.direction;T.velocity=X,T.velocityX=W,T.velocityY=q,T.direction=k}(w,h);var bt,wt,_t=E.element;It(h.srcEvent.target,_t)&&(_t=h.srcEvent.target),h.target=_t}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function xt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:R(t.pointers[n].clientX),clientY:R(t.pointers[n].clientY)},n++;return{timeStamp:L(),pointers:e,center:Ot(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Ot(t){var e=t.length;if(e===1)return{x:R(t[0].clientX),y:R(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:R(n/e),y:R(i/e)}}function Dt(t,e,n){return{x:e/t||0,y:n/t||0}}function Mt(t,e){return t===e?1:M(t)>=M(e)?t<0?2:4:e<0?8:16}function it(t,e,n){n||(n=St);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function pt(t,e,n){n||(n=St);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}P.prototype={handler:function(){},init:function(){this.evEl&&l(this.element,this.evEl,this.domHandler),this.evTarget&&l(this.target,this.evTarget,this.domHandler),this.evWin&&l(Ct(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&b(this.element,this.evEl,this.domHandler),this.evTarget&&b(this.target,this.evTarget,this.domHandler),this.evWin&&b(Ct(this.element),this.evWin,this.domHandler)}};var ee={mousedown:1,mousemove:2,mouseup:4};function rt(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,P.apply(this,arguments)}m(rt,P,{handler:function(t){var e=ee[t.type];1&e&&t.button===0&&(this.pressed=!0),2&e&&t.which!==1&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var ne={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},ie={2:"touch",3:"pen",4:"mouse",5:"kinect"},Rt="pointerdown",zt="pointermove pointerup pointercancel";function ft(){this.evEl=Rt,this.evWin=zt,P.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(Rt="MSPointerDown",zt="MSPointerMove MSPointerUp MSPointerCancel"),m(ft,P,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=ne[i],a=ie[t.pointerType]||t.pointerType,f=a=="touch",E=V(e,t.pointerId,"pointerId");1&r&&(t.button===0||f)?E<0&&(e.push(t),E=e.length-1):12&r&&(n=!0),E<0||(e[E]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:a,srcEvent:t}),n&&e.splice(E,1))}});var re={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function Nt(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,P.apply(this,arguments)}function oe(t,e){var n=tt(t.touches),i=tt(t.changedTouches);return 12&e&&(n=At(n.concat(i),"identifier",!0)),[n,i]}m(Nt,P,{handler:function(t){var e=re[t.type];if(e===1&&(this.started=!0),this.started){var n=oe.call(this,t,e);12&e&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var se={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function ot(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},P.apply(this,arguments)}function ae(t,e){var n=tt(t.touches),i=this.targetIds;if(3&e&&n.length===1)return i[n[0].identifier]=!0,[n,n];var r,a,f=tt(t.changedTouches),E=[],h=this.target;if(a=n.filter(function(w){return It(w.target,h)}),e===1)for(r=0;r<a.length;)i[a[r].identifier]=!0,r++;for(r=0;r<f.length;)i[f[r].identifier]&&E.push(f[r]),12&e&&delete i[f[r].identifier],r++;return E.length?[At(a.concat(E),"identifier",!0),E]:void 0}m(ot,P,{handler:function(t){var e=se[t.type],n=ae.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});function dt(){P.apply(this,arguments);var t=d(this.handler,this);this.touch=new ot(this.manager,t),this.mouse=new rt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ue(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,Xt.call(this,e)):12&t&&Xt.call(this,e)}function Xt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var r=i.indexOf(n);r>-1&&i.splice(r,1)},2500)}}function ce(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],a=Math.abs(e-r.x),f=Math.abs(n-r.y);if(a<=25&&f<=25)return!0}return!1}m(dt,P,{handler:function(t,e,n){var i=n.pointerType=="touch",r=n.pointerType=="mouse";if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)ue.call(this,e,n);else if(r&&ce.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yt=et(K.style,"touchAction"),jt=Yt!==void 0,st=function(){if(!jt)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||s.CSS.supports("touch-action",n)}),t}();function vt(t,e){this.manager=t,this.set(e)}vt.prototype={set:function(t){t=="compute"&&(t=this.compute()),jt&&this.manager.element.style&&st[t]&&(this.manager.element.style[Yt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return C(this.manager.recognizers,function(e){g(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(e){if(j(e,"none"))return"none";var n=j(e,"pan-x"),i=j(e,"pan-y");return n&&i?"none":n||i?n?"pan-x":"pan-y":j(e,"manipulation")?"manipulation":"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=j(i,"none")&&!st.none,a=j(i,"pan-y")&&!st["pan-y"],f=j(i,"pan-x")&&!st["pan-x"];if(r){var E=t.pointers.length===1,h=t.distance<2,w=t.deltaTime<250;if(E&&h&&w)return}if(!f||!a)return r||a&&6&n||f&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function N(t){this.options=A({},this.defaults,t||{}),this.id=Jt++,this.manager=null,this.options.enable=o(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function Ft(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function Wt(t){return t==16?"down":t==8?"up":t==2?"left":t==4?"right":""}function at(t,e){var n=e.manager;return n?n.get(t):t}function O(){N.apply(this,arguments)}function ut(){O.apply(this,arguments),this.pX=null,this.pY=null}function mt(){O.apply(this,arguments)}function gt(){N.apply(this,arguments),this._timer=null,this._input=null}function yt(){O.apply(this,arguments)}function Tt(){O.apply(this,arguments)}function ct(){N.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function F(t,e){return(e=e||{}).recognizers=o(e.recognizers,F.defaults.preset),new Et(t,e)}N.prototype={defaults:{},set:function(t){return A(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(z(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=at(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return z(t,"dropRecognizeWith",this)?this:(t=at(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(z(t,"requireFailure",this))return this;var e=this.requireFail;return V(e,t=at(t,this))===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(z(t,"dropRequireFailure",this))return this;t=at(t,this);var e=V(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(r){e.manager.emit(r,t)}n<8&&i(e.options.event+Ft(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+Ft(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=A({},t);if(!g(this.options.enable,[this,e]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},m(O,N,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,r=this.attrTest(t);return i&&(8&n||!r)?16|e:i||r?4&n?8|e:2&e?4|e:2:32}}),m(ut,O,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push("pan-y"),24&t&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,a=t.deltaX,f=t.deltaY;return r&e.direction||(6&e.direction?(r=a===0?1:a<0?2:4,n=a!=this.pX,i=Math.abs(t.deltaX)):(r=f===0?1:f<0?8:16,n=f!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return O.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Wt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),m(mt,O,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),m(gt,N,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=U(function(){this.state=8,this.tryEmit()},e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===8&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=L(),this.manager.emit(this.options.event,this._input)))}}),m(yt,O,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),m(Tt,O,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return ut.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&M(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=Wt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),m(ct,N,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&this.count===0)return this.failTimeout();if(i&&r&&n){if(t.eventType!=4)return this.failTimeout();var a=!this.pTime||t.timeStamp-this.pTime<e.interval,f=!this.pCenter||it(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,f&&a?this.count+=1:this.count=1,this._input=t,this.count%e.taps===0)return this.hasRequireFailures()?(this._timer=U(function(){this.state=8,this.tryEmit()},e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=U(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==8&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),F.VERSION="2.0.7",F.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[yt,{enable:!1}],[mt,{enable:!1},["rotate"]],[Tt,{direction:6}],[ut,{direction:6},["swipe"]],[ct],[ct,{event:"doubletap",taps:2},["tap"]],[gt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Et(t,e){var n;this.options=A({},F.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(Kt?ft:Qt?ot:Pt?dt:rt))(n,te),this.touchAction=new vt(this,this.options.touchAction),qt(this,!0),C(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}function qt(t,e){var n,i=t.element;i.style&&(C(t.options.cssProps,function(r,a){n=et(i.style,a),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}Et.prototype={set:function(t){return A(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(r=e.curRecognizer=null);for(var a=0;a<i.length;)n=i[a],e.stopped===2||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&14&n.state&&(r=e.curRecognizer=n),a++}},get:function(t){if(t instanceof N)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(z(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(z(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=V(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==void 0&&e!==void 0){var n=this.handlers;return C(Q(t),function(i){n[i]=n[i]||[],n[i].push(e)}),this}},off:function(t,e){if(t!==void 0){var n=this.handlers;return C(Q(t),function(i){e?n[i]&&n[i].splice(V(n[i],e),1):delete n[i]}),this}},emit:function(t,e){this.options.domEvents&&function(r,a){var f=I.createEvent("Event");f.initEvent(r,!0,!0),f.gesture=a,a.target.dispatchEvent(f)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&qt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},A(F,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Et,Input:P,TouchAction:vt,TouchInput:ot,MouseInput:rt,PointerEventInput:ft,TouchMouseInput:dt,SingleTouchInput:Nt,Recognizer:N,AttrRecognizer:O,Tap:ct,Pan:ut,Swipe:Tt,Pinch:mt,Rotate:yt,Press:gt,on:l,off:b,each:C,merge:p,extend:_,assign:A,inherit:m,bindFn:d,prefixed:et}),(s!==void 0?s:typeof self<"u"?self:{}).Hammer=F,(u=(function(){return F}).call(v,c,v,x))===void 0||(x.exports=u)})(window,document)},function(x,v,c){c.r(v);var u=c(0),s=c.n(u),I=["swipe","swipeleft","swiperight","swipeup","swipedown"],H=function(y,_){var p=new s.a(y);p.get("swipe").set(_);for(var m=function(o){p.on(o,function(l){return y.dispatchEvent(new CustomEvent(o,{detail:l}))})},d=0,g=I;d<g.length;d++)m(g[d]);return{update:function(o){p.get("swipe").set(o)},destroy:function(){for(var o=0,l=I;o<l.length;o++){var b=l[o];p.off(b)}}}},B=["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown"],A=function(y,_){var p=new s.a(y);p.get("pan").set(_);for(var m=function(o){p.on(o,function(l){return y.dispatchEvent(new CustomEvent(o,{detail:l}))})},d=0,g=B;d<g.length;d++)m(g[d]);return{update:function(o){p.get("pan").set(o)},destroy:function(){for(var o=0,l=B;o<l.length;o++){var b=l[o];p.off(b)}}}},J=["pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout"],K=function(y,_){var p=new s.a(y);p.get("pinch").set(_);for(var m=function(o){p.on(o,function(l){return y.dispatchEvent(new CustomEvent(o,{detail:l}))})},d=0,g=J;d<g.length;d++)m(g[d]);return{update:function(o){p.get("pinch").set(o)},destroy:function(){for(var o=0,l=J;o<l.length;o++){var b=l[o];p.off(b)}}}},R=["press","pressup"],M=function(y,_){var p=new s.a(y);p.get("press").set(_);for(var m=function(o){p.on(o,function(l){return y.dispatchEvent(new CustomEvent(o,{detail:l}))})},d=0,g=R;d<g.length;d++)m(g[d]);return{update:function(o){p.get("press").set(o)},destroy:function(){for(var o=0,l=R;o<l.length;o++){var b=l[o];p.off(b)}}}},L=["rotate","rotatestart","rotatemove","rotateend","rotatecancel"],U=function(y,_){var p=new s.a(y);p.get("rotate").set(_);for(var m=function(o){p.on(o,function(l){return y.dispatchEvent(new CustomEvent(o,{detail:l}))})},d=0,g=L;d<g.length;d++)m(g[d]);return{update:function(o){p.get("rotate").set(o)},destroy:function(){for(var o=0,l=L;o<l.length;o++){var b=l[o];p.off(b)}}}},z=["tap"],C=function(y,_){var p=new s.a(y);p.get("tap").set(_);for(var m=function(o){p.on(o,function(l){return y.dispatchEvent(new CustomEvent(o,{detail:l}))})},d=0,g=z;d<g.length;d++)m(g[d]);return{update:function(o){p.get("tap").set(o)},destroy:function(){for(var o=0,l=z;o<l.length;o++){var b=l[o];p.off(b)}}}};c.d(v,"Hammer",function(){return s.a}),c.d(v,"swipe",function(){return H}),c.d(v,"pan",function(){return A}),c.d(v,"pinch",function(){return K}),c.d(v,"press",function(){return M}),c.d(v,"rotate",function(){return U}),c.d(v,"tap",function(){return C}),v.default={Hammer:s.a,swipe:H,pan:A,pinch:K,press:M,rotate:U,tap:C}}])})})($t);var Bt=$t.exports;const pe=le(Bt),fe=he({__proto__:null,default:pe},[Bt]);export{fe as b};