// Student prototípus.
var student = function(settings) {
  for(var k in settings) {
      this[k] = settings[k];
  }
  this.greeting = function(type) {
    if (type === 'tanár') {
      return 'Csókolom, '+this.name+' vagyok.';
    } else {
      return 'Szia, '+this.name+' vagyok.';
    }
  }
};

// Student json beolvasása.
$.getJSON('/js/students.json', function(studentDB) {
    // Tanulók példányosítása.
    var students = [];
    for(var k in studentDB.students) {
        students.push( new student(studentDB.students[k]) );
    }
    
    // Osztály nevének beállítása.
    document.querySelector('.navbar-inverse .navbar-brand')
        .innerHTML = studentDB.className + " osztály";
    
});