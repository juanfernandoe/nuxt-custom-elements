(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(e,t,n){var a=n(107);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(38).default)("73520390",a,!0,{sourceMap:!1})},106:function(e,t,n){"use strict";var a=n(105);n.n(a).a},107:function(e,t,n){(t=n(37)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},108:function(e,t,n){"use strict";var a={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},i=(n(106),n(5)),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=l.exports},113:function(e,t,n){var a=n(129);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(38).default)("ed2f8e10",a,!0,{sourceMap:!1})},128:function(e,t,n){"use strict";var a=n(113);n.n(a).a},129:function(e,t,n){(t=n(37)(!1)).push([e.i,"",""]),e.exports=t},51:function(e,t,n){"use strict";n.r(t);var a={components:{AtomHeadline:n(108).a},data:function(){return{headline:{overline:null,headline:"View 1",subline:null}}}},i=(n(128),n(5)),l=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-1"},[t("atom-headline",this._b({attrs:{"style-type":"view"}},"atom-headline",this.headline,!1))],1)}),[],!1,null,null,null);t.default=l.exports}}]);