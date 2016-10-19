$(document).ready(function(){
  $('.editor').trumbowyg({
    svgPath: '/CURSO_HTML5_Avanz/PrimeraClase/TerceraClase/icons.svg',
    lang: 'es', // Idioma (es.min.js incluido)
    btns: [
          ['bold', 'italic', 'underline', 'strikethrough'],
          ['superscript', 'subscript'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['link', 'insertImage'],
          ['horizontalRule', 'removeformat'],
          ['viewHTML'],
          ['fullscreen']
        ],

  });
  $('#trumbowyg').trumbowyg('html'); // Obtienes el HTML generado


});
