var i = 1 ;
// var color = '';
// $('td').click(function() {
//     var x = $(this).css('backgroundColor');
//     hexc(x);
//     alert(color);
// })
//
// function hexc(colorval) {
//     var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//     delete(parts[0]);
//     for (var i = 1; i <= 3; ++i) {
//         parts[i] = parseInt(parts[i]).toString(16);
//         if (parts[i].length == 1) parts[i] = '0' + parts[i];
//     }
//     color = '#' + parts.join('');
// }
//var player1 = prompt('Enter the name of Player1 and you represent blue');
var player1color = 'rgb(0, 82, 165)';
//var player2 = prompt('Enter the name of Player2 and you represent red');
var player2color = 'rgb(255, 66, 66)';
var game_start = true;
var table = $('table tr');
  $(document).ready(function(){
    $('.dot').click(function(){
      if(i<5000)
      {
        if(i%2==0)
        {
          if($(this).css('background-color') == 'rgb(187, 187, 187)')
          {
            $(this).css('background-color','blue')
            i++;
          }
          else {
            alert('choose another circle!');
          }
        }
        else {
          if($(this).css('background-color') == 'rgb(187, 187, 187)')
          {
            $(this).css('background-color','red')
            i++;
          }
          else {
            alert('choose another circle!');
          }
        }
      }
    });
  });
