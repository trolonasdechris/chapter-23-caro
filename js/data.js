/* ===== CONTENIDO EDITABLE =====  Todo es texto de EJEMPLO: reemplázalo por el real. */
window.DATA={
 frase:"Una constelación hecha con nuestras partidas, nuestras risas, las canciones que nos recuerdan a ti y todo el cariño que no cabe en un chat.",
 // CARTAS: una por amiga. Cambia nombre, color y texto.
 cartas:[
  {de:"Amiga 1",color:"#d9a521",texto:"[EJEMPLO] Querida Caro:\n\nEscribe aquí tu carta."},
  {de:"Amiga 2",color:"#3aa0e8",texto:"[EJEMPLO] Querida Caro:\n\nEscribe aquí tu carta."},
  {de:"Amiga 3",color:"#e07aa8",texto:"[EJEMPLO] Querida Caro:\n\nEscribe aquí tu carta."}],
 // RECUERDOS: orden cronológico. media: lista de FOTOS y/o VIDEOS, ej: [{tipo:"imagen",src:"assets/images/a.jpg"},{tipo:"video",src:"assets/videos/b.mp4",poster:"assets/images/b.jpg"}]. Agrega más objetos para más estrellas.
 recuerdos:[
  {fecha:"Febrero 2023",titulo:"[Ejemplo] Nos conocimos",texto:"Describe el recuerdo real.",media:[]},
  {fecha:"2023",titulo:"[Ejemplo] Recuerdo 2",texto:"Texto editable.",media:[]},
  {fecha:"2023",titulo:"[Ejemplo] Recuerdo 3",texto:"Texto editable.",media:[]},
  {fecha:"2024",titulo:"[Ejemplo] Recuerdo 4",texto:"Texto editable.",media:[]},
  {fecha:"2024",titulo:"[Ejemplo] Recuerdo 5",texto:"Texto editable.",media:[]},
  {fecha:"2025",titulo:"[Ejemplo] Recuerdo 6",texto:"Texto editable.",media:[]},
  {fecha:"2025",titulo:"[Ejemplo] Recuerdo 7",texto:"Texto editable.",media:[]},
  {fecha:"2026",titulo:"[Ejemplo] Recuerdo 8",texto:"Texto editable.",media:[]},
  {fecha:"Diciembre 2026",titulo:"[Ejemplo] Recuerdo 9",texto:"Texto editable.",media:[]}],
 musica:{texto:"[EJEMPLO] Describe cómo la música es parte de su amistad: Christopher Vélez, Stray Kids, ATEEZ, CNCO...",
  // Pega aquí el enlace de tu playlist (cualquier enlace de "Compartir" de Spotify sirve, también el URI spotify:playlist:...)
  spotify:"",portada:""} /* portada: "assets/images/playlist.jpg" */,
 // MENSAJES (~10): agrega o edita.
 mensajes:Array.from({length:10},(_,i)=>({de:"Amig@ "+(i+1),texto:"[EJEMPLO] Feliz cumpleaños, Caro. Escribe aquí el mensaje real."})),
 mensajeJunto:"[EJEMPLO] Nuestro mensaje conjunto para Caro: amistad desde 2023, locuras, bromas internas, deseos para sus 23...",
 video:{poster:"",src:""}, // ej: src:"assets/videos/recap.mp4", poster:"assets/images/portada.jpg"
 felicitacion:"Caro, si algo tenemos claro es que la vida es mucho más bonita desde que coincidimos contigo. Ojalá este nuevo capítulo te regale tantas alegrías como las que tú nos has dado. Nos quedan muchísimas partidas, risas, locuras y recuerdos por crear. ¡Felices 23! Te amamos muchísimo.",
 // CÁPSULA DEL TIEMPO (la guarda el dragón)
 capsula:{
  dialogo:"Alto, viajera. Has encontrado un rincón secreto de este universo. Aquí se guarda algo que tres estrellas prepararon especialmente para ti.",
  carta:"[EJEMPLO] Carta secreta de las tres.",
  deseos:["[EJEMPLO] Deseo de Amiga 1","[EJEMPLO] Deseo de Amiga 2","[EJEMPLO] Deseo de Amiga 3"],
  futuro:"[EJEMPLO] Mensaje sobre las aventuras que nos quedan.",
  media:"", // video o audio sorpresa opcional: "assets/videos/sorpresa.mp4"
  cierre:"Esto no es el final de nuestra historia. Todavía nos quedan muchísimas aventuras por vivir juntas."},
 // ZORRITO: frases editables. Los apodos van aquí como bromas.
 zorro:{
  clics:["¡Hola, Caro! 🦊","¡Hop! 🦊","[Broma] ¡Tiesona! 😄"],
  frases:["Soy Zelev, tu compañero de aventuras. 🦊","¡Caro, este universo fue creado para ti!","¡Psst! Tienes tres cartas esperándote.","¿Ya descubriste todos los recuerdos?","¡No te olvides de escuchar nuestra playlist!","Tengo una sorpresa escondida para ti.","¡Feliz cumpleaños, Caro!","Tu aventura apenas comienza.","Hola, Calienta Pizzas 🍕","Pelona, ¿ya viste la estrella sospechosa?","DT DT DT 🎶"],
  pistas:["Creo que hay algo que todavía no has descubierto...","He visto una estrella bastante sospechosa por aquí.","No puedo contarte el secreto, pero alguien con alas sabe dónde está."],
  seccion:{cartas:"¡Abre los sobres!",recuerdos:"Toca las estrellas ✨",musica:"Dale play cuando quieras 🎧",mensajes:"Muchos quisieron saludarte.",final:"¡Lo mejor viene ahora!"}}
};
