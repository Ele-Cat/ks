import{_ as a,o as l,c as e,w as t,i,a as n,b as s,L as d,f as u,r as o,e as r}from"./index-e5f1c86d.js";import{_ as c}from"./uni-card.001499b3.js";import{_ as m}from"./uni-data-checkbox.d3685f84.js";import{_ as f}from"./uni-section.c8b2f398.js";import"./uni-load-more.48caf84d.js";const p=a({data:()=>({paddingClass:"uni-pa-5",marginClass:"uni-ma-5",formData:{margin:["t","r","l","b"],marginSize:"5",padding:["t","r","l","b"],paddingSize:"5"},directionData:[{value:"t",text:"上"},{value:"r",text:"右"},{value:"b",text:"下"},{value:"l",text:"左"}],sizeData:[{value:"0",text:"0"},{value:"2",text:"4px"},{value:"5",text:"10px"},{value:"10",text:"20px"}]}),onLoad(){},methods:{change(a,l){let{margin:e,marginSize:t,padding:i,paddingSize:n}=this.formData;this.marginClass="",this.paddingClass="",e.forEach((a=>{this.marginClass+=`uni-m${a}-${t} `})),i.forEach((a=>{this.marginClass+=`uni-p${a}-${n} `}))}}},[["render",function(a,p,g,_,h,b){const x=u,D=i,z=o(r("uni-card"),c),C=o(r("uni-data-checkbox"),m),V=o(r("uni-section"),f);return l(),e(D,{class:"container"},{default:t((()=>[n(z,{"is-shadow":!1,"is-full":""},{default:t((()=>[n(D,{class:"header"},{default:t((()=>[n(x,{class:"uni-h6"},{default:t((()=>[s("使用间距辅助类对元素快速应用")])),_:1}),s(),n(x,{class:"uni-primary uni-px-3 uni-h6"},{default:t((()=>[s("margin")])),_:1}),n(x,{class:"uni-h6"},{default:t((()=>[s(" 或 ")])),_:1}),n(x,{class:"uni-primary uni-px-3 uni-h6"},{default:t((()=>[s("padding")])),_:1}),s(),n(x,{class:"uni-h6"},{default:t((()=>[s("样式， 范围是从 0 到 16。")])),_:1})])),_:1}),n(D,{class:"header uni-mt-5"},{default:t((()=>[n(x,{class:"uni-h6"},{default:t((()=>[s("规则为")])),_:1}),s(),n(x,{class:"uni-primary uni-pl-3 uni-h6"},{default:t((()=>[s("uni-${property}${direction}-${size}")])),_:1})])),_:1}),n(D,{class:"uni-mt-5"},{default:t((()=>[n(x,{class:"uni-h6"},{default:t((()=>[s("各值的含义请参考文档")])),_:1})])),_:1})])),_:1}),n(V,{title:"效果展示",type:"line"},{default:t((()=>[n(D,{class:"margin"},{default:t((()=>[n(D,{class:d(["margin-item uni-border-4-bg",[h.paddingClass,h.marginClass]])},{default:t((()=>[n(D,{class:"box uni-primary-bg"},{default:t((()=>[n(x,{class:"uni-white uni-body"},{default:t((()=>[s("通过下面的选项控制边距")])),_:1})])),_:1})])),_:1},8,["class"])])),_:1}),n(D,{class:"actions uni-mt-10"},{default:t((()=>[n(x,{class:"action-label"},{default:t((()=>[s("外边距")])),_:1}),n(C,{modelValue:h.formData.margin,"onUpdate:modelValue":p[0]||(p[0]=a=>h.formData.margin=a),multiple:"",localdata:h.directionData,onChange:p[1]||(p[1]=a=>b.change(a,1))},null,8,["modelValue","localdata"])])),_:1}),n(D,{class:"actions uni-mt-3 uni-mb-10"},{default:t((()=>[n(x,{class:"action-label"},{default:t((()=>[s("外边距大小")])),_:1}),n(C,{modelValue:h.formData.marginSize,"onUpdate:modelValue":p[2]||(p[2]=a=>h.formData.marginSize=a),localdata:h.sizeData,onChange:p[3]||(p[3]=a=>b.change(a,1))},null,8,["modelValue","localdata"])])),_:1}),n(D,{class:"actions"},{default:t((()=>[n(x,{class:"action-label"},{default:t((()=>[s("内边距")])),_:1}),n(C,{modelValue:h.formData.padding,"onUpdate:modelValue":p[4]||(p[4]=a=>h.formData.padding=a),multiple:"",localdata:h.directionData,onChange:p[5]||(p[5]=a=>b.change(a,2))},null,8,["modelValue","localdata"])])),_:1}),n(D,{class:"actions uni-mt-3 uni-mb-10"},{default:t((()=>[n(x,{class:"action-label"},{default:t((()=>[s("内边距大小")])),_:1}),n(C,{modelValue:h.formData.paddingSize,"onUpdate:modelValue":p[6]||(p[6]=a=>h.formData.paddingSize=a),localdata:h.sizeData,onChange:p[7]||(p[7]=a=>b.change(a,3))},null,8,["modelValue","localdata"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-7ef4aba0"]]);export{p as default};
