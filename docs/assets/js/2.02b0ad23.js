(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{476:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));o(40),o(41);var n=o(50);function a(){var e=Object(n.d)();if(!e)throw new Error("must be called in setup");return e||{}}},490:function(e,t,o){"use strict";o(115);t.a={data:function(){return{recoShowModule:!1}},mounted:function(){this.recoShowModule=!0},watch:{$route:function(e,t){var o=this;e.path!==t.path&&(this.recoShowModule=!1,setTimeout((function(){o.recoShowModule=!0}),200))}}}},495:function(e,t,o){"use strict";o(8),o(39),o(52),o(68);var n=o(159),a=(o(261),o(73)),i=(o(32),o(160),o(537),o(501),o(477)),r=o(476),s=Object(n.b)({components:{RecoIcon:i.b},props:["options"],setup:function(e,t){var i=this,s=Object(r.a)(),c=Object(n.g)(void 0),l=function(e,t){Promise.all([Promise.all([o.e(1),o.e(5)]).then(o.t.bind(null,581,7)),Promise.all([o.e(1),o.e(5)]).then(o.t.bind(null,582,7))]).then((function(o){var n=Object(a.a)(o,1)[0];n=n.default;var r=e.algoliaOptions,s=void 0===r?{}:r;n(Object.assign({},e,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(t)].concat(s.facetFilters||[])},s),handleSelected:function(e,t,o){var n=new URL(o.url),a=n.pathname,r=n.hash;i.$router.push("".concat(a).concat(r))}}))}))};return Object(n.d)((function(){l(e.options,s.$lang),c.value=s.$site.themeConfig.searchPlaceholder||""})),{placeholder:c,initialize:l,update:function(e,t){s.$el.innerHTML='<input id="algolia-search-input" class="search-query">',s.initialize(e,t)}}},watch:{$lang:function(e){this.update(this.options,e)},options:function(e){this.update(e,this.$lang)}}}),c=(o(543),o(13)),l=Object(c.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("reco-icon",{attrs:{icon:"reco-search"}}),this._v(" "),t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})],1)}),[],!1,null,null,null).exports,u=o(17),h=(o(503),Object(n.b)({components:{RecoIcon:i.b},setup:function(e,t){var o=Object(r.a)(),a=Object(n.f)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),i=Object(n.a)((function(){return a.focused&&c.value&&c.value.length})),s=function(e){for(var t in o.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},c=Object(n.a)((function(){var e=a.query.trim().toLowerCase();if(e){for(var t=o.$site.pages,n=o.$site.themeConfig.searchMaxSuggestions,i=o.$localePath,r=function(t){return t&&t.title&&t.title.toLowerCase().indexOf(e)>-1},c=[],l=0;l<t.length&&!(c.length>=n);l++){var u=t[l];if(s(u)===i)if(r(u))c.push(u);else if(u.headers)for(var h=0;h<u.headers.length&&!(c.length>=n);h++){var d=u.headers[h];r(d)&&c.push(Object.assign({},u,{path:u.path+"#"+d.slug,header:d}))}}return c}})),l=Object(n.a)((function(){return(o.$site.themeConfig.nav||[]).length+(o.$site.repo?1:0)<=2}));return Object(u.a)({showSuggestions:i,suggestions:c,alignRight:l,onUp:function(){i.value&&(a.focusIndex>0?a.focusIndex--:a.focusIndex=c.value.length-1)},onDown:function(){i.value&&(a.focusIndex<c.value.length-1?a.focusIndex++:a.focusIndex=0)},focus:function(e){a.focusIndex=e},unfocus:function(){a.focusIndex=-1},go:function(e){i.value&&(o.$router.push(c.value[e].path),a.query="",a.focusIndex=0)}},Object(n.h)(a))},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}})),d=(o(545),Object(c.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"search-box"},[o("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),o("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?o("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,n){return o("li",{key:n,staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(t){return e.go(n)},mouseenter:function(t){return e.focus(n)}}},[o("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[o("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?o("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null).exports),p=(o(546),Object(c.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[o("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[o("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),g=o(71),f=(o(53),o(26),o(66),o(118),o(64),o(65),o(547),o(497),o(125),o(67),o(273),o(274),o(275),o(168),o(276),o(498)),m=o(535),b=Object(n.b)({components:{NavLink:f.a,DropdownTransition:m.a,RecoIcon:i.b},props:{item:{required:!0}},setup:function(e,t){var o=Object(n.g)(!1);return{open:o,toggle:function(){o.value=!o.value}}}}),v=(o(549),Object(c.a)(b,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[o("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[o("span",{staticClass:"title"},[o("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),o("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),o("DropdownTransition",[o("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(t,n){return o("li",{key:t.link||n,staticClass:"dropdown-item"},["links"===t.type?o("h4",[e._v(e._s(t.text))]):e._e(),e._v(" "),"links"===t.type?o("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(t.items,(function(e){return o("li",{key:e.link,staticClass:"dropdown-subitem"},[o("NavLink",{attrs:{item:e}})],1)})),0):o("NavLink",{attrs:{item:t}})],1)})),0)])],1)}),[],!1,null,null,null).exports),k=o(54),w=o(550),_=Object(n.b)({components:{NavLink:f.a,DropdownLink:v,RecoIcon:i.b},setup:function(e,t){var o=Object(r.a)(),a=Object(n.a)((function(){return o.$themeLocaleConfig.nav||o.$themeConfig.nav||[]})),i=Object(n.a)((function(){var e=o.$site.locales||{};if(e&&Object.keys(e).length>1){var t=o.$page.path,n=o.$router.options.routes,i=o.$themeConfig.locales||{},r={icon:"reco-language",text:o.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(a){var r,s=e[a],c=i[a]&&i[a].label||s.lang;return s.lang===o.$lang?r=t:(r=t.replace(o.$localeConfig.path,a),n.some((function(e){return e.path===r}))||(r=a)),Object.keys(w.linkFix).forEach((function(e){r==e&&(r=w.linkFix[r])})),{text:c,link:r}}))};return[].concat(Object(g.a)(a.value),[r])}var s=o.$themeConfig.blogConfig||{},c=a.value.some((function(e){return!s.category||e.text===(s.category.text||"分类")})),l=a.value.some((function(e){return!s.tag||e.text===(s.tag.text||"标签")}));if(!c&&Object.hasOwnProperty.call(s,"category")){var u=s.category,h=o.$categories;a.value.splice(parseInt(u.location||2)-1,0,{items:h.list.map((function(e){return e.link=e.path,e.text=e.name,e})),text:u.text||o.$recoLocales.category,type:"links",icon:"reco-category"})}if(!l&&Object.hasOwnProperty.call(s,"tag")){var d=s.tag;a.value.splice(parseInt(d.location||3)-1,0,{link:"/tag/",text:d.text||o.$recoLocales.tag,type:"links",icon:"reco-tag"})}return a.value})),s=Object(n.a)((function(){return(o.nav||[]).map((function(e){return Object.assign(Object(k.j)(e),{items:(e.items||[]).map(k.j)})}))})),c=Object(n.a)((function(){var e=o.$themeConfig.repo;return e?/^https?:/.test(e)?e:"https://github.com/".concat(e):""})),l=Object(n.a)((function(){if(!o.repoLink)return"";if(o.$themeConfig.repoLabel)return o.$themeConfig.repoLabel;for(var e=o.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"],n=0;n<t.length;n++){var a=t[n];if(new RegExp(a,"i").test(e))return a}return"Source"}));return{userNav:a,nav:i,userLinks:s,repoLink:c,repoLabel:l}}}),y=(o(551),Object(c.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.userLinks.length||e.repoLink?o("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return o("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?o("DropdownLink",{attrs:{item:e}}):o("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?o("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[o("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),o("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports),x=o(552),C=o.n(x),O=(o(116),{light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}});function $(e){var t=document.querySelector(":root"),o=O[e],n="dark"===e?"light":"dark";for(var a in o)t.style.setProperty(a,o[a]);t.classList.remove(n),t.classList.add(e)}function j(e){if("auto"===e){var t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&$("dark"),o&&$("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");var n=(new Date).getHours();$(n<6||n>=18?"dark":"light")}}else $(e)}var L={name:"ModeOptions",data:function(){return{modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}},mounted:function(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){"auto"===e.$data.currentMode&&j(e.$data.currentMode)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){"auto"===e.$data.currentMode&&j(e.$data.currentMode)})),j(this.currentMode)},methods:{selectMode:function(e){e!==this.currentMode&&(this.currentMode=e,j(e),localStorage.setItem("mode",e))},getClass:function(e){return e!==this.currentMode?e:"".concat(e," active")}}},T=(o(553),Object(c.a)(L,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mode-options"},[o("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),o("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(t,n){return o("li",{key:n,class:e.getClass(t.mode),on:{click:function(o){return e.selectMode(t.mode)}}},[e._v(e._s(t.title))])})),0)])}),[],!1,null,null,null).exports),S={name:"UserSettings",directives:{"click-outside":C.a},components:{ModePicker:T,RecoIcon:i.b,ModuleTransition:i.a},data:function(){return{showMenu:!1}},mounted:function(){var e=this.$themeConfig.mode||"auto";!1===this.$themeConfig.modePicker&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){j(e)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){j(e)}))),j(e))},methods:{hideMenu:function(){this.showMenu=!1}}},P=(o(554),Object(c.a)(S,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return!1!==e.$themeConfig.modePicker?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[o("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[o("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),o("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[o("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null).exports),M=Object(n.b)({components:{SidebarButton:p,NavLinks:y,SearchBox:d,AlgoliaSearchBox:l,Mode:P},setup:function(e,t){var o=Object(r.a)(),a=Object(n.g)(null),i=Object(n.a)((function(){return o.$themeLocaleConfig.algolia||o.$themeConfig.algolia||{}})),s=Object(n.a)((function(){i.value&&i.value.apiKey&&i.value.indexName}));function c(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(n.d)((function(){var e=parseInt(c(o.$el,"paddingLeft"))+parseInt(c(o.$el,"paddingRight")),t=function(){document.documentElement.clientWidth<719?a.value=null:a.value=o.$el.offsetWidth-e-(o.$refs.siteName&&o.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)})),{linksWrapMaxWidth:a,algolia:i,isAlgoliaSearch:s,css:c}}}),I=(o(555),Object(c.a)(M,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"navbar"},[o("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),o("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?o("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?o("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),o("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[o("Mode"),e._v(" "),e.isAlgoliaSearch?o("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?o("SearchBox"):e._e(),e._v(" "),o("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),N=o(533),E=Object(n.b)({name:"Sidebar",components:{SidebarLinks:N.default,NavLinks:y},props:["items"]}),W=(o(558),Object(c.a)(E,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),t("NavLinks"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),z=o(534),A=(o(115),o(516)),D=o.n(A),H=Object(n.b)({name:"Password",components:{ModuleTransition:i.a,RecoIcon:i.b},props:{isPage:{type:Boolean,default:!1}},setup:function(e,t){var o=Object(r.a)(),a=(new Date).getFullYear(),i=Object(n.g)(""),s=Object(n.g)("Konck! Knock!"),c=Object(n.a)((function(){var e;return null==o||null===(e=o.$parent)||void 0===e?void 0:e.recoShowModule})),l=Object(n.h)(e).isPage;return{warningText:s,year:a,key:i,recoShowModule:c,inter:function(){var e=D()(i.value.trim()),t="pageKey".concat(window.location.pathname),n=l.value?t:"key";if(sessionStorage.setItem(n,e),l.value?function(){var e=o.$frontmatter.keys.map((function(e){return e.toLowerCase()})),t="pageKey".concat(window.location.pathname);return e&&e.indexOf(sessionStorage.getItem(t))>-1}():o.$themeConfig.keyPage.keys.map((function(e){return e.toLowerCase()})).indexOf(sessionStorage.getItem("key"))>-1){s.value="Key Success";var a=document.getElementById("box").style.width;o.$refs.passwordBtn.style.width="".concat(a-2,"px"),o.$refs.passwordBtn.style.opacity=1,setTimeout((function(){window.location.reload()}),800)}else s.value="Key Error"},inputFocus:function(){s.value="Input Your Key"},inputBlur:function(){s.value="Konck! Knock!"}}}}),B=(o(562),Object(c.a)(H,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"password-shadow"},[o("ModuleTransition",[o("h3",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"title"},[e._v(e._s(e.isPage?e.$frontmatter.title:e.$site.title||e.$localeConfig.title))])]),e._v(" "),o("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&!e.isPage?o("p",{staticClass:"description"},[e._v(e._s(e.$site.description||e.$localeConfig.description))]):e._e()]),e._v(" "),o("ModuleTransition",{attrs:{delay:"0.16"}},[o("label",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"inputBox",attrs:{id:"box"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"password"},domProps:{value:e.key},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inter.apply(null,arguments)},focus:e.inputFocus,blur:e.inputBlur,input:function(t){t.target.composing||(e.key=t.target.value)}}}),e._v(" "),o("span",[e._v(e._s(e.warningText))]),e._v(" "),o("button",{ref:"passwordBtn",on:{click:e.inter}},[e._v("OK")])])]),e._v(" "),o("ModuleTransition",{attrs:{delay:"0.24"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"footer"},[o("span",[o("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),o("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v("vuePress-theme-reco")])],1),e._v(" "),o("span",[o("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),o("a",[e.$themeConfig.author?o("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n            \n          "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=e.year?o("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n          "+e._s(e.year)+"\n        ")])],1)])])],1)}),[],!1,null,"24de1186",null).exports),K=o(563),R=Object(n.b)({components:{Sidebar:W,Navbar:I,Password:B,PersonalInfo:z.a},props:{sidebar:{type:Boolean,default:!0},sidebarItems:{type:Array,default:function(){return[]}},showModule:{type:Boolean,default:!1}},setup:function(e,t){var o=Object(r.a)(),a=Object(n.g)(!1),i=Object(n.g)(!0),s=Object(n.g)(!0),c=Object(n.g)(!0),l=Object(n.a)((function(){return e.sidebarItems.length>0})),u=Object(n.a)((function(){return o.$themeConfig.keyPage&&!0===o.$themeConfig.keyPage.absoluteEncryption})),h=Object(n.a)((function(){var e=o.$site.themeConfig;return!1!==o.$page.frontmatter.navbar&&!1!==e.navbar&&(o.$title||e.logo||e.repo||e.nav||o.$themeLocaleConfig.nav)})),d=Object(n.a)((function(){var e={"no-navbar":!h.value,"sidebar-open":a.value,"no-sidebar":!l.value},t=(o.$frontmatter||{}).pageClass;return t&&(e[t]=!0),e})),p=function(){var e=o.$themeConfig.keyPage;if(e&&e.keys&&0!==e.keys.length){var t=e.keys;t=t.map((function(e){return e.toLowerCase()})),i.value=t&&t.indexOf(sessionStorage.getItem("key"))>-1}else i.value=!0},g=function(){var e=o.$frontmatter.keys;e&&0!==e.length?(e=e.map((function(e){return e.toLowerCase()})),s.value=e.indexOf(sessionStorage.getItem("pageKey".concat(window.location.pathname)))>-1):s.value=!0},f=Object(n.h)(e).showModule,m=Object(n.a)((function(){return!!c.value||f.value}));return Object(n.d)((function(){var e;o.$router.afterEach((function(){a.value=!1})),p(),g(),e=o.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0,Object(K.setTimeout)((function(){c.value=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)}),e)})),{isSidebarOpen:a,absoluteEncryption:u,shouldShowNavbar:h,shouldShowSidebar:l,pageClasses:d,hasKey:p,hasPageKey:g,isHasKey:i,isHasPageKey:s,toggleSidebar:function(e){a.value="boolean"==typeof e?e:!a.value},firstLoad:c,recoShowModule:m}},watch:{$frontmatter:function(e,t){this.hasKey(),this.hasPageKey()}}}),U=(o(565),Object(c.a)(R,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"theme-container",class:e.pageClasses},[e.absoluteEncryption?o("div",[o("transition",{attrs:{name:"fade"}},[e.firstLoad?o("LoadingPage"):e.isHasKey?o("div",[e.shouldShowNavbar?o("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),o("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),o("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[o("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.isHasPageKey?e._t("default"):o("Password",{attrs:{isPage:!0}})],2):o("Password")],1)],1):o("div",[o("transition",{attrs:{name:"fade"}},[o("LoadingPage",{directives:[{name:"show",rawName:"v-show",value:e.firstLoad,expression:"firstLoad"}],staticClass:"loading-wrapper"})],1),e._v(" "),o("transition",{attrs:{name:"fade"}},[o("Password",{directives:[{name:"show",rawName:"v-show",value:!e.firstLoad&&!e.isHasKey,expression:"!firstLoad && !isHasKey"}],key:"out",staticClass:"password-wrapper-out"})],1),e._v(" "),o("div",{class:{hide:e.firstLoad||!e.isHasKey}},[e.shouldShowNavbar?o("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),o("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),o("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[o("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),o("Password",{directives:[{name:"show",rawName:"v-show",value:!e.isHasPageKey,expression:"!isHasPageKey"}],key:"in",staticClass:"password-wrapper-in",attrs:{isPage:!0}}),e._v(" "),o("div",{class:{hide:!e.isHasPageKey}},[e._t("default")],2)],1)],1)])}),[],!1,null,"edf8551e",null));t.a=U.exports},498:function(e,t,o){"use strict";o(497),o(118),o(8),o(53);var n=o(159),a=o(54),i=o(477),r=o(476),s=Object(n.b)({components:{RecoIcon:i.b},props:{item:{required:!0}},setup:function(e,t){var o=Object(r.a)(),i=Object(n.h)(e).item,s=Object(n.a)((function(){return Object(a.d)(i.value.link)})),c=Object(n.a)((function(){return o.$site.locales?Object.keys(o.$site.locales).some((function(e){return e===s.value})):"/"===s.value}));return{link:s,exact:c,isExternal:a.f,isMailto:a.g,isTel:a.h}}}),c=o(13),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.isExternal(e.link)?o("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[o("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),o("OutboundLink")],1):o("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[o("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.a=l.exports},502:function(e,t,o){},504:function(e,t,o){},505:function(e,t,o){},506:function(e,t,o){},507:function(e,t,o){},508:function(e,t,o){},509:function(e,t,o){},510:function(e,t,o){},511:function(e,t,o){},512:function(e,t,o){},513:function(e,t,o){},514:function(e,t,o){},515:function(e,t,o){},518:function(e,t,o){},519:function(e,t,o){},533:function(e,t,o){"use strict";o.r(t);o(27),o(8),o(47),o(68),o(115),o(118);var n=o(159),a=o(54),i=o(535),r=o(476),s=Object(n.b)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:i.a},setup:function(e,t){return Object(r.a)().$options.components.SidebarLinks=o(533).default,{isActive:a.e}}}),c=(o(556),o(13)),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?o("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[o("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?o("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):o("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[o("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?o("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),o("DropdownTransition",[e.open||!e.collapsable?o("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;var u=Object(n.b)({functional:!0,props:["item","sidebarDepth"],render:function(e,t){var o=t.parent,n=(o.$page,o.$site,o.$route),i=(o.$themeConfig,o.$themeLocaleConfig,t.props),r=i.item,s=(i.sidebarDepth,Object(a.e)(n,r.path)),c="auto"===r.type?s||r.children.some((function(e){return Object(a.e)(n,r.basePath+"#"+e.slug)})):s;return function(e,t,o,n){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},o)}(e,r.path,r.title||r.path,c)}}),h=(o(557),Object(c.a)(u,void 0,void 0,!1,null,null,null).exports);var d=Object(n.b)({name:"SidebarLinks",components:{SidebarGroup:l,SidebarLink:h},props:["items","depth","sidebarDepth"],setup:function(e,t){var o=Object(r.a)(),i=Object(n.h)(e).items,s=Object(n.g)(0),c=function(){var e=function(e,t){for(var o=0;o<t.length;o++){var n=t[o];if("group"===n.type&&n.children.some((function(t){return"page"===t.type&&Object(a.e)(e,t.path)})))return o}return-1}(o.$route,i.value);e>-1&&(s.value=e)},l=function(){var e=[].slice.call(document.querySelectorAll(".header-anchor")).filter((function(e){return-1!=decodeURIComponent(o.$route.fullPath).indexOf(decodeURIComponent(e.hash))}));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=function(){var e=document.getElementsByClassName("sidebar")[0],t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null!=t&&null!=t&&null!=t.offsetTop){var o=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=t.offsetTop,a=t.offsetTop+t.offsetHeight,i=e.scrollTop;a<=o+i||(e.scrollTop=a+5-o),n>=i||(e.scrollTop=n-5)}};return c(),Object(n.d)((function(){!function(){var e=decodeURIComponent(o.$route.fullPath);if(e&&""!=e)for(var t=[].slice.call(document.querySelectorAll(".sidebar-link")),n=0;n<t.length;n++)if(-1!=decodeURIComponent(t[n].getAttribute("href")).indexOf(e))return t[n].click(),void l()}(),u()})),Object(n.e)((function(){return u()})),{openGroupIndex:s,refreshIndex:c,toggleGroup:function(e){o.openGroupIndex=e===o.openGroupIndex?-1:e},isActive:function e(t){return e(o.$route,t.regularPath)}}},watch:{$route:function(){this.refreshIndex()}}}),p=Object(c.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.items.length?o("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,n){return o("li",{key:n},["group"===t.type?o("SidebarGroup",{attrs:{item:t,open:n===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(n)}}}):o("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},534:function(e,t,o){"use strict";o(52);var n=o(159),a=o(477),i=o(117),r=o(476),s=Object(n.b)({components:{RecoIcon:a.b},setup:function(e,t){var o=Object(r.a)();return{socialLinks:Object(n.a)((function(){return(o.$themeConfig.blogConfig&&o.$themeConfig.blogConfig.socialLinks||[]).map((function(e){return e.color||(e.color=Object(i.b)()),e}))}))}}}),c=(o(559),o(13)),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"personal-info-wrapper"},[e.$themeConfig.authorAvatar?o("img",{staticClass:"personal-img",attrs:{src:e.$withBase(e.$themeConfig.authorAvatar),alt:"author-avatar"}}):e._e(),e._v(" "),e.$themeConfig.author?o("h3",{staticClass:"name"},[e._v("\n    "+e._s(e.$themeConfig.author)+"\n  ")]):e._e(),e._v(" "),o("div",{staticClass:"num"},[o("div",[o("h3",[e._v(e._s(e.$recoPosts.length))]),e._v(" "),o("h6",[e._v(e._s(e.$recoLocales.article))])]),e._v(" "),o("div",[o("h3",[e._v(e._s(e.$tags.list.length))]),e._v(" "),o("h6",[e._v(e._s(e.$recoLocales.tag))])])]),e._v(" "),o("ul",{staticClass:"social-links"},e._l(e.socialLinks,(function(e,t){return o("li",{key:t,staticClass:"social-item"},[o("reco-icon",{style:{color:e.color},attrs:{icon:e.icon,link:e.link}})],1)})),0),e._v(" "),o("hr")])}),[],!1,null,"4ea3703e",null);t.a=l.exports},535:function(e,t,o){"use strict";var n=o(159),a=Object(n.b)({name:"DropdownTransition",setup:function(e,t){return{setHeight:function(e){e.style.height=e.scrollHeight+"px"},unsetHeight:function(e){e.style.height=""}}}}),i=(o(548),o(13)),r=Object(i.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.a=r.exports},543:function(e,t,o){"use strict";o(502)},545:function(e,t,o){"use strict";o(504)},546:function(e,t,o){"use strict";o(505)},548:function(e,t,o){"use strict";o(506)},549:function(e,t,o){"use strict";o(507)},550:function(e,t,o){o(116),e.exports={plugins:[["go-top"],["@vuepress/last-updated",{transformer:function(e,t){return new Date(e).toLocaleDateString()}}],["sitemap",{hostname:"https://i-am-nothing.github.io/"}]],linkFix:{"/zh-TW/categories/Diary/":"/zh-TW/categories/日記/","/zh-TW/categories/Vue-Press Blog/":"/zh-TW/categories/Vue-Press部落格/","/zh-TW/categories/About-Nothing/":"/zh-TW/categories/關於 Nothing/","/zh-TW/categories/Taiwan-Transportation Tracking App/":"/zh-TW/categories/台灣大眾運輸追蹤APP/","/categories/日記/":"/categories/Diary/","/categories/Vue-Press部落格/":"/categories/Vue-Press Blog/","/categories/關於 Nothing/":"/categories/About-Nothing/","/categories/台灣大眾運輸追蹤APP/":"/categories/Taiwan-Transportation Tracking App/","/zh-TW/tag/Summary/":"/zh-TW/tag/摘要/","/tag/摘要/":"/tag/Summary/","/categories/實用的“庫”/":"/categories/Useful Repositories/","/zh-TW/categories/Useful Repositories/":"/zh-TW/categories/實用的“庫”/"},locales:{"/":{lang:"en-US",title:"I-am-nothing",description:"I believe I can't touch the sky ~~~"},"/zh-TW/":{lang:"zh-TW",title:"I-am-nothing",description:"我相信我碰不到天空～～～"}},thirdPartyComponents:{fontAwesomeIcons:{brands:["github"]}},base:"/",dest:"../docs",head:[["script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-170VJJB3ZL"}],["script",{},["window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-170VJJB3ZL');"]],["link",{rel:"icon",href:"/hero.png"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no"}]],mode:"dark",themeConfig:{locales:{"/":{selectText:"Languages",label:"English",editLinkText:"Edit this page on GitHub",lastUpdated:"Last Updated Time",serviceWorker:{updatePopup:{message:"New content is available.",buttonText:"Refresh"}},algolia:{},nav:[{text:"Home",link:"/",icon:"reco-home"},{text:"TimeLine",link:"/timeline/",icon:"reco-date"},{text:"Tags",link:"/tag/",icon:"reco-tag"},{text:"Categories",icon:"reco-category",items:[{text:"Vue-Press Blog",link:"/categories/Vue-Press%20Blog/"},{text:"Taiwan-Transportation Tracking App",link:"/categories/Taiwan-Transportation%20Tracking%20App/"},{text:"Diary",link:"/categories/Diary/"},{text:"Useful Repositories",link:"/categories/Useful%20Repositories/"}]},{text:"Docs",icon:"reco-message",items:[{text:"About Nothing",link:"/docs/about-nothing/"},{text:"History Of Love",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}]}],sidebar:{"/docs/":[{title:"About Nothing",collapsable:!0,children:[{title:"Nothing",path:"about-nothing/"},{title:"Work Experience",path:"about-nothing/work"},{title:"Side Project",path:"about-nothing/side-project"},{title:"Autobiography",path:"about-nothing/autobiography"},{title:"Competition",path:"about-nothing/competition"},{title:"Club Participation",path:"about-nothing/club"},{title:"Certification",path:"about-nothing/certification"},{title:"WorkShop Experience",path:"about-nothing/workshop"},{title:"Special Experience",path:"about-nothing/special"}]}]},valineConfig:{appId:"uzXtuH1J23gkPQzsXmFVoJHL-MdYXbMMI",appKey:"00CVVx4GG0I5sDvs7UvarjE3",serverURLs:"https://uzxtuh1j.api.lncldglobal.com",placeholder:"It's time to show the real technology",avatar:"wavatar",recordIP:!0,lang:"en"}},"/zh-TW/":{selectText:"Languages",label:"中文-繁體",editLinkText:"在 Github 上編輯此頁",lastUpdated:"最後更新時間 ",serviceWorker:{updatePopup:{message:"發現新內容",buttonText:"刷新"}},algolia:{},nav:[{text:"首頁",link:"/zh-TW/",icon:"reco-home"},{text:"時間軸",link:"/zh-TW/timeline/",icon:"reco-date"},{text:"標籤",link:"/zh-TW/tag/",icon:"reco-tag"},{text:"類別",icon:"reco-category",items:[{text:"Vue-Press部落格",link:"/zh-TW/categories/Vue-Press%E9%83%A8%E8%90%BD%E6%A0%BC/"},{text:"台灣大眾運輸追蹤APP",link:"/zh-TW/categories/台灣大眾運輸追蹤APP/"},{text:"日記",link:"/zh-TW/categories/日記/"},{text:"實用的“庫”",link:"/zh-TW/categories/實用的“庫”/"}]},{text:"文檔",icon:"reco-message",items:[{text:"關於 Nothing",link:"/zh-TW/docs/about-nothing/"},{text:"情史",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}]}],sidebar:{"/zh-TW/docs/":[{title:"關於 Nothing",path:"/zh-TW/docs/about-nothing/",collapsable:!0,children:[{title:"Nothing",path:"about-nothing/"},{title:"工作經驗",path:"about-nothing/work"},{title:"作品集",path:"about-nothing/side-project"},{title:"自傳",path:"about-nothing/autobiography"},{title:"競賽經歷",path:"about-nothing/competition"},{title:"社團參與",path:"about-nothing/club"},{title:"檢定證照",path:"about-nothing/certification"},{title:"研習經驗",path:"about-nothing/workshop"},{title:"特殊經歷",path:"about-nothing/special"}]}]},valineConfig:{appId:"uzXtuH1J23gkPQzsXmFVoJHL-MdYXbMMI",appKey:"00CVVx4GG0I5sDvs7UvarjE3",serverURLs:"https://uzxtuh1j.api.lncldglobal.com",placeholder:"是時候展示真正的技術了",avatar:"wavatar",recordIP:!0,lang:"zh-TW"}}},type:"blog",blogConfig:{socialLinks:[{link:"https://github.com/I-am-nothing",icon:"reco-github"},{link:"https://www.linkedin.com/in/nothing-chang-374147227/",icon:"reco-linkedin"},{link:"mailto:nothingchang1118@gmail.com",icon:"reco-mail"}]},friendLink:[{logo:"https://urloser404.github.io/hero.jpg",title:"URLoser404",desc:"URLoser404's personal website",link:"https://urloser404.github.io/"},{logo:"https://mr6915tri8513.github.io/home_page/avatar.png",title:"Mr6915tri8513",desc:"Mr6915tri8513's personal website",link:"https://mr6915tri8513.github.io/"},{logo:"https://docat0209.github.io/page.png",title:"Docat0209",desc:"Docat0219's personal website",link:"https://docat0209.github.io/"},{logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmKE_FCpSYHZJz0k_k1FwFI-GHXWaJTXymQ&usqp=CAU",title:"Rick Astley",desc:"Never gonna give you up ~~~",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}],logo:"/hero.png",search:!0,searchMaxSuggestions:10,author:"I-am-nothing",authorAvatar:"/hero2.png",record:null,startYear:"2022",noFoundPageByTencent:!1,subSidebar:"auto",sidebarDepth:1,displayAllHeaders:!1},markdown:{lineNumbers:!0}}},551:function(e,t,o){"use strict";o(508)},553:function(e,t,o){"use strict";o(509)},554:function(e,t,o){"use strict";o(510)},555:function(e,t,o){"use strict";o(511)},556:function(e,t,o){"use strict";o(512)},557:function(e,t,o){"use strict";o(513)},558:function(e,t,o){"use strict";o(514)},559:function(e,t,o){"use strict";o(515)},562:function(e,t,o){"use strict";o(518)},565:function(e,t,o){"use strict";o(519)}}]);