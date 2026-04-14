module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},24725,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},43285,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/dynamic-access-async-storage.external.js",()=>require("next/dist/server/app-render/dynamic-access-async-storage.external.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},6441,a=>{"use strict";var b=a.i(72131);a.s(["default",0,function(){return(0,b.useEffect)(()=>{let a,b=[];for(let a=0;a<20;a++){let c=document.createElement("div");c.style.cssText=`
        position: fixed;
        width: ${8-.3*a}px;
        height: ${8-.3*a}px;
        border-radius: 50%;
        background: #b45309;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1-a/20};
        transform: translate(-50%, -50%);
      `,document.body.appendChild(c),b.push({el:c,x:0,y:0})}let c=0,d=0,e=a=>{c=a.clientX,d=a.clientY};window.addEventListener("mousemove",e);let f=()=>{b.forEach((a,e)=>{let f=b[e-1];0===e?(a.x+=(c-a.x)*.4,a.y+=(d-a.y)*.4):(a.x+=(f.x-a.x)*.4,a.y+=(f.y-a.y)*.4),a.el.style.left=a.x+"px",a.el.style.top=a.y+"px"}),a=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("mousemove",e),cancelAnimationFrame(a),b.forEach(a=>a.el.remove())}},[]),null}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0in9e.s._.js.map