$(document).ready(function(){
  var sample = 'digraph g { a -> b; a -> c; b -> b ; c -> a; c-> b; }';

  var options = {
    format: 'svg'
    // format: 'png-image-element'
  }

  var image = Viz(sample, options);
  var main = document.getElementById('main');

  main.innerHTML = image;        // SVG
});
