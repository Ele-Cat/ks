import{aU as t,a_ as e,aZ as s,ag as a,a5 as i,bj as o,_ as n,a4 as r,U as c,o as d,c as p,w as l,i as u,a as y,b as h,z as f,A as g,F as m,f as v,t as k,x as C}from"./index-e5f1c86d.js";function x(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}x.prototype.getWxLocation=function(a,i){t({type:"gcj02",success:function(t){var s=t.longitude+","+t.latitude;e({key:"userLocation",data:s}),i(s)},fail:function(t){s({key:"userLocation",success:function(t){t.data&&i(t.data)}}),a.fail({errCode:"0",errMsg:t.errMsg||""})}})},x.prototype.getRegeo=function(t){function e(e){var i=s.requestConfig;a({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:s.key,location:e,extensions:"all",s:i.s,platform:i.platform,appname:s.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(s){var a,i,o,n,r,c,d,p,l;s.data.status&&"1"==s.data.status?(i=(a=s.data.regeocode).addressComponent,o=[],n="",a&&a.roads[0]&&a.roads[0].name&&(n=a.roads[0].name+"附近"),r=e.split(",")[0],c=e.split(",")[1],a.pois&&a.pois[0]&&(n=a.pois[0].name+"附近",(d=a.pois[0].location)&&(r=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),i.provice&&o.push(i.provice),i.city&&o.push(i.city),i.district&&o.push(i.district),i.streetNumber&&i.streetNumber.street&&i.streetNumber.number?(o.push(i.streetNumber.street),o.push(i.streetNumber.number)):(p="",a&&a.roads[0]&&a.roads[0].name&&(p=a.roads[0].name),o.push(p)),o=o.join(""),l=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:o,desc:n,longitude:r,latitude:c,id:0,regeocodeData:a}],t.success(l)):t.fail({errCode:s.data.infocode,errMsg:s.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var s=this;t.location?e(t.location):s.getWxLocation(t,(function(t){e(t)}))},x.prototype.getWeather=function(t){function e(e){var o="base";t.type&&"forecast"==t.type&&(o="all"),a({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:s.key,city:e,extensions:o,s:i.s,platform:i.platform,appname:s.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var s,a,i;e.data.status&&"1"==e.data.status?e.data.lives?(s=e.data.lives)&&s.length>0&&(s=s[0],(a={city:{text:"城市",data:(i=s).city},weather:{text:"天气",data:i.weather},temperature:{text:"温度",data:i.temperature},winddirection:{text:"风向",data:i.winddirection+"风"},windpower:{text:"风力",data:i.windpower+"级"},humidity:{text:"湿度",data:i.humidity+"%"}}).liveData=s,t.success(a)):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var s=this,i=s.requestConfig;t.city?e(t.city):s.getWxLocation(t,(function(o){var n;n=o,a({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:s.key,location:n,extensions:"all",s:i.s,platform:i.platform,appname:s.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(s){var a,i;s.data.status&&"1"==s.data.status?((i=s.data.regeocode).addressComponent?a=i.addressComponent.adcode:i.aois&&i.aois.length>0&&(a=i.aois[0].adcode),e(a)):t.fail({errCode:s.data.infocode,errMsg:s.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}))},x.prototype.getPoiAround=function(t){function e(e){var o={key:s.key,location:e,s:i.s,platform:i.platform,appname:s.key,sdkversion:i.sdkversion,logversion:i.logversion};t.querytypes&&(o.types=t.querytypes),t.querykeywords&&(o.keywords=t.querykeywords),a({url:"https://restapi.amap.com/v3/place/around",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){var s,a,i,o;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(s=[],a=0;a<e.pois.length;a++)i=0==a?t.iconPathSelected:t.iconPath,s.push({latitude:parseFloat(e.pois[a].location.split(",")[1]),longitude:parseFloat(e.pois[a].location.split(",")[0]),iconPath:i,width:22,height:32,id:a,name:e.pois[a].name,address:e.pois[a].address});o={markers:s,poisData:e.pois},t.success(o)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var s=this,i=s.requestConfig;t.location?e(t.location):s.getWxLocation(t,(function(t){e(t)}))},x.prototype.getStaticmap=function(t){function e(e){i.push("location="+e),t.zoom&&i.push("zoom="+t.zoom),t.size&&i.push("size="+t.size),t.scale&&i.push("scale="+t.scale),t.markers&&i.push("markers="+t.markers),t.labels&&i.push("labels="+t.labels),t.paths&&i.push("paths="+t.paths),t.traffic&&i.push("traffic="+t.traffic);var s=o+i.join("&");t.success({url:s})}var s,a=this,i=[],o="https://restapi.amap.com/v3/staticmap?";i.push("key="+a.key),s=a.requestConfig,i.push("s="+s.s),i.push("platform="+s.platform),i.push("appname="+s.appname),i.push("sdkversion="+s.sdkversion),i.push("logversion="+s.logversion),t.location?e(t.location):a.getWxLocation(t,(function(t){e(t)}))},x.prototype.getInputtips=function(t){var e=this,s=e.requestConfig,i={key:e.key,s:s.s,platform:s.platform,appname:e.key,sdkversion:s.sdkversion,logversion:s.logversion};t.location&&(i.location=t.location),t.keywords&&(i.keywords=t.keywords),t.type&&(i.type=t.type),t.city&&(i.city=t.city),t.citylimit&&(i.citylimit=t.citylimit),a({url:"https://restapi.amap.com/v3/assistant/inputtips",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},x.prototype.getDrivingRoute=function(t){var e=this,s=e.requestConfig,i={key:e.key,s:s.s,platform:s.platform,appname:e.key,sdkversion:s.sdkversion,logversion:s.logversion};t.origin&&(i.origin=t.origin),t.destination&&(i.destination=t.destination),t.strategy&&(i.strategy=t.strategy),t.waypoints&&(i.waypoints=t.waypoints),t.avoidpolygons&&(i.avoidpolygons=t.avoidpolygons),t.avoidroad&&(i.avoidroad=t.avoidroad),a({url:"https://restapi.amap.com/v3/direction/driving",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},x.prototype.getWalkingRoute=function(t){var e=this,s=e.requestConfig,i={key:e.key,s:s.s,platform:s.platform,appname:e.key,sdkversion:s.sdkversion,logversion:s.logversion};t.origin&&(i.origin=t.origin),t.destination&&(i.destination=t.destination),a({url:"https://restapi.amap.com/v3/direction/walking",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},x.prototype.getTransitRoute=function(t){var e=this,s=e.requestConfig,i={key:e.key,s:s.s,platform:s.platform,appname:e.key,sdkversion:s.sdkversion,logversion:s.logversion};t.origin&&(i.origin=t.origin),t.destination&&(i.destination=t.destination),t.strategy&&(i.strategy=t.strategy),t.city&&(i.city=t.city),t.cityd&&(i.cityd=t.cityd),a({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var s=e.data.route;t.success({distance:s.distance||"",taxi_cost:s.taxi_cost||"",transits:s.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},x.prototype.getRidingRoute=function(t){var e=this,s=e.requestConfig,i={key:e.key,s:s.s,platform:s.platform,appname:e.key,sdkversion:s.sdkversion,logversion:s.logversion};t.origin&&(i.origin=t.origin),t.destination&&(i.destination=t.destination),a({url:"https://restapi.amap.com/v4/direction/bicycling",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})};const w={AMapWX:x},b={"1号线":"#C43B33","2号线":"#016299","4号线/大兴线":"#008E9C","5号线":"#A42380","6号线":"#D09900","7号线":"#F2C172","8号线":"#009D6A","9号线":"#8FC41E","10号线":"#009DBE","13号线":"#F9E701","14号线东段":"#D4A7A2","14号线西段":"#D4A7A2","15号线":"#5D2D69","八通线":"#C33A32","昌平线":"#DE82B1","亦庄线":"#E40177","房山线":"#E66021","机场线":"#A29BBC"},M=[{id:"150500",icon:"icon-ditie"},{id:"150700",icon:"icon-gongjiao"},{id:"190700",icon:"icon-gonglu"}],L={key:"b526b09b86cd2996e7732be8ab8c4430",mapInit(){return new w.AMapWX({key:this.key})},typecode:M,lineColor:t=>b[t]?b[t]:"#ccc",serachNmme(t,e){let s=new RegExp(t);return`<div style="font-size: 14px;color: #333;line-height: 1.5;">\n\t\t    ${e.replace(s,"<span style='color:#66ccff;'>"+t+"</span>")}\n\t\t    </div>`.trim()},addressToLine(t,e){let s=t.split(";"),a="";return s.forEach((t=>{let s="#cccccc";e===M[0].id?s=this.lineColor(t):e===M[1].id&&(s="#4075cb"),a+=`<div style='${"margin:5px 0;margin-right:5px;padding:0 5px;background:"+s+";font-size:12px;color:#fff;border-radius:3px;"}'>${t}</div>`})),`<div style="display:flex;flex-wrap: wrap;">${a}</div>`},dataHandle:(t,e)=>(t.nameNodes=e?L.serachNmme(e,t.name):`<div style="font-size: 14px;color: #333;line-height: 1.5;">${t.name}</div>`,t.typecode===L.typecode[0].id||t.typecode===L.typecode[1].id?(t.addressNodes=L.addressToLine(t.address,t.typecode),t.typecode===L.typecode[0].id?t.icon=L.typecode[0].icon:t.typecode===L.typecode[1].id&&(t.icon=L.typecode[1].icon)):(t.addressNodes=`<span>${t.district}${t.address.length>0?"·"+t.address:""}</span>`.trim(),t.icon="icon-weizhi"),t.location&&0===t.location.length&&(t.icon="icon-sousuo"),t),setHistory(t){let s=i("search:history");s||(s=[]);let a={};a="string"==typeof t?{adcode:[],address:[],city:[],district:[],id:[],location:[],name:t,typecode:[]}:t;for(var o=0;o<s.length;o++)if(s[o].name===a.name){s.splice(o,1);break}s.unshift(L.dataHandle(a)),e({key:"search:history",data:s,success:function(){}})},getHistory(){},removeHistory:()=>(o({key:"search:history",success:function(t){console.log("success")}}),[])};const _=n({data:()=>({historyList:[],isHistory:!0,list:[],flng:!0,timer:null}),onLoad(){this.amapPlugin=L.mapInit(),this.historyList=i("search:history")},methods:{listTap(t){t=JSON.parse(JSON.stringify(t)),this.history||(this.isHistory=!0,L.setHistory(t),r())},clearSearch(){c({title:"提示",content:"是否清理全部搜索历史？该操作不可逆。",success:t=>{t.confirm&&(this.historyList=L.removeHistory())}})},getInputtips(t){let e=this;this.amapPlugin.getInputtips({keywords:t,city:"北京",success:s=>{let a=s.tips;a.map((e=>L.dataHandle(e,t))),e.historyList=a},fail:t=>{console.log(t)}})}},onNavigationBarSearchInputChanged(t){let e=t.text;if(!e)return this.isHistory=!0,this.historyList=[],void(this.historyList=i("search:history"));this.isHistory=!1,this.getInputtips(e)},onNavigationBarSearchInputConfirmed(t){let e=t.text;if(!e)return this.isHistory=!0,this.historyList=[],this.historyList=i("search:history"),void c({title:"提示",content:"请输入内容。",success:t=>{t.confirm}});c({title:"提示",content:`您输入的内容为"${e}",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作`,success:t=>{t.confirm&&(L.setHistory(e),r())}})},onNavigationBarButtonTap(){c({title:"提示",content:"点击确定，修改输入框的内容为abc",success:t=>{if(t.confirm){this.$mp.page.$getAppWebview().setTitleNViewSearchInputText("abc")}}})}},[["render",function(t,e,s,a,i,o){const n=v,r=u,c=C;return d(),p(r,{class:"wrapper"},{default:l((()=>[i.isHistory?(d(),p(r,{key:0,class:"history-box"},{default:l((()=>[i.historyList.length>0?(d(),p(r,{key:0},{default:l((()=>[y(r,{class:"history-title"},{default:l((()=>[y(n,null,{default:l((()=>[h("搜索历史")])),_:1}),y(n,{class:"uni-icon uni-icon-trash",onClick:o.clearSearch},null,8,["onClick"])])),_:1}),y(r,{class:"history-content"},{default:l((()=>[(d(!0),f(m,null,g(i.historyList,((t,e)=>(d(),p(r,{class:"history-item",key:e},{default:l((()=>[h(k(t.name),1)])),_:2},1024)))),128))])),_:1})])),_:1})):(d(),p(r,{key:1,class:"no-data"},{default:l((()=>[h("您还没有历史记录")])),_:1}))])),_:1})):(d(),p(r,{key:1,class:"history-box"},{default:l((()=>[i.historyList.length>0?(d(),p(r,{key:0,class:"history-list-box"},{default:l((()=>[(d(!0),f(m,null,g(i.historyList,((t,e)=>(d(),p(r,{class:"history-list-item",key:e,onClick:e=>o.listTap(t)},{default:l((()=>[y(c,{nodes:t.nameNodes},null,8,["nodes"])])),_:2},1032,["onClick"])))),128))])),_:1})):(d(),p(r,{key:1,class:"no-data"},{default:l((()=>[h("没有搜索到相关内容")])),_:1}))])),_:1}))])),_:1})}],["__scopeId","data-v-202dce01"]]);export{_ as default};
