(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1621b6ea"],{"8d91":function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home wrapper"},[t._m(0),n("div",{staticClass:"home-list-box"},[n("h4",{staticClass:"list-title",staticStyle:{"margin-bottom":"30px"}},[t._v("Mint")]),n("p",[t._v("MaxSupply: 8000 "),n("span",{staticStyle:{"margin-left":"30px"}},[t._v("Left: "+t._s(t.left))]),n("a-button",{staticStyle:{"border-radius":"17px",height:"34px","margin-left":"20px"},attrs:{loading:t.excuting,type:"primary",size:"large"},on:{click:t.claim}},[t._v("Claim ")])],1),n("h4",{staticClass:"list-title",staticStyle:{"margin-bottom":"30px","margin-top":"-10px"}},[t._v("Market")]),n("a-row",{attrs:{gutter:18}},t._l(t.markets,(function(e,a){return n("a-col",{key:a,attrs:{xs:24,sm:24,md:24,lg:8}},[n("div",{staticClass:"list-box"},[n("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","padding-right":"15px"}},[n("p"),n("p",{staticStyle:{"font-size":"16px"}},[t._v("#"+t._s(e.idx))])]),n("img",{attrs:{src:e.icon}}),n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"row","justify-content":"space-between","margin-top":"-20px","margin-bottom":"10px"}},[n("span",{staticStyle:{"font-size":"15px",color:"#fff","font-weight":"500"}},[t._v("Price: "+t._s(e.xprice)+" BNB")]),n("div",{staticClass:"add-btn",on:{click:function(n){return t.buy(e)}}},[t._v("Buy")])])])])})),1),n("a-spin",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{margin:"10px"}})],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-top"},[n("h1",[t._v("xLoot")]),n("div",{staticClass:"home-top-link"},[n("a",{attrs:{href:"https://twitter.com/XLoot_finance"}},[t._v("Twitter")]),n("a",{attrs:{href:"https://bscscan.com/address/0xBB99133FE167FCB8dc26c07F21651854cA67f65A#code"}},[t._v("Contract")])]),n("p",[t._v("xLoot is randomized adventurer gear generated and stored on chain.")]),n("p",[t._v("Stats,images,and other functionality are intentionally omitted for others to interpret")]),n("p",[t._v("Feel free to use xLoot in any way you want.")])])}],s=n("1da1"),i=(n("96cf"),n("ac1f"),n("5319"),n("b680"),n("e762")),o=n("901e"),c=n.n(o),l={name:"Home",components:{},data:function(){return{left:0,excuting:!1,loading:!0,markets:[]}},computed:{address:function(){return this.$store.state.address}},watch:{address:function(){this.address&&this.getInfo()}},methods:{getInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new t.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),e.next=3,n.methods._fee().call();case 3:return t.fee=e.sent,e.next=6,n.methods.totalSupply().call();case 6:t.totalSupply=e.sent,t.left=7777-t.totalSupply,a=1;case 9:if(!(a<=8e3)){e.next=23;break}return e.next=12,n.methods.OfferedForSale(a).call();case 12:if(r=e.sent,1!=r[0]){e.next=20;break}return e.next=16,n.methods.tokenURI(r[1]).call();case 16:s=e.sent,s=s.replace("data:application/json;base64,",""),o=JSON.parse(Object(i["a"])(s)),t.markets.push({idx:r[1],icon:o.image,seller:r[2],price:r[3],xprice:c()(r[3]).dividedBy(1e18).toFixed(2)});case 20:a++,e.next=9;break;case 23:t.loading=!1;case 24:case"end":return e.stop()}}),e)})))()},claim:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.excuting=!0,n=new t.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),e.next=5,t.randIdx(n);case 5:return a=e.sent,e.next=8,n.methods.claim(a).send({from:t.$store.state.address,value:String(t.fee)});case 8:t.excuting=!1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.excuting=!1;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},randIdx:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=0,r=7777,s=parseInt(Math.random()*(r-a+1)+a,10),n.prev=3,n.next=6,t.methods.ownerOf(s).call();case 6:e.randIdx(t),n.next=12;break;case 9:return n.prev=9,n.t0=n["catch"](3),n.abrupt("return",s);case 12:case"end":return n.stop()}}),n,null,[[3,9]])})))()},buy:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),n.next=3,a.methods.buy(t.idx).send({from:e.$store.state.address,value:String(t.price)});case 3:case"end":return n.stop()}}),n)})))()}}},d=l,u=(n("de16"),n("2877")),p=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=p.exports},de16:function(t,e,n){"use strict";n("8d91")}}]);