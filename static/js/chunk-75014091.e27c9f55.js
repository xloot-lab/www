(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75014091"],{"4c41":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home wrapper"},[n("div",{staticClass:"home-list-box"},[n("h4",{staticClass:"list-title",staticStyle:{"margin-bottom":"30px","margin-top":"20px",color:"#fff"}},[e._v("My xLoot ("+e._s(e.count)+")")]),n("a-row",{attrs:{gutter:18}},e._l(e.markets,(function(t,r){return n("a-col",{key:r,attrs:{xs:24,sm:24,md:24,lg:8}},[n("div",{staticClass:"list-box"},[n("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","padding-right":"15px"}},[n("p"),n("p",{staticStyle:{"font-size":"16px"}},[e._v("#"+e._s(t.idx))])]),n("img",{attrs:{src:t.icon}}),n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"row","justify-content":"space-between","margin-top":"-20px","margin-bottom":"10px"}},[n("span",{staticStyle:{"font-size":"15px",color:"#fff","font-weight":"500"}},[e._v("Price: "+e._s(t.xprice)+" BNB")]),n("div",{staticClass:"add-btn",on:{click:function(n){return e.buy(t)}}},[e._v("Sell")])])])])})),1),n("a-spin",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticStyle:{margin:"10px"}}),n("a-modal",{attrs:{title:"Sell"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("a-input",{attrs:{placeholder:"Input sell price"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1)],1)])},a=[],i=n("1da1"),s=(n("96cf"),n("ac1f"),n("5319"),n("b680"),n("e762")),o=n("901e"),c=n.n(o),l={name:"Home",components:{},data:function(){return{visible:!1,count:0,price:"",loading:!0,markets:[]}},computed:{address:function(){return this.$store.state.address}},watch:{address:function(){this.address&&this.getInfo()}},methods:{getInfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,o,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.address,r=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=4,r.methods.balanceOf(n).call();case 4:e.count=t.sent,a=1;case 6:if(!(a<=8e3)){t.next=30;break}return t.prev=7,t.next=10,r.methods.ownerOf(a).call();case 10:if(i=t.sent,i!=n){t.next=23;break}return t.next=14,r.methods.tokenURI(a).call();case 14:return o=t.sent,o=o.replace("data:application/json;base64,",""),l=JSON.parse(Object(s["a"])(o)),t.next=19,r.methods.OfferedForSale(a).call();case 19:if(u=t.sent,1==u[0]?e.markets.push({idx:a,icon:l.image,seller:u[2],price:u[3],xprice:c()(u[3]).dividedBy(1e18).toFixed(2)}):e.markets.push({idx:a,icon:l.image,seller:"",price:0,xprice:0}),!(e.markets.length>=e.count)){t.next=23;break}return t.abrupt("break",30);case 23:t.next=27;break;case 25:t.prev=25,t.t0=t["catch"](7);case 27:a++,t.next=6;break;case 30:e.loading=!1;case 31:case"end":return t.stop()}}),t,null,[[7,25]])})))()},claim:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=3,e.randIdx(n);case 3:return r=t.sent,t.next=6,n.methods.claim(r).send({from:e.$store.state.address,value:String(e.fee)});case 6:case"end":return t.stop()}}),t)})))()},randIdx:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=0,a=7777,i=parseInt(Math.random()*(a-r+1)+r,10),n.prev=3,n.next=6,e.methods.ownerOf(i).call();case 6:t.randIdx(e),n.next=12;break;case 9:return n.prev=9,n.t0=n["catch"](3),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n,null,[[3,9]])})))()},buy:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.item=e,t.visible=!0;case 2:case"end":return n.stop()}}),n)})))()},handleOk:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.price){t.next=6;break}return n=c()(e.price).multipliedBy(1e18).toFixed(0),e.visible=!1,r=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=6,r.methods.offerForSale(e.item.idx,n).send({from:e.$store.state.address});case 6:case"end":return t.stop()}}),t)})))()}}},u=l,d=(n("af01"),n("2877")),p=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=p.exports},7265:function(e,t,n){},af01:function(e,t,n){"use strict";n("7265")}}]);