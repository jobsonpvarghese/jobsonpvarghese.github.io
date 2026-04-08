(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/MouseTrail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MouseTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
// components/MouseTrail.jsx
"use client";
;
function MouseTrail() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MouseTrail.useEffect": ()=>{
            const dots = [];
            const count = 20;
            for(let i = 0; i < count; i++){
                const dot = document.createElement("div");
                dot.style.cssText = `
        position: fixed;
        width: ${8 - i * 0.3}px;
        height: ${8 - i * 0.3}px;
        border-radius: 50%;
        background: #b45309;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i / count};
        transform: translate(-50%, -50%);
      `;
                document.body.appendChild(dot);
                dots.push({
                    el: dot,
                    x: 0,
                    y: 0
                });
            }
            let mouseX = 0;
            let mouseY = 0;
            const onMove = {
                "MouseTrail.useEffect.onMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
            }["MouseTrail.useEffect.onMove"];
            window.addEventListener("mousemove", onMove);
            let frame;
            const animate = {
                "MouseTrail.useEffect.animate": ()=>{
                    dots.forEach({
                        "MouseTrail.useEffect.animate": (dot, i)=>{
                            const prev = dots[i - 1];
                            if (i === 0) {
                                dot.x += (mouseX - dot.x) * 0.4;
                                dot.y += (mouseY - dot.y) * 0.4;
                            } else {
                                dot.x += (prev.x - dot.x) * 0.4;
                                dot.y += (prev.y - dot.y) * 0.4;
                            }
                            dot.el.style.left = dot.x + "px";
                            dot.el.style.top = dot.y + "px";
                        }
                    }["MouseTrail.useEffect.animate"]);
                    frame = requestAnimationFrame(animate);
                }
            }["MouseTrail.useEffect.animate"];
            animate();
            return ({
                "MouseTrail.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    cancelAnimationFrame(frame);
                    dots.forEach({
                        "MouseTrail.useEffect": (d)=>d.el.remove()
                    }["MouseTrail.useEffect"]);
                }
            })["MouseTrail.useEffect"];
        }
    }["MouseTrail.useEffect"], []);
    return null;
}
_s(MouseTrail, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MouseTrail;
var _c;
__turbopack_context__.k.register(_c, "MouseTrail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_MouseTrail_0n7rcha.js.map