$(document).ready(function(){
  var sample = 'B-->C: Línea a rayas';

  var diagram = Diagram.parse(sample);

  diagram.drawSVG('diagram', {
      theme: 'hand'    // o 'simple' --> diagrama profesional, hand--> diagrama a mano
  });
});
