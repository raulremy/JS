// Se define la clase signo con sus propiedades y metodos

class Signo{
    constructor(imagen, nombre, polaridad, cualidad, elemento, regente, cuspide, descripcion){
        this.imagen = imagen;
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

            console.log(`Pertenece al signo de %s y estas son sus características: %s`, this.nombre, this.descripcion)    
        }
    }
}


// Se instancian 12 objetos: Uno por cada signo     

//const Aries = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoxckrRClY0kjdw26XERGVB2sZGfhSP08qw&usqp=CAU',
const Aries = new Signo('./images/aries.jpg',
"Aries", "Masculina", "Cardinal", "Fuego", "Marte", "0",
"Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.Los Aries son de acción rápida y confían en su poder, por eso no pierden el tiempo pensando en problemas, de hecho, su manera de resolverlos es la acción. Un aspecto negativo de esta actitud, a veces, es la impulsividad y falta de paciencia, además de arriesgarse demasiado. Tampoco soportan equivocarse ni el fracaso. Son personas independientes y casi sienten obsesión por conseguir lo que desean en la vida, precisamente por eso pueden parecer ambiciosas y frívolas en exceso. Es muy fácil que se sientan ofendidas, y cuando esto sucede, resulta extremadamente difícil hacer las paces con ellas.En sus relaciones personales, Aries suele ser noble y natural; valora y cuida las amistades que tiene, aunque a veces, meta la pata hiriendo la sensibilidad de quienes tiene cerca. Finalmente, Aries acostumbra a tener la libido sexual alta: ama con una gran pasión, pues el sexo para Aries es toda una aventura."
);
//const Tauro = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmqleeCRTAa5rlzEfTXC23Q9f1rkQaZ6bEuxNROLa4z5g7XMalETvFRugo8FTiOjpxnk&usqp=CAU',
const Tauro = new Signo('./images/tauro.jpg',
"Tauro", "Femenina", "Fijo", "Tierra", "Venus", "30",
"Es un ser decidido, pragmático y tiene una enorme fuerza de voluntad. Tiende a las ideas conservadoras, y como le gusta tanto la estabilidad, sus ideas son fijas no hay manera de convencer a un Tauro de algo que vaya en contra de sus principios o de lo que piensa y siente, así que la terquedad es otra de sus características más evidente. Tienen una gran capacidad para evitar conflictos y disgustos, sin duda prefieren resolver sus problemas con pragmatismo; también tienen buen humor. Sin embargo, cuando pierden los nervios, son capaces de montar en cólera y mostrar un genio terrible. Los Tauro son personas sensuales que idolatran la belleza, la fidelidad y el cuidado; no obstante, el punto negativo es que tienden a la posesión. Su carácter romántico hace que disfrute sintiendo el amor de su pareja el sexo para Tauro es en última instancia la manifestación de la entrega que siente por la persona que ama."
);
//const Geminis = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2u9VC27kIwqVMGGQryVmwBOQyLP6_OovmHXIJp2jW92WtWkucC82S_xHOURCdOPU77pE&usqp=CAU',
const Geminis = new Signo('./images/geminis.jpg',
"Geminis", "Masculina", "Mutable", "Aire", "Mercurio", "60",
"Los Géminis son personas inquietas que empiezan nuevos proyectos y retos con mucho entusiasmo, aunque con demasiada frecuencia les falta la constancia necesaria para realizarlos. Tienden a pensar en la vida como un juego y buscan la diversión y aventura en todo lo que hacen; tienen el egoísmo y la imaginación propia de la infancia. También tienen fuerza y vitalidad, además son seres inteligentes, con facultad de expresarse de modo eficaz para deleitar, conmover o persuadir (según convenga) a quienes prestan oídos a sus palabras. Asimismo, son cariñosos y disfrutan como nadie con lo extraordinario y la novedad: cuanta más variedad en su vida, mejor que mejor.En el plano sentimental se mueven como pez en el agua y vuelven a demostrar su doble naturaleza: por un lado se entregan sexualmente, pero por otro rechazan el romanticismo y pierden interés con facilidad una vez conquistada su pareja."
);
//const Cancer = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPL7URU8DlaJv1WWh6TcyVH6Hylzwd5imkg&usqp=CAU',
const Cancer = new Signo('./images/cancer.jpg',
"Cancer", "Femenina", "Cardinal", "Agua", "Luna", "90",
"Los Cáncer tienen una memoria extraordinaria y además poseen un talento innato para las artes y las letras notable. Además son ambiciosos y pueden cambiar sin dificultad de profesión, de amistades, etc. El Cangrejo vive su vida dando dos pasos hacia delante y uno hacia atrás; es curioso pero temeroso, es bravo pero sensible, es voluble pero conservador, ¡vamos!¡el mejor exponente del espíritu de la contradicción pura.Cuando se trata de amor, en sus relaciones Cáncer es también una mezcla de contradicción; si mantiene una relación estable, ama de verdad, sinceramente, aunque en su yo interno eso no significa que no pueda mantener relaciones sexuales con otras personas. Además, se caracteriza por una ternura, emoción e imaginación que le convierten en un amante muy, muy especial."
);
//const Leo = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaMR8yKaJFemi1sWZ2kkAnvdcXgtkcIFEDQ&usqp=CAU',
const Leo = new Signo('./images/leo.jpg',
"Leo", "Masculina", "Fijo", "Fuego", "Sol", "120",
"Los Leones son entusiastas, creativos y muchas veces comprensivos con las circunstancias de los demás; adoran los lujos y la aventura;correr riesgos les motiva. También se caracterizan por tener un elevado concepto de todo, especialmente, de sí mismos, por eso huyen de la vulgaridad.Como disfrutan con la emoción de las nuevas experiencias y adoran estar en medio de mucha gente, es muy posible que alternen varios círculos sociales y de amistad, aunque nunca olvidarán a sus verdaderas amistades. En el amor, Leo es romántico, algo caprichoso, poco fiel y prisionero de la belleza. Además, no le falta sinceridad, por lo menos mientras dura el amor, no más. Finalmente, le encantan las relaciones sexuales, así que es muy posible que tenga diversas y diferentes parejas durante su vida."
);
//const Virgo = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2lbh---wpFhG_MShYtqWSmCds06P9KW71g&usqp=CAU',
const Virgo = new Signo('./images/virgo.jpg',
"Virgo", "Femenina", "Mutable", "Tierra", "Mercurio", "150",
"Como es el perfeccionista del zodíaco, de vez en cuando cae en obsesiones de todo tipo: desde la obsesión por el orden, pasando por la limpieza, hasta llegar incluso a la obsesión por los detalles. Su sentido de la responsabilidad está muy desarrollado, por eso odia la improvisación y la frivolidad, además, para desarrollarse plenamente necesita sentirse seguro.Los Virgo son amigos de sus amigos; si necesitas su ayuda, pídesela y hará todo lo que esté en sus manos por ayudarte. Además, su visión seguramente sea la más acertada, así que puedes estar seguro de que te servirá de algo.En el amor, Virgo es una persona cariñosa, entregada y fiel. La pasión no es su fuerte, pero su romanticismo, atención por los detalles y ternura resultan sorprendentes y suplen en cierta medida su falta de decisión. En calidad de padre o madre es lo más entregado que existe en el zodiaco, y como pareja también."
);
//const Libra = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpGJG4Lv6J3UmpcjpIebaMrRu4q8WuSXdeA&usqp=CAU',
const Libra = new Signo('./images/libra.jpg',
"Libra", "Masculina", "Cardinal", "Aire", "Venus", "180",
"Al igual que su propio arquetipo: la balanza, símbolo de justicia, las Libra son personas que presentan un sentido de la ecuanimidad y la tolerancia muy desarrollado; comprenden las posturas de los demás y al mismo tiempo procuran dirimir las diferencias. En general, no les gusta la rutina, sobre todo en su trabajo; además tienen una fina sensibilidad artística que pueden llegar a canalizar profesionalmente.Libra, como signo de aire que es, necesita tener estímulos intelectuales constantes, usar el razonamiento y mantener una comunicación fluida e interesante en las relaciones que mantiene, sean de la clase que sea.Cuando se trata de amor, el romanticismo es una constante en su unión, también la búsqueda de la belleza (tanto física como interna o espiritual) y su tendencia al hedonismo. Libra posee una capacidad para seducir sublime: un gesto, una mirada son armas que dispone de forma innata para la seducción."
);
//const Escorpio = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IlzN_d2TnzxvLaIQLA2W6-pX4YB_08KiFw&usqp=CAU',
const Escorpio = new Signo('./images/escorpio.jpg',
"Escorpio", "Femenina", "Fijo", "Agua", "Plutón", "210",
"Desea ejercer el control, acumulando poder; suele tener una profunda inteligencia fruto de su poder de concentración. Escorpio tiende a ir a la raíz, a lo esencial y a lo que pertenece al mundo inconsciente. Un Escorpión es inmensamente enérgico y su carácter puede dar lugar a grandes ventajas o no menos grandes peligros para los demás. De hecho, sus puntos negativos son la agresión, los celos y el resentimiento. No soporta la deslealtad y tampoco perdona una ofensa; es más, seguramente busque venganza... y es muy mal enemigo, así que cuidadito con hacerle daño. Las Escorpio son personas muy sensuales y apasionadas; para ellas el acto del amor es algo espiritual: sienten emociones a las que otros signos ni se pueden acercar. La intensidad de sus sentimientos hace que sus relaciones amorosas sean profundas, mágicas, y a veces, por desgracia, fatales."
);
//const Sagitario = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHLB1pBiEyDJYhVSCCl6Ul6HFuskMdKQ_ww&usqp=CAU',
const Sagitario = new Signo('./images/sagitario.jpg',
"Sagitario", "Masculina", "Mutable", "Fuego", "Júpiter", "240",
"Son personas a quienes les encanta empezar nuevos proyectos y aprender constantemente cosas nuevas. Son intuitivas, buenas organizadoras, generosas (pero sin malgastar) y muy cuidadosas, lo que las convierte en buenas gestoras de situaciones y proyectos.El signo de Sagitario desarrolla unos ideales y principios que son las pautas que constituyen su forma de caminar por el mundo, precisamente por eso, es muy posible que la religión como búsqueda de la verdad sea algo intrínseco de su energía y a lo que tienda a lo largo de su vida. En el amor, Sagitario valora la libertad y la independencia por encima de todas las cosas Sin duda, este signo estará dispuesto a terminar cualquier relación que se convierta en una pesada carga."
);
//const Capricornio = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSm4d3OM9Uu2hWETOPog10BmI_DBkPdxNPkA&usqp=CAU',
const Capricornio = new Signo('./images/capricornio.jpg',
"Capricornio", "Femenina", "Cardinal", "Tierra", "Saturno", "270",
"En general, son personas trabajadoras, responsables y dispuestas a persistir lo que haga falta para conseguir su objetivo; además son muy fiables y cuentan con unas elevadas dosis de paciencia y resistencia para avanzar hacia sus objetivos; en este sentido, su capacidad para la gestión resulta asombrosa. Por otra parte, no soportan la falta de honradez ni de disciplina. Capricornio atesora conocimiento por medio de la experiencia Es el sabio que reconoce y valora lo necesario de lo que no lo es, lo que persiste de lo que perece, la realidad y su representación. Cuando se trata de amor, a veces le cuestan las relaciones, sobre todo con el sexo opuesto; necesita mucha dedicación. Aunque una vez que se enamoran, suelen ser personas muy fieles y algo celosas. Las reticencias de Capricornio se derivan de su pensamiento; para la cabra, el sexo seguro es el mejor sexo."
);
//const Acuario = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJUktA6Ye5UxxGSYj8MsEMmHhUD7QZ25dDA&usqp=CAU',
const Acuario = new Signo('./images/acuario.jpg',
"Acuario", "Masculina", "Fijo", "Aire", "Urano", "300",
"Las personas nacidas Acuario hacen gala de de una sinceridad e idealismo a prueba de bombas. Amantes de todo lo original, tienen montones de ideas nuevas agolpadas en sus mentes, lo que pasa es que cuando van a poner en marcha una de ellas, sale otra, y cuando van a poner esa en marcha, sale otra, y otrason pura creatividad. Generalmente Acuario necesita moverse con libertad, sin condicionantes ni ataduras; la posesión no entra dentro de su modo de ver la vida, además, es un signo caracterizado por su desapego. En el amor, la intimidad no es su punto fuerte; los pertenecientes a este signo suelen sentirse demasiado vulnerables y poco cómodos cuando no se sienten seguros. De todas maneras, tampoco son unos santurrones que practican el celibato como penitencia este signo ama el sexo e irradia una energía sexual potentísima."
);
//const Piscis = new Signo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbvJN9PlDsUQjxfEaW-Q4ijbbseuhH5VUlMp8hOtV9S70bgv6Gs4ROw-e1QNSOrAwDBs&usqp=CAU',
const Piscis = new Signo('./images/piscis.jpg',
"Piscis", "Femenina", "Mutable", "Agua", "Neptuno", "330",
"Tienden a vivir de una manera emocional más que racional, de forma instintiva e intuitiva más que de forma lógica. Les cuesta mucho transmitir lo que perciben, no saben expresarlo con palabras sino con acciones... Una clave para los Piscis es cómo contactan con su sensibilidad. Además, aunque suele decirse de Piscis que es el signo de la ingenuidad, cuando es su respuesta ante el mundo de las sensaciones que contempla y percibe lo que le hace ser ingenuo o escéptico, dos extremos de la misma cuerda. En el amor, son personas fieles, adaptables y que buscan incansablemente una unión con la mente y el espíritu de su pareja más que una unión puramente sexual. Necesitan soñar conjuntamente con su media naranja y sentir para dar un amor puro y un sexo muy especial."
);


