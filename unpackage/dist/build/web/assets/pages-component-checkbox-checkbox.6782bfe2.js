import{_ as e,o as l,c as a,w as t,i as u,a as n,b as s,z as c,A as d,F as i,r as o,d as f,e as m,B as _,C as h,D as r,f as v,t as k}from"./index-e5f1c86d.js";const C=e({data:()=>({title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}),methods:{checkboxChange:function(e){for(var l=this.items,a=e.detail.value,t=0,u=l.length;t<u;++t){const e=l[t];a.indexOf(e.value)>=0?this.$set(e,"checked",!0):this.$set(e,"checked",!1)}}}},[["render",function(e,C,b,p,g,x){const F=o(m("page-head"),f),A=u,w=_,y=h,N=r,B=v;return l(),a(A,null,{default:t((()=>[n(F,{title:g.title},null,8,["title"]),n(A,{class:"uni-padding-wrap uni-common-mt"},{default:t((()=>[n(A,{class:"uni-title uni-common-mt"},{default:t((()=>[s("默认样式")])),_:1}),n(A,null,{default:t((()=>[n(N,null,{default:t((()=>[n(y,null,{default:t((()=>[n(w,{value:"cb1",checked:"true"}),s("选中 ")])),_:1}),n(y,null,{default:t((()=>[n(w,{value:"cb"}),s("未选中 ")])),_:1})])),_:1})])),_:1}),n(A,{class:"uni-title uni-common-mt"},{default:t((()=>[s("不同颜色和尺寸的checkbox")])),_:1}),n(A,null,{default:t((()=>[n(N,null,{default:t((()=>[n(y,null,{default:t((()=>[n(w,{value:"cb1",checked:"true",color:"#FFCC33",style:{transform:"scale(0.7)"}}),s("选中 ")])),_:1}),n(y,null,{default:t((()=>[n(w,{value:"cb",color:"#FFCC33",style:{transform:"scale(0.7)"}}),s("未选中 ")])),_:1})])),_:1})])),_:1})])),_:1}),n(A,{class:"uni-padding-wrap"},{default:t((()=>[n(A,{class:"uni-title uni-common-mt"},{default:t((()=>[s(" 推荐展示样式 "),n(B,null,{default:t((()=>[s("\\n使用 uni-list 布局")])),_:1})])),_:1})])),_:1}),n(A,{class:"uni-list"},{default:t((()=>[n(N,{onChange:x.checkboxChange},{default:t((()=>[(l(!0),c(i,null,d(g.items,(e=>(l(),a(y,{class:"uni-list-cell uni-list-cell-pd",key:e.value},{default:t((()=>[n(A,null,{default:t((()=>[n(w,{value:e.value,checked:e.checked},null,8,["value","checked"])])),_:2},1024),n(A,null,{default:t((()=>[s(k(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-9c5fd396"]]);export{C as default};
