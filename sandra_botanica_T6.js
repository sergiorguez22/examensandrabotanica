const sandra_botanica_T6 = {
  tema: 6,
  titulo: "Vegetación tropical: desiertos cálidos · sabanas y bosque seco · pluvisilva",
  penalizacionPorFallo: 0.3,
  tests: [
    // ========================================================================
    // TEST 1
    // ========================================================================
    {
      id: "T6-1",
      titulo: "Tema 6 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "¿Cómo se define el índice de aridez?",
          opciones: [
            "Precipitación anual dividida por la evapotranspiración potencial anual",
            "Evapotranspiración potencial dividida por la precipitación anual",
            "Temperatura media anual dividida por la precipitación",
            "Número de meses secos dividido por doce"
          ],
          correcta: 0,
          explicacion: "El índice de aridez es el cociente precipitación anual / evapotranspiración potencial anual. Cuanto más bajo, mayor es el déficit hídrico crónico al que debe adaptarse la vegetación."
        },
        {
          tipo: "multiple",
          pregunta: "Por debajo de qué valor del índice de aridez se considera que una zona es dryland o tierra seca:",
          opciones: ["0,2", "0,45", "0,65", "1,0"],
          correcta: 2,
          explicacion: "Con un índice menor de 0,65 la zona es dryland; por debajo de 0,2 ya se considera desierto hiperárido."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué fenómeno atmosférico explica que los grandes desiertos formen dos cinturones a ambos lados del ecuador?",
          opciones: [
            "Las corrientes oceánicas frías",
            "El descenso de aire seco de las células de Hadley sobre los trópicos",
            "El efecto Foehn de las grandes cordilleras",
            "La inversión térmica nocturna"
          ],
          correcta: 1,
          explicacion: "El aire que asciende seco en el ecuador desciende sobre los 23,5º N y S formando masas estables de altas presiones que impiden la formación de nubes: son las células de Hadley."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué porcentaje del territorio español está potencialmente afectado por la desertificación, según los apuntes?",
          opciones: ["41 %", "30 %", "74 %", "12 %"],
          correcta: 2,
          explicacion: "España es el país europeo con mayor riesgo de desertificación: el 74 % del territorio está potencialmente afectado, especialmente el sureste peninsular."
        },
        {
          tipo: "multiple",
          pregunta: "La niebla costera del desierto de Atacama, llamada camanchaca, se origina por:",
          opciones: [
            "La corriente fría de Humboldt, que enfría el aire marino y lo satura de humedad",
            "La corriente cálida de Benguela",
            "Las lluvias monzónicas de verano",
            "El deshielo de los Andes"
          ],
          correcta: 0,
          explicacion: "La corriente fría de Humboldt enfría el aire marino al ascender por la costa y lo satura, generando la camanchaca, única fuente de agua para muchas especies de Atacama."
        },
        {
          tipo: "multiple",
          pregunta: "En la geomorfología del desierto, un erg es:",
          opciones: [
            "Una llanura pedregosa de erosión eólica",
            "Un sistema dunar de arenas móviles",
            "Una depresión salina estacional",
            "Un afloramiento de agua subterránea"
          ],
          correcta: 1,
          explicacion: "El erg es un sistema dunar de arenas móviles; la vegetación lo coloniza solo en el borde, donde las arenas se estabilizan."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son las tres grandes estrategias xerófitas frente a la sequía extrema?",
          opciones: [
            "Sensibles escapadoras, resistentes y poiquilohídricas",
            "Anuales, bienales y perennes",
            "Halófitas, gipsófilas y calcícolas",
            "Heliófitas, esciófitas y umbrófilas"
          ],
          correcta: 0,
          explicacion: "Las plantas xerófitas sensibles escapan a la sequía como semilla o parte subterránea; las resistentes permanecen activas en suelo seco; las poiquilohídricas se desecan sin morir y reviven al rehidratarse."
        },
        {
          tipo: "multiple",
          pregunta: "Durante la noche, una planta con metabolismo CAM:",
          opciones: [
            "Cierra los estomas y libera CO2 al ciclo de Calvin",
            "Abre los estomas y fija CO2 como ácido málico en la vacuola",
            "Realiza la fotosíntesis completa a la luz de la luna",
            "Deja de respirar para ahorrar agua"
          ],
          correcta: 1,
          explicacion: "En el CAM, de noche la planta abre los estomas y fija CO2 como ácido málico, que almacena en la vacuola; de día, con los estomas cerrados, lo descarboxila para alimentar el ciclo de Calvin."
        },
        {
          tipo: "multiple",
          pregunta: "Un ejemplo de suculencia foliar es:",
          opciones: [
            "El saguaro Carnegiea gigantea",
            "El baobab Adansonia",
            "El agave o las hojas piedra Lithops",
            "La euforbia columnar canaria"
          ],
          correcta: 2,
          explicacion: "La suculencia foliar almacena agua en las hojas: Agave, Aloe, Yucca, Sedum, Lithops. La caulinar se da en tallos de cactus y euforbias, y la troncal en baobabs."
        },
        {
          tipo: "multiple",
          pregunta: "La convergencia adaptativa se define como:",
          opciones: [
            "La hibridación entre especies de desiertos distintos",
            "La aparición independiente de rasgos similares en linajes evolutivos distintos por las mismas presiones del medio",
            "El acercamiento de áreas de distribución por el cambio climático",
            "La pérdida de caracteres ancestrales compartidos"
          ],
          correcta: 1,
          explicacion: "La convergencia adaptativa es la aparición independiente de rasgos morfológicos similares en linajes sin parentesco directo, como respuesta a las mismas presiones selectivas. No implica parentesco filogenético."
        },
        {
          tipo: "multiple",
          pregunta: "La clave diagnóstica decisiva para distinguir una euforbia suculenta de un cactus es:",
          opciones: [
            "El número de espinas por areola",
            "El color de las flores",
            "La presencia de látex blanco en la euforbia, ausente en el cactus",
            "La altura de la planta"
          ],
          correcta: 2,
          explicacion: "Al cortar el tallo, la euforbia suelta látex blanco tóxico y el cactus solo agua. Además, las areolas son exclusivas de cactáceas y su origen es americano, frente a euforbias africanas y macaronésicas."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué familia da nombre al metabolismo CAM?",
          opciones: ["Cactaceae", "Crassulaceae", "Euphorbiaceae", "Chenopodiaceae"],
          correcta: 1,
          explicacion: "CAM significa Crassulacean Acid Metabolism, metabolismo ácido de las crasuláceas: es la familia Crassulaceae la que da nombre a esta variante fotosintética."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Cactaceae es nativa de:",
          opciones: [
            "África y Madagascar",
            "América, con la única excepción del género epífito Rhipsalis",
            "El Mediterráneo y Macaronesia",
            "Australia y Nueva Guinea"
          ],
          correcta: 1,
          explicacion: "Las cactáceas son nativas de América; la única especie autóctona en África tropical, Madagascar y Sri Lanka pertenece al género Rhipsalis, un cactus epífito."
        },
        {
          tipo: "multiple",
          pregunta: "El perianto de las flores de Chenopodiaceae es característicamente:",
          opciones: [
            "Petaloideo y muy vistoso",
            "Sepaloideo, sin pétalos diferenciados, con sépalos verdosos",
            "Ausente por completo",
            "Tubular y rojo, adaptado a colibríes"
          ],
          correcta: 1,
          explicacion: "Las quenopodiáceas tienen perianto sepaloideo, sin pétalos diferenciados, a veces sustituido por bractéolas acrescentes. Es una familia anemófila de ambientes ruderales y salinos."
        },
        {
          tipo: "multiple",
          pregunta: "El ciatio, inflorescencia característica de Euphorbia, está formado por:",
          opciones: [
            "Una flor femenina central rodeada de cinco grupos de flores masculinas dentro de un involucro",
            "Cinco flores hermafroditas idénticas en espiral",
            "Una única flor pentámera con numerosos estambres",
            "Dos flores opuestas separadas por una bráctea"
          ],
          correcta: 0,
          explicacion: "El ciatio parece una sola flor, pero es un conjunto: una flor femenina central reducida a un ovario, rodeada de cinco grupos de flores masculinas reducidas a un estambre, todo envuelto por un involucro con glándulas nectaríferas."
        },
        {
          tipo: "multiple",
          pregunta: "Una sabana se define como:",
          opciones: [
            "Un bosque cerrado perennifolio de varios estratos",
            "Una formación tropical dominada por gramíneas con cobertura arbórea dispersa y clima estacional",
            "Un desierto frío continental con gramíneas C3",
            "Una turbera tropical con suelos encharcados"
          ],
          correcta: 1,
          explicacion: "La sabana es una formación tropical dominada por gramíneas con árboles dispersos, propia de zonas cálidas marcadamente estacionales; forma una banda de transición entre el desierto cálido y la pluvisilva."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué porcentaje aproximado de la superficie terrestre ocupan las sabanas y bosques secos tropicales?",
          opciones: ["6-10 %", "15 %", "30 %", "41 %"],
          correcta: 1,
          explicacion: "Las sabanas y bosques secos tropicales ocupan en torno al 15 % de la superficie terrestre, en una franja entre los 10º y 30º de latitud N y S."
        },
        {
          tipo: "multiple",
          pregunta: "La estacionalidad de las lluvias tropicales se debe sobre todo al movimiento de:",
          opciones: [
            "La corriente del Golfo",
            "La Zona de Convergencia Intertropical o ZCIT",
            "El anticiclón de las Azores",
            "La oscilación del Atlántico Norte"
          ],
          correcta: 1,
          explicacion: "La ZCIT es una franja ecuatorial de bajas presiones donde convergen los alisios; al desplazarse hacia el hemisferio que está en verano, arrastra consigo la estación lluviosa y genera la estacionalidad de la sabana."
        },
        {
          tipo: "multiple",
          pregunta: "En el gradiente de vegetación tropical estacional, a medida que aumenta la precipitación:",
          opciones: [
            "Disminuyen la cobertura, la altura y el número de estratos",
            "Aumentan la cobertura, la altura y los estratos, y disminuyen los caducifolios y arbustos espinosos",
            "Aumenta la proporción de plantas espinosas y caducifolias",
            "No cambia la fisionomía de la vegetación"
          ],
          correcta: 1,
          explicacion: "Al aumentar la precipitación crecen la cobertura vegetal, la altura de los árboles y el número de estratos, mientras descienden los caducifolios y los arbustos espinosos."
        },
        {
          tipo: "multiple",
          pregunta: "Las gramíneas que dominan el estrato herbáceo de las sabanas son mayoritariamente de tipo:",
          opciones: ["C3", "C4", "CAM", "Poiquilohídricas"],
          correcta: 1,
          explicacion: "Las gramíneas de sabana son en su mayoría C4, vía más eficiente a altas temperaturas e irradiancia y con menor consumo de agua por CO2 fijado, lo que explica su éxito en climas cálidos."
        },
        {
          tipo: "multiple",
          pregunta: "De los cinco factores que mantienen abiertas las sabanas, ¿cuál se considera probablemente el más importante?",
          opciones: ["El drenaje", "Las heladas", "El fuego", "Los nutrientes"],
          correcta: 2,
          explicacion: "El fuego es probablemente el factor más importante: una frecuencia alta de fuegos favorece a las gramíneas, que rebrotan rápido del rizoma, frente a los árboles, que necesitan más tiempo para regenerarse."
        },
        {
          tipo: "multiple",
          pregunta: "La simbiosis entre las leguminosas y las bacterias del género Rhizobium permite:",
          opciones: [
            "Fijar nitrógeno atmosférico y transformarlo en amonio asimilable",
            "Almacenar agua en los nódulos radiculares",
            "Resistir el fuego mediante rebrote",
            "Realizar fotosíntesis en las raíces"
          ],
          correcta: 0,
          explicacion: "Las raíces de las leguminosas forman nódulos que albergan Rhizobium, capaz de fijar el N2 atmosférico y transformarlo en amonio. Por eso son pioneras en suelos pobres y se usan en revegetación y rotaciones."
        },
        {
          tipo: "multiple",
          pregunta: "La flor papilionácea típica de la subfamilia Faboideae está formada por:",
          opciones: [
            "Una cabezuela de flores actinomorfas con estambres largos",
            "Un estandarte superior, dos alas laterales y una quilla inferior",
            "Cinco tépalos petaloideos en espiral",
            "Un involucro con flores reducidas a un estambre"
          ],
          correcta: 1,
          explicacion: "Las Faboideae o Papilionoideae tienen flores zigomorfas papilionáceas: un pétalo grande superior o estandarte, dos laterales o alas y dos inferiores fusionados que forman la quilla."
        },
        {
          tipo: "multiple",
          pregunta: "Los baobabs del género Adansonia, típicos del bosque seco, pertenecen a la familia:",
          opciones: ["Leguminosae", "Bombacaceae hoy incluida en Malvaceae", "Combretaceae", "Arecaceae"],
          correcta: 1,
          explicacion: "Los baobabs son Bombacaceae, hoy incluidos en Malvaceae sensu lato: troncos muy engrosados que almacenan agua, copas aparasoladas y flores grandes polinizadas por murciélagos."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué porcentaje de la superficie terrestre ocupa la pluvisilva tropical?",
          opciones: ["Entre el 6 y el 10 %", "15 %", "30 %", "41 %"],
          correcta: 0,
          explicacion: "La pluvisilva ocupa solo entre el 6 y el 10 % de la superficie terrestre, pero contiene la mayor parte de la biodiversidad mundial: más del 60 % de las especies vegetales."
        },
        {
          tipo: "multiple",
          pregunta: "Los suelos lateríticos de la pluvisilva se caracterizan por ser:",
          opciones: [
            "Negros, profundos y muy fértiles",
            "Rojos, lavados y pobres en nutrientes asimilables, ricos en óxidos de hierro y aluminio",
            "Salinos y alcalinos",
            "Arenosos y permeables, ricos en materia orgánica"
          ],
          correcta: 1,
          explicacion: "Los suelos lateríticos son rojos y profundos, ricos en óxidos de Fe y Al pero pobres en nutrientes asimilables. Su fertilidad real la sostiene el reciclaje rápido de la hojarasca, no el contenido mineral."
        },
        {
          tipo: "multiple",
          pregunta: "En la estructura vertical de la pluvisilva, los árboles emergentes son aquellos que:",
          opciones: [
            "Forman el sotobosque entre 5 y 10 m",
            "Constituyen el dosel principal entre 20 y 40 m",
            "Superan la altura del dosel general, por encima de los 40 m",
            "Crecen apoyados en otros troncos como lianas"
          ],
          correcta: 2,
          explicacion: "Los emergentes superan los 40 m y se alzan por encima del dosel principal o canopy, situado entre 20 y 40 m. Los dos estratos arbóreos concentran cerca del 60 % de la biomasa."
        },
        {
          tipo: "multiple",
          pregunta: "La caulifloría es:",
          opciones: [
            "La floración sobre el tronco o las ramas gruesas en lugar de las ramillas terminales",
            "La pérdida de la hoja en la estación seca",
            "El crecimiento de raíces aéreas en las epífitas",
            "La fusión de varias flores en un fruto compuesto"
          ],
          correcta: 0,
          explicacion: "La caulifloría es la floración y fructificación sobre el tronco o ramas gruesas, una adaptación a polinizadores y dispersores grandes que necesitan un soporte robusto. El ejemplo clásico es el cacao Theobroma cacao."
        },
        {
          tipo: "multiple",
          pregunta: "Las puntas alargadas y cerosas de las hojas del sotobosque tropical, llamadas drip tips, sirven para:",
          opciones: [
            "Atrapar insectos polinizadores",
            "Almacenar agua en la lámina",
            "Escurrir rápidamente el agua de lluvia y evitar que se acumule en la hoja",
            "Reflejar el exceso de luz solar"
          ],
          correcta: 2,
          explicacion: "Los drip tips facilitan que el agua escurra deprisa y no se acumule en la lámina, lo que mejora el intercambio gaseoso y evita el crecimiento de epífitos microscópicos sobre la hoja."
        },
        {
          tipo: "multiple",
          pregunta: "Orchidaceae es destacable porque:",
          opciones: [
            "Es la familia con menos especies del reino vegetal",
            "Es la familia con más especies del reino vegetal, con el pétalo inferior modificado en labelo",
            "Solo crece en climas templados",
            "Carece por completo de flores"
          ],
          correcta: 1,
          explicacion: "Orchidaceae es la familia con más especies del reino vegetal, unas 25 000-30 000. Sus flores trímeras tienen tres sépalos petaloideos y un pétalo inferior muy modificado, el labelo, que sirve de plataforma al polinizador."
        }
      ]
    },
    // ========================================================================
    // TEST 2
    // ========================================================================
    {
      id: "T6-2",
      titulo: "Tema 6 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "Si se incluyen las zonas áridas, semiáridas y subhúmedas secas o drylands, ¿qué fracción de la superficie terrestre alcanzan?",
          opciones: ["15 %", "30 %", "41 %", "60 %"],
          correcta: 2,
          explicacion: "Los desiertos cálidos ocupan en torno al 30 % de la superficie, pero si se suman todas las drylands la cifra alcanza el 41 % de la superficie terrestre."
        },
        {
          tipo: "multiple",
          pregunta: "Un índice de aridez por debajo de 0,2 corresponde a:",
          opciones: [
            "Una zona subhúmeda seca",
            "Un desierto hiperárido",
            "Una pradera templada",
            "Una pluvisilva"
          ],
          correcta: 1,
          explicacion: "Por debajo de 0,2 ya se considera desierto hiperárido; el umbral de dryland está en 0,65."
        },
        {
          tipo: "multiple",
          pregunta: "La xerojardinería o xeriscape nació en:",
          opciones: [
            "Sevilla en época andalusí",
            "Denver en 1981 como respuesta a las sequías",
            "California en los años 60",
            "Australia en 2000"
          ],
          correcta: 1,
          explicacion: "La xerojardinería nació en Denver en 1981; diseña jardines de muy bajo consumo hídrico replicando comunidades desérticas, con análisis del suelo, hydrozoning, mulch inerte y especies autóctonas xerófilas."
        },
        {
          tipo: "vf",
          pregunta: "En los desiertos cálidos la amplitud térmica diaria puede alcanzar los 40 ºC de diferencia entre el día y la noche.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Verdadero. La ausencia de humedad que actúe como amortiguador térmico hace que la amplitud térmica diaria llegue hasta 40 ºC, pese a una temperatura media en torno a 20 ºC."
        },
        {
          tipo: "multiple",
          pregunta: "Una reg o hamada es:",
          opciones: [
            "Un sistema dunar de arenas móviles",
            "Una llanura pedregosa de erosión eólica, casi sin vegetación",
            "Una laguna salobre con vegetación crasa en la periferia",
            "Un cauce de río ya seco"
          ],
          correcta: 1,
          explicacion: "La reg o hamada es una llanura pedregosa, residuo de la erosión eólica de los finos, prácticamente desnuda de vegetación salvo acacias dispersas en grietas y hondones."
        },
        {
          tipo: "multiple",
          pregunta: "Las protagonistas del famoso desierto florido, que escapan a la sequía como semilla o parte subterránea, son las plantas:",
          opciones: [
            "Resistentes o tolerantes",
            "Sensibles o escapadoras, terófitas y geófitas",
            "Poiquilohídricas o revivescentes",
            "Halófitas extremas"
          ],
          correcta: 1,
          explicacion: "Las xerófitas sensibles o escapadoras evitan la sequía como semilla, las terófitas anuales, o como parte subterránea, las geófitas con bulbos y rizomas; en cuanto llega el agua completan su ciclo y producen el desierto florido."
        },
        {
          tipo: "multiple",
          pregunta: "Las llamadas raíces de lluvia, superficiales y muy extendidas radialmente, son típicas de:",
          opciones: [
            "Las palmeras datileras",
            "Las acacias y mezquites",
            "Las cactáceas como los saguaros",
            "Los baobabs"
          ],
          correcta: 2,
          explicacion: "Las cactáceas como el saguaro tienen raíces a solo 5-10 cm de la superficie pero extendidas varios metros en horizontal, para aprovechar al máximo la lluvia esporádica antes de que se evapore."
        },
        {
          tipo: "vf",
          pregunta: "En una planta con metabolismo CAM, los estomas permanecen abiertos durante el día, cuando el aire es seco y caliente.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Falso. En el CAM los estomas se abren de noche, para fijar CO2 como málico, y se cierran de día, cuando más calor hace, lo que reduce drásticamente la transpiración."
        },
        {
          tipo: "multiple",
          pregunta: "La suculencia troncal o radical, con almacenamiento de agua en troncos descomunales, es propia de:",
          opciones: ["Los baobabs Adansonia", "Los cactus globosos", "Las crasuláceas en roseta", "Las euforbias columnares"],
          correcta: 0,
          explicacion: "Los baobabs Adansonia spp. almacenan el agua en troncos descomunales, ejemplo de suculencia troncal o radical, distinta de la foliar y de la caulinar."
        },
        {
          tipo: "multiple",
          pregunta: "Carpobrotus edulis, la uña de león originaria de Sudáfrica e incluida en el Catálogo Español de Especies Exóticas Invasoras, tapiza:",
          opciones: [
            "Los bosques de ribera",
            "Las dunas costeras, desplazando a la flora autóctona",
            "Los saladares interiores",
            "Las cumbres de montaña"
          ],
          correcta: 1,
          explicacion: "Carpobrotus edulis tapiza dunas costeras desplazando flora autóctona; está incluida en el Catálogo Español de Especies Exóticas Invasoras por el RD 630/2013."
        },
        {
          tipo: "multiple",
          pregunta: "Las areolas, cojinetes de los que brotan espinas y flores, son un rasgo diagnóstico exclusivo de:",
          opciones: ["Euphorbiaceae", "Crassulaceae", "Cactaceae", "Chenopodiaceae"],
          correcta: 2,
          explicacion: "Las areolas son yemas axilares modificadas en cojinetes, exclusivas de las cactáceas. Una euforbia espinosa nunca las tiene, lo que ayuda a distinguirlas."
        },
        {
          tipo: "multiple",
          pregunta: "Las hojas de las Crassulaceae son característicamente:",
          opciones: [
            "Ausentes y transformadas en espinas",
            "Crasas y enteras, a menudo en roseta basal o apical",
            "Compuestas con estípulas espinosas",
            "Reducidas a escamas excretoras de sal"
          ],
          correcta: 1,
          explicacion: "Las crasuláceas tienen hojas crasas y enteras, frecuentemente en roseta basal o en el ápice de los tallos. La roseta minimiza la superficie expuesta al sol y recoge humedad nocturna en su centro."
        },
        {
          tipo: "multiple",
          pregunta: "Los cactus columnares como saguaros y cardones son polinizados sobre todo por murciélagos del género:",
          opciones: ["Rhinolophus", "Leptonycteris", "Pteropus", "Myotis"],
          correcta: 1,
          explicacion: "La quiropterofilia de los cactus columnares y agaves americanos depende sobre todo del género Leptonycteris. El agave del tequila depende casi exclusivamente de estos murciélagos para reproducirse."
        },
        {
          tipo: "multiple",
          pregunta: "Atriplex halimus, la orgaza, presenta un aspecto plateado debido a:",
          opciones: [
            "Una capa de cera reflectante",
            "Glándulas que excretan el exceso de sal acumulada",
            "Pelos urticantes defensivos",
            "Esporas blancas de hongos simbiontes"
          ],
          correcta: 1,
          explicacion: "La orgaza tiene hojas excretoras de sal con glándulas que eliminan el exceso acumulado, lo que les da aspecto plateado. Es una halófita típica de la familia Chenopodiaceae."
        },
        {
          tipo: "multiple",
          pregunta: "La mirmecocoria es la dispersión de semillas por hormigas, atraídas por:",
          opciones: [
            "El néctar de las flores",
            "Un elaiosoma, apéndice carnoso rico en lípidos, proteínas y azúcares",
            "El color rojo de los frutos",
            "El olor a fruta madura de las semillas"
          ],
          correcta: 1,
          explicacion: "Las hormigas se sienten atraídas por el elaiosoma o carúncula, apéndice carnoso y nutritivo; lo llevan al hormiguero, consumen el elaiosoma y desechan la semilla intacta, ya dispersada."
        },
        {
          tipo: "multiple",
          pregunta: "En la sabana, la temperatura media del mes más frío no baja de:",
          opciones: ["0 ºC", "10 ºC", "18 ºC", "25 ºC"],
          correcta: 2,
          explicacion: "El clima de sabana tiene una media anual por encima de 20 ºC y la media del mes más frío no baja de 18 ºC: no existe estación fría, solo estacionalidad en las lluvias."
        },
        {
          tipo: "multiple",
          pregunta: "La estación seca característica de las sabanas y bosques secos tropicales dura:",
          opciones: ["De 1 a 2 meses", "De 3 a 8 meses", "Todo el año", "Menos de un mes"],
          correcta: 1,
          explicacion: "Las sabanas tienen uno o dos períodos de lluvias intensas en verano y una estación seca de 3 a 8 meses, con precipitación media anual entre 500 y 2000 mm."
        },
        {
          tipo: "multiple",
          pregunta: "El hábito caducifolio de los árboles del bosque seco tropical responde a:",
          opciones: [
            "El frío del invierno, como en los bosques templados",
            "La sequía estacional, manteniéndose la temperatura alta",
            "La falta de luz bajo el dosel",
            "El exceso de salinidad del suelo"
          ],
          correcta: 1,
          explicacion: "A diferencia del bosque templado, donde la caída de hoja responde al frío, en el bosque seco tropical los árboles pierden la hoja por la sequía, aunque la temperatura siga alta: misma estrategia, disparador distinto."
        },
        {
          tipo: "multiple",
          pregunta: "En las plantas C4, el ciclo de Calvin ocurre en:",
          opciones: [
            "Las células del mesófilo",
            "Las células de la vaina del haz, con anatomía Kranz",
            "Las células oclusivas de los estomas",
            "La vacuola durante la noche"
          ],
          correcta: 1,
          explicacion: "En la vía C4 el CO2 se fija primero en moléculas de 4 carbonos en el mesófilo y se concentra en las células de la vaina del haz, con anatomía Kranz, donde ocurre el ciclo de Calvin con mayor eficiencia hídrica."
        },
        {
          tipo: "multiple",
          pregunta: "Entre los factores que mantienen abiertas las sabanas, los grandes herbívoros actúan porque:",
          opciones: [
            "Aportan nutrientes al suelo con sus deyecciones",
            "Consumen los brotes jóvenes de los árboles e impiden su reclutamiento",
            "Pisotean las gramíneas y favorecen a los árboles",
            "Dispersan semillas de árboles del dosel"
          ],
          correcta: 1,
          explicacion: "Los grandes herbívoros consumen sistemáticamente los brotes jóvenes de los árboles e impiden su reclutamiento, mientras que las yemas basales y protegidas de las gramíneas resisten mucho mejor el ramoneo."
        },
        {
          tipo: "multiple",
          pregunta: "El fruto característico de la familia Leguminosae es:",
          opciones: ["La cápsula", "La legumbre", "El aquenio", "La baya"],
          correcta: 1,
          explicacion: "El fruto característico de las leguminosas es la legumbre, que puede ser carnosa, articulada, alada o indehiscente. La familia es enorme y cosmopolita, con unos 700 géneros y 18 000 especies."
        },
        {
          tipo: "multiple",
          pregunta: "Las flores pequeñas, actinomorfas y agrupadas en cabezuelas o espigas vistosas por sus estambres largos son propias de la subfamilia:",
          opciones: ["Faboideae", "Caesalpinioideae", "Mimosoideae", "Papilionoideae"],
          correcta: 2,
          explicacion: "Las Mimosoideae tienen flores actinomorfas muy pequeñas en cabezuelas o espigas, vistosas por la abundancia de estambres largos y coloreados: acacias, mimosas, Albizia julibrissin."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Combretaceae, con géneros como Terminalia y Anogeissus, domina especialmente:",
          opciones: [
            "El miombo del este de África",
            "El cerrado brasileño",
            "Las dunas costeras mediterráneas",
            "El dosel de la pluvisilva amazónica"
          ],
          correcta: 0,
          explicacion: "Las Combretaceae son típicas del miombo del este de África: árboles, arbustos y lianas, muchas con frutos alados dispersados por el viento."
        },
        {
          tipo: "multiple",
          pregunta: "La humedad relativa del aire en la pluvisilva tropical es normalmente:",
          opciones: ["Inferior al 40 %", "En torno al 60 %", "Superior al 85 % durante todo el año", "Variable según la estación seca"],
          correcta: 2,
          explicacion: "La pluvisilva tiene una humedad relativa altísima, normalmente superior al 85 % todo el año, con nubosidad superior al 60 %, chaparrones diarios y un intenso reciclaje hídrico."
        },
        {
          tipo: "vf",
          pregunta: "Deforestar la pluvisilva es, en general, un proceso reversible: el suelo conserva los nutrientes y la selva vuelve a regenerarse igual.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Falso. Al eliminar el bosque desaparece el reciclaje de hojarasca, los nutrientes se lavan y el horizonte superior se erosiona dejando un suelo laterítico que ya no puede sostener una selva equivalente: es una degradación casi permanente."
        },
        {
          tipo: "multiple",
          pregunta: "Las raíces de contrafuerte, presentes en hasta el 40 % de los árboles grandes de la pluvisilva, sirven para:",
          opciones: [
            "Almacenar agua para la estación seca",
            "Dar estabilidad mecánica sin profundizar en un suelo pobre",
            "Fijar nitrógeno mediante bacterias simbiontes",
            "Capturar luz en el sotobosque"
          ],
          correcta: 1,
          explicacion: "Las raíces de contrafuerte son aletas planas y radiales en la base del tronco que dan estabilidad mecánica a los árboles altos sin necesidad de raíces profundas, una ventaja en suelos lateríticos pobres y superficiales."
        },
        {
          tipo: "multiple",
          pregunta: "Una epífita es una planta que:",
          opciones: [
            "Vive sobre otra planta como soporte, sin parasitarla",
            "Extrae savia de su hospedador como parásita",
            "Crece sumergida en el agua",
            "Enraíza en el suelo y trepa por los troncos"
          ],
          correcta: 0,
          explicacion: "La epífita vive sobre otra planta usándola solo como soporte físico, sin parasitarla; capta agua y nutrientes del aire, la lluvia y los detritos. Es una forma biológica casi exclusiva de los trópicos."
        },
        {
          tipo: "multiple",
          pregunta: "La dinámica de claros de la pluvisilva se desencadena por:",
          opciones: [
            "Los incendios recurrentes cada 2-5 años",
            "La caída de un árbol grande, que abre un parche luminoso en el dosel",
            "Las heladas ocasionales",
            "El sobrepastoreo de grandes herbívoros"
          ],
          correcta: 1,
          explicacion: "En la pluvisilva el fuego no actúa como perturbación natural; la principal es la caída de árboles, que abre un claro luminoso donde germinan semillas latentes y compiten especies pioneras heliófitas y de bosque maduro esciófitas."
        },
        {
          tipo: "multiple",
          pregunta: "Las bromelias tanque de la familia Bromeliaceae son importantes para la biodiversidad porque:",
          opciones: [
            "Fijan nitrógeno atmosférico en sus raíces",
            "Acumulan agua de lluvia en su roseta, creando un microecosistema para multitud de animales",
            "Producen un fruto compuesto llamado sorosis comestible",
            "Son las únicas epífitas del planeta"
          ],
          correcta: 1,
          explicacion: "Las bromelias tanque acumulan agua de lluvia en la cisterna central de su roseta, un depósito que alberga algas, larvas, ranas, arañas y hasta pequeñas serpientes: una sola planta puede acoger decenas de especies."
        },
        {
          tipo: "multiple",
          pregunta: "El síndrome floral quiropterófilo, propio de las flores polinizadas por murciélagos, incluye:",
          opciones: [
            "Flores diurnas, rojas e inodoras",
            "Flores nocturnas, pálidas, olorosas, con abundante néctar diluido y expuestas en la copa",
            "Flores diminutas sin néctar agrupadas en espigas",
            "Flores tubulares azules adaptadas a abejas"
          ],
          correcta: 1,
          explicacion: "Las flores quiropterófilas se abren de noche, son de color pálido visible al claro de luna, desprenden olor fuerte, ofrecen abundante néctar diluido y se disponen expuestas en la copa para permitir el vuelo de aproximación del murciélago."
        }
      ]
    },
    // ========================================================================
    // TEST 3
    // ========================================================================
    {
      id: "T6-3",
      titulo: "Tema 6 · Test 3",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "La precipitación anual de un desierto cálido se sitúa entre:",
          opciones: ["0 y 250 mm", "250 y 500 mm", "500 y 2000 mm", "2000 y 10000 mm"],
          correcta: 0,
          explicacion: "El clima desértico tiene una precipitación anual muy baja, entre 0 y 250 mm, con régimen de lluvias muy irregular tanto entre regiones como entre años."
        },
        {
          tipo: "multiple",
          pregunta: "Un oasis se define en la geomorfología desértica como:",
          opciones: [
            "Una depresión endorreica que se vuelve un lago salino al evaporarse",
            "Un afloramiento de agua subterránea en zonas de calizas y arcillas, con vegetación abundante",
            "Una llanura pedregosa de erosión eólica",
            "Un sistema dunar de arenas móviles"
          ],
          correcta: 1,
          explicacion: "El oasis es un afloramiento de agua subterránea en zonas de calizas y arcillas; concentra vegetación abundante, formando auténticos islotes biológicos en medio del desierto."
        },
        {
          tipo: "multiple",
          pregunta: "Un wadi es:",
          opciones: [
            "Una laguna salobre con halófitas en la periferia",
            "Un antiguo cauce de río ya seco, que conserva algo de humedad subterránea",
            "Una pequeña depresión con acumulación de arena",
            "Un sistema de dunas estabilizadas"
          ],
          correcta: 1,
          explicacion: "El wadi es un antiguo cauce de río ya seco; conserva algo de humedad subterránea y vegetación adaptada a la sal. La nemotecnia recuerda que el wadi conserva agua y el chot conserva sal."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál es la diferencia esencial entre desierto y desertización?",
          opciones: [
            "Son sinónimos exactos",
            "El desierto es un bioma natural antiguo y la desertización un proceso de degradación del suelo",
            "El desierto es un proceso reversible y la desertización un bioma permanente",
            "El desierto solo existe en África y la desertización solo en Europa"
          ],
          correcta: 1,
          explicacion: "No hay que confundir el desierto, bioma natural antiguo, con la desertización, proceso de degradación y pérdida de productividad del suelo por causas climáticas y antrópicas en zonas áridas, semiáridas y subhúmedas secas."
        },
        {
          tipo: "multiple",
          pregunta: "Selaginella lepidophylla, la rosa de Jericó, capaz de desecarse sin morir y revivir al rehidratarse, es un ejemplo de planta:",
          opciones: ["Sensible escapadora", "Resistente tolerante", "Poiquilohídrica o revivescente", "Halófita extrema"],
          correcta: 2,
          explicacion: "Las poiquilohídricas o revivescentes se desecan sin morir y recuperan funcionalidad al rehidratarse. Son sobre todo líquenes, musgos y algas, pero también algunos helechos y unas pocas angiospermas como la rosa de Jericó."
        },
        {
          tipo: "multiple",
          pregunta: "Las raíces pivotantes profundas, de hasta 8-10 m, que buscan el agua freática permanente, son la estrategia de:",
          opciones: [
            "Las cactáceas globosas",
            "Las palmeras datileras, acacias y mezquites",
            "Las crasuláceas en roseta",
            "Los líquenes y musgos del suelo"
          ],
          correcta: 1,
          explicacion: "Las raíces pivotantes profundas de 8-10 m buscan el agua freática permanente: es la estrategia de palmeras datileras, acacias y mezquites, frente a las raíces de lluvia superficiales de los cactus."
        },
        {
          tipo: "multiple",
          pregunta: "El hábito caducifolio estival, perder toda la hoja durante la estación seca, es común en:",
          opciones: [
            "Muchas tabaibas canarias",
            "Los saguaros del desierto de Sonora",
            "Las quinoas andinas",
            "Las orquídeas epífitas"
          ],
          correcta: 0,
          explicacion: "El hábito caducifolio estival, contraintuitivo pero efectivo, elimina la superficie transpirante en la estación seca y es común en muchas tabaibas canarias, como Euphorbia balsamifera."
        },
        {
          tipo: "multiple",
          pregunta: "El metabolismo CAM está presente aproximadamente en:",
          opciones: [
            "Una sola familia, las Crassulaceae",
            "Unas 34 familias y más de 300 géneros, el 5-10 % de las plantas vasculares",
            "Todas las plantas tropicales",
            "Solo en las gramíneas C4"
          ],
          correcta: 1,
          explicacion: "El CAM está presente en unas 34 familias y más de 300 géneros, el 5-10 % de las plantas vasculares: Crassulaceae, Cactaceae, Agavoideae, Bromeliaceae, Aizoaceae, Euphorbiaceae, entre otras."
        },
        {
          tipo: "multiple",
          pregunta: "La suculencia caulinar, con almacenamiento de agua en los tallos, se da en:",
          opciones: [
            "Agave, Aloe y Lithops",
            "Las cactáceas y las euforbias arborescentes",
            "Los baobabs",
            "Las quenopodiáceas halófitas"
          ],
          correcta: 1,
          explicacion: "La suculencia caulinar almacena agua en los tallos: es la de las cactáceas y las euforbias arborescentes, frente a la foliar de Agave o Lithops y la troncal de los baobabs."
        },
        {
          tipo: "multiple",
          pregunta: "El Joshua tree Yucca brevifolia y el Quiver tree Aloe dichotoma, de desiertos distintos pero con tronco grueso y rosetas suculentas casi idénticas, son un ejemplo de:",
          opciones: ["Parentesco filogenético cercano", "Convergencia adaptativa", "Hibridación interespecífica", "Mirmecocoria"],
          correcta: 1,
          explicacion: "El Joshua tree del Mojave y el Quiver tree de Namibia-Sudáfrica pertenecen a familias distintas pero desarrollaron de forma independiente tronco grueso, ramificación dicotómica y rosetas suculentas: convergencia adaptativa."
        },
        {
          tipo: "multiple",
          pregunta: "Las palas de la chumbera, tallos aplanados y fotosintéticos que sustituyen funcionalmente a las hojas, se llaman:",
          opciones: ["Areolas", "Cladodios", "Estipes", "Elaiosomas"],
          correcta: 1,
          explicacion: "Los tallos suculentos aplanados de las cactáceas se llaman cladodios; las palas del nopal Opuntia ficus-indica son cladodios que asumen la función fotosintética de las hojas ausentes."
        },
        {
          tipo: "multiple",
          pregunta: "Las crasuláceas son las suculentas más usadas en cubiertas verdes extensivas o green roofs porque:",
          opciones: [
            "Necesitan riego abundante",
            "Toleran sustrato superficial de 7-10 cm, mínimo riego y resisten las heladas",
            "Crecen muy altas y dan sombra",
            "Producen frutos comestibles"
          ],
          correcta: 1,
          explicacion: "Especies como Sedum acre, Sedum sediforme o Sempervivum tectorum funcionan en green roofs por su mínimo riego, sustrato superficial de 7-10 cm y resistencia a las heladas. Los Aeonium canarios no aguantan heladas fuertes."
        },
        {
          tipo: "multiple",
          pregunta: "El higo chumbo, fruto carnoso de Opuntia ficus-indica, es botánicamente:",
          opciones: ["Una cápsula", "Una baya", "Un aquenio", "Una legumbre"],
          correcta: 1,
          explicacion: "Los frutos de las cactáceas son carnosos, en forma de baya; el higo chumbo es la baya comestible de Opuntia ficus-indica."
        },
        {
          tipo: "multiple",
          pregunta: "El nombre sosa, aplicado a varias quenopodiáceas, procede de que sus cenizas eran fuente tradicional de:",
          opciones: [
            "Sal común para conservar alimentos",
            "Carbonato sódico para fabricar vidrio y jabón, hasta que lo sustituyó el proceso Solvay",
            "Colorante textil",
            "Fertilizante nitrogenado"
          ],
          correcta: 1,
          explicacion: "Las cenizas de sosas como Salsola, Suaeda o Sarcocornia eran la fuente tradicional de carbonato sódico para vidrio y jabón. La industria de la barrilla fue importante en el sureste ibérico hasta que el proceso Solvay la sustituyó."
        },
        {
          tipo: "multiple",
          pregunta: "El látex de las Euphorbiaceae, presente en casi todas sus especies, es frecuentemente:",
          opciones: [
            "Inocuo y dulce",
            "Tóxico; del ricino se obtienen semillas muy tóxicas y de Hevea el caucho industrial",
            "Exclusivo del fruto",
            "Producido solo en las raíces"
          ],
          correcta: 1,
          explicacion: "El látex de las euforbiáceas, blanco, amarillo o rojizo, suele ser tóxico. El ricino Ricinus communis tiene semillas muy tóxicas y del árbol del caucho Hevea brasiliensis se extrae el látex industrial."
        },
        {
          tipo: "multiple",
          pregunta: "El cerrado brasileño, el llano venezolano y el miombo del este de África son nombres locales de:",
          opciones: [
            "Distintos tipos de pluvisilva",
            "Formaciones ecológicamente equivalentes de sabana y bosque seco tropical",
            "Desiertos cálidos americanos y africanos",
            "Bosques templados caducifolios"
          ],
          correcta: 1,
          explicacion: "Cada continente tiene su nombre local para la sabana y el bosque seco: el llano venezolano, el cerrado brasileño, el miombo del este de África, la sabana africana o los bosques del monzón asiático, todos ecológicamente equivalentes."
        },
        {
          tipo: "multiple",
          pregunta: "Ordenado de mayor a menor precipitación, el gradiente de vegetación tropical estacional es:",
          opciones: [
            "Desierto espinoso, sabana espinosa, seco caducifolio, estacional, lluvioso",
            "Lluvioso, estacional, seco caducifolio, sabana espinosa, desierto espinoso",
            "Sabana espinosa, lluvioso, estacional, desierto espinoso, seco caducifolio",
            "Estacional, lluvioso, desierto espinoso, sabana espinosa, seco caducifolio"
          ],
          correcta: 1,
          explicacion: "De más a menos lluvia: bosque lluvioso, estacional, seco caducifolio, sabana espinosa y desierto espinoso. Cada paso que reduce el agua reduce también la altura, la cobertura, los estratos y la proporción de perennifolios."
        },
        {
          tipo: "vf",
          pregunta: "En la pluvisilva el fuego es la principal perturbación natural, igual que en las sabanas y los bosques mediterráneos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Falso. En la pluvisilva el fuego no actúa como perturbación natural porque la humedad es demasiado alta y la hojarasca no acumula combustible seco; la principal perturbación es la caída de árboles."
        },
        {
          tipo: "multiple",
          pregunta: "La vía fotosintética estándar, propia de la mayoría de árboles y de las herbáceas templadas, es:",
          opciones: ["C3", "C4", "CAM", "Anatomía Kranz"],
          correcta: 0,
          explicacion: "La fotosíntesis C3 es la vía estándar de la mayoría de árboles y herbáceas templadas. La C4 concentra el CO2 en la vaina del haz y la CAM separa en el tiempo la captura de CO2 y el ciclo de Calvin."
        },
        {
          tipo: "multiple",
          pregunta: "De los cinco factores que mantienen abiertas las sabanas, el que se considera menos importante salvo en sabanas de altitud es:",
          opciones: ["El fuego", "La herbivoría", "El drenaje", "Las heladas"],
          correcta: 3,
          explicacion: "Las heladas, aunque muy ocasionales, pueden eliminar árboles semitropicales sin resistencia; cierran la lista de factores y son el menos importante, salvo en sabanas de altitud."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia MICAPA recoge las tres subfamilias de Leguminosae, que son:",
          opciones: [
            "Mimosoideae, Caesalpinioideae y Papilionoideae",
            "Malvoideae, Cactoideae y Papaveroideae",
            "Mimosoideae, Combretoideae y Poaceae",
            "Magnolioideae, Caesalpinioideae y Apioideae"
          ],
          correcta: 0,
          explicacion: "MICAPA: MImosoideae, CAesalpinioideae y PApilionoideae. Mimosa con cabezuela actinomorfa, Caesalpinioideae zigomorfa abierta y Papilionoideae con la flor papilionácea cerrada de estandarte, alas y quilla."
        },
        {
          tipo: "multiple",
          pregunta: "Las flores zigomorfas pero con pétalos más libres y abiertos que las papilionáceas, a menudo polinizadas por aves o mariposas, son típicas de:",
          opciones: ["Mimosoideae", "Caesalpinioideae", "Faboideae", "Combretaceae"],
          correcta: 1,
          explicacion: "Las Caesalpinioideae tienen flores zigomorfas con pétalos más libres y abiertos que las papilionáceas, a menudo muy llamativas: Caesalpinia, Bauhinia, flamboyán."
        },
        {
          tipo: "multiple",
          pregunta: "El tronco o estipe de las palmeras Arecaceae es peculiar porque:",
          opciones: [
            "Engrosa cada año formando anillos como las eudicotiledóneas",
            "Carece de crecimiento secundario y solo tiene una yema apical; si se daña, la planta muere",
            "Almacena agua para la estación seca",
            "Está formado por madera muy dura sin fibras"
          ],
          correcta: 1,
          explicacion: "El estipe de las palmeras no tiene crecimiento secundario auténtico ni anillos; está formado por fibras y haces dispersos, y tiene una única yema de crecimiento en la corona: si se daña, la palmera muere y no rebrota."
        },
        {
          tipo: "multiple",
          pregunta: "La pluvisilva tropical alberga, según los apuntes:",
          opciones: [
            "Menos del 20 % de las especies vegetales del planeta",
            "Más del 60 % de las especies vegetales en menos del 10 % de la superficie terrestre",
            "Exactamente la mitad de las especies vegetales",
            "La misma diversidad que un bosque templado"
          ],
          correcta: 1,
          explicacion: "La pluvisilva alberga más del 60 % de las especies vegetales del planeta en menos del 10 % de la superficie, con baja dominancia: pocos ejemplares por especie y hasta 400 especies de árboles por hectárea en el sudeste asiático."
        },
        {
          tipo: "multiple",
          pregunta: "El intenso reciclaje hídrico de la pluvisilva amazónica significa que:",
          opciones: [
            "Toda el agua procede del deshielo andino",
            "Buena parte de la precipitación procede de la propia evapotranspiración del bosque",
            "El bosque no devuelve agua a la atmósfera",
            "La lluvia llega exclusivamente del océano"
          ],
          correcta: 1,
          explicacion: "La evapotranspiración devuelve gran parte del agua a la atmósfera, donde forma de nuevo nubes y lluvia. El bucle es tan eficiente que buena parte de la precipitación amazónica procede del agua que el propio bosque recicla."
        },
        {
          tipo: "vf",
          pregunta: "En la pluvisilva el estrato herbáceo basal es muy escaso por la falta de luz, al contrario que en el bosque templado, donde el herbáceo es el estrato más rico.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Verdadero. Bajo el dosel solo llega el 1-3 % de la luz, por lo que el herbáceo basal es muy pobre. En el bosque templado, en cambio, el 83 % de las especies vive en el suelo y el 80 % son herbáceas."
        },
        {
          tipo: "multiple",
          pregunta: "Bajo el dosel de la pluvisilva, las hojas del sotobosque tienden a ser:",
          opciones: [
            "Muy pequeñas y coriáceas, como las del dosel a pleno sol",
            "Grandes e hiperdesarrolladas, para maximizar la captación de la escasa luz",
            "Transformadas en espinas",
            "Reducidas a escamas"
          ],
          correcta: 1,
          explicacion: "Bajo el dosel las plantas adoptan hojas grandes e hiperdesarrolladas para aprovechar al máximo la poca luz; algunas de las hojas más grandes del planeta están en pluvisilvas tropicales."
        },
        {
          tipo: "multiple",
          pregunta: "La polinización en el sotobosque de la pluvisilva es mayoritariamente zoófila porque:",
          opciones: [
            "El viento circula con fuerza bajo el dosel",
            "El aire circula muy poco bajo el dosel, de modo que insectos, colibríes y murciélagos hacen el trabajo del viento",
            "No existen flores en el sotobosque",
            "Las plantas son todas autógamas"
          ],
          correcta: 1,
          explicacion: "Como el aire circula muy poco bajo el dosel, la polinización es mayoritariamente zoófila: insectos, aves nectarívoras como los colibríes y murciélagos sustituyen al viento ausente."
        },
        {
          tipo: "multiple",
          pregunta: "La vainilla, especia muy apreciada, es:",
          opciones: [
            "El fruto fermentado de una orquídea trepadora, Vanilla planifolia",
            "La semilla de una bromeliácea",
            "El látex seco de una euforbia",
            "El fruto de una palmera"
          ],
          correcta: 0,
          explicacion: "La vainilla es el fruto fermentado de Vanilla planifolia, una orquídea trepadora; los frutos de Orchidaceae son cápsulas, bayas o raramente sorosis."
        },
        {
          tipo: "multiple",
          pregunta: "La principal amenaza de las palmeras en jardinería mediterránea es:",
          opciones: [
            "El picudo rojo Rhynchophorus ferrugineus, que destruye la yema apical",
            "El exceso de heladas suaves",
            "La salinidad del suelo",
            "La competencia con las gramíneas C4"
          ],
          correcta: 0,
          explicacion: "El picudo rojo Rhynchophorus ferrugineus destruye la yema apical única de la palmera y la mata irreversiblemente. Como el estipe no rebrota, perder la yema terminal significa la muerte de la planta."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T6; }
if (typeof window !== 'undefined') { window.sandra_botanica_T6 = sandra_botanica_T6; }
