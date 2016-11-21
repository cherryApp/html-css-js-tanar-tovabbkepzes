// Változó létrehozása.
var greeting = "Szia, a mi csapatunk neve \"Pál utcai fiúk\".";

// String - karakterlánc.
var myString = 'Ez egy string típusú változó.';

// Number - szám.
var myNumber = 22;
var myFloatingNumber = 44.345;

// Boolean - logikai érték.
var igaz = true;
var hamis = false;

// Array - tömb.
var myArray = [1, true, 'szöveg', false, 5];
myArray.push('én vagyok az ötös indexű elem');
console.log('myArray', myArray);
console.log('myArray harmadik eleme: ', myArray[2]);

// Több dimenziós tömb.
var dArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log('dArray', dArray);
console.log('dArray második elem, harmadik eleme: ', dArray[1][2]);
console.log('dArray indexei, Object.keys(dArray)', Object.keys(dArray));

// Object - objektum.
var User = {
    name: 'József',
    job: 'tanár',
    city: 'Budapest',
    skills: ['javascript', 'html', 'css']
};
User.name = 'Balázs';
User.street = "Szilágyi Erzsébet fasor";
console.log('User', User);
console.log('User.name: ', User.name);
console.log('User.skills', User.skills);
console.log('User.skills[1]', User.skills[1]);
var key = 'city';
console.log('User.key', User.key);
console.log('User[key]', User[key]);
console.log('User kulcsai, Object.keys(User)', Object.keys(User));

// Tipusok megállapítása.
console.log('változók tipusának meghatározása:');
console.log('myString', typeof myString);
console.log('myNumber', typeof myNumber);
console.log('myFloatingNumber', typeof myFloatingNumber);
console.log('igaz', typeof igaz);
console.log('hamis', typeof hamis);