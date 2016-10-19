$(document).ready(function(){
// Nuevo waypoint
  var waypoint = new Waypoint({
    // Elemento objetivo
    element: document.getElementById('tres'),
    // Función disparada
    handler: function(direction) {
      console.log('¡Has pasado por aquí!');
      if (direction == 'down') {
        console.log('¡Hacia abajo!'); //esto nos enseaña el mensaje por consola
        this.destroy();
        alert('Hacia abajo'); //nos muestra una alerta visual diciendo que hemos llegado
      }
    }
  });
});
