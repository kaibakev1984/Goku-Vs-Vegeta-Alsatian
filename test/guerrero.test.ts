import { TestCase, Test, Expect } from "alsatian";
import { Goku, Vegeta, Guerrero } from "../src/guerrero.class"
import { Ataque, BolaDeEnergia, KameHameHa } from "../src/ataque.class"
import { Activable, KaiohKen, KaiohKenX3 } from "../src/habilidad.class"

export class GuerreroTests {
   
  @Test("Goku ataca sin usar KaiohKen con bola de energia genera danio")
  public test01GokuAtacaSinUsarKaiohKenConBolaDeEnergiaGeneraDani() {
    let goku = new Goku();
    let vegeta = new Vegeta();
    
    goku.atacar( vegeta, new BolaDeEnergia() );

    Expect( vegeta.getVida() ).toBe( 5950 );
  }

  @Test("Goku ataca sin usar KaiohKen con Kame Hame Ha genera danio")
  public test02GokuAtacaSinUsarKaiohKenConKameHameHaGeneraDanio() {
    let goku = new Goku();
    let vegeta = new Vegeta();

    goku.atacar( vegeta, new KameHameHa() );

    Expect( vegeta.getVida() ).toBe( 5900 );
  }
    
  @Test("Goku usa KaiohKen con bola de energia genera danio")
  public test03GokuUsaKaiohKenConBolaDeEnergiaGeneraDanio(){
    let goku = new Goku();
    let vegeta = new Vegeta();

    goku.usarHabilidad( new KaiohKen() );
    goku.atacar( vegeta, new BolaDeEnergia() );

    Expect( vegeta.getVida() ).toBe( 5700 );

  }
    
  @Test("Goku usa KaiohKenx3 con Kame Hame Ha genera danio")
  public test04GokuUsaKaiohKenx3ConKameHameHaGeneraDanio(){
    let goku = new Goku();
    let vegeta = new Vegeta();

    goku.usarHabilidad( new KaiohKenX3() );
    goku.atacar( vegeta, new KameHameHa() );

    Expect( vegeta.getVida() ).toBe( 5150 );
  }

    /*
  @Test("Vegeta usa Galick Ho genera danio")
  public test05VegetaUsaGalickHoGeneraDanio(){
    let goku = new Goku();
    let vegeta = new Vegeta();

    vegeta.atacar( goku, new GalickHo() );
    
    Expect( goku.getVida() ).toBe( 4300 );
  }
     */
}
