import{_ as t,s as e,o as s,c as a,w as n,i as l,a as u,b as i,z as o,A as c,F as d,f as r,r as _,e as f,G as m,t as p,E as h}from"./index-e5f1c86d.js";import{_ as x}from"./uni-card.001499b3.js";import{_ as y}from"./uni-load-more.48caf84d.js";import{_ as v}from"./uni-section.c8b2f398.js";const k=t({components:{},data:()=>({status:"more",statusTypes:[{value:"more",text:"加载前",checked:!0},{value:"loading",text:"加载中",checked:!1},{value:"noMore",text:"没有更多",checked:!1}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"}}),methods:{onChange(t){this.status=t.detail.value},clickLoadMore(t){e({icon:"none",title:"当前状态："+t.detail.status})}}},[["render",function(t,e,k,T,g,j){const C=r,w=_(f("uni-card"),x),F=_(f("uni-load-more"),y),A=_(f("uni-section"),v),M=l,b=h,z=m;return s(),a(M,{class:"container"},{default:n((()=>[u(w,{"is-full":"","is-shadow":!1},{default:n((()=>[u(C,{class:"uni-h6"},{default:n((()=>[i("加载更多组件用于页面加载更多数据时，页面底部显示内容等场景")])),_:1})])),_:1}),u(A,{title:"基本用法",type:"line"},{default:n((()=>[u(F,{status:g.status},null,8,["status"])])),_:1}),u(A,{title:"修改默认文字",type:"line"},{default:n((()=>[u(F,{status:g.status,"content-text":g.contentText},null,8,["status","content-text"])])),_:1}),u(A,{title:"改变颜色",type:"line"},{default:n((()=>[u(F,{color:"#007AFF",status:g.status},null,8,["status"])])),_:1}),u(A,{title:"指定加载图标样式 - 按平台自动选择样式",type:"line"},{default:n((()=>[u(F,{iconType:"auto",status:g.status},null,8,["status"])])),_:1}),u(A,{title:"指定加载图标样式 - 环形",type:"line"},{default:n((()=>[u(F,{iconType:"circle",status:g.status},null,8,["status"])])),_:1}),u(A,{title:"改变组件状态",type:"line"},{default:n((()=>[u(z,{class:"uni-list",onChange:j.onChange},{default:n((()=>[(s(!0),o(d,null,c(g.statusTypes,((t,e)=>(s(),a(M,{key:e,class:"uni-list-item"},{default:n((()=>[u(M,{class:"uni-list-item__container"},{default:n((()=>[u(M,{class:"uni-list-item__content"},{default:n((()=>[u(C,{class:"uni-list-item__content-title"},{default:n((()=>[i(p(t.text),1)])),_:2},1024)])),_:2},1024),u(M,{class:"uni-list-item__extra"},{default:n((()=>[u(b,{value:t.value,checked:t.checked},null,8,["value","checked"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-43a19843"]]);export{k as default};
