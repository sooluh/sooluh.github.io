(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{DQNa:function(t,a,e){var i=e("busE"),n=Date.prototype,s=n.toString,r=n.getTime;"Invalid Date"!=String(new Date(NaN))&&i(n,"toString",(function(){var t=r.call(this);return t==t?s.call(this):"Invalid Date"}))},EgHu:function(t,a,e){"use strict";e("jG2P")},F3eR:function(t,a,e){"use strict";e.r(a);var i=e("XzqR"),n=e("LxRX"),s={components:{Preview:e("wp+l").a,Title:i.a},methods:{formatDate:function(t){return Object(n.a)(t)}},metaInfo:function(){var t="Blog - ".concat(this.$static.metadata.siteName);return{title:t,meta:[{name:"og:title",key:"og:title",content:t}]}}},r=(e("OaPA"),e("KHd+")),c=e("Kw5r"),o=c.a.config.optionMergeStrategies.computed,l={metadata:{siteName:"Suluh Sulistiawan"}},u=function(t){var a=t.options;a.__staticData?a.__staticData.data=l:(a.__staticData=c.a.observable({data:l}),a.computed=o({$static:function(){return a.__staticData.data}},a.computed))},p=null,d=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("Title",{attrs:{title:"All Articles"}}),e("div",{staticClass:"articles"},[e("div",{staticClass:"container"},t._l(t.$page.articles.edges,(function(a){return e("Preview",t._b({key:a.id,staticClass:"article",attrs:{date:t.formatDate(a.node.date)}},"Preview",a.node,!1))})),1)])],1)}),[],!1,null,"aeeea828",null);"function"==typeof u&&u(d),"function"==typeof p&&p(d);a.default=d.exports},LxRX:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("DQNa"),e("ma9I");function i(t){var a=new Date(t),e=a.getFullYear()!==(new Date).getFullYear()?a.getFullYear():"";return"".concat(a.getDate()," ").concat(["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][a.getMonth()]," ").concat(e)}},OaPA:function(t,a,e){"use strict";e("k29C")},XzqR:function(t,a,e){"use strict";var i={props:{title:{type:String,default:""}}},n=(e("ZXXH"),e("KHd+")),s=Object(n.a)(i,(function(t,a){var e=a._c;return e("div",{staticClass:"heading"},[e("h1",{staticClass:"container"},[a._v(a._s(a.props.title))])])}),[],!0,null,"36791c2d",null);a.a=s.exports},ZXXH:function(t,a,e){"use strict";e("tGWG")},jG2P:function(t,a,e){},k29C:function(t,a,e){},tGWG:function(t,a,e){},"wp+l":function(t,a,e){"use strict";e("qePV");var i={props:{title:{type:String,default:""},path:{type:String,default:""},description:{type:String,default:""},date:{type:String,default:-1},timeToRead:{type:Number,default:null}}},n=(e("EgHu"),e("KHd+")),s=Object(n.a)(i,(function(t,a){var e=a._c;return e("g-link",{staticClass:"card",class:[a.data.class,a.data.staticClass],attrs:{"aria-label":"Baca Artikel "+a.props.title,to:a.props.path}},[e("article",{staticClass:"card-body"},[e("div",{staticClass:"titlebar"},[e("h3",[a._v(a._s(a.props.title))]),e("div",{staticClass:"meta"},[a._v("\n        "+a._s(a.props.timeToRead)+" menit baca • "+a._s(a.props.date)+"\n      ")])]),a.props.description?e("p",{staticClass:"description"},[a._v("\n      "+a._s(a.props.description)+"\n    ")]):a._e()])])}),[],!0,null,"8658bd98",null);a.a=s.exports}}]);