(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75014091"],{"4c41":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home wrapper"},[n("div",{staticClass:"home-list-box"},[n("h4",{staticClass:"list-title",staticStyle:{"margin-bottom":"30px","margin-top":"30px",color:"#fff"}},[e._v("My XLoot ("+e._s(e.count)+")")]),n("a-row",{attrs:{gutter:18}},e._l(e.markets,(function(t,i){return n("a-col",{key:i,attrs:{xs:24,sm:24,md:24,lg:8}},[n("div",{staticClass:"list-box"},[n("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","padding-right":"15px"}},[n("p"),n("p",{staticStyle:{"font-size":"16px"}},[e._v("#"+e._s(t.idx))])]),n("img",{attrs:{src:t.icon}}),n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"row","justify-content":"space-between","margin-top":"-20px","margin-bottom":"10px"}},[n("span",{staticStyle:{"font-size":"15px",color:"#fff","font-weight":"500"}},[e._v("Price: "+e._s(t.xprice)+" ETH")]),n("div",{staticClass:"add-btn",on:{click:function(n){return e.buy(t)}}},[e._v("Sell")])])])])})),1),n("a-spin",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticStyle:{margin:"10px"}}),n("a-modal",{attrs:{title:"Sell"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("a-input",{attrs:{placeholder:"Input sell price"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1)],1)])},r=[],a=n("1da1"),s=(n("96cf"),n("ac1f"),n("5319"),n("b680"),n("d3b7"),n("ddb0"),n("e762")),o=n("901e"),c=n.n(o),l={name:"Home",components:{},data:function(){return{visible:!1,count:0,price:"",left:0,loading:!1,list:0,markets:[],excuting:!1}},computed:{address:function(){return this.$store.state.address}},watch:{address:function(){this.address&&this.getInfo()}},mounted:function(){this.address&&this.getInfo()},methods:{getInfo:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a,o,l,d,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.address,i=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=4,i.methods.balanceOf(n).call();case 4:return e.count=t.sent,t.next=7,i.methods.getHolder(n).call();case 7:r=t.sent,t.t0=regeneratorRuntime.keys(r);case 9:if((t.t1=t.t0()).done){t.next=24;break}if(a=t.t1.value,o=r[a],0==o){t.next=22;break}return t.next=15,i.methods.tokenURI(o).call();case 15:return l=t.sent,l=l.replace("data:application/json;base64,",""),d=JSON.parse(Object(s["a"])(l)),t.next=20,i.methods.OfferedForSale(o).call();case 20:u=t.sent,1==u[0]?e.markets.push({idx:o,icon:d.image,seller:u[2],price:u[3],xprice:c()(u[3]).dividedBy(1e18).toFixed(2)}):e.markets.push({idx:o,icon:d.image,seller:"",price:0,xprice:0});case 22:t.next=9;break;case 24:case"end":return t.stop()}}),t)})))()},buy:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.item=e,t.visible=!0;case 2:case"end":return n.stop()}}),n)})))()},handleOk:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.price){t.next=6;break}return n=c()(e.price).multipliedBy(1e18).toFixed(0),e.visible=!1,i=new e.$store.state.web.eth.Contract(window.xlootabi,window.xlootaddr),t.next=6,i.methods.offerForSale(e.item.idx,n).send({from:e.$store.state.address});case 6:case"end":return t.stop()}}),t)})))()}}},d=l,u=(n("af01"),n("2877")),p=Object(u["a"])(d,i,r,!1,null,null,null);t["default"]=p.exports},7265:function(e,t,n){},af01:function(e,t,n){"use strict";n("7265")}}]);