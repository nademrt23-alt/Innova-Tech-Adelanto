// AeroGuard — visor 3D
window.AG=window.AG||{};
AG.Viewer=(function(){let viewers=[],spinning=true,exploded=false,compare=false,cardEl;
function make(container,version){if(!AG.hasWebGL()){container.innerHTML='<div class="fallback3d"><h4>Vista 3D no disponible</h4><p>Tu navegador no soporta WebGL. Eco: cámara, GPS, sensor de partículas y batería. Pro: gimbal, RTK, telemetría y luces.</p></div>';return null;}
const scene=new THREE.Scene();const cam=new THREE.PerspectiveCamera(45,container.clientWidth/container.clientHeight,.1,100);cam.position.set(3,2.2,3.4);cam.lookAt(0,0,0);
const ren=new THREE.WebGLRenderer({antialias:true,alpha:true});ren.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<768?1.5:2));ren.setSize(container.clientWidth,container.clientHeight);container.appendChild(ren.domElement);
scene.add(new THREE.HemisphereLight(0xbfd4ff,0x0a0f14,.9));const dir=new THREE.DirectionalLight(0xffffff,.85);dir.position.set(4,6,3);scene.add(dir);
const sh=new THREE.Mesh(new THREE.CircleGeometry(1.5,32),new THREE.MeshBasicMaterial({color:0,transparent:true,opacity:.28}));sh.rotation.x=-Math.PI/2;sh.position.y=-.85;scene.add(sh);
const built=AG.createDrone({version});scene.add(built.group);
const hs=built.hotspots.map((h,i)=>{const b=document.createElement('button');b.className='hs';b.textContent=i+1;b.setAttribute('aria-label',h.name+'. '+h.info);b.addEventListener('click',()=>show(h,b));container.appendChild(b);return{el:b,hot:h};});
let th=.8,ph=1.1,rad=5,drag=false,lx=0,ly=0;
container.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;ly=e.clientY;});window.addEventListener('pointerup',()=>drag=false);
container.addEventListener('pointermove',e=>{if(!drag)return;th-=(e.clientX-lx)*.008;ph=Math.max(.4,Math.min(1.45,ph-(e.clientY-ly)*.006));lx=e.clientX;ly=e.clientY;});
container.addEventListener('wheel',e=>{e.preventDefault();rad=Math.max(2.6,Math.min(9,rad+e.deltaY*.004));},{passive:false});
let raf;const clock=new THREE.Clock();
function animate(){raf=requestAnimationFrame(animate);const t=clock.getElapsedTime();if(spinning&&!AG.reduced&&!drag)th+=.0035;cam.position.set(rad*Math.sin(ph)*Math.cos(th),rad*Math.cos(ph),rad*Math.sin(ph)*Math.sin(th));cam.lookAt(0,0,0);built.group.userData.props.forEach(p=>p.rotation.y+=p.userData.spin*.5);if(built.group.userData.nav)built.group.userData.nav.forEach((l,i)=>l.material.emissiveIntensity=.6+.4*Math.sin(t*3+i));built.group.position.y=exploded?.4:0;const v=new THREE.Vector3();hs.forEach(h=>{h.hot.obj.getWorldPosition(v);v.project(cam);h.el.style.left=((v.x*.5+.5)*container.clientWidth)+'px';h.el.style.top=((-v.y*.5+.5)*container.clientHeight)+'px';h.el.classList.toggle('back',v.z>1);});ren.render(scene,cam);}
animate();const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)cancelAnimationFrame(raf);else if(!raf)animate();}),{threshold:.05});io.observe(container);return{container,built,ren,scene,cam};}
function show(h,btn){cardEl=document.getElementById('hotspot-card');cardEl.innerHTML='<h5>'+h.name+'</h5><p>'+h.info+'</p><span class="tag">'+h.tag+'</span>';cardEl.classList.remove('hidden');const r=btn.getBoundingClientRect();cardEl.style.left=Math.min(window.innerWidth-340,r.left)+'px';cardEl.style.top=(r.bottom+10)+'px';}
function init(){const e=make(document.getElementById('viewer-eco'),'eco');const p=make(document.getElementById('viewer-pro'),'pro');viewers=[e,p].filter(Boolean);}
function setVersion(v){document.getElementById('viewer-eco').classList.toggle('hidden',v!=='eco');document.getElementById('viewer-pro').classList.toggle('hidden',v!=='pro');}
function toggleCompare(){compare=!compare;document.getElementById('viewer-wrap').classList.toggle('compare',compare);document.getElementById('viewer-pro').classList.toggle('hidden',!compare);}
function toggleExplode(){exploded=!exploded;}
function reset(){exploded=false;viewers.forEach(v=>v.cam.position.set(3,2.2,3.4));}
function toggleSpin(){spinning=!spinning;}
document.addEventListener('DOMContentLoaded',init);
return{setVersion,toggleCompare,toggleExplode,reset,toggleSpin};})();
