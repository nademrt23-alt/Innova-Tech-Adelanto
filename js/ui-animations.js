// AeroGuard — animaciones UI (corregido: la intro no depende del evento load)
window.AG=window.AG||{};

// Oculta la intro en cuanto el DOM está listo, con respaldo de tiempo.
// Antes se usaba window.load, que se bloquea si el CDN de Three.js tarda o falla.
(function(){
  const hide=()=>{const el=document.getElementById('intro');if(el)el.classList.add('hide');};
  if(document.readyState!=='loading'){hide();}
  else{document.addEventListener('DOMContentLoaded',hide);}
  setTimeout(hide,3500); // respaldo: nunca dejar la intro pegada
})();

document.addEventListener('DOMContentLoaded',()=>{
  AG.reveal('.rv');AG.counters();
  const links=document.querySelectorAll('.nl a');
  window.addEventListener('scroll',()=>{let c='';document.querySelectorAll('section').forEach(s=>{if(scrollY>=s.offsetTop-150)c=s.id;});links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+c));});
  if(!AG.reduced&&window.innerWidth>900){window.addEventListener('mousemove',e=>{const g=document.getElementById('glow');if(g)g.style.transform=`translate(${e.clientX-350}px,${e.clientY-350}px)`;});}
  const ob=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)en.target.querySelectorAll('.pg .b i').forEach(b=>b.style.width=b.dataset.w+'%');}),{threshold:.2});
  document.querySelectorAll('.cd').forEach(c=>ob.observe(c));
});
