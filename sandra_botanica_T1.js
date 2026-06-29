const sandra_botanica_T1 = {
  tema: 1,
  titulo: "Introducción al reino vegetal",
  penalizacionPorFallo: 0.3,
  tests: [
    // ======================= TEST 1 =======================
    {
      id: "T1-1",
      nombre: "Tema 1 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "Según la definición rigurosa, una planta del reino Plantae almacena el carbono fijado principalmente en forma de:",
          opciones: ["Glucógeno", "Almidón", "Lípidos", "Sacarosa"],
          correcta: 1,
          explicacion: "Las plantas reservan el carbono fijado como almidón; el glucógeno es la reserva animal y fúngica."
        },
        {
          tipo: "vf",
          pregunta: "Las cianobacterias se consideran plantas porque realizan la fotosíntesis y liberaron el oxígeno de la atmósfera primitiva.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Son procariotas (bacterias), no plantas, pese a hacer fotosíntesis."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué pigmento fotosintético está presente en TODOS los organismos fotosintéticos y es el principal de la fotosíntesis?",
          opciones: ["Clorofila b", "Clorofila c", "Clorofila a", "Ficobilinas"],
          correcta: 2,
          explicacion: "La clorofila a es el pigmento principal y universal de la fotosíntesis."
        },
        {
          tipo: "multiple",
          pregunta: "La fase luminosa de la fotosíntesis ocurre en:",
          opciones: ["El estroma del cloroplasto", "La membrana de los tilacoides", "La matriz mitocondrial", "El citoplasma"],
          correcta: 1,
          explicacion: "La fase luminosa transcurre en la membrana del tilacoide; el ciclo de Calvin, en el estroma."
        },
        {
          tipo: "vf",
          pregunta: "En la fase luminosa se libera O₂ procedente de la rotura de la molécula de agua.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "La fotólisis del agua libera el O₂ y aporta electrones a la cadena de transporte."
        },
        {
          tipo: "multiple",
          pregunta: "El fragmoplasto, implicado en la división de la célula vegetal, está formado por:",
          opciones: ["Filamentos de actina", "Microtúbulos", "Celulosa", "Vesículas de lignina"],
          correcta: 1,
          explicacion: "Es una estructura de microtúbulos cortos perpendiculares al plano ecuatorial; sobre él se forma la placa celular."
        },
        {
          tipo: "multiple",
          pregunta: "Las células oclusivas o células guarda regulan:",
          opciones: ["El transporte de azúcares por el floema", "La apertura y cierre de los estomas", "La división celular", "La rigidez del tallo"],
          correcta: 1,
          explicacion: "Turgentes abren el poro estomático; fláccidas lo cierran."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué tejido de sostén está formado por células muertas con la pared impregnada de lignina?",
          opciones: ["Colénquima", "Parénquima", "Esclerénquima", "Epidermis"],
          correcta: 2,
          explicacion: "El esclerénquima (fibras y esclereidas) da sostén rígido gracias a la lignina."
        },
        {
          tipo: "vf",
          pregunta: "El xilema transporta los azúcares producidos en la fotosíntesis desde las hojas hacia el resto de la planta.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Eso lo hace el floema; el xilema lleva agua y sales minerales de la raíz a las hojas."
        },
        {
          tipo: "multiple",
          pregunta: "Las traqueidas son el único tipo de elemento conductor del xilema en:",
          opciones: ["Las angiospermas", "Las gimnospermas", "Los briófitos", "Las algas"],
          correcta: 1,
          explicacion: "En gimnospermas las traqueidas son el único conductor; las angiospermas tienen además tráqueas (vasos)."
        },
        {
          tipo: "multiple",
          pregunta: "Los tres macronutrientes que la planta obtiene del aire o del agua y que forman casi todo su peso seco son:",
          opciones: ["N, P, K", "C, O, H", "Ca, Mg, S", "Fe, Mn, Zn"],
          correcta: 1,
          explicacion: "C (45 %), O (45 %) e H (6 %) constituyen el esqueleto orgánico de la planta."
        },
        {
          tipo: "vf",
          pregunta: "El nitrógeno es un nutriente móvil, por lo que su deficiencia se manifiesta primero en las hojas viejas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Los nutrientes móviles (N, P, K, Mg) se reciclan hacia las hojas jóvenes, dejando síntomas antes en las viejas."
        },
        {
          tipo: "multiple",
          pregunta: "En la fitorremediación de Chernóbil, los girasoles flotantes extrajeron hasta el 90 % de los contaminantes (cesio y estroncio) en aproximadamente:",
          opciones: ["10 días", "3 meses", "1 año", "5 años"],
          correcta: 0,
          explicacion: "Las raíces retiraron hasta el 90 % de los radionucleidos en solo 10 días."
        },
        {
          tipo: "multiple",
          pregunta: "El nivel de organización propio de las plantas vasculares, con raíz, tallo y hoja diferenciados, se denomina:",
          opciones: ["Talo", "Unicelular", "Cormo", "Colonia"],
          correcta: 2,
          explicacion: "El cormo (helechos, gimnospermas y angiospermas) organiza el cuerpo en tres órganos con tejidos especializados."
        },
        {
          tipo: "multiple",
          pregunta: "El crecimiento secundario (en grosor) lo realiza:",
          opciones: ["El meristemo apical", "El cámbium vascular", "La epidermis", "El parénquima lagunar"],
          correcta: 1,
          explicacion: "El cámbium vascular produce xilema hacia el interior (madera) y floema hacia el exterior."
        },
        {
          tipo: "vf",
          pregunta: "El crecimiento secundario se da en tallo, raíz y también en las hojas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Solo en tallo y raíz; las hojas no engrosan."
        },
        {
          tipo: "multiple",
          pregunta: "Una planta bianual típica:",
          opciones: ["Completa su ciclo en una sola estación", "Desarrolla la parte vegetativa el primer año y florece y muere el segundo", "Vive varios años con floraciones repetidas", "Solo persiste en forma de semilla"],
          correcta: 1,
          explicacion: "Primer año: hojas y raíz de reserva. Segundo año: floración, fructificación y muerte (zanahoria, remolacha…)."
        },
        {
          tipo: "multiple",
          pregunta: "Según el sistema de Raunkiær, los geófitos (criptófitos) sitúan sus yemas de recambio:",
          opciones: ["A más de 50 cm del suelo", "A ras del suelo", "En órganos de reserva subterráneos", "Sobre otras plantas"],
          correcta: 2,
          explicacion: "Sus yemas se ocultan en rizomas, bulbos o tubérculos, a salvo del frío y el fuego."
        },
        {
          tipo: "vf",
          pregunta: "Los terófitos sobreviven a la estación desfavorable únicamente en forma de semilla.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El individuo adulto muere íntegramente; persiste solo el banco de semillas."
        },
        {
          tipo: "multiple",
          pregunta: "En el ciclo haplodiplonte, la generación diploide productora de esporas por meiosis es:",
          opciones: ["El gametófito", "El esporófito", "El protalo", "El cigoto"],
          correcta: 1,
          explicacion: "El esporófito (2n) produce esporas por meiosis; el gametófito (n) produce gametos por mitosis."
        },
        {
          tipo: "multiple",
          pregunta: "En los briófitos (musgos), la generación dominante (lo que vemos como 'musgo') es:",
          opciones: ["El esporófito", "El gametófito", "El óvulo", "El protalo diploide"],
          correcta: 1,
          explicacion: "En briófitos domina el gametófito haploide; los esporófitos son las cápsulas sobre pedicelos."
        },
        {
          tipo: "vf",
          pregunta: "Todos los espermatófitos son heterospóricos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Frase clave: producen micrósporas (→ polen) y megásporas (→ saco embrionario)."
        },
        {
          tipo: "multiple",
          pregunta: "La formación de semillas viables sin que medie fecundación se denomina:",
          opciones: ["Fragmentación", "Apomixis (partenogénesis)", "Heterosporia", "Polinización"],
          correcta: 1,
          explicacion: "El embrión deriva de tejido materno diploide, sin meiosis ni fusión de gametos (diente de león)."
        },
        {
          tipo: "multiple",
          pregunta: "El muérdago (Viscum album) es un ejemplo de:",
          opciones: ["Epífita", "Hemiparásita", "Holoparásita", "Halófito"],
          correcta: 1,
          explicacion: "Extrae agua y minerales del huésped por haustorios, pero conserva la clorofila y hace fotosíntesis."
        },
        {
          tipo: "multiple",
          pregunta: "La estrategia halófita de 'evitación' consiste en:",
          opciones: ["Acumular sal en vacuolas", "Expulsar el sodio por glándulas en las hojas", "Impedir la entrada de Na⁺ por la raíz mediante la bomba sodio-potasio", "Volverse suculenta y roja"],
          correcta: 2,
          explicacion: "La bomba sodio-potasio expulsa el Na⁺ en la raíz; la planta apenas acumula sal."
        },
        {
          tipo: "vf",
          pregunta: "Más del 80 % de las plantas terrestres establecen asociaciones micorrícicas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Las micorrizas amplían enormemente la superficie de absorción de agua y minerales."
        },
        {
          tipo: "multiple",
          pregunta: "Cistus ladanifer (acidófila) y C. albidus (basófila) rara vez hibridan porque viven en sustratos distintos. Es un mecanismo de aislamiento precigótico de tipo:",
          opciones: ["Temporal", "Ecológico", "Mecánico", "Gamético"],
          correcta: 1,
          explicacion: "Aislamiento ecológico: distintos hábitats en simpatría regional."
        },
        {
          tipo: "multiple",
          pregunta: "El helecho Salvinia molesta es pentaploide (5n) y se propaga por fragmentación. Esto ilustra la ventaja de la reproducción asexual de:",
          opciones: ["Evitar los costes de buscar pareja", "Mantener intactos genotipos bien adaptados", "Generar variabilidad genética", "Aumentar el flujo génico"],
          correcta: 1,
          explicacion: "Con número impar de juegos cromosómicos la meiosis falla; solo la vía asexual preserva su genotipo 'ganador'."
        },
        {
          tipo: "multiple",
          pregunta: "Las plantas en cojín de alta montaña mantienen su interior, respecto al aire exterior, unos:",
          opciones: ["5-10 °C más cálido", "20 °C más frío", "A la misma temperatura", "Solo más húmedo, no más cálido"],
          correcta: 0,
          explicacion: "El porte denso crea un microclima 5-10 °C más cálido y reduce el viento; sirve de 'planta-niñera'."
        },
        {
          tipo: "vf",
          pregunta: "En la planta carnívora Dionaea muscipula (venus atrapamoscas), la trampa se cierra en torno a 100 milisegundos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El cierre rápido (~100 ms) se dispara al tocar los pelos sensoriales de la hoja-trampa."
        }
      ]
    },
    // ======================= TEST 2 =======================
    {
      id: "T1-2",
      nombre: "Tema 1 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estos organismos es autótrofo pero móvil, rompiendo la definición clásica de planta?",
          opciones: ["Hongo", "Euglena", "Coral", "Cianobacteria"],
          correcta: 1,
          explicacion: "La euglena es un alga unicelular fotosintética que nada con un flagelo: autótrofa pero móvil."
        },
        {
          tipo: "multiple",
          pregunta: "La pared celular de los hongos está compuesta principalmente de:",
          opciones: ["Celulosa", "Lignina", "Quitina", "Sílice"],
          correcta: 2,
          explicacion: "La quitina diferencia su pared de la de las plantas (celulosa)."
        },
        {
          tipo: "vf",
          pregunta: "El término 'vegetal' es más antiguo y menos preciso que 'planta', y procede de la tradición botánica linneana.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "'Vegetal' designa estrictamente inmovilidad y ausencia de fagocitosis; hoy se prefiere 'planta'."
        },
        {
          tipo: "multiple",
          pregunta: "En la ecuación global de la fotosíntesis de los apuntes (3 CO₂ + 6 H₂O → C₃H₆O₃ + 3 O₂ + 3 H₂O), el subproducto liberado es:",
          opciones: ["CO₂", "O₂", "Almidón", "NADPH"],
          correcta: 1,
          explicacion: "El O₂ es el subproducto; el azúcar es el producto que la planta aprovecha."
        },
        {
          tipo: "multiple",
          pregunta: "Las xantofilas son carotenoides responsables de:",
          opciones: ["La fotosíntesis principal", "La coloración otoñal al degradarse la clorofila", "La captación de luz submarina", "El transporte de agua"],
          correcta: 1,
          explicacion: "Amarillas, antioxidantes; se hacen visibles en otoño cuando se degrada la clorofila."
        },
        {
          tipo: "multiple",
          pregunta: "Los apilamientos de tilacoides dentro del cloroplasto se llaman:",
          opciones: ["Estroma", "Grana", "Criptas", "Sorus"],
          correcta: 1,
          explicacion: "Grana (sing. granum); el espacio interno fuera de los tilacoides es el estroma."
        },
        {
          tipo: "vf",
          pregunta: "La fase oscura de la fotosíntesis necesita oscuridad para producirse.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "No necesita oscuridad: no requiere luz directa, pero ocurre durante el día usando el ATP y NADPH recién fabricados."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué tipo de parénquima es típico de plantas acuáticas y permite llevar oxígeno a las raíces sumergidas?",
          opciones: ["Clorénquima", "Parénquima de reserva", "Aerénquima", "Parénquima en empalizada"],
          correcta: 2,
          explicacion: "El aerénquima (Typha, juncos, nenúfares, arroz) tiene grandes espacios con aire."
        },
        {
          tipo: "multiple",
          pregunta: "El colénquima se caracteriza por:",
          opciones: ["Células muertas con lignina", "Células vivas con pared engrosada de forma desigual (celulosa), de sostén flexible", "Células conductoras de agua", "Células de la epidermis con cutícula"],
          correcta: 1,
          explicacion: "Da sostén flexible a tallos jóvenes y peciolos; permite doblarse sin romperse."
        },
        {
          tipo: "multiple",
          pregunta: "Las esclereidas son responsables de:",
          opciones: ["El transporte de savia bruta", "La textura granulosa de las peras y la cáscara de las nueces", "La apertura de los estomas", "La fotosíntesis del mesófilo"],
          correcta: 1,
          explicacion: "Son esclerénquima corto; forman también el hueso del melocotón o la ciruela."
        },
        {
          tipo: "vf",
          pregunta: "El parénquima en empalizada se sitúa bajo la epidermis superior, donde la luz es más intensa.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Sus células alargadas en vertical maximizan la captación de luz; debajo está el lagunar."
        },
        {
          tipo: "multiple",
          pregunta: "De los siguientes elementos, ¿cuál es un micronutriente?",
          opciones: ["Nitrógeno (N)", "Potasio (K)", "Molibdeno (Mo)", "Calcio (Ca)"],
          correcta: 2,
          explicacion: "Micronutrientes: Cl, Fe, B, Mn, Zn, Cu, Ni, Mo. Los demás son macronutrientes del suelo."
        },
        {
          tipo: "multiple",
          pregunta: "El silicio (Si), elemento no esencial, es especialmente abundante en:",
          opciones: ["Los cactus", "Los equisetos (cola de caballo)", "Las orquídeas", "Los nenúfares"],
          correcta: 1,
          explicacion: "Sus paredes impregnadas de sílice los hacen ásperos: se usaban para fregar cazos."
        },
        {
          tipo: "multiple",
          pregunta: "La acumulación de antocianinas (tono rojo o púrpura) junto con crecimiento atrofiado es síntoma característico de la deficiencia de:",
          opciones: ["Fósforo (P)", "Cloro (Cl)", "Magnesio (Mg)", "Azufre (S)"],
          correcta: 0,
          explicacion: "La carencia de fósforo da plantas verde oscuro con tonos púrpura y crecimiento atrofiado."
        },
        {
          tipo: "vf",
          pregunta: "Los nutrientes inmóviles, como el calcio, el boro o el hierro, provocan síntomas primero en las hojas jóvenes.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Al no redistribuirse, las hojas jóvenes (las que crecen) sufren antes la carencia."
        },
        {
          tipo: "multiple",
          pregunta: "En el nivel de organización 'talo', las dos formas básicas son:",
          opciones: ["Cocoide y flagelada", "Filamentosa y parenquimática", "Primaria y secundaria", "Determinada e indeterminada"],
          correcta: 1,
          explicacion: "Filamentosa (algas verdes) y parenquimática (algas pardas); típica de algas y briófitos."
        },
        {
          tipo: "multiple",
          pregunta: "El crecimiento determinado es característico de:",
          opciones: ["Raíces y tallos", "Flores, frutos y hojas", "Los meristemos apicales", "El cámbium vascular"],
          correcta: 1,
          explicacion: "Estos órganos alcanzan un tamaño definitivo; raíces, tallos y ramas tienen crecimiento indeterminado."
        },
        {
          tipo: "multiple",
          pregunta: "Una trepadora o liana se diferencia de una epífita en que la trepadora:",
          opciones: ["Vive sobre otra planta sin tocar el suelo", "Mantiene sus raíces en el suelo y se apoya en otra estructura para alcanzar la luz", "Parasita a la planta soporte", "No realiza fotosíntesis"],
          correcta: 1,
          explicacion: "La liana germina y enraíza en el suelo; la epífita vive sobre otra planta (forofito) sin tocar el suelo."
        },
        {
          tipo: "vf",
          pregunta: "Según los apuntes del Tema 1B, los fanerófitos son plantas leñosas con las yemas situadas a más de 50 cm del suelo.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Tema 1B fija el umbral en 50 cm (en el Tema 1 condensado aparece como 25 cm). ⚠️ Revisar con el material de la profesora."
        },
        {
          tipo: "multiple",
          pregunta: "En el estudio de La Palma (Irl et al., 2020), los fanerófitos:",
          opciones: ["Disminuyen con la altitud y la precipitación", "Aumentan con la altitud y la precipitación, dominando en la laurisilva del N y NE", "Son indiferentes a la altitud", "Dominan en las costas áridas del sur"],
          correcta: 1,
          explicacion: "Necesitan agua todo el año para mantener el sistema aéreo: dominan en la laurisilva húmeda."
        },
        {
          tipo: "multiple",
          pregunta: "El protalo, pequeña lámina acorazonada de pocos milímetros, corresponde en el helecho a la generación:",
          opciones: ["Esporófita (2n)", "Gametófita (n)", "Cigótica", "Esporangial"],
          correcta: 1,
          explicacion: "El gametófito (haploide) es el protalo; el esporófito es la planta visible con frondes."
        },
        {
          tipo: "multiple",
          pregunta: "Los órganos del gametófito del helecho que producen los gametos masculinos son:",
          opciones: ["Arquegonios", "Anteridios", "Esporangios", "Sorus"],
          correcta: 1,
          explicacion: "Anteridios → gametos masculinos; arquegonios → ovocélula (gameto femenino)."
        },
        {
          tipo: "vf",
          pregunta: "En el ciclo de un pino, desde la polinización hasta la fecundación pueden transcurrir hasta 15 meses.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El polen tarda hasta 15 meses en liberar sus células espermáticas dentro del óvulo."
        },
        {
          tipo: "multiple",
          pregunta: "Los estolones de la fresa (Fragaria vesca) son un ejemplo de reproducción asexual por:",
          opciones: ["Apomixis", "Fragmentación", "Meiosis", "Heterosporia"],
          correcta: 1,
          explicacion: "Tallos rastreros que enraízan en sus nudos y forman nuevas plantas conectadas a la madre."
        },
        {
          tipo: "multiple",
          pregunta: "Según los datos de Ranunculus repens, la mayor supervivencia de las plantas nacidas de estolones frente a las de semilla se explica por:",
          opciones: ["La mayor variabilidad genética de los estolones", "La transferencia de agua, azúcares y minerales desde la planta madre", "La ausencia de competencia", "La polinización cruzada"],
          correcta: 1,
          explicacion: "Los estolones reciben recursos maternos en las semanas críticas (>15 % vivos frente al 2 % de las semillas)."
        },
        {
          tipo: "multiple",
          pregunta: "La Rafflesia arnoldii, que produce la flor más grande del mundo (hasta 1 m), es una planta:",
          opciones: ["Epífita", "Carnívora", "Parásita (de raíces de vid silvestre)", "Halófita"],
          correcta: 2,
          explicacion: "Parásita exclusiva de raíces de vid silvestre en Sumatra; toda la planta se reduce casi a la flor."
        },
        {
          tipo: "vf",
          pregunta: "Monotropa uniflora es mico-heterótrofa: parasita a un hongo micorrícico que, a su vez, extrae azúcares de un árbol.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Un 'robo a tres bandas': no contacta con el árbol, sino con el hongo asociado a sus raíces."
        },
        {
          tipo: "multiple",
          pregunta: "El aislamiento entre Brassica nigra (florece abril-junio) y B. oleracea (florece mayo-agosto) es un mecanismo precigótico de tipo:",
          opciones: ["Ecológico", "Temporal", "Gamético", "Poscigótico"],
          correcta: 1,
          explicacion: "El desfase fenológico (distintas épocas de floración) limita el intercambio de polen."
        },
        {
          tipo: "multiple",
          pregunta: "En los helechos del género Dryopteris, los híbridos producen esporas pequeñas y arrugadas porque los cromosomas no se emparejan bien en la meiosis. Es un mecanismo de aislamiento:",
          opciones: ["Precigótico mecánico", "Precigótico gamético", "Poscigótico (esterilidad del híbrido)", "Ecológico"],
          correcta: 2,
          explicacion: "El híbrido es viable como planta pero estéril: solo puede propagarse asexualmente."
        },
        {
          tipo: "vf",
          pregunta: "Los caméfitos son una forma biológica típica de las cumbres, con porte bajo para aprovechar el calor del suelo y resistir el viento.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "En La Palma aumentan con la altitud aunque son indiferentes a la precipitación."
        }
      ]
    },
    // ======================= TEST 3 =======================
    {
      id: "T1-3",
      nombre: "Tema 1 · Test 3",
      preguntas: [
        {
          tipo: "vf",
          pregunta: "Los cnidarios, como los corales y las anémonas, se consideran plantas por ser organismos sésiles (inmóviles).",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Son animales sésiles: la inmovilidad por sí sola no basta para clasificarlos como plantas."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué pigmento es propio de las algas rojas y las cianobacterias y capta luz en condiciones de baja iluminación submarina?",
          opciones: ["Carotenos", "Clorofila a", "Ficobilinas", "Xantofilas"],
          correcta: 2,
          explicacion: "Las ficobilinas (rojo/azul) aprovechan la escasa luz que penetra bajo el agua."
        },
        {
          tipo: "multiple",
          pregunta: "La clorofila c aparece únicamente en:",
          opciones: ["Plantas con flor", "Algas pardas, diatomeas y dinoflagelados", "Cianobacterias", "Helechos"],
          correcta: 1,
          explicacion: "Es un pigmento accesorio restringido a esos grupos de algas y protistas."
        },
        {
          tipo: "multiple",
          pregunta: "En la fase oscura (ciclo de Calvin) se produce:",
          opciones: ["La rotura del agua y liberación de O₂", "La fijación del carbono y la formación de azúcares", "La captación de fotones por las clorofilas", "La síntesis de ATP a partir de la luz"],
          correcta: 1,
          explicacion: "El CO₂ se incorpora a moléculas orgánicas usando el ATP y NADPH de la fase luminosa."
        },
        {
          tipo: "vf",
          pregunta: "Las plantas CAM, como los cactus, fijan el CO₂ de noche para evitar perder agua por los estomas durante el calor diurno.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Abren los estomas solo de noche y almacenan el CO₂ como ácido málico."
        },
        {
          tipo: "multiple",
          pregunta: "El tamaño típico de una célula vegetal está entre:",
          opciones: ["0,5 y 2 µm", "5 y 20 µm", "50 y 200 µm", "1 y 5 mm"],
          correcta: 1,
          explicacion: "Entre 5 y 20 µm, aunque algunas fibras (lino, algodón) alcanzan varios centímetros."
        },
        {
          tipo: "multiple",
          pregunta: "La placa celular que separa las dos células hijas en la división vegetal se origina por la fusión de vesículas procedentes de:",
          opciones: ["El núcleo", "El aparato de Golgi", "La mitocondria", "El cloroplasto"],
          correcta: 1,
          explicacion: "Crece de forma centrífuga, de dentro hacia los bordes, hasta unirse con la pared preexistente."
        },
        {
          tipo: "multiple",
          pregunta: "Los pelos urticantes de las ortigas, que inyectan histamina al rozarse, son un tipo de:",
          opciones: ["Estoma", "Tricoma defensivo", "Esclereida", "Célula oclusiva"],
          correcta: 1,
          explicacion: "Los tricomas pueden ser glandulares, defensivos (urticantes), reflectantes o de absorción."
        },
        {
          tipo: "vf",
          pregunta: "El almidón de reserva se almacena en plastos especializados llamados amiloplastos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Son plastos sin clorofila, abundantes en tubérculos, raíces de reserva y semillas."
        },
        {
          tipo: "multiple",
          pregunta: "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica principalmente por:",
          opciones: ["El bombeo desde la raíz", "La transpiración foliar y las propiedades de cohesión-adhesión del agua", "La presión de las vacuolas", "La contracción del floema"],
          correcta: 1,
          explicacion: "La pérdida de vapor crea presión negativa; la columna de agua se mantiene íntegra por cohesión-adhesión."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué porcentaje del peso seco de la planta representa, cada uno, el carbono y el oxígeno?",
          opciones: ["6 %", "Aproximadamente el 45 %", "Entre 0,1 y 1,5 %", "Menos del 0,01 %"],
          correcta: 1,
          explicacion: "C ≈ 45 % y O ≈ 45 %; el hidrógeno aporta en torno al 6 %."
        },
        {
          tipo: "multiple",
          pregunta: "La clorosis general que empieza en las hojas viejas, con posible aparición de antocianinas, es síntoma de deficiencia de:",
          opciones: ["Nitrógeno (N)", "Calcio (Ca)", "Hierro (Fe)", "Cloro (Cl)"],
          correcta: 0,
          explicacion: "Al ser móvil, el N se retira de las hojas viejas hacia las jóvenes, amarilleando primero las viejas."
        },
        {
          tipo: "vf",
          pregunta: "El helecho hiperacumulador Pteris vittata se emplea en fitorremediación por su capacidad de absorber arsénico.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Es un hiperacumulador de arsénico útil para regenerar suelos contaminados."
        },
        {
          tipo: "multiple",
          pregunta: "Los meristemos apicales, situados en los extremos de tallos y raíces, son responsables del:",
          opciones: ["Crecimiento secundario (en grosor)", "Crecimiento primario (en longitud)", "Cierre de los estomas", "Transporte de azúcares"],
          correcta: 1,
          explicacion: "El crecimiento primario alarga la planta y genera órganos laterales durante toda su vida."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas plantas es un ejemplo de planta anual (terófito)?",
          opciones: ["Olivo", "Roble", "Amapola", "Zanahoria"],
          correcta: 2,
          explicacion: "La amapola es anual; olivo y roble son perennes leñosos y la zanahoria es bianual."
        },
        {
          tipo: "multiple",
          pregunta: "Un arbusto se define como una planta leñosa que:",
          opciones: ["Tiene un tronco único y copa diferenciada", "Se ramifica desde la base, sin un tronco único", "Trepa apoyándose en otras plantas", "Tiene el tallo herbáceo y verde"],
          correcta: 1,
          explicacion: "El árbol se ramifica a cierta altura con tronco único; el arbusto (lavanda, romero, boj) lo hace desde la base."
        },
        {
          tipo: "vf",
          pregunta: "Los hemicriptófitos, a menudo en roseta basal, son la forma biológica más frecuente en las regiones templadas y soportan bien la siega.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Sus yemas a ras de suelo quedan protegidas por la hojarasca, el césped y la nieve."
        },
        {
          tipo: "multiple",
          pregunta: "Según la mnemotecnia del Tema 1B ('Fulanito Casi siempre Huele a Gasolina del Tercer mundo'), el orden de los biotipos de Raunkiær, de las yemas más altas a la mera semilla, es:",
          opciones: ["Terófito → Geófito → Hemicriptófito → Caméfito → Fanerófito", "Fanerófito → Caméfito → Hemicriptófito → Geófito → Terófito", "Caméfito → Fanerófito → Geófito → Terófito → Hemicriptófito", "Hemicriptófito → Fanerófito → Caméfito → Terófito → Geófito"],
          correcta: 1,
          explicacion: "Es una 'escalera de yemas' que baja hacia el suelo y acaba desapareciendo como semilla."
        },
        {
          tipo: "multiple",
          pregunta: "Los pneumatóforos del ciprés de los pantanos (Taxodium distichum) son:",
          opciones: ["Hojas modificadas en espinas", "Raíces verticales con aerénquima que sobresalen del agua para oxigenar el sistema radical", "Glándulas que excretan sal", "Estructuras flotantes para la dispersión"],
          correcta: 1,
          explicacion: "Permiten respirar al sistema radical sumergido en suelos encharcados."
        },
        {
          tipo: "multiple",
          pregunta: "El metabolismo CAM (Crassulacean Acid Metabolism) consiste en abrir los estomas:",
          opciones: ["Solo de día", "Solo de noche, fijando CO₂ como ácido málico", "De forma continua", "Nunca; carecen de estomas"],
          correcta: 1,
          explicacion: "Es una adaptación xerófita para no perder agua durante el día caluroso."
        },
        {
          tipo: "vf",
          pregunta: "En el nenúfar (Nuphar luteum), los estomas se sitúan en el envés de la hoja, igual que en las plantas terrestres.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Al flotar sobre el agua, sitúa los estomas en el haz (cara superior), no en el envés."
        },
        {
          tipo: "multiple",
          pregunta: "Una epífita se diferencia de una hemiparásita en que la epífita:",
          opciones: ["Extrae agua y minerales del huésped por haustorios", "Usa el árbol solo como soporte físico, sin nutrirse de él", "Ha perdido la clorofila", "Vive enraizada en el suelo"],
          correcta: 1,
          explicacion: "Conserva sus raíces aéreas y hace fotosíntesis; el forofito solo aporta sostén."
        },
        {
          tipo: "multiple",
          pregunta: "La hiedra común (Hedera helix) trepa mediante:",
          opciones: ["Zarcillos enroscadores", "Raíces adventicias adhesivas", "Tallos volubles", "Espinas-gancho"],
          correcta: 1,
          explicacion: "Sus raíces adventicias segregan una sustancia adhesiva que la pega al sustrato."
        },
        {
          tipo: "vf",
          pregunta: "En los ciclos homospóricos, todas las esporas son del mismo tipo y dan lugar a un único tipo de gametófito bisexual.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Propio de briófitos y la mayoría de pteridófitos; el gametófito tiene anteridios y arquegonios."
        },
        {
          tipo: "multiple",
          pregunta: "En los heterospóricos, las megásporas (procedentes de los megasporangios) darán lugar a:",
          opciones: ["Gametófitos masculinos", "Gametófitos femeninos", "Esporófitos diploides", "Cigotos"],
          correcta: 1,
          explicacion: "Micrósporas → gametófitos masculinos; megásporas → gametófitos femeninos."
        },
        {
          tipo: "multiple",
          pregunta: "En la reproducción asexual por fragmentación, los 'ojos' de la patata que pueden brotar corresponden a yemas de un:",
          opciones: ["Bulbo", "Rizoma", "Tubérculo", "Estolón"],
          correcta: 2,
          explicacion: "El tubérculo es un tallo (no una raíz) engrosado y corto con yemas: los 'ojos'."
        },
        {
          tipo: "multiple",
          pregunta: "La apomixis aparece en más de 300 especies de unas 35 familias. Un ejemplo clásico, cuyos individuos europeos son casi todos clones, es:",
          opciones: ["El rosal", "El diente de león (Taraxacum)", "El pino", "La fresa"],
          correcta: 1,
          explicacion: "Forma semillas sin fecundación; casi todos los dientes de león europeos son clones apomícticos."
        },
        {
          tipo: "vf",
          pregunta: "Una de las hipótesis que explican el mantenimiento de la reproducción sexual es la heterogeneidad temporal: el ambiente cambia con el tiempo y la variabilidad da más opciones a la descendencia.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Complementa la hipótesis de la heterogeneidad espacial (el ambiente varía también en el espacio)."
        },
        {
          tipo: "multiple",
          pregunta: "El rechazo químico del polen ajeno por parte del estigma y el estilo, que impide el desarrollo del tubo polínico, es un mecanismo de aislamiento precigótico de tipo:",
          opciones: ["Ecológico", "Temporal", "Mecánico", "Gamético"],
          correcta: 3,
          explicacion: "Aislamiento gamético: el estigma reconoce y rechaza químicamente al polen 'extranjero'."
        },
        {
          tipo: "multiple",
          pregunta: "La planta halófita Salicornia ramosissima se caracteriza por:",
          opciones: ["Tener hojas grandes y cutícula gruesa", "Ser suculenta, sin hojas verdaderas, y enrojecer al final del verano", "Capturar insectos", "Vivir como epífita sobre árboles"],
          correcta: 1,
          explicacion: "Totalmente halófita; sus tallos acumulan pigmentos y se vuelven rojos al final del verano."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T1; }
if (typeof window !== 'undefined') { window.sandra_botanica_T1 = sandra_botanica_T1; }
