import React from 'react';
import {registerRoot,Composition,AbsoluteFill,interpolate,useCurrentFrame,useVideoConfig,spring} from 'remotion';
const navy='#0F1B3D',orange='#FF6B35',gold='#F5C451';
const scenes=[
{start:0,end:15,title:'MEXAY DIGITAL',sub:'Fikirlerinize dijital bir görünüm kazandıralım.',tag:'DİJİTAL ÇÖZÜMLER'},
{start:15,end:35,title:'MARKA KİMLİĞİ',sub:'Logolar, kartvizitler ve kurumsal tasarımlar.',tag:'LOGO • BRANDING'},
{start:35,end:55,title:'SOSYAL MEDYA',sub:'Markanızı öne çıkaran yaratıcı görseller.',tag:'POST • BANNER • REELS'},
{start:55,end:75,title:'AKILLI EXCEL',sub:'Gelir, gider, satış ve stoklarınız tek ekranda.',tag:'DASHBOARD • ANALİZ'},
{start:75,end:95,title:'WEB TASARIM',sub:'Mobil uyumlu, modern ve etkileyici web siteleri.',tag:'WEB • MOBİL'},
{start:95,end:110,title:'VİDEO İÇERİK',sub:'Ürünlerinizi anlatan etkileyici kısa videolar.',tag:'MOTION • REKLAM'},
{start:110,end:120,title:'BİRLİKTE ÜRETELİM',sub:'Projenizi anlatın: mexaydigital@gmail.com',tag:'MEXAY DIGITAL'}
];
function Ad(){const frame=useCurrentFrame();const {fps}=useVideoConfig();const t=frame/fps;const scene=scenes.find(s=>t>=s.start&&t<s.end)||scenes[6];const local=frame-scene.start*fps;const enter=spring({frame:local,fps,config:{damping:200}});const y=interpolate(enter,[0,1],[90,0]);const fade=interpolate(local,[0,18],[0,1],{extrapolateRight:'clamp'});const pulse=0.6+0.4*Math.sin(frame/28);return <AbsoluteFill style={{background:`radial-gradient(circle at ${50+15*Math.sin(frame/80)}% 30%,#223b6c,${navy} 70%)`,fontFamily:'Arial,sans-serif',color:'#F7F8FC',overflow:'hidden'}}>
<AbsoluteFill style={{opacity:.18,backgroundImage:'linear-gradient(#FFFFFF22 1px,transparent 1px),linear-gradient(90deg,#FFFFFF22 1px,transparent 1px)',backgroundSize:'88px 88px',transform:`perspective(600px) rotateX(22deg) scale(1.4) translateY(${frame%90}px)`}}/>
<div style={{position:'absolute',top:120,left:90,fontSize:35,fontWeight:900,letterSpacing:8,color:gold}}>MEX<span style={{color:orange}}>AY</span> <span style={{fontWeight:300,color:'white'}}>DIGITAL</span></div>
<div style={{position:'absolute',left:85,right:85,top:540,transform:`translateY(${y}px)`,opacity:fade}}><div style={{display:'inline-block',border:`2px solid ${orange}`,borderRadius:50,padding:'16px 30px',color:gold,fontSize:30,letterSpacing:5}}>{scene.tag}</div><div style={{fontSize:104,fontWeight:900,lineHeight:1.06,marginTop:50,letterSpacing:-3,textShadow:'0 15px 40px #0008'}}>{scene.title}</div><div style={{width:140,height:10,background:orange,borderRadius:10,margin:'40px 0'}}/><div style={{fontSize:47,lineHeight:1.35,color:'#e5ebf5'}}>{scene.sub}</div></div>
<div style={{position:'absolute',top:300,right:-160,width:530,height:530,borderRadius:'50%',border:`6px solid ${gold}`,opacity:.18*pulse,boxShadow:`0 0 100px ${orange}`}}/>
<div style={{position:'absolute',bottom:190,left:85,right:85,display:'flex',justifyContent:'space-between',fontSize:26,letterSpacing:3,color:'#B9C8E3'}}><span>DESIGN • DIGITAL • GROWTH</span><span>{String(Math.floor(t)).padStart(3,'0')} / 120</span></div>
<div style={{position:'absolute',bottom:125,left:85,right:85,height:5,background:'#ffffff33'}}><div style={{width:`${100*t/120}%`,height:'100%',background:orange}}/></div>
</AbsoluteFill>}
const RemotionRoot=()=> <Composition id="MexAyAd" component={Ad} durationInFrames={3600} fps={30} width={1080} height={1920}/>;
registerRoot(RemotionRoot);
