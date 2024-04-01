import{_ as a,o as t,c as e,w as i,i as A,a as l,b as s,t as g,z as n,F as o,m as d,r as u,d as r,e as h,f as c,l as p,g as m}from"./index-e5f1c86d.js";import{f as b}from"./util.5a26095b.js";import{a as I,_ as B}from"./stop.6de1ff89.js";const C=a({data:()=>({title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}),onLoad:function(){this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;let a=uni.getBackgroundAudioManager();a.title||(a.title="致爱丽丝"),a.singer||(a.singer="暂无"),a.coverImgUrl||(a.coverImgUrl="https://web-assets.dcloud.net.cn/unidoc/zh/Alice.jpeg"),a.onPlay((()=>{console.log("开始播放"),this.$backgroundAudioData.playing=this.playing=!0})),a.onPause((()=>{console.log("暂停播放"),this.$backgroundAudioData.playing=this.playing=!1})),a.onEnded((()=>{this.playing=!1,this.$backgroundAudioData.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=b(0)})),a.onTimeUpdate((t=>{Math.floor(a.currentTime)>Math.floor(this.playTime)&&(this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=b(Math.floor(a.currentTime))),this.$backgroundAudioData.playTime=this.playTime=a.currentTime})),this.bgAudioMannager=a},methods:{play:function(a){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(a){this.bgAudioMannager.seek(a.detail.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=b(0)}}},[["render",function(a,b,C,y,Q,w){const k=u(h("page-head"),r),F=c,f=A,E=p,U=m;return t(),e(f,null,{default:i((()=>[l(k,{title:Q.title},null,8,["title"]),l(f,{class:"uni-padding-wrap"},{default:i((()=>[l(f,{class:"uni-center"},{default:i((()=>[l(F,{class:"time-big"},{default:i((()=>[s(g(Q.formatedPlayTime),1)])),_:1})])),_:1}),l(f,{class:"uni-common-mt"},{default:i((()=>[l(E,{class:"slider",min:"0",max:"21",step:"1",value:Q.playTime,onChange:w.seek},null,8,["value","onChange"])])),_:1}),l(f,{class:"play-time"},{default:i((()=>[l(F,null,{default:i((()=>[s("00:00")])),_:1}),l(F,null,{default:i((()=>[s("00:21")])),_:1})])),_:1}),l(f,{class:"uni-hello-text"},{default:i((()=>[s("注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止")])),_:1}),l(f,{class:"page-body-buttons"},{default:i((()=>[Q.playing?(t(),n(o,{key:0},[l(f,{class:"page-body-button",onClick:w.stop},{default:i((()=>[l(U,{src:I})])),_:1},8,["onClick"]),l(f,{class:"page-body-button",onClick:w.pause},{default:i((()=>[l(U,{src:"data:image/png;base64,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"})])),_:1},8,["onClick"])],64)):d("",!0),Q.playing?d("",!0):(t(),n(o,{key:1},[l(f,{class:"page-body-button"}),l(f,{class:"page-body-button",onClick:w.play},{default:i((()=>[l(U,{src:B})])),_:1},8,["onClick"])],64)),l(f,{class:"page-body-button"})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-42f159e4"]]);export{C as default};
