$(document).ready(function(){
  var data = {
    //labels: ['Oscar', 'Moi', 'Alex', 'Ale', 'Noel', 'Alber'],
    series: [data: [20, 10, 8, 9, 1, 15]
        //     {data: [5, 10, 12, 6, 2, 0]},
        //     {data: [4, 6, 17, 4, 3, 2]}] //ct_series-a...z clase por defecto que se asigna a la linea
  }

  var options = {
     donut: true, //hace de la grafica como un donut
     donutWidth: 40, //tamaño del grosor del donut
     startAngle: 270, //donde empieza la funcion
     total: 200 //donde acaba
  }

  new Chartist.Pie('.chart', data, options);
});
