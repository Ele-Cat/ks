import{_ as t,ah as a,ai as e,o as s,c as l,w as i,i as n,a as o,b as h,r as d,d as f,e as u,v as p}from"./index-e5f1c86d.js";const r=t({data:()=>({title:"nav-default",hasSetText:!1,hasSetBg:!1}),methods:{setText(){this.hasSetText=!this.hasSetText,a({title:this.hasSetText?"Hello uni-app":"默认导航栏"})},setBg(){this.hasSetBg=!this.hasSetBg,e({frontColor:this.hasSetBg?"#ffffff":"#000000",backgroundColor:this.hasSetBg?"#007AFF":"#F8F8F8"})}}},[["render",function(t,a,e,r,c,g){const x=d(u("page-head"),f),S=n,B=p;return s(),l(S,{class:"page"},{default:i((()=>[o(x,{title:c.title},null,8,["title"]),o(S,{class:"uni-padding-wrap"},{default:i((()=>[o(S,{class:"uni-helllo-text"},{default:i((()=>[h(" 本页标题栏是uni-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。 ")])),_:1}),o(S,{class:"uni-btn-v"},{default:i((()=>[o(B,{type:"default",onClick:g.setText},{default:i((()=>[h("改变标题栏文字")])),_:1},8,["onClick"]),o(B,{type:"primary",onClick:g.setBg},{default:i((()=>[h("改变标题栏颜色")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{r as default};
