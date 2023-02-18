function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Altere apenas o código abaixo desta linha
  
  let hound = new Dog();

  hound.name = "nada" //posso mudar normalmente os dados

  //aqui o hound recebe todas as propriedades de Dog

  console.log(hound)