/* Extras: sobres con solapa, media (foto/video), zorrito caminando/durmiendo, secretos, planetas, dragón de fondo */
const Q=s=>document.querySelector(s);
window.paper=t=>`<div class="oe"><div class="flap"></div><div class="paper">${t}</div></div>`;
window.mediaHTML=(l=[])=>l.length?l.map(m=>m.tipo==='video'?`<video class="mm" controls preload="none" playsinline ${m.poster?`poster="${m.poster}"`:''} src="${m.src}"></video>`:`<img class="mm" loading="lazy" src="${m.src}" alt="${m.alt||''}">`).join(''):'<p class="empty">[Aquí irá una foto o un video de este recuerdo]</p>';
const rmo=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* Zorrito junto a los sobres */
const fox=Q('#fox'),fi=Q('#foxInv');fi.innerHTML=fox.innerHTML;fi.onclick=()=>say('¡Abre los sobres, Caro! 💌');
/* Zorrito: ojos cerrados + caminar + dormir */
fox.querySelector('svg').insertAdjacentHTML('beforeend','<g class="zz"><rect x="42" y="44" width="12" height="11" fill="#ff8a3d"/><rect x="66" y="44" width="12" height="11" fill="#ff8a3d"/><path d="M44 51Q48 55 52 51M68 51Q72 55 76 51" stroke="#1b1340" fill="none" stroke-width="2"/></g>');
let idle=0;const wake=()=>{idle=0;if(fox.classList.contains('sleep')){fox.classList.remove('sleep');say('¡Ah! Me despertaste 🦊')}};
['click','scroll','keydown','touchstart'].forEach(e=>addEventListener(e,wake,{passive:true}));
if(!rmo)setInterval(()=>{idle++;if(idle===14&&!fox.classList.contains('sleep')){fox.classList.add('sleep');say('Zzz… 💤',2500)}
 if(idle>0&&idle%25===0&&!fox.classList.contains('sleep')){fox.classList.add('walk');setTimeout(()=>fox.classList.remove('walk'),7000)}},2000);
/* Estrella secreta dentro de la sección de recuerdos */
Q('#constel').appendChild(Q('#secretStar'));
/* Planetas con parallax y estrellas fugaces */
if(!rmo){ setInterval(()=>{const s=document.createElement('i');s.className='shoot';s.style.left=(40+Math.random()*55)+'vw';s.style.top=(Math.random()*40)+'vh';document.body.appendChild(s);setTimeout(()=>s.remove(),1300)},6000)}
/* Mundo (tono de aurora) por sección */
const hue={portada:0,cartas:40,recuerdos:-30,musica:90,mensajes:150,secretos:-60,final:20};
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.body.style.setProperty('--hue',(hue[e.target.id]||0)+'deg')}),{threshold:.5}).observe&&document.querySelectorAll('.sec').forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.body.style.setProperty('--hue',(hue[s.id]||0)+'deg')}),{threshold:.5}).observe(s));
/* Playlist: portada, ondas */
const dsc=Q('.disc');if(DATA.musica.portada){const im=document.createElement('img');im.className='cover';im.alt='Portada de la playlist';im.src=DATA.musica.portada;dsc.replaceWith(im)}
Q('#musicaTxt').insertAdjacentHTML('afterend','<div class="waves" aria-hidden="true">'+Array.from({length:14},(_,i)=>`<i style="animation-delay:${i*.12}s"></i>`).join('')+'</div>');
/* Aparición sorpresa del zorrito en recuerdos */
let pop=0;new IntersectionObserver(([e])=>{if(e.isIntersecting&&!pop){pop=1;setTimeout(()=>say(DATA.zorro.pistas[1],4500),5000)}},{threshold:.6}).observe(Q('#recuerdos'));
