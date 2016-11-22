
// Globali
var form = document.querySelector('form');
var input = document.querySelector('input');
var template = document.querySelector('template');
var list = document.querySelector('ul');
var todo = [];

// Disegna elementi nella lista
function render(collection){
  list.innerHTML = '';
  collection.forEach(function(e,i){
    var elem = template.innerHTML
                  .replace('{{item}}', e)
                  .replace('{{index}}', i);
    list.innerHTML += elem;
  });
}

// Rimuove elemento selezionato
function removeItem(evt){
  var index = parseInt(evt.currentTarget.dataset.index);
  var filter = todo.filter(function(e,i){
    return i !== index;
  });
  todo = filter;
  render(todo);
}

// Aggiunge nuovo elemento
form.addEventListener('submit', function(evt){
  evt.preventDefault();
  var text = input.value;
  todo.push(text);
  render(todo);
  input.value = '';
});

// Primo render
render(todo);
