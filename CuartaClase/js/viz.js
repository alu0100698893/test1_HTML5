$(document).ready(function(){
  var sample = 'digraph g { a -> b [label= "1"]; a -> c [label= "1"]; b -> b [label= "0"] ; c -> a [label= "0"]; c-> b [label= "1"]; a [color=red]; b [color=blue]; c [color=green];}';

  var options = {
    format: 'svg',
    engine: 'neato'
    // format: 'png-image-element'
  }

  var image = Viz(sample, options);
  var main = document.getElementById('main');

  main.innerHTML = image;        // SVG
});
