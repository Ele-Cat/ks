import{_ as e,aV as s,o as t,c as a,w as r,a as i,L as o,a1 as l,aW as n,ab as c,m as h,i as d,b as w,z as u,A as f,F as _,f as m,r as p,e as y,v as g,S as k,t as b}from"./index-e5f1c86d.js";import{_ as D}from"./uni-card.001499b3.js";import{_ as v}from"./uni-section.c8b2f398.js";const L=e({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const e={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(s=>{if(this.disable)return;const t=Object.keys(e).find((t=>{const a=s.key,r=e[t];return r===a||Array.isArray(r)&&r.includes(a)}));t&&setTimeout((()=>{this.$emit(t,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(e){("mask"!==e||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(e,s,t){this[e]=t,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[s]=t,this.$emit("change",t)}),t?50:300)}}},[["render",function(e,w,u,f,_,m){const p=d,y=s("keypress");return _.visibleSync?(t(),a(p,{key:0,class:o([{"uni-drawer--visible":_.showDrawer},"uni-drawer"]),onTouchmove:c(m.clear,["stop","prevent"])},{default:r((()=>[i(p,{class:o(["uni-drawer__mask",{"uni-drawer__mask--visible":_.showDrawer&&u.mask}]),onClick:w[0]||(w[0]=e=>m.close("mask"))},null,8,["class"]),i(p,{class:o(["uni-drawer__content",{"uni-drawer--right":_.rightMode,"uni-drawer--left":!_.rightMode,"uni-drawer__content--visible":_.showDrawer}]),style:l({width:_.drawerWidth+"px"})},{default:r((()=>[n(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),i(y,{onEsc:w[1]||(w[1]=e=>m.close("mask"))})])),_:3},8,["class","onTouchmove"])):h("",!0)}],["__scopeId","data-v-ac0dbaaa"]]);const T=e({data:()=>({showRight:!1,showLeft:!1}),methods:{confirm(){},showDrawer(e){this.$refs[e].open()},closeDrawer(e){this.$refs[e].close()},change(e,s){console.log(("showLeft"===s?"左窗口":"右窗口")+(e?"打开":"关闭")),this[s]=e}},onNavigationBarButtonTap(e){this.showLeft?this.$refs.showLeft.close():this.$refs.showLeft.open()},onBackPress(){if(this.showRight||this.showLeft)return this.$refs.showLeft.close(),this.$refs.showRight.close(),!0}},[["render",function(e,s,o,l,n,c){const h=m,T=p(y("uni-card"),D),C=g,R=d,S=p(y("uni-drawer"),L),$=p(y("uni-section"),v),x=k;return t(),a(R,null,{default:r((()=>[i(T,{"is-full":"","is-shadow":!1},{default:r((()=>[i(h,{class:"uni-h6"},{default:r((()=>[w("这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。")])),_:1})])),_:1}),i($,{title:"左侧滑出",type:"line"},{default:r((()=>[i(R,{class:"example-body"},{default:r((()=>[i(C,{type:"primary",onClick:s[0]||(s[0]=e=>c.showDrawer("showLeft"))},{default:r((()=>[i(h,{class:"word-btn-white"},{default:r((()=>[w("显示Drawer")])),_:1})])),_:1}),i(S,{ref:"showLeft",mode:"left",width:320,onChange:s[2]||(s[2]=e=>c.change(e,"showLeft"))},{default:r((()=>[i(R,{class:"close"},{default:r((()=>[i(C,{onClick:s[1]||(s[1]=e=>c.closeDrawer("showLeft"))},{default:r((()=>[i(h,{class:"word-btn-white"},{default:r((()=>[w("关闭Drawer")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}),i($,{title:"右侧滑出",type:"line"},{default:r((()=>[i(R,{class:"example-body"},{default:r((()=>[i(C,{type:"primary",onClick:s[3]||(s[3]=e=>c.showDrawer("showRight"))},{default:r((()=>[i(h,{class:"word-btn-white"},{default:r((()=>[w("显示Drawer")])),_:1})])),_:1}),i(S,{ref:"showRight",mode:"right","mask-click":!1,onChange:s[6]||(s[6]=e=>c.change(e,"showRight"))},{default:r((()=>[i(R,{class:"scroll-view"},{default:r((()=>[i(x,{class:"scroll-view-box","scroll-y":"true"},{default:r((()=>[i(R,{class:"info"},{default:r((()=>[i(h,{class:"info-text"},{default:r((()=>[w("右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭")])),_:1})])),_:1}),i(R,{class:"close"},{default:r((()=>[i(C,{onClick:s[4]||(s[4]=e=>c.closeDrawer("showRight"))},{default:r((()=>[i(h,{class:"word-btn-white"},{default:r((()=>[w("关闭Drawer")])),_:1})])),_:1})])),_:1}),(t(),u(_,null,f(100,(e=>i(R,{class:"info-content",key:e},{default:r((()=>[i(h,null,{default:r((()=>[w("可滚动内容 "+b(e),1)])),_:2},1024)])),_:2},1024))),64)),i(R,{class:"close"},{default:r((()=>[i(C,{onClick:s[5]||(s[5]=e=>c.closeDrawer("showRight"))},{default:r((()=>[i(h,{class:"word-btn-white"},{default:r((()=>[w("关闭Drawer")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-ec64c3c5"]]);export{T as default};
