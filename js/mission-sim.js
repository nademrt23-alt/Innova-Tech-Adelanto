// AeroGuard — simulación de misión (ilustrativa)
window.AG=window.AG||{};
AG.Mission=(function(){const steps=['Revisión previa completada','Despegue automático','Recorriendo waypoints','Zona sospechosa detectada por IA','Alerta georreferenciada enviada al mapa','Pendiente de verificación en campo'];let i=-1,timer,speed=1,running=false;
function set(i){document.getElementById('m-status').textContent='Paso '+(i+1)+': '+steps[i]+' — Simulación ilustrativa.';document.querySelectorAll('#m-steps span').forEach((s,k)=>s.classList.toggle('act',k===i));}
function next(){i++;if(i>=steps.length){running=false;return;}set(i);timer=setTimeout(next,2200/speed);}
return{start(){if(running)return;running=true;i=-1;next();},pause(){clearTimeout(timer);running=false;},speed(s){speed=s;},reset(){clearTimeout(timer);running=false;i=-1;document.getElementById('m-status').textContent='Presiona “Iniciar misión”.';document.querySelectorAll('#m-steps span').forEach(s=>s.classList.remove('act'));},skip(){this.reset();i=steps.length-1;set(i);}};})();
