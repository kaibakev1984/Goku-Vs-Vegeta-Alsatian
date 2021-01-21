import { Guerrero } from './guerrero.class'

interface Ataque {
  hacerDanio: Function;
}

class BolaDeEnergia implements Ataque {
  puntosAtaque = 50;
  hacerDanio = ( guerrero: Guerrero, bonusDanio: number )  => {
    guerrero.recibirDanio( this.puntosAtaque + bonusDanio ); 
  }
}

class KameHameHa implements Ataque {
  puntosAtaque = 100;

  hacerDanio = ( guerrero: Guerrero, bonusDanio: number ) => {
    guerrero.recibirDanio( this.puntosAtaque + bonusDanio);
  }
}

export { Ataque, BolaDeEnergia, KameHameHa } 