// Se crea un Array de signos
const signos = [Aries, Tauro, Geminis, Cancer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario, Piscis];
// Se define la clase signo con sus propiedades y metodos

// Se define la clase Planeta con sus propiedades y metodos
class Planeta{
    constructor(imagen, nombre, descripcion, rige){
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.rige = rige;
    }
}

// ************************************************************************************************************************

// Se instancian 10 objetos: Uno por cada planeta     

//const Sol = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1TA3nU-rFNiZJ1O8dolmLM-WKVWIpB8TUA&usqp=CAU",
const Sol = new Planeta("./images/sol.png",
"Sol",
"El Sol es el espíritu de nuestro ser. Es la esencia que marca el «color» de nuestra individualidad. Es una energía masculina (Yang). La auto-expresión del Ser. El signo en donde se encuentra nuestro Sol, nos describe las cualidades que emanamos naturalmente y que tiñe a la totalidad de nuestro ser. La casa astrológica en donde se encuentra el Sol, nos mostrará el área de vida en en donde nuestro ser brilla; el «centro de operaciones» en el cual gravita el resto de nuestro Ser. Palabras clave: Nuestra identidad, Lo que nos hace sentir vivos,     Autoexpresión creativa, Energía masculina (tanto en hombres como en mujeres), Donde «reinamos»",
"Leo"
);

