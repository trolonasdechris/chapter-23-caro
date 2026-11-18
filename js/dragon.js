/* Chimuelo, guardián de la cápsula del tiempo. Se sienta sobre la tarjeta (no vuela). Contenido en DATA.capsula */
(function(){
const C=DATA.capsula,star=document.getElementById('secretStar');
const chim='<img class="chim" src="assets/dragon/chimuelo.png" alt="Chimuelo, el dragón guardián">';
star.addEventListener('click',()=>{
 openModal(`${chim}<h3>Chimuelo, guardián del universo</h3><p>${C.dialogo}</p><button class="btn" id="secret">Descubrir el secreto</button>`,()=>sparks(innerWidth/2,innerHeight/2,['✦','⭐','✨']));
 sparks(innerWidth/2,innerHeight/3,['✦','⭐','✨']);
 document.getElementById('secret').onclick=abrir});
function abrir(){const b=document.getElementById('modalBody');
 b.innerHTML=`${chim}<h3>✨ La cápsula del tiempo ✨</h3><div class="oe"><div class="flap"></div><div class="paper">${C.carta}</div></div><h4>Tres deseos</h4>${C.deseos.map(x=>`<p>🌟 ${x}</p>`).join('')}<p>${C.futuro}</p>${C.media?(/\.(mp3|wav|ogg)$/i.test(C.media)?`<audio controls preload="none" src="${C.media}"></audio>`:`<video controls preload="none" src="${C.media}" style="width:100%"></video>`):''}<p class="big">${C.cierre}</p>`;
 sparks(innerWidth/2,innerHeight/2,['⭐','✨','✦'])}
})();
