(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1aP3":function(t,e,a){"use strict";a("5/4j")},"5/4j":function(t,e,a){},HOO2:function(t,e,a){},LxRX:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("DQNa"),a("ma9I");function i(t){var e=new Date(t),a=e.getFullYear()!==(new Date).getFullYear()?e.getFullYear():"";return"".concat(e.getDate()," ").concat(["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][e.getMonth()]," ").concat(a)}},cURE:function(t,e,a){"use strict";a("vvtB")},uGKF:function(t,e,a){"use strict";a("HOO2")},vvtB:function(t,e,a){},xtqI:function(t,e,a){"use strict";a.r(e);a("07d7"),a("PKPk"),a("3bBZ"),a("ma9I"),a("pNMO"),a("4Brf");var i=a("LxRX"),n=(a("qePV"),{props:{title:{type:String,default:""},timeToRead:{type:Number,default:-1},date:{type:String,default:""}}}),c=(a("uGKF"),a("KHd+")),s=Object(c.a)(n,(function(t,e){var a=e._c;return a("div",{staticClass:"article-header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"meta"},[e._v("\n      "+e._s(e.props.timeToRead)+" menit baca • "+e._s(e.props.date)+"\n    ")]),a("h1",[e._v(e._s(e.props.title))])])])}),[],!0,null,"31d304a4",null).exports,o=(a("wLYn"),a("LvDl")),r={data:function(){return{read:0,showRead:!1}},mounted:function(){document.addEventListener("scroll",Object(o.throttle)(this.updateRead.bind(this),100)),this.showRead=2*document.body.clientHeight<document.body.scrollHeight},methods:{updateRead:function(){var t=document.documentElement,e=document.body,a="scrollTop",i="scrollHeight";this.read=(t[a]||e[a])/((t[i]||e[i])-t.clientHeight)*100}}},l=(a("cURE"),{components:{Header:s,Scroll:Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.showRead?e("div",{staticClass:"read"},[e("div",{staticClass:"indicator",style:{maxWidth:this.read+"%"}})]):this._e()}),[],!1,null,"73ff944f",null).exports,Footer:function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"HdXg"))}},computed:{fDate:function(){return Object(i.a)(this.$page.article.date)}},metaInfo:function(){var t="".concat(this.$page.article.title," - ").concat(this.$static.metadata.siteName),e=this.$page.article.description;return{title:t,meta:[{key:"description",name:"description",content:e},{name:"og:title",key:"og:title",content:t},{name:"og:description",key:"og:description",content:e}]}}}),u=(a("1aP3"),a("Kw5r")),d=u.a.config.optionMergeStrategies.computed,p={metadata:{siteName:"Suluh Sulistiawan"}},m=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=u.a.observable({data:p}),e.computed=d({$static:function(){return e.__staticData.data}},e.computed))},f=null,h=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Header",this._b({attrs:{date:this.fDate}},"Header",this.$page.article,!1)),e("Scroll",{staticClass:"scroll-indicator"}),e("article",[e("div",{staticClass:"container"},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.article.content)}})])]),e("Footer",{attrs:{tags:this.$page.article.tags,title:this.$page.article.title}})],1)}),[],!1,null,null,null);"function"==typeof m&&m(h),"function"==typeof f&&f(h);e.default=h.exports}}]);