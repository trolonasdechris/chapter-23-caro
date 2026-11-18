const $=s=>document.querySelector(s),D=DATA;
/* Cielo estrellado (canvas) */
const cv=$('#sky'),cx=cv.getContext('2d');let S=[];const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function rs(){cv.width=innerWidth;cv.height=innerHeight;S=Array.from({length:130},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.6+.3,p:Math.random()*6}))}
function dr(t){cx.clearRect(0,0,cv.width,cv.height);S.forEach((s,i)=>{cx.globalAlpha=.5+.5*Math.sin(t/900+s.p);cx.fillStyle=i%9?'#fff':'#ffe3a1';cx.beginPath();cx.arc(s.x,s.y,s.r+(i%9?0:.8),0,7);cx.fill()});
 cx.strokeStyle='#5ad1ff';cx.lineWidth=1;for(let i=0;i<48;i++)for(let j=i+1;j<48;j++){const a=S[i],b=S[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<170){cx.globalAlpha=.22*(1-d/170);cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
 if(!rm)requestAnimationFrame(dr)}
addEventListener('resize',rs);rs();requestAnimationFrame(dr);
/* Modal */
let onClose=null;
window.openModal=(html,cb)=>{$('#modalBody').innerHTML=html;$('#modal').hidden=false;onClose=cb};
function closeModal(){$('#modal').hidden=true;$('#modalBody').innerHTML='';if(onClose)onClose();onClose=null}
$('#close').onclick=closeModal;$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()};
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
/* Portada */
$('#frase').textContent='«'+D.frase+'»';
$('#start').onclick=()=>{$('#universo').classList.add('show');$('#cartas').scrollIntoView({behavior:'smooth'});say('¡Caro, este universo fue creado para ti!')};
setTimeout(()=>say('¡Hola! Soy Zelev, el zorrito de Caro 🦊'),1200);
/* Cartas */
D.cartas.forEach(c=>{const b=document.createElement('button');b.className='env';b.style.setProperty('--c',c.color);b.textContent='💌 '+c.de;
 b.onclick=()=>{openModal(`<h3>De: ${c.de}</h3>${paper(c.texto)}<button class="btn" onclick="document.getElementById('close').click()">Cerrar carta</button>`);say('Qué bonito 💜')};$('#sobres').appendChild(b)});
/* Constelación */
(function(){const box=$('#constel'),n=D.recuerdos.length,cols=['#5ad1ff','#2de2d0','#ffe3a1','#b48bff'],yrs=[...new Set(D.recuerdos.map(r=>r.fecha.match(/\d{4}/)[0]))];
 const pts=D.recuerdos.map((_,i)=>({x:12+(i%2?66:20)+Math.sin(i)*6,y:5+i*(88/Math.max(n-1,1))}));
 let l='';pts.forEach((p,i)=>{if(i)l+=`<line x1="${pts[i-1].x}%" y1="${pts[i-1].y}%" x2="${p.x}%" y2="${p.y}%" stroke="#5ad1ff" stroke-opacity=".5" stroke-width="2" stroke-dasharray="6 6"/>`});
 box.innerHTML=`<svg>${l}</svg>`;
 D.recuerdos.forEach((r,i)=>{const b=document.createElement('button');b.className='star';b.style.cssText=`left:${pts[i].x}%;top:${pts[i].y}%;--c:${cols[yrs.indexOf(r.fecha.match(/\d{4}/)[0])%4]}`;b.setAttribute('aria-label',r.titulo);b.innerHTML=`<span>${r.fecha}</span>`;
  b.onclick=()=>{openModal(`<small>${r.fecha}</small><h3>${r.titulo}</h3><p>${r.texto}</p>${mediaHTML(r.media)}`);sparks(b.getBoundingClientRect().left,b.getBoundingClientRect().top);say('¡Qué recuerdo! ✨')};box.appendChild(b)})})();
/* Spotify (carga bajo demanda) */
$('#musicaTxt').textContent=D.musica.texto;
const sp=(D.musica.spotify||D.musica.spotifyEmbed||'').trim(),mt=sp.match(/(playlist|album|track|artist|show|episode)[\/:]([A-Za-z0-9]+)/);
$('#spotify').innerHTML=mt?`<iframe loading="lazy" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Playlist de Spotify" src="https://open.spotify.com/embed/${mt[1]}/${mt[2]}?utm_source=generator"></iframe><p><a class="sl" target="_blank" rel="noopener" href="https://open.spotify.com/${mt[1]}/${mt[2]}">Abrir en Spotify</a></p>`:'<div class="spph">🎧 Aquí aparecerá la previsualización de la playlist cuando pegues el enlace en <code>js/data.js</code> → <code>musica.spotify</code></div>';
/* Mensajes */
D.mensajes.forEach((m,i)=>{const b=document.createElement('button');b.className='env';b.style.setProperty('--c',['#3a7bd5','#1fa8a0','#7a4fd0','#3aa0e8'][i%4]);b.style.animationDelay=(i*.4)+'s';b.textContent='✉ '+m.de;
 b.onclick=()=>{openModal(`<h3>De: ${m.de}</h3>${paper(m.texto)}`);say('¡Otro mensaje para ti! 💌')};$('#msgs').appendChild(b)});
/* Final */
const mj=$('#mensajeJunto'),full=D.mensajeJunto;let shown=false;
new IntersectionObserver(([e])=>{if(e.isIntersecting&&!shown){shown=true;if(rm){mj.textContent=full;return}let i=0;const iv=setInterval(()=>{mj.textContent=full.slice(0,++i);if(i>=full.length)clearInterval(iv)},25)}}).observe(mj);
$('#felicitacion').textContent='«'+D.felicitacion+'»';
const vb=$('#videoBox');vb.innerHTML=`<div class="vid" role="button" tabindex="0">${D.video.poster?`<img loading="lazy" src="${D.video.poster}" alt="Recap">`:'<img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=">'}<div class="play">▶</div></div>`;
const vd=vb.firstChild,pv=()=>{if(!D.video.src)return say('Aquí irá el video de las tres 🎬');vd.innerHTML=`<video controls autoplay playsinline src="${D.video.src}"></video>`;vd.onclick=null};vd.onclick=pv;vd.onkeydown=e=>{if(e.key==='Enter')pv()};
$('#celebrar').onclick=()=>celebrar();
/* Navegación */
$('#burger').onclick=()=>$('#nav').classList.toggle('open');$('#links').onclick=()=>$('#nav').classList.remove('open');
$('#links').addEventListener('click',e=>{if(e.target.tagName==='A')$('#universo').classList.add('show')});
const links=[...document.querySelectorAll('#links a')],secs=links.map(a=>$(a.hash));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id));const k=D.zorro.seccion[e.target.id];if(k)say(k)}}),{threshold:.5});secs.forEach(s=>io.observe(s));
addEventListener('scroll',()=>{const h=document.documentElement;$('#progress').style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%';$('#top').style.display=scrollY>600?'block':'none'},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
setTimeout(()=>{setInterval(()=>say(D.zorro.pistas[Math.floor(Math.random()*3)],4500),45000)},30000);
