// AeroGuard — inicializador seguro (Parte 3)
// Si un módulo falla, el resto de la página sigue funcionando.
window.AG=window.AG||{};
(function(){
  function safe(name,fn){try{fn();}catch(e){console.warn('[AeroGuard] '+name+' no se inicializó:',e);}}
  document.addEventListener('DOMContentLoaded',function(){
    safe('Viewer',function(){ if(window.AG.Viewer&&AG.Viewer.init)AG.Viewer.init(); });
    safe('Radar',function(){ if(window.AG.Radar)AG.Radar.init(); });
    safe('Route',function(){ if(window.AG.Route)AG.Route.init(); });
    safe('UI',function(){ AG.reveal('.rv'); AG.counters(); });
  });
})();
