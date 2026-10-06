// AeroGuard — utilidades
window.AG=window.AG||{};
AG.hasWebGL=function(){try{const c=document.createElement('canvas');return !!(window.WebGLRenderingContext&&(c.getContext('webgl')||c.getContext('experimental-webgl')));}catch(e){return false;}};
AG.reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
AG.reveal=function(sel){const els=document.querySelectorAll(sel);if(AG.reduced||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('on'));return;}const ob=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('on');ob.unobserve(en.target);}}),{threshold:.12});els.forEach((e,i)=>{e.style.transitionDelay=(i%4)*70+'ms';ob.observe(e);});};
AG.counters=function(){document.querySelectorAll('[data-count]').forEach(el=>{const t=parseFloat(el.dataset.count);const o=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;o.disconnect();if(AG.reduced){el.textContent=t;return;}let v=0;const s=()=>{v+=t/40;if(v>=t){el.textContent=t;return;}el.textContent=Math.floor(v);requestAnimationFrame(s);};s();});o.observe(el);});
