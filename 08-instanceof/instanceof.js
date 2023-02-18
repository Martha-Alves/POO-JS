function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Altere apenas o código abaixo desta linha
  
  let myHouse = new House(2);
  
  let data = myHouse instanceof House; 
  
  console.log(data)

  //o instanceof basicamente verifica se o objeto foi criado pela funcao construtora