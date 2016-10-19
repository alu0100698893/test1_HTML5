$(document).ready(function(){
  var input = document.getElementById('datos');
  new Awesomplete(input, {
    list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"],
    minChars: 1,
    maxChars: 4,
    autoFirst: true
  });
});
