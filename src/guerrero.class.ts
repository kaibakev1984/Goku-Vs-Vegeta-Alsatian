import { Ataque, BolaDeEnergia, KameHameHa } from './ataque.class'
import { Activable } from "./habilidad.class"


interface Guerrero {
  getVida: Function;
  atacar: Function;
  recibirDanio: Function;
}

interface Habilidoso {
  usarHabilidad: Function;
}

class Goku implements Guerrero, Habilidoso {
  vida = 5000;
  bonusDanio = 0;

  getVida = ()=> this.vida;

  atacar = ( guerrero: Guerrero, ataque: Ataque ) => {
    ataque.hacerDanio( guerrero, this.bonusDanio );
  }

  recibirDanio = ( danio: number ) => {
    this.vida -= danio; 
  }

  usarHabilidad = ( habilidad: Activable ) => {
     this.bonusDanio = habilidad.getBonusHabilidad();
  }
}

class Vegeta implements Guerrero {
  vida = 6000;
  getVida = () => this.vida;

  atacar = ( guerrero: Guerrero, ataque: Ataque ) => {
    ataque.hacerDanio( guerrero );
  }

  recibirDanio = ( danio: number ) => {
    this.vida -= danio;
  }
}

export { Guerrero, Goku, Vegeta }
