// Se define la clase signo con sus propiedades y metodos

class Signo{
    constructor(nombre, polaridad, cualidad, elemento, regente, cuspide, descripcion){
        this.nombre = nombre;
        this.polaridad = polaridad;
        this.cualidad = cualidad;
        this.elemento = elemento;
        this.regente = regente;
        this.cuspide = cuspide;
        this.descripcion = descripcion;
    }

    asciende(){
        console.log(`Esta ascendiendo el signo %s`, this.nombre);
    }

    // Si los grados se encuentran entre la cuspide y mas 29 grados
    determinaSigno(grados){
        if(grados >= this.cuspide && grados < this.cuspide+30){

//            document.write(this.nombre, ": ", this.descripcion);

            console.log(`Pertenece al signo de %s y estas son sus características: %s`, this.nombre, this.descripcion)    
        }
    }
}


// Se instancian 12 objetos: Uno por cada signo     

const Aries = new Signo("ARIES", "Masculina", "Cardinal", "Fuego", "Marte", 0,
"Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.Los Aries son de acción rápida y confían en su poder, por eso no pierden el tiempo pensando en problemas, de hecho, su manera de resolverlos es la acción. Un aspecto negativo de esta actitud, a veces, es la impulsividad y falta de paciencia, además de arriesgarse demasiado. Tampoco soportan equivocarse ni el fracaso. Son personas independientes y casi sienten obsesión por conseguir lo que desean en la vida, precisamente por eso pueden parecer ambiciosas y frívolas en exceso. Es muy fácil que se sientan ofendidas, y cuando esto sucede, resulta extremadamente difícil hacer las paces con ellas.En sus relaciones personales, Aries suele ser noble y natural; valora y cuida las amistades que tiene, aunque a veces, meta la pata hiriendo la sensibilidad de quienes tiene cerca. Finalmente, Aries acostumbra a tener la libido sexual alta: ama con una gran pasión, pues el sexo para Aries es toda una aventura."
);
const Tauro = new Signo("TAURO", "Femenina", "Fijo", "Tierra", "Venus", 30,
"Es un ser decidido, pragmático y tiene una enorme fuerza de voluntad. Tiende a las ideas conservadoras, y como le gusta tanto la estabilidad, sus ideas son fijas no hay manera de convencer a un Tauro de algo que vaya en contra de sus principios o de lo que piensa y siente, así que la terquedad es otra de sus características más evidente. Tienen una gran capacidad para evitar conflictos y disgustos, sin duda prefieren resolver sus problemas con pragmatismo; también tienen buen humor. Sin embargo, cuando pierden los nervios, son capaces de montar en cólera y mostrar un genio terrible. Los Tauro son personas sensuales que idolatran la belleza, la fidelidad y el cuidado; no obstante, el punto negativo es que tienden a la posesión. Su carácter romántico hace que disfrute sintiendo el amor de su pareja el sexo para Tauro es en última instancia la manifestación de la entrega que siente por la persona que ama."
);
const Geminis = new Signo("GEMINIS", "Masculina", "Mutable", "Aire", "Mercurio", 60,
"Los Géminis son personas inquietas que empiezan nuevos proyectos y retos con mucho entusiasmo, aunque con demasiada frecuencia les falta la constancia necesaria para realizarlos. Tienden a pensar en la vida como un juego y buscan la diversión y aventura en todo lo que hacen; tienen el egoísmo y la imaginación propia de la infancia. También tienen fuerza y vitalidad, además son seres inteligentes, con facultad de expresarse de modo eficaz para deleitar, conmover o persuadir (según convenga) a quienes prestan oídos a sus palabras. Asimismo, son cariñosos y disfrutan como nadie con lo extraordinario y la novedad: cuanta más variedad en su vida, mejor que mejor.En el plano sentimental se mueven como pez en el agua y vuelven a demostrar su doble naturaleza: por un lado se entregan sexualmente, pero por otro rechazan el romanticismo y pierden interés con facilidad una vez conquistada su pareja."
);
const Cancer = new Signo("CANCER", "Femenina", "Cardinal", "Agua", "Luna", 90,
"Los Cáncer tienen una memoria extraordinaria y además poseen un talento innato para las artes y las letras notable. Además son ambiciosos y pueden cambiar sin dificultad de profesión, de amistades, etc. El Cangrejo vive su vida dando dos pasos hacia delante y uno hacia atrás; es curioso pero temeroso, es bravo pero sensible, es voluble pero conservador, ¡vamos!¡el mejor exponente del espíritu de la contradicción pura.Cuando se trata de amor, en sus relaciones Cáncer es también una mezcla de contradicción; si mantiene una relación estable, ama de verdad, sinceramente, aunque en su yo interno eso no significa que no pueda mantener relaciones sexuales con otras personas. Además, se caracteriza por una ternura, emoción e imaginación que le convierten en un amante muy, muy especial."
);
const Leo = new Signo("LEO", "Masculina", "Fijo", "Fuego", "Sol", 120,
"Los Leones son entusiastas, creativos y muchas veces comprensivos con las circunstancias de los demás; adoran los lujos y la aventura;correr riesgos les motiva. También se caracterizan por tener un elevado concepto de todo, especialmente, de sí mismos, por eso huyen de la vulgaridad.Como disfrutan con la emoción de las nuevas experiencias y adoran estar en medio de mucha gente, es muy posible que alternen varios círculos sociales y de amistad, aunque nunca olvidarán a sus verdaderas amistades. En el amor, Leo es romántico, algo caprichoso, poco fiel y prisionero de la belleza. Además, no le falta sinceridad, por lo menos mientras dura el amor, no más. Finalmente, le encantan las relaciones sexuales, así que es muy posible que tenga diversas y diferentes parejas durante su vida."
);
const Virgo = new Signo("VIRGO", "Femenina", "Mutable", "Tierra", "Mercurio", 150,
"Como es el perfeccionista del zodíaco, de vez en cuando cae en obsesiones de todo tipo: desde la obsesión por el orden, pasando por la limpieza, hasta llegar incluso a la obsesión por los detalles. Su sentido de la responsabilidad está muy desarrollado, por eso odia la improvisación y la frivolidad, además, para desarrollarse plenamente necesita sentirse seguro.Los Virgo son amigos de sus amigos; si necesitas su ayuda, pídesela y hará todo lo que esté en sus manos por ayudarte. Además, su visión seguramente sea la más acertada, así que puedes estar seguro de que te servirá de algo.En el amor, Virgo es una persona cariñosa, entregada y fiel. La pasión no es su fuerte, pero su romanticismo, atención por los detalles y ternura resultan sorprendentes y suplen en cierta medida su falta de decisión. En calidad de padre o madre es lo más entregado que existe en el zodiaco, y como pareja también."
);
const Libra = new Signo("LIBRA", "Masculina", "Cardinal", "Aire", "Venus", 180,
"Al igual que su propio arquetipo: la balanza, símbolo de justicia, las Libra son personas que presentan un sentido de la ecuanimidad y la tolerancia muy desarrollado; comprenden las posturas de los demás y al mismo tiempo procuran dirimir las diferencias. En general, no les gusta la rutina, sobre todo en su trabajo; además tienen una fina sensibilidad artística que pueden llegar a canalizar profesionalmente.Libra, como signo de aire que es, necesita tener estímulos intelectuales constantes, usar el razonamiento y mantener una comunicación fluida e interesante en las relaciones que mantiene, sean de la clase que sea.Cuando se trata de amor, el romanticismo es una constante en su unión, también la búsqueda de la belleza (tanto física como interna o espiritual) y su tendencia al hedonismo. Libra posee una capacidad para seducir sublime: un gesto, una mirada son armas que dispone de forma innata para la seducción."
);
const Escorpio = new Signo("ESCORPIO", "Femenina", "Fijo", "Agua", "Plutón", 210,
"Desea ejercer el control, acumulando poder; suele tener una profunda inteligencia fruto de su poder de concentración. Escorpio tiende a ir a la raíz, a lo esencial y a lo que pertenece al mundo inconsciente. Un Escorpión es inmensamente enérgico y su carácter puede dar lugar a grandes ventajas o no menos grandes peligros para los demás. De hecho, sus puntos negativos son la agresión, los celos y el resentimiento. No soporta la deslealtad y tampoco perdona una ofensa; es más, seguramente busque venganza... y es muy mal enemigo, así que cuidadito con hacerle daño. Las Escorpio son personas muy sensuales y apasionadas; para ellas el acto del amor es algo espiritual: sienten emociones a las que otros signos ni se pueden acercar. La intensidad de sus sentimientos hace que sus relaciones amorosas sean profundas, mágicas, y a veces, por desgracia, fatales."
);
const Sagitario = new Signo("SAGITARIO", "Masculina", "Mutable", "Fuego", "Júpiter", 240,
"Son personas a quienes les encanta empezar nuevos proyectos y aprender constantemente cosas nuevas. Son intuitivas, buenas organizadoras, generosas (pero sin malgastar) y muy cuidadosas, lo que las convierte en buenas gestoras de situaciones y proyectos.El signo de Sagitario desarrolla unos ideales y principios que son las pautas que constituyen su forma de caminar por el mundo, precisamente por eso, es muy posible que la religión como búsqueda de la verdad sea algo intrínseco de su energía y a lo que tienda a lo largo de su vida. En el amor, Sagitario valora la libertad y la independencia por encima de todas las cosas Sin duda, este signo estará dispuesto a terminar cualquier relación que se convierta en una pesada carga."
);
const Capricornio = new Signo("CAPRICORNIO", "Femenina", "Cardinal", "Tierra", "Saturno", 270,
"En general, son personas trabajadoras, responsables y dispuestas a persistir lo que haga falta para conseguir su objetivo; además son muy fiables y cuentan con unas elevadas dosis de paciencia y resistencia para avanzar hacia sus objetivos; en este sentido, su capacidad para la gestión resulta asombrosa. Por otra parte, no soportan la falta de honradez ni de disciplina. Capricornio atesora conocimiento por medio de la experiencia Es el sabio que reconoce y valora lo necesario de lo que no lo es, lo que persiste de lo que perece, la realidad y su representación. Cuando se trata de amor, a veces le cuestan las relaciones, sobre todo con el sexo opuesto; necesita mucha dedicación. Aunque una vez que se enamoran, suelen ser personas muy fieles y algo celosas. Las reticencias de Capricornio se derivan de su pensamiento; para la cabra, el sexo seguro es el mejor sexo."
);
const Acuario = new Signo("ACUARIO", "Masculina", "Fijo", "Aire", "Urano", 300,
"Las personas nacidas Acuario hacen gala de de una sinceridad e idealismo a prueba de bombas. Amantes de todo lo original, tienen montones de ideas nuevas agolpadas en sus mentes, lo que pasa es que cuando van a poner en marcha una de ellas, sale otra, y cuando van a poner esa en marcha, sale otra, y otrason pura creatividad. Generalmente Acuario necesita moverse con libertad, sin condicionantes ni ataduras; la posesión no entra dentro de su modo de ver la vida, además, es un signo caracterizado por su desapego. En el amor, la intimidad no es su punto fuerte; los pertenecientes a este signo suelen sentirse demasiado vulnerables y poco cómodos cuando no se sienten seguros. De todas maneras, tampoco son unos santurrones que practican el celibato como penitencia este signo ama el sexo e irradia una energía sexual potentísima."
);
const Piscis = new Signo("PISCIS", "Femenina", "Mutable", "Agua", "Neptuno", 330,
"Tienden a vivir de una manera emocional más que racional, de forma instintiva e intuitiva más que de forma lógica. Les cuesta mucho transmitir lo que perciben, no saben expresarlo con palabras sino con acciones... Una clave para los Piscis es cómo contactan con su sensibilidad. Además, aunque suele decirse de Piscis que es el signo de la ingenuidad, cuando es su respuesta ante el mundo de las sensaciones que contempla y percibe lo que le hace ser ingenuo o escéptico, dos extremos de la misma cuerda. En el amor, son personas fieles, adaptables y que buscan incansablemente una unión con la mente y el espíritu de su pareja más que una unión puramente sexual. Necesitan soñar conjuntamente con su media naranja y sentir para dar un amor puro y un sexo muy especial."
);


// Se crea un Array de signos
const signos = [Aries, Tauro, Geminis, Cancer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario, Piscis];

// Clase 8
//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("signos");
//Array con la información a agregar
//Iteramos el array con for...of
for(signo of signos){

    for (const property in signo) {
        console.log(`${property}: ${signo[property]}`);

        let li = document.createElement("li");

        let str = property;
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);

        li.innerHTML = `<strong>${str2}</strong>: ${signo[property]}`;
        padre.appendChild(li);

      }
}