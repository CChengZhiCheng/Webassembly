function e(e){const t=[];for(let n=0;n<e.length;n++){const o=e[n];t.push({identifier:o.identifier,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,pageX:o.pageX,pageY:o.pageY})}return t}function t(e){const t=e.target;if(function(e){return-1!==n.indexOf(e.getAttribute("type"))}(t)){const e=function(e){const t=e.value,n=e.type;switch(n){case"date":case"month":case"week":return t;case"datetime-local":return 16===t.length?t+":00":t;case"time":return 5===t.length?t+":00":t}throw new Error(`Invalid element type '${n}'.`)}(t);return{value:e}}if(function(e){return e instanceof HTMLSelectElement&&"select-multiple"===e.type}(t)){const e=t;return{value:Array.from(e.options).filter((e=>e.selected)).map((e=>e.value))}}{const e=function(e){return!!e&&"INPUT"===e.tagName&&"checkbox"===e.getAttribute("type")}(t);return{value:e?!!t.checked:t.value}}}const n=["date","datetime-local","month","time","week"];let o=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function a(t,n){let o={target:{}};var a;if("mouse"===t?o=Object.assign(Object.assign({},o),{detail:(a=n).detail,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY,offsetX:a.offsetX,offsetY:a.offsetY,pageX:a.pageX,pageY:a.pageY,button:a.button,buttons:a.buttons,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey,metaKey:a.metaKey,type:a.type}):"touch"===t&&(o=Object.assign(Object.assign({},o),function(t){return{detail:t.detail,touches:e(t.touches),targetTouches:e(t.targetTouches),changedTouches:e(t.changedTouches),ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,type:t.type}}(n))),n.target){const e=n.target,t=e.getAttributeNames().find((e=>e.startsWith("_bl_")));t?(o.target.elementReferenceId=t,o.target.selector=`[${t}]`):o.target.selector=function(e){if(e instanceof Element){for(var t=[];e.nodeType===Node.ELEMENT_NODE;){var n=e.nodeName.toLowerCase();if(e.id){n+="#"+e.id,t.unshift(n);break}for(var o=e,a=1;o=o.previousElementSibling;)o.nodeName.toLowerCase()==n&&a++;1!=a&&(n+=":nth-of-type("+a+")"),t.unshift(n),e=e.parentNode}return t.join(" > ")}}(e),o.target.class=e.getAttribute("class")}return o}function i(e,n,o,i){e&&n&&(function(e,t){e.addEventListener("click",(e=>{if(!s(e,"click")){var n=a("mouse",e);t.invokeMethodAsync("OnClick",n)}}))}(n,o),function(e,t){e.addEventListener("mouseup",(e=>{if(!s(e,"mouseup")){var n=a("mouse",e);t.invokeMethodAsync("OnMouseUp",n)}}))}(n,o),e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&function(e,n,o){let a,i=!1;e.addEventListener("compositionstart",(e=>{i=!0})),e.addEventListener("compositionend",(o=>{i=!1;const a=t(o);a.value=e.value,-1!==e.maxLength&&a.value.length>e.maxLength&&(a.value=a.value.substring(0,e.maxLength)),n.invokeMethodAsync("OnInput",a)})),e.addEventListener("input",(r=>{if(!i){var s=t(r);if("number"===r.target.type){const t=r.target.value,n=r.target.valueAsNumber;t&&t!==n.toString()&&(e.value=isNaN(n)?"":n.toString())}clearTimeout(a),a=setTimeout((()=>{n.invokeMethodAsync("OnInput",s)}),o)}}))}(e,o,i))}function r(e,t){e&&(e.value=t)}function s(e,t){const n=["_blazorEvents_1","stopPropagationFlags",t];let o=e.composedPath()[0],a=0;for(;o[n[a]];)o=o[n[a]],a++;return a==n.length&&"boolean"==typeof o&&o}Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});export{i as registerInputEvents,r as setValue};
//# sourceMappingURL=input.js.map
