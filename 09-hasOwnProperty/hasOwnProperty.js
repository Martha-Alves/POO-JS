function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Altere apenas o código abaixo desta linha
  
  for (let property in canary) { 
    if(canary.hasOwnProperty(property)){ //na variável canary existe a propriedade que está no parentese? se sim, adicione ela no final do array!
      ownProps.push(property);
    }
  }
  
  console.log(ownProps)