var User = {
    name: 'Jancsi',
    age: 21,
    points: 300
};

var User2 = {
    name: 'Levente',
    age: 17,
    points: 522
};

if (User.points < 300) {
    console.log(User.name+' -nak kevesebb mint 300 pontja van.');
} else if (User.points == 300) {
    console.log(User.name+' -nak pontosan 300 pontja van.');
} else {
    console.log(User.name+' -nak több 300 pontja van.');
}

var p = 20;
switch(User.age) {
    case 19: 
        console.log('19 éves vagy');
        break;
    case 18: 
        console.log('18 éves vagy');
        break;
    case p: 
        console.log('20 éves vagy');
        break;
    default: 
        console.log('nem tudom hány éves vagy');
}

// Autók tömbje.
var cars = ['Audi', 'Ávia', 'VolksWagen', 'BMW', 'Toyota', 'Mazda', 'Fiat'];
cars.sort(function(first, second){
    return first.localeCompare(second);
});
for(var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

/* var i = 0;
while(i < cars.length) {
    console.log(cars[i]);
    i++;
} */

// Objektum bejárása for ciklussal.
/* var userKeys = Object.keys(User);
for(var i = 0; i < userKeys.length; i++) {
    var key = userKeys[i];
    console.log(User[key]);
} */
// Függvény definíció.
function printUser(user) {
    console.log("\nUser objektum for...in -el való bejárása: ");
    var arr = [];
    for(var k in user) {
        arr.push(k+': '+user[k]);
    }    
    console.log(arr.join(', '));
}

printUser(User);
printUser(User2);

/* var users = [
    {name: 'Karcsi', email: 'karcsi@mail.hu'},
    {name: 'Marcsi', email: 'marcsi@mail.hu'},
    {name: 'Kláci', email: 'klari@mail.hu'},
    {name: 'Pisti', email: 'pisti@mail.hu'},
    {name: 'Joci', email: 'joci@mail.hu'}
]

// A külső for...in ciklus az egyes tömb elemeken megy végig.
console.log('users tömb elemeinek kiírása: ');
for(var k in users) {
    console.log('users['+k+']: ');
    
    // A belső for ciklus pedig a tömb elem tulajdonságain megy végig.
    for(var l in users[k]) {
        console.log('users['+k+']['+l+']: '+users[k][l]);
    }
} */









