function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4; //basicamente define para todos os Dogs que terá um número fixo de patas
  
  // Altere apenas o código acima desta linha
  let beagle = new Dog("Snoopy");