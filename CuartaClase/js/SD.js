$(document).ready(function(){
  var sample = 'Title:Diagrama Pro \n C-->A Liena a rayas \s C->>D: Línea con flecha hueca \t A->C: Uno \n B->C: Dos';


  var diagram = Diagram.parse(sample );

  diagram.drawSVG('diagram', {
      theme: 'hand'    // o 'simple' --> diagrama profesional, hand--> diagrama a mano
  });
});
