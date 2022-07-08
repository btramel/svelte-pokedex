import"./index-2934edaa.js";function y(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function m(t){const o=t-1;return o*o*o+1}function b(t,{delay:o=0,duration:s=400,easing:r=y,amount:e=5,opacity:a=0}={}){const n=getComputedStyle(t),c=+n.opacity,i=n.filter==="none"?"":n.filter,u=c*(1-a);return{delay:o,duration:s,easing:r,css:(p,f)=>`opacity: ${c-u*f}; filter: ${i} blur(${f*e}px);`}}function d(t,{delay:o=0,duration:s=400,easing:r=m,start:e=0,opacity:a=0}={}){const n=getComputedStyle(t),c=+n.opacity,i=n.transform==="none"?"":n.transform,u=1-e,p=c*(1-a);return{delay:o,duration:s,easing:r,css:(f,l)=>`
			transform: ${i} scale(${1-u*l});
			opacity: ${c-p*l}
		`}}export{b,d as s};