//const Luna = new Planeta("https://pixabay.com/es/illustrations/lobo-luna-%c3%a1rbol-siluetas-aullido-647528/",
const Luna = new Planeta("./images/luna.png",
"Luna",
"La Luna es nuestras reacciones emociones. Simboliza la «experiencia» del entorno. Ella traduce estas experiencias a través de las emociones. Nos hace saber si algo es satisfactorio o no. Es la indicadora de lo que nos nutre. El signo en donde se encuentra la Luna, describe nuestro lenguaje emocional, las cualidades que nos nutren y a la vez, lo que nutrimos. La casa astrológica en donde se encuentra la Luna nos muestra el área de vida en donde encontramos confort emocional.",
"Cáncer"
);

//const Mercurio = new Planeta("https://w7.pngwing.com/pngs/771/36/png-transparent-astrological-symbols-mercury-astrological-sign-planet-symbols-mercury-miscellaneous-cross-horoscope-thumbnail.png",
const Mercurio = new Planeta("./images/mercurio.webp",
"Mercurio",
"Mercurio es nuestros procesos mentales y verbales. Cómo transmitimos y cómo recibimos la información. La inteligencia. Las imágenes visuales que recibimos del exterior. Las ideas. El signo en donde se encuentra Mercurio describe la forma en que adquirimos ideas, cómo nos comunicamos y la manera en que entendemos lo que observamos. La casa astrológica en donde se encuentra muestra el área de vida en donde nuestra mente se activa, en donde surgen ideas y aquello que nos gusta conversar. Palabras clave: Procesos mentales, Expresión verbal, Percepción visual,     Adaptabilidad mental, Reunión de datos.",
["Géminis","Virgo"]
);

