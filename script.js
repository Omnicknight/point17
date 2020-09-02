function Animal(gender) {
    this.gender = gender;
}

Animal.prototype.run = function () {
    console.log('run');
};
Animal.prototype.bounce = function () {};

function Mammal(gender) {
    Animal.call(this, gender);
}

Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.constructor = Mammal;

Mammal.prototype.getMilk = function() {
    if(this.gender==='female') {
        console.log('you take milk');
    } else {
        console.log('Opps');
    } 
};

function Raccoon(gender) {
    Mammal.call(this, gender);
}

function Lama(gender) {
    Mammal.call(this, gender);
}

function Pug(gender) {
    Mammal.call(this, gender);
}

Pug.prototype = Object.create(Mammal.prototype);

Pug.prototype.constructor = Pug;

Pug.prototype.bunch = function() {
    console.log('what the smell?');
}

Lama.prototype = Object.create(Mammal.prototype);

Lama.prototype.constructor = Lama;

Lama.prototype.spit = function() {
    console.log('yee, in your fucking face!!');
}

Raccoon.prototype = Object.create(Mammal.prototype);

Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.steal = function() {
    console.log('you steal some');
}
 
const red = new Raccoon('male');

const bart = new Lama('female');

const garry = new Pug('male');

console.log(red);


red.run();
red.getMilk();
red.steal();
bart.spit();
bart.run();
garry.bunch();
garry.getMilk();