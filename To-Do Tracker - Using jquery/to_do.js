var togetClickedEntry; //getting the object whose child is being clicked
var listButton;

togetClickedEntry = document.getElementById('todolist');
listButton = document.getElementById('todolistbutton');
//Function to enter the data into the table and also deleting it if required
function todoEntry(){
  if($('#todoEntry').val() == ""){
    alert ("kutte");
    return false;
  }else{
    var $newTrNode = $('<tr></tr>');
    var $newTdNode1 = $('<td></td>');
    var $newTdNode2 = $('<td></td>');
    var $newlinkNode = $('<i></i>');
    $newTdNode1.prepend($('#todoEntry').val());
    $newTrNode.prepend($newTdNode1);
    $newlinkNode.prepend('delete_forever');
    $newlinkNode.attr('class',"material-icons style-button");
    $newTdNode2.prepend($newlinkNode);
    $newTrNode.append($newTdNode2);
    if($('#todolist > tr').length){
      $('#todolist > tr:last').after($newTrNode);
    }else{
      $('#todolist').append($newTrNode);
    }
    $('#checkingfade').fadeOut(7000);

  }
}
$(function(){
  $('#showtable').attr('disabled', true);
  $('#checkingfade').on('click',function(){
    // $('#checkingfade').fadeOut(1000);
     //$('#checkingfade').delay(700).fadeIn(700);
    // $('table').slideUp(7000);
    // $('table').slideDown(700);
     $('table').delay(700).fadeOut(1000);
     $('table').delay(700).fadeIn(700);
    });
  // to add event Listener for submit button
  listButton.addEventListener('click', todoEntry, false)
/*
  $(window).scroll(function(){
    $('.fadingClass').animate({
      opacity:0.0,
      marginLeft:'+=480'},1000,function(){
        $('.fadingClass').fadeOut(1000);
      });
      $('.fadingClass1').animate({
        opacity:0.0,
        marginLeft:'-=480'},1000,function(){
          $('.fadingClass1').fadeOut(1000);
        });
  });*/

  $('#hidetable').click(function(){
    $('table').animate({
      opacity:0.0,
      marginLeft:'+=100'},1000,function(){
        $('table').fadeOut(1000);
      });
    $('#hidetable').attr("disabled",true);
    $('#showtable').attr("disabled",false);
  });

  $('#showtable').click(function(){
    $('table').animate({
      opacity:1.0,
      marginLeft:'-=100'},1000,function(){
        $('table').fadeIn(1000);
      });
    $('#showtable').attr('disabled',true);
    $('#hidetable').removeAttr('disabled');
  });
});
