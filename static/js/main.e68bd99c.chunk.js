(this["webpackJsonpatomic-app"]=this["webpackJsonpatomic-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/openshot-edit2.7990fc1c.mp4"},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(32),a(1)),s=a(2),i=a(3),m=a(4),u=(a(20),a(10)),p=(a(13),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderPlayerStats=function(){e.props.history.push("/playerstats")},e.fetchUserInfo=function(t){fetch("https://api.wotblitz.eu/wotb/account/info/?application_id=".concat(e.props.apikey,"&account_id=").concat(t)).then((function(e){return e.json()})).then((function(a){var n=a.data[t].nickname,r=a.data[t];localStorage.setItem("currentPlayer",JSON.stringify(r)),console.log(),e.props.setCurrentUser(n,t,r)}))},e.handleSubmit=function(t){t.preventDefault();var a=t.target[0].value;fetch("https://api.wotblitz.eu/wotb/account/list/?application_id=".concat(e.props.apikey,"&search=").concat(a)).then((function(e){return e.json()})).then((function(t){if(void 0===t.data[0])alert("Player Not Found"),e.props.history.push("/usersearch");else{var a=t.data[0].account_id;e.fetchUserInfo(a)}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{id:"playerSearchContext"},"Type in the name of the player you wish to scout"),r.a.createElement("div",{className:"searchBar"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"nickname",type:"text",placeholder:"Insert Player Name",className:"input"}),r.a.createElement("input",{type:"submit",value:"Scout",className:"button"}))))}}]),a}(n.Component)),h=Object(u.e)(p),y=a(6),d=(a(38),function(){}),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault(),fetch("https://api.wotblitz.eu/wotb/account/list/?application_id=".concat(e.props.apikey,"&search=").concat(t.target[0].value)).then((function(e){return e.json()})).then((function(t){if(void 0===t.data[0])alert("Player Not Found");else{var a=t.data[0];e.props.setPlayerTwoComparisonID(a.nickname,a.account_id)}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"comparisonSearchContext"},"Type in the name of the player you wish to compare with"),r.a.createElement("div",{className:"searchBar"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.onChange,name:"nickname",type:"text",placeholder:"Insert Player Name",className:"input"}),r.a.createElement("input",{type:"submit",value:"Scout",className:"button"}))))}}]),a}(n.Component),C=(a(39),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).playerOneInfo=function(){var e=localStorage.getItem("currentPlayer");return JSON.parse(e)},e.playerTwoInfo=function(){var e=localStorage.getItem("comparisonPlayer");return JSON.parse(e)},e.state={playerOne:e.playerOneInfo(),playerTwo:e.playerTwoInfo()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.playerOne.nickname,t=this.state.playerOne.statistics.all,a=this.state.playerTwo.nickname,n=this.state.playerTwo.statistics.all,o=t.hits/t.shots*100,l=n.hits/n.shots*100;return r.a.createElement("div",{id:"all"},r.a.createElement("p",{id:"playerComparisonContextMaster"},"Here are the players compared side by side. for quick reference,"),r.a.createElement("p",{className:"playerComparisonContext"}," each player's stats have been colour coded to denote from a glance which player has a higher or better stat,"),r.a.createElement("p",{className:"playerComparisonContext"},r.a.createElement("span",{style:{color:"green"}},"Green is higher/better "),"and ",r.a.createElement("span",{style:{color:"red"}},"red is lower/worse")),r.a.createElement("div",{className:"playerComparison"},r.a.createElement("div",{className:"player1"},r.a.createElement("h1",{style:{color:"blue"}},e),r.a.createElement("br",null),r.a.createElement("p",{className:t.battles>n.battles?"green":"red"},"battles:",t.battles),r.a.createElement("p",{className:t.wins>n.wins?"green":"red"},"wins:",t.wins),r.a.createElement("p",{className:t.battles>n.battles?"green":"red"},"losses:",t.losses),r.a.createElement("p",{className:t.battles>n.battles?"green":"red"},"destroyed:",t.frags),r.a.createElement("p",{className:t.battles>n.battles?"green":"red"},"won and survived:",t.win_and_survived),r.a.createElement("p",{className:o>l?"green":"red"},"accuracy:",o.toFixed(2),"%")),r.a.createElement("div",{className:"player2"},r.a.createElement("h1",{style:{color:"orange"}},a),r.a.createElement("br",null),r.a.createElement("p",{className:t.battles<n.battles?"green":"red"},"battles:",n.battles),r.a.createElement("p",{className:t.wins<n.wins?"green":"red"},"wins:",n.wins),r.a.createElement("p",{className:t.battles<n.battles?"green":"red"},"losses:",n.losses),r.a.createElement("p",{className:t.battles<n.battles?"green":"red"},"destroyed:",n.frags),r.a.createElement("p",{className:t.battles<n.battles?"green":"red"},"won and survived:",n.win_and_survived),r.a.createElement("p",{className:o<l?"green":"red"},"accuracy:",l.toFixed(2),"%"))))}}]),a}(n.Component)),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={id:null,clan:null},e.renderClanStats=function(){e.props.history.push("/clanstats")},e.fetchClanInfo=function(t,a){fetch("https://api.wotblitz.eu/wotb/clans/info/?application_id=".concat(e.props.apikey,"&clan_id=").concat(a)).then((function(e){return e.json()})).then((function(n){var r=n.data[e.state.id];localStorage.setItem("currentClan",JSON.stringify(r)),e.setState({clan:r}),e.props.setCurrentClan(t,a,r)}))},e.handleSubmit=function(t){t.preventDefault();var a=t.target[0].value;fetch("https://api.wotblitz.eu/wotb/clans/list/?application_id=".concat(e.props.apikey,"&search=").concat(a)).then((function(e){return e.json()})).then((function(t){if(void 0===t.data[0])alert("Clan Not Found");else{var n=t.data[0].clan_id;e.setState({id:n}),e.fetchClanInfo(a,n)}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{id:"clanSearchContext"},"Type in the name of the clan you wish to scout"),r.a.createElement("div",{className:"searchBar"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"clanname",type:"text",placeholder:"Enter Clan Name",className:"input"}),r.a.createElement("input",{type:"submit",value:"Scout",className:"button"}))))}}]),a}(n.Component),v=Object(u.e)(b),E=a(15),g=(a(22),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).clanLocalStorage=localStorage.getItem("currentClan"),e.clanParsed=JSON.parse(e.clanLocalStorage),e.state={clan:e.props.clan?e.props.clan:e.clanParsed},e.addToClanList=function(t,a){if(localStorage.getItem("clanList")){var n=localStorage.getItem("clanList"),r=JSON.parse(n);r[t]=a,localStorage.setItem("clanList",JSON.stringify(r)),e.props.setClanList(r),alert("Clan Added To List")}else{localStorage.setItem("clanList",JSON.stringify(Object(E.a)({},t,a)));var o=localStorage.getItem("clanList"),l=JSON.parse(o);e.props.setClanList(l),alert("Clan Added To List")}},e.setClanOneComparisonID=e.props.setClanOneComparisonID,e.comparisonFromClanList=e.props.comparisonFromClanList,e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.clan;return r.a.createElement("div",{className:"clanStats"},r.a.createElement("div",{className:"clanCard"},r.a.createElement("h1",null,"Name: ",t.name),r.a.createElement("br",null),r.a.createElement("h2",null,"Founder Name: ",t.creator_name),r.a.createElement("br",null),r.a.createElement("h2",null,"Members Count: ",t.members_count),r.a.createElement("br",null),r.a.createElement("h2",null,"Motto: ",t.motto," "),r.a.createElement("br",null),r.a.createElement("h2",null,"Minimum tier vehicle to join: ",t.recruiting_options.vehicles_level),r.a.createElement("br",null),r.a.createElement("h2",null,"Battles before you can join: ",t.recruiting_options.battles),r.a.createElement("br",null),r.a.createElement("h2",null,"Minimum win/loss ratio needed to join: ",t.recruiting_options.wins_ratio," "),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"CompareBySearch",onClick:function(){return e.setClanOneComparisonID(t.clan_id)}},"Compare Clans By Search"),r.a.createElement("button",{className:"compareFromList",onClick:function(){return e.comparisonFromClanList(t.clan_id)}},"+Compare With Clan From List"),r.a.createElement("button",{className:"addToList",onClick:function(){return e.addToClanList(t.name,t.clan_id)}},"+ Add To Clan List "))))}}]),a}(n.Component)),N=(a(14),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).removePlayerFromList=function(t){var a=localStorage.getItem("playerList"),n=JSON.parse(a);delete n[t],localStorage.setItem("playerList",JSON.stringify(n)),e.props.history.push("/playerList")},e.checkList=function(){if(localStorage.getItem("playerList")&&"{}"!==localStorage.getItem("playerList")){var t=e.props.renderPlayerFromList,a=localStorage.getItem("playerList"),n=JSON.parse(a);return Object.keys(n).map((function(a){return r.a.createElement("li",{className:"itemContainer"},r.a.createElement("button",{className:"playerName",onClick:function(){return t(a)}},"View: ",a),r.a.createElement("button",{className:"removeButton",onClick:function(){return e.removePlayerFromList(a)}},"Remove Player From List")," ")}))}return r.a.createElement("h2",null,"Your player list is empty, search players to add them to your list")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"listContextMaster"},"This list is where you can select to view any one of the players"),r.a.createElement("p",{className:"listContext"}," which you previously decided to add to your list,"),r.a.createElement("p",{className:"listContext"},"or if you wish you can also remove a player from your list as well."),r.a.createElement("div",{className:"playerList"},this.checkList()))}}]),a}(n.Component)),S=Object(u.e)(N),O=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).removeClanFromList=function(t){var a=localStorage.getItem("clanList"),n=JSON.parse(a);delete n[t],localStorage.setItem("clanList",JSON.stringify(n)),e.props.history.push("/clanList")},e.checkList=function(){if(localStorage.getItem("clanList")&&"{}"!==localStorage.getItem("clanList")){var t=e.props.renderClanFromList,a=localStorage.getItem("clanList"),n=JSON.parse(a);return Object.keys(n).map((function(a){return r.a.createElement("li",{className:"itemContainer"},r.a.createElement("button",{className:"clanName",onClick:function(){return t(a)}},"View: ",a),r.a.createElement("button",{className:"removeButton",onClick:function(){return e.removeClanFromList(a)}},"Remove Clan From List")," ")}))}return r.a.createElement("h2",null,"Your clan list is empty, search clans to add them to your list")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"listContextMaster"},"This list is where you can select to view any one of the clans"),r.a.createElement("p",{className:"listContext"}," which you previously decided to add to your list,"),r.a.createElement("p",{className:"listContext"},"or if you wish you can also remove a clan from your list as well."),r.a.createElement("div",{className:"clanList"},this.checkList()))}}]),a}(n.Component),w=Object(u.e)(O),L=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).playerLocalStorage=localStorage.getItem("currentPlayer"),e.playerParsed=JSON.parse(e.playerLocalStorage),e.state={player:e.props.player?e.props.player:e.playerParsed},e.addToPlayerList=function(t,a){if(localStorage.getItem("playerList")){var n=localStorage.getItem("playerList"),r=JSON.parse(n);r[t]=a,localStorage.setItem("playerList",JSON.stringify(r)),e.props.setPlayerList(r),alert("Player Added To List")}else{localStorage.setItem("playerList",JSON.stringify(Object(E.a)({},t,a)));var o=localStorage.getItem("playerList"),l=JSON.parse(o);e.props.setPlayerList(l),alert("Player Added To List")}},e.setPlayerOneComparisonID=e.props.setPlayerOneComparisonID,e.compareFromPlayerList=e.props.compareFromPlayerList,e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.player,a=this.state.player.nickname,n=t.statistics.all,o=n.hits/n.shots*100;return r.a.createElement("div",{className:"playerStats"},r.a.createElement("div",{className:"playerCard"},r.a.createElement("h1",null,"Player name: ",a),r.a.createElement("p",null,"Battles: ",n.battles),r.a.createElement("br",null),r.a.createElement("p",null,"Won: ",n.wins),r.a.createElement("br",null),r.a.createElement("p",null,"Losses: ",n.losses),r.a.createElement("br",null),r.a.createElement("p",null,"Won And Survived: ",n.win_and_survived),r.a.createElement("br",null),r.a.createElement("p",null,"Destroyed: ",n.frags),r.a.createElement("br",null),r.a.createElement("p",null,"Accuracy: ",o.toFixed(2),"%"),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"CompareBySearch",onClick:function(){return e.setPlayerOneComparisonID(t.account_id)}},"Compare Players By Search"),r.a.createElement("button",{className:"compareFromList",onClick:function(){return e.compareFromPlayerList(t.account_id)}}," Compare With ",r.a.createElement("br",null),"Player From List"),r.a.createElement("button",{className:"addToList",onClick:function(){return e.addToPlayerList(a,t.account_id)}},"+ Add To ",r.a.createElement("br",null)," Player List"))))}}]),a}(n.Component),I=Object(u.e)(L),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=t.target[0].value;fetch("https://api.wotblitz.eu/wotb/clans/list/?application_id=".concat(e.props.apikey,"&search=").concat(a)).then((function(e){return e.json()})).then((function(t){if(void 0===t.data[0])alert("Clan Not Found");else{var n=t.data[0].clan_id;e.setState({id:n}),e.props.setClanTwoComparisonID(a,n)}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"comparisonSearchContext"},"Type in the name of the clan you wish to compare with"),r.a.createElement("div",{className:"searchBar"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.onChange,name:"Clan",type:"text",placeholder:"Enter Clan Name",className:"input"}),r.a.createElement("input",{type:"submit",value:"Scout",className:"button"}))))}}]),a}(n.Component),_=(a(40),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).ClanOneInfo=function(){var e=localStorage.getItem("currentClan");return JSON.parse(e)},e.ClanTwoInfo=function(){var e=localStorage.getItem("comparisonClan");return JSON.parse(e)},e.state={clanOne:e.ClanOneInfo(),clanTwo:e.ClanTwoInfo()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.clanOne,t=this.state.clanTwo;return r.a.createElement("div",null,r.a.createElement("p",{id:"playerComparisonContextMaster"},"Here are the clans compared side by side. for quick reference,"),r.a.createElement("p",{className:"playerComparisonContext"}," each clan's stats have been colour coded to denote from a glance which clan has a higher or better stat,"),r.a.createElement("p",{className:"playerComparisonContext"},r.a.createElement("span",{style:{color:"green"}},"Green is higher/better "),"and ",r.a.createElement("span",{style:{color:"red"}},"red is lower/worse")),r.a.createElement("div",{className:"clanComparison"},console.log(t),r.a.createElement("div",{className:"clanOneCard"},r.a.createElement("h1",{className:"clanOneTitle"},e.name),r.a.createElement("h4",{className:"motto"},"Motto: ",e.motto),r.a.createElement("h2",null,"Founder Name: ",e.creator_name),r.a.createElement("p",{className:e.members_count>t.members_count?"green":"red"},"Members Count: ",e.members_count),r.a.createElement("p",{className:e.recruiting_options.vehicles_level>t.recruiting_options.vehicles_level?"green":"red"},"Minimum tier vehicle to join: ",e.recruiting_options.vehicles_level),r.a.createElement("p",{className:e.recruiting_options.battles>t.recruiting_options.battles?"green":"red"},"Battles before you can join: ",e.recruiting_options.battles),r.a.createElement("p",{className:e.recruiting_options.wins_ratio>=t.recruiting_options.wins_ratio?"green":"red"},"Minimum win/loss ratio needed to join: ",e.recruiting_options.wins_ratio)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"clanTwoCard"},r.a.createElement("h1",{className:"clanTwoTitle"},t.name),r.a.createElement("h4",{className:"motto"},"Motto: ",t.motto),r.a.createElement("h2",null,"Founder Name: ",t.creator_name),r.a.createElement("p",{className:e.members_count<t.members_count?"green":"red"},"Members Count: ",t.members_count),r.a.createElement("p",{className:e.recruiting_options.vehicles_level<t.recruiting_options.vehicles_level?"green":"red"},"Minimum tier vehicle to join: ",t.recruiting_options.vehicles_level),r.a.createElement("p",{className:e.recruiting_options.battles<t.recruiting_options.battles?"green":"red"},"Battles before you can join: ",t.recruiting_options.battles),r.a.createElement("p",{className:e.recruiting_options.wins_ratio<=t.recruiting_options.wins_ratio?"green":"red"},"Minimum win/loss ratio needed to join: ",t.recruiting_options.wins_ratio))))}}]),a}(n.Component)),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).checkList=function(){if(localStorage.getItem("playerList")){var t=e.props.setPlayerTwoComparisonIDfromList,a=localStorage.getItem("playerList"),n=JSON.parse(a);return Object.keys(n).map((function(e){return r.a.createElement("li",{className:"itemContainer"},r.a.createElement("button",{className:"playerNameComparison",onClick:function(){return t(e)}},"Compare With: ",e))}))}return r.a.createElement("h2",null,"Your player list is empty, search players to add them to your list")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"playerList"},r.a.createElement("p",{className:"selectFromListContext"},"Select a Player you wish to compare with"),this.checkList())}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).checkList=function(){if(localStorage.getItem("clanList")){var t=e.props.setClanTwoComparisonIDfromList,a=localStorage.getItem("clanList"),n=JSON.parse(a);return Object.keys(n).map((function(e){return r.a.createElement("li",{className:"itemContainer"},r.a.createElement("button",{className:"clanNameComparison",onClick:function(){return t(e)}}," Compare With: ",e))}))}return r.a.createElement("h2",null,"Your clan list is empty, search clans to add them to your list")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"clanList"},r.a.createElement("p",{className:"selectFromListContext"},"Select a Player you wish to compare with"),this.checkList())}}]),a}(n.Component),P=a(26),D=a.n(P),F=(a(41),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).renderTitle=function(){return r.a.createElement("p",{id:"title"},"World of Tanks Blitz Data Scout")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){var e=document.querySelector("#home"),t=document.createElement("p");t.id="title",t.innerText="World of Tanks Blitz Data Scout",e.appendChild(t)}),2e3)}},{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement("h1",{className:"context"},"Welcome to.."))}}]),a}(n.Component)),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={apikey:"f2e055f4250f8cb83b5ada0a424e3f8c",currentUser:null,currentUserID:null,currentPlayerInfo:null,playerToCompareInfo:null,playerToCompareNickname:null,playerOneID:null,playerTwoID:null,playerList:null,clanList:null,currentClanName:null,currentClanID:null,currentClanInfo:null,clanTocompareName:null,clanTocompareID:null,clanTocompareinfo:null},e.setClanList=function(t){e.setState({clanList:t})},e.setPlayerList=function(t){e.setState({playerList:t})},e.setCurrentClan=function(t,a,n){e.setState({currentClanName:t,currentClanID:a,currentClanInfo:n}),e.props.history.push("/clanstats")},e.setCurrentUser=function(t,a,n){e.setState({currentUser:t,currentUserID:a,currentPlayerInfo:n}),e.props.history.push("/playerstats")},e.setClanTwoComparisonIDfromList=function(t){var a=localStorage.getItem("clanList"),n=JSON.parse(a)[t];fetch("https://api.wotblitz.eu/wotb/clans/info/?application_id=".concat(e.state.apikey,"&clan_id=").concat(n)).then((function(e){return e.json()})).then((function(t){var a=t.data[n];localStorage.setItem("comparisonClan",JSON.stringify(a)),e.setState({clanTocompareinfo:a}),e.props.history.push("/clancomparison")}))},e.setPlayerTwoComparisonIDfromList=function(t){var a=localStorage.getItem("playerList"),n=JSON.parse(a)[t];fetch("https://api.wotblitz.eu/wotb/account/info/?application_id=".concat(e.state.apikey,"&account_id=").concat(n)).then((function(e){return e.json()})).then((function(t){var a=t.data[n];e.setState({playerToCompareInfo:a}),localStorage.setItem("comparisonPlayer",JSON.stringify(a)),e.props.history.push("/PlayerComparison")}))},e.setPlayerTwoComparisonID=function(t,a){e.setState({playerToCompareNickname:t,playerTwoID:a}),fetch("https://api.wotblitz.eu/wotb/account/info/?application_id=".concat(e.state.apikey,"&account_id=").concat(a)).then((function(e){return e.json()})).then((function(t){var n=t.data[a];e.setState({playerToCompareInfo:n}),localStorage.setItem("comparisonPlayer",JSON.stringify(n)),e.props.history.push("/PlayerComparison")}))},e.compareFromPlayerList=function(t){e.setState({playerOneID:t}),e.props.history.push("/playerComparisonFromList")},e.comparisonFromClanList=function(t){e.setState({playerOneID:t}),e.props.history.push("/comparisonFromClanList")},e.setClanOneComparisonID=function(t){e.setState({clanTocompareID:t}),e.props.history.push("/clanListForComparison")},e.setPlayerOneComparisonID=function(t){e.setState({playerOneID:t}),e.props.history.push("/playerComparisonSearch")},e.setClanOneComparisonID=function(t){e.setState({clanTocompareID:t}),e.props.history.push("/ClanComparisonSearch")},e.setClanTwoComparisonID=function(t,a){fetch("https://api.wotblitz.eu/wotb/clans/info/?application_id=".concat(e.state.apikey,"&clan_id=").concat(a)).then((function(e){return e.json()})).then((function(t){var n=t.data[a];localStorage.setItem("comparisonClan",JSON.stringify(n)),e.setState({clanTocompareinfo:n}),e.props.history.push("/clancomparison")}))},e.renderPlayerFromList=function(t){var a=localStorage.getItem("playerList"),n=JSON.parse(a)[t];fetch("https://api.wotblitz.eu/wotb/account/info/?application_id=".concat(e.state.apikey,"&account_id=").concat(n)).then((function(e){return e.json()})).then((function(a){var r=a.data[n];localStorage.setItem("currentPlayer",JSON.stringify(r)),e.setCurrentUser(t,n,r)}))},e.renderClanFromList=function(t){var a=localStorage.getItem("clanList"),n=JSON.parse(a)[t];console.log([t]),fetch("https://api.wotblitz.eu/wotb/clans/info/?application_id=".concat(e.state.apikey,"&clan_id=").concat(n)).then((function(e){return e.json()})).then((function(a){var r=a.data[n];localStorage.setItem("currentClan",JSON.stringify(r)),console.log(a),e.setCurrentClan(t,n,r)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mainBackground"},r.a.createElement(d,null),r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,id:"video"},r.a.createElement("source",{src:D.a,type:"video/mp4"})),r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(u.a,{exact:!0,path:"/comparisonFromClanList",render:function(){return r.a.createElement(T,{setClanTwoComparisonIDfromList:e.setClanTwoComparisonIDfromList})}}),r.a.createElement(u.a,{exact:!0,path:"/playerComparisonFromList",render:function(){return r.a.createElement(k,{setPlayerTwoComparisonIDfromList:e.setPlayerTwoComparisonIDfromList})}}),r.a.createElement(u.a,{exact:!0,path:"/usersearch",render:function(){return r.a.createElement(h,{setCurrentUser:e.setCurrentUser,apikey:e.state.apikey})}}),r.a.createElement(u.a,{exact:!0,path:"/clansearch",render:function(){return r.a.createElement(v,{setCurrentClan:e.setCurrentClan,apikey:e.state.apikey})}}),r.a.createElement(u.a,{exact:!0,path:"/playerstats",render:function(){return r.a.createElement(I,{setPlayerList:e.setPlayerList,player:e.state.currentPlayerInfo,setPlayerOneComparisonID:e.setPlayerOneComparisonID,compareFromPlayerList:e.compareFromPlayerList})}}),r.a.createElement(u.a,{exact:!0,path:"/clanstats",render:function(){return r.a.createElement(g,{clan:e.state.currentClanInfo,setClanList:e.setClanList,setClanOneComparisonID:e.setClanOneComparisonID,comparisonFromClanList:e.comparisonFromClanList})}}),r.a.createElement(u.a,{exact:!0,path:"/playerlist",render:function(){return r.a.createElement(S,{renderPlayerFromList:e.renderPlayerFromList})}}),r.a.createElement(u.a,{exact:!0,path:"/clanlist",render:function(){return r.a.createElement(w,{renderClanFromList:e.renderClanFromList})}}),r.a.createElement(u.a,{exact:!0,path:"/playerComparison",render:function(){return r.a.createElement(C,{currentPlayerInfo:e.state.currentPlayerInfo,playerToCompareInfo:e.state.playerToCompareInfo})}}),r.a.createElement(u.a,{exact:!0,path:"/playerComparisonSearch",render:function(){return r.a.createElement(f,{setPlayerTwoComparisonID:e.setPlayerTwoComparisonID,apikey:e.state.apikey})}}),r.a.createElement(u.a,{exact:!0,path:"/clancomparisonsearch",render:function(){return r.a.createElement(j,{apikey:e.state.apikey,setClanTwoComparisonID:e.setClanTwoComparisonID})}}),r.a.createElement(u.a,{exact:!0,path:"/clancomparison",render:function(){return r.a.createElement(_,{currentClanInfo:e.state.currentClanInfo,clanTocompareinfo:e.state.clanTocompareinfo})}}))}}]),a}(n.Component),J=Object(u.e)(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,null,r.a.createElement(u.a,{path:"/",component:J}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.e68bd99c.chunk.js.map