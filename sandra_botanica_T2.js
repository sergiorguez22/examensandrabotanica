const sandra_botanica_T2 = {
  tema: 2,
  titulo: "Origen, evolución y diversidad de las plantas",
  penalizacionPorFallo: 0.3,
  tests: [
    // ======================= TEST 1 =======================
    {
      id: "T2-1",
      nombre: "Tema 2 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "En la selección artificial de Brassica oleracea, ¿qué hortaliza deriva de seleccionar la yema apical agrandada de la col silvestre?",
          opciones: ["Coliflor", "Repollo", "Brócoli", "Colirrábano"],
          correcta: 1,
          explicacion: "La variedad capitata, el repollo y la lombarda, procede de seleccionar la yema apical agrandada. La coliflor viene de la inflorescencia inmadura y el colirrábano del tallo engrosado."
        },
        {
          tipo: "vf",
          pregunta: "Todas las variedades cultivadas de Brassica oleracea pueden cruzarse entre sí y dar descendencia fértil porque son la misma especie.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Coliflor, repollo, brócoli o col de Bruselas son una sola especie obtenida por selección artificial; se cruzan y dan descendencia fértil."
        },
        {
          tipo: "multiple",
          pregunta: "El genotipo se define como:",
          opciones: ["El conjunto de caracteres observables de un individuo", "El conjunto de genes que un individuo lleva en su ADN", "Un rasgo concreto del fenotipo", "El resultado de la interacción con el ambiente"],
          correcta: 1,
          explicacion: "El genotipo es la suma de genes heredados; el fenotipo es lo expresado y el carácter es un componente concreto del fenotipo."
        },
        {
          tipo: "multiple",
          pregunta: "Las tres condiciones necesarias para que actúe la selección natural son:",
          opciones: ["Herencia, variación y diferencia en eficacia biológica", "Mutación, migración y deriva génica", "Aislamiento, hibridación y poliploidía", "Herencia, mutación y adaptación"],
          correcta: 0,
          explicacion: "Si un carácter es heredable, varía entre individuos y las variantes difieren en descendencia fértil, su frecuencia cambia entre generaciones."
        },
        {
          tipo: "multiple",
          pregunta: "En Biston betularia, la forma melánica pasó del 90 % al 15 % entre 1959 y 1995 debido a:",
          opciones: ["La aparición de nuevos depredadores", "La mejora ambiental tras las leyes de aire limpio", "Un cambio brusco en su alimentación", "La llegada de una mutación nueva"],
          correcta: 1,
          explicacion: "Al aclararse de nuevo los troncos, la forma clara volvió a ser críptica y la melánica perdió su ventaja. El cambio fue reversible."
        },
        {
          tipo: "multiple",
          pregunta: "La diferencia esencial entre un ecotipo y la plasticidad fenotípica es que:",
          opciones: ["El ecotipo solo aparece en animales", "En el ecotipo la diferencia es heredable y persiste al trasplantar", "La plasticidad tiene base genética", "El ecotipo desaparece en un jardín común"],
          correcta: 1,
          explicacion: "El ecotipo tiene base genética y se mantiene al trasplantar al mismo sitio; la plasticidad es ambiental y se borra en un jardín común."
        },
        {
          tipo: "vf",
          pregunta: "El parecido entre los cactus americanos y las euforbias africanas con forma de cactus es un ejemplo de homología.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Es analogía: convergencia adaptativa al desierto en linajes lejanos, sin ancestro común reciente. La homología implica ancestro común."
        },
        {
          tipo: "multiple",
          pregunta: "La poliploidización es un motor evolutivo especialmente importante en plantas porque:",
          opciones: ["Es letal en la mayoría de los casos", "Cerca del 70 % de las especies vegetales han sido poliploides en su historia", "Solo ocurre en animales", "Impide la formación de semillas"],
          correcta: 1,
          explicacion: "A diferencia de los animales, en plantas la poliploidía es frecuentísima y ha sido uno de los grandes motores de su diversificación."
        },
        {
          tipo: "multiple",
          pregunta: "Un alopoliploide se origina cuando:",
          opciones: ["Falla la meiosis dentro de una sola especie", "Se duplican los cromosomas de un individuo haploide", "Se hibridan dos especies y luego se duplica el genoma", "Dos gametos haploides de la misma especie se fusionan"],
          correcta: 2,
          explicacion: "La hibridación entre especies da un híbrido estéril; la posterior duplicación del genoma permite que cada cromosoma se empareje y recupera la fertilidad."
        },
        {
          tipo: "vf",
          pregunta: "El concepto biológico de especie es aplicable tanto a organismos asexuales como a fósiles.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Se basa en el aislamiento reproductivo, por lo que no sirve para organismos asexuales ni para fósiles. El concepto morfológico sí vale en fósiles."
        },
        {
          tipo: "multiple",
          pregunta: "El antepasado de las plantas terrestres se encuentra entre las algas verdes del grupo de los:",
          opciones: ["Cianobacterias", "Estreptófitos", "Diatomeas", "Rodófitos"],
          correcta: 1,
          explicacion: "Los estreptófitos, dentro de los clorófitos, comparten con las plantas caracteres como el fragmoplasto, la oogamia y la pared de celulosa."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas adaptaciones de los briófitos contra la desecación NO es de tipo reproductivo?",
          opciones: ["La cutícula", "Las envolturas estériles de los gametangios", "La retención del embrión en la planta madre", "Las envolturas estériles de los esporangios"],
          correcta: 0,
          explicacion: "La cutícula es una adaptación vegetativa; las otras tres protegen estructuras reproductoras o al embrión."
        },
        {
          tipo: "multiple",
          pregunta: "El xilema se caracteriza por:",
          opciones: ["Estar formado por células vivas con flujo bidireccional", "Transportar azúcares desde las hojas al resto de la planta", "Conducir agua en sentido ascendente con células muertas reforzadas con lignina", "Carecer por completo de lignina"],
          correcta: 2,
          explicacion: "El xilema lleva agua y sales hacia arriba con células muertas y lignificadas. El que transporta azúcares con células vivas es el floema."
        },
        {
          tipo: "vf",
          pregunta: "En la evolución de las plantas terrestres la tendencia general ha sido la reducción del gametófito y el predominio del esporófito.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "De briófitos a espermatófitos el esporófito diploide se hace dominante, lo que aumenta el material genético sobre el que actúa la selección."
        },
        {
          tipo: "multiple",
          pregunta: "Un grano de polen es, en sentido estricto:",
          opciones: ["Un gameto masculino", "Una espora muy reducida que contiene al gametófito masculino", "Un cigoto", "Un esporófito juvenil"],
          correcta: 1,
          explicacion: "El polen no es un gameto: es una micróspora que aloja al gametófito masculino, el cual produce las células espermáticas."
        },
        {
          tipo: "multiple",
          pregunta: "Las tres generaciones que conviven simultáneamente en una semilla de gimnosperma son:",
          opciones: ["Tegumento 2n, gametófito femenino n y embrión 2n", "Tres esporófitos diploides sucesivos", "Endospermo 3n, embrión 2n y tegumento n", "Gametófito masculino, gametófito femenino y cigoto"],
          correcta: 0,
          explicacion: "El tegumento es del esporófito parental, la reserva es gametófito haploide y el embrión es el nuevo esporófito de la generación siguiente."
        },
        {
          tipo: "multiple",
          pregunta: "La gran ventaja de la polinización zoófila de las angiospermas frente a la anemófila es que:",
          opciones: ["Produce una cantidad mucho mayor de polen", "Transporta el polen directamente entre flores de la misma especie, con menor gasto", "No requiere flores", "Solo funciona durante la noche"],
          correcta: 1,
          explicacion: "El polinizador lleva el polen de flor en flor de la misma especie, así la planta produce mucho menos polen y aún poliniza con éxito."
        },
        {
          tipo: "multiple",
          pregunta: "El fruto de las angiospermas deriva de:",
          opciones: ["El cáliz", "El receptáculo floral", "El ovario maduro", "El estambre"],
          correcta: 2,
          explicacion: "Tras la fecundación los óvulos se transforman en semillas y el ovario, en fruto. Por eso la semilla queda encerrada."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué mecanismo de dispersión protagoniza el arrendajo al enterrar bellotas y olvidar algunas?",
          opciones: ["Endozoocoria", "Epizoocoria", "Anemocoria", "Diszoocoria"],
          correcta: 3,
          explicacion: "La diszoocoria es la dispersión por animales que almacenan semillas y no recuperan todas; el arrendajo regenera así los robledales."
        },
        {
          tipo: "vf",
          pregunta: "Una drupa es un fruto carnoso con varias semillas dispersas en la pulpa, como el tomate.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "La drupa tiene un único hueso central, como la cereza, el melocotón o la aceituna. El tomate, con varias semillas en pulpa, es una baya."
        },
        {
          tipo: "multiple",
          pregunta: "En la clasificación moderna, las plantas, los animales y los hongos:",
          opciones: ["Forman tres dominios separados", "Son tres reinos dentro del dominio Eukarya", "Pertenecen al dominio Archaea", "Son organismos procariotas"],
          correcta: 1,
          explicacion: "Bacteria y Archaea son los dos dominios procariotas; plantas, animales, hongos y protistas son reinos dentro de Eukarya."
        },
        {
          tipo: "multiple",
          pregunta: "Un grupo parafilético es aquel que:",
          opciones: ["Incluye al antecesor común y a todos sus descendientes", "Incluye al antecesor común pero deja fuera a algunos descendientes", "Reúne linajes de orígenes evolutivos distintos", "No tiene ningún antecesor común"],
          correcta: 1,
          explicacion: "El ejemplo clásico son los reptiles sin las aves: incluyen el antecesor común pero dejan descendientes fuera. El único válido es el monofilético."
        },
        {
          tipo: "multiple",
          pregunta: "El epíteto específico fragilis puede repetirse en una planta, un hongo y un reptil porque:",
          opciones: ["Es un nombre de género", "Por sí solo no constituye un taxón", "Lo permite una excepción del Código", "Solo se usa realmente en plantas"],
          correcta: 1,
          explicacion: "El epíteto no es un taxón y carece de significado fuera del binomio; los nombres de género o de familia, en cambio, no pueden repetirse."
        },
        {
          tipo: "multiple",
          pregunta: "La abreviatura Salix spp. significa:",
          opciones: ["Una especie concreta de sauce", "Varias especies indeterminadas del género Salix", "Una subespecie de sauce", "Un híbrido de sauce"],
          correcta: 1,
          explicacion: "spp. indica varias especies del género sin determinar; sp. se referiría a una sola especie indeterminada. Ambas van en redonda."
        },
        {
          tipo: "multiple",
          pregunta: "En los briófitos, la fase dominante del ciclo y la planta verde que vemos corresponde al:",
          opciones: ["Esporófito diploide", "Gametófito haploide", "Protalo cordiforme", "Esporangio"],
          correcta: 1,
          explicacion: "En briófitos domina el gametófito haploide; el esporófito es pequeño y depende de él. Esta relación se invierte a partir de los pteridófitos."
        },
        {
          tipo: "multiple",
          pregunta: "Los hidroides y leptoides de algunos briófitos endohídricos se diferencian del xilema y el floema verdaderos en que:",
          opciones: ["Transportan mucho más agua", "Carecen de lignina y son menos eficientes", "Están completamente muertos", "Solo existen en pinos"],
          correcta: 1,
          explicacion: "Conducen agua y fotoasimilados, pero sin lignina y de forma poco eficiente, por lo que no son tejido vascular verdadero."
        },
        {
          tipo: "vf",
          pregunta: "Los líquenes son un grupo vegetal formado por la unión de dos especies de plantas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "No son plantas: son una simbiosis entre un hongo, normalmente ascomicete, y un alga verde unicelular o una cianobacteria."
        },
        {
          tipo: "multiple",
          pregunta: "Un liquen con aspecto de costra íntimamente adherida al sustrato, del que es casi inseparable, es de biotipo:",
          opciones: ["Foliáceo", "Fruticuloso", "Crustáceo", "Compuesto"],
          correcta: 2,
          explicacion: "El crustáceo forma una costra inseparable; el foliáceo es laminar, el fruticuloso erguido y el compuesto combina base y podecios."
        },
        {
          tipo: "multiple",
          pregunta: "La fase dominante del ciclo de un helecho, la planta con frondes que reconocemos, es el:",
          opciones: ["Gametófito", "Protalo cordiforme", "Esporófito", "Anteridio"],
          correcta: 2,
          explicacion: "En pteridófitos domina el esporófito; el gametófito se reduce a un pequeño protalo cordiforme efímero e independiente."
        },
        {
          tipo: "vf",
          pregunta: "Los pteridófitos se han independizado por completo del agua para su reproducción gracias a la semilla.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Los pteridófitos no tienen semilla y siguen necesitando agua libre para que sus espermatozoides flagelados naden hasta el arquegonio."
        }
      ]
    },
    // ======================= TEST 2 =======================
    {
      id: "T2-2",
      nombre: "Tema 2 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "Darwin y Wallace formularon la idea de la selección natural de forma independiente, y Darwin publicó On the Origin of Species en:",
          opciones: ["1809", "1858", "1859", "1882"],
          correcta: 2,
          explicacion: "Ambos llegaron a la misma conclusión en 1858 y Darwin publicó su obra al año siguiente, en 1859."
        },
        {
          tipo: "multiple",
          pregunta: "La adaptación, entendida como proceso, consiste en:",
          opciones: ["La aparición aleatoria de mutaciones", "El mantenimiento por selección natural de un carácter heredable ventajoso", "La pérdida de caracteres inútiles", "El cambio físico del ambiente"],
          correcta: 1,
          explicacion: "La adaptación es el proceso por el que la selección conserva un carácter heredable ventajoso, y también el carácter ya consolidado."
        },
        {
          tipo: "vf",
          pregunta: "Dos individuos con el mismo genotipo siempre presentan el mismo fenotipo, sea cual sea el ambiente.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "El fenotipo resulta de la interacción genotipo-ambiente; un mismo genotipo puede dar fenotipos distintos en ambientes diferentes."
        },
        {
          tipo: "multiple",
          pregunta: "El plátano de paseo Platanus × hispanica es:",
          opciones: ["Una especie de gimnosperma", "Un híbrido entre P. occidentalis y P. orientalis", "Un autopoliploide derivado del trigo", "Una subespecie de roble"],
          correcta: 1,
          explicacion: "El símbolo × indica origen híbrido; surgió al cultivar juntos en Europa el plátano americano y el oriental, y hoy se reproduce de forma estable."
        },
        {
          tipo: "multiple",
          pregunta: "La especiación simpátrica se caracteriza por:",
          opciones: ["Requerir siempre una barrera geográfica", "Producirse dentro del área de la especie ancestral", "Ser más frecuente en animales que en plantas", "Impedir cualquier hibridación"],
          correcta: 1,
          explicacion: "Ocurre en la misma patria, sin barrera geográfica, sobre todo por hibridación y poliploidización, y es muy frecuente en plantas."
        },
        {
          tipo: "multiple",
          pregunta: "Una de las ventajas de los poliploides frente a sus parentales diploides es:",
          opciones: ["Un menor tamaño celular", "Mayor heterocigosis y vigor", "La imposibilidad de mutar", "La pérdida permanente de fertilidad"],
          correcta: 1,
          explicacion: "Un tetraploide puede tener hasta cuatro alelos por gen, lo que aumenta las combinaciones y amortigua las mutaciones perjudiciales."
        },
        {
          tipo: "multiple",
          pregunta: "El concepto de especie más riguroso filogenéticamente, que la define como un linaje con destino histórico independiente, es el:",
          opciones: ["Morfológico", "Biológico", "Evolutivo", "Tipológico"],
          correcta: 2,
          explicacion: "El concepto evolutivo o genealógico es el más significativo y funciona con asexuales, pero es difícil de aplicar y no sirve para fósiles."
        },
        {
          tipo: "vf",
          pregunta: "La cutícula es una cubierta cérea de cutina que recubre las superficies aéreas y retarda enormemente la pérdida de agua.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Fue una de las primeras adaptaciones vegetativas de los briófitos contra la desecación al colonizar el medio terrestre."
        },
        {
          tipo: "multiple",
          pregunta: "El término embriófitos hace referencia a que todas las plantas terrestres:",
          opciones: ["Producen flores", "Retienen y protegen un embrión multicelular en la planta madre", "Carecen de semilla", "Viven sumergidas en el agua"],
          correcta: 1,
          explicacion: "El cigoto queda retenido en el arquegonio y se desarrolla como embrión protegido por tejidos maternos; de ahí el nombre embriófitos."
        },
        {
          tipo: "multiple",
          pregunta: "Durante el Carbonífero, el grupo vegetal dominante que formó las grandes reservas de carbón fue el de los:",
          opciones: ["Briófitos", "Pteridófitos", "Gimnospermas", "Angiospermas"],
          correcta: 1,
          explicacion: "Bosques de licopodios arborescentes como Lepidodendron, de hasta 40 m, dominaron los pantanos tropicales del Carbonífero."
        },
        {
          tipo: "multiple",
          pregunta: "En la semilla de las angiospermas, el tejido que alimenta al embrión durante la germinación es:",
          opciones: ["El tegumento 2n", "El endospermo triploide 3n", "El gametófito masculino", "La nucela"],
          correcta: 1,
          explicacion: "La doble fecundación forma un endospermo 3n exclusivo de angiospermas; en gimnospermas la reserva es el gametófito femenino haploide."
        },
        {
          tipo: "multiple",
          pregunta: "Las orquídeas del género Ophrys atraen a sus polinizadores mediante:",
          opciones: ["Néctar muy abundante", "Engaño sexual imitando a una abeja hembra", "Frutos carnosos coloreados", "Polen ligero adaptado al viento"],
          correcta: 1,
          explicacion: "El labelo imita el cuerpo y las feromonas de una hembra; el macho intenta copular, queda untado de polen y poliniza, sin recibir recompensa."
        },
        {
          tipo: "multiple",
          pregunta: "Ecballium elaterium, el pepinillo del diablo, dispersa sus semillas mediante:",
          opciones: ["Anemocoria", "Dispersión balística", "Endozoocoria", "Hidrocoria"],
          correcta: 1,
          explicacion: "El fruto acumula líquido a presión y, al madurar, se desprende y expulsa las semillas de forma explosiva hasta varios metros de distancia."
        },
        {
          tipo: "vf",
          pregunta: "La cuenca mediterránea es uno de los grandes hotspots de biodiversidad vegetal del planeta.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Alberga unas 25.000 especies, cerca de una décima parte de la flora mundial, en solo el 1,6 % de la superficie terrestre y con muchos endemismos."
        },
        {
          tipo: "multiple",
          pregunta: "El grupo ASGARD es relevante en sistemática porque:",
          opciones: ["Es un reino de plantas verdes", "Parece el pariente más próximo de los eucariotas dentro de las arqueas", "Es una bacteria fotosintética primitiva", "Es un tipo de liquen pionero"],
          correcta: 1,
          explicacion: "La evidencia molecular sitúa el origen de la célula eucariótica dentro del dominio Archaea, próxima al grupo ASGARD."
        },
        {
          tipo: "multiple",
          pregunta: "Según los sufijos taxonómicos, un nombre terminado en -aceae corresponde casi siempre a:",
          opciones: ["Una división", "Un orden", "Una familia", "Una clase"],
          correcta: 2,
          explicacion: "El sufijo -aceae indica familia; -ales indica orden y -phyta una división de plantas o algas."
        },
        {
          tipo: "multiple",
          pregunta: "En el nombre Quercus ilex subsp. ballota, el fragmento subsp. ballota indica:",
          opciones: ["El género", "Una subespecie", "El autor que la describió", "Un híbrido"],
          correcta: 1,
          explicacion: "Es nomenclatura trinomial: una variante geográfica reconocida dentro de la especie, frente a Q. ilex subsp. ilex, la alzina."
        },
        {
          tipo: "vf",
          pregunta: "Los espermatozoides de los briófitos son flagelados y necesitan una película de agua libre para la fecundación.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Por eso los briófitos, igual que los pteridófitos, dependen de ambientes húmedos para reproducirse sexualmente."
        },
        {
          tipo: "multiple",
          pregunta: "Los musgos cuyo esporófito brota del extremo apical del caulidio y que suelen formar céspedes o almohadillas se denominan:",
          opciones: ["Pleurocárpicos", "Acrocárpicos", "Endohídricos", "Poiquilohídricos"],
          correcta: 1,
          explicacion: "Los acrocárpicos llevan el esporófito terminal y crecen erectos; los pleurocárpicos lo llevan lateral y tapizan el sustrato."
        },
        {
          tipo: "multiple",
          pregunta: "El componente fotosintético más habitual de un liquen es:",
          opciones: ["Un musgo", "Un alga verde unicelular del género Trebouxia", "Una planta vascular", "Un protozoo"],
          correcta: 1,
          explicacion: "La mayoría son algas verdes como Trebouxia; en los cianolíquenes el simbionte es una cianobacteria capaz de fijar nitrógeno atmosférico."
        },
        {
          tipo: "multiple",
          pregunta: "En los pteridófitos, los soros son:",
          opciones: ["Las raíces adventicias", "Agrupaciones de esporangios en el envés de las frondes", "Los gametófitos cordiformes", "Las esporas individuales"],
          correcta: 1,
          explicacion: "Los soros son los puntos oscuros del envés; a menudo están protegidos por una lámina membranosa llamada indusio."
        },
        {
          tipo: "multiple",
          pregunta: "La heterosporia, presente en Selaginella y en todos los espermatófitos, consiste en producir:",
          opciones: ["Un solo tipo de espora", "Dos tipos de esporas, micrósporas y megásporas", "Esporas sin pared protectora", "Únicamente gametos"],
          correcta: 1,
          explicacion: "Las micrósporas dan gametófitos masculinos y las megásporas, femeninos; es un paso evolutivo previo a la aparición de la semilla."
        },
        {
          tipo: "multiple",
          pregunta: "La diferencia que da nombre a gimnospermas y angiospermas es:",
          opciones: ["El tipo de raíz", "Que la semilla esté desnuda o encerrada en el ovario", "El color de las hojas", "La presencia o ausencia de clorofila"],
          correcta: 1,
          explicacion: "Gimnosperma significa semilla desnuda y angiosperma semilla en un recipiente, el fruto derivado del ovario."
        },
        {
          tipo: "multiple",
          pregunta: "En las coníferas del género Pinus, el primer criterio de identificación de especies es:",
          opciones: ["El color de la flor", "El número de acículas por braquiblasto", "El diámetro del tronco", "La forma de la raíz"],
          correcta: 1,
          explicacion: "Los pinos tienen 2, 3 o 5 acículas por fascículo según la especie; es el carácter diagnóstico de partida."
        },
        {
          tipo: "vf",
          pregunta: "Las bayas del enebro son frutos verdaderos, igual que las bayas de las angiospermas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Son gálbulos carnosos, conos femeninos con brácteas suculentas. Las bayas verdaderas solo existen en angiospermas."
        },
        {
          tipo: "multiple",
          pregunta: "El saco embrionario, gametófito femenino de las angiospermas, consta típicamente de:",
          opciones: ["Un solo núcleo", "Siete células y ocho núcleos", "Varios arquegonios", "Cuatro micrósporas"],
          correcta: 1,
          explicacion: "Incluye la ovocélula, dos sinérgidas, tres antípodas y una célula central con dos núcleos polares; es exclusivo de angiospermas."
        },
        {
          tipo: "multiple",
          pregunta: "En la doble fecundación, la célula triploide que dará el endospermo se forma por la fusión de:",
          opciones: ["Dos células espermáticas entre sí", "Una célula espermática y la ovocélula", "Una célula espermática y los dos núcleos polares", "Los dos núcleos polares entre sí"],
          correcta: 2,
          explicacion: "Una célula espermática fecunda la ovocélula y forma el cigoto 2n; la otra se fusiona con los dos núcleos polares y forma el endospermo 3n."
        },
        {
          tipo: "multiple",
          pregunta: "Una flor con el ovario ínfero, hundido bajo el receptáculo y con los demás verticilos por encima, se denomina:",
          opciones: ["Hipógina", "Perígina", "Epígina", "Actinomorfa"],
          correcta: 2,
          explicacion: "El ovario ínfero define la flor epígina, como en las cucurbitáceas o el manzano; en la hipógina el ovario es súpero."
        },
        {
          tipo: "multiple",
          pregunta: "Una inflorescencia de flores apretadas sobre un receptáculo plano rodeado de brácteas, como en el girasol, es un:",
          opciones: ["Racimo", "Capítulo", "Amento", "Corimbo"],
          correcta: 1,
          explicacion: "El capítulo es típico de las asteráceas; el amento es una espiga colgante y el corimbo lleva flores a alturas distintas que terminan al mismo nivel."
        },
        {
          tipo: "vf",
          pregunta: "En la clasificación molecular actual, las dicotiledóneas tradicionales forman un grupo monofilético.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Las dicotiledóneas tradicionales son parafiléticas; solo las eudicotiledóneas, con polen tricolpado, forman un grupo monofilético."
        }
      ]
    },
    // ======================= TEST 3 =======================
    {
      id: "T2-3",
      nombre: "Tema 2 · Test 3",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "La evolución se define como:",
          opciones: ["El crecimiento de un individuo a lo largo de su vida", "El cambio en las características hereditarias de las poblaciones a lo largo de las generaciones", "La aparición de una mutación en una célula", "El desplazamiento estacional de una población"],
          correcta: 1,
          explicacion: "La evolución actúa sobre poblaciones y generaciones, no sobre individuos aislados ni sobre el desarrollo de un solo organismo."
        },
        {
          tipo: "vf",
          pregunta: "La selección artificial demuestra que eligiendo qué individuos se reproducen se pueden acentuar rasgos generación tras generación.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es la forma más intuitiva de selección; la col silvestre dio coliflor, repollo o brócoli al seleccionar distintos órganos."
        },
        {
          tipo: "multiple",
          pregunta: "El melanismo industrial de Biston betularia se considera un caso paradigmático de selección natural porque:",
          opciones: ["Es un cambio irreversible", "Se observa en tiempo histórico, con datos cuantitativos y es reversible", "Ocurrió una sola vez y no se repitió", "No tiene ninguna base genética conocida"],
          correcta: 1,
          explicacion: "Al cambiar la presión selectiva la frecuencia de la variante cambió en sentido contrario; incluso se conoce su base genética en el gen cortex."
        },
        {
          tipo: "multiple",
          pregunta: "Las hojas pequeñas y duras de zona soleada y las grandes y blandas de zona umbría en una misma encina son un ejemplo de:",
          opciones: ["Ecotipo", "Especiación alopátrica", "Plasticidad fenotípica", "Hibridación"],
          correcta: 2,
          explicacion: "Es plasticidad fenotípica: un mismo genotipo, incluso el mismo árbol, produce fenotipos distintos según el ambiente."
        },
        {
          tipo: "multiple",
          pregunta: "En la especiación alopátrica, el primer paso del proceso es:",
          opciones: ["La duplicación del genoma", "La aparición de una barrera geográfica que interrumpe el flujo génico", "La hibridación entre dos especies", "La autopolinización forzada"],
          correcta: 1,
          explicacion: "Una barrera separa la población; a ambos lados se acumulan cambios de forma independiente hasta que el cruzamiento se vuelve imposible."
        },
        {
          tipo: "vf",
          pregunta: "La poliploidía es frecuente en plantas pero rara y a menudo letal en animales.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Por eso es uno de los grandes motores de la diversificación vegetal y apenas tiene relevancia en la evolución animal."
        },
        {
          tipo: "multiple",
          pregunta: "El trigo cultivado Triticum aestivum es un ejemplo de:",
          opciones: ["Autopoliploide diploide", "Alopoliploide hexaploide originado de varias especies silvestres", "Híbrido estéril sin duplicación", "Especie estrictamente diploide"],
          correcta: 1,
          explicacion: "Su historia incluye dos cruces sucesivos con duplicación cromosómica entre especies silvestres distintas, hasta dar el hexaploide actual."
        },
        {
          tipo: "multiple",
          pregunta: "La principal ventaja de la semilla frente a la espora de los pteridófitos es que:",
          opciones: ["Es de menor tamaño", "Aporta protección y sustancias de reserva al embrión", "Germina siempre de forma inmediata al caer", "Evita tener que dispersarse"],
          correcta: 1,
          explicacion: "La semilla protege al embrión durante la dispersión y la espera, y le aporta reservas para germinar de forma más fiable que una espora."
        },
        {
          tipo: "multiple",
          pregunta: "La polinización en las gimnospermas es:",
          opciones: ["Casi exclusivamente zoófila", "Casi exclusivamente anemófila", "Siempre hidrófila", "Por autopolinización obligada"],
          correcta: 1,
          explicacion: "Las gimnospermas, anemófilas, producen enormes cantidades de polen que el viento dispersa al azar."
        },
        {
          tipo: "multiple",
          pregunta: "Las angiospermas aparecieron y se diversificaron principalmente durante el:",
          opciones: ["Ordovícico", "Devónico", "Carbonífero", "Cretácico"],
          correcta: 3,
          explicacion: "Surgieron en el Cretácico temprano, hace unos 130 m.a., y en menos de 50 m.a. desplazaron a las gimnospermas en muchos ecosistemas."
        },
        {
          tipo: "multiple",
          pregunta: "Las cuatro piezas de una flor completa, ordenadas de fuera hacia dentro, son:",
          opciones: ["Corola, cáliz, gineceo y androceo", "Cáliz, corola, androceo y gineceo", "Androceo, gineceo, cáliz y corola", "Gineceo, androceo, corola y cáliz"],
          correcta: 1,
          explicacion: "Cáliz son los sépalos, corola los pétalos, androceo los estambres y gineceo los carpelos, en ese orden hacia el centro."
        },
        {
          tipo: "vf",
          pregunta: "El velcro fue inventado tras observar los ganchos de los frutos de la bardana enganchados al pelaje, un caso de epizoocoria.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "George de Mestral lo patentó en 1948 inspirándose en los frutos de Arctium, que se dispersan sobre el animal y no dentro de él."
        },
        {
          tipo: "multiple",
          pregunta: "En el reparto de especies eucariotas descritas, el reino con mayor número de especies catalogadas es el de los:",
          opciones: ["Vegetales", "Hongos", "Animales", "Protistas"],
          correcta: 2,
          explicacion: "Los animales suponen alrededor del 77 % del catálogo descrito, seguidos a distancia por las plantas con un 17 %."
        },
        {
          tipo: "multiple",
          pregunta: "Un grupo polifilético se define como aquel que:",
          opciones: ["Incluye al antecesor común y a todos sus descendientes", "Reúne miembros con antecesores comunes distintos por convergencia", "Deja fuera a algunos descendientes del antecesor común", "Es el único válido en sistemática moderna"],
          correcta: 1,
          explicacion: "El polifilético agrupa organismos con al menos dos orígenes evolutivos independientes; el único grupo válido es el monofilético."
        },
        {
          tipo: "multiple",
          pregunta: "En el nombre Juniperus communis L., la abreviatura final L. corresponde a:",
          opciones: ["El epíteto específico", "La autoría, es decir Linneo", "El nombre de la división", "Una subespecie"],
          correcta: 1,
          explicacion: "La autoría indica quién describió la especie; se coloca tras el binomio, sin cursiva, y a veces se abrevia."
        },
        {
          tipo: "vf",
          pregunta: "Los briófitos son poiquilohídricos: su grado de hidratación depende directamente de la humedad ambiental.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Carecen de raíces verdaderas y de cutícula impermeable; en seco entran en criptobiosis y se rehidratan cuando vuelve el agua."
        },
        {
          tipo: "multiple",
          pregunta: "La turba que se usa como sustrato y combustible procede principalmente de:",
          opciones: ["Líquenes crustáceos", "Esfagnos parcialmente descompuestos", "Helechos arborescentes", "Algas marinas"],
          correcta: 1,
          explicacion: "Los esfagnos del género Sphagnum forman la turba; en fresco retienen agua hasta veinte veces su peso y tienen propiedades antisépticas."
        },
        {
          tipo: "multiple",
          pregunta: "En la simbiosis liquénica, el hongo aporta:",
          opciones: ["Los compuestos orgánicos de la fotosíntesis", "Protección frente a la desecación, soporte y captación de agua y minerales", "La capacidad de fotosintetizar", "El nitrógeno atmosférico fijado"],
          correcta: 1,
          explicacion: "El hongo protege y capta agua y sales; el alga o cianobacteria aporta los compuestos orgánicos obtenidos por fotosíntesis."
        },
        {
          tipo: "multiple",
          pregunta: "Los pteridófitos ibéricos alcanzan su mayor riqueza de especies en:",
          opciones: ["El sureste árido peninsular", "La fachada atlántica y los Pirineos", "El valle del Ebro", "El interior castellano seco"],
          correcta: 1,
          explicacion: "Su dependencia del agua para la fecundación los concentra en las zonas más húmedas y orográficamente complejas del norte peninsular."
        },
        {
          tipo: "multiple",
          pregunta: "La prefoliación circinada, característica de muchos helechos, consiste en que:",
          opciones: ["Las raíces crecen en espiral", "La fronde joven brota enrollada en forma de báculo", "Las esporas se agrupan en soros", "El tallo se ramifica por dicotomía"],
          correcta: 1,
          explicacion: "La fronde joven aparece enrollada en espiral y se va desenrollando al crecer; es un carácter diagnóstico fácil de reconocer en campo."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia Mi Cormo Heteromorfo Heterosporiza Sin Agua y Triunfa resume los caracteres de:",
          opciones: ["Los briófitos", "Los líquenes", "Los espermatófitos", "Los pteridófitos"],
          correcta: 2,
          explicacion: "Recoge: monofilético, cormófito, ciclo heteromorfo con esporófito dominante, heterospórico, fecundación sin agua y éxito terrestre."
        },
        {
          tipo: "multiple",
          pregunta: "Las dos especies autóctonas del género Abies en la Península Ibérica son:",
          opciones: ["Abies alba y Abies pinsapo", "Pinus pinea y Pinus nigra", "Juniperus communis y J. thurifera", "Taxus baccata y Tetraclinis articulata"],
          correcta: 0,
          explicacion: "Abies alba habita en los Pirineos y Abies pinsapo, el pinsapo, es un endemismo de las sierras béticas occidentales."
        },
        {
          tipo: "multiple",
          pregunta: "El árbol más singular de la familia Taxaceae en la flora ibérica, dioico y muy tóxico salvo su arilo rojo, es:",
          opciones: ["El enebro", "El pinsapo", "El tejo", "El araar"],
          correcta: 2,
          explicacion: "Taxus baccata contiene taxina, un alcaloide cardiotóxico, en todas sus partes excepto el arilo carnoso que rodea la semilla."
        },
        {
          tipo: "vf",
          pregunta: "Las semillas de las gimnospermas quedan encerradas dentro de un fruto que deriva del ovario.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Las gimnospermas no tienen ovario ni fruto verdadero; sus semillas quedan desnudas sobre escamas o conos."
        },
        {
          tipo: "multiple",
          pregunta: "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero hoy se sabe que esa semejanza es:",
          opciones: ["Fruto de un ancestro común reciente", "Convergencia evolutiva", "Resultado de una hibridación", "Consecuencia de la poliploidización"],
          correcta: 1,
          explicacion: "Los estudios moleculares sitúan a los gnetófitos dentro o muy próximos a las coníferas; el parecido con las angiospermas es convergente."
        },
        {
          tipo: "multiple",
          pregunta: "Una flor con un solo plano de simetría, como la de una orquídea o una labiada, es:",
          opciones: ["Actinomorfa", "Zigomorfa", "Hipógina", "Apocárpica"],
          correcta: 1,
          explicacion: "La zigomorfia o simetría bilateral es un carácter derivado, asociado a la polinización especializada por insectos."
        },
        {
          tipo: "multiple",
          pregunta: "El polen tricolpado, con tres surcos germinativos, es un carácter diagnóstico de:",
          opciones: ["Las gimnospermas", "Las monocotiledóneas", "Las eudicotiledóneas", "Las angiospermas basales"],
          correcta: 2,
          explicacion: "El polen monocolpado es primitivo y aparece en basales, magnólidas y monocotiledóneas; el tricolpado define a las eudicotiledóneas."
        },
        {
          tipo: "multiple",
          pregunta: "La familia de angiospermas con mayor número de especies descritas es:",
          opciones: ["Poaceae", "Orchidaceae", "Asteraceae", "Fabaceae"],
          correcta: 2,
          explicacion: "Las asteráceas o compuestas encabezan la lista con unas 32.000 especies, seguidas de las orquídeas con unas 28.000."
        },
        {
          tipo: "vf",
          pregunta: "La exina del grano de polen está formada por esporopolenina, uno de los compuestos orgánicos más resistentes que se conocen.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Su resistencia permite conservar el polen millones de años, base de la palinología para reconstruir paisajes y climas del pasado."
        },
        {
          tipo: "multiple",
          pregunta: "Una planta dioica, como el kiwi o el ginkgo, se caracteriza por:",
          opciones: ["Tener todas las flores bisexuales", "Llevar flores masculinas y femeninas en el mismo individuo", "Llevar cada sexo en individuos separados", "Carecer por completo de flores"],
          correcta: 2,
          explicacion: "En las dioicas hay pies macho y pies hembra; para obtener fruto se necesita al menos un individuo de cada sexo relativamente cerca."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T2; }
if (typeof window !== 'undefined') { window.sandra_botanica_T2 = sandra_botanica_T2; }
