(self["webpackChunkmusic_app"]=self["webpackChunkmusic_app"]||[]).push([[998],{9662:function(c,e,s){var n=s(614),t=s(6330),a=TypeError;c.exports=function(c){if(n(c))return c;throw a(t(c)+" is not a function")}},6077:function(c,e,s){var n=s(614),t=String,a=TypeError;c.exports=function(c){if("object"==typeof c||n(c))return c;throw a("Can't set "+t(c)+" as a prototype")}},5787:function(c,e,s){var n=s(7976),t=TypeError;c.exports=function(c,e){if(n(e,c))return c;throw t("Incorrect invocation")}},9670:function(c,e,s){var n=s(111),t=String,a=TypeError;c.exports=function(c){if(n(c))return c;throw a(t(c)+" is not an object")}},1318:function(c,e,s){var n=s(5656),t=s(1400),a=s(6244),i=function(c){return function(e,s,i){var r,o=n(e),l=a(o),f=t(i,l);if(c&&s!=s){while(l>f)if(r=o[f++],r!=r)return!0}else for(;l>f;f++)if((c||f in o)&&o[f]===s)return c||f||0;return!c&&-1}};c.exports={includes:i(!0),indexOf:i(!1)}},3658:function(c,e,s){"use strict";var n=s(9781),t=s(3157),a=TypeError,i=Object.getOwnPropertyDescriptor,r=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(c){return c instanceof TypeError}}();c.exports=r?function(c,e){if(t(c)&&!i(c,"length").writable)throw a("Cannot set read only .length");return c.length=e}:function(c,e){return c.length=e}},4326:function(c,e,s){var n=s(1702),t=n({}.toString),a=n("".slice);c.exports=function(c){return a(t(c),8,-1)}},648:function(c,e,s){var n=s(1694),t=s(614),a=s(4326),i=s(5112),r=i("toStringTag"),o=Object,l="Arguments"==a(function(){return arguments}()),f=function(c,e){try{return c[e]}catch(s){}};c.exports=n?a:function(c){var e,s,n;return void 0===c?"Undefined":null===c?"Null":"string"==typeof(s=f(e=o(c),r))?s:l?a(e):"Object"==(n=a(e))&&t(e.callee)?"Arguments":n}},9920:function(c,e,s){var n=s(2597),t=s(3887),a=s(1236),i=s(3070);c.exports=function(c,e,s){for(var r=t(e),o=i.f,l=a.f,f=0;f<r.length;f++){var u=r[f];n(c,u)||s&&n(s,u)||o(c,u,l(e,u))}}},8880:function(c,e,s){var n=s(9781),t=s(3070),a=s(9114);c.exports=n?function(c,e,s){return t.f(c,e,a(1,s))}:function(c,e,s){return c[e]=s,c}},9114:function(c){c.exports=function(c,e){return{enumerable:!(1&c),configurable:!(2&c),writable:!(4&c),value:e}}},8052:function(c,e,s){var n=s(614),t=s(3070),a=s(6339),i=s(3072);c.exports=function(c,e,s,r){r||(r={});var o=r.enumerable,l=void 0!==r.name?r.name:e;if(n(s)&&a(s,l,r),r.global)o?c[e]=s:i(e,s);else{try{r.unsafe?c[e]&&(o=!0):delete c[e]}catch(f){}o?c[e]=s:t.f(c,e,{value:s,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return c}},3072:function(c,e,s){var n=s(7854),t=Object.defineProperty;c.exports=function(c,e){try{t(n,c,{value:e,configurable:!0,writable:!0})}catch(s){n[c]=e}return e}},5117:function(c,e,s){"use strict";var n=s(6330),t=TypeError;c.exports=function(c,e){if(!delete c[e])throw t("Cannot delete property "+n(e)+" of "+n(c))}},9781:function(c,e,s){var n=s(7293);c.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(c){var e="object"==typeof document&&document.all,s="undefined"==typeof e&&void 0!==e;c.exports={all:e,IS_HTMLDDA:s}},317:function(c,e,s){var n=s(7854),t=s(111),a=n.document,i=t(a)&&t(a.createElement);c.exports=function(c){return i?a.createElement(c):{}}},7207:function(c){var e=TypeError,s=9007199254740991;c.exports=function(c){if(c>s)throw e("Maximum allowed index exceeded");return c}},3678:function(c){c.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(c){c.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(c,e,s){var n,t,a=s(7854),i=s(8113),r=a.process,o=a.Deno,l=r&&r.versions||o&&o.version,f=l&&l.v8;f&&(n=f.split("."),t=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!t&&i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(t=+n[1]))),c.exports=t},748:function(c){c.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(c,e,s){var n=s(1702),t=Error,a=n("".replace),i=function(c){return String(t(c).stack)}("zxcasd"),r=/\n\s*at [^:]*:[^\n]*/,o=r.test(i);c.exports=function(c,e){if(o&&"string"==typeof c&&!t.prepareStackTrace)while(e--)c=a(c,r,"");return c}},2109:function(c,e,s){var n=s(7854),t=s(1236).f,a=s(8880),i=s(8052),r=s(3072),o=s(9920),l=s(4705);c.exports=function(c,e){var s,f,u,h,m,p,d=c.target,z=c.global,H=c.stat;if(f=z?n:H?n[d]||r(d,{}):(n[d]||{}).prototype,f)for(u in e){if(m=e[u],c.dontCallGetSet?(p=t(f,u),h=p&&p.value):h=f[u],s=l(z?u:d+(H?".":"#")+u,c.forced),!s&&void 0!==h){if(typeof m==typeof h)continue;o(m,h)}(c.sham||h&&h.sham)&&a(m,"sham",!0),i(f,u,m,c)}}},7293:function(c){c.exports=function(c){try{return!!c()}catch(e){return!0}}},4374:function(c,e,s){var n=s(7293);c.exports=!n((function(){var c=function(){}.bind();return"function"!=typeof c||c.hasOwnProperty("prototype")}))},6916:function(c,e,s){var n=s(4374),t=Function.prototype.call;c.exports=n?t.bind(t):function(){return t.apply(t,arguments)}},6530:function(c,e,s){var n=s(9781),t=s(2597),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,r=t(a,"name"),o=r&&"something"===function(){}.name,l=r&&(!n||n&&i(a,"name").configurable);c.exports={EXISTS:r,PROPER:o,CONFIGURABLE:l}},1702:function(c,e,s){var n=s(4374),t=Function.prototype,a=t.call,i=n&&t.bind.bind(a,a);c.exports=n?i:function(c){return function(){return a.apply(c,arguments)}}},5005:function(c,e,s){var n=s(7854),t=s(614),a=function(c){return t(c)?c:void 0};c.exports=function(c,e){return arguments.length<2?a(n[c]):n[c]&&n[c][e]}},8173:function(c,e,s){var n=s(9662),t=s(8554);c.exports=function(c,e){var s=c[e];return t(s)?void 0:n(s)}},7854:function(c,e,s){var n=function(c){return c&&c.Math==Math&&c};c.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof s.g&&s.g)||function(){return this}()||Function("return this")()},2597:function(c,e,s){var n=s(1702),t=s(7908),a=n({}.hasOwnProperty);c.exports=Object.hasOwn||function(c,e){return a(t(c),e)}},3501:function(c){c.exports={}},4664:function(c,e,s){var n=s(9781),t=s(7293),a=s(317);c.exports=!n&&!t((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(c,e,s){var n=s(1702),t=s(7293),a=s(4326),i=Object,r=n("".split);c.exports=t((function(){return!i("z").propertyIsEnumerable(0)}))?function(c){return"String"==a(c)?r(c,""):i(c)}:i},9587:function(c,e,s){var n=s(614),t=s(111),a=s(7674);c.exports=function(c,e,s){var i,r;return a&&n(i=e.constructor)&&i!==s&&t(r=i.prototype)&&r!==s.prototype&&a(c,r),c}},2788:function(c,e,s){var n=s(1702),t=s(614),a=s(5465),i=n(Function.toString);t(a.inspectSource)||(a.inspectSource=function(c){return i(c)}),c.exports=a.inspectSource},9909:function(c,e,s){var n,t,a,i=s(4811),r=s(7854),o=s(111),l=s(8880),f=s(2597),u=s(5465),h=s(6200),m=s(3501),p="Object already initialized",d=r.TypeError,z=r.WeakMap,H=function(c){return a(c)?t(c):n(c,{})},V=function(c){return function(e){var s;if(!o(e)||(s=t(e)).type!==c)throw d("Incompatible receiver, "+c+" required");return s}};if(i||u.state){var v=u.state||(u.state=new z);v.get=v.get,v.has=v.has,v.set=v.set,n=function(c,e){if(v.has(c))throw d(p);return e.facade=c,v.set(c,e),e},t=function(c){return v.get(c)||{}},a=function(c){return v.has(c)}}else{var M=h("state");m[M]=!0,n=function(c,e){if(f(c,M))throw d(p);return e.facade=c,l(c,M,e),e},t=function(c){return f(c,M)?c[M]:{}},a=function(c){return f(c,M)}}c.exports={set:n,get:t,has:a,enforce:H,getterFor:V}},3157:function(c,e,s){var n=s(4326);c.exports=Array.isArray||function(c){return"Array"==n(c)}},614:function(c,e,s){var n=s(4154),t=n.all;c.exports=n.IS_HTMLDDA?function(c){return"function"==typeof c||c===t}:function(c){return"function"==typeof c}},4705:function(c,e,s){var n=s(7293),t=s(614),a=/#|\.prototype\./,i=function(c,e){var s=o[r(c)];return s==f||s!=l&&(t(e)?n(e):!!e)},r=i.normalize=function(c){return String(c).replace(a,".").toLowerCase()},o=i.data={},l=i.NATIVE="N",f=i.POLYFILL="P";c.exports=i},8554:function(c){c.exports=function(c){return null===c||void 0===c}},111:function(c,e,s){var n=s(614),t=s(4154),a=t.all;c.exports=t.IS_HTMLDDA?function(c){return"object"==typeof c?null!==c:n(c)||c===a}:function(c){return"object"==typeof c?null!==c:n(c)}},1913:function(c){c.exports=!1},2190:function(c,e,s){var n=s(5005),t=s(614),a=s(7976),i=s(3307),r=Object;c.exports=i?function(c){return"symbol"==typeof c}:function(c){var e=n("Symbol");return t(e)&&a(e.prototype,r(c))}},6244:function(c,e,s){var n=s(7466);c.exports=function(c){return n(c.length)}},6339:function(c,e,s){var n=s(1702),t=s(7293),a=s(614),i=s(2597),r=s(9781),o=s(6530).CONFIGURABLE,l=s(2788),f=s(9909),u=f.enforce,h=f.get,m=String,p=Object.defineProperty,d=n("".slice),z=n("".replace),H=n([].join),V=r&&!t((function(){return 8!==p((function(){}),"length",{value:8}).length})),v=String(String).split("String"),M=c.exports=function(c,e,s){"Symbol("===d(m(e),0,7)&&(e="["+z(m(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),s&&s.getter&&(e="get "+e),s&&s.setter&&(e="set "+e),(!i(c,"name")||o&&c.name!==e)&&(r?p(c,"name",{value:e,configurable:!0}):c.name=e),V&&s&&i(s,"arity")&&c.length!==s.arity&&p(c,"length",{value:s.arity});try{s&&i(s,"constructor")&&s.constructor?r&&p(c,"prototype",{writable:!1}):c.prototype&&(c.prototype=void 0)}catch(t){}var n=u(c);return i(n,"source")||(n.source=H(v,"string"==typeof e?e:"")),c};Function.prototype.toString=M((function(){return a(this)&&h(this).source||l(this)}),"toString")},4758:function(c){var e=Math.ceil,s=Math.floor;c.exports=Math.trunc||function(c){var n=+c;return(n>0?s:e)(n)}},6277:function(c,e,s){var n=s(1340);c.exports=function(c,e){return void 0===c?arguments.length<2?"":e:n(c)}},3070:function(c,e,s){var n=s(9781),t=s(4664),a=s(3353),i=s(9670),r=s(4948),o=TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u="enumerable",h="configurable",m="writable";e.f=n?a?function(c,e,s){if(i(c),e=r(e),i(s),"function"===typeof c&&"prototype"===e&&"value"in s&&m in s&&!s[m]){var n=f(c,e);n&&n[m]&&(c[e]=s.value,s={configurable:h in s?s[h]:n[h],enumerable:u in s?s[u]:n[u],writable:!1})}return l(c,e,s)}:l:function(c,e,s){if(i(c),e=r(e),i(s),t)try{return l(c,e,s)}catch(n){}if("get"in s||"set"in s)throw o("Accessors not supported");return"value"in s&&(c[e]=s.value),c}},1236:function(c,e,s){var n=s(9781),t=s(6916),a=s(5296),i=s(9114),r=s(5656),o=s(4948),l=s(2597),f=s(4664),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(c,e){if(c=r(c),e=o(e),f)try{return u(c,e)}catch(s){}if(l(c,e))return i(!t(a.f,c,e),c[e])}},8006:function(c,e,s){var n=s(6324),t=s(748),a=t.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(c){return n(c,a)}},5181:function(c,e){e.f=Object.getOwnPropertySymbols},7976:function(c,e,s){var n=s(1702);c.exports=n({}.isPrototypeOf)},6324:function(c,e,s){var n=s(1702),t=s(2597),a=s(5656),i=s(1318).indexOf,r=s(3501),o=n([].push);c.exports=function(c,e){var s,n=a(c),l=0,f=[];for(s in n)!t(r,s)&&t(n,s)&&o(f,s);while(e.length>l)t(n,s=e[l++])&&(~i(f,s)||o(f,s));return f}},5296:function(c,e){"use strict";var s={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,t=n&&!s.call({1:2},1);e.f=t?function(c){var e=n(this,c);return!!e&&e.enumerable}:s},7674:function(c,e,s){var n=s(1702),t=s(9670),a=s(6077);c.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c,e=!1,s={};try{c=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),c(s,[]),e=s instanceof Array}catch(i){}return function(s,n){return t(s),a(n),e?c(s,n):s.__proto__=n,s}}():void 0)},2140:function(c,e,s){var n=s(6916),t=s(614),a=s(111),i=TypeError;c.exports=function(c,e){var s,r;if("string"===e&&t(s=c.toString)&&!a(r=n(s,c)))return r;if(t(s=c.valueOf)&&!a(r=n(s,c)))return r;if("string"!==e&&t(s=c.toString)&&!a(r=n(s,c)))return r;throw i("Can't convert object to primitive value")}},3887:function(c,e,s){var n=s(5005),t=s(1702),a=s(8006),i=s(5181),r=s(9670),o=t([].concat);c.exports=n("Reflect","ownKeys")||function(c){var e=a.f(r(c)),s=i.f;return s?o(e,s(c)):e}},4488:function(c,e,s){var n=s(8554),t=TypeError;c.exports=function(c){if(n(c))throw t("Can't call method on "+c);return c}},6200:function(c,e,s){var n=s(2309),t=s(9711),a=n("keys");c.exports=function(c){return a[c]||(a[c]=t(c))}},5465:function(c,e,s){var n=s(7854),t=s(3072),a="__core-js_shared__",i=n[a]||t(a,{});c.exports=i},2309:function(c,e,s){var n=s(1913),t=s(5465);(c.exports=function(c,e){return t[c]||(t[c]=void 0!==e?e:{})})("versions",[]).push({version:"3.27.2",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(c,e,s){var n=s(7392),t=s(7293);c.exports=!!Object.getOwnPropertySymbols&&!t((function(){var c=Symbol();return!String(c)||!(Object(c)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(c,e,s){var n=s(9303),t=Math.max,a=Math.min;c.exports=function(c,e){var s=n(c);return s<0?t(s+e,0):a(s,e)}},5656:function(c,e,s){var n=s(8361),t=s(4488);c.exports=function(c){return n(t(c))}},9303:function(c,e,s){var n=s(4758);c.exports=function(c){var e=+c;return e!==e||0===e?0:n(e)}},7466:function(c,e,s){var n=s(9303),t=Math.min;c.exports=function(c){return c>0?t(n(c),9007199254740991):0}},7908:function(c,e,s){var n=s(4488),t=Object;c.exports=function(c){return t(n(c))}},7593:function(c,e,s){var n=s(6916),t=s(111),a=s(2190),i=s(8173),r=s(2140),o=s(5112),l=TypeError,f=o("toPrimitive");c.exports=function(c,e){if(!t(c)||a(c))return c;var s,o=i(c,f);if(o){if(void 0===e&&(e="default"),s=n(o,c,e),!t(s)||a(s))return s;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),r(c,e)}},4948:function(c,e,s){var n=s(7593),t=s(2190);c.exports=function(c){var e=n(c,"string");return t(e)?e:e+""}},1694:function(c,e,s){var n=s(5112),t=n("toStringTag"),a={};a[t]="z",c.exports="[object z]"===String(a)},1340:function(c,e,s){var n=s(648),t=String;c.exports=function(c){if("Symbol"===n(c))throw TypeError("Cannot convert a Symbol value to a string");return t(c)}},6330:function(c){var e=String;c.exports=function(c){try{return e(c)}catch(s){return"Object"}}},9711:function(c,e,s){var n=s(1702),t=0,a=Math.random(),i=n(1..toString);c.exports=function(c){return"Symbol("+(void 0===c?"":c)+")_"+i(++t+a,36)}},3307:function(c,e,s){var n=s(6293);c.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(c,e,s){var n=s(9781),t=s(7293);c.exports=n&&t((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(c,e,s){var n=s(7854),t=s(614),a=n.WeakMap;c.exports=t(a)&&/native code/.test(String(a))},5112:function(c,e,s){var n=s(7854),t=s(2309),a=s(2597),i=s(9711),r=s(6293),o=s(3307),l=n.Symbol,f=t("wks"),u=o?l["for"]||l:l&&l.withoutSetter||i;c.exports=function(c){return a(f,c)||(f[c]=r&&a(l,c)?l[c]:u("Symbol."+c)),f[c]}},7658:function(c,e,s){"use strict";var n=s(2109),t=s(7908),a=s(6244),i=s(3658),r=s(7207),o=s(7293),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(c){return c instanceof TypeError}},u=l||!f();n({target:"Array",proto:!0,arity:1,forced:u},{push:function(c){var e=t(this),s=a(e),n=arguments.length;r(s+n);for(var o=0;o<n;o++)e[s]=arguments[o],s++;return i(e,s),s}})},541:function(c,e,s){"use strict";var n=s(2109),t=s(7908),a=s(6244),i=s(3658),r=s(5117),o=s(7207),l=1!==[].unshift(0),f=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(c){return c instanceof TypeError}},u=l||!f();n({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(c){var e=t(this),s=a(e),n=arguments.length;if(n){o(s+n);var l=s;while(l--){var f=l+n;l in e?e[f]=e[l]:r(e,f)}for(var u=0;u<n;u++)e[u]=arguments[u]}return i(e,s+n)}})},2801:function(c,e,s){"use strict";var n=s(2109),t=s(7854),a=s(5005),i=s(9114),r=s(3070).f,o=s(2597),l=s(5787),f=s(9587),u=s(6277),h=s(3678),m=s(1060),p=s(9781),d=s(1913),z="DOMException",H=a("Error"),V=a(z),v=function(){l(this,M);var c=arguments.length,e=u(c<1?void 0:arguments[0]),s=u(c<2?void 0:arguments[1],"Error"),n=new V(e,s),t=H(e);return t.name=z,r(n,"stack",i(1,m(t.stack,1))),f(n,this,v),n},M=v.prototype=V.prototype,g="stack"in H(z),C="stack"in new V(1,2),L=V&&p&&Object.getOwnPropertyDescriptor(t,z),b=!!L&&!(L.writable&&L.configurable),y=g&&!b&&!C;n({global:!0,constructor:!0,forced:d||y},{DOMException:y?v:V});var x=a(z),N=x.prototype;if(N.constructor!==x)for(var w in d||r(N,"constructor",i(1,x)),h)if(o(h,w)){var S=h[w],k=S.s;o(x,k)||r(x,k,i(6,S.c))}},199:function(c,e,s){"use strict";s.d(e,{hJ:function(){return se},Xb:function(){return pe},v0:function(){return Ln},Aj:function(){return Ve},e5:function(){return de},rh:function(){return Hs},w7:function(){return ve}});s(7658);var n=s(223),t=s(7077),a=s(5168);function i(c,e){var s={};for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&e.indexOf(n)<0&&(s[n]=c[n]);if(null!=c&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(c);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(c,n[t])&&(s[n[t]]=c[n[t]])}return s}Object.create;Object.create;var r=s(7142);function o(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=o,f=new n.LL("auth","Firebase",o()),u=new a.Yd("@firebase/auth");function h(c,...e){u.logLevel<=a["in"].ERROR&&u.error(`Auth (${t.Jn}): ${c}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(c,...e){throw H(c,...e)}function p(c,...e){return H(c,...e)}function d(c,e,s){const t=Object.assign(Object.assign({},l()),{[e]:s}),a=new n.LL("auth","Firebase",t);return a.create(e,{appName:c.name})}function z(c,e,s){const n=s;if(!(e instanceof n))throw n.name!==e.constructor.name&&m(c,"argument-error"),d(c,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function H(c,...e){if("string"!==typeof c){const s=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=c.name),c._errorFactory.create(s,...n)}return f.create(c,...e)}function V(c,e,...s){if(!c)throw H(e,...s)}function v(c){const e="INTERNAL ASSERTION FAILED: "+c;throw h(e),new Error(e)}function M(c,e){c||v(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new Map;function C(c){M(c instanceof Function,"Expected a class definition");let e=g.get(c);return e?(M(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,g.set(c,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(c,e){const s=(0,t.qX)(c,"auth");if(s.isInitialized()){const c=s.getImmediate(),t=s.getOptions();if((0,n.vZ)(t,null!==e&&void 0!==e?e:{}))return c;m(c,"already-initialized")}const a=s.initialize({options:e});return a}function b(c,e){const s=(null===e||void 0===e?void 0:e.persistence)||[],n=(Array.isArray(s)?s:[s]).map(C);(null===e||void 0===e?void 0:e.errorMap)&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(n,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){var c;return"undefined"!==typeof self&&(null===(c=self.location)||void 0===c?void 0:c.href)||""}function x(){return"http:"===N()||"https:"===N()}function N(){var c;return"undefined"!==typeof self&&(null===(c=self.location)||void 0===c?void 0:c.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||(0,n.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(c,e){this.shortDelay=c,this.longDelay=e,M(e>c,"Short delay should be less than long delay!"),this.isMobile=(0,n.uI)()||(0,n.b$)()}get(){return w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(c,e){M(c.emulator,"Emulator should always be set here");const{url:s}=c.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(c,e,s){this.fetchImpl=c,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},T=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function I(c,e,s,t,a={}){return R(c,a,(async()=>{let a={},i={};t&&("GET"===e?i=t:a={body:JSON.stringify(t)});const r=(0,n.xO)(Object.assign({key:c.config.apiKey},i)).slice(1),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/json",c.languageCode&&(o["X-Firebase-Locale"]=c.languageCode),A.fetch()(D(c,c.config.apiHost,s,r),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))}))}async function R(c,e,s){c._canInitEmulator=!1;const t=Object.assign(Object.assign({},E),e);try{const e=new F(c),n=await Promise.race([s(),e.promise]);e.clearNetworkTimeout();const a=await n.json();if("needConfirmation"in a)throw U(c,"account-exists-with-different-credential",a);if(n.ok&&!("errorMessage"in a))return a;{const e=n.ok?a.errorMessage:a.error.message,[s,i]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===s)throw U(c,"credential-already-in-use",a);if("EMAIL_EXISTS"===s)throw U(c,"email-already-in-use",a);if("USER_DISABLED"===s)throw U(c,"user-disabled",a);const r=t[s]||s.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw d(c,r,i);m(c,r)}}catch(a){if(a instanceof n.ZR)throw a;m(c,"network-request-failed")}}async function P(c,e,s,n,t={}){const a=await I(c,e,s,n,t);return"mfaPendingCredential"in a&&m(c,"multi-factor-auth-required",{_serverResponse:a}),a}function D(c,e,s,n){const t=`${e}${s}?${n}`;return c.config.emulator?_(c.config,t):`${c.config.apiScheme}://${t}`}class F{constructor(c){this.auth=c,this.timer=null,this.promise=new Promise(((c,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),T.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(c,e,s){const n={appName:c.name};s.email&&(n.email=s.email),s.phoneNumber&&(n.phoneNumber=s.phoneNumber);const t=p(c,e,n);return t.customData._tokenResponse=s,t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(c,e){return I(c,"POST","/v1/accounts:delete",e)}async function B(c,e){return I(c,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(c){if(c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(c,e=!1){const s=(0,n.m9)(c),t=await s.getIdToken(e),a=G(t);V(a&&a.exp&&a.auth_time&&a.iat,s.auth,"internal-error");const i="object"===typeof a.firebase?a.firebase:void 0,r=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:a,token:t,authTime:q($(a.auth_time)),issuedAtTime:q($(a.iat)),expirationTime:q($(a.exp)),signInProvider:r||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function $(c){return 1e3*Number(c)}function G(c){const[e,s,t]=c.split(".");if(void 0===e||void 0===s||void 0===t)return h("JWT malformed, contained fewer than 3 sections"),null;try{const c=(0,n.tV)(s);return c?JSON.parse(c):(h("Failed to decode base64 JWT payload"),null)}catch(a){return h("Caught error parsing JWT payload as JSON",null===a||void 0===a?void 0:a.toString()),null}}function J(c){const e=G(c);return V(e,"internal-error"),V("undefined"!==typeof e.exp,"internal-error"),V("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(c,e,s=!1){if(s)return e;try{return await e}catch(t){throw t instanceof n.ZR&&Y(t)&&c.auth.currentUser===c&&await c.auth.signOut(),t}}function Y({code:c}){return"auth/user-disabled"===c||"auth/user-token-expired"===c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(c){this.user=c,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(c){var e;if(c){const c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;const c=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,s=c-Date.now()-3e5;return Math.max(0,s)}}schedule(c=!1){if(!this.isRunning)return;const e=this.getInterval(c);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(c){return void("auth/network-request-failed"===(null===c||void 0===c?void 0:c.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(c,e){this.createdAt=c,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(c){this.createdAt=c.createdAt,this.lastLoginAt=c.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(c){var e;const s=c.auth,n=await c.getIdToken(),t=await K(c,B(s,{idToken:n}));V(null===t||void 0===t?void 0:t.users.length,s,"internal-error");const a=t.users[0];c._notifyReloadListener(a);const i=(null===(e=a.providerUserInfo)||void 0===e?void 0:e.length)?sc(a.providerUserInfo):[],r=ec(c.providerData,i),o=c.isAnonymous,l=!(c.email&&a.passwordHash)&&!(null===r||void 0===r?void 0:r.length),f=!!o&&l,u={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:r,metadata:new Q(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(c,u)}async function cc(c){const e=(0,n.m9)(c);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ec(c,e){const s=c.filter((c=>!e.some((e=>e.providerId===c.providerId))));return[...s,...e]}function sc(c){return c.map((c=>{var{providerId:e}=c,s=i(c,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(c,e){const s=await R(c,{},(async()=>{const s=(0,n.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:t,apiKey:a}=c.config,i=D(c,t,"/v1/token",`key=${a}`),r=await c._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(i,{method:"POST",headers:r,body:s})}));return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(c){V(c.idToken,"internal-error"),V("undefined"!==typeof c.idToken,"internal-error"),V("undefined"!==typeof c.refreshToken,"internal-error");const e="expiresIn"in c&&"undefined"!==typeof c.expiresIn?Number(c.expiresIn):J(c.idToken);this.updateTokensAndExpiration(c.idToken,c.refreshToken,e)}async getToken(c,e=!1){return V(!this.accessToken||this.refreshToken,c,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(c,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(c,e){const{accessToken:s,refreshToken:n,expiresIn:t}=await nc(c,e);this.updateTokensAndExpiration(s,n,Number(t))}updateTokensAndExpiration(c,e,s){this.refreshToken=e||null,this.accessToken=c||null,this.expirationTime=Date.now()+1e3*s}static fromJSON(c,e){const{refreshToken:s,accessToken:n,expirationTime:t}=e,a=new tc;return s&&(V("string"===typeof s,"internal-error",{appName:c}),a.refreshToken=s),n&&(V("string"===typeof n,"internal-error",{appName:c}),a.accessToken=n),t&&(V("number"===typeof t,"internal-error",{appName:c}),a.expirationTime=t),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(c){this.accessToken=c.accessToken,this.refreshToken=c.refreshToken,this.expirationTime=c.expirationTime}_clone(){return Object.assign(new tc,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(c,e){V("string"===typeof c||"undefined"===typeof c,"internal-error",{appName:e})}class ic{constructor(c){var{uid:e,auth:s,stsTokenManager:n}=c,t=i(c,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=t.displayName||null,this.email=t.email||null,this.emailVerified=t.emailVerified||!1,this.phoneNumber=t.phoneNumber||null,this.photoURL=t.photoURL||null,this.isAnonymous=t.isAnonymous||!1,this.tenantId=t.tenantId||null,this.providerData=t.providerData?[...t.providerData]:[],this.metadata=new Q(t.createdAt||void 0,t.lastLoginAt||void 0)}async getIdToken(c){const e=await K(this,this.stsTokenManager.getToken(this.auth,c));return V(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(c){return W(this,c)}reload(){return cc(this)}_assign(c){this!==c&&(V(this.uid===c.uid,this.auth,"internal-error"),this.displayName=c.displayName,this.photoURL=c.photoURL,this.email=c.email,this.emailVerified=c.emailVerified,this.phoneNumber=c.phoneNumber,this.isAnonymous=c.isAnonymous,this.tenantId=c.tenantId,this.providerData=c.providerData.map((c=>Object.assign({},c))),this.metadata._copy(c.metadata),this.stsTokenManager._assign(c.stsTokenManager))}_clone(c){return new ic(Object.assign(Object.assign({},this),{auth:c,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(c){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=c,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(c){this.reloadListener?this.reloadListener(c):this.reloadUserInfo=c}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(c,e=!1){let s=!1;c.idToken&&c.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(c),s=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const c=await this.getIdToken();return await K(this,j(this.auth,{idToken:c})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((c=>Object.assign({},c))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(c,e){var s,n,t,a,i,r,o,l;const f=null!==(s=e.displayName)&&void 0!==s?s:void 0,u=null!==(n=e.email)&&void 0!==n?n:void 0,h=null!==(t=e.phoneNumber)&&void 0!==t?t:void 0,m=null!==(a=e.photoURL)&&void 0!==a?a:void 0,p=null!==(i=e.tenantId)&&void 0!==i?i:void 0,d=null!==(r=e._redirectEventId)&&void 0!==r?r:void 0,z=null!==(o=e.createdAt)&&void 0!==o?o:void 0,H=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:M,isAnonymous:g,providerData:C,stsTokenManager:L}=e;V(v&&L,c,"internal-error");const b=tc.fromJSON(this.name,L);V("string"===typeof v,c,"internal-error"),ac(f,c.name),ac(u,c.name),V("boolean"===typeof M,c,"internal-error"),V("boolean"===typeof g,c,"internal-error"),ac(h,c.name),ac(m,c.name),ac(p,c.name),ac(d,c.name),ac(z,c.name),ac(H,c.name);const y=new ic({uid:v,auth:c,email:u,emailVerified:M,displayName:f,isAnonymous:g,photoURL:m,phoneNumber:h,tenantId:p,stsTokenManager:b,createdAt:z,lastLoginAt:H});return C&&Array.isArray(C)&&(y.providerData=C.map((c=>Object.assign({},c)))),d&&(y._redirectEventId=d),y}static async _fromIdTokenResponse(c,e,s=!1){const n=new tc;n.updateFromServerResponse(e);const t=new ic({uid:e.localId,auth:c,stsTokenManager:n,isAnonymous:s});return await Z(t),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(c,e){this.storage[c]=e}async _get(c){const e=this.storage[c];return void 0===e?null:e}async _remove(c){delete this.storage[c]}_addListener(c,e){}_removeListener(c,e){}}rc.type="NONE";const oc=rc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(c,e,s){return`firebase:${c}:${e}:${s}`}class fc{constructor(c,e,s){this.persistence=c,this.auth=e,this.userKey=s;const{config:n,name:t}=this.auth;this.fullUserKey=lc(this.userKey,n.apiKey,t),this.fullPersistenceKey=lc("persistence",n.apiKey,t),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(c){return this.persistence._set(this.fullUserKey,c.toJSON())}async getCurrentUser(){const c=await this.persistence._get(this.fullUserKey);return c?ic._fromJSON(this.auth,c):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(c){if(this.persistence===c)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=c,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(c,e,s="authUser"){if(!e.length)return new fc(C(oc),c,s);const n=(await Promise.all(e.map((async c=>{if(await c._isAvailable())return c})))).filter((c=>c));let t=n[0]||C(oc);const a=lc(s,c.config.apiKey,c.name);let i=null;for(const l of e)try{const e=await l._get(a);if(e){const s=ic._fromJSON(c,e);l!==t&&(i=s),t=l;break}}catch(o){}const r=n.filter((c=>c._shouldAllowMigration));return t._shouldAllowMigration&&r.length?(t=r[0],i&&await t._set(a,i.toJSON()),await Promise.all(e.map((async c=>{if(c!==t)try{await c._remove(a)}catch(o){}}))),new fc(t,c,s)):new fc(t,c,s)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hc(e))return"Blackberry";if(Vc(e))return"Webos";if(mc(e))return"Safari";if((e.includes("chrome/")||pc(e))&&!e.includes("edge/"))return"Chrome";if(zc(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=c.match(e);if(2===(null===s||void 0===s?void 0:s.length))return s[1]}return"Other"}function hc(c=(0,n.z$)()){return/firefox\//i.test(c)}function mc(c=(0,n.z$)()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pc(c=(0,n.z$)()){return/crios\//i.test(c)}function dc(c=(0,n.z$)()){return/iemobile/i.test(c)}function zc(c=(0,n.z$)()){return/android/i.test(c)}function Hc(c=(0,n.z$)()){return/blackberry/i.test(c)}function Vc(c=(0,n.z$)()){return/webos/i.test(c)}function vc(c=(0,n.z$)()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function Mc(c=(0,n.z$)()){var e;return vc(c)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function gc(){return(0,n.w1)()&&10===document.documentMode}function Cc(c=(0,n.z$)()){return vc(c)||zc(c)||Vc(c)||Hc(c)||/windows phone/i.test(c)||dc(c)}function Lc(){try{return!(!window||window===window.top)}catch(c){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(c,e=[]){let s;switch(c){case"Browser":s=uc((0,n.z$)());break;case"Worker":s=`${uc((0,n.z$)())}-${c}`;break;default:s=c}const a=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${t.Jn}/${a}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(c){this.auth=c,this.queue=[]}pushCallback(c,e){const s=e=>new Promise(((s,n)=>{try{const n=c(e);s(n)}catch(t){n(t)}}));s.onAbort=e,this.queue.push(s);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(c){if(this.auth.currentUser===c)return;const e=[];try{for(const s of this.queue)await s(c),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const c of e)try{c()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===s||void 0===s?void 0:s.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(c,e,s){this.app=c,this.heartbeatServiceProvider=e,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wc(this),this.idTokenSubscription=new wc(this),this.beforeStateQueue=new yc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=c.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(c,e){return e&&(this._popupRedirectResolver=C(e)),this._initializationPromise=this.queue((async()=>{var s,n;if(!this._deleted&&(this.persistenceManager=await fc.create(this,c),!this._deleted)){if(null===(s=this._popupRedirectResolver)||void 0===s?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const c=await this.assertedPersistence.getCurrentUser();return this.currentUser||c?this.currentUser&&c&&this.currentUser.uid===c.uid?(this._currentUser._assign(c),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(c,!0):void 0}async initializeCurrentUser(c){var e;const s=await this.assertedPersistence.getCurrentUser();let n=s,t=!1;if(c&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,a=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(c);s&&s!==a||!(null===i||void 0===i?void 0:i.user)||(n=i.user,t=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(t)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=s,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(c){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,c,!0)}catch(s){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(c){try{await Z(c)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(c)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(c){const e=c?(0,n.m9)(c):null;return e&&V(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(c,e=!1){if(!this._deleted)return c&&V(this.tenantId===c.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(c),this.queue((async()=>{await this.directlySetCurrentUser(c),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(c){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(c))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(c){this._errorFactory=new n.LL("auth","Firebase",c())}onAuthStateChanged(c,e,s){return this.registerStateListener(this.authStateSubscription,c,e,s)}beforeAuthStateChanged(c,e){return this.beforeStateQueue.pushCallback(c,e)}onIdTokenChanged(c,e,s){return this.registerStateListener(this.idTokenSubscription,c,e,s)}toJSON(){var c;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(c=this._currentUser)||void 0===c?void 0:c.toJSON()}}async _setRedirectUser(c,e){const s=await this.getOrInitRedirectPersistenceManager(e);return null===c?s.removeCurrentUser():s.setCurrentUser(c)}async getOrInitRedirectPersistenceManager(c){if(!this.redirectPersistenceManager){const e=c&&C(c)||this._popupRedirectResolver;V(e,this,"argument-error"),this.redirectPersistenceManager=await fc.create(this,[C(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(c){var e,s;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===c?this._currentUser:(null===(s=this.redirectUser)||void 0===s?void 0:s._redirectEventId)===c?this.redirectUser:null}async _persistUserIfCurrent(c){if(c===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(c)))}_notifyListenersIfCurrent(c){c===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var c,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=null!==(e=null===(c=this.currentUser)||void 0===c?void 0:c.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(c,e,s,n){if(this._deleted)return()=>{};const t="function"===typeof e?e:e.next.bind(e),a=this._isInitialized?Promise.resolve():this._initializationPromise;return V(a,this,"internal-error"),a.then((()=>t(this.currentUser))),"function"===typeof e?c.addObserver(e,s,n):c.addObserver(e)}async directlySetCurrentUser(c){this.currentUser&&this.currentUser!==c&&this._currentUser._stopProactiveRefresh(),c&&this.isProactiveRefreshEnabled&&c._startProactiveRefresh(),this.currentUser=c,c?await this.assertedPersistence.setCurrentUser(c):await this.assertedPersistence.removeCurrentUser()}queue(c){return this.operations=this.operations.then(c,c),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(c){c&&!this.frameworks.includes(c)&&(this.frameworks.push(c),this.frameworks.sort(),this.clientVersion=bc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var c;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await(null===(c=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===c?void 0:c.getHeartbeatsHeader());return s&&(e["X-Firebase-Client"]=s),e}}function Nc(c){return(0,n.m9)(c)}class wc{constructor(c){this.auth=c,this.observer=null,this.addObserver=(0,n.ne)((c=>this.observer=c))}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Sc(c,e,s){const n=Nc(c);V(n._canInitEmulator,n,"emulator-config-failed"),V(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const t=!!(null===s||void 0===s?void 0:s.disableWarnings),a=kc(e),{host:i,port:r}=_c(e),o=null===r?"":`:${r}`;n.config.emulator={url:`${a}//${i}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:i,port:r,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:t})}),t||Ec()}function kc(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function _c(c){const e=kc(c),s=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!s)return{host:"",port:null};const n=s[2].split("@").pop()||"",t=/^(\[[^\]]+\])(:|$)/.exec(n);if(t){const c=t[1];return{host:c,port:Ac(n.substr(c.length+1))}}{const[c,e]=n.split(":");return{host:c,port:Ac(e)}}}function Ac(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function Ec(){function c(){const c=document.createElement("p"),e=c.style;c.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",c.classList.add("firebase-emulator-warning"),document.body.appendChild(c)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",c):c())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(c,e){this.providerId=c,this.signInMethod=e}toJSON(){return v("not implemented")}_getIdTokenResponse(c){return v("not implemented")}_linkToIdToken(c,e){return v("not implemented")}_getReauthenticationResolver(c){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(c,e){return I(c,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ic(c,e){return P(c,"POST","/v1/accounts:signInWithPassword",O(c,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rc(c,e){return P(c,"POST","/v1/accounts:signInWithEmailLink",O(c,e))}async function Pc(c,e){return P(c,"POST","/v1/accounts:signInWithEmailLink",O(c,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Tc{constructor(c,e,s,n=null){super("password",s),this._email=c,this._password=e,this._tenantId=n}static _fromEmailAndPassword(c,e){return new Dc(c,e,"password")}static _fromEmailAndCode(c,e,s=null){return new Dc(c,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(c){const e="string"===typeof c?JSON.parse(c):c;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(c){switch(this.signInMethod){case"password":return Ic(c,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rc(c,{email:this._email,oobCode:this._password});default:m(c,"internal-error")}}async _linkToIdToken(c,e){switch(this.signInMethod){case"password":return Oc(c,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pc(c,{idToken:e,email:this._email,oobCode:this._password});default:m(c,"internal-error")}}_getReauthenticationResolver(c){return this._getIdTokenResponse(c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(c,e){return P(c,"POST","/v1/accounts:signInWithIdp",O(c,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="http://localhost";class jc extends Tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(c){const e=new jc(c.providerId,c.signInMethod);return c.idToken||c.accessToken?(c.idToken&&(e.idToken=c.idToken),c.accessToken&&(e.accessToken=c.accessToken),c.nonce&&!c.pendingToken&&(e.nonce=c.nonce),c.pendingToken&&(e.pendingToken=c.pendingToken)):c.oauthToken&&c.oauthTokenSecret?(e.accessToken=c.oauthToken,e.secret=c.oauthTokenSecret):m("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(c){const e="string"===typeof c?JSON.parse(c):c,{providerId:s,signInMethod:n}=e,t=i(e,["providerId","signInMethod"]);if(!s||!n)return null;const a=new jc(s,n);return a.idToken=t.idToken||void 0,a.accessToken=t.accessToken||void 0,a.secret=t.secret,a.nonce=t.nonce,a.pendingToken=t.pendingToken||null,a}_getIdTokenResponse(c){const e=this.buildRequest();return Fc(c,e)}_linkToIdToken(c,e){const s=this.buildRequest();return s.idToken=e,Fc(c,s)}_getReauthenticationResolver(c){const e=this.buildRequest();return e.autoCreate=!1,Fc(c,e)}buildRequest(){const c={requestUri:Uc,returnSecureToken:!0};if(this.pendingToken)c.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),c.postBody=(0,n.xO)(e)}return c}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(c,e){return I(c,"POST","/v1/accounts:sendVerificationCode",O(c,e))}async function qc(c,e){return P(c,"POST","/v1/accounts:signInWithPhoneNumber",O(c,e))}async function Wc(c,e){const s=await P(c,"POST","/v1/accounts:signInWithPhoneNumber",O(c,e));if(s.temporaryProof)throw U(c,"account-exists-with-different-credential",s);return s}const $c={["USER_NOT_FOUND"]:"user-not-found"};async function Gc(c,e){const s=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(c,"POST","/v1/accounts:signInWithPhoneNumber",O(c,s),$c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Tc{constructor(c){super("phone","phone"),this.params=c}static _fromVerification(c,e){return new Jc({verificationId:c,verificationCode:e})}static _fromTokenResponse(c,e){return new Jc({phoneNumber:c,temporaryProof:e})}_getIdTokenResponse(c){return qc(c,this._makeVerificationRequest())}_linkToIdToken(c,e){return Wc(c,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(c){return Gc(c,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:c,phoneNumber:e,verificationId:s,verificationCode:n}=this.params;return c&&e?{temporaryProof:c,phoneNumber:e}:{sessionInfo:s,code:n}}toJSON(){const c={providerId:this.providerId};return this.params.phoneNumber&&(c.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(c.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(c.verificationCode=this.params.verificationCode),this.params.verificationId&&(c.verificationId=this.params.verificationId),c}static fromJSON(c){"string"===typeof c&&(c=JSON.parse(c));const{verificationId:e,verificationCode:s,phoneNumber:n,temporaryProof:t}=c;return s||e||n||t?new Jc({verificationId:e,verificationCode:s,phoneNumber:n,temporaryProof:t}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(c){switch(c){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yc(c){const e=(0,n.zd)((0,n.pd)(c))["link"],s=e?(0,n.zd)((0,n.pd)(e))["deep_link_id"]:null,t=(0,n.zd)((0,n.pd)(c))["deep_link_id"],a=t?(0,n.zd)((0,n.pd)(t))["link"]:null;return a||t||s||e||c}class Xc{constructor(c){var e,s,t,a,i,r;const o=(0,n.zd)((0,n.pd)(c)),l=null!==(e=o["apiKey"])&&void 0!==e?e:null,f=null!==(s=o["oobCode"])&&void 0!==s?s:null,u=Kc(null!==(t=o["mode"])&&void 0!==t?t:null);V(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=null!==(a=o["continueUrl"])&&void 0!==a?a:null,this.languageCode=null!==(i=o["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(r=o["tenantId"])&&void 0!==r?r:null}static parseLink(c){const e=Yc(c);try{return new Xc(e)}catch(s){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{constructor(){this.providerId=Qc.PROVIDER_ID}static credential(c,e){return Dc._fromEmailAndPassword(c,e)}static credentialWithLink(c,e){const s=Xc.parseLink(e);return V(s,"argument-error"),Dc._fromEmailAndCode(c,s.code,s.tenantId)}}Qc.PROVIDER_ID="password",Qc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zc{constructor(c){this.providerId=c,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(c){this.defaultLanguageCode=c}setCustomParameters(c){return this.customParameters=c,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Zc{constructor(){super(...arguments),this.scopes=[]}addScope(c){return this.scopes.includes(c)||this.scopes.push(c),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends ce{constructor(){super("facebook.com")}static credential(c){return jc._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return ee.credentialFromTaggedObject(c)}static credentialFromError(c){return ee.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c))return null;if(!c.oauthAccessToken)return null;try{return ee.credential(c.oauthAccessToken)}catch(e){return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se extends ce{constructor(){super("google.com"),this.addScope("profile")}static credential(c,e){return jc._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GOOGLE_SIGN_IN_METHOD,idToken:c,accessToken:e})}static credentialFromResult(c){return se.credentialFromTaggedObject(c)}static credentialFromError(c){return se.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthIdToken:e,oauthAccessToken:s}=c;if(!e&&!s)return null;try{return se.credential(e,s)}catch(n){return null}}}se.GOOGLE_SIGN_IN_METHOD="google.com",se.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends ce{constructor(){super("github.com")}static credential(c){return jc._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return ne.credentialFromTaggedObject(c)}static credentialFromError(c){return ne.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c))return null;if(!c.oauthAccessToken)return null;try{return ne.credential(c.oauthAccessToken)}catch(e){return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com",ne.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends ce{constructor(){super("twitter.com")}static credential(c,e){return jc._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.TWITTER_SIGN_IN_METHOD,oauthToken:c,oauthTokenSecret:e})}static credentialFromResult(c){return te.credentialFromTaggedObject(c)}static credentialFromError(c){return te.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=c;if(!e||!s)return null;try{return te.credential(e,s)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ae(c,e){return P(c,"POST","/v1/accounts:signUp",O(c,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te.TWITTER_SIGN_IN_METHOD="twitter.com",te.PROVIDER_ID="twitter.com";class ie{constructor(c){this.user=c.user,this.providerId=c.providerId,this._tokenResponse=c._tokenResponse,this.operationType=c.operationType}static async _fromIdTokenResponse(c,e,s,n=!1){const t=await ic._fromIdTokenResponse(c,s,n),a=re(s),i=new ie({user:t,providerId:a,_tokenResponse:s,operationType:e});return i}static async _forOperation(c,e,s){await c._updateTokensIfNecessary(s,!0);const n=re(s);return new ie({user:c,providerId:n,_tokenResponse:s,operationType:e})}}function re(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe extends n.ZR{constructor(c,e,s,n){var t;super(e.code,e.message),this.operationType=s,this.user=n,Object.setPrototypeOf(this,oe.prototype),this.customData={appName:c.name,tenantId:null!==(t=c.tenantId)&&void 0!==t?t:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(c,e,s,n){return new oe(c,e,s,n)}}function le(c,e,s,n){const t="reauthenticate"===e?s._getReauthenticationResolver(c):s._getIdTokenResponse(c);return t.catch((s=>{if("auth/multi-factor-auth-required"===s.code)throw oe._fromErrorAndOperation(c,s,e,n);throw s}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(c,e,s=!1){const n=await K(c,e._linkToIdToken(c.auth,await c.getIdToken()),s);return ie._forOperation(c,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ue(c,e,s=!1){const{auth:n}=c,t="reauthenticate";try{const a=await K(c,le(n,t,e,c),s);V(a.idToken,n,"internal-error");const i=G(a.idToken);V(i,n,"internal-error");const{sub:r}=i;return V(c.uid===r,n,"user-mismatch"),ie._forOperation(c,t,a)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&m(n,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(c,e,s=!1){const n="signIn",t=await le(c,n,e),a=await ie._fromIdTokenResponse(c,n,t);return s||await c._updateCurrentUser(a.user),a}async function me(c,e){return he(Nc(c),e)}async function pe(c,e,s){const n=Nc(c),t=await ae(n,{returnSecureToken:!0,email:e,password:s}),a=await ie._fromIdTokenResponse(n,"signIn",t);return await n._updateCurrentUser(a.user),a}function de(c,e,s){return me((0,n.m9)(c),Qc.credential(e,s))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(c,e,s,t){return(0,n.m9)(c).onIdTokenChanged(e,s,t)}function He(c,e,s){return(0,n.m9)(c).beforeAuthStateChanged(e,s)}function Ve(c,e,s,t){return(0,n.m9)(c).onAuthStateChanged(e,s,t)}function ve(c){return(0,n.m9)(c).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(c,e){return I(c,"POST","/v2/accounts/mfaEnrollment:start",O(c,e))}function ge(c,e){return I(c,"POST","/v2/accounts/mfaEnrollment:finalize",O(c,e))}new WeakMap;const Ce="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(c,e){this.storageRetriever=c,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ce,"1"),this.storage.removeItem(Ce),Promise.resolve(!0)):Promise.resolve(!1)}catch(c){return Promise.resolve(!1)}}_set(c,e){return this.storage.setItem(c,JSON.stringify(e)),Promise.resolve()}_get(c){const e=this.storage.getItem(c);return Promise.resolve(e?JSON.parse(e):null)}_remove(c){return this.storage.removeItem(c),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){const c=(0,n.z$)();return mc(c)||vc(c)}const ye=1e3,xe=10;class Ne extends Le{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(c,e)=>this.onStorageEvent(c,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=be()&&Lc(),this.fallbackToPolling=Cc(),this._shouldAllowMigration=!0}forAllChangedKeys(c){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),n=this.localCache[e];s!==n&&c(e,n,s)}}onStorageEvent(c,e=!1){if(!c.key)return void this.forAllChangedKeys(((c,e,s)=>{this.notifyListeners(c,s)}));const s=c.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(s);if(c.newValue!==n)null!==c.newValue?this.storage.setItem(s,c.newValue):this.storage.removeItem(s);else if(this.localCache[s]===c.newValue&&!e)return}const n=()=>{const c=this.storage.getItem(s);(e||this.localCache[s]!==c)&&this.notifyListeners(s,c)},t=this.storage.getItem(s);gc()&&t!==c.newValue&&c.newValue!==c.oldValue?setTimeout(n,xe):n()}notifyListeners(c,e){this.localCache[c]=e;const s=this.listeners[c];if(s)for(const n of Array.from(s))n(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((c,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:c,oldValue:e,newValue:s}),!0)}))}),ye)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(c,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[c]||(this.listeners[c]=new Set,this.localCache[c]=this.storage.getItem(c)),this.listeners[c].add(e)}_removeListener(c,e){this.listeners[c]&&(this.listeners[c].delete(e),0===this.listeners[c].size&&delete this.listeners[c]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(c,e){await super._set(c,e),this.localCache[c]=JSON.stringify(e)}async _get(c){const e=await super._get(c);return this.localCache[c]=JSON.stringify(e),e}async _remove(c){await super._remove(c),delete this.localCache[c]}}Ne.type="LOCAL";const we=Ne;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Le{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(c,e){}_removeListener(c,e){}}Se.type="SESSION";const ke=Se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(c){return Promise.all(c.map((async c=>{try{const e=await c;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(c){this.eventTarget=c,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(c){const e=this.receivers.find((e=>e.isListeningto(c)));if(e)return e;const s=new Ae(c);return this.receivers.push(s),s}isListeningto(c){return this.eventTarget===c}async handleEvent(c){const e=c,{eventId:s,eventType:n,data:t}=e.data,a=this.handlersMap[n];if(!(null===a||void 0===a?void 0:a.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:n});const i=Array.from(a).map((async c=>c(e.origin,t))),r=await _e(i);e.ports[0].postMessage({status:"done",eventId:s,eventType:n,response:r})}_subscribe(c,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[c]||(this.handlersMap[c]=new Set),this.handlersMap[c].add(e)}_unsubscribe(c,e){this.handlersMap[c]&&e&&this.handlersMap[c].delete(e),e&&0!==this.handlersMap[c].size||delete this.handlersMap[c],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ee(c="",e=10){let s="";for(let n=0;n<e;n++)s+=Math.floor(10*Math.random());return c+s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae.receivers=[];class Te{constructor(c){this.target=c,this.handlers=new Set}removeMessageHandler(c){c.messageChannel&&(c.messageChannel.port1.removeEventListener("message",c.onMessage),c.messageChannel.port1.close()),this.handlers.delete(c)}async _send(c,e,s=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let t,a;return new Promise(((i,r)=>{const o=Ee("",20);n.port1.start();const l=setTimeout((()=>{r(new Error("unsupported_event"))}),s);a={messageChannel:n,onMessage(c){const e=c;if(e.data.eventId===o)switch(e.data.status){case"ack":clearTimeout(l),t=setTimeout((()=>{r(new Error("timeout"))}),3e3);break;case"done":clearTimeout(t),i(e.data.response);break;default:clearTimeout(l),clearTimeout(t),r(new Error("invalid_response"));break}}},this.handlers.add(a),n.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:c,eventId:o,data:e},[n.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return window}function Ie(c){Oe().location.href=c}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return"undefined"!==typeof Oe()["WorkerGlobalScope"]&&"function"===typeof Oe()["importScripts"]}async function Pe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const c=await navigator.serviceWorker.ready;return c.active}catch(c){return null}}function De(){var c;return(null===(c=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===c?void 0:c.controller)||null}function Fe(){return Re()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="firebaseLocalStorageDb",je=1,Be="firebaseLocalStorage",qe="fbase_key";class We{constructor(c){this.request=c}toPromise(){return new Promise(((c,e)=>{this.request.addEventListener("success",(()=>{c(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function $e(c,e){return c.transaction([Be],e?"readwrite":"readonly").objectStore(Be)}function Ge(){const c=indexedDB.deleteDatabase(Ue);return new We(c).toPromise()}function Je(){const c=indexedDB.open(Ue,je);return new Promise(((e,s)=>{c.addEventListener("error",(()=>{s(c.error)})),c.addEventListener("upgradeneeded",(()=>{const e=c.result;try{e.createObjectStore(Be,{keyPath:qe})}catch(n){s(n)}})),c.addEventListener("success",(async()=>{const s=c.result;s.objectStoreNames.contains(Be)?e(s):(s.close(),await Ge(),e(await Je()))}))}))}async function Ke(c,e,s){const n=$e(c,!0).put({[qe]:e,value:s});return new We(n).toPromise()}async function Ye(c,e){const s=$e(c,!1).get(e),n=await new We(s).toPromise();return void 0===n?null:n.value}function Xe(c,e){const s=$e(c,!0).delete(e);return new We(s).toPromise()}const Qe=800,Ze=3;class cs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Je()),this.db}async _withRetries(c){let e=0;while(1)try{const e=await this._openDb();return await c(e)}catch(s){if(e++>Ze)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Re()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ae._getInstance(Fe()),this.receiver._subscribe("keyChanged",(async(c,e)=>{const s=await this._poll();return{keyProcessed:s.includes(e.key)}})),this.receiver._subscribe("ping",(async(c,e)=>["keyChanged"]))}async initializeSender(){var c,e;if(this.activeServiceWorker=await Pe(),!this.activeServiceWorker)return;this.sender=new Te(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&(null===(c=s[0])||void 0===c?void 0:c.fulfilled)&&(null===(e=s[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(c){if(this.sender&&this.activeServiceWorker&&De()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:c},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const c=await Je();return await Ke(c,Ce,"1"),await Xe(c,Ce),!0}catch(c){}return!1}async _withPendingWrite(c){this.pendingWrites++;try{await c()}finally{this.pendingWrites--}}async _set(c,e){return this._withPendingWrite((async()=>(await this._withRetries((s=>Ke(s,c,e))),this.localCache[c]=e,this.notifyServiceWorker(c))))}async _get(c){const e=await this._withRetries((e=>Ye(e,c)));return this.localCache[c]=e,e}async _remove(c){return this._withPendingWrite((async()=>(await this._withRetries((e=>Xe(e,c))),delete this.localCache[c],this.notifyServiceWorker(c))))}async _poll(){const c=await this._withRetries((c=>{const e=$e(c,!1).getAll();return new We(e).toPromise()}));if(!c)return[];if(0!==this.pendingWrites)return[];const e=[],s=new Set;for(const{fbase_key:n,value:t}of c)s.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(t)&&(this.notifyListeners(n,t),e.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!s.has(n)&&(this.notifyListeners(n,null),e.push(n));return e}notifyListeners(c,e){this.localCache[c]=e;const s=this.listeners[c];if(s)for(const n of Array.from(s))n(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(c,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[c]||(this.listeners[c]=new Set,this._get(c)),this.listeners[c].add(e)}_removeListener(c,e){this.listeners[c]&&(this.listeners[c].delete(e),0===this.listeners[c].size&&delete this.listeners[c]),0===Object.keys(this.listeners).length&&this.stopPolling()}}cs.type="LOCAL";const es=cs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(c,e){return I(c,"POST","/v2/accounts/mfaSignIn:start",O(c,e))}function ns(c,e){return I(c,"POST","/v2/accounts/mfaSignIn:finalize",O(c,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ts(){var c,e;return null!==(e=null===(c=document.getElementsByTagName("head"))||void 0===c?void 0:c[0])&&void 0!==e?e:document}function as(c){return new Promise(((e,s)=>{const n=document.createElement("script");n.setAttribute("src",c),n.onload=e,n.onerror=c=>{const e=p("internal-error");e.customData=c,s(e)},n.type="text/javascript",n.charset="UTF-8",ts().appendChild(n)}))}function is(c){return`__${c}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
is("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs="recaptcha";async function os(c,e,s){var n;const t=await s.verify();try{let a;if(V("string"===typeof t,c,"argument-error"),V(s.type===rs,c,"argument-error"),a="string"===typeof e?{phoneNumber:e}:e,"session"in a){const e=a.session;if("phoneNumber"in a){V("enroll"===e.type,c,"internal-error");const s=await Me(c,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:t}});return s.phoneSessionInfo.sessionInfo}{V("signin"===e.type,c,"internal-error");const s=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;V(s,c,"missing-multi-factor-info");const i=await ss(c,{mfaPendingCredential:e.credential,mfaEnrollmentId:s,phoneSignInInfo:{recaptchaToken:t}});return i.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Bc(c,{phoneNumber:a.phoneNumber,recaptchaToken:t});return e}}finally{s._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(c){this.providerId=ls.PROVIDER_ID,this.auth=Nc(c)}verifyPhoneNumber(c,e){return os(this.auth,c,(0,n.m9)(e))}static credential(c,e){return Jc._fromVerification(c,e)}static credentialFromResult(c){const e=c;return ls.credentialFromTaggedObject(e)}static credentialFromError(c){return ls.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{phoneNumber:e,temporaryProof:s}=c;return e&&s?Jc._fromTokenResponse(e,s):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fs(c,e){return e?C(e):(V(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.PROVIDER_ID="phone",ls.PHONE_SIGN_IN_METHOD="phone";class us extends Tc{constructor(c){super("custom","custom"),this.params=c}_getIdTokenResponse(c){return Fc(c,this._buildIdpRequest())}_linkToIdToken(c,e){return Fc(c,this._buildIdpRequest(e))}_getReauthenticationResolver(c){return Fc(c,this._buildIdpRequest())}_buildIdpRequest(c){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return c&&(e.idToken=c),e}}function hs(c){return he(c.auth,new us(c),c.bypassAuthState)}function ms(c){const{auth:e,user:s}=c;return V(s,e,"internal-error"),ue(s,new us(c),c.bypassAuthState)}async function ps(c){const{auth:e,user:s}=c;return V(s,e,"internal-error"),fe(s,new us(c),c.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(c,e,s,n,t=!1){this.auth=c,this.resolver=s,this.user=n,this.bypassAuthState=t,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(c,e)=>{this.pendingPromise={resolve:c,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}}))}async onAuthEvent(c){const{urlResponse:e,sessionId:s,postBody:n,tenantId:t,error:a,type:i}=c;if(a)return void this.reject(a);const r={auth:this.auth,requestUri:e,sessionId:s,tenantId:t||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(r))}catch(o){this.reject(o)}}onError(c){this.reject(c)}getIdpTask(c){switch(c){case"signInViaPopup":case"signInViaRedirect":return hs;case"linkViaPopup":case"linkViaRedirect":return ps;case"reauthViaPopup":case"reauthViaRedirect":return ms;default:m(this.auth,"internal-error")}}resolve(c){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(c),this.unregisterAndCleanUp()}reject(c){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(c),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new k(2e3,1e4);async function Hs(c,e,s){const n=Nc(c);z(c,e,Zc);const t=fs(n,s),a=new Vs(n,"signInViaPopup",e,t);return a.executeNotNull()}class Vs extends ds{constructor(c,e,s,n,t){super(c,e,n,t),this.provider=s,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const c=await this.execute();return V(c,this.auth,"internal-error"),c}async onExecution(){M(1===this.filter.length,"Popup operations only handle one event");const c=Ee();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],c),this.authWindow.associatedEvent=c,this.resolver._originValidation(this.auth).catch((c=>{this.reject(c)})),this.resolver._isIframeWebStorageSupported(this.auth,(c=>{c||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var c;return(null===(c=this.authWindow)||void 0===c?void 0:c.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const c=()=>{var e,s;(null===(s=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===s?void 0:s.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(c,zs.get())};c()}}Vs.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vs="pendingRedirect",Ms=new Map;class gs extends ds{constructor(c,e,s=!1){super(c,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let c=Ms.get(this.auth._key());if(!c){try{const e=await Cs(this.resolver,this.auth),s=e?await super.execute():null;c=()=>Promise.resolve(s)}catch(e){c=()=>Promise.reject(e)}Ms.set(this.auth._key(),c)}return this.bypassAuthState||Ms.set(this.auth._key(),(()=>Promise.resolve(null))),c()}async onAuthEvent(c){if("signInViaRedirect"===c.type)return super.onAuthEvent(c);if("unknown"!==c.type){if(c.eventId){const e=await this.auth._redirectUserForId(c.eventId);if(e)return this.user=e,super.onAuthEvent(c);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Cs(c,e){const s=ys(e),n=bs(c);if(!await n._isAvailable())return!1;const t="true"===await n._get(s);return await n._remove(s),t}function Ls(c,e){Ms.set(c._key(),e)}function bs(c){return C(c._redirectPersistence)}function ys(c){return lc(vs,c.config.apiKey,c.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(c,e,s=!1){const n=Nc(c),t=fs(n,e),a=new gs(n,t,s),i=await a.execute();return i&&!s&&(delete i.user._redirectEventId,await n._persistUserIfCurrent(i.user),await n._setRedirectUser(null,e)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ns=6e5;class ws{constructor(c){this.auth=c,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(c){this.consumers.add(c),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,c)&&(this.sendToConsumer(this.queuedRedirectEvent,c),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(c){this.consumers.delete(c)}onEvent(c){if(this.hasEventBeenHandled(c))return!1;let e=!1;return this.consumers.forEach((s=>{this.isEventForConsumer(c,s)&&(e=!0,this.sendToConsumer(c,s),this.saveEventToCache(c))})),this.hasHandledPotentialRedirect||!_s(c)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=c,e=!0)),e}sendToConsumer(c,e){var s;if(c.error&&!ks(c)){const n=(null===(s=c.error.code)||void 0===s?void 0:s.split("auth/")[1])||"internal-error";e.onError(p(this.auth,n))}else e.onAuthEvent(c)}isEventForConsumer(c,e){const s=null===e.eventId||!!c.eventId&&c.eventId===e.eventId;return e.filter.includes(c.type)&&s}hasEventBeenHandled(c){return Date.now()-this.lastProcessedEventTime>=Ns&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ss(c))}saveEventToCache(c){this.cachedEventUids.add(Ss(c)),this.lastProcessedEventTime=Date.now()}}function Ss(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter((c=>c)).join("-")}function ks({type:c,error:e}){return"unknown"===c&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function _s(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ks(c);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(c,e={}){return I(c,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ts=/^https?/;async function Os(c){if(c.config.emulator)return;const{authorizedDomains:e}=await As(c);for(const n of e)try{if(Is(n))return}catch(s){}m(c,"unauthorized-domain")}function Is(c){const e=y(),{protocol:s,hostname:n}=new URL(e);if(c.startsWith("chrome-extension://")){const t=new URL(c);return""===t.hostname&&""===n?"chrome-extension:"===s&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===s&&t.hostname===n}if(!Ts.test(s))return!1;if(Es.test(c))return n===c;const t=c.replace(/\./g,"\\."),a=new RegExp("^(.+\\."+t+"|"+t+")$","i");return a.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new k(3e4,6e4);function Ps(){const c=Oe().___jsl;if(null===c||void 0===c?void 0:c.H)for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let s=0;s<c.CP.length;s++)c.CP[s]=null}function Ds(c){return new Promise(((e,s)=>{var n,t,a;function i(){Ps(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ps(),s(p(c,"network-request-failed"))},timeout:Rs.get()})}if(null===(t=null===(n=Oe().gapi)||void 0===n?void 0:n.iframes)||void 0===t?void 0:t.Iframe)e(gapi.iframes.getContext());else{if(!(null===(a=Oe().gapi)||void 0===a?void 0:a.load)){const e=is("iframefcb");return Oe()[e]=()=>{gapi.load?i():s(p(c,"network-request-failed"))},as(`https://apis.google.com/js/api.js?onload=${e}`).catch((c=>s(c)))}i()}})).catch((c=>{throw Fs=null,c}))}let Fs=null;function Us(c){return Fs=Fs||Ds(c),Fs}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new k(5e3,15e3),Bs="__/auth/iframe",qs="emulator/auth/iframe",Ws={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$s=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gs(c){const e=c.config;V(e.authDomain,c,"auth-domain-config-required");const s=e.emulator?_(e,qs):`https://${c.config.authDomain}/${Bs}`,a={apiKey:e.apiKey,appName:c.name,v:t.Jn},i=$s.get(c.config.apiHost);i&&(a.eid=i);const r=c._getFrameworks();return r.length&&(a.fw=r.join(",")),`${s}?${(0,n.xO)(a).slice(1)}`}async function Js(c){const e=await Us(c),s=Oe().gapi;return V(s,c,"internal-error"),e.open({where:document.body,url:Gs(c),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ws,dontclear:!0},(e=>new Promise((async(s,n)=>{await e.restyle({setHideOnLeave:!1});const t=p(c,"network-request-failed"),a=Oe().setTimeout((()=>{n(t)}),js.get());function i(){Oe().clearTimeout(a),s(e)}e.ping(i).then(i,(()=>{n(t)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ys=500,Xs=600,Qs="_blank",Zs="http://localhost";class cn{constructor(c){this.window=c,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(c){}}}function en(c,e,s,t=Ys,a=Xs){const i=Math.max((window.screen.availHeight-a)/2,0).toString(),r=Math.max((window.screen.availWidth-t)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Ks),{width:t.toString(),height:a.toString(),top:i,left:r}),f=(0,n.z$)().toLowerCase();s&&(o=pc(f)?Qs:s),hc(f)&&(e=e||Zs,l.scrollbars="yes");const u=Object.entries(l).reduce(((c,[e,s])=>`${c}${e}=${s},`),"");if(Mc(f)&&"_self"!==o)return sn(e||"",o),new cn(null);const h=window.open(e||"",o,u);V(h,c,"popup-blocked");try{h.focus()}catch(m){}return new cn(h)}function sn(c,e){const s=document.createElement("a");s.href=c,s.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="__/auth/handler",tn="emulator/auth/handler";function an(c,e,s,a,i,r){V(c.config.authDomain,c,"auth-domain-config-required"),V(c.config.apiKey,c,"invalid-api-key");const o={apiKey:c.config.apiKey,appName:c.name,authType:s,redirectUrl:a,v:t.Jn,eventId:i};if(e instanceof Zc){e.setDefaultLanguage(c.languageCode),o.providerId=e.providerId||"",(0,n.xb)(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,e]of Object.entries(r||{}))o[c]=e}if(e instanceof ce){const c=e.getScopes().filter((c=>""!==c));c.length>0&&(o.scopes=c.join(","))}c.tenantId&&(o.tid=c.tenantId);const l=o;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];return`${rn(c)}?${(0,n.xO)(l).slice(1)}`}function rn({config:c}){return c.emulator?_(c,tn):`https://${c.authDomain}/${nn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="webStorageSupport";class ln{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ke,this._completeRedirectFn=xs,this._overrideRedirectResult=Ls}async _openPopup(c,e,s,n){var t;M(null===(t=this.eventManagers[c._key()])||void 0===t?void 0:t.manager,"_initialize() not called before _openPopup()");const a=an(c,e,s,y(),n);return en(c,a,Ee())}async _openRedirect(c,e,s,n){return await this._originValidation(c),Ie(an(c,e,s,y(),n)),new Promise((()=>{}))}_initialize(c){const e=c._key();if(this.eventManagers[e]){const{manager:c,promise:s}=this.eventManagers[e];return c?Promise.resolve(c):(M(s,"If manager is not set, promise should be"),s)}const s=this.initAndGetManager(c);return this.eventManagers[e]={promise:s},s.catch((()=>{delete this.eventManagers[e]})),s}async initAndGetManager(c){const e=await Js(c),s=new ws(c);return e.register("authEvent",(e=>{V(null===e||void 0===e?void 0:e.authEvent,c,"invalid-auth-event");const n=s.onEvent(e.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[c._key()]={manager:s},this.iframes[c._key()]=e,s}_isIframeWebStorageSupported(c,e){const s=this.iframes[c._key()];s.send(on,{type:on},(s=>{var n;const t=null===(n=null===s||void 0===s?void 0:s[0])||void 0===n?void 0:n[on];void 0!==t&&e(!!t),m(c,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(c){const e=c._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Os(c)),this.originValidationPromises[e]}get _shouldInitProactively(){return Cc()||mc()||vc()}}const fn=ln;class un{constructor(c){this.factorId=c}_process(c,e,s){switch(e.type){case"enroll":return this._finalizeEnroll(c,e.credential,s);case"signin":return this._finalizeSignIn(c,e.credential);default:return v("unexpected MultiFactorSessionType")}}}class hn extends un{constructor(c){super("phone"),this.credential=c}static _fromCredential(c){return new hn(c)}_finalizeEnroll(c,e,s){return ge(c,{idToken:e,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(c,e){return ns(c,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class mn{constructor(){}static assertion(c){return hn._fromCredential(c)}}mn.FACTOR_ID="phone";var pn="@firebase/auth",dn="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(c){this.auth=c,this.internalListeners=new Map}getUid(){var c;return this.assertAuthConfigured(),(null===(c=this.auth.currentUser)||void 0===c?void 0:c.uid)||null}async getToken(c){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(c);return{accessToken:e}}addAuthTokenListener(c){if(this.assertAuthConfigured(),this.internalListeners.has(c))return;const e=this.auth.onIdTokenChanged((e=>{c((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(c,e),this.updateProactiveRefresh()}removeAuthTokenListener(c){this.assertAuthConfigured();const e=this.internalListeners.get(c);e&&(this.internalListeners.delete(c),e(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vn(c){(0,t.Xd)(new r.wA("auth",((e,{options:s})=>{const n=e.getProvider("app").getImmediate(),t=e.getProvider("heartbeat"),{apiKey:a,authDomain:i}=n.options;return((e,n)=>{V(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),V(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:e.name});const t={apiKey:a,authDomain:i,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bc(c)},r=new xc(e,n,t);return b(r,s),r})(n,t)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((c,e,s)=>{const n=c.getProvider("auth-internal");n.initialize()}))),(0,t.Xd)(new r.wA("auth-internal",(c=>{const e=Nc(c.getProvider("auth").getImmediate());return(c=>new zn(c))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,t.KN)(pn,dn,Hn(c)),(0,t.KN)(pn,dn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=300,Mn=(0,n.Pz)("authIdTokenMaxAge")||vn;let gn=null;const Cn=c=>async e=>{const s=e&&await e.getIdTokenResult(),n=s&&((new Date).getTime()-Date.parse(s.issuedAtTime))/1e3;if(n&&n>Mn)return;const t=null===s||void 0===s?void 0:s.token;gn!==t&&(gn=t,await fetch(c,{method:t?"POST":"DELETE",headers:t?{Authorization:`Bearer ${t}`}:{}}))};function Ln(c=(0,t.Mq)()){const e=(0,t.qX)(c,"auth");if(e.isInitialized())return e.getImmediate();const s=L(c,{popupRedirectResolver:fn,persistence:[es,we,ke]}),a=(0,n.Pz)("authTokenSyncURL");if(a){const c=Cn(a);He(s,c,(()=>c(s.currentUser))),ze(s,(e=>c(e)))}const i=(0,n.q4)("auth");return i&&Sc(s,`http://${i}`),s}Vn("Browser")},223:function(c,e,s){"use strict";s.d(e,{BH:function(){return H},L:function(){return r},LL:function(){return N},Pz:function(){return z},ZR:function(){return x},aH:function(){return d},b$:function(){return g},eu:function(){return b},hl:function(){return L},m9:function(){return F},ne:function(){return I},pd:function(){return O},q4:function(){return p},ru:function(){return M},tV:function(){return o},uI:function(){return v},vZ:function(){return _},w1:function(){return C},xO:function(){return E},xb:function(){return k},z$:function(){return V},zd:function(){return T}});s(2801),s(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(c){const e=[];let s=0;for(let n=0;n<c.length;n++){let t=c.charCodeAt(n);t<128?e[s++]=t:t<2048?(e[s++]=t>>6|192,e[s++]=63&t|128):55296===(64512&t)&&n+1<c.length&&56320===(64512&c.charCodeAt(n+1))?(t=65536+((1023&t)<<10)+(1023&c.charCodeAt(++n)),e[s++]=t>>18|240,e[s++]=t>>12&63|128,e[s++]=t>>6&63|128,e[s++]=63&t|128):(e[s++]=t>>12|224,e[s++]=t>>6&63|128,e[s++]=63&t|128)}return e},t=function(c){const e=[];let s=0,n=0;while(s<c.length){const t=c[s++];if(t<128)e[n++]=String.fromCharCode(t);else if(t>191&&t<224){const a=c[s++];e[n++]=String.fromCharCode((31&t)<<6|63&a)}else if(t>239&&t<365){const a=c[s++],i=c[s++],r=c[s++],o=((7&t)<<18|(63&a)<<12|(63&i)<<6|63&r)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const a=c[s++],i=c[s++];e[n++]=String.fromCharCode((15&t)<<12|(63&a)<<6|63&i)}}return e.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<c.length;t+=3){const e=c[t],a=t+1<c.length,i=a?c[t+1]:0,r=t+2<c.length,o=r?c[t+2]:0,l=e>>2,f=(3&e)<<4|i>>4;let u=(15&i)<<2|o>>6,h=63&o;r||(h=64,a||(u=64)),n.push(s[l],s[f],s[u],s[h])}return n.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(n(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):t(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<c.length;){const e=s[c.charAt(t++)],a=t<c.length,i=a?s[c.charAt(t)]:0;++t;const r=t<c.length,o=r?s[c.charAt(t)]:64;++t;const l=t<c.length,f=l?s[c.charAt(t)]:64;if(++t,null==e||null==i||null==o||null==f)throw Error();const u=e<<2|i>>4;if(n.push(u),64!==o){const c=i<<4&240|o>>2;if(n.push(c),64!==f){const c=o<<6&192|f;n.push(c)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}},i=function(c){const e=n(c);return a.encodeByteArray(e,!0)},r=function(c){return i(c).replace(/\./g,"")},o=function(c){try{return a.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof s.g)return s.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>l().__FIREBASE_DEFAULTS__,u=()=>{if("undefined"===typeof process)return;const c={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return c?JSON.parse(c):void 0},h=()=>{if("undefined"===typeof document)return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(s){return}const e=c&&o(c[1]);return e&&JSON.parse(e)},m=()=>{try{return f()||u()||h()}catch(c){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`)}},p=c=>{var e,s;return null===(s=null===(e=m())||void 0===e?void 0:e.emulatorHosts)||void 0===s?void 0:s[c]},d=()=>{var c;return null===(c=m())||void 0===c?void 0:c.config},z=c=>{var e;return null===(e=m())||void 0===e?void 0:e[`_${c}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((c,e)=>{this.resolve=c,this.reject=e}))}wrapCallback(c){return(e,s)=>{e?this.reject(e):this.resolve(s),"function"===typeof c&&(this.promise.catch((()=>{})),1===c.length?c(e):c(e,s))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())}function M(){const c="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof c&&void 0!==c.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const c=V();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function L(){try{return"object"===typeof indexedDB}catch(c){return!1}}function b(){return new Promise(((c,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(n);t.onsuccess=()=>{t.result.close(),s||self.indexedDB.deleteDatabase(n),c(!0)},t.onupgradeneeded=()=>{s=!1},t.onerror=()=>{var c;e((null===(c=t.error)||void 0===c?void 0:c.message)||"")}}catch(s){e(s)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class x extends Error{constructor(c,e,s){super(e),this.code=c,this.customData=s,this.name=y,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(c,e,s){this.service=c,this.serviceName=e,this.errors=s}create(c,...e){const s=e[0]||{},n=`${this.service}/${c}`,t=this.errors[c],a=t?w(t,s):"Error",i=`${this.serviceName}: ${a} (${n}).`,r=new x(n,i,s);return r}}function w(c,e){return c.replace(S,((c,s)=>{const n=e[s];return null!=n?String(n):`<${s}?>`}))}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function _(c,e){if(c===e)return!0;const s=Object.keys(c),n=Object.keys(e);for(const t of s){if(!n.includes(t))return!1;const s=c[t],a=e[t];if(A(s)&&A(a)){if(!_(s,a))return!1}else if(s!==a)return!1}for(const t of n)if(!s.includes(t))return!1;return!0}function A(c){return null!==c&&"object"===typeof c}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(c){const e=[];for(const[s,n]of Object.entries(c))Array.isArray(n)?n.forEach((c=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(c))})):e.push(encodeURIComponent(s)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function T(c){const e={},s=c.replace(/^\?/,"").split("&");return s.forEach((c=>{if(c){const[s,n]=c.split("=");e[decodeURIComponent(s)]=decodeURIComponent(n)}})),e}function O(c){const e=c.indexOf("?");if(!e)return"";const s=c.indexOf("#",e);return c.substring(e,s>0?s:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(c,e){const s=new R(c,e);return s.subscribe.bind(s)}class R{constructor(c,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{c(this)})).catch((c=>{this.error(c)}))}next(c){this.forEachObserver((e=>{e.next(c)}))}error(c){this.forEachObserver((e=>{e.error(c)})),this.close(c)}complete(){this.forEachObserver((c=>{c.complete()})),this.close()}subscribe(c,e,s){let n;if(void 0===c&&void 0===e&&void 0===s)throw new Error("Missing Observer.");n=P(c,["next","error","complete"])?c:{next:c,error:e,complete:s},void 0===n.next&&(n.next=D),void 0===n.error&&(n.error=D),void 0===n.complete&&(n.complete=D);const t=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(c){}})),this.observers.push(n),t}unsubscribeOne(c){void 0!==this.observers&&void 0!==this.observers[c]&&(delete this.observers[c],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(c){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,c)}sendOne(c,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[c])try{e(this.observers[c])}catch(s){"undefined"!==typeof console&&console.error&&console.error(s)}}))}close(c){this.finalized||(this.finalized=!0,void 0!==c&&(this.finalError=c),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(c,e){if("object"!==typeof c||null===c)return!1;for(const s of e)if(s in c&&"function"===typeof c[s])return!0;return!1}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(c){return c&&c._delegate?c._delegate:c}},7749:function(c,e,s){"use strict";s.d(e,{GN:function(){return S}});s(7658);var n=s(3494),t=s(3396);function a(c,e){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable}))),s.push.apply(s,n)}return s}function i(c){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){o(c,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))}))}return c}function r(c){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},r(c)}function o(c,e,s){return e in c?Object.defineProperty(c,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[e]=s,c}function l(c,e){if(null==c)return{};var s,n,t={},a=Object.keys(c);for(n=0;n<a.length;n++)s=a[n],e.indexOf(s)>=0||(t[s]=c[s]);return t}function f(c,e){if(null==c)return{};var s,n,t=l(c,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);for(n=0;n<a.length;n++)s=a[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(c,s)&&(t[s]=c[s])}return t}function u(c){return h(c)||m(c)||p(c)||z()}function h(c){if(Array.isArray(c))return d(c)}function m(c){if("undefined"!==typeof Symbol&&null!=c[Symbol.iterator]||null!=c["@@iterator"])return Array.from(c)}function p(c,e){if(c){if("string"===typeof c)return d(c,e);var s=Object.prototype.toString.call(c).slice(8,-1);return"Object"===s&&c.constructor&&(s=c.constructor.name),"Map"===s||"Set"===s?Array.from(c):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?d(c,e):void 0}}function d(c,e){(null==e||e>c.length)&&(e=c.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=c[s];return n}function z(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var H="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof s.g?s.g:"undefined"!==typeof self?self:{},V={exports:{}};(function(c){(function(e){var s=function(c,e,n){if(!l(e)||u(e)||h(e)||m(e)||o(e))return e;var t,a=0,i=0;if(f(e))for(t=[],i=e.length;a<i;a++)t.push(s(c,e[a],n));else for(var r in t={},e)Object.prototype.hasOwnProperty.call(e,r)&&(t[c(r,n)]=s(c,e[r],n));return t},n=function(c,e){e=e||{};var s=e.separator||"_",n=e.split||/(?=[A-Z])/;return c.split(n).join(s)},t=function(c){return p(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,(function(c,e){return e?e.toUpperCase():""})),c.substr(0,1).toLowerCase()+c.substr(1))},a=function(c){var e=t(c);return e.substr(0,1).toUpperCase()+e.substr(1)},i=function(c,e){return n(c,e).toLowerCase()},r=Object.prototype.toString,o=function(c){return"function"===typeof c},l=function(c){return c===Object(c)},f=function(c){return"[object Array]"==r.call(c)},u=function(c){return"[object Date]"==r.call(c)},h=function(c){return"[object RegExp]"==r.call(c)},m=function(c){return"[object Boolean]"==r.call(c)},p=function(c){return c-=0,c===c},d=function(c,e){var s=e&&"process"in e?e.process:e;return"function"!==typeof s?c:function(e,n){return s(e,c,n)}},z={camelize:t,decamelize:i,pascalize:a,depascalize:i,camelizeKeys:function(c,e){return s(d(t,e),c)},decamelizeKeys:function(c,e){return s(d(i,e),c,e)},pascalizeKeys:function(c,e){return s(d(a,e),c)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=z:e.humps=z})(H)})(V);var v=V.exports,M=["class","style"];function g(c){return c.split(";").map((function(c){return c.trim()})).filter((function(c){return c})).reduce((function(c,e){var s=e.indexOf(":"),n=v.camelize(e.slice(0,s)),t=e.slice(s+1).trim();return c[n]=t,c}),{})}function C(c){return c.split(/\s+/).reduce((function(c,e){return c[e]=!0,c}),{})}function L(c){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof c)return c;var n=(c.children||[]).map((function(c){return L(c)})),a=Object.keys(c.attributes||{}).reduce((function(e,s){var n=c.attributes[s];switch(s){case"class":e.class=C(n);break;case"style":e.style=g(n);break;default:e.attrs[s]=n}return e}),{attrs:{},class:{},style:{}});s.class;var r=s.style,o=void 0===r?{}:r,l=f(s,M);return(0,t.h)(c.tag,i(i(i({},e),{},{class:a.class,style:i(i({},a.style),o)},a.attrs),l),n)}var b=!1;try{b=!0}catch(k){}function y(){var c;!b&&console&&"function"===typeof console.error&&(c=console).error.apply(c,arguments)}function x(c,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?o({},c,e):{}}function N(c){var e,s=(e={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":!0===c.flip,"fa-flip-horizontal":"horizontal"===c.flip||"both"===c.flip,"fa-flip-vertical":"vertical"===c.flip||"both"===c.flip},o(e,"fa-".concat(c.size),null!==c.size),o(e,"fa-rotate-".concat(c.rotation),null!==c.rotation),o(e,"fa-pull-".concat(c.pull),null!==c.pull),o(e,"fa-swap-opacity",c.swapOpacity),o(e,"fa-bounce",c.bounce),o(e,"fa-shake",c.shake),o(e,"fa-beat",c.beat),o(e,"fa-fade",c.fade),o(e,"fa-beat-fade",c.beatFade),o(e,"fa-flash",c.flash),o(e,"fa-spin-pulse",c.spinPulse),o(e,"fa-spin-reverse",c.spinReverse),e);return Object.keys(s).map((function(c){return s[c]?c:null})).filter((function(c){return c}))}function w(c){return c&&"object"===r(c)&&c.prefix&&c.iconName&&c.icon?c:n.Qc.icon?n.Qc.icon(c):null===c?null:"object"===r(c)&&c.prefix&&c.iconName?c:Array.isArray(c)&&2===c.length?{prefix:c[0],iconName:c[1]}:"string"===typeof c?{prefix:"fas",iconName:c}:void 0}var S=(0,t.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(c){return[!0,!1,"horizontal","vertical","both"].indexOf(c)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(c){return["right","left"].indexOf(c)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(c){return[90,180,270].indexOf(Number.parseInt(c,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(c){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(c)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(c,e){var s=e.attrs,a=(0,t.Fl)((function(){return w(c.icon)})),r=(0,t.Fl)((function(){return x("classes",N(c))})),o=(0,t.Fl)((function(){return x("transform","string"===typeof c.transform?n.Qc.transform(c.transform):c.transform)})),l=(0,t.Fl)((function(){return x("mask",w(c.mask))})),f=(0,t.Fl)((function(){return(0,n.qv)(a.value,i(i(i(i({},r.value),o.value),l.value),{},{symbol:c.symbol,title:c.title}))}));(0,t.YP)(f,(function(c){if(!c)return y("Could not find one or more icon(s)",a.value,l.value)}),{immediate:!0});var u=(0,t.Fl)((function(){return f.value?L(f.value.abstract[0],{},s):null}));return function(){return u.value}}});(0,t.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(c,e){var s=e.slots,a=n.vc.familyPrefix,i=(0,t.Fl)((function(){return["".concat(a,"-layers")].concat(u(c.fixedWidth?["".concat(a,"-fw")]:[]))}));return function(){return(0,t.h)("div",{class:i.value},s.default?s.default():[])}}}),(0,t.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(c){return["bottom-left","bottom-right","top-left","top-right"].indexOf(c)>-1}}},setup:function(c,e){var s=e.attrs,a=n.vc.familyPrefix,r=(0,t.Fl)((function(){return x("classes",[].concat(u(c.counter?["".concat(a,"-layers-counter")]:[]),u(c.position?["".concat(a,"-layers-").concat(c.position)]:[])))})),o=(0,t.Fl)((function(){return x("transform","string"===typeof c.transform?n.Qc.transform(c.transform):c.transform)})),l=(0,t.Fl)((function(){var e=(0,n.fL)(c.value.toString(),i(i({},o.value),r.value)),s=e.abstract;return c.counter&&(s[0].attributes.class=s[0].attributes.class.replace("fa-layers-text","")),s[0]})),f=(0,t.Fl)((function(){return L(l.value,{},s)}));return function(){return f.value}}})},4870:function(c,e,s){"use strict";s.d(e,{B:function(){return i},BK:function(){return Gc},Bj:function(){return a},EB:function(){return l},Fl:function(){return Qc},IU:function(){return Ec},Jd:function(){return x},PG:function(){return Sc},SU:function(){return qc},Um:function(){return xc},Vh:function(){return Kc},WL:function(){return $c},X$:function(){return k},X3:function(){return Ac},XI:function(){return Uc},Xl:function(){return Tc},dq:function(){return Dc},iH:function(){return Fc},j:function(){return w},lk:function(){return N},nZ:function(){return o},qj:function(){return yc},qq:function(){return C},yT:function(){return _c}});s(7658);var n=s(7139);let t;class a{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=t,!c&&t&&(this.index=(t.scopes||(t.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const e=t;try{return t=this,c()}finally{t=e}}else 0}on(){t=this}off(){t=this.parent}stop(c){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!c){const c=this.parent.scopes.pop();c&&c!==this&&(this.parent.scopes[this.index]=c,c.index=this.index)}this.parent=void 0,this._active=!1}}}function i(c){return new a(c)}function r(c,e=t){e&&e.active&&e.effects.push(c)}function o(){return t}function l(c){t&&t.cleanups.push(c)}const f=c=>{const e=new Set(c);return e.w=0,e.n=0,e},u=c=>(c.w&H)>0,h=c=>(c.n&H)>0,m=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=H},p=c=>{const{deps:e}=c;if(e.length){let s=0;for(let n=0;n<e.length;n++){const t=e[n];u(t)&&!h(t)?t.delete(c):e[s++]=t,t.w&=~H,t.n&=~H}e.length=s}},d=new WeakMap;let z=0,H=1;const V=30;let v;const M=Symbol(""),g=Symbol("");class C{constructor(c,e=null,s){this.fn=c,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,r(this,s)}run(){if(!this.active)return this.fn();let c=v,e=b;while(c){if(c===this)return;c=c.parent}try{return this.parent=v,v=this,b=!0,H=1<<++z,z<=V?m(this):L(this),this.fn()}finally{z<=V&&p(this),H=1<<--z,v=this.parent,b=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(L(this),this.onStop&&this.onStop(),this.active=!1)}}function L(c){const{deps:e}=c;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(c);e.length=0}}let b=!0;const y=[];function x(){y.push(b),b=!1}function N(){const c=y.pop();b=void 0===c||c}function w(c,e,s){if(b&&v){let e=d.get(c);e||d.set(c,e=new Map);let n=e.get(s);n||e.set(s,n=f());const t=void 0;S(n,t)}}function S(c,e){let s=!1;z<=V?h(c)||(c.n|=H,s=!u(c)):s=!c.has(v),s&&(c.add(v),v.deps.push(c))}function k(c,e,s,t,a,i){const r=d.get(c);if(!r)return;let o=[];if("clear"===e)o=[...r.values()];else if("length"===s&&(0,n.kJ)(c)){const c=Number(t);r.forEach(((e,s)=>{("length"===s||s>=c)&&o.push(e)}))}else switch(void 0!==s&&o.push(r.get(s)),e){case"add":(0,n.kJ)(c)?(0,n.S0)(s)&&o.push(r.get("length")):(o.push(r.get(M)),(0,n._N)(c)&&o.push(r.get(g)));break;case"delete":(0,n.kJ)(c)||(o.push(r.get(M)),(0,n._N)(c)&&o.push(r.get(g)));break;case"set":(0,n._N)(c)&&o.push(r.get(M));break}if(1===o.length)o[0]&&_(o[0]);else{const c=[];for(const e of o)e&&c.push(...e);_(f(c))}}function _(c,e){const s=(0,n.kJ)(c)?c:[...c];for(const n of s)n.computed&&A(n,e);for(const n of s)n.computed||A(n,e)}function A(c,e){(c!==v||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function E(c,e){var s;return null===(s=d.get(c))||void 0===s?void 0:s.get(e)}const T=(0,n.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((c=>"arguments"!==c&&"caller"!==c)).map((c=>Symbol[c])).filter(n.yk)),I=j(),R=j(!1,!0),P=j(!0),D=F();function F(){const c={};return["includes","indexOf","lastIndexOf"].forEach((e=>{c[e]=function(...c){const s=Ec(this);for(let e=0,t=this.length;e<t;e++)w(s,"get",e+"");const n=s[e](...c);return-1===n||!1===n?s[e](...c.map(Ec)):n}})),["push","pop","shift","unshift","splice"].forEach((e=>{c[e]=function(...c){x();const s=Ec(this)[e].apply(this,c);return N(),s}})),c}function U(c){const e=Ec(this);return w(e,"has",c),e.hasOwnProperty(c)}function j(c=!1,e=!1){return function(s,t,a){if("__v_isReactive"===t)return!c;if("__v_isReadonly"===t)return c;if("__v_isShallow"===t)return e;if("__v_raw"===t&&a===(c?e?Cc:gc:e?Mc:vc).get(s))return s;const i=(0,n.kJ)(s);if(!c){if(i&&(0,n.RI)(D,t))return Reflect.get(D,t,a);if("hasOwnProperty"===t)return U}const r=Reflect.get(s,t,a);return((0,n.yk)(t)?O.has(t):T(t))?r:(c||w(s,"get",t),e?r:Dc(r)?i&&(0,n.S0)(t)?r:r.value:(0,n.Kn)(r)?c?Nc(r):yc(r):r)}}const B=W(),q=W(!0);function W(c=!1){return function(e,s,t,a){let i=e[s];if(kc(i)&&Dc(i)&&!Dc(t))return!1;if(!c&&(_c(t)||kc(t)||(i=Ec(i),t=Ec(t)),!(0,n.kJ)(e)&&Dc(i)&&!Dc(t)))return i.value=t,!0;const r=(0,n.kJ)(e)&&(0,n.S0)(s)?Number(s)<e.length:(0,n.RI)(e,s),o=Reflect.set(e,s,t,a);return e===Ec(a)&&(r?(0,n.aU)(t,i)&&k(e,"set",s,t,i):k(e,"add",s,t)),o}}function $(c,e){const s=(0,n.RI)(c,e),t=c[e],a=Reflect.deleteProperty(c,e);return a&&s&&k(c,"delete",e,void 0,t),a}function G(c,e){const s=Reflect.has(c,e);return(0,n.yk)(e)&&O.has(e)||w(c,"has",e),s}function J(c){return w(c,"iterate",(0,n.kJ)(c)?"length":M),Reflect.ownKeys(c)}const K={get:I,set:B,deleteProperty:$,has:G,ownKeys:J},Y={get:P,set(c,e){return!0},deleteProperty(c,e){return!0}},X=(0,n.l7)({},K,{get:R,set:q}),Q=c=>c,Z=c=>Reflect.getPrototypeOf(c);function cc(c,e,s=!1,n=!1){c=c["__v_raw"];const t=Ec(c),a=Ec(e);s||(e!==a&&w(t,"get",e),w(t,"get",a));const{has:i}=Z(t),r=n?Q:s?Ic:Oc;return i.call(t,e)?r(c.get(e)):i.call(t,a)?r(c.get(a)):void(c!==t&&c.get(e))}function ec(c,e=!1){const s=this["__v_raw"],n=Ec(s),t=Ec(c);return e||(c!==t&&w(n,"has",c),w(n,"has",t)),c===t?s.has(c):s.has(c)||s.has(t)}function sc(c,e=!1){return c=c["__v_raw"],!e&&w(Ec(c),"iterate",M),Reflect.get(c,"size",c)}function nc(c){c=Ec(c);const e=Ec(this),s=Z(e),n=s.has.call(e,c);return n||(e.add(c),k(e,"add",c,c)),this}function tc(c,e){e=Ec(e);const s=Ec(this),{has:t,get:a}=Z(s);let i=t.call(s,c);i||(c=Ec(c),i=t.call(s,c));const r=a.call(s,c);return s.set(c,e),i?(0,n.aU)(e,r)&&k(s,"set",c,e,r):k(s,"add",c,e),this}function ac(c){const e=Ec(this),{has:s,get:n}=Z(e);let t=s.call(e,c);t||(c=Ec(c),t=s.call(e,c));const a=n?n.call(e,c):void 0,i=e.delete(c);return t&&k(e,"delete",c,void 0,a),i}function ic(){const c=Ec(this),e=0!==c.size,s=void 0,n=c.clear();return e&&k(c,"clear",void 0,void 0,s),n}function rc(c,e){return function(s,n){const t=this,a=t["__v_raw"],i=Ec(a),r=e?Q:c?Ic:Oc;return!c&&w(i,"iterate",M),a.forEach(((c,e)=>s.call(n,r(c),r(e),t)))}}function oc(c,e,s){return function(...t){const a=this["__v_raw"],i=Ec(a),r=(0,n._N)(i),o="entries"===c||c===Symbol.iterator&&r,l="keys"===c&&r,f=a[c](...t),u=s?Q:e?Ic:Oc;return!e&&w(i,"iterate",l?g:M),{next(){const{value:c,done:e}=f.next();return e?{value:c,done:e}:{value:o?[u(c[0]),u(c[1])]:u(c),done:e}},[Symbol.iterator](){return this}}}}function lc(c){return function(...e){return"delete"!==c&&this}}function fc(){const c={get(c){return cc(this,c)},get size(){return sc(this)},has:ec,add:nc,set:tc,delete:ac,clear:ic,forEach:rc(!1,!1)},e={get(c){return cc(this,c,!1,!0)},get size(){return sc(this)},has:ec,add:nc,set:tc,delete:ac,clear:ic,forEach:rc(!1,!0)},s={get(c){return cc(this,c,!0)},get size(){return sc(this,!0)},has(c){return ec.call(this,c,!0)},add:lc("add"),set:lc("set"),delete:lc("delete"),clear:lc("clear"),forEach:rc(!0,!1)},n={get(c){return cc(this,c,!0,!0)},get size(){return sc(this,!0)},has(c){return ec.call(this,c,!0)},add:lc("add"),set:lc("set"),delete:lc("delete"),clear:lc("clear"),forEach:rc(!0,!0)},t=["keys","values","entries",Symbol.iterator];return t.forEach((t=>{c[t]=oc(t,!1,!1),s[t]=oc(t,!0,!1),e[t]=oc(t,!1,!0),n[t]=oc(t,!0,!0)})),[c,s,e,n]}const[uc,hc,mc,pc]=fc();function dc(c,e){const s=e?c?pc:mc:c?hc:uc;return(e,t,a)=>"__v_isReactive"===t?!c:"__v_isReadonly"===t?c:"__v_raw"===t?e:Reflect.get((0,n.RI)(s,t)&&t in e?s:e,t,a)}const zc={get:dc(!1,!1)},Hc={get:dc(!1,!0)},Vc={get:dc(!0,!1)};const vc=new WeakMap,Mc=new WeakMap,gc=new WeakMap,Cc=new WeakMap;function Lc(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bc(c){return c["__v_skip"]||!Object.isExtensible(c)?0:Lc((0,n.W7)(c))}function yc(c){return kc(c)?c:wc(c,!1,K,zc,vc)}function xc(c){return wc(c,!1,X,Hc,Mc)}function Nc(c){return wc(c,!0,Y,Vc,gc)}function wc(c,e,s,t,a){if(!(0,n.Kn)(c))return c;if(c["__v_raw"]&&(!e||!c["__v_isReactive"]))return c;const i=a.get(c);if(i)return i;const r=bc(c);if(0===r)return c;const o=new Proxy(c,2===r?t:s);return a.set(c,o),o}function Sc(c){return kc(c)?Sc(c["__v_raw"]):!(!c||!c["__v_isReactive"])}function kc(c){return!(!c||!c["__v_isReadonly"])}function _c(c){return!(!c||!c["__v_isShallow"])}function Ac(c){return Sc(c)||kc(c)}function Ec(c){const e=c&&c["__v_raw"];return e?Ec(e):c}function Tc(c){return(0,n.Nj)(c,"__v_skip",!0),c}const Oc=c=>(0,n.Kn)(c)?yc(c):c,Ic=c=>(0,n.Kn)(c)?Nc(c):c;function Rc(c){b&&v&&(c=Ec(c),S(c.dep||(c.dep=f())))}function Pc(c,e){c=Ec(c);const s=c.dep;s&&_(s)}function Dc(c){return!(!c||!0!==c.__v_isRef)}function Fc(c){return jc(c,!1)}function Uc(c){return jc(c,!0)}function jc(c,e){return Dc(c)?c:new Bc(c,e)}class Bc{constructor(c,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?c:Ec(c),this._value=e?c:Oc(c)}get value(){return Rc(this),this._value}set value(c){const e=this.__v_isShallow||_c(c)||kc(c);c=e?c:Ec(c),(0,n.aU)(c,this._rawValue)&&(this._rawValue=c,this._value=e?c:Oc(c),Pc(this,c))}}function qc(c){return Dc(c)?c.value:c}const Wc={get:(c,e,s)=>qc(Reflect.get(c,e,s)),set:(c,e,s,n)=>{const t=c[e];return Dc(t)&&!Dc(s)?(t.value=s,!0):Reflect.set(c,e,s,n)}};function $c(c){return Sc(c)?c:new Proxy(c,Wc)}function Gc(c){const e=(0,n.kJ)(c)?new Array(c.length):{};for(const s in c)e[s]=Kc(c,s);return e}class Jc{constructor(c,e,s){this._object=c,this._key=e,this._defaultValue=s,this.__v_isRef=!0}get value(){const c=this._object[this._key];return void 0===c?this._defaultValue:c}set value(c){this._object[this._key]=c}get dep(){return E(Ec(this._object),this._key)}}function Kc(c,e,s){const n=c[e];return Dc(n)?n:new Jc(c,e,s)}var Yc;class Xc{constructor(c,e,s,n){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Yc]=!1,this._dirty=!0,this.effect=new C(c,(()=>{this._dirty||(this._dirty=!0,Pc(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=s}get value(){const c=Ec(this);return Rc(c),!c._dirty&&c._cacheable||(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}function Qc(c,e,s=!1){let t,a;const i=(0,n.mf)(c);i?(t=c,a=n.dG):(t=c.get,a=c.set);const r=new Xc(t,a,i||!a,s);return r}Yc="__v_isReadonly"},3396:function(c,e,s){"use strict";s.d(e,{$d:function(){return i},Ah:function(){return yc},FN:function(){return fs},Fl:function(){return xs},HY:function(){return ke},JJ:function(){return q},Ko:function(){return Rc},P$:function(){return ec},Q6:function(){return rc},U2:function(){return nc},Uk:function(){return Ze},Us:function(){return be},Wm:function(){return Ke},Y3:function(){return V},Y8:function(){return Q},YP:function(){return G},_:function(){return Je},aZ:function(){return oc},bv:function(){return gc},f3:function(){return W},h:function(){return Ns},iD:function(){return Ue},ic:function(){return Lc},j4:function(){return je},kq:function(){return cs},nK:function(){return ic},up:function(){return Ec},w5:function(){return O},wg:function(){return Ie},wy:function(){return kc}});s(7658),s(541);var n=s(4870),t=s(7139);function a(c,e,s,n){let t;try{t=n?c(...n):c()}catch(a){r(a,e,s)}return t}function i(c,e,s,n){if((0,t.mf)(c)){const i=a(c,e,s,n);return i&&(0,t.tI)(i)&&i.catch((c=>{r(c,e,s)})),i}const o=[];for(let t=0;t<c.length;t++)o.push(i(c[t],e,s,n));return o}function r(c,e,s,n=!0){const t=e?e.vnode:null;if(e){let n=e.parent;const t=e.proxy,i=s;while(n){const e=n.ec;if(e)for(let s=0;s<e.length;s++)if(!1===e[s](c,t,i))return;n=n.parent}const r=e.appContext.config.errorHandler;if(r)return void a(r,null,10,[c,t,i])}o(c,s,t,n)}function o(c,e,s,n=!0){console.error(c)}let l=!1,f=!1;const u=[];let h=0;const m=[];let p=null,d=0;const z=Promise.resolve();let H=null;function V(c){const e=H||z;return c?e.then(this?c.bind(this):c):e}function v(c){let e=h+1,s=u.length;while(e<s){const n=e+s>>>1,t=x(u[n]);t<c?e=n+1:s=n}return e}function M(c){u.length&&u.includes(c,l&&c.allowRecurse?h+1:h)||(null==c.id?u.push(c):u.splice(v(c.id),0,c),g())}function g(){l||f||(f=!0,H=z.then(w))}function C(c){const e=u.indexOf(c);e>h&&u.splice(e,1)}function L(c){(0,t.kJ)(c)?m.push(...c):p&&p.includes(c,c.allowRecurse?d+1:d)||m.push(c),g()}function b(c,e=(l?h+1:0)){for(0;e<u.length;e++){const c=u[e];c&&c.pre&&(u.splice(e,1),e--,c())}}function y(c){if(m.length){const c=[...new Set(m)];if(m.length=0,p)return void p.push(...c);for(p=c,p.sort(((c,e)=>x(c)-x(e))),d=0;d<p.length;d++)p[d]();p=null,d=0}}const x=c=>null==c.id?1/0:c.id,N=(c,e)=>{const s=x(c)-x(e);if(0===s){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return s};function w(c){f=!1,l=!0,u.sort(N);t.dG;try{for(h=0;h<u.length;h++){const c=u[h];c&&!1!==c.active&&a(c,null,14)}}finally{h=0,u.length=0,y(c),l=!1,H=null,(u.length||m.length)&&w(c)}}new Set;new Map;function S(c,e,...s){if(c.isUnmounted)return;const n=c.vnode.props||t.kT;let a=s;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const c=`${"modelValue"===o?"model":o}Modifiers`,{number:e,trim:i}=n[c]||t.kT;i&&(a=s.map((c=>(0,t.HD)(c)?c.trim():c))),e&&(a=s.map(t.h5))}let l;let f=n[l=(0,t.hR)(e)]||n[l=(0,t.hR)((0,t._A)(e))];!f&&r&&(f=n[l=(0,t.hR)((0,t.rs)(e))]),f&&i(f,c,6,a);const u=n[l+"Once"];if(u){if(c.emitted){if(c.emitted[l])return}else c.emitted={};c.emitted[l]=!0,i(u,c,6,a)}}function k(c,e,s=!1){const n=e.emitsCache,a=n.get(c);if(void 0!==a)return a;const i=c.emits;let r={},o=!1;if(!(0,t.mf)(c)){const n=c=>{const s=k(c,e,!0);s&&(o=!0,(0,t.l7)(r,s))};!s&&e.mixins.length&&e.mixins.forEach(n),c.extends&&n(c.extends),c.mixins&&c.mixins.forEach(n)}return i||o?((0,t.kJ)(i)?i.forEach((c=>r[c]=null)):(0,t.l7)(r,i),(0,t.Kn)(c)&&n.set(c,r),r):((0,t.Kn)(c)&&n.set(c,null),null)}function _(c,e){return!(!c||!(0,t.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,t.RI)(c,e[0].toLowerCase()+e.slice(1))||(0,t.RI)(c,(0,t.rs)(e))||(0,t.RI)(c,e))}let A=null,E=null;function T(c){const e=A;return A=c,E=c&&c.type.__scopeId||null,e}function O(c,e=A,s){if(!e)return c;if(c._n)return c;const n=(...s)=>{n._d&&De(-1);const t=T(e);let a;try{a=c(...s)}finally{T(t),n._d&&De(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function I(c){const{type:e,vnode:s,proxy:n,withProxy:a,props:i,propsOptions:[o],slots:l,attrs:f,emit:u,render:h,renderCache:m,data:p,setupState:d,ctx:z,inheritAttrs:H}=c;let V,v;const M=T(c);try{if(4&s.shapeFlag){const c=a||n;V=es(h.call(c,c,m,i,d,p,z)),v=f}else{const c=e;0,V=es(c.length>1?c(i,{attrs:f,slots:l,emit:u}):c(i,null)),v=e.props?f:R(f)}}catch(C){Te.length=0,r(C,c,1),V=Ke(Ae)}let g=V;if(v&&!1!==H){const c=Object.keys(v),{shapeFlag:e}=g;c.length&&7&e&&(o&&c.some(t.tR)&&(v=P(v,o)),g=Qe(g,v))}return s.dirs&&(g=Qe(g),g.dirs=g.dirs?g.dirs.concat(s.dirs):s.dirs),s.transition&&(g.transition=s.transition),V=g,T(M),V}const R=c=>{let e;for(const s in c)("class"===s||"style"===s||(0,t.F7)(s))&&((e||(e={}))[s]=c[s]);return e},P=(c,e)=>{const s={};for(const n in c)(0,t.tR)(n)&&n.slice(9)in e||(s[n]=c[n]);return s};function D(c,e,s){const{props:n,children:t,component:a}=c,{props:i,children:r,patchFlag:o}=e,l=a.emitsOptions;if(e.dirs||e.transition)return!0;if(!(s&&o>=0))return!(!t&&!r||r&&r.$stable)||n!==i&&(n?!i||F(n,i,l):!!i);if(1024&o)return!0;if(16&o)return n?F(n,i,l):!!i;if(8&o){const c=e.dynamicProps;for(let e=0;e<c.length;e++){const s=c[e];if(i[s]!==n[s]&&!_(l,s))return!0}}return!1}function F(c,e,s){const n=Object.keys(e);if(n.length!==Object.keys(c).length)return!0;for(let t=0;t<n.length;t++){const a=n[t];if(e[a]!==c[a]&&!_(s,a))return!0}return!1}function U({vnode:c,parent:e},s){while(e&&e.subTree===c)(c=e.vnode).el=s,e=e.parent}const j=c=>c.__isSuspense;function B(c,e){e&&e.pendingBranch?(0,t.kJ)(c)?e.effects.push(...c):e.effects.push(c):L(c)}function q(c,e){if(ls){let s=ls.provides;const n=ls.parent&&ls.parent.provides;n===s&&(s=ls.provides=Object.create(n)),s[c]=e}else 0}function W(c,e,s=!1){const n=ls||A;if(n){const a=null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(a&&c in a)return a[c];if(arguments.length>1)return s&&(0,t.mf)(e)?e.call(n.proxy):e}else 0}const $={};function G(c,e,s){return J(c,e,s)}function J(c,e,{immediate:s,deep:r,flush:o,onTrack:l,onTrigger:f}=t.kT){const u=(0,n.nZ)()===(null===ls||void 0===ls?void 0:ls.scope)?ls:null;let h,m,p=!1,d=!1;if((0,n.dq)(c)?(h=()=>c.value,p=(0,n.yT)(c)):(0,n.PG)(c)?(h=()=>c,r=!0):(0,t.kJ)(c)?(d=!0,p=c.some((c=>(0,n.PG)(c)||(0,n.yT)(c))),h=()=>c.map((c=>(0,n.dq)(c)?c.value:(0,n.PG)(c)?X(c):(0,t.mf)(c)?a(c,u,2):void 0))):h=(0,t.mf)(c)?e?()=>a(c,u,2):()=>{if(!u||!u.isUnmounted)return m&&m(),i(c,u,3,[H])}:t.dG,e&&r){const c=h;h=()=>X(c())}let z,H=c=>{m=C.onStop=()=>{a(c,u,4)}};if(zs){if(H=t.dG,e?s&&i(e,u,3,[h(),d?[]:void 0,H]):h(),"sync"!==o)return t.dG;{const c=Ss();z=c.__watcherHandles||(c.__watcherHandles=[])}}let V=d?new Array(c.length).fill($):$;const v=()=>{if(C.active)if(e){const c=C.run();(r||p||(d?c.some(((c,e)=>(0,t.aU)(c,V[e]))):(0,t.aU)(c,V)))&&(m&&m(),i(e,u,3,[c,V===$?void 0:d&&V[0]===$?[]:V,H]),V=c)}else C.run()};let g;v.allowRecurse=!!e,"sync"===o?g=v:"post"===o?g=()=>Le(v,u&&u.suspense):(v.pre=!0,u&&(v.id=u.uid),g=()=>M(v));const C=new n.qq(h,g);e?s?v():V=C.run():"post"===o?Le(C.run.bind(C),u&&u.suspense):C.run();const L=()=>{C.stop(),u&&u.scope&&(0,t.Od)(u.scope.effects,C)};return z&&z.push(L),L}function K(c,e,s){const n=this.proxy,a=(0,t.HD)(c)?c.includes(".")?Y(n,c):()=>n[c]:c.bind(n,n);let i;(0,t.mf)(e)?i=e:(i=e.handler,s=e);const r=ls;us(this);const o=J(a,i.bind(n),s);return r?us(r):hs(),o}function Y(c,e){const s=e.split(".");return()=>{let e=c;for(let c=0;c<s.length&&e;c++)e=e[s[c]];return e}}function X(c,e){if(!(0,t.Kn)(c)||c["__v_skip"])return c;if(e=e||new Set,e.has(c))return c;if(e.add(c),(0,n.dq)(c))X(c.value,e);else if((0,t.kJ)(c))for(let s=0;s<c.length;s++)X(c[s],e);else if((0,t.DM)(c)||(0,t._N)(c))c.forEach((c=>{X(c,e)}));else if((0,t.PO)(c))for(const s in c)X(c[s],e);return c}function Q(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gc((()=>{c.isMounted=!0})),bc((()=>{c.isUnmounting=!0})),c}const Z=[Function,Array],cc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(c,{slots:e}){const s=fs(),t=Q();let a;return()=>{const i=e.default&&rc(e.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){let c=!1;for(const e of i)if(e.type!==Ae){0,r=e,c=!0;break}}const o=(0,n.IU)(c),{mode:l}=o;if(t.isLeaving)return tc(r);const f=ac(r);if(!f)return tc(r);const u=nc(f,o,t,s);ic(f,u);const h=s.subTree,m=h&&ac(h);let p=!1;const{getTransitionKey:d}=f.type;if(d){const c=d();void 0===a?a=c:c!==a&&(a=c,p=!0)}if(m&&m.type!==Ae&&(!qe(f,m)||p)){const c=nc(m,o,t,s);if(ic(m,c),"out-in"===l)return t.isLeaving=!0,c.afterLeave=()=>{t.isLeaving=!1,!1!==s.update.active&&s.update()},tc(r);"in-out"===l&&f.type!==Ae&&(c.delayLeave=(c,e,s)=>{const n=sc(t,m);n[String(m.key)]=m,c._leaveCb=()=>{e(),c._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=s})}return r}}},ec=cc;function sc(c,e){const{leavingVNodes:s}=c;let n=s.get(e.type);return n||(n=Object.create(null),s.set(e.type,n)),n}function nc(c,e,s,n){const{appear:a,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:m,onLeave:p,onAfterLeave:d,onLeaveCancelled:z,onBeforeAppear:H,onAppear:V,onAfterAppear:v,onAppearCancelled:M}=e,g=String(c.key),C=sc(s,c),L=(c,e)=>{c&&i(c,n,9,e)},b=(c,e)=>{const s=e[1];L(c,e),(0,t.kJ)(c)?c.every((c=>c.length<=1))&&s():c.length<=1&&s()},y={mode:r,persisted:o,beforeEnter(e){let n=l;if(!s.isMounted){if(!a)return;n=H||l}e._leaveCb&&e._leaveCb(!0);const t=C[g];t&&qe(c,t)&&t.el._leaveCb&&t.el._leaveCb(),L(n,[e])},enter(c){let e=f,n=u,t=h;if(!s.isMounted){if(!a)return;e=V||f,n=v||u,t=M||h}let i=!1;const r=c._enterCb=e=>{i||(i=!0,L(e?t:n,[c]),y.delayedLeave&&y.delayedLeave(),c._enterCb=void 0)};e?b(e,[c,r]):r()},leave(e,n){const t=String(c.key);if(e._enterCb&&e._enterCb(!0),s.isUnmounting)return n();L(m,[e]);let a=!1;const i=e._leaveCb=s=>{a||(a=!0,n(),L(s?z:d,[e]),e._leaveCb=void 0,C[t]===c&&delete C[t])};C[t]=c,p?b(p,[e,i]):i()},clone(c){return nc(c,e,s,n)}};return y}function tc(c){if(fc(c))return c=Qe(c),c.children=null,c}function ac(c){return fc(c)?c.children?c.children[0]:void 0:c}function ic(c,e){6&c.shapeFlag&&c.component?ic(c.component.subTree,e):128&c.shapeFlag?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function rc(c,e=!1,s){let n=[],t=0;for(let a=0;a<c.length;a++){let i=c[a];const r=null==s?i.key:String(s)+String(null!=i.key?i.key:a);i.type===ke?(128&i.patchFlag&&t++,n=n.concat(rc(i.children,e,r))):(e||i.type!==Ae)&&n.push(null!=r?Qe(i,{key:r}):i)}if(t>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function oc(c){return(0,t.mf)(c)?{setup:c,name:c.name}:c}const lc=c=>!!c.type.__asyncLoader;const fc=c=>c.type.__isKeepAlive;RegExp,RegExp;function uc(c,e){return(0,t.kJ)(c)?c.some((c=>uc(c,e))):(0,t.HD)(c)?c.split(",").includes(e):!!(0,t.Kj)(c)&&c.test(e)}function hc(c,e){pc(c,"a",e)}function mc(c,e){pc(c,"da",e)}function pc(c,e,s=ls){const n=c.__wdc||(c.__wdc=()=>{let e=s;while(e){if(e.isDeactivated)return;e=e.parent}return c()});if(Vc(e,n,s),s){let c=s.parent;while(c&&c.parent)fc(c.parent.vnode)&&dc(n,e,s,c),c=c.parent}}function dc(c,e,s,n){const a=Vc(e,c,n,!0);yc((()=>{(0,t.Od)(n[e],a)}),s)}function zc(c){c.shapeFlag&=-257,c.shapeFlag&=-513}function Hc(c){return 128&c.shapeFlag?c.ssContent:c}function Vc(c,e,s=ls,t=!1){if(s){const a=s[c]||(s[c]=[]),r=e.__weh||(e.__weh=(...t)=>{if(s.isUnmounted)return;(0,n.Jd)(),us(s);const a=i(e,s,c,t);return hs(),(0,n.lk)(),a});return t?a.unshift(r):a.push(r),r}}const vc=c=>(e,s=ls)=>(!zs||"sp"===c)&&Vc(c,((...c)=>e(...c)),s),Mc=vc("bm"),gc=vc("m"),Cc=vc("bu"),Lc=vc("u"),bc=vc("bum"),yc=vc("um"),xc=vc("sp"),Nc=vc("rtg"),wc=vc("rtc");function Sc(c,e=ls){Vc("ec",c,e)}function kc(c,e){const s=A;if(null===s)return c;const n=Ls(s)||s.proxy,a=c.dirs||(c.dirs=[]);for(let i=0;i<e.length;i++){let[c,s,r,o=t.kT]=e[i];c&&((0,t.mf)(c)&&(c={mounted:c,updated:c}),c.deep&&X(s),a.push({dir:c,instance:n,value:s,oldValue:void 0,arg:r,modifiers:o}))}return c}function _c(c,e,s,t){const a=c.dirs,r=e&&e.dirs;for(let o=0;o<a.length;o++){const l=a[o];r&&(l.oldValue=r[o].value);let f=l.dir[t];f&&((0,n.Jd)(),i(f,s,8,[c.el,l,c,e]),(0,n.lk)())}}const Ac="components";function Ec(c,e){return Oc(Ac,c,!0,e)||c}const Tc=Symbol();function Oc(c,e,s=!0,n=!1){const a=A||ls;if(a){const s=a.type;if(c===Ac){const c=bs(s,!1);if(c&&(c===e||c===(0,t._A)(e)||c===(0,t.kC)((0,t._A)(e))))return s}const i=Ic(a[c]||s[c],e)||Ic(a.appContext[c],e);return!i&&n?s:i}}function Ic(c,e){return c&&(c[e]||c[(0,t._A)(e)]||c[(0,t.kC)((0,t._A)(e))])}function Rc(c,e,s,n){let a;const i=s&&s[n];if((0,t.kJ)(c)||(0,t.HD)(c)){a=new Array(c.length);for(let s=0,n=c.length;s<n;s++)a[s]=e(c[s],s,void 0,i&&i[s])}else if("number"===typeof c){0,a=new Array(c);for(let s=0;s<c;s++)a[s]=e(s+1,s,void 0,i&&i[s])}else if((0,t.Kn)(c))if(c[Symbol.iterator])a=Array.from(c,((c,s)=>e(c,s,void 0,i&&i[s])));else{const s=Object.keys(c);a=new Array(s.length);for(let n=0,t=s.length;n<t;n++){const t=s[n];a[n]=e(c[t],t,n,i&&i[n])}}else a=[];return s&&(s[n]=a),a}const Pc=c=>c?ms(c)?Ls(c)||c.proxy:Pc(c.parent):null,Dc=(0,t.l7)(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>Pc(c.parent),$root:c=>Pc(c.root),$emit:c=>c.emit,$options:c=>Gc(c),$forceUpdate:c=>c.f||(c.f=()=>M(c.update)),$nextTick:c=>c.n||(c.n=V.bind(c.proxy)),$watch:c=>K.bind(c)}),Fc=(c,e)=>c!==t.kT&&!c.__isScriptSetup&&(0,t.RI)(c,e),Uc={get({_:c},e){const{ctx:s,setupState:a,data:i,props:r,accessCache:o,type:l,appContext:f}=c;let u;if("$"!==e[0]){const n=o[e];if(void 0!==n)switch(n){case 1:return a[e];case 2:return i[e];case 4:return s[e];case 3:return r[e]}else{if(Fc(a,e))return o[e]=1,a[e];if(i!==t.kT&&(0,t.RI)(i,e))return o[e]=2,i[e];if((u=c.propsOptions[0])&&(0,t.RI)(u,e))return o[e]=3,r[e];if(s!==t.kT&&(0,t.RI)(s,e))return o[e]=4,s[e];jc&&(o[e]=0)}}const h=Dc[e];let m,p;return h?("$attrs"===e&&(0,n.j)(c,"get",e),h(c)):(m=l.__cssModules)&&(m=m[e])?m:s!==t.kT&&(0,t.RI)(s,e)?(o[e]=4,s[e]):(p=f.config.globalProperties,(0,t.RI)(p,e)?p[e]:void 0)},set({_:c},e,s){const{data:n,setupState:a,ctx:i}=c;return Fc(a,e)?(a[e]=s,!0):n!==t.kT&&(0,t.RI)(n,e)?(n[e]=s,!0):!(0,t.RI)(c.props,e)&&(("$"!==e[0]||!(e.slice(1)in c))&&(i[e]=s,!0))},has({_:{data:c,setupState:e,accessCache:s,ctx:n,appContext:a,propsOptions:i}},r){let o;return!!s[r]||c!==t.kT&&(0,t.RI)(c,r)||Fc(e,r)||(o=i[0])&&(0,t.RI)(o,r)||(0,t.RI)(n,r)||(0,t.RI)(Dc,r)||(0,t.RI)(a.config.globalProperties,r)},defineProperty(c,e,s){return null!=s.get?c._.accessCache[e]=0:(0,t.RI)(s,"value")&&this.set(c,e,s.value,null),Reflect.defineProperty(c,e,s)}};let jc=!0;function Bc(c){const e=Gc(c),s=c.proxy,a=c.ctx;jc=!1,e.beforeCreate&&Wc(e.beforeCreate,c,"bc");const{data:i,computed:r,methods:o,watch:l,provide:f,inject:u,created:h,beforeMount:m,mounted:p,beforeUpdate:d,updated:z,activated:H,deactivated:V,beforeDestroy:v,beforeUnmount:M,destroyed:g,unmounted:C,render:L,renderTracked:b,renderTriggered:y,errorCaptured:x,serverPrefetch:N,expose:w,inheritAttrs:S,components:k,directives:_,filters:A}=e,E=null;if(u&&qc(u,a,E,c.appContext.config.unwrapInjectedRef),o)for(const n in o){const c=o[n];(0,t.mf)(c)&&(a[n]=c.bind(s))}if(i){0;const e=i.call(s,s);0,(0,t.Kn)(e)&&(c.data=(0,n.qj)(e))}if(jc=!0,r)for(const n in r){const c=r[n],e=(0,t.mf)(c)?c.bind(s,s):(0,t.mf)(c.get)?c.get.bind(s,s):t.dG;0;const i=!(0,t.mf)(c)&&(0,t.mf)(c.set)?c.set.bind(s):t.dG,o=xs({get:e,set:i});Object.defineProperty(a,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:c=>o.value=c})}if(l)for(const n in l)$c(l[n],a,s,n);if(f){const c=(0,t.mf)(f)?f.call(s):f;Reflect.ownKeys(c).forEach((e=>{q(e,c[e])}))}function T(c,e){(0,t.kJ)(e)?e.forEach((e=>c(e.bind(s)))):e&&c(e.bind(s))}if(h&&Wc(h,c,"c"),T(Mc,m),T(gc,p),T(Cc,d),T(Lc,z),T(hc,H),T(mc,V),T(Sc,x),T(wc,b),T(Nc,y),T(bc,M),T(yc,C),T(xc,N),(0,t.kJ)(w))if(w.length){const e=c.exposed||(c.exposed={});w.forEach((c=>{Object.defineProperty(e,c,{get:()=>s[c],set:e=>s[c]=e})}))}else c.exposed||(c.exposed={});L&&c.render===t.dG&&(c.render=L),null!=S&&(c.inheritAttrs=S),k&&(c.components=k),_&&(c.directives=_)}function qc(c,e,s=t.dG,a=!1){(0,t.kJ)(c)&&(c=Qc(c));for(const i in c){const s=c[i];let r;r=(0,t.Kn)(s)?"default"in s?W(s.from||i,s.default,!0):W(s.from||i):W(s),(0,n.dq)(r)&&a?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):e[i]=r}}function Wc(c,e,s){i((0,t.kJ)(c)?c.map((c=>c.bind(e.proxy))):c.bind(e.proxy),e,s)}function $c(c,e,s,n){const a=n.includes(".")?Y(s,n):()=>s[n];if((0,t.HD)(c)){const s=e[c];(0,t.mf)(s)&&G(a,s)}else if((0,t.mf)(c))G(a,c.bind(s));else if((0,t.Kn)(c))if((0,t.kJ)(c))c.forEach((c=>$c(c,e,s,n)));else{const n=(0,t.mf)(c.handler)?c.handler.bind(s):e[c.handler];(0,t.mf)(n)&&G(a,n,c)}else 0}function Gc(c){const e=c.type,{mixins:s,extends:n}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:r}}=c.appContext,o=i.get(e);let l;return o?l=o:a.length||s||n?(l={},a.length&&a.forEach((c=>Jc(l,c,r,!0))),Jc(l,e,r)):l=e,(0,t.Kn)(e)&&i.set(e,l),l}function Jc(c,e,s,n=!1){const{mixins:t,extends:a}=e;a&&Jc(c,a,s,!0),t&&t.forEach((e=>Jc(c,e,s,!0)));for(const i in e)if(n&&"expose"===i);else{const n=Kc[i]||s&&s[i];c[i]=n?n(c[i],e[i]):e[i]}return c}const Kc={data:Yc,props:ce,emits:ce,methods:ce,computed:ce,beforeCreate:Zc,created:Zc,beforeMount:Zc,mounted:Zc,beforeUpdate:Zc,updated:Zc,beforeDestroy:Zc,beforeUnmount:Zc,destroyed:Zc,unmounted:Zc,activated:Zc,deactivated:Zc,errorCaptured:Zc,serverPrefetch:Zc,components:ce,directives:ce,watch:ee,provide:Yc,inject:Xc};function Yc(c,e){return e?c?function(){return(0,t.l7)((0,t.mf)(c)?c.call(this,this):c,(0,t.mf)(e)?e.call(this,this):e)}:e:c}function Xc(c,e){return ce(Qc(c),Qc(e))}function Qc(c){if((0,t.kJ)(c)){const e={};for(let s=0;s<c.length;s++)e[c[s]]=c[s];return e}return c}function Zc(c,e){return c?[...new Set([].concat(c,e))]:e}function ce(c,e){return c?(0,t.l7)((0,t.l7)(Object.create(null),c),e):e}function ee(c,e){if(!c)return e;if(!e)return c;const s=(0,t.l7)(Object.create(null),c);for(const n in e)s[n]=Zc(c[n],e[n]);return s}function se(c,e,s,a=!1){const i={},r={};(0,t.Nj)(r,We,1),c.propsDefaults=Object.create(null),te(c,e,i,r);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);s?c.props=a?i:(0,n.Um)(i):c.type.props?c.props=i:c.props=r,c.attrs=r}function ne(c,e,s,a){const{props:i,attrs:r,vnode:{patchFlag:o}}=c,l=(0,n.IU)(i),[f]=c.propsOptions;let u=!1;if(!(a||o>0)||16&o){let n;te(c,e,i,r)&&(u=!0);for(const a in l)e&&((0,t.RI)(e,a)||(n=(0,t.rs)(a))!==a&&(0,t.RI)(e,n))||(f?!s||void 0===s[a]&&void 0===s[n]||(i[a]=ae(f,l,a,void 0,c,!0)):delete i[a]);if(r!==l)for(const c in r)e&&(0,t.RI)(e,c)||(delete r[c],u=!0)}else if(8&o){const s=c.vnode.dynamicProps;for(let n=0;n<s.length;n++){let a=s[n];if(_(c.emitsOptions,a))continue;const o=e[a];if(f)if((0,t.RI)(r,a))o!==r[a]&&(r[a]=o,u=!0);else{const e=(0,t._A)(a);i[e]=ae(f,l,e,o,c,!1)}else o!==r[a]&&(r[a]=o,u=!0)}}u&&(0,n.X$)(c,"set","$attrs")}function te(c,e,s,a){const[i,r]=c.propsOptions;let o,l=!1;if(e)for(let n in e){if((0,t.Gg)(n))continue;const f=e[n];let u;i&&(0,t.RI)(i,u=(0,t._A)(n))?r&&r.includes(u)?(o||(o={}))[u]=f:s[u]=f:_(c.emitsOptions,n)||n in a&&f===a[n]||(a[n]=f,l=!0)}if(r){const e=(0,n.IU)(s),a=o||t.kT;for(let n=0;n<r.length;n++){const o=r[n];s[o]=ae(i,e,o,a[o],c,!(0,t.RI)(a,o))}}return l}function ae(c,e,s,n,a,i){const r=c[s];if(null!=r){const c=(0,t.RI)(r,"default");if(c&&void 0===n){const c=r.default;if(r.type!==Function&&(0,t.mf)(c)){const{propsDefaults:t}=a;s in t?n=t[s]:(us(a),n=t[s]=c.call(null,e),hs())}else n=c}r[0]&&(i&&!c?n=!1:!r[1]||""!==n&&n!==(0,t.rs)(s)||(n=!0))}return n}function ie(c,e,s=!1){const n=e.propsCache,a=n.get(c);if(a)return a;const i=c.props,r={},o=[];let l=!1;if(!(0,t.mf)(c)){const n=c=>{l=!0;const[s,n]=ie(c,e,!0);(0,t.l7)(r,s),n&&o.push(...n)};!s&&e.mixins.length&&e.mixins.forEach(n),c.extends&&n(c.extends),c.mixins&&c.mixins.forEach(n)}if(!i&&!l)return(0,t.Kn)(c)&&n.set(c,t.Z6),t.Z6;if((0,t.kJ)(i))for(let u=0;u<i.length;u++){0;const c=(0,t._A)(i[u]);re(c)&&(r[c]=t.kT)}else if(i){0;for(const c in i){const e=(0,t._A)(c);if(re(e)){const s=i[c],n=r[e]=(0,t.kJ)(s)||(0,t.mf)(s)?{type:s}:Object.assign({},s);if(n){const c=fe(Boolean,n.type),s=fe(String,n.type);n[0]=c>-1,n[1]=s<0||c<s,(c>-1||(0,t.RI)(n,"default"))&&o.push(e)}}}}const f=[r,o];return(0,t.Kn)(c)&&n.set(c,f),f}function re(c){return"$"!==c[0]}function oe(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===c?"null":""}function le(c,e){return oe(c)===oe(e)}function fe(c,e){return(0,t.kJ)(e)?e.findIndex((e=>le(e,c))):(0,t.mf)(e)&&le(e,c)?0:-1}const ue=c=>"_"===c[0]||"$stable"===c,he=c=>(0,t.kJ)(c)?c.map(es):[es(c)],me=(c,e,s)=>{if(e._n)return e;const n=O(((...c)=>he(e(...c))),s);return n._c=!1,n},pe=(c,e,s)=>{const n=c._ctx;for(const a in c){if(ue(a))continue;const s=c[a];if((0,t.mf)(s))e[a]=me(a,s,n);else if(null!=s){0;const c=he(s);e[a]=()=>c}}},de=(c,e)=>{const s=he(e);c.slots.default=()=>s},ze=(c,e)=>{if(32&c.vnode.shapeFlag){const s=e._;s?(c.slots=(0,n.IU)(e),(0,t.Nj)(e,"_",s)):pe(e,c.slots={})}else c.slots={},e&&de(c,e);(0,t.Nj)(c.slots,We,1)},He=(c,e,s)=>{const{vnode:n,slots:a}=c;let i=!0,r=t.kT;if(32&n.shapeFlag){const c=e._;c?s&&1===c?i=!1:((0,t.l7)(a,e),s||1!==c||delete a._):(i=!e.$stable,pe(e,a)),r=e}else e&&(de(c,e),r={default:1});if(i)for(const t in a)ue(t)||t in r||delete a[t]};function Ve(){return{app:null,config:{isNativeTag:t.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ve=0;function Me(c,e){return function(s,n=null){(0,t.mf)(s)||(s=Object.assign({},s)),null==n||(0,t.Kn)(n)||(n=null);const a=Ve(),i=new Set;let r=!1;const o=a.app={_uid:ve++,_component:s,_props:n,_container:null,_context:a,_instance:null,version:ks,get config(){return a.config},set config(c){0},use(c,...e){return i.has(c)||(c&&(0,t.mf)(c.install)?(i.add(c),c.install(o,...e)):(0,t.mf)(c)&&(i.add(c),c(o,...e))),o},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),o},component(c,e){return e?(a.components[c]=e,o):a.components[c]},directive(c,e){return e?(a.directives[c]=e,o):a.directives[c]},mount(t,i,l){if(!r){0;const f=Ke(s,n);return f.appContext=a,i&&e?e(f,t):c(f,t,l),r=!0,o._container=t,t.__vue_app__=o,Ls(f.component)||f.component.proxy}},unmount(){r&&(c(null,o._container),delete o._container.__vue_app__)},provide(c,e){return a.provides[c]=e,o}};return o}}function ge(c,e,s,i,r=!1){if((0,t.kJ)(c))return void c.forEach(((c,n)=>ge(c,e&&((0,t.kJ)(e)?e[n]:e),s,i,r)));if(lc(i)&&!r)return;const o=4&i.shapeFlag?Ls(i.component)||i.component.proxy:i.el,l=r?null:o,{i:f,r:u}=c;const h=e&&e.r,m=f.refs===t.kT?f.refs={}:f.refs,p=f.setupState;if(null!=h&&h!==u&&((0,t.HD)(h)?(m[h]=null,(0,t.RI)(p,h)&&(p[h]=null)):(0,n.dq)(h)&&(h.value=null)),(0,t.mf)(u))a(u,f,12,[l,m]);else{const e=(0,t.HD)(u),a=(0,n.dq)(u);if(e||a){const n=()=>{if(c.f){const s=e?(0,t.RI)(p,u)?p[u]:m[u]:u.value;r?(0,t.kJ)(s)&&(0,t.Od)(s,o):(0,t.kJ)(s)?s.includes(o)||s.push(o):e?(m[u]=[o],(0,t.RI)(p,u)&&(p[u]=m[u])):(u.value=[o],c.k&&(m[c.k]=u.value))}else e?(m[u]=l,(0,t.RI)(p,u)&&(p[u]=l)):a&&(u.value=l,c.k&&(m[c.k]=l))};l?(n.id=-1,Le(n,s)):n()}else 0}}function Ce(){}const Le=B;function be(c){return ye(c)}function ye(c,e){Ce();const s=(0,t.E9)();s.__VUE__=!0;const{insert:a,remove:i,patchProp:r,createElement:o,createText:l,createComment:f,setText:u,setElementText:h,parentNode:m,nextSibling:p,setScopeId:d=t.dG,insertStaticContent:z}=c,H=(c,e,s,n=null,t=null,a=null,i=!1,r=null,o=!!e.dynamicChildren)=>{if(c===e)return;c&&!qe(c,e)&&(n=Q(c),G(c,t,a,!0),c=null),-2===e.patchFlag&&(o=!1,e.dynamicChildren=null);const{type:l,ref:f,shapeFlag:u}=e;switch(l){case _e:V(c,e,s,n);break;case Ae:v(c,e,s,n);break;case Ee:null==c&&g(e,s,n,i);break;case ke:T(c,e,s,n,t,a,i,r,o);break;default:1&u?N(c,e,s,n,t,a,i,r,o):6&u?O(c,e,s,n,t,a,i,r,o):(64&u||128&u)&&l.process(c,e,s,n,t,a,i,r,o,cc)}null!=f&&t&&ge(f,c&&c.ref,a,e||c,!e)},V=(c,e,s,n)=>{if(null==c)a(e.el=l(e.children),s,n);else{const s=e.el=c.el;e.children!==c.children&&u(s,e.children)}},v=(c,e,s,n)=>{null==c?a(e.el=f(e.children||""),s,n):e.el=c.el},g=(c,e,s,n)=>{[c.el,c.anchor]=z(c.children,e,s,n,c.el,c.anchor)},L=({el:c,anchor:e},s,n)=>{let t;while(c&&c!==e)t=p(c),a(c,s,n),c=t;a(e,s,n)},x=({el:c,anchor:e})=>{let s;while(c&&c!==e)s=p(c),i(c),c=s;i(e)},N=(c,e,s,n,t,a,i,r,o)=>{i=i||"svg"===e.type,null==c?w(e,s,n,t,a,i,r,o):_(c,e,t,a,i,r,o)},w=(c,e,s,n,i,l,f,u)=>{let m,p;const{type:d,props:z,shapeFlag:H,transition:V,dirs:v}=c;if(m=c.el=o(c.type,l,z&&z.is,z),8&H?h(m,c.children):16&H&&k(c.children,m,null,n,i,l&&"foreignObject"!==d,f,u),v&&_c(c,null,n,"created"),S(m,c,c.scopeId,f,n),z){for(const e in z)"value"===e||(0,t.Gg)(e)||r(m,e,null,z[e],l,c.children,n,i,X);"value"in z&&r(m,"value",null,z.value),(p=z.onVnodeBeforeMount)&&as(p,n,c)}v&&_c(c,null,n,"beforeMount");const M=(!i||i&&!i.pendingBranch)&&V&&!V.persisted;M&&V.beforeEnter(m),a(m,e,s),((p=z&&z.onVnodeMounted)||M||v)&&Le((()=>{p&&as(p,n,c),M&&V.enter(m),v&&_c(c,null,n,"mounted")}),i)},S=(c,e,s,n,t)=>{if(s&&d(c,s),n)for(let a=0;a<n.length;a++)d(c,n[a]);if(t){let s=t.subTree;if(e===s){const e=t.vnode;S(c,e,e.scopeId,e.slotScopeIds,t.parent)}}},k=(c,e,s,n,t,a,i,r,o=0)=>{for(let l=o;l<c.length;l++){const o=c[l]=r?ss(c[l]):es(c[l]);H(null,o,e,s,n,t,a,i,r)}},_=(c,e,s,n,a,i,o)=>{const l=e.el=c.el;let{patchFlag:f,dynamicChildren:u,dirs:m}=e;f|=16&c.patchFlag;const p=c.props||t.kT,d=e.props||t.kT;let z;s&&xe(s,!1),(z=d.onVnodeBeforeUpdate)&&as(z,s,e,c),m&&_c(e,c,s,"beforeUpdate"),s&&xe(s,!0);const H=a&&"foreignObject"!==e.type;if(u?A(c.dynamicChildren,u,l,s,n,H,i):o||B(c,e,l,null,s,n,H,i,!1),f>0){if(16&f)E(l,e,p,d,s,n,a);else if(2&f&&p.class!==d.class&&r(l,"class",null,d.class,a),4&f&&r(l,"style",p.style,d.style,a),8&f){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const i=t[e],o=p[i],f=d[i];f===o&&"value"!==i||r(l,i,o,f,a,c.children,s,n,X)}}1&f&&c.children!==e.children&&h(l,e.children)}else o||null!=u||E(l,e,p,d,s,n,a);((z=d.onVnodeUpdated)||m)&&Le((()=>{z&&as(z,s,e,c),m&&_c(e,c,s,"updated")}),n)},A=(c,e,s,n,t,a,i)=>{for(let r=0;r<e.length;r++){const o=c[r],l=e[r],f=o.el&&(o.type===ke||!qe(o,l)||70&o.shapeFlag)?m(o.el):s;H(o,l,f,null,n,t,a,i,!0)}},E=(c,e,s,n,a,i,o)=>{if(s!==n){if(s!==t.kT)for(const l in s)(0,t.Gg)(l)||l in n||r(c,l,s[l],null,o,e.children,a,i,X);for(const l in n){if((0,t.Gg)(l))continue;const f=n[l],u=s[l];f!==u&&"value"!==l&&r(c,l,u,f,o,e.children,a,i,X)}"value"in n&&r(c,"value",s.value,n.value)}},T=(c,e,s,n,t,i,r,o,f)=>{const u=e.el=c?c.el:l(""),h=e.anchor=c?c.anchor:l("");let{patchFlag:m,dynamicChildren:p,slotScopeIds:d}=e;d&&(o=o?o.concat(d):d),null==c?(a(u,s,n),a(h,s,n),k(e.children,s,h,t,i,r,o,f)):m>0&&64&m&&p&&c.dynamicChildren?(A(c.dynamicChildren,p,s,t,i,r,o),(null!=e.key||t&&e===t.subTree)&&Ne(c,e,!0)):B(c,e,s,h,t,i,r,o,f)},O=(c,e,s,n,t,a,i,r,o)=>{e.slotScopeIds=r,null==c?512&e.shapeFlag?t.ctx.activate(e,s,n,i,o):R(e,s,n,t,a,i,o):P(c,e,o)},R=(c,e,s,n,t,a,i)=>{const r=c.component=os(c,n,t);if(fc(c)&&(r.ctx.renderer=cc),Hs(r),r.asyncDep){if(t&&t.registerDep(r,F),!c.el){const c=r.subTree=Ke(Ae);v(null,c,e,s)}}else F(r,c,e,s,t,a,i)},P=(c,e,s)=>{const n=e.component=c.component;if(D(c,e,s)){if(n.asyncDep&&!n.asyncResolved)return void j(n,e,s);n.next=e,C(n.update),n.update()}else e.el=c.el,n.vnode=e},F=(c,e,s,a,i,r,o)=>{const l=()=>{if(c.isMounted){let e,{next:s,bu:n,u:a,parent:l,vnode:f}=c,u=s;0,xe(c,!1),s?(s.el=f.el,j(c,s,o)):s=f,n&&(0,t.ir)(n),(e=s.props&&s.props.onVnodeBeforeUpdate)&&as(e,l,s,f),xe(c,!0);const h=I(c);0;const p=c.subTree;c.subTree=h,H(p,h,m(p.el),Q(p),c,i,r),s.el=h.el,null===u&&U(c,h.el),a&&Le(a,i),(e=s.props&&s.props.onVnodeUpdated)&&Le((()=>as(e,l,s,f)),i)}else{let n;const{el:o,props:l}=e,{bm:f,m:u,parent:h}=c,m=lc(e);if(xe(c,!1),f&&(0,t.ir)(f),!m&&(n=l&&l.onVnodeBeforeMount)&&as(n,h,e),xe(c,!0),o&&sc){const s=()=>{c.subTree=I(c),sc(o,c.subTree,c,i,null)};m?e.type.__asyncLoader().then((()=>!c.isUnmounted&&s())):s()}else{0;const n=c.subTree=I(c);0,H(null,n,s,a,c,i,r),e.el=n.el}if(u&&Le(u,i),!m&&(n=l&&l.onVnodeMounted)){const c=e;Le((()=>as(n,h,c)),i)}(256&e.shapeFlag||h&&lc(h.vnode)&&256&h.vnode.shapeFlag)&&c.a&&Le(c.a,i),c.isMounted=!0,e=s=a=null}},f=c.effect=new n.qq(l,(()=>M(u)),c.scope),u=c.update=()=>f.run();u.id=c.uid,xe(c,!0),u()},j=(c,e,s)=>{e.component=c;const t=c.vnode.props;c.vnode=e,c.next=null,ne(c,e.props,t,s),He(c,e.children,s),(0,n.Jd)(),b(),(0,n.lk)()},B=(c,e,s,n,t,a,i,r,o=!1)=>{const l=c&&c.children,f=c?c.shapeFlag:0,u=e.children,{patchFlag:m,shapeFlag:p}=e;if(m>0){if(128&m)return void W(l,u,s,n,t,a,i,r,o);if(256&m)return void q(l,u,s,n,t,a,i,r,o)}8&p?(16&f&&X(l,t,a),u!==l&&h(s,u)):16&f?16&p?W(l,u,s,n,t,a,i,r,o):X(l,t,a,!0):(8&f&&h(s,""),16&p&&k(u,s,n,t,a,i,r,o))},q=(c,e,s,n,a,i,r,o,l)=>{c=c||t.Z6,e=e||t.Z6;const f=c.length,u=e.length,h=Math.min(f,u);let m;for(m=0;m<h;m++){const n=e[m]=l?ss(e[m]):es(e[m]);H(c[m],n,s,null,a,i,r,o,l)}f>u?X(c,a,i,!0,!1,h):k(e,s,n,a,i,r,o,l,h)},W=(c,e,s,n,a,i,r,o,l)=>{let f=0;const u=e.length;let h=c.length-1,m=u-1;while(f<=h&&f<=m){const n=c[f],t=e[f]=l?ss(e[f]):es(e[f]);if(!qe(n,t))break;H(n,t,s,null,a,i,r,o,l),f++}while(f<=h&&f<=m){const n=c[h],t=e[m]=l?ss(e[m]):es(e[m]);if(!qe(n,t))break;H(n,t,s,null,a,i,r,o,l),h--,m--}if(f>h){if(f<=m){const c=m+1,t=c<u?e[c].el:n;while(f<=m)H(null,e[f]=l?ss(e[f]):es(e[f]),s,t,a,i,r,o,l),f++}}else if(f>m)while(f<=h)G(c[f],a,i,!0),f++;else{const p=f,d=f,z=new Map;for(f=d;f<=m;f++){const c=e[f]=l?ss(e[f]):es(e[f]);null!=c.key&&z.set(c.key,f)}let V,v=0;const M=m-d+1;let g=!1,C=0;const L=new Array(M);for(f=0;f<M;f++)L[f]=0;for(f=p;f<=h;f++){const n=c[f];if(v>=M){G(n,a,i,!0);continue}let t;if(null!=n.key)t=z.get(n.key);else for(V=d;V<=m;V++)if(0===L[V-d]&&qe(n,e[V])){t=V;break}void 0===t?G(n,a,i,!0):(L[t-d]=f+1,t>=C?C=t:g=!0,H(n,e[t],s,null,a,i,r,o,l),v++)}const b=g?we(L):t.Z6;for(V=b.length-1,f=M-1;f>=0;f--){const c=d+f,t=e[c],h=c+1<u?e[c+1].el:n;0===L[f]?H(null,t,s,h,a,i,r,o,l):g&&(V<0||f!==b[V]?$(t,s,h,2):V--)}}},$=(c,e,s,n,t=null)=>{const{el:i,type:r,transition:o,children:l,shapeFlag:f}=c;if(6&f)return void $(c.component.subTree,e,s,n);if(128&f)return void c.suspense.move(e,s,n);if(64&f)return void r.move(c,e,s,cc);if(r===ke){a(i,e,s);for(let c=0;c<l.length;c++)$(l[c],e,s,n);return void a(c.anchor,e,s)}if(r===Ee)return void L(c,e,s);const u=2!==n&&1&f&&o;if(u)if(0===n)o.beforeEnter(i),a(i,e,s),Le((()=>o.enter(i)),t);else{const{leave:c,delayLeave:n,afterLeave:t}=o,r=()=>a(i,e,s),l=()=>{c(i,(()=>{r(),t&&t()}))};n?n(i,r,l):l()}else a(i,e,s)},G=(c,e,s,n=!1,t=!1)=>{const{type:a,props:i,ref:r,children:o,dynamicChildren:l,shapeFlag:f,patchFlag:u,dirs:h}=c;if(null!=r&&ge(r,null,s,c,!0),256&f)return void e.ctx.deactivate(c);const m=1&f&&h,p=!lc(c);let d;if(p&&(d=i&&i.onVnodeBeforeUnmount)&&as(d,e,c),6&f)Y(c.component,s,n);else{if(128&f)return void c.suspense.unmount(s,n);m&&_c(c,null,e,"beforeUnmount"),64&f?c.type.remove(c,e,s,t,cc,n):l&&(a!==ke||u>0&&64&u)?X(l,e,s,!1,!0):(a===ke&&384&u||!t&&16&f)&&X(o,e,s),n&&J(c)}(p&&(d=i&&i.onVnodeUnmounted)||m)&&Le((()=>{d&&as(d,e,c),m&&_c(c,null,e,"unmounted")}),s)},J=c=>{const{type:e,el:s,anchor:n,transition:t}=c;if(e===ke)return void K(s,n);if(e===Ee)return void x(c);const a=()=>{i(s),t&&!t.persisted&&t.afterLeave&&t.afterLeave()};if(1&c.shapeFlag&&t&&!t.persisted){const{leave:e,delayLeave:n}=t,i=()=>e(s,a);n?n(c.el,a,i):i()}else a()},K=(c,e)=>{let s;while(c!==e)s=p(c),i(c),c=s;i(e)},Y=(c,e,s)=>{const{bum:n,scope:a,update:i,subTree:r,um:o}=c;n&&(0,t.ir)(n),a.stop(),i&&(i.active=!1,G(r,c,e,s)),o&&Le(o,e),Le((()=>{c.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(c,e,s,n=!1,t=!1,a=0)=>{for(let i=a;i<c.length;i++)G(c[i],e,s,n,t)},Q=c=>6&c.shapeFlag?Q(c.component.subTree):128&c.shapeFlag?c.suspense.next():p(c.anchor||c.el),Z=(c,e,s)=>{null==c?e._vnode&&G(e._vnode,null,null,!0):H(e._vnode||null,c,e,null,null,null,s),b(),y(),e._vnode=c},cc={p:H,um:G,m:$,r:J,mt:R,mc:k,pc:B,pbc:A,n:Q,o:c};let ec,sc;return e&&([ec,sc]=e(cc)),{render:Z,hydrate:ec,createApp:Me(Z,ec)}}function xe({effect:c,update:e},s){c.allowRecurse=e.allowRecurse=s}function Ne(c,e,s=!1){const n=c.children,a=e.children;if((0,t.kJ)(n)&&(0,t.kJ)(a))for(let t=0;t<n.length;t++){const c=n[t];let e=a[t];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=a[t]=ss(a[t]),e.el=c.el),s||Ne(c,e)),e.type===_e&&(e.el=c.el)}}function we(c){const e=c.slice(),s=[0];let n,t,a,i,r;const o=c.length;for(n=0;n<o;n++){const o=c[n];if(0!==o){if(t=s[s.length-1],c[t]<o){e[n]=t,s.push(n);continue}a=0,i=s.length-1;while(a<i)r=a+i>>1,c[s[r]]<o?a=r+1:i=r;o<c[s[a]]&&(a>0&&(e[n]=s[a-1]),s[a]=n)}}a=s.length,i=s[a-1];while(a-- >0)s[a]=i,i=e[i];return s}const Se=c=>c.__isTeleport;const ke=Symbol(void 0),_e=Symbol(void 0),Ae=Symbol(void 0),Ee=Symbol(void 0),Te=[];let Oe=null;function Ie(c=!1){Te.push(Oe=c?null:[])}function Re(){Te.pop(),Oe=Te[Te.length-1]||null}let Pe=1;function De(c){Pe+=c}function Fe(c){return c.dynamicChildren=Pe>0?Oe||t.Z6:null,Re(),Pe>0&&Oe&&Oe.push(c),c}function Ue(c,e,s,n,t,a){return Fe(Je(c,e,s,n,t,a,!0))}function je(c,e,s,n,t){return Fe(Ke(c,e,s,n,t,!0))}function Be(c){return!!c&&!0===c.__v_isVNode}function qe(c,e){return c.type===e.type&&c.key===e.key}const We="__vInternal",$e=({key:c})=>null!=c?c:null,Ge=({ref:c,ref_key:e,ref_for:s})=>null!=c?(0,t.HD)(c)||(0,n.dq)(c)||(0,t.mf)(c)?{i:A,r:c,k:e,f:!!s}:c:null;function Je(c,e=null,s=null,n=0,a=null,i=(c===ke?0:1),r=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&$e(e),ref:e&&Ge(e),scopeId:E,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:A};return o?(ns(l,s),128&i&&c.normalize(l)):s&&(l.shapeFlag|=(0,t.HD)(s)?8:16),Pe>0&&!r&&Oe&&(l.patchFlag>0||6&i)&&32!==l.patchFlag&&Oe.push(l),l}const Ke=Ye;function Ye(c,e=null,s=null,a=0,i=null,r=!1){if(c&&c!==Tc||(c=Ae),Be(c)){const n=Qe(c,e,!0);return s&&ns(n,s),Pe>0&&!r&&Oe&&(6&n.shapeFlag?Oe[Oe.indexOf(c)]=n:Oe.push(n)),n.patchFlag|=-2,n}if(ys(c)&&(c=c.__vccOpts),e){e=Xe(e);let{class:c,style:s}=e;c&&!(0,t.HD)(c)&&(e.class=(0,t.C_)(c)),(0,t.Kn)(s)&&((0,n.X3)(s)&&!(0,t.kJ)(s)&&(s=(0,t.l7)({},s)),e.style=(0,t.j5)(s))}const o=(0,t.HD)(c)?1:j(c)?128:Se(c)?64:(0,t.Kn)(c)?4:(0,t.mf)(c)?2:0;return Je(c,e,s,a,i,o,r,!0)}function Xe(c){return c?(0,n.X3)(c)||We in c?(0,t.l7)({},c):c:null}function Qe(c,e,s=!1){const{props:n,ref:a,patchFlag:i,children:r}=c,o=e?ts(n||{},e):n,l={__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&$e(o),ref:e&&e.ref?s&&a?(0,t.kJ)(a)?a.concat(Ge(e)):[a,Ge(e)]:Ge(e):a,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:r,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==ke?-1===i?16:16|i:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&Qe(c.ssContent),ssFallback:c.ssFallback&&Qe(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return l}function Ze(c=" ",e=0){return Ke(_e,null,c,e)}function cs(c="",e=!1){return e?(Ie(),je(Ae,null,c)):Ke(Ae,null,c)}function es(c){return null==c||"boolean"===typeof c?Ke(Ae):(0,t.kJ)(c)?Ke(ke,null,c.slice()):"object"===typeof c?ss(c):Ke(_e,null,String(c))}function ss(c){return null===c.el&&-1!==c.patchFlag||c.memo?c:Qe(c)}function ns(c,e){let s=0;const{shapeFlag:n}=c;if(null==e)e=null;else if((0,t.kJ)(e))s=16;else if("object"===typeof e){if(65&n){const s=e.default;return void(s&&(s._c&&(s._d=!1),ns(c,s()),s._c&&(s._d=!0)))}{s=32;const n=e._;n||We in e?3===n&&A&&(1===A.slots._?e._=1:(e._=2,c.patchFlag|=1024)):e._ctx=A}}else(0,t.mf)(e)?(e={default:e,_ctx:A},s=32):(e=String(e),64&n?(s=16,e=[Ze(e)]):s=8);c.children=e,c.shapeFlag|=s}function ts(...c){const e={};for(let s=0;s<c.length;s++){const n=c[s];for(const c in n)if("class"===c)e.class!==n.class&&(e.class=(0,t.C_)([e.class,n.class]));else if("style"===c)e.style=(0,t.j5)([e.style,n.style]);else if((0,t.F7)(c)){const s=e[c],a=n[c];!a||s===a||(0,t.kJ)(s)&&s.includes(a)||(e[c]=s?[].concat(s,a):a)}else""!==c&&(e[c]=n[c])}return e}function as(c,e,s,n=null){i(c,e,7,[s,n])}const is=Ve();let rs=0;function os(c,e,s){const a=c.type,i=(e?e.appContext:c.appContext)||is,r={uid:rs++,vnode:c,type:a,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ie(a,i),emitsOptions:k(a,i),emit:null,emitted:null,propsDefaults:t.kT,inheritAttrs:a.inheritAttrs,ctx:t.kT,data:t.kT,props:t.kT,attrs:t.kT,slots:t.kT,refs:t.kT,setupState:t.kT,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=S.bind(null,r),c.ce&&c.ce(r),r}let ls=null;const fs=()=>ls||A,us=c=>{ls=c,c.scope.on()},hs=()=>{ls&&ls.scope.off(),ls=null};function ms(c){return 4&c.vnode.shapeFlag}let ps,ds,zs=!1;function Hs(c,e=!1){zs=e;const{props:s,children:n}=c.vnode,t=ms(c);se(c,s,t,e),ze(c,n);const a=t?Vs(c,e):void 0;return zs=!1,a}function Vs(c,e){const s=c.type;c.accessCache=Object.create(null),c.proxy=(0,n.Xl)(new Proxy(c.ctx,Uc));const{setup:i}=s;if(i){const s=c.setupContext=i.length>1?Cs(c):null;us(c),(0,n.Jd)();const o=a(i,c,0,[c.props,s]);if((0,n.lk)(),hs(),(0,t.tI)(o)){if(o.then(hs,hs),e)return o.then((s=>{vs(c,s,e)})).catch((e=>{r(e,c,0)}));c.asyncDep=o}else vs(c,o,e)}else Ms(c,e)}function vs(c,e,s){(0,t.mf)(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:(0,t.Kn)(e)&&(c.setupState=(0,n.WL)(e)),Ms(c,s)}function Ms(c,e,s){const a=c.type;if(!c.render){if(!e&&ps&&!a.render){const e=a.template||Gc(c).template;if(e){0;const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:i,compilerOptions:r}=a,o=(0,t.l7)((0,t.l7)({isCustomElement:s,delimiters:i},n),r);a.render=ps(e,o)}}c.render=a.render||t.dG,ds&&ds(c)}us(c),(0,n.Jd)(),Bc(c),(0,n.lk)(),hs()}function gs(c){return new Proxy(c.attrs,{get(e,s){return(0,n.j)(c,"get","$attrs"),e[s]}})}function Cs(c){const e=e=>{c.exposed=e||{}};let s;return{get attrs(){return s||(s=gs(c))},slots:c.slots,emit:c.emit,expose:e}}function Ls(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy((0,n.WL)((0,n.Xl)(c.exposed)),{get(e,s){return s in e?e[s]:s in Dc?Dc[s](c):void 0},has(c,e){return e in c||e in Dc}}))}function bs(c,e=!0){return(0,t.mf)(c)?c.displayName||c.name:c.name||e&&c.__name}function ys(c){return(0,t.mf)(c)&&"__vccOpts"in c}const xs=(c,e)=>(0,n.Fl)(c,e,zs);function Ns(c,e,s){const n=arguments.length;return 2===n?(0,t.Kn)(e)&&!(0,t.kJ)(e)?Be(e)?Ke(c,null,[e]):Ke(c,e):Ke(c,null,e):(n>3?s=Array.prototype.slice.call(arguments,2):3===n&&Be(s)&&(s=[s]),Ke(c,e,s))}const ws=Symbol(""),Ss=()=>{{const c=W(ws);return c}};const ks="3.2.47"},9242:function(c,e,s){"use strict";s.d(e,{nr:function(){return oc},ri:function(){return hc}});s(7658);var n=s(7139),t=s(3396),a=s(4870);const i="http://www.w3.org/2000/svg",r="undefined"!==typeof document?document:null,o=r&&r.createElement("template"),l={insert:(c,e,s)=>{e.insertBefore(c,s||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,s,n)=>{const t=e?r.createElementNS(i,c):r.createElement(c,s?{is:s}:void 0);return"select"===c&&n&&null!=n.multiple&&t.setAttribute("multiple",n.multiple),t},createText:c=>r.createTextNode(c),createComment:c=>r.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>r.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,s,n,t,a){const i=s?s.previousSibling:e.lastChild;if(t&&(t===a||t.nextSibling)){while(1)if(e.insertBefore(t.cloneNode(!0),s),t===a||!(t=t.nextSibling))break}else{o.innerHTML=n?`<svg>${c}</svg>`:c;const t=o.content;if(n){const c=t.firstChild;while(c.firstChild)t.appendChild(c.firstChild);t.removeChild(c)}e.insertBefore(t,s)}return[i?i.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}};function f(c,e,s){const n=c._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),null==e?c.removeAttribute("class"):s?c.setAttribute("class",e):c.className=e}function u(c,e,s){const t=c.style,a=(0,n.HD)(s);if(s&&!a){if(e&&!(0,n.HD)(e))for(const c in e)null==s[c]&&m(t,c,"");for(const c in s)m(t,c,s[c])}else{const n=t.display;a?e!==s&&(t.cssText=s):e&&c.removeAttribute("style"),"_vod"in c&&(t.display=n)}}const h=/\s*!important$/;function m(c,e,s){if((0,n.kJ)(s))s.forEach((s=>m(c,e,s)));else if(null==s&&(s=""),e.startsWith("--"))c.setProperty(e,s);else{const t=z(c,e);h.test(s)?c.setProperty((0,n.rs)(t),s.replace(h,""),"important"):c[t]=s}}const p=["Webkit","Moz","ms"],d={};function z(c,e){const s=d[e];if(s)return s;let t=(0,n._A)(e);if("filter"!==t&&t in c)return d[e]=t;t=(0,n.kC)(t);for(let n=0;n<p.length;n++){const s=p[n]+t;if(s in c)return d[e]=s}return e}const H="http://www.w3.org/1999/xlink";function V(c,e,s,t,a){if(t&&e.startsWith("xlink:"))null==s?c.removeAttributeNS(H,e.slice(6,e.length)):c.setAttributeNS(H,e,s);else{const t=(0,n.Pq)(e);null==s||t&&!(0,n.yA)(s)?c.removeAttribute(e):c.setAttribute(e,t?"":s)}}function v(c,e,s,t,a,i,r){if("innerHTML"===e||"textContent"===e)return t&&r(t,a,i),void(c[e]=null==s?"":s);if("value"===e&&"PROGRESS"!==c.tagName&&!c.tagName.includes("-")){c._value=s;const n=null==s?"":s;return c.value===n&&"OPTION"!==c.tagName||(c.value=n),void(null==s&&c.removeAttribute(e))}let o=!1;if(""===s||null==s){const t=typeof c[e];"boolean"===t?s=(0,n.yA)(s):null==s&&"string"===t?(s="",o=!0):"number"===t&&(s=0,o=!0)}try{c[e]=s}catch(l){0}o&&c.removeAttribute(e)}function M(c,e,s,n){c.addEventListener(e,s,n)}function g(c,e,s,n){c.removeEventListener(e,s,n)}function C(c,e,s,n,t=null){const a=c._vei||(c._vei={}),i=a[e];if(n&&i)i.value=n;else{const[s,r]=b(e);if(n){const i=a[e]=w(n,t);M(c,s,i,r)}else i&&(g(c,s,i,r),a[e]=void 0)}}const L=/(?:Once|Passive|Capture)$/;function b(c){let e;if(L.test(c)){let s;e={};while(s=c.match(L))c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}const s=":"===c[2]?c.slice(3):(0,n.rs)(c.slice(2));return[s,e]}let y=0;const x=Promise.resolve(),N=()=>y||(x.then((()=>y=0)),y=Date.now());function w(c,e){const s=c=>{if(c._vts){if(c._vts<=s.attached)return}else c._vts=Date.now();(0,t.$d)(S(c,s.value),e,5,[c])};return s.value=c,s.attached=N(),s}function S(c,e){if((0,n.kJ)(e)){const s=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{s.call(c),c._stopped=!0},e.map((c=>e=>!e._stopped&&c&&c(e)))}return e}const k=/^on[a-z]/,_=(c,e,s,t,a=!1,i,r,o,l)=>{"class"===e?f(c,t,a):"style"===e?u(c,s,t):(0,n.F7)(e)?(0,n.tR)(e)||C(c,e,s,t,r):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):A(c,e,t,a))?v(c,e,t,i,r,o,l):("true-value"===e?c._trueValue=t:"false-value"===e&&(c._falseValue=t),V(c,e,t,a))};function A(c,e,s,t){return t?"innerHTML"===e||"textContent"===e||!!(e in c&&k.test(e)&&(0,n.mf)(s)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==c.tagName)&&(("type"!==e||"TEXTAREA"!==c.tagName)&&((!k.test(e)||!(0,n.HD)(s))&&e in c))))}"undefined"!==typeof HTMLElement&&HTMLElement;const E="transition",T="animation",O=(c,{slots:e})=>(0,t.h)(t.P$,F(c),e);O.displayName="Transition";const I={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},R=O.props=(0,n.l7)({},t.P$.props,I),P=(c,e=[])=>{(0,n.kJ)(c)?c.forEach((c=>c(...e))):c&&c(...e)},D=c=>!!c&&((0,n.kJ)(c)?c.some((c=>c.length>1)):c.length>1);function F(c){const e={};for(const n in c)n in I||(e[n]=c[n]);if(!1===c.css)return e;const{name:s="v",type:t,duration:a,enterFromClass:i=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:o=`${s}-enter-to`,appearFromClass:l=i,appearActiveClass:f=r,appearToClass:u=o,leaveFromClass:h=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:p=`${s}-leave-to`}=c,d=U(a),z=d&&d[0],H=d&&d[1],{onBeforeEnter:V,onEnter:v,onEnterCancelled:M,onLeave:g,onLeaveCancelled:C,onBeforeAppear:L=V,onAppear:b=v,onAppearCancelled:y=M}=e,x=(c,e,s)=>{q(c,e?u:o),q(c,e?f:r),s&&s()},N=(c,e)=>{c._isLeaving=!1,q(c,h),q(c,p),q(c,m),e&&e()},w=c=>(e,s)=>{const n=c?b:v,a=()=>x(e,c,s);P(n,[e,a]),W((()=>{q(e,c?l:i),B(e,c?u:o),D(n)||G(e,t,z,a)}))};return(0,n.l7)(e,{onBeforeEnter(c){P(V,[c]),B(c,i),B(c,r)},onBeforeAppear(c){P(L,[c]),B(c,l),B(c,f)},onEnter:w(!1),onAppear:w(!0),onLeave(c,e){c._isLeaving=!0;const s=()=>N(c,e);B(c,h),X(),B(c,m),W((()=>{c._isLeaving&&(q(c,h),B(c,p),D(g)||G(c,t,H,s))})),P(g,[c,s])},onEnterCancelled(c){x(c,!1),P(M,[c])},onAppearCancelled(c){x(c,!0),P(y,[c])},onLeaveCancelled(c){N(c),P(C,[c])}})}function U(c){if(null==c)return null;if((0,n.Kn)(c))return[j(c.enter),j(c.leave)];{const e=j(c);return[e,e]}}function j(c){const e=(0,n.He)(c);return e}function B(c,e){e.split(/\s+/).forEach((e=>e&&c.classList.add(e))),(c._vtc||(c._vtc=new Set)).add(e)}function q(c,e){e.split(/\s+/).forEach((e=>e&&c.classList.remove(e)));const{_vtc:s}=c;s&&(s.delete(e),s.size||(c._vtc=void 0))}function W(c){requestAnimationFrame((()=>{requestAnimationFrame(c)}))}let $=0;function G(c,e,s,n){const t=c._endId=++$,a=()=>{t===c._endId&&n()};if(s)return setTimeout(a,s);const{type:i,timeout:r,propCount:o}=J(c,e);if(!i)return n();const l=i+"end";let f=0;const u=()=>{c.removeEventListener(l,h),a()},h=e=>{e.target===c&&++f>=o&&u()};setTimeout((()=>{f<o&&u()}),r+1),c.addEventListener(l,h)}function J(c,e){const s=window.getComputedStyle(c),n=c=>(s[c]||"").split(", "),t=n(`${E}Delay`),a=n(`${E}Duration`),i=K(t,a),r=n(`${T}Delay`),o=n(`${T}Duration`),l=K(r,o);let f=null,u=0,h=0;e===E?i>0&&(f=E,u=i,h=a.length):e===T?l>0&&(f=T,u=l,h=o.length):(u=Math.max(i,l),f=u>0?i>l?E:T:null,h=f?f===E?a.length:o.length:0);const m=f===E&&/\b(transform|all)(,|$)/.test(n(`${E}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:m}}function K(c,e){while(c.length<e.length)c=c.concat(c);return Math.max(...e.map(((e,s)=>Y(e)+Y(c[s]))))}function Y(c){return 1e3*Number(c.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Q=new WeakMap,Z=new WeakMap,cc={name:"TransitionGroup",props:(0,n.l7)({},R,{tag:String,moveClass:String}),setup(c,{slots:e}){const s=(0,t.FN)(),n=(0,t.Y8)();let i,r;return(0,t.ic)((()=>{if(!i.length)return;const e=c.moveClass||`${c.name||"v"}-move`;if(!tc(i[0].el,s.vnode.el,e))return;i.forEach(ec),i.forEach(sc);const n=i.filter(nc);X(),n.forEach((c=>{const s=c.el,n=s.style;B(s,e),n.transform=n.webkitTransform=n.transitionDuration="";const t=s._moveCb=c=>{c&&c.target!==s||c&&!/transform$/.test(c.propertyName)||(s.removeEventListener("transitionend",t),s._moveCb=null,q(s,e))};s.addEventListener("transitionend",t)}))})),()=>{const o=(0,a.IU)(c),l=F(o);let f=o.tag||t.HY;i=r,r=e.default?(0,t.Q6)(e.default()):[];for(let c=0;c<r.length;c++){const e=r[c];null!=e.key&&(0,t.nK)(e,(0,t.U2)(e,l,n,s))}if(i)for(let c=0;c<i.length;c++){const e=i[c];(0,t.nK)(e,(0,t.U2)(e,l,n,s)),Q.set(e,e.el.getBoundingClientRect())}return(0,t.Wm)(f,null,r)}}};cc.props;function ec(c){const e=c.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function sc(c){Z.set(c,c.el.getBoundingClientRect())}function nc(c){const e=Q.get(c),s=Z.get(c),n=e.left-s.left,t=e.top-s.top;if(n||t){const e=c.el.style;return e.transform=e.webkitTransform=`translate(${n}px,${t}px)`,e.transitionDuration="0s",c}}function tc(c,e,s){const n=c.cloneNode();c._vtc&&c._vtc.forEach((c=>{c.split(/\s+/).forEach((c=>c&&n.classList.remove(c)))})),s.split(/\s+/).forEach((c=>c&&n.classList.add(c))),n.style.display="none";const t=1===e.nodeType?e:e.parentNode;t.appendChild(n);const{hasTransform:a}=J(n);return t.removeChild(n),a}const ac=c=>{const e=c.props["onUpdate:modelValue"]||!1;return(0,n.kJ)(e)?c=>(0,n.ir)(e,c):e};function ic(c){c.target.composing=!0}function rc(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oc={created(c,{modifiers:{lazy:e,trim:s,number:t}},a){c._assign=ac(a);const i=t||a.props&&"number"===a.props.type;M(c,e?"change":"input",(e=>{if(e.target.composing)return;let t=c.value;s&&(t=t.trim()),i&&(t=(0,n.h5)(t)),c._assign(t)})),s&&M(c,"change",(()=>{c.value=c.value.trim()})),e||(M(c,"compositionstart",ic),M(c,"compositionend",rc),M(c,"change",rc))},mounted(c,{value:e}){c.value=null==e?"":e},beforeUpdate(c,{value:e,modifiers:{lazy:s,trim:t,number:a}},i){if(c._assign=ac(i),c.composing)return;if(document.activeElement===c&&"range"!==c.type){if(s)return;if(t&&c.value.trim()===e)return;if((a||"number"===c.type)&&(0,n.h5)(c.value)===e)return}const r=null==e?"":e;c.value!==r&&(c.value=r)}};const lc=(0,n.l7)({patchProp:_},l);let fc;function uc(){return fc||(fc=(0,t.Us)(lc))}const hc=(...c)=>{const e=uc().createApp(...c);const{mount:s}=e;return e.mount=c=>{const t=mc(c);if(!t)return;const a=e._component;(0,n.mf)(a)||a.render||a.template||(a.template=t.innerHTML),t.innerHTML="";const i=s(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),i},e};function mc(c){if((0,n.HD)(c)){const e=document.querySelector(c);return e}return c}},7139:function(c,e,s){"use strict";s.d(e,{C_:function(){return u},DM:function(){return E},E9:function(){return ic},F7:function(){return y},Gg:function(){return $},HD:function(){return R},He:function(){return tc},Kj:function(){return O},Kn:function(){return D},NO:function(){return L},Nj:function(){return sc},Od:function(){return w},PO:function(){return q},Pq:function(){return m},RI:function(){return k},S0:function(){return W},W7:function(){return B},WV:function(){return z},Z6:function(){return g},_A:function(){return K},_N:function(){return A},aU:function(){return cc},dG:function(){return C},e1:function(){return a},fY:function(){return n},h5:function(){return nc},hR:function(){return Z},hq:function(){return H},ir:function(){return ec},j5:function(){return i},kC:function(){return Q},kJ:function(){return _},kT:function(){return M},l7:function(){return N},mf:function(){return I},rs:function(){return X},tI:function(){return F},tR:function(){return x},yA:function(){return p},yk:function(){return P},zw:function(){return V}});s(7658);function n(c,e){const s=Object.create(null),n=c.split(",");for(let t=0;t<n.length;t++)s[n[t]]=!0;return e?c=>!!s[c.toLowerCase()]:c=>!!s[c]}const t="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",a=n(t);function i(c){if(_(c)){const e={};for(let s=0;s<c.length;s++){const n=c[s],t=R(n)?f(n):i(n);if(t)for(const c in t)e[c]=t[c]}return e}return R(c)||D(c)?c:void 0}const r=/;(?![^(]*\))/g,o=/:([^]+)/,l=/\/\*.*?\*\//gs;function f(c){const e={};return c.replace(l,"").split(r).forEach((c=>{if(c){const s=c.split(o);s.length>1&&(e[s[0].trim()]=s[1].trim())}})),e}function u(c){let e="";if(R(c))e=c;else if(_(c))for(let s=0;s<c.length;s++){const n=u(c[s]);n&&(e+=n+" ")}else if(D(c))for(const s in c)c[s]&&(e+=s+" ");return e.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m=n(h);function p(c){return!!c||""===c}function d(c,e){if(c.length!==e.length)return!1;let s=!0;for(let n=0;s&&n<c.length;n++)s=z(c[n],e[n]);return s}function z(c,e){if(c===e)return!0;let s=T(c),n=T(e);if(s||n)return!(!s||!n)&&c.getTime()===e.getTime();if(s=P(c),n=P(e),s||n)return c===e;if(s=_(c),n=_(e),s||n)return!(!s||!n)&&d(c,e);if(s=D(c),n=D(e),s||n){if(!s||!n)return!1;const t=Object.keys(c).length,a=Object.keys(e).length;if(t!==a)return!1;for(const s in c){const n=c.hasOwnProperty(s),t=e.hasOwnProperty(s);if(n&&!t||!n&&t||!z(c[s],e[s]))return!1}}return String(c)===String(e)}function H(c,e){return c.findIndex((c=>z(c,e)))}const V=c=>R(c)?c:null==c?"":_(c)||D(c)&&(c.toString===U||!I(c.toString))?JSON.stringify(c,v,2):String(c),v=(c,e)=>e&&e.__v_isRef?v(c,e.value):A(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((c,[e,s])=>(c[`${e} =>`]=s,c)),{})}:E(e)?{[`Set(${e.size})`]:[...e.values()]}:!D(e)||_(e)||q(e)?e:String(e),M={},g=[],C=()=>{},L=()=>!1,b=/^on[^a-z]/,y=c=>b.test(c),x=c=>c.startsWith("onUpdate:"),N=Object.assign,w=(c,e)=>{const s=c.indexOf(e);s>-1&&c.splice(s,1)},S=Object.prototype.hasOwnProperty,k=(c,e)=>S.call(c,e),_=Array.isArray,A=c=>"[object Map]"===j(c),E=c=>"[object Set]"===j(c),T=c=>"[object Date]"===j(c),O=c=>"[object RegExp]"===j(c),I=c=>"function"===typeof c,R=c=>"string"===typeof c,P=c=>"symbol"===typeof c,D=c=>null!==c&&"object"===typeof c,F=c=>D(c)&&I(c.then)&&I(c.catch),U=Object.prototype.toString,j=c=>U.call(c),B=c=>j(c).slice(8,-1),q=c=>"[object Object]"===j(c),W=c=>R(c)&&"NaN"!==c&&"-"!==c[0]&&""+parseInt(c,10)===c,$=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=c=>{const e=Object.create(null);return s=>{const n=e[s];return n||(e[s]=c(s))}},J=/-(\w)/g,K=G((c=>c.replace(J,((c,e)=>e?e.toUpperCase():"")))),Y=/\B([A-Z])/g,X=G((c=>c.replace(Y,"-$1").toLowerCase())),Q=G((c=>c.charAt(0).toUpperCase()+c.slice(1))),Z=G((c=>c?`on${Q(c)}`:"")),cc=(c,e)=>!Object.is(c,e),ec=(c,e)=>{for(let s=0;s<c.length;s++)c[s](e)},sc=(c,e,s)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:s})},nc=c=>{const e=parseFloat(c);return isNaN(e)?c:e},tc=c=>{const e=R(c)?Number(c):NaN;return isNaN(e)?c:e};let ac;const ic=()=>ac||(ac="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof s.g?s.g:{})},89:function(c,e){"use strict";e.Z=(c,e)=>{const s=c.__vccOpts||c;for(const[n,t]of e)s[n]=t;return s}},7077:function(c,e,s){"use strict";s.d(e,{Jn:function(){return dc},qX:function(){return uc},Xd:function(){return fc},Mq:function(){return Hc},ZF:function(){return zc},KN:function(){return Vc}});s(7658);var n=s(7142),t=s(5168),a=s(223);s(2801);const i=(c,e)=>e.some((e=>c instanceof e));let r,o;function l(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,h=new WeakMap,m=new WeakMap,p=new WeakMap,d=new WeakMap;function z(c){const e=new Promise(((e,s)=>{const n=()=>{c.removeEventListener("success",t),c.removeEventListener("error",a)},t=()=>{e(C(c.result)),n()},a=()=>{s(c.error),n()};c.addEventListener("success",t),c.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&u.set(e,c)})).catch((()=>{})),d.set(e,c),e}function H(c){if(h.has(c))return;const e=new Promise(((e,s)=>{const n=()=>{c.removeEventListener("complete",t),c.removeEventListener("error",a),c.removeEventListener("abort",a)},t=()=>{e(),n()},a=()=>{s(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",t),c.addEventListener("error",a),c.addEventListener("abort",a)}));h.set(c,e)}let V={get(c,e,s){if(c instanceof IDBTransaction){if("done"===e)return h.get(c);if("objectStoreNames"===e)return c.objectStoreNames||m.get(c);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return C(c[e])},set(c,e,s){return c[e]=s,!0},has(c,e){return c instanceof IDBTransaction&&("done"===e||"store"===e)||e in c}};function v(c){V=c(V)}function M(c){return c!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?f().includes(c)?function(...e){return c.apply(L(this),e),C(u.get(this))}:function(...e){return C(c.apply(L(this),e))}:function(e,...s){const n=c.call(L(this),e,...s);return m.set(n,e.sort?e.sort():[e]),C(n)}}function g(c){return"function"===typeof c?M(c):(c instanceof IDBTransaction&&H(c),i(c,l())?new Proxy(c,V):c)}function C(c){if(c instanceof IDBRequest)return z(c);if(p.has(c))return p.get(c);const e=g(c);return e!==c&&(p.set(c,e),d.set(e,c)),e}const L=c=>d.get(c);function b(c,e,{blocked:s,upgrade:n,blocking:t,terminated:a}={}){const i=indexedDB.open(c,e),r=C(i);return n&&i.addEventListener("upgradeneeded",(c=>{n(C(i.result),c.oldVersion,c.newVersion,C(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),r.then((c=>{a&&c.addEventListener("close",(()=>a())),t&&c.addEventListener("versionchange",(()=>t()))})).catch((()=>{})),r}const y=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],N=new Map;function w(c,e){if(!(c instanceof IDBDatabase)||e in c||"string"!==typeof e)return;if(N.get(e))return N.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,t=x.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!t&&!y.includes(s))return;const a=async function(c,...e){const a=this.transaction(c,t?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(e.shift())),(await Promise.all([i[s](...e),t&&a.done]))[0]};return N.set(e,a),a}v((c=>({...c,get:(e,s,n)=>w(e,s)||c.get(e,s,n),has:(e,s)=>!!w(e,s)||c.has(e,s)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(c){this.container=c}getPlatformInfoString(){const c=this.container.getProviders();return c.map((c=>{if(k(c)){const e=c.getImmediate();return`${e.library}/${e.version}`}return null})).filter((c=>c)).join(" ")}}function k(c){const e=c.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const _="@firebase/app",A="0.9.3",E=new t.Yd("@firebase/app"),T="@firebase/app-compat",O="@firebase/analytics-compat",I="@firebase/analytics",R="@firebase/app-check-compat",P="@firebase/app-check",D="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",j="@firebase/database-compat",B="@firebase/functions",q="@firebase/functions-compat",W="@firebase/installations",$="@firebase/installations-compat",G="@firebase/messaging",J="@firebase/messaging-compat",K="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",cc="@firebase/storage-compat",ec="@firebase/firestore",sc="@firebase/firestore-compat",nc="firebase",tc="9.17.1",ac="[DEFAULT]",ic={[_]:"fire-core",[T]:"fire-core-compat",[I]:"fire-analytics",[O]:"fire-analytics-compat",[P]:"fire-app-check",[R]:"fire-app-check-compat",[D]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[j]:"fire-rtdb-compat",[B]:"fire-fn",[q]:"fire-fn-compat",[W]:"fire-iid",[$]:"fire-iid-compat",[G]:"fire-fcm",[J]:"fire-fcm-compat",[K]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[cc]:"fire-gcs-compat",[ec]:"fire-fst",[sc]:"fire-fst-compat","fire-js":"fire-js",[nc]:"fire-js-all"},rc=new Map,oc=new Map;function lc(c,e){try{c.container.addComponent(e)}catch(s){E.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,s)}}function fc(c){const e=c.name;if(oc.has(e))return E.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,c);for(const s of rc.values())lc(s,c);return!0}function uc(c,e){const s=c.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),c.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mc=new a.LL("app","Firebase",hc);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(c,e,s){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw mc.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=tc;function zc(c,e={}){let s=c;if("object"!==typeof e){const c=e;e={name:c}}const t=Object.assign({name:ac,automaticDataCollectionEnabled:!1},e),i=t.name;if("string"!==typeof i||!i)throw mc.create("bad-app-name",{appName:String(i)});if(s||(s=(0,a.aH)()),!s)throw mc.create("no-options");const r=rc.get(i);if(r){if((0,a.vZ)(s,r.options)&&(0,a.vZ)(t,r.config))return r;throw mc.create("duplicate-app",{appName:i})}const o=new n.H0(i);for(const n of oc.values())o.addComponent(n);const l=new pc(s,t,o);return rc.set(i,l),l}function Hc(c=ac){const e=rc.get(c);if(!e&&c===ac)return zc();if(!e)throw mc.create("no-app",{appName:c});return e}function Vc(c,e,s){var t;let a=null!==(t=ic[c])&&void 0!==t?t:c;s&&(a+=`-${s}`);const i=a.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const c=[`Unable to register library "${a}" with version "${e}":`];return i&&c.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&r&&c.push("and"),r&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void E.warn(c.join(" "))}fc(new n.wA(`${a}-version`,(()=>({library:a,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vc="firebase-heartbeat-database",Mc=1,gc="firebase-heartbeat-store";let Cc=null;function Lc(){return Cc||(Cc=b(vc,Mc,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(gc)}}}).catch((c=>{throw mc.create("idb-open",{originalErrorMessage:c.message})}))),Cc}async function bc(c){try{const e=await Lc();return e.transaction(gc).objectStore(gc).get(xc(c))}catch(e){if(e instanceof a.ZR)E.warn(e.message);else{const c=mc.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});E.warn(c.message)}}}async function yc(c,e){try{const s=await Lc(),n=s.transaction(gc,"readwrite"),t=n.objectStore(gc);return await t.put(e,xc(c)),n.done}catch(s){if(s instanceof a.ZR)E.warn(s.message);else{const c=mc.create("idb-set",{originalErrorMessage:null===s||void 0===s?void 0:s.message});E.warn(c.message)}}}function xc(c){return`${c.name}!${c.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=1024,wc=2592e6;class Sc{constructor(c){this.container=c,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ac(e),this._heartbeatsCachePromise=this._storage.read().then((c=>(this._heartbeatsCache=c,c)))}async triggerHeartbeat(){const c=this.container.getProvider("platform-logger").getImmediate(),e=c.getPlatformInfoString(),s=kc();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==s&&!this._heartbeatsCache.heartbeats.some((c=>c.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((c=>{const e=new Date(c.date).valueOf(),s=Date.now();return s-e<=wc})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const c=kc(),{heartbeatsToSend:e,unsentEntries:s}=_c(this._heartbeatsCache.heartbeats),n=(0,a.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function kc(){const c=new Date;return c.toISOString().substring(0,10)}function _c(c,e=Nc){const s=[];let n=c.slice();for(const t of c){const c=s.find((c=>c.agent===t.agent));if(c){if(c.dates.push(t.date),Ec(s)>e){c.dates.pop();break}}else if(s.push({agent:t.agent,dates:[t.date]}),Ec(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class Ac{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then((()=>!0)).catch((()=>!1))}async read(){const c=await this._canUseIndexedDBPromise;if(c){const c=await bc(this.app);return c||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(c){var e;const s=await this._canUseIndexedDBPromise;if(s){const s=await this.read();return yc(this.app,{lastSentHeartbeatDate:null!==(e=c.lastSentHeartbeatDate)&&void 0!==e?e:s.lastSentHeartbeatDate,heartbeats:c.heartbeats})}}async add(c){var e;const s=await this._canUseIndexedDBPromise;if(s){const s=await this.read();return yc(this.app,{lastSentHeartbeatDate:null!==(e=c.lastSentHeartbeatDate)&&void 0!==e?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...c.heartbeats]})}}}function Ec(c){return(0,a.L)(JSON.stringify({version:2,heartbeats:c})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(c){fc(new n.wA("platform-logger",(c=>new S(c)),"PRIVATE")),fc(new n.wA("heartbeat",(c=>new Sc(c)),"PRIVATE")),Vc(_,A,c),Vc(_,A,"esm2017"),Vc("fire-js","")}Tc("")},7142:function(c,e,s){"use strict";s.d(e,{H0:function(){return l},wA:function(){return t}});var n=s(223);class t{constructor(c,e,s){this.name=c,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(c,e){this.name=c,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const e=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(e)){const c=new n.BH;if(this.instancesDeferred.set(e,c),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&c.resolve(s)}catch(s){}}return this.instancesDeferred.get(e).promise}getImmediate(c){var e;const s=this.normalizeInstanceIdentifier(null===c||void 0===c?void 0:c.identifier),n=null!==(e=null===c||void 0===c?void 0:c.optional)&&void 0!==e&&e;if(!this.isInitialized(s)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:s})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,this.shouldAutoInitialize()){if(o(c))try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(const[c,s]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(c);try{const c=this.getOrInitializeService({instanceIdentifier:n});s.resolve(c)}catch(e){}}}}clearInstance(c=a){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter((c=>"INTERNAL"in c)).map((c=>c.INTERNAL.delete())),...c.filter((c=>"_delete"in c)).map((c=>c._delete()))])}isComponentSet(){return null!=this.component}isInitialized(c=a){return this.instances.has(c)}getOptions(c=a){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:e={}}=c,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[t,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(t);s===c&&a.resolve(n)}return n}onInit(c,e){var s;const n=this.normalizeInstanceIdentifier(e),t=null!==(s=this.onInitCallbacks.get(n))&&void 0!==s?s:new Set;t.add(c),this.onInitCallbacks.set(n,t);const a=this.instances.get(n);return a&&c(a,n),()=>{t.delete(c)}}invokeOnInitCallbacks(c,e){const s=this.onInitCallbacks.get(e);if(s)for(const t of s)try{t(c,e)}catch(n){}}getOrInitializeService({instanceIdentifier:c,options:e={}}){let s=this.instances.get(c);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:r(c),options:e}),this.instances.set(c,s),this.instancesOptions.set(c,e),this.invokeOnInitCallbacks(s,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,s)}catch(n){}return s||null}normalizeInstanceIdentifier(c=a){return this.component?this.component.multipleInstances?c:a:c}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function r(c){return c===a?void 0:c}function o(c){return"EAGER"===c.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const e=this.getProvider(c.name);if(e.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);e.setComponent(c)}addOrOverwriteComponent(c){const e=this.getProvider(c.name);e.isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const e=new i(c,this);return this.providers.set(c,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(c,e,s){"use strict";s.d(e,{Yd:function(){return l},in:function(){return t}});s(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KN)(t,a,"app")},340:function(c,e,s){"use strict";s.d(e,{Xb:function(){return n.Xb},e5:function(){return n.e5},hJ:function(){return n.hJ},rh:function(){return n.rh},v0:function(){return n.v0}});var n=s(199)},2578:function(c,e,s){"use strict";s.d(e,{WB:function(){return uc},Q_:function(){return Lc},Jk:function(){return bc}});s(7658),s(541);var n=s(4870),t=s(3396),a=!1;function i(c,e,s){return Array.isArray(c)?(c.length=Math.max(c.length,e),c.splice(e,1,s),s):(c[e]=s,s)}function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof s.g?s.g:{}}const l="function"===typeof Proxy,f="devtools-plugin:setup",u="plugin:settings:set";let h,m,p;function d(){var c;return void 0!==h||("undefined"!==typeof window&&window.performance?(h=!0,m=window.performance):"undefined"!==typeof s.g&&(null===(c=s.g.perf_hooks)||void 0===c?void 0:c.performance)?(h=!0,m=s.g.perf_hooks.performance):h=!1),h}function z(){return d()?m.now():Date.now()}class H{constructor(c,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=c,this.hook=e;const s={};if(c.settings)for(const i in c.settings){const e=c.settings[i];s[i]=e.defaultValue}const n=`__vue-devtools-plugin-settings__${c.id}`;let t=Object.assign({},s);try{const c=localStorage.getItem(n),e=JSON.parse(c);Object.assign(t,e)}catch(a){}this.fallbacks={getSettings(){return t},setSettings(c){try{localStorage.setItem(n,JSON.stringify(c))}catch(a){}t=c},now(){return z()}},e&&e.on(u,((c,e)=>{c===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(c,e)=>this.target?this.target.on[e]:(...c)=>{this.onQueue.push({method:e,args:c})}}),this.proxiedTarget=new Proxy({},{get:(c,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...c)=>(this.targetQueue.push({method:e,args:c,resolve:()=>{}}),this.fallbacks[e](...c)):(...c)=>new Promise((s=>{this.targetQueue.push({method:e,args:c,resolve:s})}))})}async setRealTarget(c){this.target=c;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function V(c,e){const s=c,n=o(),t=r(),a=l&&s.enableEarlyProxy;if(!t||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const c=a?new H(s,t):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:s,setupFn:e,proxy:c}),c&&e(c.proxiedTarget)}else t.emit(f,c,e)}const v=c=>p=c,M=Symbol();function g(c){return c&&"object"===typeof c&&"[object Object]"===Object.prototype.toString.call(c)&&"function"!==typeof c.toJSON}var C;(function(c){c["direct"]="direct",c["patchObject"]="patch object",c["patchFunction"]="patch function"})(C||(C={}));const L="undefined"!==typeof window,b=!1,y=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function x(c,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob([String.fromCharCode(65279),c],{type:c.type}):c}function N(c,e,s){const n=new XMLHttpRequest;n.open("GET",c),n.responseType="blob",n.onload=function(){A(n.response,e,s)},n.onerror=function(){console.error("could not download file")},n.send()}function w(c){const e=new XMLHttpRequest;e.open("HEAD",c,!1);try{e.send()}catch(s){}return e.status>=200&&e.status<=299}function S(c){try{c.dispatchEvent(new MouseEvent("click"))}catch(e){const s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(s)}}const k="object"===typeof navigator?navigator:{userAgent:""},_=(()=>/Macintosh/.test(k.userAgent)&&/AppleWebKit/.test(k.userAgent)&&!/Safari/.test(k.userAgent))(),A=L?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!_?E:"msSaveOrOpenBlob"in k?T:O:()=>{};function E(c,e="download",s){const n=document.createElement("a");n.download=e,n.rel="noopener","string"===typeof c?(n.href=c,n.origin!==location.origin?w(n.href)?N(c,e,s):(n.target="_blank",S(n)):S(n)):(n.href=URL.createObjectURL(c),setTimeout((function(){URL.revokeObjectURL(n.href)}),4e4),setTimeout((function(){S(n)}),0))}function T(c,e="download",s){if("string"===typeof c)if(w(c))N(c,e,s);else{const e=document.createElement("a");e.href=c,e.target="_blank",setTimeout((function(){S(e)}))}else navigator.msSaveOrOpenBlob(x(c,s),e)}function O(c,e,s,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),"string"===typeof c)return N(c,e,s);const t="application/octet-stream"===c.type,a=/constructor/i.test(String(y.HTMLElement))||"safari"in y,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||t&&a||_)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let c=e.result;if("string"!==typeof c)throw n=null,new Error("Wrong reader.result type");c=i?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=c:location.assign(c),n=null},e.readAsDataURL(c)}else{const e=URL.createObjectURL(c);n?n.location.assign(e):location.href=e,n=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}function I(c,e){const s="🍍 "+c;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(s,e):"error"===e?console.error(s):"warn"===e?console.warn(s):console.log(s)}function R(c){return"_a"in c&&"install"in c}function P(){if(!("clipboard"in navigator))return I("Your browser doesn't support the Clipboard API","error"),!0}function D(c){return!!(c instanceof Error&&c.message.toLowerCase().includes("document is not focused"))&&(I('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function F(c){if(!P())try{await navigator.clipboard.writeText(JSON.stringify(c.state.value)),I("Global state copied to clipboard.")}catch(e){if(D(e))return;I("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function U(c){if(!P())try{c.state.value=JSON.parse(await navigator.clipboard.readText()),I("Global state pasted from clipboard.")}catch(e){if(D(e))return;I("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function j(c){try{A(new Blob([JSON.stringify(c.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){I("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let B;function q(){function c(){return new Promise(((c,e)=>{B.onchange=async()=>{const e=B.files;if(!e)return c(null);const s=e.item(0);return c(s?{text:await s.text(),file:s}:null)},B.oncancel=()=>c(null),B.onerror=e,B.click()}))}return B||(B=document.createElement("input"),B.type="file",B.accept=".json"),c}async function W(c){try{const e=await q(),s=await e();if(!s)return;const{text:n,file:t}=s;c.state.value=JSON.parse(n),I(`Global state imported from "${t.name}".`)}catch(e){I("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}function $(c){return{_custom:{display:c}}}const G="🍍 Pinia (root)",J="_root";function K(c){return R(c)?{id:J,label:G}:{id:c.$id,label:c.$id}}function Y(c){if(R(c)){const e=Array.from(c._s.keys()),s=c._s,n={state:e.map((e=>({editable:!0,key:e,value:c.state.value[e]}))),getters:e.filter((c=>s.get(c)._getters)).map((c=>{const e=s.get(c);return{editable:!1,key:c,value:e._getters.reduce(((c,s)=>(c[s]=e[s],c)),{})}}))};return n}const e={state:Object.keys(c.$state).map((e=>({editable:!0,key:e,value:c.$state[e]})))};return c._getters&&c._getters.length&&(e.getters=c._getters.map((e=>({editable:!1,key:e,value:c[e]})))),c._customProperties.size&&(e.customProperties=Array.from(c._customProperties).map((e=>({editable:!0,key:e,value:c[e]})))),e}function X(c){return c?Array.isArray(c)?c.reduce(((c,e)=>(c.keys.push(e.key),c.operations.push(e.type),c.oldValue[e.key]=e.oldValue,c.newValue[e.key]=e.newValue,c)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:$(c.type),key:$(c.key),oldValue:c.oldValue,newValue:c.newValue}:{}}function Q(c){switch(c){case C.direct:return"mutation";case C.patchFunction:return"$patch";case C.patchObject:return"$patch";default:return"unknown"}}let Z=!0;const cc=[],ec="pinia:mutations",sc="pinia",{assign:nc}=Object,tc=c=>"🍍 "+c;function ac(c,e){V({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:cc,app:c},(s=>{"function"!==typeof s.now&&I("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.addTimelineLayer({id:ec,label:"Pinia 🍍",color:15064968}),s.addInspector({id:sc,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{F(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await U(e),s.sendInspectorTree(sc),s.sendInspectorState(sc)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{j(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await W(e),s.sendInspectorTree(sc),s.sendInspectorState(sc)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:c=>{const s=e._s.get(c);s?s._isOptionsAPI?(s.$reset(),I(`Store "${c}" reset.`)):I(`Cannot reset "${c}" store because it's a setup store.`,"warn"):I(`Cannot reset "${c}" store because it wasn't found.`,"warn")}}]}),s.on.inspectComponent(((c,e)=>{const s=c.componentInstance&&c.componentInstance.proxy;if(s&&s._pStores){const e=c.componentInstance.proxy._pStores;Object.values(e).forEach((e=>{c.instanceData.state.push({type:tc(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,n.IU)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce(((c,s)=>(c[s]=e.$state[s],c)),{})}),e._getters&&e._getters.length&&c.instanceData.state.push({type:tc(e.$id),key:"getters",editable:!1,value:e._getters.reduce(((c,s)=>{try{c[s]=e[s]}catch(n){c[s]=n}return c}),{})})}))}})),s.on.getInspectorTree((s=>{if(s.app===c&&s.inspectorId===sc){let c=[e];c=c.concat(Array.from(e._s.values())),s.rootNodes=(s.filter?c.filter((c=>"$id"in c?c.$id.toLowerCase().includes(s.filter.toLowerCase()):G.toLowerCase().includes(s.filter.toLowerCase()))):c).map(K)}})),s.on.getInspectorState((s=>{if(s.app===c&&s.inspectorId===sc){const c=s.nodeId===J?e:e._s.get(s.nodeId);if(!c)return;c&&(s.state=Y(c))}})),s.on.editInspectorState(((s,n)=>{if(s.app===c&&s.inspectorId===sc){const c=s.nodeId===J?e:e._s.get(s.nodeId);if(!c)return I(`store "${s.nodeId}" not found`,"error");const{path:n}=s;R(c)?n.unshift("state"):1===n.length&&c._customProperties.has(n[0])&&!(n[0]in c.$state)||n.unshift("$state"),Z=!1,s.set(c,n,s.state.value),Z=!0}})),s.on.editComponentState((c=>{if(c.type.startsWith("🍍")){const s=c.type.replace(/^🍍\s*/,""),n=e._s.get(s);if(!n)return I(`store "${s}" not found`,"error");const{path:t}=c;if("state"!==t[0])return I(`Invalid path for store "${s}":\n${t}\nOnly state can be modified.`);t[0]="$state",Z=!1,c.set(n,t,c.state.value),Z=!0}}))}))}function ic(c,e){cc.includes(tc(e.$id))||cc.push(tc(e.$id)),V({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:cc,app:c,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(c=>{const s="function"===typeof c.now?c.now.bind(c):Date.now;e.$onAction((({after:n,onError:t,name:a,args:i})=>{const r=oc++;c.addTimelineEvent({layerId:ec,event:{time:s(),title:"🛫 "+a,subtitle:"start",data:{store:$(e.$id),action:$(a),args:i},groupId:r}}),n((n=>{rc=void 0,c.addTimelineEvent({layerId:ec,event:{time:s(),title:"🛬 "+a,subtitle:"end",data:{store:$(e.$id),action:$(a),args:i,result:n},groupId:r}})})),t((n=>{rc=void 0,c.addTimelineEvent({layerId:ec,event:{time:s(),logType:"error",title:"💥 "+a,subtitle:"end",data:{store:$(e.$id),action:$(a),args:i,error:n},groupId:r}})}))}),!0),e._customProperties.forEach((a=>{(0,t.YP)((()=>(0,n.SU)(e[a])),((e,n)=>{c.notifyComponentUpdate(),c.sendInspectorState(sc),Z&&c.addTimelineEvent({layerId:ec,event:{time:s(),title:"Change",subtitle:a,data:{newValue:e,oldValue:n},groupId:rc}})}),{deep:!0})})),e.$subscribe((({events:n,type:t},a)=>{if(c.notifyComponentUpdate(),c.sendInspectorState(sc),!Z)return;const i={time:s(),title:Q(t),data:nc({store:$(e.$id)},X(n)),groupId:rc};rc=void 0,t===C.patchFunction?i.subtitle="⤵️":t===C.patchObject?i.subtitle="🧩":n&&!Array.isArray(n)&&(i.subtitle=n.type),n&&(i.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:n}}),c.addTimelineEvent({layerId:ec,event:i})}),{detached:!0,flush:"sync"});const a=e._hotUpdate;e._hotUpdate=(0,n.Xl)((n=>{a(n),c.addTimelineEvent({layerId:ec,event:{time:s(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:$(e.$id),info:$("HMR update")}}}),c.notifyComponentUpdate(),c.sendInspectorTree(sc),c.sendInspectorState(sc)}));const{$dispose:i}=e;e.$dispose=()=>{i(),c.notifyComponentUpdate(),c.sendInspectorTree(sc),c.sendInspectorState(sc),c.getSettings().logStoreChanges&&I(`Disposed "${e.$id}" store 🗑`)},c.notifyComponentUpdate(),c.sendInspectorTree(sc),c.sendInspectorState(sc),c.getSettings().logStoreChanges&&I(`"${e.$id}" store installed 🆕`)}))}let rc,oc=0;function lc(c,e){const s=e.reduce(((e,s)=>(e[s]=(0,n.IU)(c)[s],e)),{});for(const n in s)c[n]=function(){const e=oc,t=new Proxy(c,{get(...c){return rc=e,Reflect.get(...c)},set(...c){return rc=e,Reflect.set(...c)}});return s[n].apply(t,arguments)}}function fc({app:c,store:e,options:s}){if(!e.$id.startsWith("__hot:")){if(s.state&&(e._isOptionsAPI=!0),"function"===typeof s.state){lc(e,Object.keys(s.actions));const c=e._hotUpdate;(0,n.IU)(e)._hotUpdate=function(s){c.apply(this,arguments),lc(e,Object.keys(s._hmrPayload.actions))}}ic(c,e)}}function uc(){const c=(0,n.B)(!0),e=c.run((()=>(0,n.iH)({})));let s=[],t=[];const i=(0,n.Xl)({install(c){v(i),a||(i._a=c,c.provide(M,i),c.config.globalProperties.$pinia=i,b&&ac(c,i),t.forEach((c=>s.push(c))),t=[])},use(c){return this._a||a?s.push(c):t.push(c),this},_p:s,_a:null,_e:c,_s:new Map,state:e});return b&&"undefined"!==typeof Proxy&&i.use(fc),i}const hc=()=>{};function mc(c,e,s,t=hc){c.push(e);const a=()=>{const s=c.indexOf(e);s>-1&&(c.splice(s,1),t())};return!s&&(0,n.nZ)()&&(0,n.EB)(a),a}function pc(c,...e){c.slice().forEach((c=>{c(...e)}))}function dc(c,e){c instanceof Map&&e instanceof Map&&e.forEach(((e,s)=>c.set(s,e))),c instanceof Set&&e instanceof Set&&e.forEach(c.add,c);for(const s in e){if(!e.hasOwnProperty(s))continue;const t=e[s],a=c[s];g(a)&&g(t)&&c.hasOwnProperty(s)&&!(0,n.dq)(t)&&!(0,n.PG)(t)?c[s]=dc(a,t):c[s]=t}return c}const zc=Symbol(),Hc=new WeakMap;function Vc(c){return a?!Hc.has(c):!g(c)||!c.hasOwnProperty(zc)}const{assign:vc}=Object;function Mc(c){return!(!(0,n.dq)(c)||!c.effect)}function gc(c,e,s,r){const{state:o,actions:l,getters:f}=e,u=s.state.value[c];let h;function m(){u||(a?i(s.state.value,c,o?o():{}):s.state.value[c]=o?o():{});const e=(0,n.BK)(s.state.value[c]);return vc(e,l,Object.keys(f||{}).reduce(((e,i)=>(e[i]=(0,n.Xl)((0,t.Fl)((()=>{v(s);const e=s._s.get(c);if(!a||e._r)return f[i].call(e,e)}))),e)),{}))}return h=Cc(c,m,e,s,r,!0),h.$reset=function(){const c=o?o():{};this.$patch((e=>{vc(e,c)}))},h}function Cc(c,e,s={},r,o,l){let f;const u=vc({actions:{}},s);const h={deep:!0};let m,p;let d,z=(0,n.Xl)([]),H=(0,n.Xl)([]);const V=r.state.value[c];l||V||(a?i(r.state.value,c,{}):r.state.value[c]={});const M=(0,n.iH)({});let g;function L(e){let s;m=p=!1,"function"===typeof e?(e(r.state.value[c]),s={type:C.patchFunction,storeId:c,events:d}):(dc(r.state.value[c],e),s={type:C.patchObject,payload:e,storeId:c,events:d});const n=g=Symbol();(0,t.Y3)().then((()=>{g===n&&(m=!0)})),p=!0,pc(z,s,r.state.value[c])}const y=hc;function x(){f.stop(),z=[],H=[],r._s.delete(c)}function N(e,s){return function(){v(r);const n=Array.from(arguments),t=[],a=[];function i(c){t.push(c)}function o(c){a.push(c)}let l;pc(H,{args:n,name:e,store:k,after:i,onError:o});try{l=s.apply(this&&this.$id===c?this:k,n)}catch(f){throw pc(a,f),f}return l instanceof Promise?l.then((c=>(pc(t,c),c))).catch((c=>(pc(a,c),Promise.reject(c)))):(pc(t,l),l)}}const w=(0,n.Xl)({actions:{},getters:{},state:[],hotState:M}),S={_p:r,$id:c,$onAction:mc.bind(null,H),$patch:L,$reset:y,$subscribe(e,s={}){const n=mc(z,e,s.detached,(()=>a())),a=f.run((()=>(0,t.YP)((()=>r.state.value[c]),(n=>{("sync"===s.flush?p:m)&&e({storeId:c,type:C.direct,events:d},n)}),vc({},h,s))));return n},$dispose:x};a&&(S._r=!1);const k=(0,n.qj)(b?vc({_hmrPayload:w,_customProperties:(0,n.Xl)(new Set)},S):S);r._s.set(c,k);const _=r._e.run((()=>(f=(0,n.B)(),f.run((()=>e())))));for(const t in _){const e=_[t];if((0,n.dq)(e)&&!Mc(e)||(0,n.PG)(e))l||(V&&Vc(e)&&((0,n.dq)(e)?e.value=V[t]:dc(e,V[t])),a?i(r.state.value[c],t,e):r.state.value[c][t]=e);else if("function"===typeof e){const c=N(t,e);a?i(_,t,c):_[t]=c,u.actions[t]=e}else 0}if(a?Object.keys(_).forEach((c=>{i(k,c,_[c])})):(vc(k,_),vc((0,n.IU)(k),_)),Object.defineProperty(k,"$state",{get:()=>r.state.value[c],set:c=>{L((e=>{vc(e,c)}))}}),b){const c={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((e=>{Object.defineProperty(k,e,vc({value:k[e]},c))}))}return a&&(k._r=!0),r._p.forEach((c=>{if(b){const e=f.run((()=>c({store:k,app:r._a,pinia:r,options:u})));Object.keys(e||{}).forEach((c=>k._customProperties.add(c))),vc(k,e)}else vc(k,f.run((()=>c({store:k,app:r._a,pinia:r,options:u}))))})),V&&l&&s.hydrate&&s.hydrate(k.$state,V),m=!0,p=!0,k}function Lc(c,e,s){let n,a;const i="function"===typeof e;function r(c,s){const r=(0,t.FN)();c=c||r&&(0,t.f3)(M,null),c&&v(c),c=p,c._s.has(n)||(i?Cc(n,e,a,c):gc(n,a,c));const o=c._s.get(n);return o}return"string"===typeof c?(n=c,a=i?s:e):(a=c,n=c.id),r.$id=n,r}function bc(c){if(a)return(0,n.BK)(c);{c=(0,n.IU)(c);const e={};for(const s in c){const t=c[s];((0,n.dq)(t)||(0,n.PG)(t))&&(e[s]=(0,n.Vh)(c,s))}return e}}},2483:function(c,e,s){"use strict";s.d(e,{PO:function(){return D},p7:function(){return ee},tv:function(){return te}});s(7658),s(541);var n=s(3396),t=s(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const a="undefined"!==typeof window;function i(c){return c.__esModule||"Module"===c[Symbol.toStringTag]}const r=Object.assign;function o(c,e){const s={};for(const n in e){const t=e[n];s[n]=f(t)?t.map(c):c(t)}return s}const l=()=>{},f=Array.isArray;const u=/\/$/,h=c=>c.replace(u,"");function m(c,e,s="/"){let n,t={},a="",i="";const r=e.indexOf("#");let o=e.indexOf("?");return r<o&&r>=0&&(o=-1),o>-1&&(n=e.slice(0,o),a=e.slice(o+1,r>-1?r:e.length),t=c(a)),r>-1&&(n=n||e.slice(0,r),i=e.slice(r,e.length)),n=g(null!=n?n:e,s),{fullPath:n+(a&&"?")+a+i,path:n,query:t,hash:i}}function p(c,e){const s=e.query?c(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function d(c,e){return e&&c.toLowerCase().startsWith(e.toLowerCase())?c.slice(e.length)||"/":c}function z(c,e,s){const n=e.matched.length-1,t=s.matched.length-1;return n>-1&&n===t&&H(e.matched[n],s.matched[t])&&V(e.params,s.params)&&c(e.query)===c(s.query)&&e.hash===s.hash}function H(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function V(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const s in c)if(!v(c[s],e[s]))return!1;return!0}function v(c,e){return f(c)?M(c,e):f(e)?M(e,c):c===e}function M(c,e){return f(e)?c.length===e.length&&c.every(((c,s)=>c===e[s])):1===c.length&&c[0]===e}function g(c,e){if(c.startsWith("/"))return c;if(!c)return e;const s=e.split("/"),n=c.split("/");let t,a,i=s.length-1;for(t=0;t<n.length;t++)if(a=n[t],"."!==a){if(".."!==a)break;i>1&&i--}return s.slice(0,i).join("/")+"/"+n.slice(t-(t===n.length?1:0)).join("/")}var C,L;(function(c){c["pop"]="pop",c["push"]="push"})(C||(C={})),function(c){c["back"]="back",c["forward"]="forward",c["unknown"]=""}(L||(L={}));function b(c){if(!c)if(a){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return"/"!==c[0]&&"#"!==c[0]&&(c="/"+c),h(c)}const y=/^[^#]+#/;function x(c,e){return c.replace(y,"#")+e}function N(c,e){const s=document.documentElement.getBoundingClientRect(),n=c.getBoundingClientRect();return{behavior:e.behavior,left:n.left-s.left-(e.left||0),top:n.top-s.top-(e.top||0)}}const w=()=>({left:window.pageXOffset,top:window.pageYOffset});function S(c){let e;if("el"in c){const s=c.el,n="string"===typeof s&&s.startsWith("#");0;const t="string"===typeof s?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!t)return;e=N(t,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function k(c,e){const s=history.state?history.state.position-e:-1;return s+c}const _=new Map;function A(c,e){_.set(c,e)}function E(c){const e=_.get(c);return _.delete(c),e}let T=()=>location.protocol+"//"+location.host;function O(c,e){const{pathname:s,search:n,hash:t}=e,a=c.indexOf("#");if(a>-1){let e=t.includes(c.slice(a))?c.slice(a).length:1,s=t.slice(e);return"/"!==s[0]&&(s="/"+s),d(s,"")}const i=d(s,c);return i+n+t}function I(c,e,s,n){let t=[],a=[],i=null;const o=({state:a})=>{const r=O(c,location),o=s.value,l=e.value;let f=0;if(a){if(s.value=r,e.value=a,i&&i===o)return void(i=null);f=l?a.position-l.position:0}else n(r);t.forEach((c=>{c(s.value,o,{delta:f,type:C.pop,direction:f?f>0?L.forward:L.back:L.unknown})}))};function l(){i=s.value}function f(c){t.push(c);const e=()=>{const e=t.indexOf(c);e>-1&&t.splice(e,1)};return a.push(e),e}function u(){const{history:c}=window;c.state&&c.replaceState(r({},c.state,{scroll:w()}),"")}function h(){for(const c of a)c();a=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:f,destroy:h}}function R(c,e,s,n=!1,t=!1){return{back:c,current:e,forward:s,replaced:n,position:window.history.length,scroll:t?w():null}}function P(c){const{history:e,location:s}=window,n={value:O(c,s)},t={value:e.state};function a(n,a,i){const r=c.indexOf("#"),o=r>-1?(s.host&&document.querySelector("base")?c:c.slice(r))+n:T()+c+n;try{e[i?"replaceState":"pushState"](a,"",o),t.value=a}catch(l){console.error(l),s[i?"replace":"assign"](o)}}function i(c,s){const i=r({},e.state,R(t.value.back,c,t.value.forward,!0),s,{position:t.value.position});a(c,i,!0),n.value=c}function o(c,s){const i=r({},t.value,e.state,{forward:c,scroll:w()});a(i.current,i,!0);const o=r({},R(n.value,c,null),{position:i.position+1},s);a(c,o,!1),n.value=c}return t.value||a(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:n,state:t,push:o,replace:i}}function D(c){c=b(c);const e=P(c),s=I(c,e.state,e.location,e.replace);function n(c,e=!0){e||s.pauseListeners(),history.go(c)}const t=r({location:"",base:c,go:n,createHref:x.bind(null,c)},e,s);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>e.state.value}),t}function F(c){return"string"===typeof c||c&&"object"===typeof c}function U(c){return"string"===typeof c||"symbol"===typeof c}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B=Symbol("");var q;(function(c){c[c["aborted"]=4]="aborted",c[c["cancelled"]=8]="cancelled",c[c["duplicated"]=16]="duplicated"})(q||(q={}));function W(c,e){return r(new Error,{type:c,[B]:!0},e)}function $(c,e){return c instanceof Error&&B in c&&(null==e||!!(c.type&e))}const G="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function Y(c,e){const s=r({},J,e),n=[];let t=s.start?"^":"";const a=[];for(const r of c){const c=r.length?[]:[90];s.strict&&!r.length&&(t+="/");for(let e=0;e<r.length;e++){const n=r[e];let i=40+(s.sensitive?.25:0);if(0===n.type)e||(t+="/"),t+=n.value.replace(K,"\\$&"),i+=40;else if(1===n.type){const{value:c,repeatable:s,optional:o,regexp:l}=n;a.push({name:c,repeatable:s,optional:o});const f=l||G;if(f!==G){i+=10;try{new RegExp(`(${f})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${c}" (${f}): `+u.message)}}let h=s?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;e||(h=o&&r.length<2?`(?:/${h})`:"/"+h),o&&(h+="?"),t+=h,i+=20,o&&(i+=-8),s&&(i+=-20),".*"===f&&(i+=-50)}c.push(i)}n.push(c)}if(s.strict&&s.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}s.strict||(t+="/?"),s.end?t+="$":s.strict&&(t+="(?:/|$)");const i=new RegExp(t,s.sensitive?"":"i");function o(c){const e=c.match(i),s={};if(!e)return null;for(let n=1;n<e.length;n++){const c=e[n]||"",t=a[n-1];s[t.name]=c&&t.repeatable?c.split("/"):c}return s}function l(e){let s="",n=!1;for(const t of c){n&&s.endsWith("/")||(s+="/"),n=!1;for(const c of t)if(0===c.type)s+=c.value;else if(1===c.type){const{value:a,repeatable:i,optional:r}=c,o=a in e?e[a]:"";if(f(o)&&!i)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=f(o)?o.join("/"):o;if(!l){if(!r)throw new Error(`Missing required param "${a}"`);t.length<2&&(s.endsWith("/")?s=s.slice(0,-1):n=!0)}s+=l}}return s||"/"}return{re:i,score:n,keys:a,parse:o,stringify:l}}function X(c,e){let s=0;while(s<c.length&&s<e.length){const n=e[s]-c[s];if(n)return n;s++}return c.length<e.length?1===c.length&&80===c[0]?-1:1:c.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Q(c,e){let s=0;const n=c.score,t=e.score;while(s<n.length&&s<t.length){const c=X(n[s],t[s]);if(c)return c;s++}if(1===Math.abs(t.length-n.length)){if(Z(n))return 1;if(Z(t))return-1}return t.length-n.length}function Z(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const cc={type:0,value:""},ec=/[a-zA-Z0-9_]/;function sc(c){if(!c)return[[]];if("/"===c)return[[cc]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(c){throw new Error(`ERR (${s})/"${l}": ${c}`)}let s=0,n=s;const t=[];let a;function i(){a&&t.push(a),a=[]}let r,o=0,l="",f="";function u(){l&&(0===s?a.push({type:0,value:l}):1===s||2===s||3===s?(a.length>1&&("*"===r||"+"===r)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:f,repeatable:"*"===r||"+"===r,optional:"*"===r||"?"===r})):e("Invalid state to consume buffer"),l="")}function h(){l+=r}while(o<c.length)if(r=c[o++],"\\"!==r||2===s)switch(s){case 0:"/"===r?(l&&u(),i()):":"===r?(u(),s=1):h();break;case 4:h(),s=n;break;case 1:"("===r?s=2:ec.test(r)?h():(u(),s=0,"*"!==r&&"?"!==r&&"+"!==r&&o--);break;case 2:")"===r?"\\"==f[f.length-1]?f=f.slice(0,-1)+r:s=3:f+=r;break;case 3:u(),s=0,"*"!==r&&"?"!==r&&"+"!==r&&o--,f="";break;default:e("Unknown state");break}else n=s,s=4;return 2===s&&e(`Unfinished custom RegExp for param "${l}"`),u(),i(),t}function nc(c,e,s){const n=Y(sc(c.path),s);const t=r(n,{record:c,parent:e,children:[],alias:[]});return e&&!t.record.aliasOf===!e.record.aliasOf&&e.children.push(t),t}function tc(c,e){const s=[],n=new Map;function t(c){return n.get(c)}function a(c,s,n){const t=!n,o=ic(c);o.aliasOf=n&&n.record;const u=fc(e,c),h=[o];if("alias"in c){const e="string"===typeof c.alias?[c.alias]:c.alias;for(const c of e)h.push(r({},o,{components:n?n.record.components:o.components,path:c,aliasOf:n?n.record:o}))}let m,p;for(const e of h){const{path:r}=e;if(s&&"/"!==r[0]){const c=s.record.path,n="/"===c[c.length-1]?"":"/";e.path=s.record.path+(r&&n+r)}if(m=nc(e,s,u),n?n.alias.push(m):(p=p||m,p!==m&&p.alias.push(m),t&&c.name&&!oc(m)&&i(c.name)),o.children){const c=o.children;for(let e=0;e<c.length;e++)a(c[e],m,n&&n.children[e])}n=n||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&f(m)}return p?()=>{i(p)}:l}function i(c){if(U(c)){const e=n.get(c);e&&(n.delete(c),s.splice(s.indexOf(e),1),e.children.forEach(i),e.alias.forEach(i))}else{const e=s.indexOf(c);e>-1&&(s.splice(e,1),c.record.name&&n.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function o(){return s}function f(c){let e=0;while(e<s.length&&Q(c,s[e])>=0&&(c.record.path!==s[e].record.path||!uc(c,s[e])))e++;s.splice(e,0,c),c.record.name&&!oc(c)&&n.set(c.record.name,c)}function u(c,e){let t,a,i,o={};if("name"in c&&c.name){if(t=n.get(c.name),!t)throw W(1,{location:c});0,i=t.record.name,o=r(ac(e.params,t.keys.filter((c=>!c.optional)).map((c=>c.name))),c.params&&ac(c.params,t.keys.map((c=>c.name)))),a=t.stringify(o)}else if("path"in c)a=c.path,t=s.find((c=>c.re.test(a))),t&&(o=t.parse(a),i=t.record.name);else{if(t=e.name?n.get(e.name):s.find((c=>c.re.test(e.path))),!t)throw W(1,{location:c,currentLocation:e});i=t.record.name,o=r({},e.params,c.params),a=t.stringify(o)}const l=[];let f=t;while(f)l.unshift(f.record),f=f.parent;return{name:i,path:a,params:o,matched:l,meta:lc(l)}}return e=fc({strict:!1,end:!0,sensitive:!1},e),c.forEach((c=>a(c))),{addRoute:a,resolve:u,removeRoute:i,getRoutes:o,getRecordMatcher:t}}function ac(c,e){const s={};for(const n of e)n in c&&(s[n]=c[n]);return s}function ic(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:rc(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function rc(c){const e={},s=c.props||!1;if("component"in c)e.default=s;else for(const n in c.components)e[n]="boolean"===typeof s?s:s[n];return e}function oc(c){while(c){if(c.record.aliasOf)return!0;c=c.parent}return!1}function lc(c){return c.reduce(((c,e)=>r(c,e.meta)),{})}function fc(c,e){const s={};for(const n in c)s[n]=n in e?e[n]:c[n];return s}function uc(c,e){return e.children.some((e=>e===c||uc(c,e)))}const hc=/#/g,mc=/&/g,pc=/\//g,dc=/=/g,zc=/\?/g,Hc=/\+/g,Vc=/%5B/g,vc=/%5D/g,Mc=/%5E/g,gc=/%60/g,Cc=/%7B/g,Lc=/%7C/g,bc=/%7D/g,yc=/%20/g;function xc(c){return encodeURI(""+c).replace(Lc,"|").replace(Vc,"[").replace(vc,"]")}function Nc(c){return xc(c).replace(Cc,"{").replace(bc,"}").replace(Mc,"^")}function wc(c){return xc(c).replace(Hc,"%2B").replace(yc,"+").replace(hc,"%23").replace(mc,"%26").replace(gc,"`").replace(Cc,"{").replace(bc,"}").replace(Mc,"^")}function Sc(c){return wc(c).replace(dc,"%3D")}function kc(c){return xc(c).replace(hc,"%23").replace(zc,"%3F")}function _c(c){return null==c?"":kc(c).replace(pc,"%2F")}function Ac(c){try{return decodeURIComponent(""+c)}catch(e){}return""+c}function Ec(c){const e={};if(""===c||"?"===c)return e;const s="?"===c[0],n=(s?c.slice(1):c).split("&");for(let t=0;t<n.length;++t){const c=n[t].replace(Hc," "),s=c.indexOf("="),a=Ac(s<0?c:c.slice(0,s)),i=s<0?null:Ac(c.slice(s+1));if(a in e){let c=e[a];f(c)||(c=e[a]=[c]),c.push(i)}else e[a]=i}return e}function Tc(c){let e="";for(let s in c){const n=c[s];if(s=Sc(s),null==n){void 0!==n&&(e+=(e.length?"&":"")+s);continue}const t=f(n)?n.map((c=>c&&wc(c))):[n&&wc(n)];t.forEach((c=>{void 0!==c&&(e+=(e.length?"&":"")+s,null!=c&&(e+="="+c))}))}return e}function Oc(c){const e={};for(const s in c){const n=c[s];void 0!==n&&(e[s]=f(n)?n.map((c=>null==c?null:""+c)):null==n?n:""+n)}return e}const Ic=Symbol(""),Rc=Symbol(""),Pc=Symbol(""),Dc=Symbol(""),Fc=Symbol("");function Uc(){let c=[];function e(e){return c.push(e),()=>{const s=c.indexOf(e);s>-1&&c.splice(s,1)}}function s(){c=[]}return{add:e,list:()=>c,reset:s}}function jc(c,e,s,n,t){const a=n&&(n.enterCallbacks[t]=n.enterCallbacks[t]||[]);return()=>new Promise(((i,r)=>{const o=c=>{!1===c?r(W(4,{from:s,to:e})):c instanceof Error?r(c):F(c)?r(W(2,{from:e,to:c})):(a&&n.enterCallbacks[t]===a&&"function"===typeof c&&a.push(c),i())},l=c.call(n&&n.instances[t],e,s,o);let f=Promise.resolve(l);c.length<3&&(f=f.then(o)),f.catch((c=>r(c)))}))}function Bc(c,e,s,n){const t=[];for(const a of c){0;for(const c in a.components){let r=a.components[c];if("beforeRouteEnter"===e||a.instances[c])if(qc(r)){const i=r.__vccOpts||r,o=i[e];o&&t.push(jc(o,s,n,a,c))}else{let o=r();0,t.push((()=>o.then((t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const r=i(t)?t.default:t;a.components[c]=r;const o=r.__vccOpts||r,l=o[e];return l&&jc(l,s,n,a,c)()}))))}}}return t}function qc(c){return"object"===typeof c||"displayName"in c||"props"in c||"__vccOpts"in c}function Wc(c){const e=(0,n.f3)(Pc),s=(0,n.f3)(Dc),a=(0,n.Fl)((()=>e.resolve((0,t.SU)(c.to)))),i=(0,n.Fl)((()=>{const{matched:c}=a.value,{length:e}=c,n=c[e-1],t=s.matched;if(!n||!t.length)return-1;const i=t.findIndex(H.bind(null,n));if(i>-1)return i;const r=Yc(c[e-2]);return e>1&&Yc(n)===r&&t[t.length-1].path!==r?t.findIndex(H.bind(null,c[e-2])):i})),r=(0,n.Fl)((()=>i.value>-1&&Kc(s.params,a.value.params))),o=(0,n.Fl)((()=>i.value>-1&&i.value===s.matched.length-1&&V(s.params,a.value.params)));function f(s={}){return Jc(s)?e[(0,t.SU)(c.replace)?"replace":"push"]((0,t.SU)(c.to)).catch(l):Promise.resolve()}return{route:a,href:(0,n.Fl)((()=>a.value.href)),isActive:r,isExactActive:o,navigate:f}}const $c=(0,n.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(c,{slots:e}){const s=(0,t.qj)(Wc(c)),{options:a}=(0,n.f3)(Pc),i=(0,n.Fl)((()=>({[Xc(c.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[Xc(c.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive})));return()=>{const t=e.default&&e.default(s);return c.custom?t:(0,n.h)("a",{"aria-current":s.isExactActive?c.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},t)}}}),Gc=$c;function Jc(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&(void 0===c.button||0===c.button)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function Kc(c,e){for(const s in e){const n=e[s],t=c[s];if("string"===typeof n){if(n!==t)return!1}else if(!f(t)||t.length!==n.length||n.some(((c,e)=>c!==t[e])))return!1}return!0}function Yc(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const Xc=(c,e,s)=>null!=c?c:null!=e?e:s,Qc=(0,n.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:s}){const a=(0,n.f3)(Fc),i=(0,n.Fl)((()=>c.route||a.value)),o=(0,n.f3)(Rc,0),l=(0,n.Fl)((()=>{let c=(0,t.SU)(o);const{matched:e}=i.value;let s;while((s=e[c])&&!s.components)c++;return c})),f=(0,n.Fl)((()=>i.value.matched[l.value]));(0,n.JJ)(Rc,(0,n.Fl)((()=>l.value+1))),(0,n.JJ)(Ic,f),(0,n.JJ)(Fc,i);const u=(0,t.iH)();return(0,n.YP)((()=>[u.value,f.value,c.name]),(([c,e,s],[n,t,a])=>{e&&(e.instances[s]=c,t&&t!==e&&c&&c===n&&(e.leaveGuards.size||(e.leaveGuards=t.leaveGuards),e.updateGuards.size||(e.updateGuards=t.updateGuards))),!c||!e||t&&H(e,t)&&n||(e.enterCallbacks[s]||[]).forEach((e=>e(c)))}),{flush:"post"}),()=>{const t=i.value,a=c.name,o=f.value,l=o&&o.components[a];if(!l)return Zc(s.default,{Component:l,route:t});const h=o.props[a],m=h?!0===h?t.params:"function"===typeof h?h(t):h:null,p=c=>{c.component.isUnmounted&&(o.instances[a]=null)},d=(0,n.h)(l,r({},m,e,{onVnodeUnmounted:p,ref:u}));return Zc(s.default,{Component:d,route:t})||d}}});function Zc(c,e){if(!c)return null;const s=c(e);return 1===s.length?s[0]:s}const ce=Qc;function ee(c){const e=tc(c.routes,c),s=c.parseQuery||Ec,i=c.stringifyQuery||Tc,u=c.history;const h=Uc(),d=Uc(),H=Uc(),V=(0,t.XI)(j);let v=j;a&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const M=o.bind(null,(c=>""+c)),g=o.bind(null,_c),L=o.bind(null,Ac);function b(c,s){let n,t;return U(c)?(n=e.getRecordMatcher(c),t=s):t=c,e.addRoute(t,n)}function y(c){const s=e.getRecordMatcher(c);s&&e.removeRoute(s)}function x(){return e.getRoutes().map((c=>c.record))}function N(c){return!!e.getRecordMatcher(c)}function _(c,n){if(n=r({},n||V.value),"string"===typeof c){const t=m(s,c,n.path),a=e.resolve({path:t.path},n),i=u.createHref(t.fullPath);return r(t,a,{params:L(a.params),hash:Ac(t.hash),redirectedFrom:void 0,href:i})}let t;if("path"in c)t=r({},c,{path:m(s,c.path,n.path).path});else{const e=r({},c.params);for(const c in e)null==e[c]&&delete e[c];t=r({},c,{params:g(c.params)}),n.params=g(n.params)}const a=e.resolve(t,n),o=c.hash||"";a.params=M(L(a.params));const l=p(i,r({},c,{hash:Nc(o),path:a.path})),f=u.createHref(l);return r({fullPath:l,hash:o,query:i===Tc?Oc(c.query):c.query||{}},a,{redirectedFrom:void 0,href:f})}function T(c){return"string"===typeof c?m(s,c,V.value.path):r({},c)}function O(c,e){if(v!==c)return W(8,{from:e,to:c})}function I(c){return D(c)}function R(c){return I(r(T(c),{replace:!0}))}function P(c){const e=c.matched[c.matched.length-1];if(e&&e.redirect){const{redirect:s}=e;let n="function"===typeof s?s(c):s;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=T(n):{path:n},n.params={}),r({query:c.query,hash:c.hash,params:"path"in n?{}:c.params},n)}}function D(c,e){const s=v=_(c),n=V.value,t=c.state,a=c.force,o=!0===c.replace,l=P(s);if(l)return D(r(T(l),{state:"object"===typeof l?r({},t,l.state):t,force:a,replace:o}),e||s);const f=s;let u;return f.redirectedFrom=e,!a&&z(i,n,s)&&(u=W(16,{to:f,from:n}),sc(n,n,!0,!1)),(u?Promise.resolve(u):B(f,n)).catch((c=>$(c)?$(c,2)?c:ec(c):Z(c,f,n))).then((c=>{if(c){if($(c,2))return D(r({replace:o},T(c.to),{state:"object"===typeof c.to?r({},t,c.to.state):t,force:a}),e||f)}else c=G(f,n,!0,o,t);return q(f,n,c),c}))}function F(c,e){const s=O(c,e);return s?Promise.reject(s):Promise.resolve()}function B(c,e){let s;const[n,t,a]=ne(c,e);s=Bc(n.reverse(),"beforeRouteLeave",c,e);for(const r of n)r.leaveGuards.forEach((n=>{s.push(jc(n,c,e))}));const i=F.bind(null,c,e);return s.push(i),se(s).then((()=>{s=[];for(const n of h.list())s.push(jc(n,c,e));return s.push(i),se(s)})).then((()=>{s=Bc(t,"beforeRouteUpdate",c,e);for(const n of t)n.updateGuards.forEach((n=>{s.push(jc(n,c,e))}));return s.push(i),se(s)})).then((()=>{s=[];for(const n of c.matched)if(n.beforeEnter&&!e.matched.includes(n))if(f(n.beforeEnter))for(const t of n.beforeEnter)s.push(jc(t,c,e));else s.push(jc(n.beforeEnter,c,e));return s.push(i),se(s)})).then((()=>(c.matched.forEach((c=>c.enterCallbacks={})),s=Bc(a,"beforeRouteEnter",c,e),s.push(i),se(s)))).then((()=>{s=[];for(const n of d.list())s.push(jc(n,c,e));return s.push(i),se(s)})).catch((c=>$(c,8)?c:Promise.reject(c)))}function q(c,e,s){for(const n of H.list())n(c,e,s)}function G(c,e,s,n,t){const i=O(c,e);if(i)return i;const o=e===j,l=a?history.state:{};s&&(n||o?u.replace(c.fullPath,r({scroll:o&&l&&l.scroll},t)):u.push(c.fullPath,t)),V.value=c,sc(c,e,s,o),ec()}let J;function K(){J||(J=u.listen(((c,e,s)=>{if(!rc.listening)return;const n=_(c),t=P(n);if(t)return void D(r(t,{replace:!0}),n).catch(l);v=n;const i=V.value;a&&A(k(i.fullPath,s.delta),w()),B(n,i).catch((c=>$(c,12)?c:$(c,2)?(D(c.to,n).then((c=>{$(c,20)&&!s.delta&&s.type===C.pop&&u.go(-1,!1)})).catch(l),Promise.reject()):(s.delta&&u.go(-s.delta,!1),Z(c,n,i)))).then((c=>{c=c||G(n,i,!1),c&&(s.delta&&!$(c,8)?u.go(-s.delta,!1):s.type===C.pop&&$(c,20)&&u.go(-1,!1)),q(n,i,c)})).catch(l)})))}let Y,X=Uc(),Q=Uc();function Z(c,e,s){ec(c);const n=Q.list();return n.length?n.forEach((n=>n(c,e,s))):console.error(c),Promise.reject(c)}function cc(){return Y&&V.value!==j?Promise.resolve():new Promise(((c,e)=>{X.add([c,e])}))}function ec(c){return Y||(Y=!c,K(),X.list().forEach((([e,s])=>c?s(c):e())),X.reset()),c}function sc(e,s,t,i){const{scrollBehavior:r}=c;if(!a||!r)return Promise.resolve();const o=!t&&E(k(e.fullPath,0))||(i||!t)&&history.state&&history.state.scroll||null;return(0,n.Y3)().then((()=>r(e,s,o))).then((c=>c&&S(c))).catch((c=>Z(c,e,s)))}const nc=c=>u.go(c);let ac;const ic=new Set,rc={currentRoute:V,listening:!0,addRoute:b,removeRoute:y,hasRoute:N,getRoutes:x,resolve:_,options:c,push:I,replace:R,go:nc,back:()=>nc(-1),forward:()=>nc(1),beforeEach:h.add,beforeResolve:d.add,afterEach:H.add,onError:Q.add,isReady:cc,install(c){const e=this;c.component("RouterLink",Gc),c.component("RouterView",ce),c.config.globalProperties.$router=e,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,t.SU)(V)}),a&&!ac&&V.value===j&&(ac=!0,I(u.location).catch((c=>{0})));const s={};for(const t in j)s[t]=(0,n.Fl)((()=>V.value[t]));c.provide(Pc,e),c.provide(Dc,(0,t.qj)(s)),c.provide(Fc,V);const i=c.unmount;ic.add(c),c.unmount=function(){ic.delete(c),ic.size<1&&(v=j,J&&J(),J=null,V.value=j,ac=!1,Y=!1),i()}}};return rc}function se(c){return c.reduce(((c,e)=>c.then((()=>e()))),Promise.resolve())}function ne(c,e){const s=[],n=[],t=[],a=Math.max(e.matched.length,c.matched.length);for(let i=0;i<a;i++){const a=e.matched[i];a&&(c.matched.find((c=>H(c,a)))?n.push(a):s.push(a));const r=c.matched[i];r&&(e.matched.find((c=>H(c,r)))||t.push(r))}return[s,n,t]}function te(){return(0,n.f3)(Pc)}}}]);
//# sourceMappingURL=chunk-vendors.d7c1b1c7.js.map