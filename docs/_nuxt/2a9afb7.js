(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(t,e,o){"use strict";o.r(e);var n={props:{absolute:{type:Boolean,default:!1},app:{type:Boolean,default:!1},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},right:{type:Boolean,default:!1},left:{type:Boolean,default:!1},centered:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},data:function(){return{snackbar:!1,color:"success",timeout:3e3,message:"OK"}},computed:{getStyle:function(){return this.$route.meta.full_page?"":"bottom: -55px;"}},methods:{open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.message,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;this.color=t,this.message=e,this.snackbar=!0,this.timeout=o}}},r=o(64),l=o(75),c=o.n(l),f=o(294),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-snackbar",{style:t.getStyle,attrs:{absolute:t.absolute,app:t.app,top:t.top,bottom:t.bottom,right:t.right,left:t.left,centered:t.centered,text:t.text,color:t.color,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n  "+t._s(t.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VSnackbar:f.a})},192:function(t,e,o){var content=o(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("7388ab72",content,!0,{sourceMap:!1})},200:function(t,e,o){var content=o(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("56b15182",content,!0,{sourceMap:!1})},208:function(t,e,o){"use strict";var n={components:{Toast:o(144).default},data:function(){return{}},computed:{isSharable:function(){return navigator.share}},mounted:function(){this.$root.$toast=this.$refs.toast.open},methods:{share:function(){var t=this,title=document.title,e=document.location.href;this.isSharable?navigator.share({title:title,url:e,text:"Simple islamic app"}).then((function(){t.$root.$toast("success","Merci pour le partage")})).catch((function(e){t.$root.$toast("warning","Impossible de partager "+e)})):this.$root.$toast("error","Pas supporté 🙅!!")}}},r=(o(264),o(64)),l=o(75),c=o.n(l),f=o(293),d=o(296),h=o(297),v=o(150),m=o(298),_=o(285),y=o(295),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("v-container",{staticClass:"fill-height"},[o("nuxt"),t._v(" "),t.isSharable?t._e():o("v-fab-transition",[o("v-btn",{attrs:{color:"indigo accent-2",fab:"",dark:"",small:"",right:"",bottom:"",absolute:""},on:{click:function(e){return t.share()}}},[o("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1),t._v(" "),o("v-footer",{staticClass:"justify-center",attrs:{app:""}},[o("span",[o("a",{attrs:{href:"https://github.com/nomadigital",target:"_blank",rel:"noreferrer"}},[t._v("nomadigital")]),t._v(" © "+t._s((new Date).getFullYear())+"\n    ")])]),t._v(" "),o("toast",{ref:"toast",attrs:{top:t.$vuetify.breakpoint.xsOnly,text:"",app:""}})],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{Toast:o(144).default}),c()(component,{VApp:f.a,VBtn:d.a,VContainer:h.a,VFabTransition:v.c,VFooter:m.a,VIcon:_.a,VMain:y.a})},216:function(t,e,o){o(217),t.exports=o(218)},243:function(t,e,o){"use strict";o(192)},244:function(t,e,o){var n=o(27)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},264:function(t,e,o){"use strict";o(200)},265:function(t,e,o){var n=o(27)(!1);n.push([t.i,"html{overflow-y:auto}",""]),t.exports=n},66:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(243),o(64)),l=o(75),c=o.n(l),f=o(293),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:f.a})}},[[216,5,1,6]]]);