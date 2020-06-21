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
    $('#todoEntry').val('');
  }
}

//deleting selected node using target method
function deleteNode(e){
  var value = e.target;
  var nodetodelete = value.parentNode.parentNode;
  nodetodelete.remove();
/*  var parentNode = nodetodelete.parentNode;
  parentNode.removeChild(nodetodelete);*/
}

//adding event Listener to the parent object only, and getting child object as and when require.
togetClickedEntry.addEventListener('click', function(e){
  deleteNode(e);
},false)

listButton.addEventListener('click', todoEntry,false);
