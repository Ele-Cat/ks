import{_ as e,o as a,c as t,w as i,i as l,a as r,b as d,r as s,d as n,e as u,v as o}from"./index-e5f1c86d.js";const p=e({data:()=>({title:"button",loading:!1}),onLoad(){this._timer=null},onShow(){this.clearTimer(),this._timer=setTimeout((()=>{this.loading=!0}),300)},onUnload(){this.clearTimer(),this.loading=!1},methods:{openTypeError(e){console.error("open-type error:",e)},clearTimer(){null!=this._timer&&clearTimeout(this._timer)}}},[["render",function(e,p,m,f,_,y){const c=s(u("page-head"),n),b=o,h=l;return a(),t(h,null,{default:i((()=>[r(c,{title:_.title},null,8,["title"]),r(h,{class:"uni-padding-wrap uni-common-mt"},{default:i((()=>[r(b,{type:"primary"},{default:i((()=>[d("页面主操作 Normal")])),_:1}),r(b,{type:"primary",loading:_.loading},{default:i((()=>[d("页面主操作 Loading")])),_:1},8,["loading"]),r(b,{type:"primary",disabled:"true"},{default:i((()=>[d("页面主操作 Disabled")])),_:1}),r(b,{type:"default"},{default:i((()=>[d("页面次要操作 Normal")])),_:1}),r(b,{type:"default",disabled:"true"},{default:i((()=>[d("页面次要操作 Disabled")])),_:1}),r(b,{type:"warn"},{default:i((()=>[d("警告类操作 Normal")])),_:1}),r(b,{type:"warn",disabled:"true"},{default:i((()=>[d("警告类操作 Disabled")])),_:1}),r(h,{class:"button-sp-area"},{default:i((()=>[r(b,{type:"primary",plain:"true"},{default:i((()=>[d("按钮")])),_:1}),r(b,{type:"primary",disabled:"true",plain:"true"},{default:i((()=>[d("不可点击的按钮")])),_:1}),r(b,{type:"default",plain:"true"},{default:i((()=>[d("按钮")])),_:1}),r(b,{type:"default",disabled:"true",plain:"true"},{default:i((()=>[d("按钮")])),_:1}),r(b,{class:"mini-btn",type:"primary",size:"mini"},{default:i((()=>[d("按钮")])),_:1}),r(b,{class:"mini-btn",type:"default",size:"mini"},{default:i((()=>[d("按钮")])),_:1}),r(b,{class:"mini-btn",type:"warn",size:"mini"},{default:i((()=>[d("按钮")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-c751f824"]]);export{p as default};
