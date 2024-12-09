"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3416],{3416:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var r=t(7552),n=t(29499),s=t(36715),i=t(59705),o=t(1343),l=t(58507),c=t(5401),d=t(49823),m=t(75785),p=t(68584),f=t(91468),y=t(99546),u=t(42781);const{featurizeSA:g,getClip:h,getLength:v,getLengthSansClipping:w,getTag:S}=u.aF,k=(0,m.n9)()({root:{width:300}});function b({track:e,feature:a,handleClose:t}){const{classes:m}=k(),[u,b]=(0,r.useState)("0"),[A,C]=(0,r.useState)(),[$,x]=(0,r.useState)(),N=+u;return(0,r.useEffect)((()=>{(async()=>{C(void 0);try{if(2048&a.get("flags")){const t=(S(a,"SA")||"").split(";")[0],[r,n]=t.split(","),{rpcManager:s}=(0,y.getSession)(e),i=(0,p.getConf)(e,"adapter"),o=(0,f.getRpcSessionId)(e),l=(await s.call(o,"CoreGetFeatures",{adapterConfig:i,sessionId:o,regions:[{refName:r,start:+n-1,end:+n}]})).find((e=>!(e.get("name")!==a.get("name")||2048&e.get("flags")||256&e.get("flags"))));if(!l)throw new Error("primary feature not found");x(l)}else x(a)}catch(e){console.error(e),C(e)}})()}),[a,e]),r.createElement(d.Dialog,{open:!0,onClose:t,title:"Set window size"},r.createElement(n.A,null,A?r.createElement(s.A,{color:"error"},`${A}`):$?r.createElement("div",{className:m.root},256&$.get("flags")?r.createElement(s.A,{style:{color:"orange"}},"Note: You selected a secondary alignment (which generally does not have SA tags or SEQ fields) so do a full reconstruction of the alignment"):null,r.createElement(s.A,null,"Show an extra window size around each part of the split alignment. Using a larger value can allow you to see more genomic context."),r.createElement(o.A,{value:N,onChange:e=>{b(e.target.value)},label:"Set window size"})):r.createElement("div",null,r.createElement(s.A,null,"To accurately perform comparison we are fetching the primary alignment. Loading primary feature..."),r.createElement(i.A,null))),r.createElement(l.A,null,r.createElement(c.A,{variant:"contained",color:"secondary",onClick:t},"Cancel"),r.createElement(c.A,{disabled:!$,variant:"contained",color:"primary",onClick:function(){try{if(!$)return;const a=$,r=(0,y.getSession)(e),n=(0,y.getContainingView)(e),s=a.get("CIGAR"),i=a.get("flags"),o=a.get("strand"),l=S(a,"SA")||"",c=a.get("name"),d=h(s,1),m=`${c}_assembly_${Date.now()}`,[f]=(0,p.getConf)(e,"assemblyNames"),u=[f,m],k=`track-${Date.now()}`,b=`${c}_vs_${f}`,{assemblyManager:A}=r,C=A.get(f);if(!C)throw new Error("assembly not found");const x=g(l,a.id(),o,c,!0),R=a.toJSON();R.clipPos=d,R.strand=1,R.mate={refName:c,start:d,end:d+w(s)};const D=v(2048&i?x[0].CIGAR:s),E=[R,...x];E.forEach(((e,a)=>{e.refName=C.getCanonicalRefName(e.refName)||e.refName,e.syntenyId=a,e.mate.syntenyId=a,e.mate.uniqueId=`${e.uniqueId}_mate`})),E.sort(((e,a)=>e.clipPos-a.clipPos));const M=a.get("seq"),P=[...E,...E.map((e=>e.mate))],q=2*N,I=E.reduce(((e,a)=>e+a.end-a.start+q),0),L=`${c}_${Date.now()}`,T=(0,p.getConf)(C,"sequence"),_=(0,y.gatherOverlaps)(E.map((e=>({...e,start:Math.max(0,e.start-N),end:e.end+N,assemblyName:f}))));r.addTemporaryAssembly?.({name:m,sequence:{type:"ReferenceSequenceTrack",name:"Read sequence",trackId:L,assemblyNames:[m],adapter:{type:"FromConfigSequenceAdapter",noAssemblyManager:!0,features:[{start:0,end:D,seq:M||"",refName:c,uniqueId:`${Math.random()}`}]}}}),r.addView("LinearSyntenyView",{type:"LinearSyntenyView",views:[{type:"LinearGenomeView",hideHeader:!0,offsetPx:0,bpPerPx:I/n.width,displayedRegions:_,tracks:[{id:`${Math.random()}`,type:"ReferenceSequenceTrack",assemblyNames:[f],configuration:T.trackId,displays:[{id:`${Math.random()}`,type:"LinearReferenceSequenceDisplay",showReverse:!0,showTranslation:!1,height:35,configuration:`${L}-LinearReferenceSequenceDisplay`}]}]},{type:"LinearGenomeView",hideHeader:!0,offsetPx:0,bpPerPx:D/n.width,displayedRegions:[{assemblyName:m,start:0,end:D,refName:c}],tracks:[{id:`${Math.random()}`,type:"ReferenceSequenceTrack",configuration:L,displays:[{id:`${Math.random()}`,type:"LinearReferenceSequenceDisplay",showReverse:!0,showTranslation:!1,height:35,configuration:`${L}-LinearReferenceSequenceDisplay`}]}]}],viewTrackConfigs:[{type:"SyntenyTrack",assemblyNames:u,adapter:{type:"FromConfigAdapter",features:P},trackId:k,name:b}],tracks:[{configuration:k,type:"SyntenyTrack",displays:[{type:"LinearSyntenyDisplay",configuration:`${k}-LinearSyntenyDisplay`}]}],displayName:`${c} vs ${f}`}),t()}catch(e){console.error(e),C(e)}}},"Submit")))}},59705:(e,a,t)=>{t.d(a,{A:()=>k});var r=t(7552),n=t(93878),s=t(70799),i=t(64761),o=t(51148),l=t(84893),c=t(4785),d=t(15622),m=t(58520),p=t(72489),f=t(69500);const y=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,u=i.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,g="string"!=typeof y?i.AH`
        animation: ${y} 1.4s linear infinite;
      `:null,h="string"!=typeof u?i.AH`
        animation: ${u} 1.4s ease-in-out infinite;
      `:null,v=(0,o.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`color${(0,d.A)(t.color)}`]]}})((0,l.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:g||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,m.A)()).map((([a])=>({props:{color:a},style:{color:(e.vars||e).palette[a].main}})))]})))),w=(0,o.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,a)=>a.svg})({display:"block"}),S=(0,o.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.circle,a[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&a.circleDisableShrink]}})((0,l.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:h||{animation:`${u} 1.4s ease-in-out infinite`}}]})))),k=r.forwardRef((function(e,a){const t=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:r,color:i="primary",disableShrink:o=!1,size:l=40,style:m,thickness:y=3.6,value:u=0,variant:g="indeterminate",...h}=t,k={...t,color:i,disableShrink:o,size:l,thickness:y,value:u,variant:g},b=(e=>{const{classes:a,variant:t,color:r,disableShrink:n}=e,i={root:["root",t,`color${(0,d.A)(r)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,n&&"circleDisableShrink"]};return(0,s.A)(i,p.b,a)})(k),A={},C={},$={};if("determinate"===g){const e=2*Math.PI*((44-y)/2);A.strokeDasharray=e.toFixed(3),$["aria-valuenow"]=Math.round(u),A.strokeDashoffset=`${((100-u)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,f.jsx)(v,{className:(0,n.A)(b.root,r),style:{width:l,height:l,...C,...m},ownerState:k,ref:a,role:"progressbar",...$,...h,children:(0,f.jsx)(w,{className:b.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,f.jsx)(S,{className:b.circle,style:A,ownerState:k,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})})})}))},72489:(e,a,t)=>{t.d(a,{A:()=>i,b:()=>s});var r=t(33761),n=t(85693);function s(e){return(0,n.Ay)("MuiCircularProgress",e)}const i=(0,r.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=3416.35014d79.chunk.js.map