const sandra_botanica_T8 = {
  tema: 8,
  titulo: "Tema 8 · Matorrales atlánticos, mediterráneos, halófilos y de montaña",
  penalizacionPorFallo: 0.3,
  tests: [
    // =======================================================================
    // TEST 1
    // =======================================================================
    {
      id: "T8-1",
      titulo: "Tema 8 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "¿Qué define a un matorral?",
          opciones: [
            "Comunidad dominada por árboles de más de 5 m",
            "Comunidad dominada por arbustos o matas leñosas de menos de 4-5 m de altura",
            "Comunidad exclusivamente herbácea sin leñosas",
            "Comunidad de plantas trepadoras"
          ],
          correcta: 1,
          explicacion: "Los matorrales son comunidades dominadas por arbustos o matas, plantas leñosas de menos de 4-5 m de altura."
        },
        {
          tipo: "multiple",
          pregunta: "Un matorral de carácter serial es aquel que:",
          opciones: [
            "Es la vegetación potencial estable porque la litología impide el bosque",
            "Aparece tras la destrucción del bosque y tiende a volver a él si cesa la perturbación",
            "Solo crece por encima del límite del bosque",
            "Nunca evoluciona hacia bosque"
          ],
          correcta: 1,
          explicacion: "El matorral serial es una etapa de la sucesión tras tala, incendio o pastoreo; si cesa la perturbación tiende de nuevo hacia el bosque."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué caracteriza a un matorral de carácter permanente?",
          opciones: [
            "Es estable porque la litología, la topografía o la altitud impiden el desarrollo arbóreo",
            "Siempre evoluciona hacia bosque en pocos años",
            "Solo aparece tras incendios",
            "Depende exclusivamente del pastoreo"
          ],
          correcta: 0,
          explicacion: "El matorral permanente es la vegetación potencial estable porque rocas extremas, suelos pobres en ladera o la altitud impiden el bosque."
        },
        {
          tipo: "multiple",
          pregunta: "La Península se divide en dos grandes regiones biogeográficas con matorrales distintos. ¿Cuáles son?",
          opciones: [
            "Tropical y subtropical",
            "Eurosiberiana atlántica y mediterránea",
            "Ártica y templada",
            "Continental y oceánica polar"
          ],
          correcta: 1,
          explicacion: "La región eurosiberiana del norte atlántico, con brezales, tojales y escobonales sobre suelos ácidos, y la región mediterránea, con un mosaico muy diverso."
        },
        {
          tipo: "vf",
          pregunta: "Los escobonales atlánticos ocupan los suelos profundos y aún fértiles, mientras los brezales-tojales se desarrollan sobre suelos más degradados.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "En suelos profundos aparecen los escobonales de leguminosas leñosas; en suelos degradados, especialmente costeros, los brezales y tojales."
        },
        {
          tipo: "multiple",
          pregunta: "Los escobonales están compuestos principalmente por:",
          opciones: [
            "Brezos de la familia Ericaceae",
            "Genisteas como Cytisus y Genista",
            "Labiadas aromáticas",
            "Cistáceas del género Cistus"
          ],
          correcta: 1,
          explicacion: "Los escobonales son matorrales de genisteas leñosas, con Cytisus striatus, Cytisus cantabricus, Genista florida y Genista hispanica subsp. occidentalis."
        },
        {
          tipo: "multiple",
          pregunta: "¿A qué se llaman landas costeras?",
          opciones: [
            "A los escobonales de suelos profundos del interior",
            "A los brezales y tojales del litoral atlántico sobre suelos ácidos",
            "A los sabinares rastreros de alta montaña",
            "A los romerales basófilos del levante"
          ],
          correcta: 1,
          explicacion: "Las landas costeras son brezales y tojales del litoral atlántico, sobre suelos ácidos degradados, típicos de Galicia y la cornisa cantábrica."
        },
        {
          tipo: "multiple",
          pregunta: "Las genisteas, como leguminosas, fijan nitrógeno atmosférico gracias a bacterias del género:",
          opciones: ["Azotobacter", "Rhizobium", "Frankia", "Nitrosomonas"],
          correcta: 1,
          explicacion: "Las leguminosas tienen nódulos radicales con bacterias Rhizobium o Bradyrhizobium que fijan nitrógeno; por eso colonizan y enriquecen suelos pobres."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué especie de brezo es propia de turberas y suelos encharcados?",
          opciones: ["Erica arborea", "Erica vagans", "Erica tetralix", "Erica australis"],
          correcta: 2,
          explicacion: "Erica tetralix es propia de turberas y suelos encharcados; Erica vagans ocupa el norte calcáreo y Erica australis los brezales más continentales."
        },
        {
          tipo: "multiple",
          pregunta: "Los tojos del género Ulex se caracterizan por:",
          opciones: [
            "Ser cupresáceas rastreras",
            "Ser leguminosas con tallos espinosos y hojas transformadas en espinas",
            "Ser ericáceas de hojas en verticilo",
            "Ser labiadas aromáticas"
          ],
          correcta: 1,
          explicacion: "Los tojos son leguminosas con tallos espinosos y hojas convertidas en espinas; Ulex europaeus es el tojo grande atlántico costero."
        },
        {
          tipo: "vf",
          pregunta: "La nemotecnia BRE-TO-ESCO agrupa los tres tipos de matorral atlántico: brezales, tojales y escobonales.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "BREzales de Ericaceae sobre suelos ácidos degradados, TOjales espinosos de Ulex en la costa y ESCObonales de Cytisus y Genista en suelos profundos."
        },
        {
          tipo: "multiple",
          pregunta: "La madera de qué especie es la materia prima clásica de las cazoletas de pipa o briar pipe:",
          opciones: ["Cytisus striatus", "Erica arborea", "Ulex europaeus", "Calluna vulgaris"],
          correcta: 1,
          explicacion: "La madera de Erica arborea, el brezo arbóreo, se usa para las cazoletas de las pipas; el término briar deriva del francés bruyère, brezo."
        },
        {
          tipo: "multiple",
          pregunta: "En la montaña atlántica sobre sustratos básicos calizos aparecen formaciones de:",
          opciones: [
            "Sabina rastrera Juniperus sabina con gayuba y enebros",
            "Jarales de Cistus ladanifer",
            "Romerales de labiadas",
            "Saladares halófilos"
          ],
          correcta: 0,
          explicacion: "Sobre calizas de montaña atlántica se desarrolla Juniperus sabina rastrera acompañada de enebros, gayuba Arctostaphylos uva-ursi y Daphne laureola."
        },
        {
          tipo: "multiple",
          pregunta: "La gayuba, Arctostaphylos uva-ursi, es:",
          opciones: [
            "Una leguminosa espinosa",
            "Una ericácea rastrera de hojas coriáceas perennes y frutos rojos con uso medicinal",
            "Una cupresácea arbórea",
            "Una gramínea amacollada"
          ],
          correcta: 1,
          explicacion: "La gayuba es una ericácea de porte rastrero, hojas coriáceas perennes y frutos rojos, con uso medicinal tradicional como uva ursina."
        },
        {
          tipo: "vf",
          pregunta: "Juniperus sabina, la sabina rastrera, debe confundirse con Juniperus thurifera, que es la misma especie.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "No deben confundirse: Juniperus sabina es la sabina rastrera de alta montaña sobre suelos básicos, y J. thurifera es la sabina albar de porte arbóreo."
        },
        {
          tipo: "multiple",
          pregunta: "En los matorrales mediterráneos, los acidófilos sobre suelos silíceos se caracterizan por la importancia de:",
          opciones: [
            "Las labiadas aromáticas",
            "Las cistáceas como Cistus y Halimium",
            "Las quenopodiáceas suculentas",
            "Las rosáceas espinosas"
          ],
          correcta: 1,
          explicacion: "Los matorrales acidófilos mediterráneos destacan por las cistáceas: jaras del género Cistus y jaguarzos del género Halimium."
        },
        {
          tipo: "multiple",
          pregunta: "Los matorrales basófilos mediterráneos, sobre suelos calcáreos, destacan por la abundancia de:",
          opciones: [
            "Cistáceas",
            "Labiadas aromáticas como romero, tomillo y espliego",
            "Ericáceas de turbera",
            "Genisteas de suelos profundos atlánticos"
          ],
          correcta: 1,
          explicacion: "Los basófilos destacan por las labiadas aromáticas: romero, tomillo, espliego y salvia, propias de suelos básicos calcáreos."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia CiAc-LaBa resume que:",
          opciones: [
            "Cistáceas en ácidos y labiadas en básicos",
            "Cistáceas en básicos y labiadas en ácidos",
            "Cistáceas y labiadas son siempre la misma comunidad",
            "Las cistáceas viven solo en yesos"
          ],
          correcta: 0,
          explicacion: "CiAc-LaBa: Cistáceas en suelos Ácidos y Labiadas en suelos Básicos. Si ves jaras, suelo ácido; si ves romero, tomillo o lavanda, suelo calizo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál es la única jara realmente resistente a las heladas, característica de los jarales continentales?",
          opciones: ["Cistus ladanifer", "Cistus populifolius", "Cistus laurifolius", "Halimium halimifolium"],
          correcta: 2,
          explicacion: "La jara estepa, Cistus laurifolius, es la única jara realmente resistente a las heladas y caracteriza los jarales continentales de la meseta interior fría."
        },
        {
          tipo: "multiple",
          pregunta: "La jara pringosa, Cistus ladanifer, debe su nombre pegajoso a:",
          opciones: [
            "Sus espinas",
            "El láudano, resina aromática que segrega",
            "Sus frutos vesiculares inflados",
            "Sus pelos plateados en las legumbres"
          ],
          correcta: 1,
          explicacion: "Cistus ladanifer tiene hojas pegajosas por el láudano, resina aromática usada históricamente en perfumería como fijador."
        },
        {
          tipo: "vf",
          pregunta: "El género Cistus es pirófito: muchas de sus semillas requieren el choque térmico de un incendio para germinar masivamente.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Cistus es pirófito; sus semillas germinan masivamente tras el choque térmico de un incendio, por lo que los jarales se regeneran espectacularmente."
        },
        {
          tipo: "multiple",
          pregunta: "Las plantas psamófilas, características de los jarales atlánticos del litoral suroccidental, están adaptadas a vivir en:",
          opciones: ["Suelos salinos", "Arenas", "Yesos", "Turberas encharcadas"],
          correcta: 1,
          explicacion: "Psamófilo es el organismo adaptado a vivir en arenas; requiere tolerar sustratos sueltos, pobres en nutrientes y régimen hídrico extremo."
        },
        {
          tipo: "multiple",
          pregunta: "La camarina, Corema album, presente en los jarales psamófilos atlánticos, es:",
          opciones: [
            "Una leguminosa espinosa",
            "Una ericácea de frutos blancos comestibles",
            "Una labiada aromática",
            "Una cupresácea rastrera"
          ],
          correcta: 1,
          explicacion: "Corema album, la camarina, es una ericácea de frutos blancos comestibles propia de arenas litorales atlánticas."
        },
        {
          tipo: "multiple",
          pregunta: "En las primeras etapas de degradación sobre suelos profundos calcáreos aparecen los espinares, comunidades densas de arbustos de la familia:",
          opciones: ["Lamiaceae", "Rosaceae", "Cistaceae", "Ericaceae"],
          correcta: 1,
          explicacion: "Los espinares son comunidades densas de arbustos espinosos de Rosaceae que protegen el suelo y favorecen la regeneración del bosque."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué arbusto de los espinares produce las endrinas, base del pacharán?",
          opciones: [
            "Crataegus monogyna, el majuelo",
            "Prunus spinosa, el endrino",
            "Rubus ulmifolius, la zarza",
            "Buxus sempervirens, el boj"
          ],
          correcta: 1,
          explicacion: "Prunus spinosa, el endrino, es caducifolio y produce frutos azulados, las endrinas, base del licor pacharán."
        },
        {
          tipo: "multiple",
          pregunta: "Las labiadas o Lamiaceae se caracterizan, entre otros rasgos, por:",
          opciones: [
            "Tallos cuadrangulares, hojas opuestas decusadas y aceites esenciales aromáticos",
            "Tallos cilíndricos huecos y flores en umbela",
            "Hojas transformadas en espinas y flores papilionadas",
            "Tallos articulados suculentos sin hojas"
          ],
          correcta: 0,
          explicacion: "Las Lamiaceae presentan tallos cuadrangulares, hojas opuestas decusadas, flores zigomorfas, fruto en tetraquenio y aceites esenciales aromáticos."
        },
        {
          tipo: "multiple",
          pregunta: "El piso termomediterráneo recibe el nombre de infrailicino porque:",
          opciones: [
            "Está siempre cubierto de nieve",
            "En él no hay encinas, que aparecen a partir del mesomediterráneo",
            "Solo crecen coníferas",
            "Es exclusivo de las islas"
          ],
          correcta: 1,
          explicacion: "Infrailicino indica que en el termomediterráneo no hay encinas naturalmente; la encina aparece solo a partir del mesomediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál es la única palmera europea autóctona, indicadora del piso termomediterráneo?",
          opciones: [
            "Phoenix dactylifera",
            "Chamaerops humilis, el palmito",
            "Washingtonia robusta",
            "Ceratonia siliqua"
          ],
          correcta: 1,
          explicacion: "El palmito, Chamaerops humilis, es la única palmera europea autóctona e indicadora del piso termomediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "Las pseudoestepas ibéricas comparten flora con las estepas asiáticas debido a:",
          opciones: [
            "La última glaciación cuaternaria",
            "La crisis de salinidad del Mesiniense, cuando el Mediterráneo se desecó casi por completo",
            "El comercio de semillas medieval",
            "Las corrientes oceánicas actuales"
          ],
          correcta: 1,
          explicacion: "Ambas regiones comparten orígenes ligados a la crisis de salinidad del Mioceno, el Mesiniense, hace unos 6 millones de años, cuando el Mediterráneo se desecó casi por completo."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia SaSu-ArLi-JuFrAl describe la zonación halófila del Ebro de más a menos salino. ¿Qué planta ocupa el centro saturado de sal?",
          opciones: ["Albardín", "Limonium", "Salicornia", "Frankenia"],
          correcta: 2,
          explicacion: "La zonación de más a menos salino es Salicornia, Suaeda, Arthrocnemum, Limonium, Juncus, Frankenia y Albardín; Salicornia ocupa el centro saturado de sal."
        }
      ]
    },
    // =======================================================================
    // TEST 2
    // =======================================================================
    {
      id: "T8-2",
      titulo: "Tema 8 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "En muchos casos los matorrales ibéricos son el resultado de:",
          opciones: [
            "La degradación histórica de los bosques por tala, incendios y pastoreo",
            "La plantación intencionada de especies ornamentales",
            "La acción exclusiva del viento",
            "La introducción de especies invasoras"
          ],
          correcta: 0,
          explicacion: "Buena parte de los matorrales tienen carácter serial: proceden de la degradación histórica de los bosques por tala, incendios y pastoreo."
        },
        {
          tipo: "vf",
          pregunta: "Un matorral de carácter permanente desaparece rápidamente si cesa la perturbación, dando paso al bosque.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Eso describe al matorral serial. El permanente es estable porque las condiciones de suelo, altitud o topografía impiden el bosque."
        },
        {
          tipo: "multiple",
          pregunta: "Los matorrales atlánticos tienen un papel destacado en:",
          opciones: [
            "Sierra Nevada y las Béticas",
            "La Cordillera Cantábrica, por el deterioro de hayedos y robledales",
            "El valle del Guadalquivir",
            "Las islas Canarias"
          ],
          correcta: 1,
          explicacion: "Los matorrales atlánticos son importantes en la Cordillera Cantábrica como consecuencia del deterioro de hayedos y robledales por favorecimiento del pastoreo."
        },
        {
          tipo: "multiple",
          pregunta: "Los escobonales también reciben en Galicia el nombre de:",
          opciones: ["Landas", "Sestas", "Garrigas", "Saladares"],
          correcta: 1,
          explicacion: "Los escobonales se llaman también sestas en Galicia; son matorrales de leguminosas leñosas de gran porte sobre suelos profundos."
        },
        {
          tipo: "multiple",
          pregunta: "Los escobonales son arbustos altos con tallos verdes fotosintéticos. ¿Cómo se denomina esta adaptación?",
          opciones: ["Suculencia", "Caulóptisis", "Esclerofilia", "Caulifloría"],
          correcta: 1,
          explicacion: "La caulóptisis es la fotosíntesis realizada por los tallos verdes; las genisteas reducen sus hojas y fotosintetizan con los tallos."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué especie de tojo es el tojo grande de 2-3 m, atlántico costero?",
          opciones: ["Ulex gallii", "Ulex europaeus", "Ulex eriocladus", "Stauracanthus genistoides"],
          correcta: 1,
          explicacion: "Ulex europaeus es el tojo grande de 2-3 m, atlántico costero; Ulex gallii es más pequeño y resiste mayor continentalidad."
        },
        {
          tipo: "vf",
          pregunta: "Erica arborea alcanza porte arbustivo elevado y se asocia a los alcornocales mediterráneos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Erica arborea, el brezo arbóreo, alcanza porte arbustivo y se asocia a alcornocales mediterráneos; de su madera se hacen las cazoletas de pipa."
        },
        {
          tipo: "multiple",
          pregunta: "Por encima del límite del bosque atlántico, sobre sustratos ácidos como granito o pizarra, aparecen:",
          opciones: [
            "Sabinares rastreros con gayuba",
            "Enebrales rastreros con arándanos Vaccinium myrtillus",
            "Coscojares con esparto",
            "Saladares con Salicornia"
          ],
          correcta: 1,
          explicacion: "Sobre sustratos ácidos de montaña atlántica aparecen enebrales rastreros con arándanos, Vaccinium myrtillus, sobre antiguos hayedos o abedulares."
        },
        {
          tipo: "multiple",
          pregunta: "Daphne laureola, presente en la montaña atlántica caliza, se caracteriza por:",
          opciones: [
            "Follaje glabro perenne",
            "Tallos suculentos articulados",
            "Hojas transformadas en espinas",
            "Inflorescencia plumosa dorada"
          ],
          correcta: 0,
          explicacion: "Daphne laureola acompaña a la sabina rastrera y a la gayuba en la montaña atlántica caliza, con follaje glabro perenne."
        },
        {
          tipo: "multiple",
          pregunta: "Los matorrales gipsófilos mediterráneos se desarrollan sobre:",
          opciones: ["Yesos", "Arenas litorales", "Granito", "Turberas"],
          correcta: 0,
          explicacion: "Los gipsófilos crecen sobre yesos, con flora muy especializada de halófitas y endemismos, en cuencas sedimentarias del centro y este peninsular."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué quercínea es sustituida por los jarales acidófilos sobre suelos silíceos?",
          opciones: [
            "Solo el alcornoque Quercus suber",
            "Melojares de Quercus pyrenaica, alcornocales y encinares silicícolas",
            "Únicamente la coscoja Quercus coccifera",
            "Ninguna; los jarales no sustituyen bosque"
          ],
          correcta: 1,
          explicacion: "Los jarales acidófilos sustituyen a melojares de Quercus pyrenaica, alcornocales de Q. suber y encinares de Q. ilex sobre suelos silíceos."
        },
        {
          tipo: "multiple",
          pregunta: "En los jarales continentales, ¿qué especie se distingue por las brácteas violetas vistosas en el ápice de la espiga floral?",
          opciones: [
            "Genista hystrix",
            "Lavandula pedunculata, el espliego",
            "Cistus laurifolius",
            "Santolina chamaecyparissus"
          ],
          correcta: 1,
          explicacion: "El espliego Lavandula pedunculata se distingue por las brácteas violetas vistosas en el ápice de la espiga floral, acompañando a la jara estepa."
        },
        {
          tipo: "multiple",
          pregunta: "Los jarales luso-extremadurenses son característicos de:",
          opciones: [
            "El norte cantábrico húmedo",
            "El suroeste peninsular y Portugal, sobre suelos silíceos cálidos",
            "La alta montaña pirenaica",
            "Las saladas del Ebro"
          ],
          correcta: 1,
          explicacion: "Los jarales luso-extremadurenses son propios del suroeste peninsular y Portugal sobre suelos silíceos cálidos, dominados por Cistus ladanifer."
        },
        {
          tipo: "multiple",
          pregunta: "Erophaca baetica, presente en los jarales luso-extremadurenses, es una leguminosa llamativa por:",
          opciones: [
            "Sus frutos vesiculares inflados",
            "Sus espinas afiladas",
            "Su porte rastrero tapizante",
            "Sus tallos articulados suculentos"
          ],
          correcta: 0,
          explicacion: "Erophaca baetica es una leguminosa con frutos vesiculares inflados muy llamativos, propia de los jarales luso-extremadurenses."
        },
        {
          tipo: "vf",
          pregunta: "El láudano de Cistus ladanifer es el mismo láudano opiáceo derivado del opio.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "No deben confundirse: el láudano de Cistus ladanifer es una resina aromática usada en perfumería, distinta del láudano opiáceo derivado del opio."
        },
        {
          tipo: "multiple",
          pregunta: "El jaguarzo Halimium halimifolium, de los jarales psamófilos atlánticos, es una cistácea con flores:",
          opciones: ["Rosas", "Amarillas", "Blancas con manchas púrpura", "Azuladas"],
          correcta: 1,
          explicacion: "Halimium halimifolium es el jaguarzo, cistácea amarilla del litoral, con hojas plateadas, propia de arenas atlánticas suroccidentales."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas especies NO pertenece a los espinares basófilos de Rosaceae?",
          opciones: [
            "Rubus ulmifolius, la zarza",
            "Crataegus monogyna, el majuelo",
            "Salsola vermiculata, el sisallo",
            "Rosa spp., los rosales silvestres"
          ],
          correcta: 2,
          explicacion: "El sisallo, Salsola vermiculata, es una quenopodiácea de las pseudoestepas, no un espinar de Rosaceae como la zarza, el majuelo o los rosales silvestres."
        },
        {
          tipo: "multiple",
          pregunta: "El boj, Buxus sempervirens, destaca por una propiedad particular de su madera:",
          opciones: [
            "Es la más densa de las especies europeas y se hunde en el agua",
            "Es la más ligera y flota fácilmente",
            "Es tóxica y no se puede tallar",
            "Carece de aplicaciones tradicionales"
          ],
          correcta: 0,
          explicacion: "La madera de boj es la más densa de las europeas, cercana a 1 g/cm3, y se hunde en agua; se usó para tacos de xilografía, peines y piezas de ajedrez."
        },
        {
          tipo: "multiple",
          pregunta: "El nombre científico actual del romero es:",
          opciones: [
            "Rosmarinus officinalis exclusivamente",
            "Salvia rosmarinus",
            "Lavandula latifolia",
            "Thymus vulgaris"
          ],
          correcta: 1,
          explicacion: "El romero se denomina actualmente Salvia rosmarinus, antes Rosmarinus officinalis; es la especie clave de los romerales basófilos."
        },
        {
          tipo: "multiple",
          pregunta: "La aulaga, Genista scorpius, presente en los romerales, es:",
          opciones: [
            "Una labiada aromática",
            "Una leguminosa espinosa de flores amarillas",
            "Una cistácea pirófita",
            "Una umbelífera leñosa"
          ],
          correcta: 1,
          explicacion: "La aulaga, Genista scorpius, es una leguminosa espinosa de flores amarillas que acompaña a las labiadas en los romerales basófilos."
        },
        {
          tipo: "multiple",
          pregunta: "Entre los planoperennifolios del termomediterráneo, ¿cuál es la anacardiácea de hoja paripinnada coriácea y frutos rojinegros?",
          opciones: [
            "Viburnum tinus, el durillo",
            "Pistacia lentiscus, el lentisco",
            "Phyllirea latifolia, el labiérnago",
            "Quercus coccifera, la coscoja"
          ],
          correcta: 1,
          explicacion: "El lentisco, Pistacia lentiscus, es una anacardiácea de hoja paripinnada coriácea y frutos rojinegros; la hoja paripinnada es clave para distinguirlo."
        },
        {
          tipo: "multiple",
          pregunta: "La coscoja, Quercus coccifera, puede describirse como:",
          opciones: [
            "Una encina enana espinosa con bellotas pequeñas",
            "Una palmera de pequeño porte",
            "Una conífera rastrera",
            "Una labiada aromática"
          ],
          correcta: 0,
          explicacion: "La coscoja, Quercus coccifera, es una encina enana espinosa con bellotas pequeñas y cúpulas de escamas vueltas, propia de los coscojares."
        },
        {
          tipo: "multiple",
          pregunta: "El coscojar más típico del sureste árido se asocia con una gramínea que forma el coscojar-espartal:",
          opciones: [
            "Lygeum spartum, el albardín",
            "Macrochloa tenacissima, el esparto",
            "Festuca alpina",
            "Nardus stricta"
          ],
          correcta: 1,
          explicacion: "El esparto, Macrochloa tenacissima, antes Stipa tenacissima, forma con la coscoja el coscojar-espartal en el sureste árido."
        },
        {
          tipo: "vf",
          pregunta: "Quercus coccifera debe su nombre a la cochinilla Kermes vermilio, de la que se extraía un tinte rojo carmín.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "La coscoja debe su nombre a la cochinilla Kermes vermilio que vive sobre ella; de esa cochinilla se obtenía el tinte rojo kermes antes del carmín americano."
        },
        {
          tipo: "multiple",
          pregunta: "El albardín, Lygeum spartum, es:",
          opciones: [
            "Una quenopodiácea suculenta",
            "Una gramínea espigada de pseudoestepas yesíferas",
            "Una cistácea pirófita",
            "Una leguminosa nitrificante"
          ],
          correcta: 1,
          explicacion: "El albardín, Lygeum spartum, es una gramínea perenne espigada de pseudoestepas yesíferas y bordes de saladares, que forma macollas dispersas."
        },
        {
          tipo: "multiple",
          pregunta: "La ontina, Artemisia herba-alba, característica de las pseudoestepas, es:",
          opciones: [
            "Una compuesta tomentosa muy aromática",
            "Una gramínea amacollada",
            "Una cupresácea rastrera",
            "Una rosácea espinosa"
          ],
          correcta: 0,
          explicacion: "La ontina, Artemisia herba-alba, es una compuesta tomentosa muy aromática, propia de los ambientes áridos de las pseudoestepas ibéricas."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué define la zonación halófila de los saladares?",
          opciones: [
            "Las plantas se distribuyen al azar sin relación con la sal",
            "Las plantas se ordenan en bandas paralelas según su tolerancia decreciente a la sal",
            "Solo crece una especie en todo el saladar",
            "La distribución depende únicamente de la altitud"
          ],
          correcta: 1,
          explicacion: "La zonación halófila es la distribución de plantas en bandas paralelas alrededor del agua salina, según su tolerancia decreciente a la sal."
        },
        {
          tipo: "multiple",
          pregunta: "Los piornales oromediterráneos, por encima del límite del bosque, están dominados por:",
          opciones: [
            "Cistus ladanifer",
            "Cytisus oromediterraneus y otras leguminosas leñosas",
            "Salicornia europaea",
            "Pistacia lentiscus"
          ],
          correcta: 1,
          explicacion: "Los piornales son matorrales de leguminosas leñosas almohadilladas, sobre todo Cytisus oromediterraneus, Echinospartum y Genista, del piso oromediterráneo."
        },
        {
          tipo: "vf",
          pregunta: "Los matorrales almohadillado-espinosos como Erinacea anthyllis y Vella spinosa son una adaptación al viento fuerte, el frío y la herbivoría de crestas y zonas expuestas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El matorral almohadillado-espinoso de plantas en cojín, muchas espinosas, está adaptado al viento fuerte, el frío y la herbivoría de crestas y zonas expuestas."
        },
        {
          tipo: "multiple",
          pregunta: "En las primeras etapas de sustitución de los matorrales basófilos sobre suelos profundos calcáreos, ¿qué tipo de comunidad densa de Rosaceae se forma?",
          opciones: [
            "Romerales de labiadas",
            "Espinares cerrados de zarzas, endrinos y majuelos",
            "Saladares con zonación halófila",
            "Jarales pirófitos de Cistus"
          ],
          correcta: 1,
          explicacion: "Como en los acidófilos, las primeras etapas de sustitución sobre suelos profundos calcáreos forman espinares cerrados de zarzas, endrinos, majuelos y rosales silvestres."
        }
      ]
    },
    // =======================================================================
    // TEST 3
    // =======================================================================
    {
      id: "T8-3",
      titulo: "Tema 8 · Test 3",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "¿Qué factores pueden impedir el desarrollo arbóreo y dar lugar a matorrales de carácter permanente?",
          opciones: [
            "Solo el pastoreo intensivo",
            "La litología extrema, la topografía y la altitud",
            "Únicamente los incendios recientes",
            "La presencia de bacterias fijadoras de nitrógeno"
          ],
          correcta: 1,
          explicacion: "El carácter permanente surge cuando rocas extremas, suelos pobres en ladera o la altitud por encima del límite del bosque impiden el desarrollo arbóreo."
        },
        {
          tipo: "multiple",
          pregunta: "La región eurosiberiana atlántica se caracteriza por matorrales sobre suelos:",
          opciones: ["Salinos", "Ácidos: brezales, tojales y escobonales", "Yesíferos", "Calcáreos profundos"],
          correcta: 1,
          explicacion: "La región eurosiberiana del norte atlántico presenta brezales, tojales y escobonales sobre suelos ácidos."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas especies es una genistea típica de los escobonales cantábricos?",
          opciones: [
            "Erica tetralix",
            "Genista florida",
            "Ulex europaeus",
            "Arctostaphylos uva-ursi"
          ],
          correcta: 1,
          explicacion: "Genista florida es una genistea representativa de los escobonales, junto con Cytisus striatus, Cytisus cantabricus y Genista hispanica subsp. occidentalis."
        },
        {
          tipo: "multiple",
          pregunta: "Cytisus striatus recibe su nombre por:",
          opciones: [
            "Sus frutos cubiertos de pelos plateados",
            "Sus flores azuladas",
            "Sus tallos sin clorofila",
            "Sus espinas"
          ],
          correcta: 0,
          explicacion: "Cistus striatus muestra los frutos en legumbre cubiertos de pelos plateados que le dan nombre; florece de forma espectacular en mayo-junio."
        },
        {
          tipo: "vf",
          pregunta: "Los brezos de la familia Ericaceae son arbustos con hojas diminutas en verticilos y flores acampanadas o tubulares.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Los brezos son ericáceas con hojas diminutas en verticilos y flores acampanadas o tubulares en racimos."
        },
        {
          tipo: "multiple",
          pregunta: "Las leguminosas pioneras enriquecen los suelos pobres porque:",
          opciones: [
            "Acumulan sales en sus tejidos",
            "Fijan nitrógeno atmosférico mediante bacterias en sus nódulos radicales",
            "Producen resinas aromáticas",
            "Tienen porte almohadillado espinoso"
          ],
          correcta: 1,
          explicacion: "Las leguminosas fijan nitrógeno atmosférico con bacterias Rhizobium en los nódulos radicales, por lo que colonizan y enriquecen suelos pobres, preparándolos para la sucesión."
        },
        {
          tipo: "multiple",
          pregunta: "En la montaña atlántica, ¿qué cupresácea de porte rastrero domina sobre suelos básicos?",
          opciones: [
            "Juniperus thurifera",
            "Juniperus sabina",
            "Cupressus sempervirens",
            "Pinus sylvestris"
          ],
          correcta: 1,
          explicacion: "Juniperus sabina, la sabina rastrera, es la cupresácea de porte rastrero típica de la alta montaña atlántica sobre suelos básicos."
        },
        {
          tipo: "vf",
          pregunta: "Las plantas tapizantes y almohadilladas de la montaña atlántica, como la sabina rastrera, la gayuba y el arándano, son la base de las rocallas y jardines alpinos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Su porte tapizante o almohadillado las hace ideales para cubrir grandes superficies con poco mantenimiento en climas frescos, base de rockeries y jardines alpinos."
        },
        {
          tipo: "multiple",
          pregunta: "Los matorrales mediterráneos predominan con carácter serial porque proceden de la degradación de:",
          opciones: [
            "Los hayedos atlánticos",
            "Los bosques de quercíneas",
            "Las turberas de montaña",
            "Los sabinares rastreros"
          ],
          correcta: 1,
          explicacion: "En los matorrales mediterráneos predomina el carácter serial, consecuencia de la degradación de los bosques de quercíneas."
        },
        {
          tipo: "multiple",
          pregunta: "Además del sustrato, ¿qué cruza con los grupos de matorral mediterráneo para multiplicar su diversidad?",
          opciones: [
            "El tipo de polinizador",
            "Los pisos bioclimáticos: termo, meso, supra y oro",
            "El color de las flores",
            "La presencia de cochinillas"
          ],
          correcta: 1,
          explicacion: "Los grupos de matorral se cruzan con los pisos bioclimáticos termomediterráneo, mesomediterráneo, supramediterráneo y oromediterráneo, multiplicando la diversidad."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué especie domina los retamares y escobonales mediterráneos de las primeras etapas de sustitución sobre suelos profundos silíceos?",
          opciones: [
            "Retama sphaerocarpa y Cytisus scoparius",
            "Salicornia europaea",
            "Pistacia lentiscus",
            "Thymus vulgaris"
          ],
          correcta: 0,
          explicacion: "Los retamares de Retama sphaerocarpa y Cytisus scoparius, escobonales de gran talla, ocupan suelos profundos como primera etapa de sustitución del bosque."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuántos grandes tipos de jarales acidófilos se reconocen?",
          opciones: ["Dos", "Tres", "Cuatro", "Cinco"],
          correcta: 2,
          explicacion: "Se reconocen cuatro grandes tipos de jarales: con matiz atlántico psamófilos, continentales, luso-extremadurenses y los enclaves levantinos y catalanes."
        },
        {
          tipo: "multiple",
          pregunta: "La nemotecnia CoLuAtMa agrupa los cuatro jarales mediterráneos. La inicial Lu corresponde a:",
          opciones: [
            "Jarales lusitanos o luso-extremadurenses",
            "Jarales de Lugo",
            "Jarales lacustres",
            "Jarales de luz"
          ],
          correcta: 0,
          explicacion: "CoLuAtMa: Continentales, Luso-extremadurenses, Atlánticos psamófilos y Maquis o garrigas catalano-levantinas."
        },
        {
          tipo: "multiple",
          pregunta: "Cistus laurifolius recibe el nombre específico laurifolius por:",
          opciones: [
            "Sus flores como el laurel",
            "Sus hojas grandes lustrosas, como las del laurel",
            "Su aroma a laurel",
            "Su porte arbóreo"
          ],
          correcta: 1,
          explicacion: "Cistus laurifolius, la jara estepa, tiene flor blanca con centro amarillo y hojas grandes lustrosas similares a las del laurel."
        },
        {
          tipo: "vf",
          pregunta: "El láudano de la jara pringosa se recogía históricamente pasando rebaños de cabras por los jarales y peinando la resina pegada al pelo.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "El ládano se recogía pasando rebaños de cabras por los jarales y peinando la resina pegada al pelo; era producto del comercio mediterráneo antiguo."
        },
        {
          tipo: "multiple",
          pregunta: "Un organismo halófilo es aquel adaptado a vivir en suelos:",
          opciones: ["Arenosos", "Salinos", "Ácidos silíceos", "Encharcados de agua dulce"],
          correcta: 1,
          explicacion: "Halófilo es el organismo adaptado a suelos salinos, con altas concentraciones de NaCl u otras sales; no debe confundirse con psamófilo, propio de arenas."
        },
        {
          tipo: "multiple",
          pregunta: "Armeria pungens, de los jarales psamófilos atlánticos, presenta:",
          opciones: [
            "Porte en cojín con flores rosas en glomérulo",
            "Frutos vesiculares inflados",
            "Tallos suculentos articulados",
            "Hojas paripinnadas coriáceas"
          ],
          correcta: 0,
          explicacion: "Armeria pungens es una planta en cojín con flores rosas en glomérulo, propia de las arenas litorales atlánticas suroccidentales."
        },
        {
          tipo: "multiple",
          pregunta: "El majuelo o espino albar corresponde a la especie:",
          opciones: [
            "Prunus spinosa",
            "Crataegus monogyna",
            "Rubus ulmifolius",
            "Buxus sempervirens"
          ],
          correcta: 1,
          explicacion: "El majuelo o espino albar es Crataegus monogyna, arbusto espinoso de los espinares con flores blancas y frutos rojos."
        },
        {
          tipo: "vf",
          pregunta: "El boj, Buxus sempervirens, es un arbusto espinoso de la familia Rosaceae.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "El boj acompaña a los espinares pero no es espinoso ni Rosaceae; es un arbusto de hojas coriáceas perennes muy usado como seto formal."
        },
        {
          tipo: "multiple",
          pregunta: "La santolina, Santolina chamaecyparissus, de los romerales, se reconoce por:",
          opciones: [
            "Capítulos amarillos y follaje plateado",
            "Flores azuladas y tallos cuadrangulares",
            "Frutos en mora",
            "Tallos espinosos"
          ],
          correcta: 0,
          explicacion: "Santolina chamaecyparissus presenta capítulos amarillo limón y follaje plateado, acompañando a romero y tomillo en los romerales basófilos."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué especie es el espliego ancho de los romerales basófilos?",
          opciones: [
            "Lavandula pedunculata",
            "Lavandula latifolia",
            "Salvia rosmarinus",
            "Thymus vulgaris"
          ],
          correcta: 1,
          explicacion: "El espliego ancho de los romerales basófilos es Lavandula latifolia; Lavandula pedunculata era el espliego de los jarales continentales acidófilos."
        },
        {
          tipo: "multiple",
          pregunta: "El durillo, Viburnum tinus, planoperennifolio del termomediterráneo, es una caprifoliácea con:",
          opciones: [
            "Flores blancas en cima e infrutescencias azuladas",
            "Frutos rojinegros y hoja paripinnada",
            "Bellotas pequeñas",
            "Tallos articulados suculentos"
          ],
          correcta: 0,
          explicacion: "El durillo, Viburnum tinus, es una caprifoliácea con flores blancas en cima e infrutescencias azuladas, propia del piso termomediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "El labiérnago, Phyllirea latifolia, se parece al olivo pero se distingue por:",
          opciones: [
            "Tener hojas más anchas",
            "Ser espinoso",
            "Producir bellotas",
            "Tener tallos suculentos"
          ],
          correcta: 0,
          explicacion: "El labiérnago, Phyllirea latifolia, es una oleácea parecida al olivo pero con hojas más anchas, planoperennifolio del termomediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué significa que una hoja sea planoperennifolia?",
          opciones: [
            "Hoja plana, perenne y generalmente esclerófila",
            "Hoja acicular caduca",
            "Hoja transformada en espina",
            "Hoja suculenta sin clorofila"
          ],
          correcta: 0,
          explicacion: "Planoperennifolio significa hoja plana, no acicular, perenne y generalmente esclerófila, adaptada al clima cálido con sequía estival del bosque mediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "Tres indicadores del piso termomediterráneo o infrailicino son:",
          opciones: [
            "Hayedo, robledal y abedular",
            "Palmito, acebuche y algarrobo",
            "Sabina rastrera, gayuba y arándano",
            "Salicornia, Suaeda y Limonium"
          ],
          correcta: 1,
          explicacion: "Los indicadores del termomediterráneo son el palmito Chamaerops humilis, el acebuche Olea europaea var. sylvestris y el algarrobo Ceratonia siliqua."
        },
        {
          tipo: "multiple",
          pregunta: "La orgaza, Atriplex halimus, de las pseudoestepas, es una quenopodiácea con hojas:",
          opciones: ["Grisáceas plateadas", "Acirculares verdes", "Suculentas articuladas", "Transformadas en espinas"],
          correcta: 0,
          explicacion: "La orgaza, Atriplex halimus, es una quenopodiácea de hojas grisáceas plateadas, característica de las pseudoestepas ibéricas."
        },
        {
          tipo: "multiple",
          pregunta: "La crisis del Mesiniense, origen de la flora halófila y gipsófila ibérica, ocurrió hace aproximadamente:",
          opciones: [
            "Unos 5,9 a 5,3 millones de años",
            "Unos 65 millones de años",
            "Unos 11.000 años",
            "Unos 200 millones de años"
          ],
          correcta: 0,
          explicacion: "La crisis del Mesiniense, hace unos 5,96-5,33 millones de años, supuso la desecación casi total del Mediterráneo y dejó grandes depósitos de yeso y sal."
        },
        {
          tipo: "multiple",
          pregunta: "Salicornia europaea, planta halófila del centro de los saladares, se caracteriza por:",
          opciones: [
            "Tallos articulados suculentos comestibles",
            "Hojas paripinnadas coriáceas",
            "Flores en glomérulo rosa",
            "Espinas afiladas"
          ],
          correcta: 0,
          explicacion: "Salicornia europaea presenta tallos articulados suculentos, es comestible y conocida como hierba salada, y ocupa el centro saturado de sal del saladar."
        },
        {
          tipo: "vf",
          pregunta: "El género Limonium se cultiva como ornamental por sus flores secas duraderas, conocidas como siemprevivas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Limonium se cultiva como ornamental por sus flores secas duraderas, las siemprevivas, y es una de las halófilas viables en jardinería de suelos salinos."
        },
        {
          tipo: "multiple",
          pregunta: "Según la tabla resumen, ¿qué carácter tienen normalmente los saladares?",
          opciones: [
            "Serial, hacia bosque caducifolio",
            "Permanente, con zonación halófila",
            "Serial, sustituyendo encinares",
            "Permanente solo por encima del bosque"
          ],
          correcta: 1,
          explicacion: "Los saladares tienen carácter permanente: la zonación halófila sobre suelos salinos es estable y no evoluciona hacia bosque."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T8; }
if (typeof window !== 'undefined') { window.sandra_botanica_T8 = sandra_botanica_T8; }
