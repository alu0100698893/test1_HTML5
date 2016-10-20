$(document).ready(function(){
  // Configuramos la librería jQuery Flip
  $('#card').flip({
    axis: 'z',                // 'x' para giro en eje X
    trigger: 'click',        // 'hover': giro sobre tarjeta
    speed: 500,                // Velocidad del giro
  });
});
