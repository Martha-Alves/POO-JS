function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Altere apenas o código abaixo desta linha
  
  console.log(Dog.prototype.isPrototypeOf(beagle));