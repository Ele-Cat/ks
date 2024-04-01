import{_ as e,ac as s,U as a,V as t,o as i,c as o,w as l,i as n,a as r,b as p,m as c,r as h,d as u,e as d,Q as m,g}from"./index-e5f1c86d.js";const f=e({data:()=>({title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}),computed:{isDisableButton:()=>function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}},onShareAppMessage(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://web-assets.dcloud.net.cn/unidoc/zh/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){s({service:"share",success:e=>{console.log("success",e);let s=[];for(let a=0;a<e.provider.length;a++)switch(e.provider[a]){case"weixin":s.push({name:"分享到微信好友",id:"weixin",sort:0}),s.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":s.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":s.push({name:"分享到QQ",id:"qq",sort:3})}this.providerList=s.sort(((e,s)=>e.sort-s.sort))},fail:e=>{console.log("获取分享通道失败",e),a({content:"获取分享通道失败",showCancel:!1})}})},methods:{async share(e){if(console.log("分享通道:"+e.id+"； 分享类型:"+this.shareType),!this.shareText&&(1===this.shareType||0===this.shareType))return void a({content:"分享内容不能为空",showCancel:!1});if(!this.image&&(2===this.shareType||0===this.shareType))return void a({content:"分享图片不能为空",showCancel:!1});let s={provider:e.id,scene:e.type&&"WXSceneTimeline"===e.type?"WXSceneTimeline":"WXSceneSession",type:this.shareType,success:e=>{console.log("success",e),a({content:"已分享",showCancel:!1})},fail:e=>{console.log("fail",e),a({content:e.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}};switch(this.shareType){case 0:s.summary=this.shareText,s.imageUrl=this.image,s.title="欢迎体验uniapp",s.href="https://uniapp.dcloud.io";break;case 1:s.summary=this.shareText;break;case 2:s.imageUrl=this.image;break;case 5:s.imageUrl=this.image?this.image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png",s.title="欢迎体验uniapp",s.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0}}0===s.type&&"iOS"===plus.os.name&&(s.imageUrl=await this.compress()),1===s.type&&"qq"===s.provider&&(s.href="https://uniapp.dcloud.io",s.title="欢迎体验uniapp"),uni.share(s)},radioChange(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage(){t({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:e=>{this.image=e.tempFilePaths[0]},fail:e=>{}})},compress(){console.log("开始压缩");let e=this.image;return new Promise((s=>{var t=plus.io.convertAbsoluteFileSystem(e.replace("file://",""));console.log("after"+t),plus.io.resolveLocalFileSystemURL(t,(t=>{t.file((t=>{console.log("getFile:"+JSON.stringify(t)),t.size>20480&&plus.zip.compressImage({src:e,dst:e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},(a=>{console.log("success zip****"+a.size);let t=e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");s(t)}),(function(e){a({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}),(e=>{console.log("Resolve file URL failed: "+e.message),a({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}}},[["render",function(e,s,a,t,f,y){const T=h(d("page-head"),u),b=n,w=m,x=g;return i(),o(b,null,{default:l((()=>[r(T,{title:f.title},null,8,["title"]),r(b,{class:"uni-padding-wrap"},{default:l((()=>[r(b,{class:"uni-title"},{default:l((()=>[p("分享内容")])),_:1}),r(b,{class:"uni-textarea"},{default:l((()=>[r(w,{class:"textarea",modelValue:f.shareText,"onUpdate:modelValue":s[0]||(s[0]=e=>f.shareText=e)},null,8,["modelValue"])])),_:1}),r(b,{class:"uni-title"},{default:l((()=>[p("分享图片：")])),_:1}),r(b,{class:"uni-uploader",style:{padding:"15rpx",background:"#FFF"}},{default:l((()=>[f.image?c("",!0):(i(),o(b,{key:0,class:"uni-uploader__input-box",onClick:y.chooseImage},null,8,["onClick"])),f.image?(i(),o(x,{key:1,class:"uni-uploader__img",src:f.image},null,8,["src"])):c("",!0)])),_:1})])),_:1})])),_:1})}]]);export{f as default};
