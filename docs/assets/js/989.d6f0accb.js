(window.webpackJsonp=window.webpackJsonp||[]).push([[989],{1628:function(s,a,n){"use strict";n.r(a);var t=n(16),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h4",{attrs:{id:"github-源代碼"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-源代碼"}},[s._v("#")]),s._v(" "),n("i",{staticClass:"iconfont reco-other",staticStyle:{color:"rgb(66, 152, 245)"}}),s._v(" "),n("a",{attrs:{href:"https://github.com/I-am-nothing/I-am-nothing.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github 源代碼"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("Fa-CaretSquareLeft",{attrs:{color:"rgb(66, 152, 245)"}}),s._v(" "),n("RouterLink",{attrs:{to:"/zh-TW/blogs/vue-puess/summary.html"}},[s._v("摘要")]),n("br"),s._v(" "),n("Fa-CaretSquareRight",{attrs:{color:"rgb(66, 152, 245)"}}),s._v(" "),n("RouterLink",{attrs:{to:"/zh-TW/blogs/vue-puess/02-deploy-to-github.html"}},[s._v("02 部署至 Github Page")])],1),s._v(" "),n("h2",{attrs:{id:"主題"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主題"}},[s._v("#")]),s._v(" 主題")]),s._v(" "),n("p",[s._v("在看到學弟使用以及網路上有許多透過 "),n("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),n("OutboundLink")],1),s._v("架設或改造的作品")]),s._v(" "),n("p",[s._v("因此我也使用 "),n("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此"),n("OutboundLink")],1),s._v("主題來架設")]),s._v(" "),n("h2",{attrs:{id:"快速建置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速建置"}},[s._v("#")]),s._v(" 快速建置")]),s._v(" "),n("p",[s._v("首先需要有 "),n("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),n("OutboundLink")],1),s._v(" 或是 npm "),n("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),n("OutboundLink")],1),s._v(" 套件管理器")]),s._v(" "),n("p",[s._v("個人偏好以及官網上建議使用 yarn")]),s._v(" "),n("p",[s._v("因此以下皆使用 yarn 來安裝與執行套件")]),s._v(" "),n("h3",{attrs:{id:"安裝-yarn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝-yarn"}},[s._v("#")]),s._v(" 安裝 yarn")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Windows "),n("Fa-ArrowRight"),s._v(" "),n("a",{attrs:{href:"https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable",target:"_blank",rel:"noopener noreferrer"}},[s._v("Download Installer"),n("OutboundLink")],1)],1)]),s._v(" "),n("li",[n("p",[s._v("Mac "),n("Fa-ArrowDown")],1)])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("brew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"導入主題"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#導入主題"}},[s._v("#")]),s._v(" 導入主題")]),s._v(" "),n("p",[s._v("由於之後要把這個部署到 Github Page 上，所以建議把專案結構做成 "),n("Fa-ArrowDown")],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("你的專案名稱\n ├── dev \n │    └── 攥寫部落格的位置\n └── docs\n      └── 生成靜態網頁位置\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("接著開啟 Command 或 Terminal 將路徑指到 dev 下 "),n("Fa-ArrowDown")],1),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init \n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @vuepress-reco/theme-cli@1.0.7\n\ntheme-cli init\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("yarn init 時只需要一直按 Enter 就好，或是根據它所要求的打上去")]),s._v(" "),n("p",[s._v("在 theme-cli init 時，要輸入一些參數")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("建新資料夾： 不用(n)")]),s._v(" "),n("p",[s._v("專案標題： 自己決定")]),s._v(" "),n("p",[s._v("專案描述： 自己決定")]),s._v(" "),n("p",[s._v("專案作者： 你的匿名")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[s._v("選擇版本： 選blog")])]),n("p",[s._v("由於之前有測試過2代的版本，那時還不是很穩定，因此建議選擇blog(1代)這個版本")]),s._v(" "),n("p",[s._v("最後 "),n("Fa-ArrowDown")],1),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("大功告成，到這裡可以先跟著"),n("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官網文檔"),n("OutboundLink")],1),s._v("來摸索喔，把圖片、連結...先改成自己想要的")]),s._v(" "),n("p",[s._v("這個主題的架構 "),n("Fa-ArrowDown")],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("專案名稱\n ├── dev\n │    ├── .vuepress \n │    │    ├── public (圖片放置位置)\n │    │    │    └── 圖片\n │    │    └── config.js (專案版型設定) \n │    ├── blogs  (分類)\n │    │    ├── 分類名稱\n │    │    │    └── 文章\n │    │    └── 分類名稱\n │    │         └── 文章\n │    ├── docs (文檔)\n │    │    ├── 文檔名稱\n │    │    │    └── 文章\n │    │    └── 文檔名稱\n │    │         └── 文章\n │    ├── node_modules (編譯檔案、插件)\n │    │    └── 編譯檔案、插件\n │    ├── README.md  \n │    ├── package.json\n │    ├── yarn.lock (勿動)\n │    └── .gitignore\n └── docs\n      └── 生成靜態網頁位置\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("下一章： "),n("RouterLink",{attrs:{to:"/zh-TW/blogs/vue-puess/02-deploy-to-github.html"}},[s._v("部署至 Github Page")])],1),s._v(" "),n("h2",{attrs:{id:"回顧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回顧"}},[s._v("#")]),s._v(" 回顧")]),s._v(" "),n("h3",{attrs:{id:"這一章我們完成了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#這一章我們完成了"}},[s._v("#")]),s._v(" 這一章我們完成了 "),n("Fa-ArrowDown")],1),s._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/zh-TW/blogs/vue-puess/01-quick-build.html#快速建置"}},[s._v("快速建置 vuepress-theme-reco 主題的 vuepress 專案")])],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);