//const Venus = new Planeta("https://w7.pngwing.com/pngs/137/734/png-transparent-venus-gender-symbol-female-cancer-symbol-miscellaneous-wikimedia-commons-cross-thumbnail.png",
const Venus = new Planeta("./images/venus.jpeg",
"Venus",
"Venus es la parte nuestra que goza. Representa lo que nos gusta, lo que valoramos. La gracia. La autoestima. El encanto personal. Lo que nos da placer. El signo en donde se encuentra Venus la forma en que sentimos placer, lo que nos gusta, lo que valoramos. La casa en donde se encuentra Venus indica en donde encontramos lo que nos da placer. Palabras clave: Lo que nos da placer, Lo que preferimos, Lo que atraemos,     Lo que valoramos, Expresión femenina (tanto en mujeres como hombres)",
["Tauro","Libra"]
);

//const Marte = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnYn8W-s-SZQIdwbr6CccmUGQu6DkmSlQig&usqp=CAU",
const Marte = new Planeta("./images/marte.webp",
"Marte",
"Marte el la parte nuestra que actúa por impulso.  La voluntad. El deseo de conquista. Lo que nos atrae. El deseo. El signo en donde se encuentra Marte muestra nuestra manera de ir por lo que queremos. La manera en que se expresa nuestra asertividad. La casa astrológica en donde se halla describe el área de vida que nos atrae, lo que despierta nuestro deseo, lo que salimos a buscar. Aquí vemos en donde se despierta nuestra asertividad. Palabras clave: Lo que buscamos, Lo que salimos a conquistar, Lo que nos atrae, Lo que nos impulsa, Expresión masculina (tanto en hombres como en mujeres)",
"Aries"
);

