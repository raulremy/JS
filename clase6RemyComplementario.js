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
        console.log(`Esta ascendiendo el signo %s`, this.nombre);
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


// Se Recorre el array de signos, lista de 
console.log(`Se Recorre el array de signos, con su lista de propiedades, y cuando es Mutable, se especifica`);
for(signo of signos){

    for (const property in signo) {
        console.log(`${property}: ${signo[property]}`);

        if(signo[property]==="Mutable"){
            console.log(signo[property])
        }
      }
}


// Ordenar en forma descendente por cuspide (Number)
console.log(`Se ordena en forma descendente por cuspide (Number)`)

console.log(signos.sort((a, b) => {
    return b.cuspide - a.cuspide;
}));

signos.forEach((e) => {
    console.log(`${e.nombre} ${e.cualidad} ${e.cuspide}`);
});


// Ordenar en forma ascendente por nombre de signo (String)
console.log(`Ordenar en forma ascendente por nombre de signo (String)`)
signos.sort((a, b) => {
    let fa = a.nombre.toLowerCase(),
        fb = b.nombre.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

signos.forEach((e) => {
    console.log(`${e.nombre} ${e.regente}`);
});
