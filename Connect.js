var i = 1 ;
var color;
var col;
var row;

//dont display the table at begginning
$(document).ready(function() {
  $('table').css('display','none');
});

//display the table after start has been clicked
$(document).ready(function(){
  $('#Start').click(function(){
    $('table').css('display','block');
  });
});

//Restart the game
$(document).ready(function(){
  $('#Restart').click(function(){
    $('.dot').css('background-color','#bbb');
    $('#announce_winner').html('');
  });
});

function colorMatch(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(187, 187, 187)' && one !== undefined);
}

function returncolor(rowindex,colindex)
{
  return table.eq(rowindex).find('td').eq(colindex).css('background-color');
}

function Verticalcheck() {
  for(var rowindex = 0;rowindex<7;rowindex++)
  {
    for(var colindex = 0;colindex<7;colindex++)
    {
      if(colorMatch(returncolor(rowindex,colindex),returncolor(rowindex,colindex+1),returncolor(rowindex,colindex+2),returncolor(rowindex,colindex+3)))
      {
        return true;
      }
        
      else{
        continue;
      }
    }
  }
}

function HorizontalCheck()
{
for(var rowindex = 0;rowindex<7;rowindex++)
  {
    for(var colindex = 0;colindex<7;colindex++)
    {
      if(colorMatch(returncolor(rowindex,colindex),returncolor(rowindex+1,colindex),returncolor(rowindex+2,colindex),returncolor(rowindex+3,colindex))){
        return true;
      }
      else{
        continue;
      }
    }
  }
}

function diagonalCheck()
{
  for(var rowindex = 0;rowindex<7;rowindex++)
  {
    for(var colindex = 0;colindex<7;colindex++)
    {
      if(colorMatch(returncolor(rowindex,colindex),returncolor(rowindex+1,colindex+1),returncolor(rowindex+2,colindex+2),returncolor(rowindex+3,colindex+3)))
      {
        gameend();
        return true;
      }
      else if(colorMatch(returncolor(rowindex,colindex),returncolor(rowindex-1,colindex+1),returncolor(rowindex-2,colindex+2),returncolor(rowindex-3,colindex+3)))
        {
          return true;
        }
      else
      {
        continue;
      }
    }
  }
}


function gameend()
{
  document.getElementById('announce_winner').innerHTML = color + '  Wins!';
}

var player1color = 'rgb(0, 82, 165)';

var player2color = 'rgb(255, 66, 66)';
var game_start = true;
var table = $('table tr');
  $(document).ready(function(){
    $('.dot').click(function(){
        col = $(this).closest('td').index();
        row = $(this).closest('tr').index();
        console.log(row + ',' + col); 
        if(i%2==0)
        {
          if($(this).css('background-color') == 'rgb(187, 187, 187)')
          {
            color = "Blue";
            $(this).css('background-color','blue')
            i++;
          }
          else {
            alert('choose another circle!');
          }
        }
        else 
        {
          if($(this).css('background-color') == 'rgb(187, 187, 187)')
          {
            color = "Red";
            $(this).css('background-color','red')
            i++;
          }
          else {
            alert('choose another circle!');
          }
        }
        if (HorizontalCheck() || Verticalcheck() || diagonalCheck()) {
    gameend();
  }
    });
  });
