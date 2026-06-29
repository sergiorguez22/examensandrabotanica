const sandra_botanica_T5 = {
  tema: 5,
  titulo: "Tema 5 · Vegetación de zonas templadas",
  penalizacionPorFallo: 0.3,
  tests: [
    // =======================================================================
    // TEST 1
    // =======================================================================
    {
      id: "T5-1",
      titulo: "Tema 5 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "El cinturón de las zonas templadas se extiende aproximadamente entre las latitudes:",
          opciones: ["10° y 30°", "30° y 60°", "60° y 80°", "0° y 23,5°"],
          correcta: 1,
          explicacion: "Las latitudes templadas ocupan la franja entre los 30° y los 60°, donde la estacionalidad ya no la domina el frío extremo sino la alternancia de invierno y verano."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál es el parámetro que principalmente separa el bosque caducifolio de las estepas dentro de la misma franja latitudinal?",
          opciones: ["La temperatura media anual", "La disponibilidad de agua", "La altitud sobre el nivel del mar", "La duración del día en verano"],
          correcta: 1,
          explicacion: "Comparten franja latitudinal; lo que los separa es el agua: con más de 700 mm repartidos aparece bosque cerrado, y donde la precipitación cae, las gramíneas sustituyen a los árboles."
        },
        {
          tipo: "multiple",
          pregunta: "El bosque templado caducifolio ocupa aproximadamente qué porcentaje de la superficie terrestre:",
          opciones: ["2 %", "10 %", "25 %", "40 %"],
          correcta: 1,
          explicacion: "Cubre en torno al 10 % de las tierras emergidas, concentrado en el hemisferio norte entre los 35° y los 55° de latitud."
        },
        {
          tipo: "multiple",
          pregunta: "En el hemisferio sur, el bosque templado caducifolio aparece de forma muy reducida solo en:",
          opciones: ["Sudáfrica y SE de Australia", "Isla sur de Nueva Zelanda y suroeste de Chile", "Tasmania y Patagonia oriental", "Madagascar y sur de Brasil"],
          correcta: 1,
          explicacion: "Su escasa extensión en el hemisferio sur se debe a la falta de masas continentales en esas latitudes; solo persiste en la isla sur de Nueva Zelanda y el SO de Chile."
        },
        {
          tipo: "multiple",
          pregunta: "El rango de precipitación anual típico del bosque templado caducifolio es:",
          opciones: ["300-700 mm", "700-2000 mm", "2000-4000 mm", "menos de 300 mm"],
          correcta: 1,
          explicacion: "Recibe entre 700 y 2000 mm repartidos a lo largo del año, con poca proporción en forma de nieve, a diferencia de taiga y tundra."
        },
        {
          tipo: "vf",
          pregunta: "Los suelos del bosque templado caducifolio son suelos pardos (cambisol) con humus de tipo mull, muy fértiles.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Son de los mejores del planeta para la agricultura: suelos pardos con humus mull y mineralización rápida, motivo por el que muchas de estas zonas se desforestaron históricamente."
        },
        {
          tipo: "multiple",
          pregunta: "En verano, con el dosel cerrado, la radiación fotosintéticamente activa que llega al suelo del bosque caducifolio cae hasta:",
          opciones: ["Cerca del 50 %", "Aproximadamente el 25 %", "Solo el 2 %", "Prácticamente el 0 %"],
          correcta: 2,
          explicacion: "En invierno sin hojas llega casi el 100 % de la radiación al suelo; en verano, con el dosel cerrado, ese valor se desploma al 2 % de la PAR."
        },
        {
          tipo: "multiple",
          pregunta: "Las geófitas nemorales (narcisos, jacintos, anémonas) completan su ciclo aéreo:",
          opciones: ["En pleno verano con el dosel cerrado", "En la ventana primaveral entre el deshielo y el cierre del dosel", "Durante el otoño, tras la caída de la hoja", "En invierno, bajo la nieve"],
          correcta: 1,
          explicacion: "Aprovechan los órganos subterráneos de reserva para florecer y completar su ciclo aéreo en la ventana de luz primaveral, antes de que el dosel cierre."
        },
        {
          tipo: "multiple",
          pregunta: "La 'monoespecificidad' del estrato arbóreo (hayedos puros, robledales puros) es típica del bosque caducifolio de:",
          opciones: ["Norteamérica oriental", "Europa", "Este de Asia", "Hemisferio sur"],
          correcta: 1,
          explicacion: "Las glaciaciones cuaternarias y la barrera de Pirineos y Alpes redujeron la diversidad arbórea europea; por eso dominan bosques puros, frente a los mixtos de Norteamérica y Asia."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estos NO es uno de los siete géneros principales de árboles caducifolios del hemisferio norte?",
          opciones: ["Fagus", "Quercus", "Eucalyptus", "Betula"],
          correcta: 2,
          explicacion: "Los siete géneros principales son Fagus, Quercus, Tilia, Acer, Ulmus, Fraxinus y Betula. Eucalyptus es un género mediterráneo/oceánico australiano, no caducifolio templado."
        },
        {
          tipo: "multiple",
          pregunta: "El fruto característico de la familia Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
          opciones: ["Una sámara alada", "Una cúpula o cascabillo de origen involucral", "Una baya carnosa", "Un utrículo membranoso"],
          correcta: 1,
          explicacion: "El fruto de las Fagáceas es un aquenio seco indehiscente rodeado parcial o totalmente por una cúpula o cascabillo de origen involucral."
        },
        {
          tipo: "multiple",
          pregunta: "Dentro del género Quercus en la península, los marcescentes submediterráneos (hoja seca que permanece hasta primavera) son:",
          opciones: ["Q. ilex y Q. suber", "Q. robur y Q. petraea", "Q. faginea y Q. pyrenaica", "Q. coccifera y Q. ilex"],
          correcta: 2,
          explicacion: "Los marcescentes son el quejigo (Q. faginea) y el melojo o rebollo (Q. pyrenaica); Q. robur/petraea son caducifolios y Q. ilex/suber/coccifera perennifolios."
        },
        {
          tipo: "multiple",
          pregunta: "Magnolios y tuliperos, conservados en Norteamérica y este de Asia pero extintos en Europa, pertenecen a:",
          opciones: ["Las angiospermas basales", "Las monocotiledóneas", "Las gimnospermas", "Las eudicotiledóneas avanzadas"],
          correcta: 0,
          explicacion: "Son angiospermas basales, el grupo más antiguo de plantas con flor: piezas florales numerosas, no diferenciadas (tépalos) y dispuestas en espiral."
        },
        {
          tipo: "multiple",
          pregunta: "En el bosque caducifolio del hemisferio sur, el género arbóreo dominante (las 'hayas del sur') es:",
          opciones: ["Fagus", "Nothofagus", "Quercus", "Betula"],
          correcta: 1,
          explicacion: "Nothofagus domina los caducifolios australes (lenga, ñirre, coihue, raulí); su distribución es testimonio de la antigua conexión de Gondwana."
        },
        {
          tipo: "vf",
          pregunta: "El alerce andino (Fitzroya cupressoides) es una de las coníferas acompañantes del bosque caducifolio austral y uno de los árboles más longevos del planeta.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Fitzroya cupressoides supera los 3.500 años de edad y acompaña a Nothofagus junto a araucarias y mañíos (Podocarpus) en el hemisferio sur."
        },
        {
          tipo: "multiple",
          pregunta: "Las estepas y praderas templadas se sitúan topográficamente en:",
          opciones: ["Zonas de montaña con fuerte pendiente", "Grandes planicies sin barreras orográficas", "Valles fluviales encajados", "Mesetas volcánicas costeras"],
          correcta: 1,
          explicacion: "Son siempre grandes planicies continentales, sin relieves que retengan la humedad atmosférica: prairies, estepa euroasiática y pampa-Patagonia."
        },
        {
          tipo: "multiple",
          pregunta: "El mecanismo físico de la 'sombra de lluvias' (efecto orográfico) explica que las estepas aparezcan:",
          opciones: ["A barlovento de las cordilleras, donde precipita el aire húmedo", "A sotavento de las cordilleras, donde el aire baja seco y caliente", "En las cumbres, por encima del límite del bosque", "En las llanuras litorales más húmedas"],
          correcta: 1,
          explicacion: "El aire húmedo descarga su precipitación al subir por barlovento; al cruzar al lado de sotavento baja seco y caliente, creando estepa donde latitudinalmente debería haber bosque."
        },
        {
          tipo: "multiple",
          pregunta: "Según el concepto de 'bioma perturbado', sin fuego ni herbivoría las praderas templadas más húmedas:",
          opciones: ["Se convierten en desierto en pocos años", "Se mantienen estables indefinidamente", "Se convierten en bosque en pocas décadas", "Se transforman en tundra"],
          correcta: 2,
          explicacion: "La vegetación clímax de la estepa no es la dictada por el clima, sino la mantenida por perturbación recurrente; sin ella, las praderas húmedas se convierten en bosque en décadas."
        },
        {
          tipo: "multiple",
          pregunta: "En las plantas de estepa, ¿qué porcentaje aproximado de la biomasa vegetal se encuentra bajo tierra?",
          opciones: ["30-40 %", "50-60 %", "70-80 %", "91-95 %"],
          correcta: 3,
          explicacion: "Entre el 91 y el 95 % de la biomasa es radicular: una densa red que estabiliza el suelo y permite acceder al agua profunda en sequía."
        },
        {
          tipo: "vf",
          pregunta: "El crecimiento de las gramíneas se produce por la base de la hoja, lo que permite que el césped rebrote y soporte la siega.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "A diferencia de los árboles, que crecen por la punta, las gramíneas crecen por la base de la hoja, de modo que siguen creciendo aunque se corte la parte superior."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Poaceae pertenece a las monocotiledóneas y comprende aproximadamente:",
          opciones: ["110 géneros y 5.000 especies", "650 géneros y 9.500 especies", "200 géneros y 3.000 especies", "8 géneros y 200 especies"],
          correcta: 1,
          explicacion: "Las gramíneas suman unos 650 géneros y 9.500 especies, todas herbáceas, cosmopolitas y de enorme importancia económica (cereales)."
        },
        {
          tipo: "multiple",
          pregunta: "La unidad floral básica de las gramíneas es:",
          opciones: ["La espiguilla", "El capítulo", "El verticilastro", "La umbela"],
          correcta: 0,
          explicacion: "La espiguilla es una pequeña espiga con 1 o varias flores reducidas protegidas por brácteas (glumas, lema y pálea); es la unidad floral característica de Poaceae."
        },
        {
          tipo: "multiple",
          pregunta: "El fruto típico de las gramíneas, con la pared del fruto soldada a la semilla (el grano del trigo), es:",
          opciones: ["Un aquenio libre", "Un cariópside", "Una sámara", "Un utrículo"],
          correcta: 1,
          explicacion: "El cariópside es un aquenio cuya pared del fruto está soldada a la semilla; es el grano de los cereales."
        },
        {
          tipo: "multiple",
          pregunta: "Las gramíneas suministran aproximadamente qué porcentaje de los cultivos mundiales:",
          opciones: ["20 %", "40 %", "70 %", "95 %"],
          correcta: 2,
          explicacion: "Suministran cerca del 70 % de los cultivos mundiales: cereales (trigo, arroz, maíz, cebada...), caña de azúcar, forrajeras, césped y ornamentales."
        },
        {
          tipo: "multiple",
          pregunta: "El plumero de la pampa (Cortaderia selloana), prohibido su comercio en España desde 2022, es un caso paradigmático de:",
          opciones: ["Especie protegida por sobrerrecolección", "Especie invasora introducida como ornamental", "Reliquia terciaria en peligro", "Cultivo industrial en expansión"],
          correcta: 1,
          explicacion: "Introducido en el s. XIX como ornamental, hoy es invasor en la cornisa cantábrica; su prohibición (RD 216/2019) ilustra por qué conviene conocer el comportamiento ecológico antes que el estético."
        },
        {
          tipo: "multiple",
          pregunta: "Según la regla mnemotécnica inglesa 'sedges have edges', las Cyperaceae se distinguen de las Poaceae por tener el tallo:",
          opciones: ["Cilíndrico y hueco", "Macizo y de sección triangular", "Cuadrangular y aromático", "Aplanado y articulado"],
          correcta: 1,
          explicacion: "Las ciperáceas tienen tallo macizo de sección triangular (con aristas), frente al tallo cilíndrico hueco con nudos macizos de las gramíneas."
        },
        {
          tipo: "multiple",
          pregunta: "El género más importante de Cyperaceae en zonas templadas, con unas 2.000 especies y fruto en utrículo, es:",
          opciones: ["Cyperus", "Scirpus", "Carex", "Juncus"],
          correcta: 2,
          explicacion: "Carex (cárices o juncias) es característico de praderas frescas, turberas y márgenes de bosque; su aquenio encerrado en un utrículo es el rasgo más diagnóstico del género."
        },
        {
          tipo: "vf",
          pregunta: "Los verdaderos 'juncos' pertenecen al género Juncus (familia Juncaceae), no a las Cyperaceae.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Muchas Cyperaceae se llaman vulgarmente 'juncos', pero los verdaderos juncos son del género Juncus, familia Juncaceae."
        },
        {
          tipo: "multiple",
          pregunta: "El suelo dominante de las praderas templadas (frente al suelo pardo del caducifolio) es:",
          opciones: ["Podsol", "Chernozem (negro)", "Cambisol pardo", "Histosol turboso"],
          correcta: 1,
          explicacion: "Las praderas desarrollan chernozem (suelo negro), y las estepas más secas kastañozem y aridosoles, frente al suelo pardo (cambisol) del bosque caducifolio."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia de las '4 P de las estepas' incluye: Pasto, Planicie, Perturbación y...",
          opciones: ["Precipitación abundante", "Profundidad radicular", "Perennidad foliar", "Pendiente acusada"],
          correcta: 1,
          explicacion: "Las 4 'P': Pasto (gramíneas), Planicie (topografía), Perturbación (fuego, herbivoría, heladas) y Profundidad radicular (95 % bajo tierra)."
        }
      ]
    },
    // =======================================================================
    // TEST 2
    // =======================================================================
    {
      id: "T5-2",
      titulo: "Tema 5 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "En el bosque templado caducifolio, ¿en qué momento del año llega más radiación al suelo del bosque?",
          opciones: ["En pleno verano", "En abril, antes de que las hojas se desplieguen", "En el solsticio de invierno", "Justo tras la caída de la hoja en otoño"],
          correcta: 1,
          explicacion: "El máximo de radiación al suelo se da en abril, en la ventana sin hojas previa al despliegue del dosel; en verano la radiación al suelo es mínima."
        },
        {
          tipo: "multiple",
          pregunta: "La asimetría este-oeste de los continentes explica que, a igual latitud, la costa oeste sea más cálida porque:",
          opciones: ["Recibe más horas de sol", "Recibe corrientes oceánicas cálidas", "Está a menor altitud", "Tiene suelos más oscuros"],
          correcta: 1,
          explicacion: "Las corrientes cálidas (del Golfo en Europa, de Alaska en Norteamérica) templan la fachada oeste; por eso el haya europea llega hasta Noruega."
        },
        {
          tipo: "multiple",
          pregunta: "El humus mull, característico del bosque caducifolio, se diferencia del mor de la taiga en que:",
          opciones: ["Es ácido, compactado y sin lombrices", "Es una mezcla íntima de materia orgánica y mineral, con alta actividad de lombrices", "Carece por completo de materia orgánica", "Solo aparece en suelos encharcados"],
          correcta: 1,
          explicacion: "El mull es el humus 'ideal': mezcla íntima orgánico-mineral, pH ligeramente ácido a neutro y alta actividad de lombrices; es lo opuesto al mor ácido y compactado de la taiga."
        },
        {
          tipo: "multiple",
          pregunta: "El hábito caducifolio (pérdida sincronizada de hojas al final del verano) funciona como defensa contra el frío y como:",
          opciones: ["Mecanismo de dispersión de semillas", "Mecanismo de reciclaje de nutrientes (N, P, K)", "Forma de aumentar la transpiración", "Estrategia para atraer polinizadores"],
          correcta: 1,
          explicacion: "Antes de soltar la hoja, la planta retira nitrógeno, fósforo y potasio; la caducifolia es a la vez defensa frente al frío y reciclaje de nutrientes."
        },
        {
          tipo: "multiple",
          pregunta: "La estratificación vertical del bosque templado caducifolio presenta cuatro niveles. ¿Cuál es el estrato basal?",
          opciones: ["El arbustivo", "El herbáceo", "Los musgos y líquenes", "El dosel arbóreo"],
          correcta: 2,
          explicacion: "Los cuatro estratos son arbóreo, arbustivo, herbáceo y basal; este último lo componen musgos y líquenes."
        },
        {
          tipo: "multiple",
          pregunta: "En las Fagaceae, las flores masculinas se agrupan en amentos y la polinización es:",
          opciones: ["Entomófila (por insectos)", "Anemófila (por viento)", "Ornitófila (por aves)", "Hidrófila (por agua)"],
          correcta: 1,
          explicacion: "Las Fagáceas son árboles monoicos y anemófilos: polinización por viento, con flores masculinas en amentos y femeninas solitarias o en grupos pequeños."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estos géneros tiene sámaras (frutos alados de dispersión anemócora)?",
          opciones: ["Quercus", "Fagus", "Acer", "Castanea"],
          correcta: 2,
          explicacion: "Acer y Fraxinus producen sámaras de dispersión por viento; Quercus y Fagus producen frutos secos con cúpula de dispersión zoócora."
        },
        {
          tipo: "multiple",
          pregunta: "El género Quercus de hoja esclerófila perenne, propio del ambiente mediterráneo, incluye:",
          opciones: ["Q. robur y Q. petraea", "Q. faginea y Q. pyrenaica", "Q. ilex, Q. suber y Q. coccifera", "Q. canariensis y Q. pubescens"],
          correcta: 2,
          explicacion: "Los perennifolios mediterráneos esclerófilos son la encina (Q. ilex), el alcornoque (Q. suber) y la coscoja (Q. coccifera)."
        },
        {
          tipo: "vf",
          pregunta: "El olmo (Ulmus) ha sido muy diezmado en las vegas por la grafiosis.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Los olmos, propios de vegas y riberas, están hoy muy diezmados por la grafiosis, enfermedad fúngica que ha devastado sus poblaciones."
        },
        {
          tipo: "multiple",
          pregunta: "Géneros como Magnolia, Liriodendron, Liquidambar y Carya se conservan en Norteamérica y Asia pero en Europa solo se encuentran hoy:",
          opciones: ["En bosques naturales relictos", "Como ornamentales en jardines y parques", "En las laurisilvas canarias", "En turberas de montaña"],
          correcta: 1,
          explicacion: "Estos géneros subtropicales se extinguieron en Europa durante las glaciaciones del Pleistoceno; hoy solo persisten allí como ornamentales en jardines y parques."
        },
        {
          tipo: "multiple",
          pregunta: "El clima continental seco de las estepas presenta temperaturas del mes más frío:",
          opciones: ["Por encima de 5 °C", "Por debajo de 0 °C", "En torno a 15 °C", "Siempre por encima de 10 °C"],
          correcta: 1,
          explicacion: "La continentalidad implica al menos un mes de heladas (mes más frío < 0 °C) y un mes más cálido en torno a 20 °C, con gran amplitud térmica anual."
        },
        {
          tipo: "multiple",
          pregunta: "El rango de precipitación anual típico de las estepas y praderas es:",
          opciones: ["700-2000 mm", "300-1000 (1300) mm", "menos de 100 mm", "2000-4000 mm"],
          correcta: 1,
          explicacion: "Reciben entre 300 y 1000 (hasta 1300) mm anuales, muy estacionales y variables entre años, con sequías prolongadas frecuentes."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de estos grandes ungulados son los herbívoros característicos que mantienen abierta la pradera norteamericana?",
          opciones: ["Antílopes saiga", "Bisontes", "Guanacos", "Caballos salvajes asiáticos"],
          correcta: 1,
          explicacion: "Los bisontes son los grandes ungulados de Norteamérica; en Asia son caballos y antílopes y en Patagonia los guanacos. Su herbivoría intensa mantiene el paisaje abierto."
        },
        {
          tipo: "multiple",
          pregunta: "La sagebrush steppe (estepa arbustiva de EE.UU.) está dominada por arbustos xerófilos del género:",
          opciones: ["Stipa", "Artemisia", "Festuca", "Cistus"],
          correcta: 1,
          explicacion: "La estepa arbustiva aparece con menos de 700 mm: las gramíneas no cierran el tapiz y dejan lugar a Artemisia (artemisas), con hojas grisáceas reflectantes. Es la transición a desiertos fríos."
        },
        {
          tipo: "multiple",
          pregunta: "Las hojas de las plantas de estepa resultan poco digestibles y desgastan los dientes de los herbívoros porque están impregnadas de:",
          opciones: ["Taninos y alcaloides", "Sílice, lignina y cera", "Resinas aromáticas", "Sales minerales"],
          correcta: 1,
          explicacion: "La impregnación de sílice (sobre todo en gramíneas), lignina y cera hace las hojas duras y poco digestibles, una defensa frente a la herbivoría."
        },
        {
          tipo: "vf",
          pregunta: "En las plantas de estepa, los meristemos de crecimiento están situados al ras del suelo o por debajo, protegidos del fuego y del diente del herbívoro.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Las yemas basales o semienterradas permiten que la planta rebrote desde la base cuando un herbívoro arranca la parte aérea o tras un fuego."
        },
        {
          tipo: "multiple",
          pregunta: "El movimiento del 'jardín de pradera' (Oudolf, Dunnett, Oehme) necesita una poda anual o quema controlada porque:",
          opciones: ["Las gramíneas son anuales y hay que resembrar", "La 'perturbación' del jardinero sustituye al fuego y a los bisontes", "El suelo necesita airearse cada año", "Las vivaces son tóxicas si no se podan"],
          correcta: 1,
          explicacion: "Imita la estructura de la pradera real; como esta depende de la perturbación, el jardinero la sustituye con una poda o quema anual para que no se degrade."
        },
        {
          tipo: "multiple",
          pregunta: "En la anatomía vegetativa de una gramínea, la pequeña lámina membranosa de la cara interna de la unión limbo-tallo, usada como carácter de identificación, es:",
          opciones: ["La vaina", "La lígula", "Las aurículas", "El nudo"],
          correcta: 1,
          explicacion: "La lígula es una lámina membranosa en la cara interna de la unión del limbo con el tallo; su forma es un carácter de identificación. Las aurículas son prolongaciones laterales presentes solo en algunos géneros."
        },
        {
          tipo: "multiple",
          pregunta: "En la espiguilla de las gramíneas, las dos escamas diminutas que en la antesis se hinchan y abren la flor son:",
          opciones: ["Las glumas", "La lema y la pálea", "Las lodículas", "Las aristas"],
          correcta: 2,
          explicacion: "Las lodículas son dos escamas que al hincharse abren la flor para que estambres y estigma salgan al exterior. Las glumas, lema y pálea son brácteas protectoras."
        },
        {
          tipo: "multiple",
          pregunta: "El esparto, usado para cordelería, procede de la gramínea:",
          opciones: ["Saccharum officinarum", "Stipa tenacissima", "Cortaderia selloana", "Oryza sativa"],
          correcta: 1,
          explicacion: "Stipa tenacissima es el esparto, usado para cordelería; otras gramíneas tienen usos industriales como la malta cervecera o aromas de perfumería."
        },
        {
          tipo: "multiple",
          pregunta: "El papiro egipcio y la chufa (materia prima de la horchata valenciana) pertenecen al género de Cyperaceae:",
          opciones: ["Carex", "Scirpus", "Cyperus", "Juncus"],
          correcta: 2,
          explicacion: "Cyperus papyrus es el papiro y Cyperus esculentus la chufa; ambos pertenecen al género Cyperus dentro de las Cyperaceae."
        },
        {
          tipo: "multiple",
          pregunta: "En cuanto a la disposición de las hojas, las Poaceae las tienen en dos filas opuestas (dísticas), mientras que las Cyperaceae las disponen:",
          opciones: ["En cuatro filas (tetrásticas)", "En tres filas (trísticas) o en roseta basal", "En espiral apretada", "Todas en la base, sin filas"],
          correcta: 1,
          explicacion: "Una de las reglas para distinguirlas: hojas dísticas (dos filas) en gramíneas frente a trísticas (tres filas) o en roseta basal en ciperáceas."
        },
        {
          tipo: "multiple",
          pregunta: "Las especies de Carex (C. divulsa, C. pansa, C. praegracilis) se usan como alternativa al césped porque requieren aproximadamente:",
          opciones: ["La misma agua que Festuca", "Un 70 % menos de agua y solo una siega anual", "El doble de riego pero menos siegas", "Riego diario en verano"],
          correcta: 1,
          explicacion: "Forman un tapiz verde estable, soportan sombra parcial, requieren un 70 % menos de agua que Festuca o Lolium y solo necesitan una siega anual."
        },
        {
          tipo: "multiple",
          pregunta: "La familia botánica que da nombre al bioma del bosque templado oceánico es:",
          opciones: ["Lauraceae", "Fagaceae", "Cistaceae", "Aquifoliaceae"],
          correcta: 0,
          explicacion: "El bosque templado oceánico también se llama laurisilva o bosque lauroide; la familia Lauraceae le da nombre, con la hoja de laurel como referencia."
        },
        {
          tipo: "multiple",
          pregunta: "El laurel (Laurus nobilis) presenta una condición sexual de:",
          opciones: ["Especie monoica", "Especie dioica", "Especie hermafrodita estricta", "Especie poligama"],
          correcta: 1,
          explicacion: "El laurel es dioico: cada pie es macho o hembra. Las flores masculinas tienen 8-12 estambres con dos nectarios; las femeninas presentan estaminodios y ovario súpero."
        },
        {
          tipo: "multiple",
          pregunta: "Las laurisilvas de Canarias y Madeira (Laurus novocanariensis, Persea indica, Ocotea foetens) son restos vivos de la flora subtropical de:",
          opciones: ["El Cuaternario reciente", "El Mioceno", "El Cretácico", "El Paleozoico"],
          correcta: 1,
          explicacion: "Son reliquias de la flora subtropical del Mioceno que cubría el sur de Europa antes de las glaciaciones; en Europa continental desapareció."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Aquifoliaceae, de la que 390 de sus ~400 especies pertenecen al género Ilex, se encuadra en:",
          opciones: ["Las angiospermas basales", "Las eudicotiledóneas", "Las monocotiledóneas", "Las gimnospermas"],
          correcta: 1,
          explicacion: "A diferencia de Lauraceae (angiospermas basales), Aquifoliaceae pertenece a las eudicotiledóneas; el acebo (I. aquifolium) y la hierba mate (I. paraguariensis) son sus especies emblemáticas."
        },
        {
          tipo: "vf",
          pregunta: "Las bayas del acebo son comestibles e inocuas, lo que explica su uso navideño.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Falso: las bayas del acebo son muy tóxicas (saponinas, metilxantinas y teobromina) y producen vómitos y diarrea. El acebo está protegido en buena parte de España por la sobrerrecolección navideña."
        },
        {
          tipo: "multiple",
          pregunta: "Las secuoyas (Sequoia sempervirens), los seres vivos más altos del planeta, alcanzan hasta:",
          opciones: ["60 m", "85 m", "115 m", "150 m"],
          correcta: 2,
          explicacion: "Las secuoyas del bosque templado oceánico del Pacífico estadounidense alcanzan los 115 m; los eucaliptos australianos (Eucalyptus regnans) son los segundos más altos."
        },
        {
          tipo: "multiple",
          pregunta: "El bosque caducifolio europeo nunca es purísimo: lleva coníferas acompañantes y un planifolio perenne característico del sotobosque, que es:",
          opciones: ["El boj (Buxus sempervirens)", "El acebo (Ilex aquifolium)", "El laurel (Laurus nobilis)", "El madroño (Arbutus unedo)"],
          correcta: 1,
          explicacion: "Junto a coníferas como Abies, Taxus, Tsuga y Thuja, el acebo (Ilex aquifolium) es uno de los pocos planifolios perennes del sotobosque caducifolio europeo."
        }
      ]
    },
    // =======================================================================
    // TEST 3
    // =======================================================================
    {
      id: "T5-3",
      titulo: "Tema 5 · Test 3",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "El clima del bosque templado oceánico tiene una precipitación anual media habitual de:",
          opciones: ["300-700 mm", "1.000-2.000 mm", "menos de 350 mm", "más de 7.000 mm en todo su rango"],
          correcta: 1,
          explicacion: "Es un clima húmedo y constante, con 1.000-2.000 mm repartidos de forma regular; en enclaves extremos puede llegar a 7.000 mm (oeste de Nueva Zelanda, SO de Chile)."
        },
        {
          tipo: "multiple",
          pregunta: "La hoja lauroide característica del bosque oceánico es:",
          opciones: ["Pequeña, dura y cerosa con estomas hundidos", "Simple, oval-lanceolada, perenne, con cutícula gruesa y brillante", "Acicular y perenne", "Marcescente y dentada"],
          correcta: 1,
          explicacion: "La hoja lauroide (hoja del laurel) es simple, alterna, oval-lanceolada, perenne, con cutícula gruesa y brillante, propia de climas templados muy húmedos."
        },
        {
          tipo: "multiple",
          pregunta: "El bosque mediterráneo ocupa apenas el 1,5-2 % de la superficie terrestre, pero alberga aproximadamente:",
          opciones: ["El 5 % de la flora mundial", "El 20 % de la flora mundial", "El 50 % de la flora mundial", "El 2 % de la flora mundial"],
          correcta: 1,
          explicacion: "Es el bioma más pequeño y fragmentado del planeta, pero alberga el 20 % de la flora mundial, siendo uno de los puntos calientes de biodiversidad más relevantes."
        },
        {
          tipo: "multiple",
          pregunta: "Según la nemotecnia 'CACAS', ¿cuáles son las cinco regiones mediterráneas del planeta?",
          opciones: ["Cuenca mediterránea, Australia SO, California, Cabo (Sudáfrica) y Santiago de Chile", "China, Argentina, Canadá, Argelia y Siberia", "Cuenca mediterránea, Amazonia, Canarias, Andes y Sáhara", "California, Australia, Caribe, Asia central y Sudán"],
          correcta: 0,
          explicacion: "Las cinco regiones, todas en latitudes 30-40° y costas occidentales: Cuenca mediterránea, Australia (SO), California, África del Sur (El Cabo) y Santiago (Chile central)."
        },
        {
          tipo: "multiple",
          pregunta: "El rasgo fundamental del clima mediterráneo es:",
          opciones: ["Precipitación repartida todo el año", "Sequía estival con precipitación concentrada en invierno", "Lluvia concentrada en verano (monzón)", "Ausencia total de heladas y de lluvia"],
          correcta: 1,
          explicacion: "El clima mediterráneo invierte la curva tropical: llueve cuando hace frío y se seca en verano, cuando la demanda evapotranspirativa es máxima. La sequía estival está siempre presente."
        },
        {
          tipo: "multiple",
          pregunta: "La causa atmosférica de la sequía estival mediterránea es:",
          opciones: ["El paso de la corriente en chorro polar", "La oscilación estacional de los cinturones subtropicales de altas presiones", "La llegada del monzón asiático", "El enfriamiento de las corrientes oceánicas"],
          correcta: 1,
          explicacion: "En verano las altas presiones subtropicales (~30°) se desplazan hacia los polos y bloquean las borrascas; en invierno descienden y permiten la llegada de frentes atlánticos."
        },
        {
          tipo: "vf",
          pregunta: "Los suelos mediterráneos suelen ser pobres y poco desarrollados, con mineralización muy rápida y bajo contenido en carbono orgánico.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "La alta temperatura provoca una mineralización muy rápida con poca humificación; son frecuentes las costras calizas y los suelos poco profundos."
        },
        {
          tipo: "multiple",
          pregunta: "Las especies calcícolas (basófilas) viven en suelos básicos ricos en calcio. ¿Cuál de estas lo es?",
          opciones: ["Jara", "Brezo", "Romero", "Cantueso"],
          correcta: 2,
          explicacion: "El romero, el espliego y la coscoja son calcícolas (pH > 7). Jaras, brezos y cantuesos son silicícolas (acidófilas o calcífugas), de suelos ácidos."
        },
        {
          tipo: "multiple",
          pregunta: "La dehesa ibérica es un paisaje en mosaico de arbolado disperso de encina/alcornoque generado principalmente por:",
          opciones: ["La sequía extrema natural", "La herbivoría ganadera milenaria", "Las glaciaciones cuaternarias", "La actividad volcánica"],
          correcta: 1,
          explicacion: "Junto al fuego, la herbivoría (sobre todo ganadera) ha moldeado el paisaje mediterráneo durante milenios; en el caso ibérico generó las dehesas, agroecosistema único en Europa."
        },
        {
          tipo: "multiple",
          pregunta: "La esclerofilia es el rasgo foliar central del Mediterráneo. Las hojas esclerófilas son:",
          opciones: ["Grandes, blandas y caducas", "Perennes, duras, correosas, con epidermis gruesa y cerosa y estomas hundidos en criptas", "Aciculares y resinosas", "Suculentas y almacenadoras de agua"],
          correcta: 1,
          explicacion: "La hoja esclerófila es perenne, pequeña-mediana, con mucho esclerénquima, epidermis gruesa cubierta de ceras y estomas hundidos en criptas con pelos, lo que reduce la transpiración."
        },
        {
          tipo: "multiple",
          pregunta: "Que especies sin parentesco evolutivo de las cinco regiones mediterráneas hayan desarrollado el mismo tipo de hoja esclerófila es un ejemplo clásico de:",
          opciones: ["Coevolución", "Convergencia adaptativa", "Deriva genética", "Radiación adaptativa"],
          correcta: 1,
          explicacion: "Es convergencia adaptativa: mismas soluciones morfológicas a un mismo problema (sequía estival con alta radiación) en floras filogenéticamente muy distintas."
        },
        {
          tipo: "multiple",
          pregunta: "El matorral mediterráneo recibe nombres distintos en cada región. En California se denomina:",
          opciones: ["Fynbos", "Chaparral", "Maquia", "Mallee"],
          correcta: 1,
          explicacion: "En California es chaparral; en Sudáfrica fynbos, en Australia mallee y kwongan, y en la cuenca mediterránea maquia, garriga, jaral o tomillar."
        },
        {
          tipo: "multiple",
          pregunta: "El lignotuber, estructura clave de las plantas rebrotadoras tras el fuego, es:",
          opciones: ["Un cono cerrado que libera semillas con el calor", "Un engrosamiento subterráneo en el cuello de la raíz con yemas durmientes y reservas", "Una corteza gruesa aislante", "Una semilla con latencia rota por el humo"],
          correcta: 1,
          explicacion: "El lignotuber es un engrosamiento subterráneo en el cuello de la raíz con yemas durmientes y reservas, desde el cual la planta rebrota tras quemarse la parte aérea."
        },
        {
          tipo: "multiple",
          pregunta: "La serotinia, presente por ejemplo en Pinus halepensis, consiste en:",
          opciones: ["Perder la hoja en verano por sequía", "Mantener los conos cerrados varios años y liberar las semillas solo tras el calor del incendio", "Conservar las hojas secas hasta primavera", "Engrosar la corteza como aislante"],
          correcta: 1,
          explicacion: "Los conos serótinos permanecen cerrados durante años y solo liberan las semillas tras el calor del fuego, asegurando la regeneración sobre suelo desnudo, fertilizado por cenizas y sin competidores."
        },
        {
          tipo: "multiple",
          pregunta: "Según la distinción 'rebrotadoras vs reclutadoras', las especies reclutadoras (jaras, aliagas, pinos serótinos) se caracterizan por:",
          opciones: ["Ser longevas, de maduración tardía y crecimiento lento", "Morir con el fuego pero reproducirse masivamente desde el banco de semillas, con vida corta y maduración temprana", "Tener frutos grandes y carnosos dispersados por vertebrados", "Poseer raíces muy profundas y elevada biomasa radical"],
          correcta: 1,
          explicacion: "Las reclutadoras mueren con el fuego pero germinan masivamente desde el banco de semillas: vida corta, maduración temprana, crecimiento rápido, raíces superficiales y frutos pequeños secos dispersados por viento u hormigas."
        },
        {
          tipo: "vf",
          pregunta: "El súber (corcho) del alcornoque puede alcanzar 20 cm de grosor y es el aislante natural más eficaz que existe.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El corcho aísla el cámbium de temperaturas que destruirían otros árboles; la saca se hace cada 9-12 años sin matar al árbol. España es el segundo productor mundial tras Portugal."
        },
        {
          tipo: "multiple",
          pregunta: "El bioma mediterráneo es, en biodiversidad, el segundo más diverso del planeta tras:",
          opciones: ["La tundra ártica", "Los bosques tropicales", "El bosque boreal", "Las praderas templadas"],
          correcta: 1,
          explicacion: "Alberga unas 50.000 especies vegetales (~20 % de la flora mundial) con un 30-70 % de endemismos según la región; solo lo superan los bosques tropicales."
        },
        {
          tipo: "multiple",
          pregunta: "La región florística de El Cabo destaca con unas 9.000 especies en apenas 90.000 km². ¿Qué porcentaje de endemismo presenta?",
          opciones: ["Aproximadamente el 20 %", "Aproximadamente el 45 %", "Aproximadamente el 68 %", "Aproximadamente el 90 %"],
          correcta: 2,
          explicacion: "El Cabo alcanza un 68 % de endemismos, una de las floras más singulares del planeta; es el menor de los reinos florísticos pero el más rico por unidad de superficie."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas familias es diagnóstica del fynbos de la región florística de El Cabo?",
          opciones: ["Cistaceae", "Proteaceae", "Lauraceae", "Aquifoliaceae"],
          correcta: 1,
          explicacion: "Familias diagnósticas del Cabo: Proteaceae (proteas, leucadendros), Restionaceae, Ericaceae (más de 600 especies de Erica endémicas), Iridaceae y Aizoaceae."
        },
        {
          tipo: "multiple",
          pregunta: "En el ámbito mediterráneo, el ambiente submediterráneo está representado por Quercus de hoja:",
          opciones: ["Perenne esclerófila", "Marcescente (Q. faginea, Q. pyrenaica)", "Acicular", "Caduca blanda (Q. robur)"],
          correcta: 1,
          explicacion: "El ambiente submediterráneo lo ocupan los Quercus marcescentes: quejigo (Q. faginea), melojo (Q. pyrenaica), quejigo moruno (Q. canariensis) y Q. pubescens."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Cistaceae es 'mediterránea por excelencia'. ¿Cuál de estos géneros le pertenece?",
          opciones: ["Lavandula", "Cistus", "Thymus", "Quercus"],
          correcta: 1,
          explicacion: "Cistaceae incluye Cistus, Halimium, Helianthemum, Fumana, Xolantha y Tuberaria; son las jaras y jaguarzos, de flores grandes y vistosas y fruto en cápsula."
        },
        {
          tipo: "multiple",
          pregunta: "El ládano, resina aromática usada como fijador en perfumería, lo produce:",
          opciones: ["Rosmarinus officinalis", "Cistus ladanifer", "Lavandula pedunculata", "Thymus vulgaris"],
          correcta: 1,
          explicacion: "La jara pringosa (Cistus ladanifer) segrega ládano por las hojas; tradicionalmente se recolectaba peinando las cabras que se rozaban contra los jarales."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estos caracteres es diagnóstico de la familia Labiatae (Lamiaceae)?",
          opciones: ["Tallo cilíndrico hueco y hojas dísticas", "Tallo cuadrangular, hojas opuestas decusadas y fruto en tetranúcula", "Flores actinomorfas en amentos", "Hojas aciculares y fruto en gálbulo"],
          correcta: 1,
          explicacion: "Las labiadas tienen tallo cuadrangular, hojas opuestas decusadas, flores zigomorfas en verticilastros, aroma intenso al frotar y fruto en tetranúcula (cuatro aquenios soldados)."
        },
        {
          tipo: "multiple",
          pregunta: "La inflorescencia característica de las Labiatae, mixta cimosa-racemosa con dicasios apretados en verticilos, se denomina:",
          opciones: ["Capítulo", "Verticilastro", "Espiguilla", "Umbela"],
          correcta: 1,
          explicacion: "El verticilastro es una inflorescencia mixta cimosa-racemosa compuesta de dicasios contraídos y apretados en verticilos a lo largo del eje; es típico de las labiadas."
        },
        {
          tipo: "multiple",
          pregunta: "El androceo típico de las Labiatae está formado por:",
          opciones: ["Numerosos estambres en espiral", "4 estambres desiguales (didínamos) o solo 2", "8-12 estambres con nectarios", "3 estambres en un verticilo"],
          correcta: 1,
          explicacion: "El androceo de las labiadas tiene 4 estambres desiguales (didínamos) o reducido a 2; la corola está soldada en tubo rematado en dos labios."
        },
        {
          tipo: "vf",
          pregunta: "Las labiadas (romero, tomillo, lavanda) son buenas indicadoras edáficas: el romeral aparece en suelos calizos y el cantuesar en suelos silíceos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El romeral de Rosmarinus aparece en suelos calizos (básicos) y el cantuesar de Lavandula pedunculata en suelos ácidos (silíceos); por eso son grandes indicadoras del sustrato."
        },
        {
          tipo: "multiple",
          pregunta: "El madroño (Arbutus unedo), el lentisco (Pistacia lentiscus), el durillo (Viburnum tinus) y el mirto (Myrtus communis) son ejemplos de:",
          opciones: ["Especies invasoras australianas", "Relictos terciarios de hoja lauroide", "Gramíneas ornamentales", "Coníferas serótinas"],
          correcta: 1,
          explicacion: "Son relictos del bosque subtropical terciario que cubría el sur de Europa antes del enfriamiento del Plioceno; conservan hojas lauroides y alto valor paisajístico."
        },
        {
          tipo: "multiple",
          pregunta: "En la flora mediterránea australiana, el género Acacia presenta a menudo filodios, que son:",
          opciones: ["Espinas modificadas defensivas", "Pecíolos aplanados que sustituyen a las hojas verdaderas", "Tallos suculentos almacenadores", "Raíces aéreas fotosintéticas"],
          correcta: 1,
          explicacion: "Muchas acacias australianas presentan filodios (pecíolos aplanados que actúan como hojas) como adaptación a la sequía; junto a Eucalyptus son los géneros más diversos de esa región."
        },
        {
          tipo: "multiple",
          pregunta: "Según la nemotecnia 'PMC', los tres tipos de Quercus ibéricos según el gradiente de sur a norte (de seco a húmedo) son:",
          opciones: ["Perenne (mediterráneo), Marcescente (transición) y Caducifolio (atlántico)", "Pivotante, Mixto y Costero", "Pequeño, Mediano y Colosal", "Pionero, Maduro y Clímax"],
          correcta: 0,
          explicacion: "'PMC': Perenne mediterráneo (encina, alcornoque, coscoja) → Marcescente de transición (quejigo, melojo) → Caducifolio atlántico (carballo, roble albar)."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Lauraceae incluye, además del laurel, especies de gran interés económico como:",
          opciones: ["Trigo, arroz y maíz", "Aguacate, canela y alcanfor", "Esparto, chufa y papiro", "Romero, tomillo y lavanda"],
          correcta: 1,
          explicacion: "Lauraceae (unos 55 géneros y 3.500 especies, angiospermas basales) aporta el aguacate (Persea americana), la canela y el alcanfor, además de los laureles."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T5; }
if (typeof window !== 'undefined') { window.sandra_botanica_T5 = sandra_botanica_T5; }
