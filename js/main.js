$(document).ready(function() {
  console.log("Document loaded.");

  function addItem() {
    const input = $('#userInput').val();
    const item = '<li>' + input + ' <button class="close">\&times\</button></li>';
    $('#todo-list-body').append(item);
  }

  function deleteItem(item) {
    $(item).parent().remove();
  }

  $('#todo-list-body').on('click', '.close', function(e) {
    e.preventDefault();
    var item = this;
    deleteItem(this);
  });

  $('#formSubmit').submit(function(e) {
    e.preventDefault();
    addItem();
    this.reset();
  });

  $('#todo-list-body').sortable();
});
