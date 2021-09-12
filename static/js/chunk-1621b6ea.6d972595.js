(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1621b6ea"],{"8d91":function(e,t,r){},bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home wrapper"},[e._m(0),r("div",{staticClass:"home-list-box"},[r("h4",{staticClass:"list-title",staticStyle:{"margin-bottom":"30px"}},[e._v("Mint")]),r("p",[e._v("MaxSupply: 8000 "),r("span",{staticStyle:{"margin-left":"30px"}},[e._v("Left: "+e._s(e.left))]),r("a-button",{staticStyle:{"border-radius":"17px",height:"34px","margin-left":"20px"},attrs:{loading:e.excuting,type:"primary",size:"large"},on:{click:e.claim}},[e._v("Claim ")])],1),r("h4",{staticClass:"list-title",staticStyle:{"margin-bottom":"30px","margin-top":"-10px"}},[e._v("Market")]),r("a-row",{attrs:{gutter:18}},e._l(e.markets,(function(t,n){return r("a-col",{key:n,attrs:{xs:24,sm:24,md:24,lg:8}},[r("div",{staticClass:"list-box"},[r("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","padding-right":"15px"}},[r("p"),r("p",{staticStyle:{"font-size":"16px"}},[e._v("#"+e._s(t.idx))])]),r("img",{attrs:{src:t.icon}}),r("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"row","justify-content":"space-between","margin-top":"-20px","margin-bottom":"10px"}},[r("span",{staticStyle:{"font-size":"15px",color:"#fff","font-weight":"500"}},[e._v("Price: "+e._s(t.xprice)+" ETH")]),r("div",{staticClass:"add-btn",on:{click:function(r){return e.buy(t)}}},[e._v("Buy")])])])])})),1)],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-top"},[r("h1",[e._v("XLoot")]),r("div",{staticClass:"home-top-link"},[r("a",{attrs:{href:"https://twitter.com/XLoot_finance"}},[e._v("Twitter")]),r("a",{attrs:{href:"https://arbiscan.io/address/0x06d274bba6d888dc14485b2d9ed67fda5e03a12c#code"}},[e._v("Contract")])]),r("p",[e._v("XLoot is randomized adventurer gear generated and stored on arbitrum.")]),r("p",[e._v("Stats,images,and other functionality are intentionally omitted for others to interpret")]),r("p",[e._v("Feel free to use XLoot in any way you want.")]),r("p",[e._v("In order to prevent scientists, pay eth to claim, the fee will be used for the initial liquidity of the farm")])])}],s=r("1da1"),i=(r("ac1f"),r("5319"),r("b680"),r("d3b7"),r("ddb0"),r("96cf"),r("e762")),o=r("901e"),c=r.n(o),d={name:"Home",components:{},data:function(){return{left:0,excuting:!1,loading:!0,markets:[],page:0,offers:0}},computed:{address:function(){return this.$store.state.address}},mounted:function(){this.address&&this.getInfo()},watch:{address:function(){this.address&&this.getInfo()}},methods:{getInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=3,r.methods._fee().call();case 3:return e.fee=t.sent,t.next=6,r.methods.totalSupply().call();case 6:return e.totalSupply=t.sent,t.next=9,r.methods.offersCount().call();case 9:e.offers=t.sent,e.left=8e3-e.totalSupply,e.loadMarket();case 12:case"end":return t.stop()}}),t)})))()},loadMarket:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,d,l,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.page=e.page+1,r=9*e.page,n=9*(e.page-1),!(n>e.offers)){t.next=5;break}return t.abrupt("return");case 5:return a=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=8,a.methods.listOffers(n,r).call();case 8:s=t.sent,t.t0=regeneratorRuntime.keys(s);case 10:if((t.t1=t.t0()).done){t.next=26;break}if(o=t.t1.value,d=s[o],0==d){t.next=24;break}return t.next=16,a.methods.OfferedForSale(d).call();case 16:if(l=t.sent,1!=l[0]){t.next=24;break}return t.next=20,a.methods.tokenURI(l[1]).call();case 20:u=t.sent,u=u.replace("data:application/json;base64,",""),p=JSON.parse(Object(i["a"])(u)),e.markets.push({idx:l[1],icon:p.image,seller:l[2],price:l[3],xprice:c()(l[3]).dividedBy(1e18).toFixed(2)});case 24:t.next=10;break;case 26:e.loadMarket();case 27:case"end":return t.stop()}}),t)})))()},claim:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.excuting=!0,r=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=5,e.randIdx(r);case 5:return n=t.sent,t.next=8,r.methods.claim(n).send({from:e.$store.state.address,value:String(e.fee)});case 8:e.excuting=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.excuting=!1;case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},randIdx:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=0,a=8e3,s=parseInt(Math.random()*(a-n+1)+n,10),r.prev=3,r.next=6,e.methods.ownerOf(s).call();case 6:t.randIdx(e),r.next=12;break;case 9:return r.prev=9,r.t0=r["catch"](3),r.abrupt("return",s);case 12:case"end":return r.stop()}}),r,null,[[3,9]])})))()},buy:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=new t.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),r.next=3,n.methods.buy(e.idx).send({from:t.$store.state.address,value:String(e.price)});case 3:case"end":return r.stop()}}),r)})))()}}},l=d,u=(r("de16"),r("2877")),p=Object(u["a"])(l,n,a,!1,null,null,null);t["default"]=p.exports},de16:function(e,t,r){"use strict";r("8d91")}}]);