//const Jupiter = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvMOJWZM-iRMSrOMd2JUjA2GRrorPTL9rEg&usqp=CAU",
const Jupiter = new Planeta("./images/jupiter.webp",
"Jupiter",
"Júpiter es la parte nuestra que sale a explorar en búsqueda de la expansión de la conciencia. Representa la abundancia, el Saber. El signo en donde se encuentra Júpiter muestra las cualidades que poseemos en abundancia, la forma en que salimos a expandir nuestra consciencia, ya sea a nivel espiritual, material, mental o emocional. La casa astrológica en donde se encuentra nos describe el ámbito en donde salimos a la exploración, en donde nos expandimos, y en donde puede haber suerte y/o abundancia. Palabras clave: Lo que se expande, Lo que queremos experimentar, Lo que queremos saber, Lo que forma nuestras creencias, Lo que salimos a explorar con pasión",
"Sagitario"
);

//const Saturno = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkeqGAok5BbQuWupQI08gyg4nxTggWoPxIg&usqp=CAU",
const Saturno = new Planeta("./images/saturno.png",
"Saturno",
"Saturno es la parte nuestra que busca el logro. Nos muestra el camino hacia la madurez a través de ensayos y errores. Es el planeta que nos da la conciencia del tiempo y el espacio. El aprendiz y el maestro interior. El signo en donde se encuentra Saturno muestra la forma en que atravesamos los desafíos y las lecciones de vida. La casa astrológica en donde se encuentra describe el área de vida en donde pondremos todo nuestro empeño para lograr una estructura sólida. Palabras clave: Lo que estructura, Lo que nos pone los pies en la tierra, La realidad, La autoridad, La maestría",
"Capricornio"
);

//const Urano = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kLCjkQEfparAMZbAI2_QeVW-Rzo2O2hJPg&usqp=CAU",
const Urano = new Planeta("./images/urano.webp",
"Urano",
"Urano es la parte de nuestra consciencia que busca abrir nuevos espacios para crecer. Representa el inconformismo, la individuación social, el futuro. Su energía se manifiesta como una fuerza disruptiva de renovación. Desmantela estructuras caducas. El signo en donde se encuentra Urano muestra la forma en que buscamos innovar la realidad. La casa astrológica en donde se encuentra describe el ámbito en donde buscamos renovarnos.",
"Acuario"
);

//const Neptuno = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdtzJUjM3wpT2MH3hJdyyA0vPNLf4zSYgKg&usqp=CAU",
const Neptuno = new Planeta("./images/neptuno.jpeg",
"Neptuno",
"Neptuno es la parte de nuestra consciencia que busca atravesar los límites del mundo material. Representa nuestro anhelo por volver a ser uno con el Todo, ya sea a través de la espiritualidad, del arte o las drogas. Neptuno disuelve la realidad para trascenderla. El signo en donde se encuentra Neptuno señala la forma en la que experimentamos la disolución de lo individual y la unión con el Todo. La casa astrológica en donde se encuentra muestra el área de vida en donde experimentamos confusión hasta que podemos ver la ilusión de la separación entre lo material y lo inmaterial.",
"Piscis"
);

