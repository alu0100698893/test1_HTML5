$(document).ready(function(){
  var data = {
    labels: ['CYA', 'LPP', 'IA', 'AEDA', 'GPI', 'SOA'],
    series: [{
              data: [20, 10, 8, 9, 1, 15]
            }]
  };

  var options = {}

  new Chartist.Line('.chart', data, options);
});
