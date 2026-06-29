const sandra_botanica_T7 = {
  tema: 7,
  titulo: "Los bosques ibéricos",
  penalizacionPorFallo: 0.3,
  tests: [
    // ========================================================================
    // ============================== TEST 1 ==================================
    // ========================================================================
    {
      id: "T7-1",
      nombre: "Tema 7 · Test 1",
      titulo: "Tema 7 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "¿Cuál es la cumbre más alta del territorio español?",
          opciones: ["Mulhacén, en Sierra Nevada", "Aneto, en los Pirineos", "Pico Teide, en Tenerife", "Veleta, en Sierra Nevada"],
          correcta: 2,
          explicacion: "El Teide alcanza 3718 m. Si se considera solo la Península, la mayor es el Mulhacén con 3478 m."
        },
        {
          tipo: "vf",
          pregunta: "Por cada 100 m de ascenso en altitud la temperatura media desciende aproximadamente 0,6 ºC.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Ese gradiente explica que en menos de 200 km se pase del clima subtropical de Almería al alpino de Sierra Nevada."
        },
        {
          tipo: "multiple",
          pregunta: "En la nemotecnia HTCA, el eje de humedad decreciente sigue la dirección:",
          opciones: ["Noroeste-sureste", "Norte-sur", "Este-oeste", "Periferia-centro"],
          correcta: 0,
          explicacion: "Humedad NO-SE: de la Galicia atlántica con más de 1400 mm al sureste almeriense con menos de 200 mm."
        },
        {
          tipo: "multiple",
          pregunta: "El efecto Foehn consiste en que una masa de aire húmedo:",
          opciones: ["Se estanca fría en el fondo de un valle cerrado", "Asciende y precipita en barlovento, y desciende seca y recalentada por sotavento", "Recibe más radiación en la cara sur que en la norte", "Erosiona el suelo en laderas de fuerte pendiente"],
          correcta: 1,
          explicacion: "Genera fuertes contrastes pluviométricos entre las dos vertientes de una cordillera, como la cantábrica frente a la meseta."
        },
        {
          tipo: "multiple",
          pregunta: "El dominio geológico silíceo, con granitos, gneises y pizarras, predomina en:",
          opciones: ["Las grandes depresiones del Duero, Tajo, Ebro y Guadalquivir", "Las cordilleras béticas e ibérico oriental", "La mitad occidental peninsular", "El litoral balear"],
          correcta: 2,
          explicacion: "Galicia, Extremadura occidental, Sierra Morena y Sistema Central: suelos ácidos y pobres en calcio, con robledales de carballo, jarales y brezales."
        },
        {
          tipo: "multiple",
          pregunta: "Según la clasificación por sustrato, el esparto Macrochloa tenacissima es una planta:",
          opciones: ["Acidófila o calcífuga", "Calcícola o basófila", "Neutrófila o indiferente edáfica", "Gipsófila estricta"],
          correcta: 1,
          explicacion: "Las calcícolas son exclusivas de ambientes ricos en calcio. Junto al esparto, el mostajo y el quejigo."
        },
        {
          tipo: "vf",
          pregunta: "La crisis de salinidad messiniense, hacia los 6 millones de años, evaporó parcial o casi totalmente el Mediterráneo al perder su conexión con el Atlántico.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Generó ambientes esteparios y halófilos y un puente terrestre con África; mucha flora ibérica de afinidad africana procede de aquí."
        },
        {
          tipo: "multiple",
          pregunta: "Durante las glaciaciones cuaternarias, los tres grandes refugios glaciales europeos fueron las penínsulas:",
          opciones: ["Ibérica, Escandinava y de Crimea", "Ibérica, Itálica y Balcánica", "Itálica, Balcánica y de Anatolia", "Ibérica, Itálica y de Jutlandia"],
          correcta: 1,
          explicacion: "Desde esos refugios se recolonizó el norte en los interglaciares; por eso la flora ibérica es tan rica en endemismos."
        },
        {
          tipo: "multiple",
          pregunta: "La región eurosiberiana ibérica, o Iberia húmeda, se caracteriza sobre todo por:",
          opciones: ["Una sequía estival de tres a cinco meses", "La ausencia de un periodo seco marcado en verano", "Precipitaciones inferiores a 300 mm anuales", "El dominio de bosques perennifolios esclerófilos"],
          correcta: 1,
          explicacion: "La falta de estrés hídrico estival permite suelos profundos y bosques caducifolios comparables a los del centro de Europa."
        },
        {
          tipo: "multiple",
          pregunta: "En la región eurosiberiana, el ombroclima húmedo corresponde a precipitaciones anuales de:",
          opciones: ["650-1000 mm", "1000-1600 mm", "Más de 1600 mm", "300-600 mm"],
          correcta: 1,
          explicacion: "Es la franja más extendida en la Cordillera Cantábrica. Subhúmedo 650-1000 mm; hiperhúmedo más de 1600 mm."
        },
        {
          tipo: "vf",
          pregunta: "El hayedo es el ejemplo paradigmático de bosque monoespecífico ibérico: Fagus sylvatica excluye a casi todas las demás especies arbóreas del dosel.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Contrasta con el bosque mixto, donde llegan a convivir hasta 25 especies en un mismo rodal."
        },
        {
          tipo: "multiple",
          pregunta: "El roble carballo o pedunculado, Quercus robur, se distingue de Q. petraea porque presenta:",
          opciones: ["Bellota sésil y hoja peciolada", "Bellota pedunculada y hoja sentada", "Bellota y hoja ambas pedunculadas", "Hoja marcescente persistente todo el invierno"],
          correcta: 1,
          explicacion: "Regla: lo que la bellota tiene, la hoja no lo tiene. En robur la bellota tiene rabillo y la hoja no."
        },
        {
          tipo: "multiple",
          pregunta: "El bosque mixto planocaducifolio representa la vegetación clímax del piso:",
          opciones: ["Subalpino", "Colino eurosiberiano", "Montano superior", "Termomediterráneo"],
          correcta: 1,
          explicacion: "Es el bosque maduro al que tiende la sucesión cuando coinciden suelo profundo, humedad permanente y temperatura suave."
        },
        {
          tipo: "multiple",
          pregunta: "Los tres papeles geobotánicos del abedul son: vegetación pionera, vegetación de ribera mediterránea y vegetación:",
          opciones: ["Esclerófila relicta", "Relicta del último periodo glaciar", "Esteparia halófila", "Lauroide subtropical"],
          correcta: 1,
          explicacion: "Nemotecnia Re-Pi-Ri: Relicta glaciar, Pionera colonizadora y Ribera mediterránea."
        },
        {
          tipo: "vf",
          pregunta: "El acebo Ilex aquifolium es una especie dioica: solo los pies femeninos producen frutos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Por eso, en jardinería hay que plantar al menos un pie macho para la polinización."
        },
        {
          tipo: "multiple",
          pregunta: "El pino negro Pinus uncinata es relevante porque:",
          opciones: ["Forma la línea forestal superior en el piso subalpino pirenaico", "Domina el piso colino de la costa cantábrica", "Es el pino más termófilo de la Península", "Solo aparece sobre sustratos yesíferos"],
          correcta: 0,
          explicacion: "Corona el bosque ibérico entre 1600 y 2200 m; por encima solo quedan pastizales alpinos."
        },
        {
          tipo: "multiple",
          pregunta: "El rasgo climático definitorio de la región mediterránea ibérica es:",
          opciones: ["El ombroclima hiperhúmedo", "La sequía estival", "La ausencia de heladas", "La inversión térmica permanente"],
          correcta: 1,
          explicacion: "El periodo seco coincide con el máximo térmico y dura unos tres meses; explica esclerofilia, marcescencia y depresión de mediodía."
        },
        {
          tipo: "multiple",
          pregunta: "Los cinco pisos bioclimáticos mediterráneos, de más cálido a más frío, son:",
          opciones: ["Colino, montano, subalpino, alpino y nival", "Termo, meso, supra, oro y crioromediterráneo", "Subhúmedo, húmedo, hiperhúmedo, árido y semiárido", "Litoral, basal, medio, alto y cacuminal"],
          correcta: 1,
          explicacion: "Nemotecnia TeMeSuOCr, con límites térmicos clave en 16, 13, 8 y 4 ºC."
        },
        {
          tipo: "vf",
          pregunta: "La encina o carrasca Quercus ilex subsp. ballota es indiferente edáfica: vive tanto sobre suelos calizos como silíceos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Su amplio rango y su tolerancia a la continentalidad explican su enorme distribución por meseta e interior."
        },
        {
          tipo: "multiple",
          pregunta: "La característica única del alcornoque Quercus suber entre los Quercus es:",
          opciones: ["La marcescencia de sus hojas", "Su corteza gruesa y suberosa, el corcho", "Su bellota dulce comestible", "Su tolerancia extrema a la cal"],
          correcta: 1,
          explicacion: "El corcho lo protege del fuego y de la transpiración. Además es calcífugo estricto: solo vive en suelos ácidos."
        },
        {
          tipo: "multiple",
          pregunta: "La esclerofilia es un conjunto de rasgos foliares que da como resultado una hoja:",
          opciones: ["Plana, fina y caduca, de un solo periodo vegetativo", "Perenne, dura, coriácea, de pequeño tamaño y vida prolongada", "Marcescente, que se seca pero no cae hasta primavera", "Acicular y reunida en fascículos"],
          correcta: 1,
          explicacion: "Reduce la transpiración a costa de bajar la eficacia fotosintética; es la respuesta al verano seco mediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "La depresión de mediodía o siesta vegetal consiste en que la planta:",
          opciones: ["Abre al máximo los estomas en las horas centrales del día", "Cierra parcial o totalmente los estomas al mediodía para reducir la transpiración", "Pierde las hojas durante el verano seco", "Detiene por completo la fotosíntesis durante toda la jornada"],
          correcta: 1,
          explicacion: "Está comprobada en encina, madroño, coscoja y olivilla; la adelfa y la zarzaparrilla no la presentan."
        },
        {
          tipo: "multiple",
          pregunta: "Tras un incendio, las especies rebrotadoras se diferencian de las semilladoras en que:",
          opciones: ["Mueren con el fuego y dependen del banco de semillas", "Emiten nuevos brotes desde tejidos vivos protegidos como cepa, raíz o lignotúber", "Solo regeneran si el incendio es muy intenso", "Carecen de capacidad de regeneración"],
          correcta: 1,
          explicacion: "Encina, alcornoque, melojo, coscoja y madroño son rebrotadoras; muchas jaras, el pino carrasco y el lentisco son semilladoras."
        },
        {
          tipo: "vf",
          pregunta: "A pesar de su nombre, el quejigo moruno Quercus canariensis no vive en Canarias.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El epíteto alude a la antigua provincia romana de Mauritania Tingitana. Vive desde el Alto Atlas hasta Cataluña."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia HaPiPiNi reúne a los cuatro pinos mediterráneos ibéricos clave:",
          opciones: ["Halepensis, pinea, pinaster y nigra", "Halepensis, pinaster, sylvestris y uncinata", "Pinea, pinaster, nigra y sylvestris", "Halepensis, pinea, sylvestris y uncinata"],
          correcta: 0,
          explicacion: "Carrasco, piñonero, resinero y negral. El quinto pino mediterráneo, P. sylvestris, se estudia con las coníferas templadas."
        },
        {
          tipo: "multiple",
          pregunta: "El rasgo identificador inconfundible del pino piñonero Pinus pinea es:",
          opciones: ["La corteza rojiza profundamente fisurada", "Las piñas sésiles con escamas en forma de gancho", "La copa aparasolada", "Las acículas cortas, rígidas y muy oscuras"],
          correcta: 2,
          explicacion: "Ocupa dunas, arenas y depósitos fluviales; sus piñones son comestibles."
        },
        {
          tipo: "multiple",
          pregunta: "El pino carrasco Pinus halepensis es un pirófito facultativo porque:",
          opciones: ["No tolera el fuego y muere con cualquier incendio", "Sus conos serótinos liberan semillas tras incendios moderados", "Pierde las acículas tras el fuego para protegerse", "Solo germina sobre cenizas frías"],
          correcta: 1,
          explicacion: "Es el más termófilo de los pinos ibéricos; recoloniza rápido las áreas quemadas, pero conviene evitarlo cerca de zonas urbanizadas por su carácter pirófito."
        },
        {
          tipo: "vf",
          pregunta: "El pino resinero o rodeno Pinus pinaster es la especie de mayor plasticidad ecológica del género Pinus en la Península.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Aparece en condiciones atlánticas, submediterráneas y plenamente mediterráneas, siempre con preferencia por suelos sueltos y arenosos."
        },
        {
          tipo: "multiple",
          pregunta: "El sabinar albar es una formación forestal abierta dominada por:",
          opciones: ["Juniperus thurifera", "Abies pinsapo", "Pinus nigra", "Quercus faginea"],
          correcta: 0,
          explicacion: "Cupresácea endémica del Mediterráneo occidental, propia de parameras secas y continentalizadas del interior peninsular."
        },
        {
          tipo: "multiple",
          pregunta: "Las tres sierras del pinsapo Abies pinsapo, según la nemotecnia BeNi-Gra, son:",
          opciones: ["Bermeja, Nevada y Gredos", "Bermeja, de las Nieves y de Grazalema", "Béjar, de las Nieves y Guadarrama", "Bermeja, Aracena y Grazalema"],
          correcta: 1,
          explicacion: "Sierra Bermeja y Sierra de las Nieves en Málaga, y Sierra de Grazalema en Cádiz. Es un endemismo bético-rifeño relicto."
        }
      ]
    },
    // ========================================================================
    // ============================== TEST 2 ==================================
    // ========================================================================
    {
      id: "T7-2",
      nombre: "Tema 7 · Test 2",
      titulo: "Tema 7 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "Los cuatro factores del medio físico que modelan el paisaje vegetal ibérico son clima, relieve, sustrato y:",
          opciones: ["Latitud", "Dinamismo histórico", "Densidad de población", "Cobertura nubosa"],
          correcta: 1,
          explicacion: "Los tres primeros son ambientales; el cuarto, histórico, recoge la secuencia de cambios geológicos y climáticos."
        },
        {
          tipo: "multiple",
          pregunta: "En el efecto solana/umbría, la cara de solana es:",
          opciones: ["La ladera norte, más fría y húmeda", "La ladera sur, con más radiación, más caliente y seca", "El fondo de valle donde se acumula el aire frío", "La vertiente de sotavento de una cordillera"],
          correcta: 1,
          explicacion: "En la umbría aparecen hayas o robles; en la solana vecina, a la misma cota, encinas o quejigos."
        },
        {
          tipo: "vf",
          pregunta: "En la inversión térmica, el aire frío se acumula en el fondo de valles cerrados en noches sin viento, mientras las laderas medias quedan más templadas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Invierte el gradiente térmico habitual y excluye a las especies termófilas de las zonas bajas."
        },
        {
          tipo: "multiple",
          pregunta: "El dominio geológico calizo o calcáreo se caracteriza por rocas básicas ricas en:",
          opciones: ["Sílice", "Carbonato cálcico", "Sulfato de calcio", "Magnesio y metales pesados"],
          correcta: 1,
          explicacion: "Predomina en cordilleras orientales y meridionales, con suelos alcalinos; vegetación de encinares, quejigares y pinares de carrasco y salgareño."
        },
        {
          tipo: "multiple",
          pregunta: "Una planta gipsófila está adaptada a vivir sobre suelos con yeso, cuya fórmula es:",
          opciones: ["CaCO3", "CaSO4·2H2O", "SiO2", "NaCl"],
          correcta: 1,
          explicacion: "El yeso es sulfato de calcio dihidratado. Hay gipsófilas estrictas, como Helianthemum squamatum, y tolerantes o gypsovag, como Salvia lavandulifolia."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia DARE resume las cuatro consecuencias de las glaciaciones: desplazamientos latitudinales, altitudinales, refugios glaciales y:",
          opciones: ["Endemismos nuevos", "Extinciones", "Erosión de suelos", "Expansión del bosque"],
          correcta: 1,
          explicacion: "Muchas especies no lograron adaptarse ni desplazarse a tiempo; por eso la flora europea actual es más pobre que la norteamericana o asiática a igual latitud."
        },
        {
          tipo: "multiple",
          pregunta: "El Periodo Atlántico, óptimo climático del Holoceno hace unos 7000 años, coincidió con tres procesos. ¿Cuál de estos es uno de ellos?",
          opciones: ["La crisis de salinidad messiniense", "El auge del alcornoque y la aparición de la cultura neolítica", "El último máximo glacial", "El cierre del mar de Tethys"],
          correcta: 1,
          explicacion: "También aumentó la importancia de pinos y enebros; el resultado fue un mosaico complejo de coníferas, frondosas y bosques mixtos."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia Co-Mo-Sub-Al-Ni ordena los pisos altitudinales eurosiberianos de abajo arriba como:",
          opciones: ["Colino, montano, subalpino, alpino y nival", "Colino, mediterráneo, subhúmedo, alpino y nival", "Costero, montano, subtropical, alto y níveo", "Colino, montano, supra, oro y crioro"],
          correcta: 0,
          explicacion: "El colino alberga robledales y encinares relictos; el montano, hayas; el subalpino, pino negro y landas; el alpino y nival, sin árboles."
        },
        {
          tipo: "multiple",
          pregunta: "En la nemotecnia PRePArAR de la Cordillera Cantábrica, la primera letra alude al rasgo más estructurante, que es el predominio de:",
          opciones: ["Pinares autóctonos extensos", "Bosques planocaducifolios", "Praderas de siega", "Vegetación paleomediterránea"],
          correcta: 1,
          explicacion: "La hoja plana y caduca es la estrategia de éxito en un clima sin estación seca; los pinares, en cambio, están casi ausentes."
        },
        {
          tipo: "multiple",
          pregunta: "El intenso metabolismo hídrico del haya hace que un ejemplar adulto evapore al año:",
          opciones: ["500-1000 litros", "5000-10000 litros", "100-500 litros", "Más de 50000 litros"],
          correcta: 1,
          explicacion: "El haya es prácticamente incapaz de regular su transpiración, por lo que depende de un suministro hídrico continuo."
        },
        {
          tipo: "vf",
          pregunta: "La heterofilia del haya consiste en producir, en un mismo individuo, hojas de sol pequeñas y coriáceas y hojas de sombra grandes y delgadas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Las de sol rinden al máximo con el 40% de luz; las de sombra alcanzan su pleno rendimiento con solo el 20%."
        },
        {
          tipo: "multiple",
          pregunta: "El roble albar Quercus petraea se identifica por presentar:",
          opciones: ["Bellota pedunculada y hoja sentada", "Bellota sésil y hoja peciolada", "Hoja marcescente y bellota dulce", "Acículas en fascículos"],
          correcta: 1,
          explicacion: "Es el inverso de robur: en petraea la hoja tiene rabillo y la bellota no."
        },
        {
          tipo: "multiple",
          pregunta: "Entre las dos especies de abedul, ¿cuál es la predominante en la Iberia atlántica?",
          opciones: ["Betula pendula, el abedul colgante", "Betula alba, también llamada B. pubescens", "Betula nana, el abedul enano", "Betula utilis, el abedul del Himalaya"],
          correcta: 1,
          explicacion: "B. alba tiene dentición doble y pelos finos en la hoja; B. pendula tiene dentición simple, ramas péndulas y verrugas resinosas."
        },
        {
          tipo: "multiple",
          pregunta: "Los abetales de Abies alba comparten con otra formación el título de bosques más sombríos de la Península. Esa formación es:",
          opciones: ["Los hayedos", "Las acebedas", "Los abedulares", "Los pinares de pino negro"],
          correcta: 1,
          explicacion: "Tanto el dosel perenne de acículas del abeto como el esclerófilo del acebo interceptan la luz todo el año, dejando un sotobosque muy pobre."
        },
        {
          tipo: "vf",
          pregunta: "El pino negro Pinus uncinata es indiferente edáfico y tolera condiciones extremas de frío, viento y nieve.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Su nombre específico uncinata alude a la forma de gancho de las escamas de la piña."
        },
        {
          tipo: "multiple",
          pregunta: "La fuerte continentalidad del interior peninsular mediterráneo se manifiesta en:",
          opciones: ["Lluvias repartidas por igual todo el año", "Amplias oscilaciones térmicas estacionales y diarias, con heladas invernales rigurosas y veranos muy cálidos", "Temperaturas suaves y constantes", "Ausencia total de heladas"],
          correcta: 1,
          explicacion: "Es especialmente acusada en las dos mesetas y en las depresiones interiores."
        },
        {
          tipo: "multiple",
          pregunta: "El llamado mito de la ardilla viajera, que decía que una ardilla podía cruzar Iberia saltando de rama en rama, describe en realidad:",
          opciones: ["La extensión actual de los bosques", "El bosque potencial, no el real", "La vegetación esteparia semiárida", "El avance reciente del bosque tras el abandono rural"],
          correcta: 1,
          explicacion: "La vegetación esteparia semiárida está hoy sobredimensionada por la acción antrópica; el mito alude a la cubierta potencial."
        },
        {
          tipo: "multiple",
          pregunta: "La encina o carrasca Quercus ilex subsp. ballota es la especie arbórea típica de la meseta y el interior porque, entre otras razones:",
          opciones: ["Tiene bellota amarga y exige mucha humedad", "Tiene bellota dulce, es indiferente edáfica y soporta bien la continentalidad", "Es calcífuga estricta", "Solo vive en el litoral mediterráneo"],
          correcta: 1,
          explicacion: "Sus bellotas dulces son las del cerdo ibérico; tolera heladas invernales rigurosas y veranos secos y calientes."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia Pu-Fa-Py-Ca agrupa a los cuatro robles marcescentes ibéricos:",
          opciones: ["Pubescens, faginea, pyrenaica y canariensis", "Pubescens, faginea, petraea y coccifera", "Pyrenaica, robur, suber y ilex", "Faginea, pinea, pyrenaica y canariensis"],
          correcta: 0,
          explicacion: "Roble pubescente, quejigo, melojo y quejigo moruno. Ordenados por exigencia hídrica creciente: faginea, pubescens, pyrenaica y canariensis."
        },
        {
          tipo: "vf",
          pregunta: "La marcescencia es el fenómeno por el que las hojas, una vez secas, no se desprenden y permanecen en la rama hasta el rebrote primaveral.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es una estrategia intermedia entre caducidad y perennidad, típica del flanco mediterráneo continental del género Quercus."
        },
        {
          tipo: "multiple",
          pregunta: "El quejigo Quercus faginea es un endemismo:",
          opciones: ["Exclusivamente ibérico", "Iberonorteafricano", "Macaronésico", "Circumboreal"],
          correcta: 1,
          explicacion: "Aparece en la Península, Marruecos, Argelia y Túnez. Es el roble marcescente más extendido de Iberia."
        },
        {
          tipo: "multiple",
          pregunta: "La dehesa es un sistema agrosilvopastoral que resulta de:",
          opciones: ["La repoblación con pinos tras un incendio", "El aclarado de encinares y alcornocales para uso ganadero", "El abandono total de la actividad humana", "La plantación intensiva de olivar"],
          correcta: 1,
          explicacion: "Árboles dispersos sobre pastos, baja densidad arbórea y alta funcionalidad: un referente para el paisajismo extensivo."
        },
        {
          tipo: "multiple",
          pregunta: "La recuperación forestal de la Sierra de Espuña, en Murcia, se inició con las repoblaciones impulsadas desde 1891 por:",
          opciones: ["Rivas Martínez", "Ricardo Codorníu", "Ceballos", "Ruiz de la Torre"],
          correcta: 1,
          explicacion: "Repobló sobre todo con Pinus halepensis y P. pinaster un paisaje que a finales del siglo XIX era prácticamente semidesértico."
        },
        {
          tipo: "multiple",
          pregunta: "Las coníferas son gimnospermas leñosas caracterizadas por:",
          opciones: ["Hojas planas y caducas, con flores vistosas", "Hojas en aguja o escama y semillas no encerradas en un fruto", "Semillas encerradas en frutos carnosos", "Reproducción exclusivamente vegetativa"],
          correcta: 1,
          explicacion: "En el Tema 7D se estructuran en pinares, sabinares y enebrales, y pinsapares."
        },
        {
          tipo: "multiple",
          pregunta: "El pino negral o salgareño Pinus nigra ocupa los pisos supra y oromediterráneo, y su subespecie ibérica es:",
          opciones: ["P. nigra subsp. laricio", "P. nigra subsp. salzmannii", "P. nigra subsp. pallasiana", "P. nigra subsp. nigra"],
          correcta: 1,
          explicacion: "Forma parte de un complejo circummediterráneo; es muy longevo, con ejemplares que superan los 1000 años."
        },
        {
          tipo: "vf",
          pregunta: "El pino carrasco Pinus halepensis no aguanta temperaturas inferiores a -3 ºC, lo que limita su expansión hacia el interior peninsular más continental.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es indiferente edáfico y muy termófilo, con su área concentrada en el levante y el valle del Ebro."
        },
        {
          tipo: "multiple",
          pregunta: "Un rodenal es un bosque que se desarrolla sobre:",
          opciones: ["Dolomías y mármoles", "Areniscas rojas del Triásico", "Suelos yesíferos", "Margas y arcillas terciarias"],
          correcta: 1,
          explicacion: "Suelos arenosos, ácidos y pobres donde Pinus pinaster encuentra su hábitat óptimo y forma comunidades finales de sucesión."
        },
        {
          tipo: "multiple",
          pregunta: "El pinsapo escapa de la competencia de las quercíneas porque crece sobre sustratos difíciles como:",
          opciones: ["Arenales costeros", "Dolomías, mármoles y serpentinas", "Suelos arcillosos de las depresiones", "Turberas ácidas"],
          correcta: 1,
          explicacion: "Su carácter edafófilo sobre suelos peridotíticos y básicos le permite refugiarse donde las frondosas no prosperan."
        },
        {
          tipo: "multiple",
          pregunta: "El gálbulo es el tipo de cono carnoso y bayiforme característico de:",
          opciones: ["Las pináceas como el pino y el abeto", "Las cupresáceas como sabinas y enebros", "Las fagáceas como robles y encinas", "Las ericáceas como brezos y madroños"],
          correcta: 1,
          explicacion: "Es azulado en Juniperus thurifera y rojizo en J. oxycedrus; permite distinguir las cupresáceas de las pináceas, que tienen piñas leñosas."
        },
        {
          tipo: "vf",
          pregunta: "Un cono serótino es el que permanece cerrado durante años en la copa y se abre solo tras un incendio o un calor intenso, como en Pinus halepensis.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es la base de la estrategia pirófita facultativa del pino carrasco, que recoloniza rápido las áreas quemadas."
        }
      ]
    },
    // ========================================================================
    // ============================== TEST 3 ==================================
    // ========================================================================
    {
      id: "T7-3",
      nombre: "Tema 7 · Test 3",
      titulo: "Tema 7 · Test 3",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "Considerando solo el territorio peninsular, su superficie aproximada es de:",
          opciones: ["494 011 km²", "506 482 km²", "200 000 km²", "1 000 000 km²"],
          correcta: 0,
          explicacion: "Los 506 482 km² corresponden a España con Canarias, Baleares, Ceuta y Melilla; solo la Península son unos 494 011 km²."
        },
        {
          tipo: "multiple",
          pregunta: "El eje de termicidad creciente del clima peninsular sigue la dirección:",
          opciones: ["Noroeste-sureste", "Norte-sur", "Periferia-centro", "Este-oeste"],
          correcta: 1,
          explicacion: "Eje N-S de termicidad: del frío cantábrico al calor del Guadalquivir y Almería."
        },
        {
          tipo: "vf",
          pregunta: "En el eje de humedad, la Galicia atlántica supera los 1400 mm anuales mientras el sureste almeriense baja de los 200 mm.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es el contraste extremo del eje NO-SE de humedad decreciente."
        },
        {
          tipo: "multiple",
          pregunta: "Respecto a la pendiente como modificador del relieve, en las laderas muy inclinadas:",
          opciones: ["La formación del suelo es rápida y la erosión lenta", "La formación del suelo es lenta y la erosión rápida, limitando la vegetación", "El suelo es siempre muy profundo y fértil", "Se favorecen los bosques mixtos más complejos"],
          correcta: 1,
          explicacion: "La vegetación queda limitada a especies tolerantes al suelo pobre o rocoso; en zonas llanas los suelos se desarrollan más."
        },
        {
          tipo: "multiple",
          pregunta: "La jara pringosa Cistus ladanifer y el alcornoque Quercus suber son ejemplos de plantas:",
          opciones: ["Calcícolas", "Neutrófilas", "Acidófilas o calcífugas", "Gipsófilas estrictas"],
          correcta: 2,
          explicacion: "No toleran la cal: prefieren sustratos silíceos, ácidos, pobres en minerales y de pH bajo."
        },
        {
          tipo: "multiple",
          pregunta: "Los yesales ibéricos están protegidos por la Directiva Hábitats europea como hábitat prioritario con el código:",
          opciones: ["1520", "9340", "6220", "92A0"],
          correcta: 0,
          explicacion: "Albergan una flora gipsófila endémica de altísimo valor; en proyectos sobre yesos conviene respetarla en lugar de reemplazarla."
        },
        {
          tipo: "multiple",
          pregunta: "La Península se reparte entre dos grandes regiones biogeográficas:",
          opciones: ["Atlántica y macaronésica", "Eurosiberiana y mediterránea", "Boreal y templada", "Continental y oceánica"],
          correcta: 1,
          explicacion: "La eurosiberiana ocupa el norte húmedo; la mediterránea, el resto. La línea sigue la transición del clima oceánico al mediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia ZACAMI reúne los seis ejes de la diversidad paisajística ibérica: zonal, altitudinal, continentalidad, atlanticidad/mediterraneidad, mosaicidad e:",
          opciones: ["Insularidad", "Influencia antrópica", "Inversión térmica", "Irradiación solar"],
          correcta: 1,
          explicacion: "Los cuatro primeros son geográficos; la mosaicidad es local y la influencia antrópica, histórica."
        },
        {
          tipo: "multiple",
          pregunta: "La vegetación paleomediterránea relicta que aparece de forma esporádica en la Cordillera Cantábrica está formada por flora:",
          opciones: ["Esclerófila o lauroide testigo de climas pasados más cálidos", "Caducifolia de óptimo atlántico", "Esteparia halófila", "Alpina rastrera"],
          correcta: 0,
          explicacion: "Encinares, lauredales, alcornocales y acebedas, con acebuches, aladiernos, lentiscos, loros y madroños."
        },
        {
          tipo: "multiple",
          pregunta: "El bosque mixto planocaducifolio puede albergar en un mismo rodal hasta:",
          opciones: ["5 especies arbóreas", "25 especies arbóreas", "100 especies arbóreas", "2 especies arbóreas"],
          correcta: 1,
          explicacion: "Cifra excepcional para el contexto ibérico; conviven fresnos, tilos, arces, olmos, robles, cerezos, hayas y abedules, entre otros."
        },
        {
          tipo: "multiple",
          pregunta: "El ambiente nemoral propio del interior de un bosque caducifolio cerrado selecciona una flora herbácea:",
          opciones: ["Heliófila de pleno sol", "Umbrófila con bulbos o rizomas que florece en primavera antes del rebrote del dosel", "Esclerófila perennifolia", "Acuática"],
          correcta: 1,
          explicacion: "Es un ambiente sombrío y fresco que deja pasar suficiente luz para sostener estratos arbustivo y herbáceo ricos."
        },
        {
          tipo: "vf",
          pregunta: "Gran parte de las carballeiras de Quercus robur fueron taladas para la construcción naval de las flotas atlánticas durante los siglos XVI a XIX.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Su madera era estratégica; muchas otras se transformaron en prados de siega, lo que explica su fuerte regresión."
        },
        {
          tipo: "multiple",
          pregunta: "El haya es extraordinariamente umbrófila: alcanza su pleno rendimiento fotosintético a partir de un nivel de luz incidente tan bajo como:",
          opciones: ["1,2%", "20%", "40%", "70%"],
          correcta: 0,
          explicacion: "Por eso prospera bajo cielos cubiertos y nieblas frecuentes propios de los ambientes atlánticos; su óptimo ronda el 20%."
        },
        {
          tipo: "multiple",
          pregunta: "El melojo o rebollo Quercus pyrenaica se asienta preferentemente en el sector occidental peninsular y siempre sobre sustratos:",
          opciones: ["Calizos y básicos", "Ácidos", "Yesíferos", "Salinos"],
          correcta: 1,
          explicacion: "Es un roble marcescente que tiende un puente entre los ambientes atlánticos y mediterráneos."
        },
        {
          tipo: "multiple",
          pregunta: "Las acebedas, formaciones dominadas por el acebo, ocupan típicamente:",
          opciones: ["El piso colino basal en solana", "El piso montano superior en orientación norte y ambientes húmedos", "Las dunas litorales", "Las depresiones esteparias del interior"],
          correcta: 1,
          explicacion: "Prefieren suelos ácidos, aunque la especie no es estrictamente acidófila; junto con los abetales, son los bosques más sombríos."
        },
        {
          tipo: "multiple",
          pregunta: "Las comunidades potenciales de encinares y alcornocales se asocian principalmente al piso:",
          opciones: ["Termomediterráneo", "Mesomediterráneo", "Oromediterráneo", "Crioromediterráneo"],
          correcta: 1,
          explicacion: "En el meso dominan encinares y alcornocales; en el supra, melojares y quejigares; en el oro, sabinares y pinares."
        },
        {
          tipo: "multiple",
          pregunta: "Según la clasificación por ombrotipos, un territorio con 350-600 mm de precipitación anual es:",
          opciones: ["Árido", "Semiárido", "Seco", "Subhúmedo"],
          correcta: 2,
          explicacion: "Árido menos de 200 mm; semiárido 200-350; seco 350-600; subhúmedo 600-1000; húmedo 1000-1600; hiperhúmedo más de 1600."
        },
        {
          tipo: "vf",
          pregunta: "La alsina Quercus ilex subsp. ilex es la encina del litoral mediterráneo, con hoja más alargada y bellota más amarga que la carrasca.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Domina los alsinares catalanes; es más exigente en humedad y menos tolerante a la continentalidad que la ballota."
        },
        {
          tipo: "multiple",
          pregunta: "Según la cartografía de Rivas Martínez de 1987, el encinar como vegetación potencial ocuparía de la España peninsular y balear en torno al:",
          opciones: ["18%", "57,8%", "3,3%", "31%"],
          correcta: 1,
          explicacion: "Unos 30,5 millones de hectáreas potenciales, frente a solo el 18% de encinar real cartografiado por Ceballos y Ruiz de la Torre."
        },
        {
          tipo: "multiple",
          pregunta: "La depresión de mediodía se ha comprobado en encina, madroño, coscoja y olivilla, pero NO la presentan:",
          opciones: ["El alcornoque y el lentisco", "La adelfa y la zarzaparrilla", "El mirto y el palmito", "El algarrobo y el durillo"],
          correcta: 1,
          explicacion: "Esas dos especies mantienen otra estrategia de manejo del agua y no cierran sus estomas al mediodía."
        },
        {
          tipo: "multiple",
          pregunta: "El melojo Quercus pyrenaica destaca, además de por ser acidófilo estricto, por ser:",
          opciones: ["Calcícola de parameras", "Gran creador de suelo, que mejora la estructura y fertilidad de sustratos pobres", "Una especie perennifolia esclerófila", "El roble más exigente en humedad de la Península"],
          correcta: 1,
          explicacion: "Tradicionalmente se ha gestionado como monte bajo, con rebrote intenso desde la cepa."
        },
        {
          tipo: "multiple",
          pregunta: "Entre el Pirineo y el valle del Ebro, la hibridación de Q. pubescens con Q. faginea da lugar a las poblaciones intermedias llamadas:",
          opciones: ["Quercus subpyrenaica", "Quercus rotundifolia", "Quercus humilis", "Quercus coccifera"],
          correcta: 0,
          explicacion: "Son enjambres híbridos morfológicamente continuos, un ejemplo clásico de hibridación interespecífica en el género Quercus."
        },
        {
          tipo: "vf",
          pregunta: "La encina, el alcornoque y el melojo son especies rebrotadoras que toleran bien los fuegos repetidos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Conservan la capacidad de emitir nuevos brotes desde raíz o cepa tras la quema, a diferencia de las semilladoras."
        },
        {
          tipo: "multiple",
          pregunta: "Los tres grandes grupos de coníferas mediterráneas tratados en el tema son los pinares, los sabinares y enebrales, y:",
          opciones: ["Los hayedos", "Los pinsapares", "Los robledales marcescentes", "Los abedulares"],
          correcta: 1,
          explicacion: "Pinares de Pinus, sabinares y enebrales de Cupressaceae, y pinsapares de Abies pinsapo, endemismo bético-rifeño."
        },
        {
          tipo: "multiple",
          pregunta: "La resinación, aprovechamiento tradicional asociado a Pinus pinaster, consiste en hacer incisiones en el tronco para obtener:",
          opciones: ["Corcho", "Resina, de la que se extraen trementina y colofonia", "Taninos", "Piñones"],
          correcta: 1,
          explicacion: "España fue líder mundial hasta los años 1970; la actividad se ha reactivado desde 2010 en Soria, Segovia y Cuenca."
        },
        {
          tipo: "multiple",
          pregunta: "Los pinares de pino piñonero se organizan en tres grandes tipos según el sustrato. ¿Cuál de estos es uno de ellos?",
          opciones: ["Pinares sobre dolomías de Sierra Bermeja", "Pinares de arenales costeros, que van de Doñana a Lisboa", "Pinares sobre yesos del Tajo", "Pinares de turberas cantábricas"],
          correcta: 1,
          explicacion: "Los otros dos son los arenales continentales de las mesetas y los suelos arenosos derivados de la erosión del granito."
        },
        {
          tipo: "vf",
          pregunta: "La sabina albar Juniperus thurifera resiste más continentalidad, frío y sequedad que la encina, por lo que la sustituye en parameras y zonas de fuerte oscilación térmica.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Su estructura de bosque abierto deja pasar mucha luz y favorece un sotobosque rico en heliófilas, aprovechado por el ganado."
        },
        {
          tipo: "multiple",
          pregunta: "El pinsapo Abies pinsapo es relevante biogeográficamente porque es:",
          opciones: ["El pino más termófilo de Iberia", "El único representante ibérico del género Abies y un relicto terciario", "Una cupresácea de parameras secas", "Un roble marcescente del sur"],
          correcta: 1,
          explicacion: "Endemismo paleotropical relicto del extremo sur peninsular y del norte de Marruecos, hoy catalogado como vulnerable."
        },
        {
          tipo: "multiple",
          pregunta: "Las serpentinas y peridotitas son rocas ultrabásicas ricas en:",
          opciones: ["Carbonato cálcico", "Sílice y cuarzo", "Magnesio y metales pesados como níquel y cromo", "Sulfato de calcio"],
          correcta: 2,
          explicacion: "Generan suelos tóxicos para la mayoría de plantas; solo las serpentinófilas, como el pinsapo, los colonizan."
        },
        {
          tipo: "multiple",
          pregunta: "Un rasgo distintivo de los conos de Abies frente a los de Pinus es que en Abies los conos son:",
          opciones: ["Péndulos y agrupados", "Erectos sobre las ramas", "Sésiles en forma de gancho", "Carnosos y bayiformes"],
          correcta: 1,
          explicacion: "En el pinsapo los conos erectos y las acículas de inserción dística son rasgos diagnósticos del género Abies."
        }
      ]
    },
    // ========================================================================
    // ============================== TEST 4 ==================================
    // ========================================================================
    {
      id: "T7-4",
      nombre: "Tema 7 · Test 4",
      titulo: "Tema 7 · Test 4",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "El extraordinario rango altitudinal del territorio ibérico, de unos 3700 m, importa porque:",
          opciones: ["Reduce la biodiversidad vegetal", "Condensa en poca distancia variaciones de temperatura equivalentes a recorrer Europa de sur a norte", "Impide la formación de microclimas", "Uniformiza el clima de toda la Península"],
          correcta: 1,
          explicacion: "Con un gradiente de 0,6 ºC cada 100 m, en menos de 200 km se pasa del clima subtropical al alpino; de ahí la altísima biodiversidad."
        },
        {
          tipo: "multiple",
          pregunta: "En la nemotecnia HTCA, la continentalidad creciente sigue la dirección:",
          opciones: ["Noroeste-sureste", "Norte-sur", "Periferia-centro", "Este-oeste"],
          correcta: 2,
          explicacion: "Explica los inviernos fríos y veranos calurosos de la Meseta frente a la dulzura térmica de la costa."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia SIFP reúne los cuatro modificadores del relieve: solana/umbría, inversión térmica, Foehn y:",
          opciones: ["Precipitación", "Pendiente", "Permafrost", "Profundidad del suelo"],
          correcta: 1,
          explicacion: "Los cuatro convierten un mismo clima general en mosaicos vegetales muy distintos a escala local."
        },
        {
          tipo: "vf",
          pregunta: "Los suelos muy arcillosos, con partículas menores de 0,002 mm, tienen mal drenaje y pueden provocar asfixia radical.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "En el extremo opuesto, los suelos muy arenosos pierden el agua con rapidez y son pobres en nutrientes."
        },
        {
          tipo: "multiple",
          pregunta: "La flora estepária ibérica conserva elementos de cuatro orígenes que confluyeron durante el Mioceno-Plioceno. ¿Cuál de estos es uno de ellos?",
          opciones: ["Macaronésico", "Saharo-arábigo", "Boreoalpino", "Neotropical"],
          correcta: 1,
          explicacion: "Los cuatro orígenes son eurasiático frío, eurasiático cálido, saharo-arábigo y norteafricano."
        },
        {
          tipo: "multiple",
          pregunta: "Un refugio glacial es una zona que durante los periodos glaciares mantuvo:",
          opciones: ["Condiciones suficientemente moderadas para la supervivencia de especies sensibles al frío", "Las temperaturas más bajas de Europa", "Un clima árido y estepario", "Hielo permanente"],
          correcta: 0,
          explicacion: "La Ibérica, por sus cañones, valles meridionales y costas suaves, fue especialmente importante y conserva muchos paleoendemismos."
        },
        {
          tipo: "multiple",
          pregunta: "Un paleoendemismo es una especie endémica de origen:",
          opciones: ["Reciente, surgida tras las glaciaciones", "Antiguo, superviviente desde antes de las glaciaciones gracias a refugios climáticos", "Introducido por el ser humano", "Cosmopolita"],
          correcta: 1,
          explicacion: "La Península conserva muchos paleoendemismos heredados de su papel como refugio glacial."
        },
        {
          tipo: "multiple",
          pregunta: "Tres factores condicionan el clima de la región eurosiberiana: la situación latitudinal entre 41º y 43º N, la proximidad al mar y:",
          opciones: ["La sequía estival prolongada", "La orografía cantábrica y pirenaica que fuerza el ascenso de las masas de aire húmedo", "La continentalidad de las mesetas", "La presencia de yesos"],
          correcta: 1,
          explicacion: "Ese ascenso multiplica las precipitaciones de relieve y mantiene un clima sin estación seca."
        },
        {
          tipo: "multiple",
          pregunta: "El ombroclima hiperhúmedo de la región eurosiberiana corresponde a precipitaciones:",
          opciones: ["De 650 a 1000 mm", "De 1000 a 1600 mm", "Superiores a 1600 mm", "Inferiores a 650 mm"],
          correcta: 2,
          explicacion: "Es propio de cumbres y vertientes expuestas al flujo atlántico."
        },
        {
          tipo: "multiple",
          pregunta: "El roble albar Quercus petraea forma siempre bosques escasos y muy localizados en la Península porque aquí marca:",
          opciones: ["Su óptimo de distribución europea", "El límite sur de su distribución europea", "El centro de su área", "Su zona de máxima productividad"],
          correcta: 1,
          explicacion: "Ocupa el piso montano de las vertientes meridionales cantábrica y pirenaica, en transición atlántico-mediterránea."
        },
        {
          tipo: "vf",
          pregunta: "El haya es prácticamente incapaz de regular su transpiración, que en el dosel puede alcanzar el 40% de la precipitación total.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Por eso depende de un suministro hídrico continuo y cede su lugar a otras especies en cuanto sube la temperatura estival."
        },
        {
          tipo: "multiple",
          pregunta: "Osmunda regalis, Woodwardia radicans y Culcita macrocarpa son ejemplos de:",
          opciones: ["Lianas mediterráneas", "Helechos relictos subtropicales del bosque mixto y los barrancos cantábricos", "Coníferas de alta montaña", "Gipsófilas estrictas"],
          correcta: 1,
          explicacion: "Son testigos vivos de un clima pasado más cálido y húmedo, equivalentes ecológicos a la flora subtropical macaronésica."
        },
        {
          tipo: "multiple",
          pregunta: "Los abedulares se diferencian de los hayedos en que son formaciones:",
          opciones: ["Densas y oscuras, sin sotobosque", "Densas pero luminosas, con sotobosque rico en fanerófitos y caméfitos", "Monoespecíficas y de baja diversidad", "Esclerófilas perennifolias"],
          correcta: 1,
          explicacion: "Permiten mucho mayor paso de luz que los hayedos; en el occidente cantábrico forman los bosques de mayor altitud, entre 1500 y 1600 m."
        },
        {
          tipo: "multiple",
          pregunta: "Las tres variantes de abetal, según la nemotecnia HAS, son: hayedo-abetal, abetal montano y abetal:",
          opciones: ["Subalpino", "Colino", "Termófilo", "Ripario"],
          correcta: 0,
          explicacion: "El abetal subalpino contacta con los pinares de Pinus uncinata en la franja altitudinal más exigente."
        },
        {
          tipo: "vf",
          pregunta: "El pino albar Pinus sylvestris tiene las piñas sobre pedúnculo, mientras que el pino negro Pinus uncinata las tiene sésiles, sin pedúnculo.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Además, P. sylvestris tiene la parte alta del tronco anaranjada y acículas suaves verde-azuladas; P. uncinata, tronco oscuro y acículas cortas."
        },
        {
          tipo: "multiple",
          pregunta: "La sequía estival mediterránea se considera la presión selectiva que explica:",
          opciones: ["La caducidad foliar invernal", "La esclerofilia, la marcescencia, la depresión de mediodía y la dominancia de perennifolias", "El ombroclima hiperhúmedo", "La ausencia de incendios"],
          correcta: 1,
          explicacion: "Es el factor climático que filtra qué plantas pueden vivir en la región mediterránea."
        },
        {
          tipo: "multiple",
          pregunta: "Los matorrales de alta montaña mediterránea se presentan en dos modalidades muy distintas: piornales silicícolas de genisteas y:",
          opciones: ["Brezales atlánticos", "Matorrales almohadillado-espinosos calcícolas de los macizos del sur", "Tarayales freatófitos", "Jarales termófilos"],
          correcta: 1,
          explicacion: "Los piornales silicícolas son endémicos y no existen en otras montañas europeas; los almohadillado-espinosos son típicos de Sierra Nevada y la Almijara."
        },
        {
          tipo: "multiple",
          pregunta: "La distribución ibérica del alcornoque Quercus suber se concentra en:",
          opciones: ["La meseta norte y el Sistema Ibérico", "El cuadrante suroccidental y el noreste catalán", "El Pirineo central", "Las parameras del interior"],
          correcta: 1,
          explicacion: "Al ser calcífugo estricto y exigente en humedad, queda restringido a Extremadura, oeste andaluz, Algarve y la Cataluña litoral."
        },
        {
          tipo: "multiple",
          pregunta: "El compromiso ecofisiológico de la esclerofilia supone una rentabilidad fotosintética del orden de:",
          opciones: ["El doble que la de un planocaducifolio templado", "Un tercio a la mitad que la de un planocaducifolio templado", "La misma que la de un planocaducifolio templado", "Diez veces mayor que la de un planocaducifolio templado"],
          correcta: 1,
          explicacion: "Reduce la transpiración como ventaja, pero la tasa fotosintética máxima es baja y la inversión por unidad de hoja, alta."
        },
        {
          tipo: "vf",
          pregunta: "España es hoy el segundo país con mayor superficie forestal de la Unión Europea en términos absolutos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El aumento se debe a las repoblaciones del siglo XX, el abandono rural y el cese del pastoreo extensivo; España está hoy más forestada que hace un siglo."
        },
        {
          tipo: "multiple",
          pregunta: "Según la tolerancia al frío de las especies del encinar, la encina resiste lesiones por bajas temperaturas hasta unos:",
          opciones: ["-6 a -8 ºC", "-12 a -14 ºC", "-15 a -25 ºC", "0 a -3 ºC"],
          correcta: 2,
          explicacion: "Es la más resistente; el olivo, alcornoque, lentisco y coscoja sufren entre -12 y -14 ºC, y el algarrobo, mirto y adelfa entre -6 y -8 ºC."
        },
        {
          tipo: "multiple",
          pregunta: "Ordenados por exigencia hídrica creciente, los cuatro robles marcescentes ibéricos van de menos a más exigente en el orden:",
          opciones: ["Faginea, pubescens, pyrenaica y canariensis", "Canariensis, pyrenaica, pubescens y faginea", "Pubescens, faginea, canariensis y pyrenaica", "Pyrenaica, faginea, pubescens y canariensis"],
          correcta: 0,
          explicacion: "El quejigo moruno Q. canariensis es el más exigente en humedad, con más de 1000 mm anuales."
        },
        {
          tipo: "multiple",
          pregunta: "El hemicriptófito, forma biológica de Raunkjaer dominante en melojares y quejigares, es una planta con yemas de renovación:",
          opciones: ["Por encima de 50 cm del suelo", "A ras del suelo, protegidas por restos de la propia planta", "En bulbos o rizomas bajo el suelo", "Flotando en el agua"],
          correcta: 1,
          explicacion: "Se diferencia del geófito, que tiene las yemas enterradas en bulbos, rizomas o tubérculos."
        },
        {
          tipo: "multiple",
          pregunta: "En la Tierra de Pinares segoviana, sobre sustratos arenosos, los pinos dominantes son:",
          opciones: ["Pinus halepensis y P. nigra", "Pinus pinaster y P. pinea", "Pinus sylvestris y P. uncinata", "Pinus nigra y P. sylvestris"],
          correcta: 1,
          explicacion: "En estos ambientes de fuerte condicionamiento litológico los pinos representan la comunidad final de la sucesión, no una etapa intermedia."
        },
        {
          tipo: "multiple",
          pregunta: "El pino carrasco Pinus halepensis tiene una población natural relicta, resto fósil del pasado, en:",
          opciones: ["La cuenca del Duero", "El valle del Ebro", "La Tierra de Pinares segoviana", "Sierra Bermeja"],
          correcta: 1,
          explicacion: "Es el más termófilo de los pinos ibéricos; P. nigra, en cambio, conserva restos fósiles en la cuenca del Duero."
        },
        {
          tipo: "vf",
          pregunta: "El pino negral o salgareño Pinus nigra es muy longevo y puede superar los 1000 años en condiciones óptimas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es la única especie viable en repoblaciones por encima de 1500 m en clima mediterráneo; aporta sombra densa y crecimiento lento."
        },
        {
          tipo: "multiple",
          pregunta: "El fuerte condicionamiento geomorfológico de Pinus pinaster se observa porque aparece sobre dolomías, peridotitas y, sobre todo:",
          opciones: ["Suelos salinos", "Rodenales, areniscas rojas del Triásico", "Yesos del Tajo", "Turberas ácidas"],
          correcta: 1,
          explicacion: "Es indiferente edáfico pero prefiere suelos sueltos y arenosos, donde forma comunidades finales de sucesión."
        },
        {
          tipo: "multiple",
          pregunta: "La estructura abierta del sabinar albar, con árboles dispersos, favorece un sotobosque rico en:",
          opciones: ["Especies esciófilas de sombra", "Especies heliófilas", "Helechos relictos", "Briófitos y musgos"],
          correcta: 1,
          explicacion: "Esa estructura tan diáfana permite un importante aprovechamiento ganadero en los pastos intercalados."
        },
        {
          tipo: "multiple",
          pregunta: "El pinsapo Abies pinsapo requiere precipitaciones superiores a 2000 mm anuales, lo que lo convierte en:",
          opciones: ["El pino más tolerante a la sequía", "El abeto más exigente del Mediterráneo occidental", "Una especie indiferente a la humedad", "El árbol más termófilo del sur"],
          correcta: 1,
          explicacion: "Forma bosques de montaña mediterránea en el piso submediterráneo, entre 1000 y 1700 m."
        },
        {
          tipo: "vf",
          pregunta: "El pinsapo está catalogado como especie vulnerable según la UICN.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Además figura como Especie de Interés Especial en Andalucía; su uso en jardinería se limita a parques de altura con suelos básicos."
        }
      ]
    },
    // ========================================================================
    // ============================== TEST 5 ==================================
    // ========================================================================
    {
      id: "T7-5",
      nombre: "Tema 7 · Test 5",
      titulo: "Tema 7 · Test 5",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "El punto más bajo del territorio cultivado en España, a -1 m de cota, son:",
          opciones: ["Las marismas de Doñana", "Los arrozales de Alfafar, en la Albufera de Valencia", "Las salinas de San Pedro del Pinatar", "Las Tablas de Daimiel"],
          correcta: 1,
          explicacion: "Frente a esos -1 m, la cumbre más alta es el Teide con 3718 m: un rango altitudinal extraordinario."
        },
        {
          tipo: "multiple",
          pregunta: "El clima peninsular varía simultáneamente en cuatro ejes. ¿Cuál de estos es el eje altitudinal?",
          opciones: ["Variaciones de humedad del noroeste al sureste", "Variaciones simultáneas de temperatura más fría con la altura y humedad más alta", "Variaciones de termicidad de norte a sur", "Variaciones de continentalidad de la periferia al centro"],
          correcta: 1,
          explicacion: "El eje altitudinal combina efectos termohídricos: más fría y más húmeda con la altura."
        },
        {
          tipo: "multiple",
          pregunta: "Como consecuencia del efecto Foehn, las dos vertientes de una cordillera presentan:",
          opciones: ["Igual pluviometría en ambas caras", "Una vertiente lluviosa de barlovento y otra muy seca de sotavento", "Suelos idénticos en ambas laderas", "Inversión térmica permanente"],
          correcta: 1,
          explicacion: "Es el caso de la cara cantábrica, lluviosa, frente a la vertiente meridional de la cordillera, más seca."
        },
        {
          tipo: "multiple",
          pregunta: "Según la nemotecnia NCA, la encina Quercus ilex subsp. ballota y el pino negro Pinus uncinata son ejemplos de plantas:",
          opciones: ["Calcícolas", "Acidófilas", "Neutrófilas o indiferentes edáficas", "Gipsófilas"],
          correcta: 2,
          explicacion: "Toleran un rango amplio de pH y sustratos, de silíceos a calcáreos; ese amplio rango explica la enorme distribución de la encina."
        },
        {
          tipo: "multiple",
          pregunta: "La diferencia entre una gipsófila estricta y una tolerante o gypsovag es que la estricta:",
          opciones: ["Crece también fuera del yeso", "Solo crece sobre suelos con yeso", "Rechaza activamente el yeso", "Solo vive en suelos salinos"],
          correcta: 1,
          explicacion: "Helianthemum squamatum es estricta; Salvia lavandulifolia es tolerante y aparece también en otros sustratos."
        },
        {
          tipo: "vf",
          pregunta: "El Holoceno es el interglaciar actual y abarca aproximadamente los últimos 10 000 años.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "En la Península supuso la recuperación de los bosques templados, con quercíneas caducifolias en el centro-norte y perennes en el sur."
        },
        {
          tipo: "multiple",
          pregunta: "Los pisos bioclimáticos de la región eurosiberiana, de menos a más frío, son:",
          opciones: ["Termo, meso, supra, oro y crioromediterráneo", "Colino, montano, subalpino y alpino", "Subhúmedo, húmedo e hiperhúmedo", "Basal, medio, alto y cacuminal"],
          correcta: 1,
          explicacion: "Los hayedos son montanos eurosiberianos; los pinares de pino negro, subalpinos pirenaicos."
        },
        {
          tipo: "multiple",
          pregunta: "Los reductos de bosque mixto cantábrico mejor conservados se localizan hoy sobre todo en:",
          opciones: ["Las llanuras agrícolas del interior", "Lindes y cañones de difícil acceso, como Añisclo, Covadonga o la Devesa da Rogueira", "Las dunas litorales", "Las parameras del Sistema Ibérico"],
          correcta: 1,
          explicacion: "La mayor parte de sus extensiones potenciales están transformadas en prados de siega, por lo que su estado de conservación es malo."
        },
        {
          tipo: "multiple",
          pregunta: "El melojo o rebollo Quercus pyrenaica aparece en la tabla del Tema 7B asociado, por su distribución, al piso:",
          opciones: ["Colino basal exclusivamente", "Montano superior y enclaves meso-supramediterráneos", "Subalpino y alpino", "Nival"],
          correcta: 1,
          explicacion: "Tiende un puente entre los ambientes atlánticos y mediterráneos, siempre sobre sustratos ácidos."
        },
        {
          tipo: "multiple",
          pregunta: "El haya alcanza entre 30 y 35 metros y dispone sus hojas:",
          opciones: ["Verticalmente, para captar luz lateral", "En planos horizontales perpendiculares a los rayos solares, formando un dosel apretadísimo", "En fascículos de dos acículas", "Solo en la base del tronco"],
          correcta: 1,
          explicacion: "Ese dosel intercepta casi toda la radiación disponible, produce una sombra muy intensa y deja el suelo casi sin sotobosque."
        },
        {
          tipo: "vf",
          pregunta: "Los bosques mixtos buscan fondos de valle con suelos profundos, precisamente los suelos más fértiles que históricamente se han transformado en prados de siega.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Por eso su distribución actual es muy fragmentaria y su estado de conservación, malo."
        },
        {
          tipo: "multiple",
          pregunta: "El alsinar, encinar de Quercus ilex subsp. ilex, aparece en la fachada cantábrica sobre:",
          opciones: ["Barrancos interiores silíceos", "Sustratos calcáreos cercanos al litoral, los cuetos asturianos", "Turberas ácidas de cumbre", "Arenales costeros"],
          correcta: 1,
          explicacion: "Es la encina mediterránea oriental, de hoja alargada y bellota amarga; en el norte es un caso de biogeografía relicta."
        },
        {
          tipo: "multiple",
          pregunta: "En los enclaves termófilos del occidente de Asturias sobreviven lauredales y acebuchares con olivos silvestres, cuyo nombre científico es:",
          opciones: ["Olea europaea var. sylvestris", "Laurus nobilis", "Arbutus unedo", "Quercus suber"],
          correcta: 0,
          explicacion: "Son testigos de fases climáticas más cálidas y refugios de especies con su área principal en el sur peninsular."
        },
        {
          tipo: "multiple",
          pregunta: "En el dominio atlántico, el pino albar Pinus sylvestris ocupa el piso montano y, en su mejor representación natural pirenaica, forma masas sobre sustratos:",
          opciones: ["Calcáreos", "Silíceos, entre 1500 y 2000 m", "Yesíferos", "Salinos"],
          correcta: 1,
          explicacion: "En la cara sur de la Cordillera Cantábrica su representación natural es muy escasa, sustituido por hayedos y robledales."
        },
        {
          tipo: "vf",
          pregunta: "El nombre específico uncinata del pino negro alude a la forma de gancho de las escamas de sus piñas, que además son sésiles.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Se distingue del pino albar por sus acículas cortas, rígidas y muy oscuras y por su tronco uniformemente oscuro."
        },
        {
          tipo: "multiple",
          pregunta: "Los límites térmicos clave que separan los cinco pisos bioclimáticos mediterráneos son, en grados centígrados de media anual:",
          opciones: ["12, 6 y 3", "16, 13, 8 y 4", "17, 14, 10 y 5", "20, 15, 10 y 5"],
          correcta: 1,
          explicacion: "Termomediterráneo más de 16; mesomediterráneo 13-16; supramediterráneo 8-13; oromediterráneo 4-8; crioromediterráneo menos de 4."
        },
        {
          tipo: "multiple",
          pregunta: "La vegetación freatófita semiárida, formada por tarayales, adelfares y azufaifares, se caracteriza por:",
          opciones: ["No necesitar agua en absoluto", "Depender del nivel freático, lo que le permite mantenerse en climas muy áridos con acceso al agua del subsuelo", "Vivir solo en cumbres húmedas", "Ser exclusivamente acuática"],
          correcta: 1,
          explicacion: "Estas comunidades son endémicas ibéricas y pueden sobrevivir con menos de 350 mm anuales si alcanzan el freático."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia BIS reúne a los tres esclerófilos perennifolios ibéricos. ¿Cuáles son?",
          opciones: ["Ballota, ilex y suber", "Ballota, faginea y suber", "Ilex, pyrenaica y canariensis", "Ballota, ilex y robur"],
          correcta: 0,
          explicacion: "Encina o carrasca y alsina son subespecies de Quercus ilex; el alcornoque Quercus suber es especie aparte."
        },
        {
          tipo: "multiple",
          pregunta: "Aunque los alcornocales ocupan solo el 3,3% de la España peninsular, están relativamente bien conservados porque queda en torno al:",
          opciones: ["5% de su potencialidad", "31% de su potencialidad", "57,8% de su potencialidad", "90% de su potencialidad"],
          correcta: 1,
          explicacion: "Su mejor conservación proporcional se debe en parte al aprovechamiento sostenible del corcho."
        },
        {
          tipo: "multiple",
          pregunta: "Se dice que una especie es calcífuga porque rechaza activamente los suelos calizos. La razón fisiológica es que los carbonatos:",
          opciones: ["Aportan demasiado nitrógeno", "Bloquean la absorción de hierro y provocan clorosis", "Aumentan la salinidad del suelo", "Impiden la fijación de carbono"],
          correcta: 1,
          explicacion: "Por eso el alcornoque, el melojo, el castaño y los brezos viven solo en sustratos ácidos."
        },
        {
          tipo: "vf",
          pregunta: "El quejigo Quercus faginea presenta dos subespecies con preferencias edáficas opuestas: broteroi, mesoacidófila del occidente, y faginea, supra-basófila del oriente.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "En conjunto es indiferente edáfica, pero queda desplazada por el melojo en suelos ácidos y por la carrasca en suelos pobres y secos."
        },
        {
          tipo: "multiple",
          pregunta: "La dinámica sucesional del melojar tras una alteración intensa pasa del melojar al piornal y de este al:",
          opciones: ["Encinar", "Jaral de Cistus laurifolius", "Hayedo", "Sabinar"],
          correcta: 1,
          explicacion: "El piornal incluye Genista florida y Cytisus scoparius; el jaral representa una etapa más degradada."
        },
        {
          tipo: "multiple",
          pregunta: "El Parque Natural de los Alcornocales, en la Sierra del Aljibe de Cádiz, alberga uno de los mejores ejemplos de:",
          opciones: ["Sabinar albar de paramera", "Bosque subtropical relicto del extremo occidental mediterráneo, con especies lauroides", "Pinar de repoblación", "Estepa halófila interior"],
          correcta: 1,
          explicacion: "En los canutos o valles encajados, sumergidos en niebla permanente, viven especies lauroides como Rhododendron ponticum subsp. baeticum."
        },
        {
          tipo: "multiple",
          pregunta: "El pino piñonero Pinus pinea es una especie térmica que aguanta heladas únicamente si:",
          opciones: ["La humedad ambiental es alta", "La humedad ambiental es baja", "El suelo es calcáreo", "Crece por encima de 1500 m"],
          correcta: 1,
          explicacion: "Eso explica su buena adaptación a los arenales continentales de clima contrastado; es indiferente edáfica."
        },
        {
          tipo: "multiple",
          pregunta: "En repoblaciones de montaña mediterránea por encima de 1500 m, la única especie de pino realmente viable es:",
          opciones: ["Pinus halepensis", "Pinus pinea", "Pinus nigra", "Pinus pinaster"],
          correcta: 2,
          explicacion: "Aporta sombra densa, sotobosque limpio y un crecimiento lento pero muy longevo."
        },
        {
          tipo: "multiple",
          pregunta: "Los sabinares albares son propios de los ambientes continentalizados secos del interior, principalmente en:",
          opciones: ["La Cornisa Cantábrica y el Pirineo", "El Sistema Ibérico y el norte de las Béticas", "El litoral mediterráneo", "Las dunas atlánticas"],
          correcta: 1,
          explicacion: "Los sabinares del centro del valle del Ebro son excepcionales por su baja cota, de 200 a 300 m, y su contacto con pinares de carrasco."
        },
        {
          tipo: "multiple",
          pregunta: "Entre otras cupresáceas ibéricas, el enebro de la miera Juniperus oxycedrus se reconoce por sus:",
          opciones: ["Frutos azulados y hojas sin bandas", "Frutos rojizos y hojas con dos bandas blancas", "Acículas largas y verde-azuladas", "Conos erectos sobre las ramas"],
          correcta: 1,
          explicacion: "Otras cupresáceas a recordar son J. communis, J. sabina, sabina rastrera de montaña, y J. phoenicea, sabina negral termófila."
        },
        {
          tipo: "vf",
          pregunta: "El pinsapo es edafófilo: su crecimiento sobre dolomías, mármoles y serpentinas le permite escapar de la competencia de las quercíneas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Sobre esos suelos difíciles para las frondosas, el pinsapo encuentra refugio frente a encinas y robles."
        },
        {
          tipo: "multiple",
          pregunta: "Un pinar puede ser comunidad final de la sucesión o una etapa intermedia. Será etapa intermedia cuando:",
          opciones: ["Se asiente sobre arenales pobres donde nada lo desplaza", "Crezca en suelos profundos donde con el tiempo la encina lo desplazaría", "Ocupe rodenales triásicos", "Forme la línea forestal subalpina"],
          correcta: 1,
          explicacion: "La comunidad final, o clímax, es estable y autorregenerable en equilibrio con el clima y el sustrato."
        },
        {
          tipo: "multiple",
          pregunta: "El primero de los once rasgos del paisaje vegetal mediterráneo, el más estructurante, es:",
          opciones: ["La vegetación esteparia semiárida", "Los bosques esclerófilos", "Las dehesas", "La vegetación freatófita"],
          correcta: 1,
          explicacion: "Incluye tanto los planoperennifolios de hoja pequeña y coriácea, como encinares y alcornocales, como los aciculifolios, pinares y sabinares."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T7; }
if (typeof window !== 'undefined') { window.sandra_botanica_T7 = sandra_botanica_T7; }