//const Pluton = new Planeta("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyN-XJBdlt0wo3oTrWYjj3mEEbHk3r58zZwg&usqp=CAU",
const Pluton = new Planeta("./images/pluton.png",
"Pluton",
"Plutón es la parte de nuestra consciencia que busca la transformación. Simboliza el proceso de metamorfosis, el cambio de un estado al otro. Actúa como depurador del Ser, trayendo a la superficie los hábitos y actitudes que necesitan actualizarse. El signo en donde se encuentra Plutón muestra la forma en que buscamos transformarnos. La casa astrológica en donde se encuentra muestra el ámbito en donde se produce esta transformación.",
"Escorpio"
);

// Se crea un Array de Planetas
const planetas = [Sol, Luna, Mercurio, Venus, Marte, Jupiter, Saturno, Urano, Neptuno, Pluton];

function validarFormulario(e){
console.log("1.1")
    e.preventDefault();
    console.log("1.2")
    console.log("Formulario Enviado");    
    console.log("1.3")
}

function show_image(src, width, height, top, alt) {
console.log('create element')    
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.top = top;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
function desplegar(objeto, formulario){
    //Obtenemos el nodo donde vamos a agregar los nuevos elementos
    let padre = document.getElementById(formulario);
    let li0 = document.createElement("li");
    padre.appendChild(li0);
    for (const property in objeto) {
        console.log(`${property}: ${objeto[property]}`);
          
        document.write
        let li = document.createElement(formulario);
        let str = property;
        let str1 = objeto[property];
        if(property === "imagen"){
            li.innerHTML = `<img src="${objeto[property]}" style="width="200px"; height="200px";"><br>`;
        } 
        if(str === "rige"){
            str = "Rige a";   
        }    
        else if(str === "descripcion"){
            str = "Descripción";   
        }
        else if(str === "cuspide"){
            str = "Cúspide";   
        }
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);
        if(str !== "imagen"){
            li.innerHTML = `${str2}: <strong>${objeto[property]}</strong><br>`;
        } 
        padre.appendChild(li);
    }
}


// ************************ Cambio botones por jQuery ***********************

/*
let formSigno = document.getElementById("formSigno");

formSigno.addEventListener("submit", buscarSigno);
*/
/*
let formPlaneta = document.getElementById("formPlaneta");

formPlaneta.addEventListener("submit", buscarPlaneta);
*/

$(document).ready(function() {
    $('#formSigno').click(buscarSigno);
  });


$(document).ready(function() {
    $('#formPlaneta').click(buscarPlaneta);
  });

// Evento: Buscar Signo
function buscarSigno(e){
    
    e.preventDefault();
    
    let formulario = e.target
    let signoBuscado = document.getElementById("buscadorSigno")
    const nombreSignos = [];    
    for(s of signos){
        nombreSignos.push(s.nombre.toUpperCase());
    }    
    let encuentro = nombreSignos.filter(elemento => elemento.includes(signoBuscado.value.toUpperCase()));    

    if(encuentro == undefined || formulario.children[0]== ""){
        alert("Signo no encontrado. Reintente con otras letras.");
    }
    else{
        const signoElegido = signos.find(signo => signo.nombre.toUpperCase() == encuentro);
     
        desplegar(signoElegido, "formSigno");
    }        
}

// Evento: Buscar Planeta
function buscarPlaneta(e){
    
    e.preventDefault();
    
    let formulario = e.target
    let planetaBuscado = document.getElementById("buscadorPlaneta")
    const nombrePlanetas = [];    
    for(s of planetas){
        nombrePlanetas.push(s.nombre.toUpperCase());
    }    
    let encuentro = nombrePlanetas.filter(elemento => elemento.includes(planetaBuscado.value.toUpperCase()));    

    if(encuentro == undefined || formulario.children[0]== ""){
        alert("Planeta no encontrado. Reintente con otras letras.");
    }
    else{
        const planetaElegido = planetas.find(planeta => planeta.nombre.toUpperCase() == encuentro);
     
        desplegar(planetaElegido, "formPlaneta");
    }        
}