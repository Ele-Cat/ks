import{_ as e,o as a,c as s,w as l,i as t,a as u,m as i,z as n,A as d,F as c,b as o,g as r,j as h,G as m,t as p,h as f,E as _,C as g}from"./index-e5f1c86d.js";const w=e({data:()=>({showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/muwu.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}),methods:{radioChange(e){this.showSwiper="swiper"===e.detail.value}}},[["render",function(e,w,k,v,j,b){const y=r,C=t,S=f,x=h,z=_,U=g,A=m;return a(),s(C,{class:"page"},{default:l((()=>[j.showSwiper?i("",!0):(a(),s(C,{key:0,class:"img-view"},{default:l((()=>[u(y,{src:j.imgUrls[0]},null,8,["src"])])),_:1})),j.showSwiper?(a(),s(x,{key:1,"indicator-dots":"true"},{default:l((()=>[(a(!0),n(c,null,d(j.imgUrls,((e,t)=>(a(),s(S,{key:t},{default:l((()=>[u(y,{src:e},null,8,["src"])])),_:2},1024)))),128))])),_:1})):i("",!0),u(C,{class:"uni-padding-wrap uni-common-mt"},{default:l((()=>[u(C,{class:"uni-title"},{default:l((()=>[u(C,null,{default:l((()=>[o("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")])),_:1}),u(C,null,{default:l((()=>[o("在微信小程序端，导航栏始终为不透明样式。")])),_:1})])),_:1}),u(C,{class:"uni-title uni-common-mt"},{default:l((()=>[o("图片类型")])),_:1})])),_:1}),u(C,{class:"uni-list"},{default:l((()=>[u(A,{onChange:b.radioChange},{default:l((()=>[(a(!0),n(c,null,d(j.items,((e,t)=>(a(),s(U,{class:"uni-list-cell uni-list-cell-pd",key:t},{default:l((()=>[u(C,null,{default:l((()=>[o(p(e.name),1)])),_:2},1024),u(C,null,{default:l((()=>[u(z,{value:e.value,checked:e.checked},null,8,["value","checked"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1}),u(C,{style:{height:"1000rpx"}})])),_:1})}],["__scopeId","data-v-eb2347e2"]]);export{w as default};
