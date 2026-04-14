(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6144,e=>{"use strict";var t=e.i(71645);e.s(["default",0,function(){return(0,t.useEffect)(()=>{let e,t=[];for(let e=0;e<20;e++){let n=document.createElement("div");n.style.cssText=`
        position: fixed;
        width: ${8-.3*e}px;
        height: ${8-.3*e}px;
        border-radius: 50%;
        background: #b45309;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1-e/20};
        transform: translate(-50%, -50%);
      `,document.body.appendChild(n),t.push({el:n,x:0,y:0})}let n=0,o=0,i=e=>{n=e.clientX,o=e.clientY};window.addEventListener("mousemove",i);let r=()=>{t.forEach((e,i)=>{let r=t[i-1];0===i?(e.x+=(n-e.x)*.4,e.y+=(o-e.y)*.4):(e.x+=(r.x-e.x)*.4,e.y+=(r.y-e.y)*.4),e.el.style.left=e.x+"px",e.el.style.top=e.y+"px"}),e=requestAnimationFrame(r)};return r(),()=>{window.removeEventListener("mousemove",i),cancelAnimationFrame(e),t.forEach(e=>e.el.remove())}},[]),null}])}]);