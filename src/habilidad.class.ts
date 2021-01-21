interface Activable {
  getBonusHabilidad: Function; 
    
}

class KaiohKen implements Activable {
  bonusHabilidad = 250;
  getBonusHabilidad = () => this.bonusHabilidad;
}

class KaiohKenX3 implements Activable {
  bonusHabilidad = 750;
  getBonusHabilidad = () => this.bonusHabilidad;
}

export { Activable, KaiohKen, KaiohKenX3 }
