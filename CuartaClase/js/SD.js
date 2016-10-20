$(document).ready(function(){
  var sample = 'Title: Esto es un título';

  var diagram = Diagram.parse(sample);

  diagram.drawSVG('diagram', {
      theme: 'hand'    // o 'simple' --> diagrama profesional, hand--> diagrama a mano
  });
});
