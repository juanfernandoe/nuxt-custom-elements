(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,n){var r=n(120);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(79).default)("63a3c60b",r,!0,{sourceMap:!1})},119:function(e,t,n){"use strict";var r=n(101);n.n(r).a},120:function(e,t,n){(t=n(78)(!1)).push([e.i,".custom-element-app-hash{padding:15px;background:#eee;border:1px solid #eee}.custom-element-app-hash .header,.custom-element-app-hash .router-view{background:#fff;border:1px solid #eee}.custom-element-app-hash .router-view{min-height:160px;padding:0 15px;margin-top:20px}",""]),e.exports=t},144:function(e,t,n){"use strict";n.r(t);var r=n(95),i=n(85),o={name:"AppOne",components:{OrganismViewHeader:function(){return n.e(1).then(n.bind(null,142))}},extends:r.a,router:Object(i.a)("hash"),data:function(){return{views:["index","view-1","view-2","view-3"]}},computed:{content:function(){return{header:{title:'App with router mode "hash"',navigation:[{title:"Home",url:"/"},{title:"View 1",url:"/view-1"},{title:"View 2",url:"/view-2"},{title:"View 3",url:"/view-3"}]}}},header:function(){return this.content.header}}},a=(n(119),n(76)),u=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"custom-element-app-hash"},[t("organism-view-header",this._b({staticClass:"header"},"organism-view-header",this.header,!1)),this._v(" "),t("custom-element-router-view",{staticClass:"router-view"})],1)}),[],!1,null,null,null);t.default=u.exports},80:function(e,t,n){var r=n(91);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(79).default)("5409cc8c",r,!0,{sourceMap:!1})},85:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));n(86);var r=n(2),i=n(96);function o(e){return e.map((function(e){return{path:"/".concat(e).replace(/index$/,""),component:function(){return function(e){return n(92)("./"+e)}(e)}}}))}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abstract",n=new i.a({mode:t,base:e.location.pathname});return"abstract"===t&&n.replace("/"),n}r.a.use(i.a)}).call(this,n(15))},90:function(e,t,n){"use strict";var r=n(80);n.n(r).a},91:function(e,t,n){(t=n(78)(!1)).push([e.i,"div[data-v-02921181]{position:relative}.router-view-change-enter-active[data-v-02921181],.router-view-change-leave-active[data-v-02921181]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-02921181],.router-view-change-leave-to[data-v-02921181]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}",""]),e.exports=t},92:function(e,t,n){var r={"./":[83,2],"./index":[83,2],"./index.vue":[83,2],"./view-1":[87,3],"./view-1.vue":[87,3],"./view-2":[88,4],"./view-2.vue":[88,4],"./view-3":[89,5],"./view-3.vue":[89,5]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=92,e.exports=i},93:function(e,t,n){var r={"./base.js":94};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=93},94:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return i})),n.d(t,"getters",(function(){return o})),n.d(t,"actions",(function(){return a}));var r=function(){return{value:!0}},i={value:function(e,t){e.value=Boolean(t)}},o={value:function(e){return e.value}},a={setValue:function(e,t){e.commit("value",t)}}},95:function(e,t,n){"use strict";var r={name:"CustomElementRouterView"},i=(n(90),n(76)),o=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"router-view-change"}},[t("keep-alive",[this.$router?t("router-view"):this._e()],1)],1)],1)}),[],!1,null,"02921181",null).exports,a=n(85),u=(n(86),n(97),n(98),n(2)),s=n(99);u.a.use(s.a);u.a.component("NuxtLink",{extends:u.a.component("RouterLink")});var c,l={components:{CustomElementRouterView:o},store:new s.a.Store({modules:(c=n(93),c.keys().reduce((function(e,t){var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},c(t)),e}),{}))}),props:{basePath:{type:String,default:function(){return"/"}},mode:{type:String,default:function(){return"history"}}},data:function(){return{views:["index"]}},created:function(){this.$router&&this.$router.addRoutes(Object(a.b)(this.views))}},v=Object(i.a)(l,void 0,void 0,!1,null,null,null);t.a=v.exports}}]);