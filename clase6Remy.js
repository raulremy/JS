// Se define la clase signo con sus propiedades y metodos
class Signo{
    constructor(nombre, polaridad, cualidad, elemento, regente, cuspide){
        this.nombre = nombre;
        this.polaridad = polaridad;
        this.cualidad = cualidad;
        this.elemento = elemento;
        this.regente = regente;
        this.cuspide = cuspide;
    }

    asciende(){
        console.log(`Está ascendiendo el signo %s, polaridad %s, cualidad %s, elemento %s, regente %s, cúspide a %s grados`, 
        this.nombre, this.polaridad, this.cualidad, this.elemento, this.regente, this.cuspide);
    }
}
    

// Se instancian 12 objetos: Uno por cada signo 
const Aries = new Signo("Aries", "Masculina", "Cardinal", "Fuego", "Marte", 0);
const Tauro = new Signo("Tauro", "Femenina", "Fijo", "Tierra", "Venus", 30);
const Geminis = new Signo("Géminis", "Masculina", "Mutable", "Aire", "Mercurio", 60);
const Cancer = new Signo("Cáncer", "Femenina", "Cardinal", "Agua", "Luna", 90);
const Leo = new Signo("Leo", "Masculina", "Fijo", "Fuego", "Sol", 120);
const Virgo = new Signo("Virgo", "Femenina", "Mutable", "Tierra", "Mercurio", 150);
const Libra = new Signo("Libra", "Masculina", "Cardinal", "Aire", "Venus", 180);
const Escorpio = new Signo("Escorpio", "Femenina", "Fijo", "Agua", "Plutón", 210);
const Sagitario = new Signo("Sagitario", "Masculina", "Mutable", "Fuego", "Júpiter", 240);
const Capricornio = new Signo("Capricornio", "Femenina", "Cardinal", "Tierra", "Saturno", 270);
const Acuario = new Signo("Acuario", "Masculina", "Fijo", "Aire", "Urano", 300);
const Piscis = new Signo("Piscis", "Femenina", "Mutable", "Agua", "Neptuno", 330);

// Se crea un Array de signos
const signos = [Aries, Tauro, Geminis, Cancer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario, Piscis];

// Se recorre el array de signos, se despliegan los objetos y su metodo
console.log(`******* Se Recorre el array de signos, con su lista de propiedades, y cuando es Mutable, se especifica`);

for(signo of signos){

    for (const property in signo) {
        console.log(`${property}: ${signo[property]}`);

        if(property==="cuspide"){
            console.log("------------------------------------------------")
        }


        if(signo[property]==="Mutable"){
            console.log(`*** ${signo[property]}`);
        }
      }
}


for(s of signos){
    console.log(s);
    
    s.asciende();
}