
(function($,Edge,compId){var _=null,y=true,n=false,zy='scaleY',e26='${_animation_t-2}',e37='${_animation_s-2}',c='color',x3='rgba(0,0,0,0)',g='image',e32='${_animation_f-1}',x21='stage',a='Base State',e29='${_animation_iCopy}',x24='hidden',x22='rgba(255,255,255,1)',e39='${_animation_f}',dt='Default Timeline',e38='${_animation_f-2}',x1='3.0.0',e36='${_animation_t}',i='none',e25='${_animation_s-3}',e35='${_animation_i}',h='height',e28='${_animation_h-1}',p='px',o='opacity',lf='left',e30='${_animation_h-2}',e40='${_animation_f-3}',zx='scaleX',t='transform',e31='${_animation_s}',e41='${_animation_h-3}',bg='background-color',e27='${_animation_h}',e33='${_animation_t-1}',e34='${_animation_logo}',ov='overflow',e23='${_Stage}',w='width',tp='top',x2='3.0.0.322',ql='linear',s='style',e42='${_animation_s-1}';var im='images/';var g13='animation_f-1.png',g5='animation_t-1.png',g14='animation_f.png',g12='animation_f-2.png',g6='animation_t.png',g20='animation_logo.png',g11='animation_f-3.png',g18='animation_s-1.png',g19='animation_s.png',g15='animation_h.png',g10='animation_h-1.png',g4='animation_i.png',g8='animation_h-3.png',g16='animation_s-3.png',g9='animation_h-2.png',g17='animation_s-2.png',g7='animation_t-2.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:w,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'animation_i',t:g,r:['350px','110px','300px','300px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'animation_iCopy',t:g,r:['485px','111px','300px','300px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'animation_t-1',t:g,r:['350px','110px','301px','301px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'animation_t',t:g,r:['350px','110px','300px','301px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'animation_t-2',t:g,r:['349px','110px','301px','301px','auto','auto'],o:1,f:[x3,im+g7,'0px','0px']},{id:'animation_h-3',t:g,r:['350px','110px','301px','300px','auto','auto'],f:[x3,im+g8,'0px','0px']},{id:'animation_h-2',t:g,r:['350px','110px','301px','300px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'animation_h-1',t:g,r:['350px','110px','301px','300px','auto','auto'],f:[x3,im+g10,'0px','0px']},{id:'animation_f-3',t:g,r:['350px','110px','301px','301px','auto','auto'],f:[x3,im+g11,'0px','0px']},{id:'animation_f-2',t:g,r:['350px','110px','301px','301px','auto','auto'],f:[x3,im+g12,'0px','0px']},{id:'animation_f-1',t:g,r:['350px','109px','301px','301px','auto','auto'],f:[x3,im+g13,'0px','0px']},{id:'animation_f',t:g,r:['350px','109px','300px','301px','auto','auto'],f:[x3,im+g14,'0px','0px']},{id:'animation_h',t:g,r:['350px','110px','300px','300px','auto','auto'],f:[x3,im+g15,'0px','0px']},{id:'animation_s-3',t:g,r:['350px','111px','301px','300px','auto','auto'],f:[x3,im+g16,'0px','0px']},{id:'animation_s-2',t:g,r:['350px','110px','301px','300px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'animation_s-1',t:g,r:['350px','110px','301px','300px','auto','auto'],f:[x3,im+g18,'0px','0px']},{id:'animation_s',t:g,r:['350px','110px','300px','300px','auto','auto'],f:[x3,im+g19,'0px','0px']},{id:'animation_logo',t:g,r:['350px','110px','300px','301px','auto','auto'],f:[x3,im+g20,'0px','0px']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:8258,a:y,tt:[]}}}};var S1=symbols[x21];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e23).P(bg,x22,c).P(ov,x24).P(h,600).P(w,1000);A1.A(e25).P(tp,27).T(0,110,0.631,ql).T(6,110).P(o,0,_,_,"").T(0.37,1,0.12).P(lf,273,_,_,p).T(0,350,0.631).T(6,19,0.745);A1.A(e26).P(tp,110).T(6,110).P(o,0,_,_,"").T(0,0).T(4.378,1,0.8,ql).P(lf,948,_,_,p).T(4.378,349,0.8).T(6,18,0.745);A1.A(e27).P(tp,-245).T(6,110).P(o,0,_,_,"").T(6.5,1,0.753,ql).P(lf,345,_,_,p).T(6.5,335,0.753);A1.A(e28).P(tp,-245).T(0.631,110,1.486,ql).T(6,110).P(o,0,_,_,"").T(0.631,1,0.631).P(lf,349,_,_,p).T(0.631,349).T(6,18,0.745);A1.A(e29).P(tp,111).P(lf,464).T(7.095,445,0.733,ql).P(o,0,_,_,"").T(7.095,1,0.733);A1.A(e30).P(tp,-245).T(0.631,110,1.169,ql).T(6,110).P(o,0,_,_,"").T(0.631,1,0.631).P(lf,349,_,_,p).T(0.631,349).T(6,18,0.745);A1.A(e31).P(tp,110).P(lf,185).T(6.612,185).T(7.095,175,_,_,175).P(o,0,_,_,"").T(6.25,1,0.845,ql);A1.A(e32).P(tp,109).T(6,109).P(zy,0.99,t,_,"").T(3.966,0.99).P(zx,0.99,t).T(3.966,0.99).P(o,0).T(2.75,1,1.216,ql).P(lf,-172,_,_,p).T(2.75,349,1.216).T(6,18,0.745);A1.A(e33).P(tp,110).T(6,110).P(o,0,_,_,"").T(4.178,1,0.8,ql).P(lf,948,_,_,p).T(4.178,349,0.8).T(6,19,0.745);A1.A(e34).P(tp,110).T(6,110).P(o,0,_,_,"").T(5.178,1,0.822,ql).P(lf,350,_,_,p).T(6,20,0.745);A1.A(e35).P(tp,553).T(1.8,110,0.95,ql).P(o,0,_,_,"").T(1.8,1,0.95).T(2.75,0,3.159).P(lf,349,_,_,p).T(1.8,349);A1.A(e36).P(tp,110).P(lf,525).T(6.745,458,0.418,ql).T(7.163,675,1.095).P(o,0,_,_,"").T(0,0).T(7.686,1,0.572);A1.A(e37).P(tp,195).T(0.25,110,0.381,ql).T(6,110).P(o,0,_,_,"").T(0.25,1,0.12).P(lf,431,_,_,p).T(0.25,349,0.381).T(6,18,0.745);A1.A(e38).P(tp,110).T(6,110).P(o,0.5,_,_,"").T(2.826,1,1.216,ql).P(lf,-172,_,_,p).T(2.826,349,1.216).T(6,18,0.745);A1.A(e39).P(tp,109).P(lf,547).T(7.357,574,0.824,ql).P(o,0,_,_,"").T(7.357,1,0.824);A1.A(e40).P(tp,110).T(6,110).P(o,0,_,_,"").T(2.962,1,1.216,ql).P(lf,-172,_,_,p).T(2.962,349,1.216).T(6,18,0.745);A1.A(e41).P(tp,-245).T(0.631,110,1.724,ql).T(6,110).P(o,0,_,_,"").T(0.631,1,0.631).P(lf,349,_,_,p).T(6,18,0.745);A1.A(e42).P(tp,110).T(6,110).P(o,0,_,_,"").T(0,1,0.25,ql).P(lf,350,_,_,p).T(6,19,0.745);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-243717322");