webpackJsonp([0],{"+qpp":function(t,e){},G0qP:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("Xrl+"),s("fLmE");var i=s("7+uW"),h=s("EOUi"),n=s.n(h),r=s("rifk"),l=s.n(r),a=s("NYxO");i.a.use(a.a);var p=new a.a.Store({modules:{navigator:{strict:!0,namespaced:!0,state:{stack:[],player:[],maxRound:"",chip:"",minBet:"",ranking:[]},mutations:{push:function(t,e){t.stack.push(e)},pop:function(t){t.stack.length>1&&t.stack.pop()}}}}}),o=s("r6OD"),c={beforeCreate:function(){this.$store.commit("navigator/push",o.a)},data:function(){return{}},computed:{pageStack:function(){return this.$store.state.navigator.stack}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("v-ons-navigator",{attrs:{swipeable:"","swipe-target-width":"5%",id:"navigator","page-stack":this.pageStack,var:"navigator"}})},staticRenderFns:[]},y=s("VU/8")(c,u,!1,null,null,null).exports;i.a.config.productionTip=!1,i.a.prototype.$url="https://a1gf8dsmmf.execute-api.ap-northeast-1.amazonaws.com/dev",i.a.use(n.a),i.a.use(l.a),new i.a({el:"#app",store:p,template:"<App/>",components:{App:y}})},W5P0:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__page2_vue__=__webpack_require__("yjVU");__webpack_exports__.a={data:function(){return{names:[],player:[],maxRound:4,chip:300,minBet:10,players:[],isAllSelected:!1,record:{}}},created:function(){this.fetch()},watch:{player:function(){this.maxRound=this.player.length}},methods:{submit:function(){this.$store.state.player=this.player,this.$store.state.maxRound=Number(this.maxRound),this.$store.state.chip=Number(this.chip),this.$store.state.minBet=Number(this.minBet),this.$store.commit("navigator/push",__WEBPACK_IMPORTED_MODULE_0__page2_vue__.a)},selectAll:function(){if(this.isAllSelected)this.player=[],this.isAllSelected=!1;else{for(var t in this.player=[],this.names)this.player.push(this.names[t]);this.isAllSelected=!0}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var _this=this;fetch(this.$url+"/record?recordID="+localStorage.getItem("recordID"),{method:"GET"}).then(function(t){return t.json()}).then(function(data){for(var i=0;i<8;i++){var j=eval("data.record.name"+i+".value");if("null"!=j&&""!=j){var addPlayer=j;_this.names.push(addPlayer)}}_this.selectAll()}).catch(function(t){console.error(t)})})}}},"Xrl+":function(t,e){},aEro:function(t,e){},fLmE:function(t,e){},r6OD:function(t,e,s){"use strict";var i=s("W5P0"),h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",[s("h1",[t._v("Smart Poker")]),t._v(" "),s("div",[s("h2",[t._v("ゲーム設定")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("label",[t._v("プレイヤー")]),t._v(" "),s("label",[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.isAllSelected},on:{click:t.selectAll}}),t._v("ALL")]),t._v(" "),t._l(t.names,function(e,i){return s("div",{key:i},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.player,expression:"player"}],attrs:{id:"name"+i,type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.player)?t._i(t.player,e)>-1:t.player},on:{change:function(s){var i=t.player,h=s.target,n=!!h.checked;if(Array.isArray(i)){var r=e,l=t._i(i,r);h.checked?l<0&&(t.player=i.concat([r])):l>-1&&(t.player=i.slice(0,l).concat(i.slice(l+1)))}else t.player=n}}}),t._v(" "),s("label",{attrs:{for:"player"+i}},[t._v(t._s(e))])])}),t._v(" "),s("div",[s("label",{attrs:{for:"maxRound"}},[t._v("ラウンド")]),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.maxRound,expression:"maxRound"}],attrs:{type:"number"},domProps:{value:t.maxRound},on:{input:function(e){e.target.composing||(t.maxRound=e.target.value)}}})]),t._v(" "),s("div",[s("label",{attrs:{for:"chip"}},[t._v("チップ")]),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.chip,expression:"chip"}],attrs:{type:"number"},domProps:{value:t.chip},on:{input:function(e){e.target.composing||(t.chip=e.target.value)}}})]),t._v(" "),s("div",[s("label",{attrs:{for:"minbet"}},[t._v("最低ベット")]),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.minBet,expression:"minBet"}],attrs:{type:"number"},domProps:{value:t.minBet},on:{input:function(e){e.target.composing||(t.minBet=e.target.value)}}})]),t._v(" "),s("div",[s("button",{attrs:{type:"submit"}},[t._v("ゲーム開始")])])],2)])])},staticRenderFns:[]};var n=function(t){s("G0qP")},r=s("VU/8")(i.a,h,!1,n,"data-v-60d68bb1",null);e.a=r.exports},yjVU:function(t,e,s){"use strict";s("r6OD");var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",[s("div",[s("h1",[t._v("WINNER:"+t._s(t.ranking[0].name))]),t._v(" "),t._l(t.ranking,function(e,i){return s("ul",{key:i},[s("ol",[t._v(t._s(i+1)+"位:"+t._s(e.name))])])})],2)])},staticRenderFns:[]};var h=s("VU/8")({data:function(){return{ranking:this.$store.state.ranking}},created:function(){}},i,!1,function(t){s("aEro")},"data-v-48ac9361",null).exports,n={data:function(){return{player:this.$store.state.player,maxRound:this.$store.state.maxRound,chip:this.$store.state.chip,minBet:this.$store.state.minBet,array:[],round:1,dealer:"",pot:0,bettingRound:["プリフロップ","フロップ","ターン","リバー"],br:0,players:[],allBet:0,order:"",turn:"",action:"",p:0,selectActionValue:2,selectActionOptions:{1:"ベット",2:"コール",3:"レイズ",4:"チェック",5:"フォールド",6:"オールイン"},selectWinnerValue:"",update:null,pay:10,playing:0,comment:"",winComment:"",checkCount:0,record:[],timer:null,w:0,win:9,wc:0}},watch:{update:function(){this.w++,1!=this.w&&0==this.wc?(console.log("update"),this.submit()):1==this.wc&&(console.log("winner"),this.winner())},win:function(){""==this.win&&0!=this.win||(console.log("winner"),this.winner())}},created:function(){for(var t=0;t<this.player.length;t++){var e={name:this.player[t],chip:this.chip,bet:0,isplay:0};this.players.push(e)}for(var s=this.players.length-1;s>=0;s--){var i=Math.floor(Math.random()*(s+1)),h=[this.players[i],this.players[s]];this.players[s]=h[0],this.players[i]=h[1]}var n=0;for(var r in this.players)this.order=this.order+this.players[r].name+",",++n==this.players.length&&console.log(this.order+"の順です。");console.log("ラウンド:"+this.round),console.log(this.bettingRound[0]),this.dealer=this.players[0].name,console.log("ディーラー:"+this.dealer),this.playing=this.players.length,this.sbbb()},computed:{},methods:{submit:function(){switch(console.log("submit"),this.winComment="",this.action){case"フォールド":this.fold()}if(this.pay<this.players[this.p%this.players.length].chip)if(this.pay>=this.minBet)switch(this.action){case"ベット":this.betting();break;case"コール":this.call();break;case"レイズ":this.raise();break;case"チェック":this.check();break;case"オールイン":this.allIn()}else this.comment="最低ベット額は"+this.minBet+"です";else this.comment="所持しているチップ数を超えています"},betting:function(){console.log("ベット"),0==Math.max.apply(null,this.players.map(function(t){return t.bet}))?(this.stopTimer(),this.checkCount=0,this.players[this.p%this.players.length].bet=this.pay,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip-this.players[this.p%this.players.length].bet,console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.nextTurn()):this.comment="既にベットされています"},call:function(){if(console.log("コール"),this.players[this.p%this.players.length].bet<Math.max.apply(null,this.players.map(function(t){return t.bet}))){this.stopTimer(),this.checkCount=0,this.pay=Math.max.apply(null,this.players.map(function(t){return t.bet}));var t=Number(this.pay)-this.players[this.p%this.players.length].bet;this.players[this.p%this.players.length].bet=this.pay,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip-t,console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.nextTurn()}else 0==Math.max.apply(null,this.players.map(function(t){return t.bet}))?(this.stopTimer(),this.checkCount=0,this.players[this.p%this.players.length].bet=this.pay,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip-this.players[this.p%this.players.length].bet,console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.nextTurn()):this.comment="コールできません"},raise:function(){if(console.log("レイズ"),this.pay>=Math.max.apply(null,this.players.map(function(t){return t.bet})))if(Number(this.pay)+Number(Math.max.apply(null,this.players.map(function(t){return t.bet})))<=this.players[this.p%this.players.length].chip){this.stopTimer(),this.checkCount=0,this.pay=Number(this.pay)+Math.max.apply(null,this.players.map(function(t){return t.bet}));var t=Number(this.pay)-this.players[this.p%this.players.length].bet;this.players[this.p%this.players.length].bet=this.pay,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip-t,console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.nextTurn()}else this.comment="チップが足りません";else this.comment="ベットの2倍以上でレイズしてください"},check:function(){console.log("チェック"),0==Math.max.apply(null,this.players.map(function(t){return t.bet}))?(this.stopTimer(),this.checkCount++,this.checkCount==this.playing?(this.checkCount=0,this.nextBr()):this.nextTurn()):0==this.br&&this.p%this.players.length==(this.round+1)%this.players.length?this.nextBr():this.comment="既にベットされています"},fold:function(){console.log("フォールド"),this.stopTimer(),this.players[this.p%this.players.length].isplay=1,console.log(this.players[this.p%this.players.length].name+":フォールド"),this.playing--,this.nextTurn()},allIn:function(){console.log("オールイン"),this.players[this.p%this.players.length].chip+this.players[this.p%this.players.length].bet>=Math.max.apply(null,this.players.map(function(t){return t.bet}))?(this.stopTimer(),this.checkCount=0,this.players[this.p%this.players.length].bet=this.players[this.p%this.players.length].bet+this.players[this.p%this.players.length].chip,this.players[this.p%this.players.length].chip=0,this.players[this.p%this.players.length].isplay=2,this.playing--,console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.nextTurn()):this.comment="チップが足りません"},winner:function(){""==this.win&&0!=this.win||(this.stopTimer(),this.players[this.win].chip=this.players[this.win].chip+this.pot,this.winComment=this.players[this.win].name+"さんが勝ちました",this.$modal.hide("winner-modal"),this.wc=0,this.nextRound())},nextTurn:function(){this.comment="";for(var t=0,e=0;e<this.players.length;e++)0==this.players[this.p%this.players.length].isplay&&this.players[this.p%this.players.length].bet==this.players[e].bet&&0!=this.players[e].bet&&t++;if(console.log(t+"."+this.playing+"."+this.players.length),t!=this.playing||0==Math.max.apply(null,this.players.map(function(t){return t.bet}))||0==this.br&&this.p<Number(this.players.length+this.round%this.players.length+1)){for(this.p++;0!=this.players[this.p%this.players.length].isplay&&(this.p++,this.p!=this.maxRound+this.players.length););if(1==this.playing)if(1==Math.max.apply(null,this.players.map(function(t){return t.isplay}))){for(var s=0;s<this.players.length;s++)this.allBet=Number(this.allBet)+Number(this.players[s].bet),this.players[s].bet=0;this.pot=this.pot+Number(this.allBet),this.allBet=0,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip+this.pot,this.winComment=this.players[this.p%this.players.length].name+"さんが勝ちました",this.nextRound()}else this.stopTimer(),this.startTimer(),this.turn=this.players[this.p%this.players.length].name,console.log(this.turn+"の番");else if(0==this.playing){for(var i=0,h=0;h<this.players.length;h++)this.allBet=Number(this.allBet)+Number(this.players[h].bet),this.players[h].bet=0,2==this.players[h].isplay&&i++;if(1==i)for(var n=0;n<this.players.length;n++)2==this.players[n].isplay&&(this.pot=this.pot+Number(this.allBet),this.allBet=0,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip+this.pot,this.winComment=this.players[this.p%this.players.length].name+"さんが勝ちました",this.nextRound());this.pot=this.pot+Number(this.allBet),this.allBet=0,this.show()}else this.stopTimer(),this.startTimer(),this.turn=this.players[this.p%this.players.length].name,console.log(this.turn+"の番")}else if(0==this.playing){for(var r=0,l=0;l<this.players.length;l++)this.allBet=Number(this.allBet)+Number(this.players[l].bet),this.players[l].bet=0,2==this.players[l].isplay&&r++;if(1==r)for(var a=0;a<this.players.length;a++)2==this.players[a].isplay&&(this.pot=this.pot+Number(this.allBet),this.allBet=0,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip+this.pot,this.winComment=this.players[this.p%this.players.length].name+"さんが勝ちました",this.nextRound());else this.pot=this.pot+Number(this.allBet),this.allBet=0,this.show()}else this.nextBr()},nextBr:function(){for(var t=0;t<this.players.length;t++)this.allBet=Number(this.allBet)+Number(this.players[t].bet),this.players[t].bet=0;if(this.pot=this.pot+Number(this.allBet),this.allBet=0,this.br<3){for(this.br=this.br+1,console.log(this.bettingRound[this.br]),this.p=this.round%this.players.length;0!=this.players[this.p%this.players.length].isplay&&(this.p++,this.p!=this.maxRound+this.players.length););this.stopTimer(),this.startTimer(),this.turn=this.players[this.p%this.players.length].name,console.log(this.turn+"の番")}else"フォールド"!=this.action&&this.show()},nextRound:function(){if(this.round<this.maxRound){this.round+=1,this.pot=0,this.br=0,this.playing=this.players.length;for(var t=0;t<this.players.length;t++)this.players[t].chip>0?this.players[t].isplay=0:(this.players[t].isplay=1,this.playing--),1==this.playing&&(this.sort(),this.stopTimer(),this.$store.commit("navigator/push",h));for(this.p=(this.round-1)%this.players.length;1==this.players[this.p%this.players.length].isplay;)this.p++;this.dealer=this.players[this.p%this.players.length].name,console.log("ディーラー:"+this.dealer),console.log(this.bettingRound[0]),this.sbbb()}else this.sort(),this.stopTimer(),this.$store.commit("navigator/push",h)},sbbb:function(){for(this.p=this.round%this.players.length;0!=this.players[this.p%this.players.length].isplay;)this.p++;for(this.players[this.p%this.players.length].bet=this.minBet/2,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip-this.players[this.p%this.players.length].bet,console.log(this.players[this.p%this.players.length].name+"の番"),console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.p++;0!=this.players[this.p%this.players.length].isplay;)this.p++;for(this.players[this.p%this.players.length].bet=this.minBet,this.players[this.p%this.players.length].chip=this.players[this.p%this.players.length].chip-this.players[this.p%this.players.length].bet,console.log(this.players[this.p%this.players.length].name+"の番"),console.log("ベット額:"+this.players[this.p%this.players.length].bet),console.log("チップ:"+this.players[this.p%this.players.length].chip),this.p++;0!=this.players[this.p%this.players.length].isplay;)this.p++;this.turn=this.players[this.p%this.players.length].name,console.log(this.players[this.p%this.players.length].name+"の番"),this.stopTimer(),this.startTimer()},show:function(){this.wc=1,this.startTimerWinner(),this.$modal.show("winner-modal")},sort:function(){console.log(this.players),this.players.sort(function(t,e){return t.chip>e.chip?-1:t.chip<e.chip?1:0}),this.$store.state.ranking=this.players},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;console.log("fetch"+this.w),fetch(this.$url+"/record?recordID="+localStorage.getItem("recordID"),{method:"GET"}).then(function(t){return t.json()}).then(function(e){console.log(e),t.action=e.record.action.value,"レイズ"!=t.action&&"ベット"!=t.action||(t.pay=e.record.point.value),t.update=e.record.time.value}).catch(function(t){console.error(t)})}),startTimer:function(){var t=this;console.log("interval"),t.timer=setInterval(function(){t.fetch()},3e3)},stopTimer:function(){clearInterval(this.timer),console.log("stopped")},fetchWinner:function(){var t=this;console.log("fetchWinner"),fetch(this.$url+"/record?recordID="+localStorage.getItem("recordID"),{method:"GET"}).then(function(t){return t.json()}).then(function(e){console.log(e),""!=e.record.winner.value&&(t.win=e.record.winner.value-1,console.log(t.win))}).catch(function(t){console.error(t)})},startTimerWinner:function(){var t=this;console.log(this.wc),t.timer=setInterval(function(){t.fetchWinner()},3e3)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",[s("h2",[t._v("\n    ラウンド"+t._s(t.round)+"\n    "),s("br"),t._v("\n    "+t._s(t.bettingRound[t.br])+"\n    "),s("br"),t._v("\n    "+t._s(t.winComment)+"\n  ")]),t._v(" "),s("div",[t._v(t._s(t.order)+" の順です。")]),t._v(" "),s("div",[t._v("ディーラーは"+t._s(t.dealer)+"です。")]),t._v(" "),s("div",[t._v(t._s(t.turn)+"の番です。")]),t._v(" "),s("div",[s("br"),t._v("\n      ベット:"+t._s(t.pay)+"\n      "),s("div",[s("br"),t._v("\n        "+t._s(t.comment)+"\n      ")])]),t._v(" "),s("br"),t._v(" "),s("modal",{attrs:{name:"winner-modal"}},[s("div",{staticStyle:{"margin-left":"100px"}},[s("h2",[t._v("ショーダウン")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectWinnerValue,expression:"selectWinnerValue"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectWinnerValue=e.target.multiple?s:s[0]}}},t._l(t.players,function(e,i){return s("option",{domProps:{value:i+1}},[t._v(t._s(e.name))])}),0),t._v("\n      の勝ち\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("v-ons-button",{on:{click:function(e){return t.winner()}}},[t._v("次のラウンドへ")])],1)]),t._v(" "),s("br"),t._v(" "),s("div",[t._v("ポット"+t._s(t.pot))]),t._v(" "),t._l(t.players,function(e,i){return s("ul",{key:t.players.name,staticStyle:{float:"left"}},[s("li",[t._v("PLAYER"+t._s(i+1))]),t._v(" "),s("li",[t._v(t._s(e.name))]),t._v(" "),s("li",[t._v("ベット : "+t._s(e.bet))]),t._v(" "),s("i",[t._v("チップ: "+t._s(e.chip))])])})],2)},staticRenderFns:[]};var l=s("VU/8")(n,r,!1,function(t){s("+qpp")},"data-v-50cd40c3",null);e.a=l.exports}},["NHnr"]);
//# sourceMappingURL=app.dcca3c9c97bf48cfc4f3.js.map