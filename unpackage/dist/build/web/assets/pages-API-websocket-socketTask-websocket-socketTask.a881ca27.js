import{_ as s,K as e,ak as t,U as o,aj as c,b2 as n,s as a,o as i,c as l,w as k,i as h,a as d,b as r,t as g,b3 as u,b4 as p,r as f,d as m,e as T,v as w}from"./index-e5f1c86d.js";let b=e().platform;const _=s({data:()=>({connected:!1,connecting:!1,socketTask:!1,msg:!1}),computed:{showMsg(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload(){t(),this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect(){if(this.connected||this.connecting)return o({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,c({title:"连接中..."}),this.socketTask=n({url:"wss://echo.websocket.org",data:()=>({msg:"Hello"}),success(s){},fail(s){}}),console.log(this.socketTask),this.socketTask.onOpen((s=>{this.connecting=!1,this.connected=!0,t(),a({icon:"none",title:"连接成功"}),console.log("onOpen",s)})),this.socketTask.onError((s=>{this.connecting=!1,this.connected=!1,t(),o({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",s)})),this.socketTask.onMessage((s=>{this.msg=s.data,console.log("onMessage",s)})),this.socketTask.onClose((s=>{this.connected=!1,this.startRecive=!1,this.socketTask=!1,this.msg=!1,console.log("onClose",s)})),console.log("task",this.socketTask)},send(){this.socketTask.send({data:"from "+b+" : "+parseInt(1e4*Math.random()).toString(),success(s){console.log(s)},fail(s){console.log(s)}})},close(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}},[["render",function(s,e,t,o,c,n){const a=f(T("page-head"),m),b=h,_=w;return i(),l(b,null,{default:k((()=>[d(a,{title:"websocket通讯示例"}),d(b,{class:"uni-padding-wrap"},{default:k((()=>[d(b,{class:"uni-btn-v"},{default:k((()=>[d(b,{class:"websocket-msg"},{default:k((()=>[r(g(n.showMsg),1)])),_:1}),d(_,{type:"primary",onClick:n.connect},{default:k((()=>[r("连接websocket服务")])),_:1},8,["onClick"]),u(d(_,{type:"primary",onClick:n.send},{default:k((()=>[r("发送一条消息")])),_:1},8,["onClick"]),[[p,c.connected]]),d(_,{type:"primary",onClick:n.close},{default:k((()=>[r("断开websocket服务")])),_:1},8,["onClick"]),d(b,{class:"websocket-tips"},{default:k((()=>[r("发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-90e828af"]]);export{_ as default};
