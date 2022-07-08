import{S as H,i as M,s as N,e as w,k as q,t as x,c as y,a as E,m as I,h as C,d as k,b as p,L as z,g as b,G as v,j as L,M as T,x as B,y as D,z as K,r as $,p as S,C as O,N as R,O as j,H as U,q as V,P as F,o as J}from"../chunks/index-2934edaa.js";import{s as Q}from"../chunks/index-45f38a8c.js";function W(n){let t,a,r,l,c,u,d=n[0].id+"",h,s,g=n[0].name+"",e,i,o,m;return{c(){t=w("a"),a=w("img"),c=q(),u=w("h2"),h=x(d),s=x(". "),e=x(g),this.h()},l(f){t=y(f,"A",{class:!0,href:!0});var _=E(t);a=y(_,"IMG",{class:!0,src:!0,alt:!0}),c=I(_),u=y(_,"H2",{class:!0});var P=E(u);h=C(P,d),s=C(P,". "),e=C(P,g),P.forEach(k),_.forEach(k),this.h()},h(){p(a,"class","h-40 w-40"),z(a.src,r=n[0].image)||p(a,"src",r),p(a,"alt",l=n[0].name),p(u,"class","capitalize text-2xl"),p(t,"class","border-2 border-blue-300 hover:scale-105 p-6 bg-gray-50 text-gray-800 dark:bg-slate-800 dark:text-gray-100 dark:border-2 dark:border-black text-center rounded-lg shadow-md hover:shadow-xl flex flex-col items-center"),p(t,"href",i=`/pokemon/${n[0].id}`)},m(f,_){b(f,t,_),v(t,a),v(t,c),v(t,u),v(u,h),v(u,s),v(u,e),m=!0},p(f,[_]){(!m||_&1&&!z(a.src,r=f[0].image))&&p(a,"src",r),(!m||_&1&&l!==(l=f[0].name))&&p(a,"alt",l),(!m||_&1)&&d!==(d=f[0].id+"")&&L(h,d),(!m||_&1)&&g!==(g=f[0].name+"")&&L(e,g),(!m||_&1&&i!==(i=`/pokemon/${f[0].id}`))&&p(t,"href",i)},i(f){m||(o&&o.end(1),m=!0)},o(f){o=T(t,Q,{}),m=!1},d(f){f&&k(t),f&&o&&o.end()}}}function X(n,t,a){let{pokeman:r}=t;return n.$$set=l=>{"pokeman"in l&&a(0,r=l.pokeman)},[r]}class Y extends H{constructor(t){super(),M(this,t,X,W,N,{pokeman:0})}}function A(n,t,a){const r=n.slice();return r[4]=t[a],r}function G(n){let t,a;return t=new Y({props:{pokeman:n[4]}}),{c(){B(t.$$.fragment)},l(r){D(t.$$.fragment,r)},m(r,l){K(t,r,l),a=!0},p(r,l){const c={};l&2&&(c.pokeman=r[4]),t.$set(c)},i(r){a||($(t.$$.fragment,r),a=!0)},o(r){S(t.$$.fragment,r),a=!1},d(r){O(t,r)}}}function Z(n){let t,a,r,l,c,u,d,h=n[1],s=[];for(let e=0;e<h.length;e+=1)s[e]=G(A(n,h,e));const g=e=>S(s[e],1,1,()=>{s[e]=null});return{c(){t=q(),a=w("input"),r=q(),l=w("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){R('[data-svelte="svelte-1lzasiu"]',document.head).forEach(k),t=I(e),a=y(e,"INPUT",{class:!0,type:!0,placeholder:!0}),r=I(e),l=y(e,"DIV",{class:!0});var o=E(l);for(let m=0;m<s.length;m+=1)s[m].l(o);o.forEach(k),this.h()},h(){document.title="Svelte Kit Pokedex",p(a,"class","w-full rounded-md text-lg p-4 mt-4 border-2 border-gray-200 dark:bg-slate-800 dark:text-gray-100 dark:border-black"),p(a,"type","text"),p(a,"placeholder","Search Pokemon"),p(l,"class","py-4 grid gap-4 md:grid-cols-2 grid-cols-1")},m(e,i){b(e,t,i),b(e,a,i),j(a,n[0]),b(e,r,i),b(e,l,i);for(let o=0;o<s.length;o+=1)s[o].m(l,null);c=!0,u||(d=U(a,"input",n[3]),u=!0)},p(e,[i]){if(i&1&&a.value!==e[0]&&j(a,e[0]),i&2){h=e[1];let o;for(o=0;o<h.length;o+=1){const m=A(e,h,o);s[o]?(s[o].p(m,i),$(s[o],1)):(s[o]=G(m),s[o].c(),$(s[o],1),s[o].m(l,null))}for(J(),o=h.length;o<s.length;o+=1)g(o);V()}},i(e){if(!c){for(let i=0;i<h.length;i+=1)$(s[i]);c=!0}},o(e){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)S(s[i]);c=!1},d(e){e&&k(t),e&&k(a),e&&k(r),e&&k(l),F(s,e),u=!1,d()}}}async function re({params:n}){return{props:{pokemon:(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=251")).json()).results.map((c,u)=>({name:c.name,id:u+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${u+1}.png`}))}}}function ee(n,t,a){let{pokemon:r}=t,l="",c=[];function u(){l=this.value,a(0,l)}return n.$$set=d=>{"pokemon"in d&&a(2,r=d.pokemon)},n.$$.update=()=>{n.$$.dirty&5&&(l?a(1,c=r.filter(d=>d.name.toLowerCase().includes(l.toLowerCase()))):a(1,c=[...r]))},[l,c,r,u]}class oe extends H{constructor(t){super(),M(this,t,ee,Z,N,{pokemon:2})}}export{oe as default,re as load};