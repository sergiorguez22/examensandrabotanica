const sandra_botanica_T3 = {
  tema: 3,
  titulo: "Tema 3 · Las plantas y el ambiente: flora, vegetación y biomas",
  penalizacionPorFallo: 0.3,
  tests: [
    // =========================================================================
    // TEST 1
    // =========================================================================
    {
      id: "T3-1",
      titulo: "Tema 3 · Test 1",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "El concepto de flora se caracteriza por ser:",
          opciones: ["Cuantitativo y dinámico", "Cualitativo y estático", "Cuantitativo y estático", "Cualitativo y dinámico"],
          correcta: 1,
          explicacion: "La flora es el conjunto de especies de un territorio: importa cuáles son, cómo son y dónde viven (cualitativo), referido a un momento dado (estático)."
        },
        {
          tipo: "multiple",
          pregunta: "Frente a la flora, la vegetación es la manifestación de la vida vegetal entendida como:",
          opciones: ["Real, cuantitativa y cambiante", "Cualitativa y estática", "Un simple listado de especies", "Independiente de los factores ecológicos"],
          correcta: 0,
          explicacion: "La vegetación es el «tapiz vegetal» real: integra organización, abundancia y cambios espaciales y temporales; es cuantitativa y dinámica."
        },
        {
          tipo: "vf",
          pregunta: "La flora integra la abundancia de cada especie y cómo varía esa abundancia de un mes a otro.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Eso describe la vegetación. La flora solo dice qué especies hay, no cuántos individuos ni su proporción."
        },
        {
          tipo: "multiple",
          pregunta: "La obra de referencia que cubre toda la flora vascular europea en cinco volúmenes es:",
          opciones: ["Flora Briofítica Ibérica", "Flora Vascular de Andalucía Oriental", "Flora Europaea", "Flora iberica"],
          correcta: 2,
          explicacion: "Flora Europaea (Cambridge University Press) abarca desde los licopodios hasta las plataneras en cinco volúmenes."
        },
        {
          tipo: "multiple",
          pregunta: "Una comunidad vegetal está formada por:",
          opciones: ["Todas las especies del reservorio regional", "Las especies que coocurren en un lugar y un momento dados", "Las especies que podrían vivir en un sitio aunque no estén presentes", "Las especies cultivadas de una región"],
          correcta: 1,
          explicacion: "La comunidad son las especies que efectivamente conviven en el sitio, no todo el reservorio regional o species pool."
        },
        {
          tipo: "multiple",
          pregunta: "El filtro ecológico que determina que la semilla LLEGUE físicamente al sitio es el filtro:",
          opciones: ["Abiótico", "Biótico", "De dispersión", "Edáfico"],
          correcta: 2,
          explicacion: "El filtro de dispersión es la primera criba: que el propágulo alcance el lugar. Después actúan el abiótico y el biótico."
        },
        {
          tipo: "multiple",
          pregunta: "Que el clima y el suelo permitan el establecimiento de una especie depende del filtro:",
          opciones: ["De dispersión", "Abiótico", "Biótico", "De polinización"],
          correcta: 1,
          explicacion: "El filtro abiótico engloba las condiciones físicas del medio: temperatura, precipitación, irradiancia, textura, pH, salinidad, nutrientes, topografía."
        },
        {
          tipo: "vf",
          pregunta: "La competencia con otras plantas y la herbivoría son ejemplos de filtros abióticos.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Son filtros bióticos: relaciones con otros seres vivos (competencia, herbívoros, polinizadores, micorrizas, patógenos)."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas especies tiene un área de distribución cosmopolita?",
          opciones: ["Erodium paularense", "Plantago major", "Olea europaea", "Petrocoptis crassifolia"],
          correcta: 1,
          explicacion: "Plantago major, especie ruderal presente en casi todo el mundo, es un ejemplo clásico de área cosmopolita."
        },
        {
          tipo: "multiple",
          pregunta: "El género Betula (abedules), con distribución continua que rodea todo el hemisferio norte, presenta un área:",
          opciones: ["Endémica", "Zonal o circumterrestre", "Regional disyunta", "Iberomacaronésica"],
          correcta: 1,
          explicacion: "Es un área zonal (circumboreal): distribución continua a lo largo de una franja latitudinal o climática."
        },
        {
          tipo: "multiple",
          pregunta: "Erodium paularense, presente solo en unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
          opciones: ["Endémica", "Cosmopolita", "Circumterrestre", "Regional"],
          correcta: 0,
          explicacion: "Es un endemismo: área restringida a un territorio muy pequeño."
        },
        {
          tipo: "multiple",
          pregunta: "Aproximadamente, ¿cuántos endemismos vegetales alberga la Península Ibérica?",
          opciones: ["Menos de 100", "Unos 500", "Más de 1.500", "Más de 10.000"],
          correcta: 2,
          explicacion: "La Península Ibérica tiene una cifra altísima de endemismos vegetales, más de 1.500."
        },
        {
          tipo: "multiple",
          pregunta: "La distribución disyunta de las magnolias (Asia oriental y Centroamérica) se explica porque:",
          opciones: ["Fueron introducidas por el ser humano en ambos focos", "Las glaciaciones del Cuaternario fragmentaron una distribución antes mucho más amplia", "Son especies de origen reciente que aún se están expandiendo", "Sus semillas atraviesan el océano flotando"],
          correcta: 1,
          explicacion: "Eran abundantes en todo el hemisferio norte en el Terciario; las glaciaciones cuaternarias las extinguieron en Europa, dejando dos focos relictos."
        },
        {
          tipo: "multiple",
          pregunta: "Un elemento florístico agrupa plantas según:",
          opciones: ["Su parentesco taxonómico", "Su utilidad en jardinería", "Su origen biogeográfico y área de distribución típica", "Su forma de crecimiento"],
          correcta: 2,
          explicacion: "Especies con áreas de distribución parecidas pertenecen al mismo elemento florístico aunque no estén emparentadas taxonómicamente."
        },
        {
          tipo: "multiple",
          pregunta: "Olea europaea (olivo) es representante característico del elemento florístico:",
          opciones: ["Atlántico", "Boreoalpino", "Mediterráneo", "Saharo-índico"],
          correcta: 2,
          explicacion: "El olivo tiene área regional mediterránea y es especie tipo del elemento mediterráneo."
        },
        {
          tipo: "vf",
          pregunta: "Dos especies del mismo elemento florístico están necesariamente emparentadas taxonómicamente.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "El elemento florístico se define por el área de distribución compartida, con independencia del parentesco evolutivo."
        },
        {
          tipo: "multiple",
          pregunta: "La organización espacial de la vegetación se denomina zonación; la organización temporal se denomina:",
          opciones: ["Catena", "Dinamismo", "Sucesión geográfica", "Zonalidad"],
          correcta: 1,
          explicacion: "Zonación es el reparto espacial según factores físicos; dinamismo es el cambio de la vegetación con el tiempo."
        },
        {
          tipo: "multiple",
          pregunta: "Una catena de vegetación es:",
          opciones: ["Un listado florístico ordenado alfabéticamente", "Una serie ordenada de comunidades que se suceden a lo largo de un gradiente físico", "El conjunto de especies invasoras de una región", "Una clasificación de biomas por temperatura"],
          correcta: 1,
          explicacion: "Del latín «catena» (cadena): las comunidades se eslabonan unas tras otras a lo largo de un gradiente topográfico, de humedad, de salinidad, etc."
        },
        {
          tipo: "multiple",
          pregunta: "En una catena riparia típica de la Península, justo junto al cauce dominan:",
          opciones: ["Encinas (Quercus ilex)", "Sauces (Salix)", "Pinos silvestres (Pinus sylvestris)", "Esparto (Stipa tenacissima)"],
          correcta: 1,
          explicacion: "Pegados al agua dominan los sauces y, algo más arriba, alisos y chopos; al alejarse aparecen olmos, fresnos y finalmente encinas."
        },
        {
          tipo: "multiple",
          pregunta: "En el Macizo del Moncayo, la cara más verde y húmeda, con pinares y encinares vigorosos, es la vertiente:",
          opciones: ["Suroeste (solana, vista desde Soria)", "Noreste (umbría, vista desde Zaragoza)", "La cumbre, por encima del límite del arbolado", "Indistinta: ambas vertientes son iguales"],
          correcta: 1,
          explicacion: "La cara noreste es umbría, conserva más humedad edáfica y es más frondosa; la suroeste (solana) es más árida."
        },
        {
          tipo: "multiple",
          pregunta: "En las saladas de Bujaraloz, la planta que sobrevive en el centro de máxima concentración salina es:",
          opciones: ["Lygeum spartum", "Salicornia europaea", "Juncus maritimus", "Quercus ilex"],
          correcta: 1,
          explicacion: "Salicornia europaea, planta carnosa y articulada que acumula sal en sus tejidos, ocupa la cubeta central más salina."
        },
        {
          tipo: "multiple",
          pregunta: "Como regla aproximada, ascender 100 m en una montaña equivale térmicamente a un descenso de temperatura de:",
          opciones: ["0,6 °C", "3 °C", "6 °C", "0,06 °C"],
          correcta: 0,
          explicacion: "Cada 100 m de ascenso suponen unos -0,6 °C, equivalente a desplazarse 100-150 km hacia el polo."
        },
        {
          tipo: "multiple",
          pregunta: "El factor de cambio de la vegetación más importante a escala humana en la actualidad es:",
          opciones: ["La deriva continental", "El cambio en los usos del suelo", "Las erupciones volcánicas", "La circulación termohalina"],
          correcta: 1,
          explicacion: "El cambio en los usos del suelo (paso de bosque a cultivo, abandono ganadero, urbanización) es el motor actual; en España genera matorralización."
        },
        {
          tipo: "multiple",
          pregunta: "La especie invasora conocida como «uña de gato» sudafricana, frecuente en costas, es:",
          opciones: ["Ailanthus altissima", "Carpobrotus edulis", "Cistus salviifolius", "Atriplex glauca"],
          correcta: 1,
          explicacion: "Carpobrotus edulis (uña de gato sudafricana) desplaza a la flora autóctona en muchas regiones costeras."
        },
        {
          tipo: "multiple",
          pregunta: "Según Lomolino et al. (2006), un bioma es un gran tipo de vegetación que aparece en un clima particular y que lleva asociada:",
          opciones: ["Una fauna característica adaptada a esas condiciones", "Siempre las mismas especies en todos los continentes", "Un único tipo de suelo en todo el planeta", "Un conjunto de especies estrechamente emparentadas"],
          correcta: 0,
          explicacion: "El bioma combina vegetación, clima, suelo y una fauna característica; las especies de cada continente pueden no estar emparentadas pero comparten adaptaciones."
        },
        {
          tipo: "multiple",
          pregunta: "La clasificación de biomas de Lomolino et al. (2006) reconoce:",
          opciones: ["9 ecozonas", "10 biomas", "12 biomas", "5 grandes reinos"],
          correcta: 2,
          explicacion: "Lomolino (2006) reconoce 12 biomas; Schultz (2005) define 9 ecozonas y Walter (1970) distingue 10 biomas."
        },
        {
          tipo: "multiple",
          pregunta: "Los grandes cinturones desérticos del planeta (Sahara, Arabia, Kalahari) se sitúan en torno a los 30° de latitud porque allí:",
          opciones: ["Asciende aire húmedo que genera lluvias", "Desciende aire seco de los anticiclones subtropicales", "Convergen los frentes templados", "Se forma la Zona de Convergencia Intertropical"],
          correcta: 1,
          explicacion: "Hacia los 30° desciende el aire que perdió su humedad en el ecuador: anticiclones subtropicales secos que generan los grandes desiertos."
        },
        {
          tipo: "multiple",
          pregunta: "El diagrama de Whittaker ordena los biomas en función de dos variables principales:",
          opciones: ["Latitud y altitud", "Temperatura media anual y precipitación media anual", "pH del suelo y salinidad", "Insolación y velocidad del viento"],
          correcta: 1,
          explicacion: "Sus ejes son la temperatura media anual y la precipitación media anual; añade además estacionalidad y fuegos como factores moduladores."
        },
        {
          tipo: "multiple",
          pregunta: "En un climograma, los meses en que la curva de precipitación queda por debajo de la de temperatura indican:",
          opciones: ["Meses húmedos con exceso de agua", "Meses con déficit hídrico (estación seca)", "Meses sin actividad fotosintética", "Riesgo de heladas"],
          correcta: 1,
          explicacion: "Cuando la precipitación cae por debajo de la temperatura hay déficit hídrico: la estación seca, típica del verano mediterráneo."
        },
        {
          tipo: "multiple",
          pregunta: "Una localidad con temperatura media de 14 °C y 600 mm de lluvia concentrada en otoño-invierno, con verano muy seco, corresponde al bioma:",
          opciones: ["Taiga", "Bosque mediterráneo esclerófilo", "Pluviselva tropical", "Tundra"],
          correcta: 1,
          explicacion: "Clima templado con sequía estival y lluvia repartida en la estación fría: rasgo inequívoco del bosque mediterráneo."
        }
      ]
    },
    // =========================================================================
    // TEST 2
    // =========================================================================
    {
      id: "T3-2",
      titulo: "Tema 3 · Test 2",
      preguntas: [
        {
          tipo: "multiple",
          pregunta: "La flora de un territorio se recopila tradicionalmente en:",
          opciones: ["Climogramas y diagramas de Whittaker", "Catálogos florísticos, guías y floras descriptivas", "Mapas de biomas y ecozonas", "Inventarios de fauna asociada"],
          correcta: 1,
          explicacion: "Catálogos (listados comentados), guías (con claves de identificación) y floras descriptivas (obras enciclopédicas) recogen la flora."
        },
        {
          tipo: "vf",
          pregunta: "Una misma flora puede dar lugar a vegetaciones distintas según factores locales como la orientación de la ladera.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Con las mismas especies, en la solana puede dominar un encinar abierto con jaras y en la umbría un alcornocal denso: misma flora, distinta vegetación."
        },
        {
          tipo: "multiple",
          pregunta: "El «tapiz vegetal» que vemos al mirar al campo, con su organización y abundancia, corresponde al concepto de:",
          opciones: ["Flora", "Vegetación", "Elemento florístico", "Área de distribución"],
          correcta: 1,
          explicacion: "La vegetación es la expresión real y cuantitativa de las plantas en el espacio y el tiempo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuál de estas situaciones corresponde a un filtro biótico?",
          opciones: ["Una semilla no germina por falta de agua útil", "Una planta no prospera porque los herbívoros se comen sus plántulas", "Una semilla no llega porque no cruza una barrera oceánica", "Una especie muere por exceso de salinidad en el suelo"],
          correcta: 1,
          explicacion: "La herbivoría es una interacción con otros seres vivos: filtro biótico. La falta de agua o el exceso de sal serían abióticos; la barrera oceánica, dispersión."
        },
        {
          tipo: "multiple",
          pregunta: "El orden correcto en que actúan los tres grandes filtros ecológicos sobre el reservorio regional es:",
          opciones: ["Abiótico → biótico → dispersión", "Biótico → dispersión → abiótico", "Dispersión → abiótico → biótico", "Dispersión → biótico → abiótico"],
          correcta: 2,
          explicacion: "Primero la semilla debe llegar (dispersión), luego sobrevivir al medio físico (abiótico) y por último a las interacciones (biótico)."
        },
        {
          tipo: "multiple",
          pregunta: "La familia Palmaceae, distribuida en una franja en torno al ecuador, presenta un área:",
          opciones: ["Endémica", "Zonal circuntropical", "Regional disyunta", "Cosmopolita"],
          correcta: 1,
          explicacion: "Es un área zonal de tipo circuntropical: continua a lo largo de la franja tropical."
        },
        {
          tipo: "multiple",
          pregunta: "El interés especial de los endemismos para la conservación se debe a que:",
          opciones: ["Crecen muy rápido y son fáciles de cultivar", "No existen en ningún otro lugar del mundo, así que su pérdida local es definitiva", "Siempre son cosmopolitas y resistentes", "Solo viven en jardines botánicos"],
          correcta: 1,
          explicacion: "Un endemismo está restringido a un territorio pequeño: si desaparece allí, desaparece para siempre."
        },
        {
          tipo: "multiple",
          pregunta: "Además de las magnolias, presentan disyunción Asia oriental-América géneros relictos como:",
          opciones: ["Quercus, Pinus y Cistus", "Liriodendron, Sassafras y Liquidambar", "Salix, Populus y Alnus", "Stipa, Lygeum y Atriplex"],
          correcta: 1,
          explicacion: "Liriodendron (tulipanero), Sassafras y Liquidambar muestran el mismo patrón de disyunción relicta entre Asia y América."
        },
        {
          tipo: "multiple",
          pregunta: "La especie característica del elemento florístico cosmopolita citada en el tema es:",
          opciones: ["Portulaca oleracea", "Montia fontana", "Quercus robur", "Cistus salviifolius"],
          correcta: 1,
          explicacion: "Montia fontana se usa como ejemplo de elemento cosmopolita; Portulaca oleracea ilustra el subcosmopolita."
        },
        {
          tipo: "multiple",
          pregunta: "Quercus robur, propio de las zonas oceánicas del oeste de Europa, representa el elemento florístico:",
          opciones: ["Mediterráneo", "Atlántico", "Saharo-índico", "Irano-turánico"],
          correcta: 1,
          explicacion: "El roble carballo (Quercus robur) es ejemplo del elemento atlántico, de clima oceánico húmedo."
        },
        {
          tipo: "multiple",
          pregunta: "Stipa tenacissima (esparto) es especie característica del elemento florístico:",
          opciones: ["Mediterráneo occidental", "Cantábrico", "Boreoalpino", "Iberomacaronésico"],
          correcta: 0,
          explicacion: "El esparto es típico del elemento mediterráneo occidental, ligado a ambientes áridos del oeste de la cuenca."
        },
        {
          tipo: "vf",
          pregunta: "Combinar en un jardín especies del mismo elemento florístico facilita un diseño bajo en mantenimiento.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Comparten requisitos de clima, suelo y estrategias de uso del agua, lo que garantiza compatibilidad ecológica; mezclar elementos muy distintos suele dar problemas."
        },
        {
          tipo: "multiple",
          pregunta: "A escala global, la cantidad de radiación solar que recibe un punto depende sobre todo de:",
          opciones: ["El tipo de suelo", "La latitud (ángulo de incidencia) y la estacionalidad", "La salinidad del agua oceánica", "La altitud exclusivamente"],
          correcta: 1,
          explicacion: "El ángulo con que inciden los rayos cambia con la latitud, y la inclinación del eje terrestre genera la estacionalidad."
        },
        {
          tipo: "multiple",
          pregunta: "Madrid y Pekín están casi en el mismo paralelo (40° N) pero tienen climas muy distintos. La causa principal es:",
          opciones: ["La diferencia de altitud entre ambas", "La configuración de los continentes y océanos", "La distinta composición del suelo", "Que están en hemisferios diferentes"],
          correcta: 1,
          explicacion: "Madrid está moderada por el Atlántico cercano; Pekín, rodeada de masa continental asiática, recibe aire siberiano: continentalidad frente a oceanidad."
        },
        {
          tipo: "multiple",
          pregunta: "En la catena altitudinal típica, por encima del roble melojo (Quercus pyrenaica) y antes de los pastos de cumbre aparece:",
          opciones: ["El sauce (Salix)", "El pino silvestre (Pinus sylvestris)", "La encina (Quercus ilex)", "El esparto (Stipa tenacissima)"],
          correcta: 1,
          explicacion: "Al ascender se pasa de mediterránea a templada y fría: encina → roble melojo → pino silvestre → pastos altimontanos."
        },
        {
          tipo: "multiple",
          pregunta: "Al ascender por una montaña tropical alta, la secuencia de vegetación reproduce aproximadamente la que se observa al:",
          opciones: ["Bajar en altitud hacia el mar", "Desplazarse desde el ecuador hacia el polo", "Avanzar de una costa al interior continental", "Pasar de la solana a la umbría"],
          correcta: 1,
          explicacion: "El gradiente altitudinal y el latitudinal son equivalentes porque ambos implican descenso de temperatura: selva → templado → coníferas → tundra → nieves perpetuas."
        },
        {
          tipo: "multiple",
          pregunta: "Entre los factores de dinamismo de la vegetación, ¿cuál opera en la escala de millones de años?",
          opciones: ["Las invasiones biológicas", "La acción humana directa", "Los cambios geográficos por tectónica", "Los incendios catastróficos"],
          correcta: 2,
          explicacion: "La tectónica (deriva continental, formación y erosión de cordilleras) actúa en millones de años; las invasiones operan en años-décadas."
        },
        {
          tipo: "multiple",
          pregunta: "El «ailanto chino», invasor frecuente en zonas urbanas y de ribera, es:",
          opciones: ["Carpobrotus edulis", "Ailanthus altissima", "Retama sphaerocarpa", "Tamarix gallica"],
          correcta: 1,
          explicacion: "Ailanthus altissima (ailanto chino) es una de las invasoras más problemáticas en ambientes urbanos y alterados."
        },
        {
          tipo: "multiple",
          pregunta: "El bioma de bosque mediterráneo (esclerófilo) reaparece, con vegetación convergente, en regiones como:",
          opciones: ["Amazonia, Congo y Sudeste asiático", "California, Chile central, Sudáfrica y el suroeste de Australia", "Siberia, Canadá y Escandinavia", "Sahara, Arabia y Gobi"],
          correcta: 1,
          explicacion: "El clima mediterráneo aparece en cinco regiones del mundo; sus plantas, no emparentadas, convergen en hojas esclerófilas y resistencia al fuego."
        },
        {
          tipo: "multiple",
          pregunta: "La clasificación de Schultz (2005) organiza la superficie terrestre en:",
          opciones: ["12 biomas", "9 ecozonas según régimen de lluvias y temperaturas", "10 biomas cartográficos", "5 grandes dominios florísticos"],
          correcta: 1,
          explicacion: "Schultz (2005) define 9 ecozonas; Lomolino reconoce 12 biomas y Walter 10."
        },
        {
          tipo: "multiple",
          pregunta: "El mapa de biomas que sigue siendo la representación cartográfica más usada, con 10 grandes biomas, es el de:",
          opciones: ["Lomolino (2006)", "Whittaker", "Walter (1970)", "Broecker (1991)"],
          correcta: 2,
          explicacion: "El mapa de Walter (1970) distingue 10 biomas y es la base de muchos mapas biogeográficos."
        },
        {
          tipo: "multiple",
          pregunta: "Las grandes células de la circulación atmosférica global son:",
          opciones: ["Hadley, Ferrel y polares", "Coriolis, alisia y monzónica", "Tropical, templada y boreal", "ITCZ, anticiclónica y frontal"],
          correcta: 0,
          explicacion: "El sistema se organiza en células de Hadley, Ferrel y polares, que redistribuyen calor y humedad del ecuador a los polos."
        },
        {
          tipo: "multiple",
          pregunta: "En la Zona de Convergencia Intertropical (ITCZ), sobre el ecuador, el aire caliente y húmedo:",
          opciones: ["Desciende y genera desiertos", "Asciende y genera lluvias torrenciales y selvas", "Se desplaza horizontalmente sin precipitar", "Se enfría y produce heladas"],
          correcta: 1,
          explicacion: "En el ecuador el aire asciende, se enfría, condensa y provoca lluvias intensas que sostienen las selvas pluviales."
        },
        {
          tipo: "multiple",
          pregunta: "El efecto Coriolis, debido a la rotación terrestre, es responsable de:",
          opciones: ["La inclinación del eje terrestre", "La existencia de los vientos alisios y los vientos del oeste", "El descenso de la temperatura con la altitud", "La acumulación de sal en suelos endorreicos"],
          correcta: 1,
          explicacion: "Coriolis desvía los flujos de aire: genera los alisios del este en los trópicos y los vientos del oeste en latitudes templadas."
        },
        {
          tipo: "multiple",
          pregunta: "Un viaje completo del agua a través de la circulación termohalina («cinta transportadora») tarda aproximadamente:",
          opciones: ["1 a 5 años", "50 a 100 años", "1.000 a 1.500 años", "1 millón de años"],
          correcta: 2,
          explicacion: "El recorrido completo de la cinta transportadora oceánica dura entre 1.000 y 1.500 años."
        },
        {
          tipo: "multiple",
          pregunta: "La corriente del Golfo, rama atlántica superficial de la circulación termohalina, es importante porque:",
          opciones: ["Enfría el norte de Europa", "Lleva agua caliente del Caribe al norte de Europa, suavizando su clima", "Provoca los desiertos subtropicales", "Genera la estación seca mediterránea"],
          correcta: 1,
          explicacion: "Transporta calor del Caribe hacia el norte de Europa, regalando a Inglaterra y Noruega un clima más templado del que les correspondería por latitud."
        },
        {
          tipo: "multiple",
          pregunta: "Según el diagrama de Whittaker, los biomas más productivos en biomasa por hectárea y año son:",
          opciones: ["La tundra y el desierto", "La taiga y la estepa", "La selva tropical pluvial y el bosque pluvial templado", "El bosque mediterráneo y la sabana"],
          correcta: 2,
          explicacion: "Los más productivos son la selva tropical pluvial y el bosque pluvial templado (cálidos y muy húmedos); los menos, la tundra y el desierto."
        },
        {
          tipo: "vf",
          pregunta: "Según el diagrama de Whittaker, el desierto se define únicamente por presentar temperaturas elevadas.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "El desierto ocupa el rincón seco del diagrama con independencia de la temperatura: lo define la escasez de precipitación, no el calor."
        },
        {
          tipo: "multiple",
          pregunta: "En la tabla resumen, el bioma con temperaturas medias entre 10 y 18 °C, lluvia de 300-1000 mm y fuegos recurrentes es:",
          opciones: ["La taiga", "El bosque mediterráneo esclerófilo", "La pluviselva tropical", "La tundra"],
          correcta: 1,
          explicacion: "Esos rasgos (verano seco y caluroso, invierno templado y lluvioso, fuegos) definen el bosque mediterráneo esclerófilo."
        },
        {
          tipo: "multiple",
          pregunta: "En un climograma de Walter-Lieth, ¿qué representan los dos ejes verticales?",
          opciones: ["Latitud a la izquierda y altitud a la derecha", "Temperatura media mensual a la izquierda y precipitación media mensual a la derecha", "Precipitación a la izquierda y evaporación a la derecha", "Insolación a la izquierda y humedad a la derecha"],
          correcta: 1,
          explicacion: "Eje izquierdo: temperatura media mensual (°C, curva negra); eje derecho: precipitación media mensual (mm, curva azul); en el horizontal, los meses."
        }
      ]
    },
    // =========================================================================
    // TEST 3
    // =========================================================================
    {
      id: "T3-3",
      titulo: "Tema 3 · Test 3",
      preguntas: [
        {
          tipo: "vf",
          pregunta: "Al hablar de flora interesa saber cuántos individuos hay de cada especie y en qué proporción.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Eso pertenece a la vegetación. La flora es cualitativa: cuáles son las especies, cómo son y dónde viven."
        },
        {
          tipo: "multiple",
          pregunta: "La monografía especializada en musgos y hepáticas de la Península citada en el tema es:",
          opciones: ["Flora Europaea", "Flora Briofítica Ibérica", "Flora Vascular de Andalucía Oriental", "Flora iberica"],
          correcta: 1,
          explicacion: "La Flora Briofítica Ibérica (UMU/SEB) está dedicada a los briófitos (musgos y hepáticas)."
        },
        {
          tipo: "multiple",
          pregunta: "La vegetación integra, además de la organización en el espacio, la abundancia de cada especie y:",
          opciones: ["Solo el listado de especies presentes", "Los cambios espaciales y temporales y los factores que la han determinado", "Exclusivamente el tipo de suelo", "Únicamente la fauna asociada"],
          correcta: 1,
          explicacion: "La vegetación integra organización, abundancia, cambios espaciales y temporales y todos los factores ecológicos e históricos que la han modelado."
        },
        {
          tipo: "vf",
          pregunta: "El reservorio regional o species pool incluye únicamente las especies que efectivamente conviven en el sitio.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "El species pool son las especies que «podrían» vivir allí; las que efectivamente coocurren, tras pasar los filtros, forman la comunidad."
        },
        {
          tipo: "multiple",
          pregunta: "Que las semillas de una planta de Hawái no lleguen nunca a la Península por no cruzar el océano ilustra el filtro:",
          opciones: ["Abiótico", "Biótico", "De dispersión", "Edáfico"],
          correcta: 2,
          explicacion: "Una barrera geográfica que impide la llegada del propágulo es un filtro de dispersión."
        },
        {
          tipo: "multiple",
          pregunta: "El área de distribución de una especie es el resultado de tres tipos de factores:",
          opciones: ["Suelo, altitud y orientación", "Geografía, clima e interacciones con otras especies", "Temperatura, salinidad y fuego", "Latitud, longitud y altitud"],
          correcta: 1,
          explicacion: "La geografía (barreras y corredores), el clima (límites de tolerancia) y las interacciones bióticas determinan el área de cada especie."
        },
        {
          tipo: "multiple",
          pregunta: "Los límites máximo y mínimo de temperatura, lluvia o salinidad que una especie puede soportar constituyen sus:",
          opciones: ["Elementos florísticos", "Rangos de tolerancia ambientales", "Filtros de dispersión", "Catenas de vegetación"],
          correcta: 1,
          explicacion: "Cada especie tiene unos rangos de tolerancia propios; su área de distribución refleja esos rangos, aunque cambien con el tiempo."
        },
        {
          tipo: "multiple",
          pregunta: "Un área de distribución endémica se caracteriza por estar:",
          opciones: ["Presente en casi todos los continentes", "Distribuida a lo largo de una franja latitudinal continua", "Restringida a un territorio muy pequeño, como una isla o una montaña", "Repartida de forma disyunta entre dos continentes"],
          correcta: 2,
          explicacion: "El endemismo está limitado a un territorio reducido (una isla, una montaña, una región biogeográfica)."
        },
        {
          tipo: "multiple",
          pregunta: "Las magnolias fueron abundantes en todo el hemisferio norte durante:",
          opciones: ["El Cuaternario reciente", "El Terciario (hace 30-50 millones de años)", "La última glaciación", "El Holoceno"],
          correcta: 1,
          explicacion: "Eran abundantes en el Terciario; las glaciaciones cuaternarias fragmentaron su distribución dejando focos relictos."
        },
        {
          tipo: "multiple",
          pregunta: "Retama sphaerocarpa es especie característica del elemento florístico:",
          opciones: ["Iberonorteafricano", "Boreoalpino", "Cantábrico", "Holártico"],
          correcta: 0,
          explicacion: "La retama representa el elemento iberonorteafricano, repartido entre la Península Ibérica y el norte de África."
        },
        {
          tipo: "multiple",
          pregunta: "Onopordum nervosum, propio del territorio peninsular, ejemplifica el elemento florístico:",
          opciones: ["Atlántico", "Mediterráneo occidental", "Ibérico", "Irano-turánico"],
          correcta: 2,
          explicacion: "Es ejemplo del elemento ibérico (endémico de la Península)."
        },
        {
          tipo: "vf",
          pregunta: "Mezclar en un mismo jardín una especie atlántica con otra saharo-índica suele dar buenos resultados y poco mantenimiento.",
          opciones: ["Verdadero", "Falso"],
          correcta: 1,
          explicacion: "Mezclar elementos muy distintos suele dar problemas: una de ellas muere o exige riegos y cuidados que rompen la idea de jardín bajo en mantenimiento."
        },
        {
          tipo: "multiple",
          pregunta: "A escala local, ¿cuál de estos factores genera zonación de la vegetación?",
          opciones: ["La latitud y la estacionalidad globales", "La altitud, la orientación, la salinidad y el tipo de sustrato", "La circulación termohalina", "La deriva continental"],
          correcta: 1,
          explicacion: "Dentro de un mismo clima regional, factores físicos locales (altitud, orientación, profundidad y salinidad del suelo, agua, sustrato) generan la zonación."
        },
        {
          tipo: "multiple",
          pregunta: "Las especies de la parte baja de una catena riparia (sauces, alisos, chopos) comparten la necesidad de:",
          opciones: ["Suelos muy salinos", "Tener las raíces en contacto con el nivel freático", "Resistir fuegos recurrentes", "Vivir por encima del límite del arbolado"],
          correcta: 1,
          explicacion: "Son especies ligadas al agua: requieren contacto de las raíces con el freático; al alejarse del cauce y secarse el suelo, las sustituyen olmos, fresnos y encinas."
        },
        {
          tipo: "multiple",
          pregunta: "La vertiente suroeste del Moncayo, vista desde Soria, presenta un paisaje:",
          opciones: ["Verde y muy arbolado, con pinares vigorosos", "Más árido, con pastizales y matorrales bajos", "Cubierto de hielo permanente", "Idéntico al de la cara noreste"],
          correcta: 1,
          explicacion: "La cara suroeste es solana: recibe más radiación, conserva menos humedad y resulta más árida que la umbría del noreste."
        },
        {
          tipo: "multiple",
          pregunta: "En las orillas menos salinas y más altas de las saladas de Bujaraloz dominan los albardinares con:",
          opciones: ["Salicornia europaea", "Lygeum spartum", "Juncus maritimus", "Limonium ovalifolium"],
          correcta: 1,
          explicacion: "En las zonas más altas y menos salinas aparecen los albardinares con Lygeum spartum y otras gramíneas."
        },
        {
          tipo: "multiple",
          pregunta: "Las saladas de Bujaraloz acumulan sal porque son zonas:",
          opciones: ["De alta montaña con permafrost", "Endorreicas con fuerte evaporación, donde el agua se concentra", "Costeras batidas por el oleaje", "De clima oceánico muy lluvioso"],
          correcta: 1,
          explicacion: "Al no tener salida al mar (endorreicas) y evaporarse intensamente, el agua se concentra y el suelo acumula sales, generando zonaciones de halófilas."
        },
        {
          tipo: "multiple",
          pregunta: "Las invasiones biológicas, como factor de dinamismo de la vegetación, actúan típicamente en una escala de:",
          opciones: ["Millones de años", "Años a décadas", "Inmediata, en segundos", "Decenas de milenios"],
          correcta: 1,
          explicacion: "Las especies invasoras introducidas desplazan a la flora local en escalas de años a décadas."
        },
        {
          tipo: "multiple",
          pregunta: "El abandono rural masivo en España ha provocado, como cambio en los usos del suelo:",
          opciones: ["Una expansión de los cultivos de regadío", "Una matorralización que aumenta la biomasa combustible y favorece grandes incendios", "Una pérdida total de la cubierta vegetal", "Un descenso de la temperatura media regional"],
          correcta: 1,
          explicacion: "Los pastos y campos abandonados se llenan de pinos, encinas jóvenes y jaras; esa biomasa, con el cambio climático, alimenta el nuevo régimen de grandes incendios."
        },
        {
          tipo: "multiple",
          pregunta: "El bioma de máxima diversidad biológica, cálido y húmedo todo el año, es:",
          opciones: ["La sabana", "El bosque mediterráneo", "La pluviselva tropical", "La taiga"],
          correcta: 2,
          explicacion: "La pluviselva tropical, en clima ecuatorial cálido y húmedo todo el año, alberga la máxima diversidad."
        },
        {
          tipo: "multiple",
          pregunta: "En la tabla comparativa, el desierto se define por una precipitación anual:",
          opciones: ["Inferior a 250 mm", "Entre 500 y 1500 mm", "Superior a 2000 mm", "Entre 750 y 1500 mm"],
          correcta: 0,
          explicacion: "El desierto recibe menos de 250 mm anuales, con temperaturas extremas y vegetación xerófita, suculenta o efímera."
        },
        {
          tipo: "multiple",
          pregunta: "En la circulación atmosférica, hacia los 60° de latitud el aire:",
          opciones: ["Desciende y forma anticiclones secos", "Asciende, generando frentes templados y lluvias frecuentes", "Se mantiene inmóvil sobre los polos", "Genera los grandes desiertos subtropicales"],
          correcta: 1,
          explicacion: "Hacia los 60° el aire vuelve a ascender (frentes templados, lluvias frecuentes); desciende seco en el ecuador-no, en los 30° y en los polos."
        },
        {
          tipo: "multiple",
          pregunta: "La circulación termohalina oceánica está movida fundamentalmente por:",
          opciones: ["El viento superficial únicamente", "Las diferencias de temperatura y salinidad del agua", "La rotación de la Luna", "La radiación solar directa sobre el fondo marino"],
          correcta: 1,
          explicacion: "El agua fría y salina del Atlántico Norte, más densa, se hunde y alimenta la rama profunda: el motor es la densidad (temperatura + salinidad)."
        },
        {
          tipo: "multiple",
          pregunta: "El fuego actúa como factor ecológico estructural sobre todo en cuatro biomas:",
          opciones: ["Tundra, desierto polar, pluviselva y desierto", "Taiga, bosque mediterráneo, estepas/praderas y sabanas", "Bosque templado caducifolio, pluviselva templada, manglar y desierto", "Sabana, tundra, taiga y selva amazónica"],
          correcta: 1,
          explicacion: "En la taiga, el bosque mediterráneo, las estepas/praderas y las sabanas los fuegos son recurrentes y han ejercido presión selectiva durante millones de años."
        },
        {
          tipo: "multiple",
          pregunta: "Las piñas serótinas de Pinus halepensis constituyen una adaptación que consiste en:",
          opciones: ["Liberar semillas continuamente durante todo el año", "Abrirse solo con el calor del fuego para dispersar las semillas tras el incendio", "Resistir el fuego sin liberar nunca las semillas", "Germinar únicamente en suelos salinos"],
          correcta: 1,
          explicacion: "Las piñas serótinas permanecen cerradas y solo se abren con el calor del fuego, asegurando la regeneración tras el incendio."
        },
        {
          tipo: "multiple",
          pregunta: "Según Pausas (2022), el principal factor del incremento reciente de incendios en España es:",
          opciones: ["El aumento del número de igniciones intencionadas", "La acumulación de biomasa combustible por abandono rural, amplificada por el cambio climático", "La repoblación con especies autóctonas", "La disminución de las temperaturas estivales"],
          correcta: 1,
          explicacion: "Pausas señala la matorralización por abandono rural como causa, amplificada por el cambio climático; el cambio es en la gravedad de los incendios, no en su número."
        },
        {
          tipo: "multiple",
          pregunta: "Para generar paisajes resilientes al nuevo régimen de incendios, Pausas (2022) propone principalmente:",
          opciones: ["Plantar grandes masas continuas de una sola especie inflamable", "Un mosaico de usos con pastoreo extensivo y especies autóctonas poco inflamables", "Suprimir por completo cualquier fuego del paisaje mediterráneo", "Sustituir el bosque autóctono por especies exóticas de crecimiento rápido"],
          correcta: 1,
          explicacion: "Recomienda un mosaico de usos (matorral, bosque, pasto, cultivos), recuperar el pastoreo extensivo, usar autóctonas de baja inflamabilidad y reducir la continuidad del combustible."
        },
        {
          tipo: "multiple",
          pregunta: "En un climograma, la estación de crecimiento se define como el periodo en que:",
          opciones: ["La precipitación supera los 100 mm mensuales", "La temperatura supera unos 5 °C y hay agua disponible", "No hay riesgo de heladas en absoluto", "La curva de temperatura queda por debajo de la de precipitación"],
          correcta: 1,
          explicacion: "La estación de crecimiento requiere temperatura por encima de unos 5 °C y disponibilidad de agua."
        },
        {
          tipo: "vf",
          pregunta: "En un climograma de Walter-Lieth, cuando la precipitación supera los 100 mm mensuales la escala del eje se reduce a un décimo.",
          opciones: ["Verdadero", "Falso"],
          correcta: 0,
          explicacion: "Por convenio, a partir de 100 mm/mes la escala de precipitación se comprime a 1/10 para que la gráfica no se dispare."
        },
        {
          tipo: "multiple",
          pregunta: "Una estación con temperatura media de -2 °C, 400 mm de lluvia, inviernos largos y muy fríos y veranos cortos y frescos corresponde al bioma:",
          opciones: ["Sabana", "Bosque mediterráneo", "Taiga (bosque boreal)", "Pluviselva templada"],
          correcta: 2,
          explicacion: "Inviernos largos y fríos con veranos frescos y lluvia moderada son propios de la taiga, dominada por coníferas perennifolias."
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_T3; }
if (typeof window !== 'undefined') { window.sandra_botanica_T3 = sandra_botanica_T3; }
