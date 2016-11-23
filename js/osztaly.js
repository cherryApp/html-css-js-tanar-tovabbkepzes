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

// CSV to JSON
function csvToJson(csv, sep) {
    sep = sep || ',';
    var arr = [];
    
    // Sorok kiolvasása.
    var csvRows = csv.split("\n");
    
    // Kulcsok kiolvasása.
    var keys = csvRows[0].split(sep);
    
    // Adatsorok objektumokba mentése.
    for (var i = 1; i < csvRows.length; i++) {
        var row = csvRows[i].split(sep);
        var obj = {};
        for (var k in keys) {
            obj[keys[k]] = row[k];
        }
        arr.push(obj);
    }
    
    return JSON.stringify(arr);
}

// Tanuló köszönése.
var students = [];
function greetStudent(index) {
    alert(students[index].greeting('tanár'));
}

// Popover üzenetek beállítása.
function setPopovers() {
    var buttons = document.querySelectorAll('button[data-student]');
    for (var i = 0; i < buttons.length; i++) {
        var index = buttons[i].getAttribute('data-student');
        index = parseInt(index);
        $(buttons[i]).popover({
            container: 'body',
            content: students[index].greeting('tanár'),
            trigger: 'focus',
            placement: 'top'
        });
    }
};

// Student json beolvasása.
$.get('/js/students.csv', function(studentDB) {
    studentDB = csvToJson(studentDB, ',');
    studentDB = JSON.parse(studentDB);
    
    // Tanulók példányosítása.
    for(var k in studentDB) {
        students.push( new student(studentDB[k]) );
    }
    
    // Osztály nevének beállítása.
    // document.querySelector('.navbar-inverse .navbar-brand')
        // .innerHTML = studentDB.className + " osztály";
    
    // Osztályfőnök beállítása.
    // document.querySelector('.class-master')
    //    .innerHTML = studentDB.classMaster;
    
    // Osztály létszám.
    // document.querySelector('.class-members')
    //     .innerHTML = students.length;
    
    // Tanulók kilistázása.
    var tBody = document.querySelector('.dynamic-table tbody');
    var tBodyContent = '';
    for(var k in students) {
        tBodyContent += '<tr>';
        tBodyContent += '<td>'+(parseInt(k)+1)+'.</td>';
        tBodyContent += '<td>'+(students[k].name)+'.</td>';
        tBodyContent += '<td>'+(students[k].age)+'.</td>';
        tBodyContent += '<td>'+(students[k].myClass)+'.</td>';
        tBodyContent += '<td><button class="btn btn-info" data-student="' + 
            k + '">köszön</button></td>';
        tBodyContent += '</tr>';
    }
    tBody.innerHTML = tBodyContent;
    
    // Popover beállítása.
    setPopovers();
    
});









