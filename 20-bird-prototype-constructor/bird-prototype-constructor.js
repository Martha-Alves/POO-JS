function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Altere apenas o código abaixo desta linha
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog; 

let duck = new Bird();
let beagle = new Dog(); //basicamente pro codigo dizer que veio de dog ao invés de animal mesmo animal sendo o supertipo