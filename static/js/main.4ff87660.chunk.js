(this["webpackJsonpwheel-of-fortune"]=this["webpackJsonpwheel-of-fortune"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(32),a=(n(43),n(2)),r=n(6),s=(n(44),n(33)),l=n(34),d=n(55),j=n(54),u=n(57),h=n(56),b=n(58),m=n(1),f=[{option:"REACT"},{option:"CUSTOM"},{option:"ROULETTE",style:{textColor:"#f9dd50"}},{option:"WHEEL"},{option:"REACT"},{option:"CUSTOM"},{option:"ROULETTE",style:{textColor:"#70bbe0"}},{option:"WHEEL"}],p=["#282c34","#282c34","#282c34","#282c34"],O=["#0b3351"],x=function(e){var t=e.onChange,n=e.maxFileSize,i=e.value,c=e.accept,x=(e.maxFileCount,Object(o.useState)(!1)),g=Object(r.a)(x,2),C=g[0],v=g[1],y=Object(o.useState)(0),N=Object(r.a)(y,2),w=N[0],S=N[1],k=Object(o.useState)(!1),E=Object(r.a)(k,2),z=E[0],W=E[1],L=Object(o.useState)(""),R=Object(r.a)(L,2),T=R[0],U=R[1],B=Object(o.useState)(i||[]),M=Object(r.a)(B,2),F=M[0],I=M[1],A=Object(o.useState)(f),H=Object(r.a)(A,2),D=H[0],J=H[1],G=function(){I(F.slice()),t&&t(F)},P=function(e){return Object(m.jsx)(l.a,Object(a.a)(Object(a.a)({},e),{},{children:"File exceeds maximum allowable size"}))},$=function(e){if(n&&n>0&&e.size>n)return Object(m.jsx)(d.a,{placement:"top",overlay:P,children:Object(m.jsx)("span",{children:String.fromCharCode(9888)})})};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j.a,{className:"p-3",position:"middle-center",style:{zIndex:1e6},children:Object(m.jsxs)(u.a,{onClose:function(){return W(!1)},show:z,autohide:!0,children:[Object(m.jsx)(u.a.Header,{children:Object(m.jsx)("strong",{className:"me-auto font-style",children:"Congratulations"})}),Object(m.jsx)(u.a.Body,{children:Object(m.jsxs)("div",{className:"font-style",children:["Woohoo, you're reciept ",T,"!"]})})]})}),Object(m.jsx)("header",{className:"App-header",children:Object(m.jsxs)("div",{className:"parent-container",children:[Object(m.jsx)(s.Wheel,{mustStartSpinning:C,prizeNumber:w,data:D,backgroundColors:p,textColors:O,fontFamily:"Nunito",fontSize:20,fontWeight:"bold",fontStyle:"normal",outerBorderColor:"#eeeeee",outerBorderWidth:10,innerRadius:0,innerBorderColor:"#30261a",innerBorderWidth:0,radiusLineColor:"#eeeeee",radiusLineWidth:8,spinDuration:1,startingOptionIndex:2,textDistance:60,onStopSpinning:function(){v(!1),console.log("handleResult"),console.log(D[w].option),W(!0),U(D[w].option)}}),Object(m.jsx)("button",{className:"spin-button",onClick:function(){if(!C){var e=Math.floor(Math.random()*D.length);S(e),v(!0)}},children:"SPIN"}),Object(m.jsxs)("div",{className:"row padding-top-150 style-unset",children:[Object(m.jsxs)(h.a.Group,{controlId:"formFile",className:"mb-3 text-left style-unset col-8",children:[Object(m.jsx)(h.a.Label,{children:"Upload img"}),Object(m.jsx)(h.a.Control,{onChange:function(e){var t=e.currentTarget.files;if(t){for(var n=0;n<t.length;n++)F.push(t[n]);G()}},accept:c,type:"file"})]}),Object(m.jsx)(b.a,{variant:"outline-light",className:"col-4 button-container",onClick:function(){F.map((function(e,t){console.log(e)})),J(F.map((function(e,t){return{option:e.name,image:{uri:URL.createObjectURL(e)}}})))},children:"Up to spin"})]}),F.map((function(e,t){return Object(m.jsx)("div",{className:"style-unset",children:Object(m.jsxs)("div",{className:"text-left row",children:[Object(m.jsxs)("span",{className:"font-size-14 text-left text-overflow-eclip col-9 align-self-center",children:[t+1," - ",e.name," - ",e.size," - ",e.type," "]}),Object(m.jsxs)("div",{className:"col-3",children:[t>0?Object(m.jsx)(b.a,{className:"margin-right-20",variant:"light",size:"sm",onClick:function(e){return function(e,t){var n=F[t];F[t]=F[t-1],F[t-1]=n,G()}(0,t)},children:String.fromCharCode(8593)},t+":up"):null,t<F.length-1?Object(m.jsx)(b.a,{className:"margin-right-20",variant:"light",size:"sm",onClick:function(e){return function(e,t){var n=F[t];F[t]=F[t+1],F[t+1]=n,G()}(0,t)},children:String.fromCharCode(8595)},t+":down"):null,Object(m.jsxs)(b.a,{variant:"danger",size:"sm",onClick:function(e){return function(e,t){F.splice(t,1),G()}(0,t)},children:[" ",String.fromCharCode(120)]},t+":del"),$(e)]})]},t+":#")},t)}))]})}),Object(m.jsx)("div",{style:{display:z?"block":"none"},className:"firework"}),Object(m.jsx)("div",{style:{display:z?"block":"none"},className:"firework"}),Object(m.jsx)("div",{style:{display:z?"block":"none"},className:"firework"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(49);var g=document.getElementById("root");if(null===g)throw new Error("Missing root");c.createRoot(g).render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(x,{})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.4ff87660.chunk.js.map