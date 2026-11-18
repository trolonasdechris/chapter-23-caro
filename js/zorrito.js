/* Zorrito: SVG propio, globos de diálogo, clics y celebración. Textos en data.js */
(function(){
const Z=DATA.zorro,fox=document.getElementById('fox'),bub=document.getElementById('bubble');let n=0,t;
fox.innerHTML=`<svg viewBox="0 0 100 100"><g class="tail"><path d="M20 70Q0 60 8 38Q30 48 34 66Z" fill="#ff8a3d"/><path d="M8 38Q12 44 14 48Q8 46 8 38Z" fill="#fff"/></g>
<ellipse cx="55" cy="72" rx="26" ry="18" fill="#ff8a3d"/><path d="M30 44L34 14L50 30Q60 28 70 30L86 14L90 44Q94 66 60 74Q26 66 30 44Z" fill="#ff8a3d"/>
<path d="M44 62Q60 90 76 62Q60 70 44 62Z" fill="#fff"/><circle cx="48" cy="50" r="4" fill="#1b1340"/><circle cx="72" cy="50" r="4" fill="#1b1340"/><circle cx="49.5" cy="48.5" r="1.4" fill="#fff"/><circle cx="73.5" cy="48.5" r="1.4" fill="#fff"/>
<ellipse cx="60" cy="60" rx="4" ry="3" fill="#1b1340"/><circle cx="40" cy="60" r="4" fill="#ffe3a188"/><circle cx="80" cy="60" r="4" fill="#ffe3a188"/><path d="M60 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff6a8"/></svg>`;
window.say=function(m,ms=3800){bub.textContent=m;bub.classList.add('on');clearTimeout(t);t=setTimeout(()=>bub.classList.remove('on'),ms)};
window.sparks=function(x,y,list=['⭐','💜','✨']){for(let i=0;i<10;i++){const s=document.createElement('span');s.className='spark';s.textContent=list[i%list.length];s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--dx',(Math.random()*240-120)+'px');s.style.setProperty('--dy',(Math.random()*-200-20)+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),1300)}};
fox.addEventListener('click',()=>{n++;fox.classList.remove('jump');void fox.offsetWidth;
 if(n===1)say(Z.clics[0]);else if(n===2){fox.classList.add('jump');say(Z.clics[1])}else if(n===3)say(Z.clics[2]);
 else{const r=fox.getBoundingClientRect();sparks(r.left,r.top);say(Math.random()<.4?Z.pistas[Math.floor(Math.random()*3)]:Z.frases[Math.floor(Math.random()*Z.frases.length)])}});
document.getElementById('hideFox').addEventListener('click',e=>{const h=fox.style.display==='none';fox.style.display=h?'':'none';if(!h)bub.classList.remove('on');e.target.textContent=h?'🦊✕':'🦊+'});
window.celebrar=function(){fox.classList.add('jump');const r=fox.getBoundingClientRect();for(let i=0;i<4;i++)setTimeout(()=>sparks(r.left,r.top,['🎉','⭐','💖','✨']),i*300);say('¡Feliz cumpleaños, Caro! 🎂',5000)};
})();
