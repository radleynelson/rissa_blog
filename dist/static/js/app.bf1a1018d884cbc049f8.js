webpackJsonp([1],{"+BEu":function(t,s){},"8uO1":function(t,s){},HaHV:function(t,s){},J6yG:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("mtWM"),i=e.n(n),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("a",{staticClass:"insta-link",attrs:{target:"_blank",href:this.image.link}},[s("img",{staticClass:"pic",attrs:{src:this.image.images.low_resolution.url}})])])},staticRenderFns:[]};var o={name:"instaHeader",components:{instaPic:e("VU/8")({name:"instaPic",data:function(){return{key:4}},props:["image"]},r,!1,function(t){e("WD7F")},"data-v-43be6372",null).exports},data:function(){return{InstagramPosts:[]}},created:function(){var t=this;i.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=195216274.28884f1.5b0c0e0cd28d48c88b3ae0efd32cae0a").then(function(s){console.log(s.data);for(var e=0;e<12;e++)t.InstagramPosts.push(s.data.data[e])}).catch(function(t){console.log(t)})}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"columns"},this._l(this.InstagramPosts,function(t,e){return s("instaPic",{key:e,staticClass:"column",staticStyle:{margin:"0",padding:"0"},attrs:{image:t}})}))])},staticRenderFns:[]};var l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"columns"},[e("nav",{staticClass:"column"}),t._v(" "),e("nav",{staticClass:"nav-top column is-two-thirds"},[e("ul",{staticClass:"columns"},[e("li",{staticClass:"column blog-link"},[e("router-link",{attrs:{to:{name:"category",params:{id:14,name:"Lifestyle"}}}},[t._v("Lifestyle")])],1),t._v(" "),e("li",{staticClass:"column blog-link"},[e("router-link",{attrs:{to:{name:"category",params:{id:13,name:"Beauty"}}}},[t._v("Beauty")])],1),t._v(" "),e("li",{staticClass:"column blog-link"},[e("router-link",{attrs:{to:{name:"category",params:{id:72,name:"Salon"}}}},[t._v("Salon")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"column blog-link"},[s("a",{attrs:{href:"#"}},[this._v("About")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"column blog-link"},[s("a",{attrs:{href:"#"}},[this._v("Contact")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("nav",{staticClass:"column"},[s("div",{staticClass:"columns icons-nav"},[s("div",{staticClass:"column is-logo"},[s("i",{staticClass:"fa fa-instagram fa-3",attrs:{"aria-hidden":"true"}}),this._v(" "),s("i",{staticClass:"fa fa-pinterest fa-3",attrs:{"aria-hidden":"true"}}),this._v(" "),s("i",{staticClass:"fa fa-facebook-square fa-3",attrs:{"aria-hidden":"true"}})]),this._v(" "),s("div",{staticClass:"column is-logo"},[s("i",{staticClass:"fa fa-search fa-3",attrs:{"aria-hidden":"true"}})]),this._v(" "),s("div",{staticClass:"column"},[s("a",{staticClass:"subscribe",attrs:{href:"#"}},[this._v("SUBSCRIBE")])])])])}]};var u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"mainLogo"},[this._v("  \n        Rissa Nelson\n    ")])])},staticRenderFns:[]};var m={name:"App",components:{instaHeader:e("VU/8")(o,c,!1,function(t){e("eyky")},"data-v-055209ec",null).exports,navbar:e("VU/8")({name:"navbar",data:function(){return{key:3}}},l,!1,function(t){e("HaHV")},"data-v-60dcc19f",null).exports,mainLogo:e("VU/8")({name:"mainLogo",data:function(){return{test:3}}},u,!1,function(t){e("oXSK")},"data-v-2fc6d48a",null).exports}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("instaHeader"),this._v(" "),s("navbar"),this._v(" "),s("main-logo"),this._v(" "),s("div",{staticClass:"container body"},[s("router-view")],1)],1)},staticRenderFns:[]};var h=e("VU/8")(m,d,!1,function(t){e("J6yG")},null,null).exports,v=e("/ocq"),p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"column categoryImg category-container"},[s("router-link",{attrs:{to:{name:"category",params:{id:this.image.num,name:this.image.name}}}},[s("img",{staticClass:"pic image",attrs:{src:this.image.img}}),this._v(" "),s("div",{staticClass:"middle"},[s("div",{staticClass:"text"},[this._v(this._s(this.image.name))])])])],1)},staticRenderFns:[]};var f=e("VU/8")({name:"categoryImg",props:["image"],data:function(){return{test:3}}},p,!1,function(t){e("h9PY")},"data-v-45498fc2",null).exports,g=e("bOdI"),j=e.n(g),_=(e("PJh5"),{name:"blogPreview",props:["post"],data:function(){return j()({test:3,postPreview:"",postDate:""},"postPreview","")},created:function(){this.postPreview=this.post.content.rendered.substring(0,150);var t=new Date(this.post.date);this.postDate=t.toDateString(),this.postPreview=this.post.excerpt.rendered.replace(/<a class="continue-reading".+<\/a>/,"")}}),y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"center posts"},[e("div",{staticClass:"post-title"},[t._v(t._s(this.post.title.rendered))]),t._v(" "),e("div",{staticClass:"post-date"},[t._v(t._s(this.postDate))]),t._v(" "),e("div",{staticClass:"post-img"},[e("img",{attrs:{src:this.post.better_featured_image.source_url}})]),t._v(" "),e("div",{staticClass:"post-preview",domProps:{innerHTML:t._s(this.postPreview)}}),t._v(" "),e("div",{staticClass:"continue-reading"},[e("router-link",{attrs:{to:{name:"post",params:{id:this.post.id}}}},[t._v("Continue Reading...")])],1),t._v(" "),e("hr")])},staticRenderFns:[]};var b={name:"HomePage",components:{categoryImg:f,blogPreview:e("VU/8")(_,y,!1,function(t){e("skEb")},"data-v-a915700e",null).exports},data:function(){return{msg:"Welcome to Your Vue.js App",categories:[],posts:[]}},created:function(){var t=this;this.categories.push({name:"Lifestyle",img:"http://rissanelson.com/wp-content/uploads/2018/11/preset-bridal-155-of-166.jpg",num:14}),this.categories.push({name:"Beauty",img:"http://rissanelson.com/wp-content/uploads/2018/11/IMG_5531.jpg",num:13}),this.categories.push({name:"Salon",img:"http://rissanelson.com/wp-content/uploads/2018/11/IMG_1184.jpg",num:72}),i.a.get("http://rissanelson.com/wp-json/wp/v2/posts").then(function(s){t.posts=s.data}).catch(function(t){console.log(t)})}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"columns "},this._l(this.categories,function(t){return s("category-img",{key:t,attrs:{image:t}})})),this._v(" "),s("div",{staticClass:"posts"},this._l(this.posts,function(t,e){return s("blog-preview",{key:e,attrs:{post:t}})}))])},staticRenderFns:[]};var k=e("VU/8")(b,C,!1,function(t){e("+BEu")},"data-v-c8baf12e",null).exports,w={name:"post",data:function(){return{test:3,post:{},coverImage:"",bodyContent:"",postTitle:"",faq:[]}},created:function(){var t=this;i.a.get("http://rissanelson.com/wp-json/wp/v2/posts/"+this.$route.params.id).then(function(s){t.post=s.data,t.coverImage=t.post.better_featured_image.source_url,t.bodyContent=t.post.content.rendered,t.postTitle=t.post.title.rendered}).then(function(s){1507==t.$route.params.id&&function(){var s=document.body.innerHTML.match(/faq\d{4}_q/g),e=t.removeDuplicates(s);t.faq=e;for(var a=function(t){document.getElementById(e[t]).addEventListener("click",function(){"none"==document.getElementById(e[t].substr(0,7)+"_a").style.display||""==document.getElementById(e[t].substr(0,7)+"_a").style.display?(document.getElementById(e[t].substr(0,7)+"_a").style.display="block",document.getElementById(e[t].substr(0,7)+"_a").style.color="black"):document.getElementById(e[t].substr(0,7)+"_a").style.display="none"})},n=0;n<e.length;n++)a(n)}()}).catch(function(t){console.log(t)})},mounted:function(){},methods:{removeDuplicates:function(t){for(var s=[],e=0;e<t.length;e++)-1==s.indexOf(t[e])&&s.push(t[e]);return s}}},P={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"post-title"},[this._v("\n        "+this._s(this.postTitle)+"\n    ")]),this._v(" "),this.coverImage?s("div",{staticClass:"cover-image"},[s("img",{attrs:{src:this.coverImage}})]):this._e(),this._v(" "),s("div",{staticClass:"post-content"},[s("div",{staticClass:"content",domProps:{innerHTML:this._s(this.bodyContent)}})])])},staticRenderFns:[]};var E=e("VU/8")(w,P,!1,function(t){e("8uO1")},"data-v-26f485f4",null).exports,z={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"child"},[s("div",{staticClass:"category-img"},[s("img",{staticClass:"img",attrs:{src:this.image.better_featured_image.source_url}})])])},staticRenderFns:[]};var F={name:"category",components:{categoryPreview:e("VU/8")({name:"categoryPreview",props:["image"],data:function(){return{test:3}}},z,!1,function(t){e("hqef")},"data-v-5e767d90",null).exports},data:function(){return{test:3,categoryPosts:[]}},created:function(){var t=this;i.a.get("http://rissanelson.com/wp-json/wp/v2/posts?categories="+this.$route.params.id).then(function(s){t.categoryPosts=s.data}).catch(function(t){console.log(t)})},methods:{reLoadData:function(){var t=this;i.a.get("http://rissanelson.com/wp-json/wp/v2/posts?categories="+this.$route.params.id).then(function(s){t.categoryPosts=s.data}).catch(function(t){console.log(t)})}}},x={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"categories"},[s("div",{staticClass:"category-title"},[this._v("\n        "+this._s(this.$route.params.name)+"\n    ")]),this._v(" "),s("div",{staticClass:"parent"},this._l(this.categoryPosts,function(t,e){return s("category-preview",{key:e,attrs:{image:t}})}))])},staticRenderFns:[]};var q=e("VU/8")(F,x,!1,function(t){e("PpQG")},"data-v-34d76fe2",null).exports;a.a.use(v.a);var H=new v.a({routes:[{path:"/",name:"HomePage",component:k},{path:"/post/:id",name:"post",component:E},{path:"/category/:id/:name",name:"category",component:q}]});e("C/JF"),e("fhbW"),e("1e6/");a.a.config.productionTip=!1,new a.a({el:"#app",router:H,components:{App:h},template:"<App/>"})},PpQG:function(t,s){},WD7F:function(t,s){},eyky:function(t,s){},h9PY:function(t,s){},hqef:function(t,s){},oXSK:function(t,s){},skEb:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.bf1a1018d884cbc049f8.js.map