// ============================================================================
// sandra_botanica_generales.js · Botánica · Grado en Paisajismo (URJC) 2025/2026
// 60 EXÁMENES GENERALES = 20 sencillo + 20 medio + 20 complicado, 30 preguntas cada uno.
// ============================================================================
const sandra_botanica_generales = {
  "penalizacionPorFallo": 0.3,
  "preguntasPorExamen": 30,
  "examenesPorNivel": 20,
  "niveles": {
    "sencillo": [
      {
        "id": "GEN-S-01",
        "nombre": "Examen sencillo 1",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "Los tejidos vasculares",
              "La semilla",
              "El fruto",
              "La flor"
            ],
            "correcta": 0,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Rupícola",
              "Climácica",
              "De ribera o riparia",
              "Halófila"
            ],
            "correcta": 2,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Gipsófilas",
              "Calcícolas",
              "Halófilas",
              "Psamófilas"
            ],
            "correcta": 2,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Un catálogo florístico",
              "Una sola especie dominante",
              "Una comunidad de un solo estrato",
              "Un gran tipo de vegetación asociado a un clima"
            ],
            "correcta": 3,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Gimnospermas",
              "Angiospermas",
              "Pteridófitos",
              "Briófitos"
            ],
            "correcta": 3,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El núcleo",
              "El aparato de Golgi",
              "El cloroplasto",
              "La mitocondria"
            ],
            "correcta": 2,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Su tallo cuadrangular y aroma",
              "Sus hojas en aguja",
              "Sus flores en cabezuela",
              "Sus frutos en legumbre"
            ],
            "correcta": 0,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "La raíz",
              "La hoja",
              "El tallo leñoso",
              "El fruto"
            ],
            "correcta": 3,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "El suelo es salino",
              "Falta luz",
              "Hace demasiado calor"
            ],
            "correcta": 0,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Orchidaceae",
              "Leguminosae",
              "Cactaceae",
              "Poaceae"
            ],
            "correcta": 1,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Pradera",
              "Tundra",
              "Estepa",
              "Taiga o bosque boreal"
            ],
            "correcta": 3,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Está restringida a un territorio concreto",
              "Carece de flores",
              "Ha sido introducida por el hombre",
              "Vive en todos los continentes"
            ],
            "correcta": 0,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "La cera de las hojas",
              "El ládano, una resina aromática",
              "El néctar",
              "El polen"
            ],
            "correcta": 1,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Esteparia",
              "Húmeda o eurosiberiana",
              "Mediterránea seca",
              "Litoral árido"
            ],
            "correcta": 1,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un bosque cerrado perenne",
              "Un matorral costero",
              "Un desierto sin vegetación",
              "Una formación de gramíneas con árboles dispersos"
            ],
            "correcta": 3,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Catena",
              "Límite del árbol o treeline",
              "Permafrost",
              "Podsol"
            ],
            "correcta": 1,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Cactaceae",
              "Crassulaceae",
              "Bromeliaceae",
              "Euphorbiaceae"
            ],
            "correcta": 3,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Azotobacter",
              "Frankia",
              "Rhizobium",
              "Nitrosomonas"
            ],
            "correcta": 2,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protonema",
              "Gametófito haploide",
              "Esporófito diploide",
              "Protalo"
            ],
            "correcta": 2,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El melojo",
              "La encina",
              "El alcornoque",
              "El quejigo"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Vive sumergido",
              "Procede de la degradación del bosque",
              "Es la vegetación final y estable",
              "Crece solo sobre yeso"
            ],
            "correcta": 1,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Atraer polinizadores",
              "Almacenar agua",
              "Que la nieve resbale sin romper las ramas",
              "Captar más viento"
            ],
            "correcta": 2,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Aparasolada",
              "Llorona",
              "Cónica perfecta",
              "Columnar estrecha"
            ],
            "correcta": 0,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          }
        ]
      },
      {
        "id": "GEN-S-02",
        "nombre": "Examen sencillo 2",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Fabaceae",
              "Poaceae",
              "Cyperaceae",
              "Juncaceae"
            ],
            "correcta": 1,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Nódulo radical",
              "Haustorio",
              "Liquen",
              "Micorriza"
            ],
            "correcta": 3,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Árboles altos",
              "Arbustos",
              "Gramíneas",
              "Musgos"
            ],
            "correcta": 1,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Floema",
              "Cámbium",
              "Periciclo",
              "Xilema"
            ],
            "correcta": 0,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Las dunas costeras",
              "Las turberas atlánticas",
              "La alta montaña húmeda",
              "Los páramos fríos y secos del interior"
            ],
            "correcta": 3,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Holdridge",
              "Whittaker",
              "Walter-Lieth",
              "Raunkiær"
            ],
            "correcta": 1,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Semilla",
              "Bulbo subterráneo",
              "Yema sobre el suelo",
              "Tronco leñoso"
            ],
            "correcta": 0,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Carnosas y suculentas",
              "Grandes y blandas",
              "Aciculares en fascículos",
              "Esclerófilas, duras y perennes"
            ],
            "correcta": 3,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Moder",
              "Mor",
              "Turba",
              "Mull"
            ],
            "correcta": 3,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "La palmera datilera",
              "El cocotero",
              "La palmera canaria",
              "El palmito Chamaerops humilis"
            ],
            "correcta": 3,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus pyrenaica",
              "Quercus robur",
              "Quercus ilex subsp. ballota",
              "Quercus suber"
            ],
            "correcta": 2,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "El citosol",
              "La membrana del tilacoide",
              "El estroma del cloroplasto",
              "La matriz mitocondrial"
            ],
            "correcta": 2,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "No produce semillas",
              "Permanece cerrado y se abre tras el fuego",
              "Es carnoso y comestible",
              "Cae verde al suelo"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Una larga estación seca",
              "Suelos muy fértiles y profundos",
              "Calor y humedad elevados todo el año",
              "Heladas frecuentes"
            ],
            "correcta": 2,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Gipsófilas",
              "Halófilas",
              "Psamófilas",
              "Calcícolas"
            ],
            "correcta": 1,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Epífitas",
              "Suculentas",
              "Halófitas",
              "Parásitas"
            ],
            "correcta": 0,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Que la nieve resbale sin romper las ramas",
              "Atraer polinizadores",
              "Captar más viento",
              "Almacenar agua"
            ],
            "correcta": 0,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Trepador",
              "Epífito",
              "Arbóreo alto",
              "Bajo, almohadillado o rastrero"
            ],
            "correcta": 3,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Endémica",
              "Invasora",
              "Cosmopolita",
              "Relicta"
            ],
            "correcta": 1,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Fotosintetizar sin luz",
              "Fijar nitrógeno",
              "Abrir los estomas de noche para ahorrar agua",
              "Crecer sin raíces"
            ],
            "correcta": 2,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Azúcares desde las hojas",
              "Oxígeno hacia las raíces",
              "Hormonas en ambos sentidos",
              "Agua y sales minerales desde la raíz"
            ],
            "correcta": 3,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "Nunca, es perenne",
              "En otoño-invierno por el frío",
              "Solo tras un incendio",
              "En verano por la sequía"
            ],
            "correcta": 1,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Dunas",
              "Salares",
              "Podsoles",
              "Turberas"
            ],
            "correcta": 3,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          }
        ]
      },
      {
        "id": "GEN-S-03",
        "nombre": "Examen sencillo 3",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Gimnospermas",
              "Briófitos",
              "Pteridófitos",
              "Angiospermas"
            ],
            "correcta": 1,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Epífito",
              "Trepador",
              "Arbóreo alto",
              "Bajo, almohadillado o rastrero"
            ],
            "correcta": 3,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Cactaceae",
              "Orchidaceae",
              "Poaceae",
              "Leguminosae"
            ],
            "correcta": 3,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Floema",
              "Xilema",
              "Cámbium",
              "Periciclo"
            ],
            "correcta": 0,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Heladas frecuentes",
              "Suelos muy fértiles y profundos",
              "Calor y humedad elevados todo el año",
              "Una larga estación seca"
            ],
            "correcta": 2,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Climácica",
              "Rupícola",
              "Halófila",
              "De ribera o riparia"
            ],
            "correcta": 3,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Llorona",
              "Aparasolada",
              "Columnar estrecha",
              "Cónica perfecta"
            ],
            "correcta": 1,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El ládano, una resina aromática",
              "El polen",
              "El néctar",
              "La cera de las hojas"
            ],
            "correcta": 0,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Ha sido introducida por el hombre",
              "Está restringida a un territorio concreto",
              "Vive en todos los continentes",
              "Carece de flores"
            ],
            "correcta": 1,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "La hoja",
              "El tallo leñoso",
              "El fruto",
              "La raíz"
            ],
            "correcta": 2,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Procede de la degradación del bosque",
              "Crece solo sobre yeso",
              "Vive sumergido",
              "Es la vegetación final y estable"
            ],
            "correcta": 0,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Hormonas en ambos sentidos",
              "Agua y sales minerales desde la raíz",
              "Oxígeno hacia las raíces",
              "Azúcares desde las hojas"
            ],
            "correcta": 1,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Frankia",
              "Rhizobium",
              "Nitrosomonas",
              "Azotobacter"
            ],
            "correcta": 1,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Cactaceae",
              "Bromeliaceae",
              "Euphorbiaceae",
              "Crassulaceae"
            ],
            "correcta": 2,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Su tallo cuadrangular y aroma",
              "Sus frutos en legumbre",
              "Sus flores en cabezuela",
              "Sus hojas en aguja"
            ],
            "correcta": 0,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "La matriz mitocondrial",
              "El estroma del cloroplasto",
              "El citosol",
              "La membrana del tilacoide"
            ],
            "correcta": 1,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Un gran tipo de vegetación asociado a un clima",
              "Una comunidad de un solo estrato",
              "Una sola especie dominante",
              "Un catálogo florístico"
            ],
            "correcta": 0,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El aparato de Golgi",
              "El cloroplasto",
              "La mitocondria",
              "El núcleo"
            ],
            "correcta": 1,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Endémica",
              "Cosmopolita",
              "Invasora",
              "Relicta"
            ],
            "correcta": 2,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Límite del árbol o treeline",
              "Permafrost",
              "Podsol",
              "Catena"
            ],
            "correcta": 0,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Moder",
              "Mor",
              "Mull",
              "Turba"
            ],
            "correcta": 2,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "El suelo es salino",
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "Hace demasiado calor",
              "Falta luz"
            ],
            "correcta": 1,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus suber",
              "Quercus robur",
              "Quercus ilex subsp. ballota",
              "Quercus pyrenaica"
            ],
            "correcta": 2,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Juncaceae",
              "Poaceae",
              "Fabaceae",
              "Cyperaceae"
            ],
            "correcta": 1,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          }
        ]
      },
      {
        "id": "GEN-S-04",
        "nombre": "Examen sencillo 4",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Cae verde al suelo",
              "Permanece cerrado y se abre tras el fuego",
              "Es carnoso y comestible",
              "No produce semillas"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Turberas",
              "Podsoles",
              "Salares",
              "Dunas"
            ],
            "correcta": 0,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Litoral árido",
              "Mediterránea seca",
              "Esteparia",
              "Húmeda o eurosiberiana"
            ],
            "correcta": 3,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Liquen",
              "Haustorio",
              "Nódulo radical",
              "Micorriza"
            ],
            "correcta": 3,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Tronco leñoso",
              "Bulbo subterráneo",
              "Semilla",
              "Yema sobre el suelo"
            ],
            "correcta": 2,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Cosmopolita",
              "Endémica",
              "Invasora",
              "Relicta"
            ],
            "correcta": 2,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "La palmera canaria",
              "El cocotero",
              "El palmito Chamaerops humilis",
              "La palmera datilera"
            ],
            "correcta": 2,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En verano por la sequía",
              "En otoño-invierno por el frío",
              "Solo tras un incendio",
              "Nunca, es perenne"
            ],
            "correcta": 1,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Briófitos",
              "Pteridófitos",
              "Gimnospermas",
              "Angiospermas"
            ],
            "correcta": 0,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "La alta montaña húmeda",
              "Las turberas atlánticas",
              "Las dunas costeras",
              "Los páramos fríos y secos del interior"
            ],
            "correcta": 3,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Gametófito haploide",
              "Protalo",
              "Protonema",
              "Esporófito diploide"
            ],
            "correcta": 3,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Whittaker",
              "Walter-Lieth",
              "Holdridge",
              "Raunkiær"
            ],
            "correcta": 0,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Fotosintetizar sin luz",
              "Fijar nitrógeno",
              "Abrir los estomas de noche para ahorrar agua",
              "Crecer sin raíces"
            ],
            "correcta": 2,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Floema",
              "Periciclo",
              "Cámbium",
              "Xilema"
            ],
            "correcta": 0,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Árboles altos",
              "Arbustos",
              "Gramíneas",
              "Musgos"
            ],
            "correcta": 1,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Tundra",
              "Pradera",
              "Taiga o bosque boreal",
              "Estepa"
            ],
            "correcta": 2,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El alcornoque",
              "La encina",
              "El quejigo",
              "El melojo"
            ],
            "correcta": 0,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un matorral costero",
              "Una formación de gramíneas con árboles dispersos",
              "Un desierto sin vegetación",
              "Un bosque cerrado perenne"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Esclerófilas, duras y perennes",
              "Carnosas y suculentas",
              "Aciculares en fascículos",
              "Grandes y blandas"
            ],
            "correcta": 0,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Cyperaceae",
              "Juncaceae",
              "Poaceae",
              "Fabaceae"
            ],
            "correcta": 2,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Parásitas",
              "Epífitas",
              "Suculentas",
              "Halófitas"
            ],
            "correcta": 1,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "Los tejidos vasculares",
              "El fruto",
              "La semilla",
              "La flor"
            ],
            "correcta": 0,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          }
        ]
      },
      {
        "id": "GEN-S-05",
        "nombre": "Examen sencillo 5",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "El fruto",
              "La semilla",
              "Los tejidos vasculares",
              "La flor"
            ],
            "correcta": 2,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Mediterránea seca",
              "Húmeda o eurosiberiana",
              "Esteparia",
              "Litoral árido"
            ],
            "correcta": 1,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus hojas en aguja",
              "Sus flores en cabezuela",
              "Su tallo cuadrangular y aroma",
              "Sus frutos en legumbre"
            ],
            "correcta": 2,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Moder",
              "Turba",
              "Mor",
              "Mull"
            ],
            "correcta": 3,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Podsol",
              "Límite del árbol o treeline",
              "Catena",
              "Permafrost"
            ],
            "correcta": 1,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Una sola especie dominante",
              "Un catálogo florístico",
              "Una comunidad de un solo estrato",
              "Un gran tipo de vegetación asociado a un clima"
            ],
            "correcta": 3,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Whittaker",
              "Raunkiær",
              "Holdridge",
              "Walter-Lieth"
            ],
            "correcta": 0,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Cae verde al suelo",
              "Permanece cerrado y se abre tras el fuego",
              "Es carnoso y comestible",
              "No produce semillas"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Salares",
              "Turberas",
              "Dunas",
              "Podsoles"
            ],
            "correcta": 1,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Arbustos",
              "Musgos",
              "Árboles altos",
              "Gramíneas"
            ],
            "correcta": 0,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El aparato de Golgi",
              "La mitocondria",
              "El núcleo",
              "El cloroplasto"
            ],
            "correcta": 3,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Azotobacter",
              "Nitrosomonas",
              "Frankia",
              "Rhizobium"
            ],
            "correcta": 3,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Ha sido introducida por el hombre",
              "Vive en todos los continentes",
              "Carece de flores",
              "Está restringida a un territorio concreto"
            ],
            "correcta": 3,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En verano por la sequía",
              "Solo tras un incendio",
              "En otoño-invierno por el frío",
              "Nunca, es perenne"
            ],
            "correcta": 2,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Esporófito diploide",
              "Protalo",
              "Gametófito haploide",
              "Protonema"
            ],
            "correcta": 0,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Azúcares desde las hojas",
              "Oxígeno hacia las raíces",
              "Agua y sales minerales desde la raíz",
              "Hormonas en ambos sentidos"
            ],
            "correcta": 2,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "El tallo leñoso",
              "La raíz",
              "El fruto",
              "La hoja"
            ],
            "correcta": 2,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Que la nieve resbale sin romper las ramas",
              "Captar más viento",
              "Atraer polinizadores",
              "Almacenar agua"
            ],
            "correcta": 0,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Euphorbiaceae",
              "Bromeliaceae",
              "Cactaceae",
              "Crassulaceae"
            ],
            "correcta": 0,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "El cocotero",
              "El palmito Chamaerops humilis",
              "La palmera canaria",
              "La palmera datilera"
            ],
            "correcta": 1,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Haustorio",
              "Micorriza",
              "Liquen",
              "Nódulo radical"
            ],
            "correcta": 1,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "Hace demasiado calor",
              "Falta luz",
              "El suelo es salino"
            ],
            "correcta": 0,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El néctar",
              "El ládano, una resina aromática",
              "La cera de las hojas",
              "El polen"
            ],
            "correcta": 1,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          }
        ]
      },
      {
        "id": "GEN-S-06",
        "nombre": "Examen sencillo 6",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "De ribera o riparia",
              "Rupícola",
              "Halófila",
              "Climácica"
            ],
            "correcta": 0,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Crece solo sobre yeso",
              "Vive sumergido",
              "Es la vegetación final y estable",
              "Procede de la degradación del bosque"
            ],
            "correcta": 3,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Crecer sin raíces",
              "Abrir los estomas de noche para ahorrar agua",
              "Fijar nitrógeno",
              "Fotosintetizar sin luz"
            ],
            "correcta": 1,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Nódulo radical",
              "Micorriza",
              "Liquen",
              "Haustorio"
            ],
            "correcta": 1,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus ilex subsp. ballota",
              "Quercus pyrenaica",
              "Quercus robur",
              "Quercus suber"
            ],
            "correcta": 0,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "La hoja",
              "El fruto",
              "La raíz",
              "El tallo leñoso"
            ],
            "correcta": 1,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Semilla",
              "Yema sobre el suelo",
              "Tronco leñoso",
              "Bulbo subterráneo"
            ],
            "correcta": 0,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "La alta montaña húmeda",
              "Los páramos fríos y secos del interior",
              "Las dunas costeras",
              "Las turberas atlánticas"
            ],
            "correcta": 1,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Salares",
              "Turberas",
              "Dunas",
              "Podsoles"
            ],
            "correcta": 1,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Relicta",
              "Cosmopolita",
              "Invasora",
              "Endémica"
            ],
            "correcta": 2,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Aparasolada",
              "Llorona",
              "Cónica perfecta",
              "Columnar estrecha"
            ],
            "correcta": 0,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El núcleo",
              "El cloroplasto",
              "El aparato de Golgi",
              "La mitocondria"
            ],
            "correcta": 1,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un matorral costero",
              "Un bosque cerrado perenne",
              "Una formación de gramíneas con árboles dispersos",
              "Un desierto sin vegetación"
            ],
            "correcta": 2,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Una larga estación seca",
              "Suelos muy fértiles y profundos",
              "Heladas frecuentes",
              "Calor y humedad elevados todo el año"
            ],
            "correcta": 3,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "El cocotero",
              "La palmera canaria",
              "El palmito Chamaerops humilis",
              "La palmera datilera"
            ],
            "correcta": 2,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Trepador",
              "Epífito",
              "Bajo, almohadillado o rastrero",
              "Arbóreo alto"
            ],
            "correcta": 2,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Taiga o bosque boreal",
              "Estepa",
              "Tundra",
              "Pradera"
            ],
            "correcta": 0,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El melojo",
              "La encina",
              "El alcornoque",
              "El quejigo"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Aciculares en fascículos",
              "Grandes y blandas",
              "Esclerófilas, duras y perennes",
              "Carnosas y suculentas"
            ],
            "correcta": 2,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Poaceae",
              "Cactaceae",
              "Orchidaceae",
              "Leguminosae"
            ],
            "correcta": 3,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "El estroma del cloroplasto",
              "El citosol",
              "La membrana del tilacoide",
              "La matriz mitocondrial"
            ],
            "correcta": 0,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Halófilas",
              "Gipsófilas",
              "Psamófilas",
              "Calcícolas"
            ],
            "correcta": 0,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Epífitas",
              "Halófitas",
              "Suculentas",
              "Parásitas"
            ],
            "correcta": 0,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          }
        ]
      },
      {
        "id": "GEN-S-07",
        "nombre": "Examen sencillo 7",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Bulbo subterráneo",
              "Tronco leñoso",
              "Semilla",
              "Yema sobre el suelo"
            ],
            "correcta": 2,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Bromeliaceae",
              "Euphorbiaceae",
              "Crassulaceae",
              "Cactaceae"
            ],
            "correcta": 1,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Suculentas",
              "Halófitas",
              "Epífitas",
              "Parásitas"
            ],
            "correcta": 2,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Periciclo",
              "Xilema",
              "Floema",
              "Cámbium"
            ],
            "correcta": 2,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Procede de la degradación del bosque",
              "Es la vegetación final y estable",
              "Vive sumergido",
              "Crece solo sobre yeso"
            ],
            "correcta": 0,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus ilex subsp. ballota",
              "Quercus suber",
              "Quercus pyrenaica",
              "Quercus robur"
            ],
            "correcta": 0,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Llorona",
              "Cónica perfecta",
              "Columnar estrecha",
              "Aparasolada"
            ],
            "correcta": 3,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Raunkiær",
              "Walter-Lieth",
              "Whittaker",
              "Holdridge"
            ],
            "correcta": 2,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Una comunidad de un solo estrato",
              "Un catálogo florístico",
              "Una sola especie dominante",
              "Un gran tipo de vegetación asociado a un clima"
            ],
            "correcta": 3,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "Solo tras un incendio",
              "En verano por la sequía",
              "En otoño-invierno por el frío",
              "Nunca, es perenne"
            ],
            "correcta": 2,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Tundra",
              "Taiga o bosque boreal",
              "Estepa",
              "Pradera"
            ],
            "correcta": 1,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El alcornoque",
              "El quejigo",
              "La encina",
              "El melojo"
            ],
            "correcta": 0,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus flores en cabezuela",
              "Sus hojas en aguja",
              "Sus frutos en legumbre",
              "Su tallo cuadrangular y aroma"
            ],
            "correcta": 3,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Mediterránea seca",
              "Litoral árido",
              "Esteparia",
              "Húmeda o eurosiberiana"
            ],
            "correcta": 3,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Mor",
              "Mull",
              "Turba",
              "Moder"
            ],
            "correcta": 1,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Carnosas y suculentas",
              "Esclerófilas, duras y perennes",
              "Grandes y blandas",
              "Aciculares en fascículos"
            ],
            "correcta": 1,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Hormonas en ambos sentidos",
              "Azúcares desde las hojas",
              "Agua y sales minerales desde la raíz",
              "Oxígeno hacia las raíces"
            ],
            "correcta": 2,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Abrir los estomas de noche para ahorrar agua",
              "Crecer sin raíces",
              "Fotosintetizar sin luz",
              "Fijar nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "La semilla",
              "Los tejidos vasculares",
              "La flor",
              "El fruto"
            ],
            "correcta": 1,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Angiospermas",
              "Pteridófitos",
              "Briófitos",
              "Gimnospermas"
            ],
            "correcta": 2,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Orchidaceae",
              "Cactaceae",
              "Leguminosae",
              "Poaceae"
            ],
            "correcta": 2,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protalo",
              "Gametófito haploide",
              "Protonema",
              "Esporófito diploide"
            ],
            "correcta": 3,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          }
        ]
      },
      {
        "id": "GEN-S-08",
        "nombre": "Examen sencillo 8",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Los páramos fríos y secos del interior",
              "Las turberas atlánticas",
              "Las dunas costeras",
              "La alta montaña húmeda"
            ],
            "correcta": 0,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "Hace demasiado calor",
              "Falta luz",
              "El suelo es salino"
            ],
            "correcta": 0,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Invasora",
              "Cosmopolita",
              "Relicta",
              "Endémica"
            ],
            "correcta": 0,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Turba",
              "Mull",
              "Mor",
              "Moder"
            ],
            "correcta": 1,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "De ribera o riparia",
              "Climácica",
              "Rupícola",
              "Halófila"
            ],
            "correcta": 0,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Aciculares en fascículos",
              "Carnosas y suculentas",
              "Esclerófilas, duras y perennes",
              "Grandes y blandas"
            ],
            "correcta": 2,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "El citosol",
              "La membrana del tilacoide",
              "El estroma del cloroplasto",
              "La matriz mitocondrial"
            ],
            "correcta": 2,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El cloroplasto",
              "El núcleo",
              "La mitocondria",
              "El aparato de Golgi"
            ],
            "correcta": 0,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Gramíneas",
              "Arbustos",
              "Árboles altos",
              "Musgos"
            ],
            "correcta": 1,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El polen",
              "El ládano, una resina aromática",
              "El néctar",
              "La cera de las hojas"
            ],
            "correcta": 1,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Azúcares desde las hojas",
              "Hormonas en ambos sentidos",
              "Oxígeno hacia las raíces",
              "Agua y sales minerales desde la raíz"
            ],
            "correcta": 3,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Carece de flores",
              "Está restringida a un territorio concreto",
              "Ha sido introducida por el hombre",
              "Vive en todos los continentes"
            ],
            "correcta": 1,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Periciclo",
              "Floema",
              "Xilema",
              "Cámbium"
            ],
            "correcta": 1,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Bajo, almohadillado o rastrero",
              "Trepador",
              "Arbóreo alto",
              "Epífito"
            ],
            "correcta": 0,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Atraer polinizadores",
              "Que la nieve resbale sin romper las ramas",
              "Almacenar agua",
              "Captar más viento"
            ],
            "correcta": 1,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Tundra",
              "Taiga o bosque boreal",
              "Estepa",
              "Pradera"
            ],
            "correcta": 1,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Podsol",
              "Permafrost",
              "Límite del árbol o treeline",
              "Catena"
            ],
            "correcta": 2,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un matorral costero",
              "Un desierto sin vegetación",
              "Una formación de gramíneas con árboles dispersos",
              "Un bosque cerrado perenne"
            ],
            "correcta": 2,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Azotobacter",
              "Rhizobium",
              "Nitrosomonas",
              "Frankia"
            ],
            "correcta": 1,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Psamófilas",
              "Calcícolas",
              "Gipsófilas",
              "Halófilas"
            ],
            "correcta": 3,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Cyperaceae",
              "Juncaceae",
              "Fabaceae",
              "Poaceae"
            ],
            "correcta": 3,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Permanece cerrado y se abre tras el fuego",
              "No produce semillas",
              "Es carnoso y comestible",
              "Cae verde al suelo"
            ],
            "correcta": 0,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Una larga estación seca",
              "Calor y humedad elevados todo el año",
              "Suelos muy fértiles y profundos",
              "Heladas frecuentes"
            ],
            "correcta": 1,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          }
        ]
      },
      {
        "id": "GEN-S-09",
        "nombre": "Examen sencillo 9",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Un catálogo florístico",
              "Un gran tipo de vegetación asociado a un clima",
              "Una sola especie dominante",
              "Una comunidad de un solo estrato"
            ],
            "correcta": 1,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Suelos muy fértiles y profundos",
              "Una larga estación seca",
              "Heladas frecuentes",
              "Calor y humedad elevados todo el año"
            ],
            "correcta": 3,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "No produce semillas",
              "Cae verde al suelo",
              "Es carnoso y comestible",
              "Permanece cerrado y se abre tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Azotobacter",
              "Frankia",
              "Rhizobium",
              "Nitrosomonas"
            ],
            "correcta": 2,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Fijar nitrógeno",
              "Fotosintetizar sin luz",
              "Abrir los estomas de noche para ahorrar agua",
              "Crecer sin raíces"
            ],
            "correcta": 2,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "La matriz mitocondrial",
              "El estroma del cloroplasto",
              "La membrana del tilacoide",
              "El citosol"
            ],
            "correcta": 1,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Húmeda o eurosiberiana",
              "Esteparia",
              "Litoral árido",
              "Mediterránea seca"
            ],
            "correcta": 0,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Nódulo radical",
              "Liquen",
              "Micorriza",
              "Haustorio"
            ],
            "correcta": 2,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "Falta luz",
              "El suelo es salino",
              "Hace demasiado calor",
              "Reciben menos lluvia que las costas, por la sombra de lluvias"
            ],
            "correcta": 3,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Gramíneas",
              "Árboles altos",
              "Musgos",
              "Arbustos"
            ],
            "correcta": 3,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Poaceae",
              "Cactaceae",
              "Leguminosae",
              "Orchidaceae"
            ],
            "correcta": 2,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Raunkiær",
              "Whittaker",
              "Walter-Lieth",
              "Holdridge"
            ],
            "correcta": 1,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Yema sobre el suelo",
              "Semilla",
              "Tronco leñoso",
              "Bulbo subterráneo"
            ],
            "correcta": 1,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Crece solo sobre yeso",
              "Procede de la degradación del bosque",
              "Vive sumergido",
              "Es la vegetación final y estable"
            ],
            "correcta": 1,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Poaceae",
              "Fabaceae",
              "Juncaceae",
              "Cyperaceae"
            ],
            "correcta": 0,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Su tallo cuadrangular y aroma",
              "Sus hojas en aguja",
              "Sus frutos en legumbre",
              "Sus flores en cabezuela"
            ],
            "correcta": 0,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "La alta montaña húmeda",
              "Las turberas atlánticas",
              "Los páramos fríos y secos del interior",
              "Las dunas costeras"
            ],
            "correcta": 2,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Llorona",
              "Aparasolada",
              "Columnar estrecha",
              "Cónica perfecta"
            ],
            "correcta": 1,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Que la nieve resbale sin romper las ramas",
              "Almacenar agua",
              "Atraer polinizadores",
              "Captar más viento"
            ],
            "correcta": 0,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Límite del árbol o treeline",
              "Podsol",
              "Catena",
              "Permafrost"
            ],
            "correcta": 0,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El quejigo",
              "El melojo",
              "La encina",
              "El alcornoque"
            ],
            "correcta": 3,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Climácica",
              "Rupícola",
              "De ribera o riparia",
              "Halófila"
            ],
            "correcta": 2,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          }
        ]
      },
      {
        "id": "GEN-S-10",
        "nombre": "Examen sencillo 10",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Euphorbiaceae",
              "Cactaceae",
              "Bromeliaceae",
              "Crassulaceae"
            ],
            "correcta": 0,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Podsoles",
              "Dunas",
              "Salares",
              "Turberas"
            ],
            "correcta": 3,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Parásitas",
              "Suculentas",
              "Epífitas",
              "Halófitas"
            ],
            "correcta": 2,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "La cera de las hojas",
              "El polen",
              "El ládano, una resina aromática",
              "El néctar"
            ],
            "correcta": 2,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus hojas en aguja",
              "Sus frutos en legumbre",
              "Su tallo cuadrangular y aroma",
              "Sus flores en cabezuela"
            ],
            "correcta": 2,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "La raíz",
              "El fruto",
              "El tallo leñoso",
              "La hoja"
            ],
            "correcta": 1,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "La palmera canaria",
              "La palmera datilera",
              "El palmito Chamaerops humilis",
              "El cocotero"
            ],
            "correcta": 2,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un desierto sin vegetación",
              "Una formación de gramíneas con árboles dispersos",
              "Un matorral costero",
              "Un bosque cerrado perenne"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Halófilas",
              "Psamófilas",
              "Calcícolas",
              "Gipsófilas"
            ],
            "correcta": 0,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En otoño-invierno por el frío",
              "En verano por la sequía",
              "Nunca, es perenne",
              "Solo tras un incendio"
            ],
            "correcta": 0,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "El fruto",
              "Los tejidos vasculares",
              "La flor",
              "La semilla"
            ],
            "correcta": 1,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Tronco leñoso",
              "Semilla",
              "Bulbo subterráneo",
              "Yema sobre el suelo"
            ],
            "correcta": 1,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Rupícola",
              "Climácica",
              "De ribera o riparia",
              "Halófila"
            ],
            "correcta": 2,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Abrir los estomas de noche para ahorrar agua",
              "Fotosintetizar sin luz",
              "Fijar nitrógeno",
              "Crecer sin raíces"
            ],
            "correcta": 0,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "El suelo es salino",
              "Falta luz",
              "Hace demasiado calor",
              "Reciben menos lluvia que las costas, por la sombra de lluvias"
            ],
            "correcta": 3,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus suber",
              "Quercus ilex subsp. ballota",
              "Quercus pyrenaica",
              "Quercus robur"
            ],
            "correcta": 1,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Es carnoso y comestible",
              "No produce semillas",
              "Cae verde al suelo",
              "Permanece cerrado y se abre tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Trepador",
              "Epífito",
              "Bajo, almohadillado o rastrero",
              "Arbóreo alto"
            ],
            "correcta": 2,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Carece de flores",
              "Vive en todos los continentes",
              "Ha sido introducida por el hombre",
              "Está restringida a un territorio concreto"
            ],
            "correcta": 3,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Calor y humedad elevados todo el año",
              "Suelos muy fértiles y profundos",
              "Heladas frecuentes",
              "Una larga estación seca"
            ],
            "correcta": 0,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Pteridófitos",
              "Gimnospermas",
              "Angiospermas",
              "Briófitos"
            ],
            "correcta": 3,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protonema",
              "Esporófito diploide",
              "Protalo",
              "Gametófito haploide"
            ],
            "correcta": 1,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Musgos",
              "Árboles altos",
              "Gramíneas",
              "Arbustos"
            ],
            "correcta": 3,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          }
        ]
      },
      {
        "id": "GEN-S-11",
        "nombre": "Examen sencillo 11",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Turberas",
              "Dunas",
              "Podsoles",
              "Salares"
            ],
            "correcta": 0,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Llorona",
              "Cónica perfecta",
              "Columnar estrecha",
              "Aparasolada"
            ],
            "correcta": 3,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "La matriz mitocondrial",
              "La membrana del tilacoide",
              "El estroma del cloroplasto",
              "El citosol"
            ],
            "correcta": 2,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Halófilas",
              "Psamófilas",
              "Gipsófilas",
              "Calcícolas"
            ],
            "correcta": 0,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "La semilla",
              "Los tejidos vasculares",
              "La flor",
              "El fruto"
            ],
            "correcta": 1,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Leguminosae",
              "Orchidaceae",
              "Poaceae",
              "Cactaceae"
            ],
            "correcta": 0,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Que la nieve resbale sin romper las ramas",
              "Atraer polinizadores",
              "Captar más viento",
              "Almacenar agua"
            ],
            "correcta": 0,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Mediterránea seca",
              "Húmeda o eurosiberiana",
              "Esteparia",
              "Litoral árido"
            ],
            "correcta": 1,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Haustorio",
              "Liquen",
              "Micorriza",
              "Nódulo radical"
            ],
            "correcta": 2,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Vive sumergido",
              "Es la vegetación final y estable",
              "Crece solo sobre yeso",
              "Procede de la degradación del bosque"
            ],
            "correcta": 3,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Esclerófilas, duras y perennes",
              "Carnosas y suculentas",
              "Grandes y blandas",
              "Aciculares en fascículos"
            ],
            "correcta": 0,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Endémica",
              "Invasora",
              "Relicta",
              "Cosmopolita"
            ],
            "correcta": 1,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En verano por la sequía",
              "Nunca, es perenne",
              "En otoño-invierno por el frío",
              "Solo tras un incendio"
            ],
            "correcta": 2,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus pyrenaica",
              "Quercus suber",
              "Quercus ilex subsp. ballota",
              "Quercus robur"
            ],
            "correcta": 2,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El néctar",
              "El ládano, una resina aromática",
              "El polen",
              "La cera de las hojas"
            ],
            "correcta": 1,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Azúcares desde las hojas",
              "Oxígeno hacia las raíces",
              "Hormonas en ambos sentidos",
              "Agua y sales minerales desde la raíz"
            ],
            "correcta": 3,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Frankia",
              "Nitrosomonas",
              "Rhizobium",
              "Azotobacter"
            ],
            "correcta": 2,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Fabaceae",
              "Poaceae",
              "Cyperaceae",
              "Juncaceae"
            ],
            "correcta": 1,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un desierto sin vegetación",
              "Una formación de gramíneas con árboles dispersos",
              "Un bosque cerrado perenne",
              "Un matorral costero"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "La encina",
              "El melojo",
              "El alcornoque",
              "El quejigo"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "La mitocondria",
              "El cloroplasto",
              "El núcleo",
              "El aparato de Golgi"
            ],
            "correcta": 1,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Parásitas",
              "Epífitas",
              "Suculentas",
              "Halófitas"
            ],
            "correcta": 1,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          }
        ]
      },
      {
        "id": "GEN-S-12",
        "nombre": "Examen sencillo 12",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Gipsófilas",
              "Halófilas",
              "Calcícolas",
              "Psamófilas"
            ],
            "correcta": 1,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El núcleo",
              "La mitocondria",
              "El cloroplasto",
              "El aparato de Golgi"
            ],
            "correcta": 2,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Las dunas costeras",
              "La alta montaña húmeda",
              "Las turberas atlánticas",
              "Los páramos fríos y secos del interior"
            ],
            "correcta": 3,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Epífito",
              "Arbóreo alto",
              "Trepador",
              "Bajo, almohadillado o rastrero"
            ],
            "correcta": 3,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Taiga o bosque boreal",
              "Tundra",
              "Estepa",
              "Pradera"
            ],
            "correcta": 0,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Catena",
              "Límite del árbol o treeline",
              "Podsol",
              "Permafrost"
            ],
            "correcta": 1,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "El palmito Chamaerops humilis",
              "La palmera canaria",
              "El cocotero",
              "La palmera datilera"
            ],
            "correcta": 0,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "La semilla",
              "El fruto",
              "La flor",
              "Los tejidos vasculares"
            ],
            "correcta": 3,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Calor y humedad elevados todo el año",
              "Suelos muy fértiles y profundos",
              "Una larga estación seca",
              "Heladas frecuentes"
            ],
            "correcta": 0,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protalo",
              "Gametófito haploide",
              "Protonema",
              "Esporófito diploide"
            ],
            "correcta": 3,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Hormonas en ambos sentidos",
              "Oxígeno hacia las raíces",
              "Azúcares desde las hojas",
              "Agua y sales minerales desde la raíz"
            ],
            "correcta": 3,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Una comunidad de un solo estrato",
              "Una sola especie dominante",
              "Un gran tipo de vegetación asociado a un clima",
              "Un catálogo florístico"
            ],
            "correcta": 2,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Bromeliaceae",
              "Euphorbiaceae",
              "Cactaceae",
              "Crassulaceae"
            ],
            "correcta": 1,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "El tallo leñoso",
              "La raíz",
              "El fruto",
              "La hoja"
            ],
            "correcta": 2,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Gimnospermas",
              "Pteridófitos",
              "Briófitos",
              "Angiospermas"
            ],
            "correcta": 2,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "La encina",
              "El alcornoque",
              "El quejigo",
              "El melojo"
            ],
            "correcta": 1,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Es la vegetación final y estable",
              "Procede de la degradación del bosque",
              "Vive sumergido",
              "Crece solo sobre yeso"
            ],
            "correcta": 1,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Fotosintetizar sin luz",
              "Fijar nitrógeno",
              "Abrir los estomas de noche para ahorrar agua",
              "Crecer sin raíces"
            ],
            "correcta": 2,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Cámbium",
              "Periciclo",
              "Floema",
              "Xilema"
            ],
            "correcta": 2,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Holdridge",
              "Walter-Lieth",
              "Whittaker",
              "Raunkiær"
            ],
            "correcta": 2,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Está restringida a un territorio concreto",
              "Carece de flores",
              "Vive en todos los continentes",
              "Ha sido introducida por el hombre"
            ],
            "correcta": 0,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Turba",
              "Mor",
              "Moder",
              "Mull"
            ],
            "correcta": 3,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          }
        ]
      },
      {
        "id": "GEN-S-13",
        "nombre": "Examen sencillo 13",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Cónica perfecta",
              "Llorona",
              "Columnar estrecha",
              "Aparasolada"
            ],
            "correcta": 3,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Fabaceae",
              "Poaceae",
              "Cyperaceae",
              "Juncaceae"
            ],
            "correcta": 1,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus hojas en aguja",
              "Su tallo cuadrangular y aroma",
              "Sus frutos en legumbre",
              "Sus flores en cabezuela"
            ],
            "correcta": 1,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Euphorbiaceae",
              "Cactaceae",
              "Crassulaceae",
              "Bromeliaceae"
            ],
            "correcta": 0,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un matorral costero",
              "Una formación de gramíneas con árboles dispersos",
              "Un bosque cerrado perenne",
              "Un desierto sin vegetación"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Yema sobre el suelo",
              "Bulbo subterráneo",
              "Tronco leñoso",
              "Semilla"
            ],
            "correcta": 3,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Trepador",
              "Bajo, almohadillado o rastrero",
              "Arbóreo alto",
              "Epífito"
            ],
            "correcta": 1,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Atraer polinizadores",
              "Que la nieve resbale sin romper las ramas",
              "Almacenar agua",
              "Captar más viento"
            ],
            "correcta": 1,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Orchidaceae",
              "Cactaceae",
              "Poaceae",
              "Leguminosae"
            ],
            "correcta": 3,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El néctar",
              "La cera de las hojas",
              "El ládano, una resina aromática",
              "El polen"
            ],
            "correcta": 2,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Los páramos fríos y secos del interior",
              "Las turberas atlánticas",
              "La alta montaña húmeda",
              "Las dunas costeras"
            ],
            "correcta": 0,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Gramíneas",
              "Árboles altos",
              "Arbustos",
              "Musgos"
            ],
            "correcta": 2,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "El tallo leñoso",
              "El fruto",
              "La raíz",
              "La hoja"
            ],
            "correcta": 1,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Epífitas",
              "Suculentas",
              "Halófitas",
              "Parásitas"
            ],
            "correcta": 0,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Una comunidad de un solo estrato",
              "Un gran tipo de vegetación asociado a un clima",
              "Una sola especie dominante",
              "Un catálogo florístico"
            ],
            "correcta": 1,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Frankia",
              "Azotobacter",
              "Rhizobium",
              "Nitrosomonas"
            ],
            "correcta": 2,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Xilema",
              "Cámbium",
              "Periciclo",
              "Floema"
            ],
            "correcta": 3,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Ha sido introducida por el hombre",
              "Vive en todos los continentes",
              "Está restringida a un territorio concreto",
              "Carece de flores"
            ],
            "correcta": 2,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Whittaker",
              "Holdridge",
              "Raunkiær",
              "Walter-Lieth"
            ],
            "correcta": 0,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Halófila",
              "De ribera o riparia",
              "Climácica",
              "Rupícola"
            ],
            "correcta": 1,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Límite del árbol o treeline",
              "Podsol",
              "Catena",
              "Permafrost"
            ],
            "correcta": 0,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Es carnoso y comestible",
              "Permanece cerrado y se abre tras el fuego",
              "No produce semillas",
              "Cae verde al suelo"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "El suelo es salino",
              "Hace demasiado calor",
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "Falta luz"
            ],
            "correcta": 2,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Taiga o bosque boreal",
              "Estepa",
              "Pradera",
              "Tundra"
            ],
            "correcta": 0,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus ilex subsp. ballota",
              "Quercus pyrenaica",
              "Quercus robur",
              "Quercus suber"
            ],
            "correcta": 0,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          }
        ]
      },
      {
        "id": "GEN-S-14",
        "nombre": "Examen sencillo 14",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Mull",
              "Mor",
              "Turba",
              "Moder"
            ],
            "correcta": 0,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Almacenar agua",
              "Que la nieve resbale sin romper las ramas",
              "Captar más viento",
              "Atraer polinizadores"
            ],
            "correcta": 1,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "La membrana del tilacoide",
              "La matriz mitocondrial",
              "El citosol",
              "El estroma del cloroplasto"
            ],
            "correcta": 3,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Gimnospermas",
              "Pteridófitos",
              "Briófitos",
              "Angiospermas"
            ],
            "correcta": 2,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Euphorbiaceae",
              "Bromeliaceae",
              "Crassulaceae",
              "Cactaceae"
            ],
            "correcta": 0,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Psamófilas",
              "Calcícolas",
              "Halófilas",
              "Gipsófilas"
            ],
            "correcta": 2,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Grandes y blandas",
              "Carnosas y suculentas",
              "Aciculares en fascículos",
              "Esclerófilas, duras y perennes"
            ],
            "correcta": 3,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Nódulo radical",
              "Haustorio",
              "Micorriza",
              "Liquen"
            ],
            "correcta": 2,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En otoño-invierno por el frío",
              "Nunca, es perenne",
              "En verano por la sequía",
              "Solo tras un incendio"
            ],
            "correcta": 0,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Pradera",
              "Taiga o bosque boreal",
              "Tundra",
              "Estepa"
            ],
            "correcta": 1,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protonema",
              "Gametófito haploide",
              "Protalo",
              "Esporófito diploide"
            ],
            "correcta": 3,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Vive sumergido",
              "Crece solo sobre yeso",
              "Procede de la degradación del bosque",
              "Es la vegetación final y estable"
            ],
            "correcta": 2,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Floema",
              "Xilema",
              "Cámbium",
              "Periciclo"
            ],
            "correcta": 0,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "El fruto",
              "El tallo leñoso",
              "La raíz",
              "La hoja"
            ],
            "correcta": 0,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "La semilla",
              "Los tejidos vasculares",
              "El fruto",
              "La flor"
            ],
            "correcta": 1,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Poaceae",
              "Juncaceae",
              "Cyperaceae",
              "Fabaceae"
            ],
            "correcta": 0,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Esteparia",
              "Húmeda o eurosiberiana",
              "Litoral árido",
              "Mediterránea seca"
            ],
            "correcta": 1,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Invasora",
              "Endémica",
              "Cosmopolita",
              "Relicta"
            ],
            "correcta": 0,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Salares",
              "Podsoles",
              "Turberas",
              "Dunas"
            ],
            "correcta": 2,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Abrir los estomas de noche para ahorrar agua",
              "Fotosintetizar sin luz",
              "Fijar nitrógeno",
              "Crecer sin raíces"
            ],
            "correcta": 0,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "El cocotero",
              "La palmera datilera",
              "El palmito Chamaerops humilis",
              "La palmera canaria"
            ],
            "correcta": 2,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus suber",
              "Quercus pyrenaica",
              "Quercus robur",
              "Quercus ilex subsp. ballota"
            ],
            "correcta": 3,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          }
        ]
      },
      {
        "id": "GEN-S-15",
        "nombre": "Examen sencillo 15",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "La matriz mitocondrial",
              "El citosol",
              "El estroma del cloroplasto",
              "La membrana del tilacoide"
            ],
            "correcta": 2,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protonema",
              "Esporófito diploide",
              "Protalo",
              "Gametófito haploide"
            ],
            "correcta": 1,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "La palmera datilera",
              "La palmera canaria",
              "El palmito Chamaerops humilis",
              "El cocotero"
            ],
            "correcta": 2,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Ha sido introducida por el hombre",
              "Carece de flores",
              "Está restringida a un territorio concreto",
              "Vive en todos los continentes"
            ],
            "correcta": 2,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Mediterránea seca",
              "Esteparia",
              "Litoral árido",
              "Húmeda o eurosiberiana"
            ],
            "correcta": 3,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Un gran tipo de vegetación asociado a un clima",
              "Una comunidad de un solo estrato",
              "Un catálogo florístico",
              "Una sola especie dominante"
            ],
            "correcta": 0,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Suelos muy fértiles y profundos",
              "Calor y humedad elevados todo el año",
              "Heladas frecuentes",
              "Una larga estación seca"
            ],
            "correcta": 1,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Yema sobre el suelo",
              "Bulbo subterráneo",
              "Tronco leñoso",
              "Semilla"
            ],
            "correcta": 3,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Grandes y blandas",
              "Aciculares en fascículos",
              "Esclerófilas, duras y perennes",
              "Carnosas y suculentas"
            ],
            "correcta": 2,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Arbóreo alto",
              "Epífito",
              "Bajo, almohadillado o rastrero",
              "Trepador"
            ],
            "correcta": 2,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "La alta montaña húmeda",
              "Las turberas atlánticas",
              "Los páramos fríos y secos del interior",
              "Las dunas costeras"
            ],
            "correcta": 2,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Turberas",
              "Salares",
              "Podsoles",
              "Dunas"
            ],
            "correcta": 0,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un matorral costero",
              "Una formación de gramíneas con árboles dispersos",
              "Un desierto sin vegetación",
              "Un bosque cerrado perenne"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Árboles altos",
              "Gramíneas",
              "Musgos",
              "Arbustos"
            ],
            "correcta": 3,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus frutos en legumbre",
              "Sus hojas en aguja",
              "Sus flores en cabezuela",
              "Su tallo cuadrangular y aroma"
            ],
            "correcta": 3,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El cloroplasto",
              "El núcleo",
              "La mitocondria",
              "El aparato de Golgi"
            ],
            "correcta": 0,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Halófila",
              "De ribera o riparia",
              "Rupícola",
              "Climácica"
            ],
            "correcta": 1,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Podsol",
              "Permafrost",
              "Catena",
              "Límite del árbol o treeline"
            ],
            "correcta": 3,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "El suelo es salino",
              "Falta luz",
              "Hace demasiado calor"
            ],
            "correcta": 0,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Es carnoso y comestible",
              "Permanece cerrado y se abre tras el fuego",
              "Cae verde al suelo",
              "No produce semillas"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Liquen",
              "Haustorio",
              "Nódulo radical",
              "Micorriza"
            ],
            "correcta": 3,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          }
        ]
      },
      {
        "id": "GEN-S-16",
        "nombre": "Examen sencillo 16",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Climácica",
              "Halófila",
              "Rupícola",
              "De ribera o riparia"
            ],
            "correcta": 3,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Pradera",
              "Taiga o bosque boreal",
              "Tundra",
              "Estepa"
            ],
            "correcta": 1,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Agua y sales minerales desde la raíz",
              "Azúcares desde las hojas",
              "Hormonas en ambos sentidos",
              "Oxígeno hacia las raíces"
            ],
            "correcta": 0,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Frankia",
              "Nitrosomonas",
              "Rhizobium",
              "Azotobacter"
            ],
            "correcta": 2,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "Cae verde al suelo",
              "Permanece cerrado y se abre tras el fuego",
              "Es carnoso y comestible",
              "No produce semillas"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Angiospermas",
              "Briófitos",
              "Pteridófitos",
              "Gimnospermas"
            ],
            "correcta": 1,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Cosmopolita",
              "Endémica",
              "Invasora",
              "Relicta"
            ],
            "correcta": 2,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Húmeda o eurosiberiana",
              "Esteparia",
              "Mediterránea seca",
              "Litoral árido"
            ],
            "correcta": 0,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Mull",
              "Mor",
              "Moder",
              "Turba"
            ],
            "correcta": 0,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Liquen",
              "Micorriza",
              "Nódulo radical",
              "Haustorio"
            ],
            "correcta": 1,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus ilex subsp. ballota",
              "Quercus suber",
              "Quercus robur",
              "Quercus pyrenaica"
            ],
            "correcta": 0,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Poaceae",
              "Orchidaceae",
              "Cactaceae",
              "Leguminosae"
            ],
            "correcta": 3,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus hojas en aguja",
              "Sus flores en cabezuela",
              "Sus frutos en legumbre",
              "Su tallo cuadrangular y aroma"
            ],
            "correcta": 3,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Aparasolada",
              "Columnar estrecha",
              "Cónica perfecta",
              "Llorona"
            ],
            "correcta": 0,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El ládano, una resina aromática",
              "La cera de las hojas",
              "El polen",
              "El néctar"
            ],
            "correcta": 0,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "El cocotero",
              "La palmera datilera",
              "El palmito Chamaerops humilis",
              "La palmera canaria"
            ],
            "correcta": 2,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Walter-Lieth",
              "Holdridge",
              "Whittaker",
              "Raunkiær"
            ],
            "correcta": 2,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Tronco leñoso",
              "Yema sobre el suelo",
              "Bulbo subterráneo",
              "Semilla"
            ],
            "correcta": 3,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El quejigo",
              "El alcornoque",
              "La encina",
              "El melojo"
            ],
            "correcta": 1,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Halófitas",
              "Epífitas",
              "Parásitas",
              "Suculentas"
            ],
            "correcta": 1,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "El fruto",
              "Los tejidos vasculares",
              "La semilla",
              "La flor"
            ],
            "correcta": 1,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En otoño-invierno por el frío",
              "Nunca, es perenne",
              "En verano por la sequía",
              "Solo tras un incendio"
            ],
            "correcta": 0,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          }
        ]
      },
      {
        "id": "GEN-S-17",
        "nombre": "Examen sencillo 17",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Un gran tipo de vegetación asociado a un clima",
              "Una comunidad de un solo estrato",
              "Un catálogo florístico",
              "Una sola especie dominante"
            ],
            "correcta": 0,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Calcícolas",
              "Psamófilas",
              "Gipsófilas",
              "Halófilas"
            ],
            "correcta": 3,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Xilema",
              "Floema",
              "Periciclo",
              "Cámbium"
            ],
            "correcta": 1,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Fotosintetizar sin luz",
              "Fijar nitrógeno",
              "Abrir los estomas de noche para ahorrar agua",
              "Crecer sin raíces"
            ],
            "correcta": 2,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Carnosas y suculentas",
              "Grandes y blandas",
              "Esclerófilas, duras y perennes",
              "Aciculares en fascículos"
            ],
            "correcta": 2,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Podsoles",
              "Dunas",
              "Salares",
              "Turberas"
            ],
            "correcta": 3,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "La hoja",
              "El fruto",
              "El tallo leñoso",
              "La raíz"
            ],
            "correcta": 1,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "La encina",
              "El quejigo",
              "El melojo",
              "El alcornoque"
            ],
            "correcta": 3,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El ládano, una resina aromática",
              "El néctar",
              "La cera de las hojas",
              "El polen"
            ],
            "correcta": 0,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Trepador",
              "Epífito",
              "Bajo, almohadillado o rastrero",
              "Arbóreo alto"
            ],
            "correcta": 2,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Llorona",
              "Cónica perfecta",
              "Aparasolada",
              "Columnar estrecha"
            ],
            "correcta": 2,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Árboles altos",
              "Arbustos",
              "Musgos",
              "Gramíneas"
            ],
            "correcta": 1,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Cactaceae",
              "Bromeliaceae",
              "Euphorbiaceae",
              "Crassulaceae"
            ],
            "correcta": 2,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Vive sumergido",
              "Crece solo sobre yeso",
              "Es la vegetación final y estable",
              "Procede de la degradación del bosque"
            ],
            "correcta": 3,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "El suelo es salino",
              "Falta luz",
              "Hace demasiado calor",
              "Reciben menos lluvia que las costas, por la sombra de lluvias"
            ],
            "correcta": 3,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Catena",
              "Podsol",
              "Permafrost",
              "Límite del árbol o treeline"
            ],
            "correcta": 3,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Parásitas",
              "Suculentas",
              "Halófitas",
              "Epífitas"
            ],
            "correcta": 3,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Frankia",
              "Nitrosomonas",
              "Azotobacter",
              "Rhizobium"
            ],
            "correcta": 3,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Leguminosae",
              "Cactaceae",
              "Poaceae",
              "Orchidaceae"
            ],
            "correcta": 0,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Moder",
              "Mull",
              "Turba",
              "Mor"
            ],
            "correcta": 1,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Relicta",
              "Endémica",
              "Invasora",
              "Cosmopolita"
            ],
            "correcta": 2,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Pteridófitos",
              "Gimnospermas",
              "Briófitos",
              "Angiospermas"
            ],
            "correcta": 2,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Captar más viento",
              "Atraer polinizadores",
              "Almacenar agua",
              "Que la nieve resbale sin romper las ramas"
            ],
            "correcta": 3,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "La membrana del tilacoide",
              "El citosol",
              "El estroma del cloroplasto",
              "La matriz mitocondrial"
            ],
            "correcta": 2,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un bosque cerrado perenne",
              "Una formación de gramíneas con árboles dispersos",
              "Un desierto sin vegetación",
              "Un matorral costero"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          }
        ]
      },
      {
        "id": "GEN-S-18",
        "nombre": "Examen sencillo 18",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Una especie introducida que se expande y desplaza a la flora autóctona se denomina:",
            "opciones": [
              "Endémica",
              "Invasora",
              "Relicta",
              "Cosmopolita"
            ],
            "correcta": 1,
            "explicacion": "Las especies invasoras desplazan a la flora nativa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El tejido vascular que transporta los azúcares de la fotosíntesis es el:",
            "opciones": [
              "Periciclo",
              "Xilema",
              "Cámbium",
              "Floema"
            ],
            "correcta": 3,
            "explicacion": "El floema conduce la savia elaborada en ambos sentidos."
          },
          {
            "tipo": "vf",
            "pregunta": "En un climograma de Walter-Lieth, cuando la curva de precipitación queda por debajo de la de temperatura hay déficit hídrico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El cruce indica el periodo de sequía."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "Solo tras un incendio",
              "En otoño-invierno por el frío",
              "En verano por la sequía",
              "Nunca, es perenne"
            ],
            "correcta": 1,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "vf",
            "pregunta": "Los hemicriptófitos protegen sus yemas de recambio a ras del suelo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "En la clasificación de Raunkiær, los hemicriptófitos sitúan las yemas a ras de suelo."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Calor y humedad elevados todo el año",
              "Una larga estación seca",
              "Suelos muy fértiles y profundos",
              "Heladas frecuentes"
            ],
            "correcta": 0,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El aparato de Golgi",
              "El núcleo",
              "La mitocondria",
              "El cloroplasto"
            ],
            "correcta": 3,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La transición entre tundra y taiga, donde el bosque se aclara hasta desaparecer, se denomina:",
            "opciones": [
              "Permafrost",
              "Límite del árbol o treeline",
              "Catena",
              "Podsol"
            ],
            "correcta": 1,
            "explicacion": "El límite del árbol marca el final del bosque hacia el norte o la altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "El fruto",
              "La flor",
              "Los tejidos vasculares",
              "La semilla"
            ],
            "correcta": 2,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Gametófito haploide",
              "Esporófito diploide",
              "Protalo",
              "Protonema"
            ],
            "correcta": 1,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una sabana es:",
            "opciones": [
              "Un bosque cerrado perenne",
              "Una formación de gramíneas con árboles dispersos",
              "Un desierto sin vegetación",
              "Un matorral costero"
            ],
            "correcta": 1,
            "explicacion": "La sabana combina un estrato herbáceo continuo con árboles dispersos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Climácica",
              "De ribera o riparia",
              "Halófila",
              "Rupícola"
            ],
            "correcta": 1,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bioma de coníferas perennifolias del norte, con lagos y turberas, se llama:",
            "opciones": [
              "Taiga o bosque boreal",
              "Estepa",
              "Pradera",
              "Tundra"
            ],
            "correcta": 0,
            "explicacion": "La taiga es el bosque boreal de coníferas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Gipsófilas",
              "Calcícolas",
              "Halófilas",
              "Psamófilas"
            ],
            "correcta": 2,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Whittaker",
              "Walter-Lieth",
              "Holdridge",
              "Raunkiær"
            ],
            "correcta": 0,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Vive en todos los continentes",
              "Está restringida a un territorio concreto",
              "Ha sido introducida por el hombre",
              "Carece de flores"
            ],
            "correcta": 1,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Agua y sales minerales desde la raíz",
              "Hormonas en ambos sentidos",
              "Oxígeno hacia las raíces",
              "Azúcares desde las hojas"
            ],
            "correcta": 0,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Haustorio",
              "Nódulo radical",
              "Micorriza",
              "Liquen"
            ],
            "correcta": 2,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Las dunas costeras",
              "La alta montaña húmeda",
              "Las turberas atlánticas",
              "Los páramos fríos y secos del interior"
            ],
            "correcta": 3,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las leguminosas de los matorrales fijan nitrógeno gracias a bacterias del género:",
            "opciones": [
              "Azotobacter",
              "Frankia",
              "Nitrosomonas",
              "Rhizobium"
            ],
            "correcta": 3,
            "explicacion": "Las genisteas fijan nitrógeno mediante Rhizobium en sus nódulos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El árbol del que se extrae el corcho es:",
            "opciones": [
              "El alcornoque",
              "El quejigo",
              "La encina",
              "El melojo"
            ],
            "correcta": 0,
            "explicacion": "El alcornoque Quercus suber produce el corcho o súber."
          },
          {
            "tipo": "multiple",
            "pregunta": "La única palmera autóctona europea, indicadora del piso termomediterráneo, es:",
            "opciones": [
              "La palmera canaria",
              "El palmito Chamaerops humilis",
              "El cocotero",
              "La palmera datilera"
            ],
            "correcta": 1,
            "explicacion": "El palmito es la única palmera europea silvestre."
          },
          {
            "tipo": "vf",
            "pregunta": "La marcescencia consiste en que las hojas secas no se desprenden y permanecen en la rama durante el invierno.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Marcescente = hoja seca que persiste hasta la primavera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una planta anual o terófito pasa la estación desfavorable en forma de:",
            "opciones": [
              "Semilla",
              "Bulbo subterráneo",
              "Yema sobre el suelo",
              "Tronco leñoso"
            ],
            "correcta": 0,
            "explicacion": "Los terófitos sobreviven a la mala estación únicamente como semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Juncaceae",
              "Fabaceae",
              "Poaceae",
              "Cyperaceae"
            ],
            "correcta": 2,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral es una formación dominada por:",
            "opciones": [
              "Musgos",
              "Árboles altos",
              "Gramíneas",
              "Arbustos"
            ],
            "correcta": 3,
            "explicacion": "El matorral es vegetación leñosa baja de arbustos."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          }
        ]
      },
      {
        "id": "GEN-S-19",
        "nombre": "Examen sencillo 19",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que crecen sobre otras sin parasitarlas, frecuentes en la selva, son:",
            "opciones": [
              "Epífitas",
              "Suculentas",
              "Halófitas",
              "Parásitas"
            ],
            "correcta": 0,
            "explicacion": "Las epífitas usan a otras plantas solo como soporte."
          },
          {
            "tipo": "vf",
            "pregunta": "El permafrost es la capa de suelo que permanece helada de forma permanente en la tundra.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El permafrost es el suelo helado permanente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Angiospermas",
              "Briófitos",
              "Gimnospermas",
              "Pteridófitos"
            ],
            "correcta": 1,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Bajo, almohadillado o rastrero",
              "Epífito",
              "Arbóreo alto",
              "Trepador"
            ],
            "correcta": 0,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Esclerófilas, duras y perennes",
              "Aciculares en fascículos",
              "Grandes y blandas",
              "Carnosas y suculentas"
            ],
            "correcta": 0,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "En otoño-invierno por el frío",
              "Solo tras un incendio",
              "En verano por la sequía",
              "Nunca, es perenne"
            ],
            "correcta": 0,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El hayedo es un bosque típico de la Iberia:",
            "opciones": [
              "Esteparia",
              "Litoral árido",
              "Mediterránea seca",
              "Húmeda o eurosiberiana"
            ],
            "correcta": 3,
            "explicacion": "El haya necesita la humedad de la Iberia atlántica."
          },
          {
            "tipo": "multiple",
            "pregunta": "La jara pringosa Cistus ladanifer debe su tacto pegajoso a:",
            "opciones": [
              "El ládano, una resina aromática",
              "El néctar",
              "La cera de las hojas",
              "El polen"
            ],
            "correcta": 0,
            "explicacion": "El ládano es la resina aromática que recubre la jara pringosa."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gimnospermas tienen las semillas desnudas, no encerradas en un fruto.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Gimnosperma significa semilla desnuda."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Que la nieve resbale sin romper las ramas",
              "Almacenar agua",
              "Atraer polinizadores",
              "Captar más viento"
            ],
            "correcta": 0,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "En el ciclo de las plantas con semilla, la generación dominante y visible es el:",
            "opciones": [
              "Protalo",
              "Gametófito haploide",
              "Protonema",
              "Esporófito diploide"
            ],
            "correcta": 3,
            "explicacion": "En espermatófitos domina el esporófito 2n."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Los páramos fríos y secos del interior",
              "Las turberas atlánticas",
              "La alta montaña húmeda",
              "Las dunas costeras"
            ],
            "correcta": 0,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "vf",
            "pregunta": "La taiga es el bioma forestal más extenso del planeta, dominado por coníferas perennifolias.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La taiga conserva las mayores masas boscosas del mundo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "La hoja",
              "El fruto",
              "El tallo leñoso",
              "La raíz"
            ],
            "correcta": 1,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "vf",
            "pregunta": "Las areolas, de las que brotan espinas y flores, son un rasgo diagnóstico exclusivo de las cactáceas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Las areolas distinguen a un cactus de una euforbia suculenta."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Euphorbiaceae",
              "Bromeliaceae",
              "Cactaceae",
              "Crassulaceae"
            ],
            "correcta": 0,
            "explicacion": "El látex es típico de las euforbiáceas."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus de rápida descomposición y alta fertilidad del bosque caducifolio es de tipo:",
            "opciones": [
              "Mor",
              "Turba",
              "Moder",
              "Mull"
            ],
            "correcta": 3,
            "explicacion": "El humus mull es fértil y se descompone deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus pyrenaica",
              "Quercus ilex subsp. ballota",
              "Quercus robur",
              "Quercus suber"
            ],
            "correcta": 1,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "vf",
            "pregunta": "El clima mediterráneo se define por concentrar la sequía en el verano, cuando más calor hace.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La coincidencia de sequía y calor estival define el clima mediterráneo."
          },
          {
            "tipo": "vf",
            "pregunta": "Los brezos pertenecen a la familia Ericaceae y tienen hojas diminutas y flores acampanadas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los brezos son ericáceas de hoja menuda y flor en campana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Procede de la degradación del bosque",
              "Vive sumergido",
              "Es la vegetación final y estable",
              "Crece solo sobre yeso"
            ],
            "correcta": 0,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La pluvisilva o selva tropical se caracteriza por:",
            "opciones": [
              "Heladas frecuentes",
              "Suelos muy fértiles y profundos",
              "Calor y humedad elevados todo el año",
              "Una larga estación seca"
            ],
            "correcta": 2,
            "explicacion": "La selva tropical es cálida y húmeda de forma constante."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Aparasolada",
              "Llorona",
              "Cónica perfecta",
              "Columnar estrecha"
            ],
            "correcta": 0,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El aparato de Golgi",
              "El núcleo",
              "El cloroplasto",
              "La mitocondria"
            ],
            "correcta": 2,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de las gramíneas se denomina:",
            "opciones": [
              "Fabaceae",
              "Poaceae",
              "Juncaceae",
              "Cyperaceae"
            ],
            "correcta": 1,
            "explicacion": "Las gramíneas forman la familia Poaceae."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Vive en todos los continentes",
              "Está restringida a un territorio concreto",
              "Ha sido introducida por el hombre",
              "Carece de flores"
            ],
            "correcta": 1,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "vf",
            "pregunta": "En las gramíneas el crecimiento de la hoja se produce por la base, lo que permite el rebrote tras la siega o el pastoreo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El meristemo intercalar basal permite rebrotar tras el corte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un cono serótino es el que:",
            "opciones": [
              "No produce semillas",
              "Permanece cerrado y se abre tras el fuego",
              "Es carnoso y comestible",
              "Cae verde al suelo"
            ],
            "correcta": 1,
            "explicacion": "La serotinia retiene las semillas hasta que el fuego o el calor abren el cono."
          }
        ]
      },
      {
        "id": "GEN-S-20",
        "nombre": "Examen sencillo 20",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las labiadas o Lamiaceae se reconocen, entre otros rasgos, por:",
            "opciones": [
              "Sus frutos en legumbre",
              "Su tallo cuadrangular y aroma",
              "Sus hojas en aguja",
              "Sus flores en cabezuela"
            ],
            "correcta": 1,
            "explicacion": "Tallo de sección cuadrada y aceites aromáticos son típicos de las labiadas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una especie endémica es la que:",
            "opciones": [
              "Vive en todos los continentes",
              "Carece de flores",
              "Ha sido introducida por el hombre",
              "Está restringida a un territorio concreto"
            ],
            "correcta": 3,
            "explicacion": "El endemismo tiene un área de distribución muy limitada."
          },
          {
            "tipo": "multiple",
            "pregunta": "El xilema conduce:",
            "opciones": [
              "Agua y sales minerales desde la raíz",
              "Oxígeno hacia las raíces",
              "Hormonas en ambos sentidos",
              "Azúcares desde las hojas"
            ],
            "correcta": 0,
            "explicacion": "El xilema lleva agua y sales en sentido ascendente."
          },
          {
            "tipo": "multiple",
            "pregunta": "La forma cónica con ramas descendentes de las coníferas boreales sirve para:",
            "opciones": [
              "Que la nieve resbale sin romper las ramas",
              "Almacenar agua",
              "Atraer polinizadores",
              "Captar más viento"
            ],
            "correcta": 0,
            "explicacion": "La copa cónica deja resbalar la nieve."
          },
          {
            "tipo": "multiple",
            "pregunta": "La estructura exclusiva de las angiospermas que, junto con la flor, las define frente a las gimnospermas es:",
            "opciones": [
              "El tallo leñoso",
              "La raíz",
              "El fruto",
              "La hoja"
            ],
            "correcta": 2,
            "explicacion": "El fruto deriva del ovario y protege y dispersa la semilla."
          },
          {
            "tipo": "multiple",
            "pregunta": "La fase oscura o ciclo de Calvin de la fotosíntesis ocurre en:",
            "opciones": [
              "El estroma del cloroplasto",
              "La matriz mitocondrial",
              "La membrana del tilacoide",
              "El citosol"
            ],
            "correcta": 0,
            "explicacion": "El ciclo de Calvin se desarrolla en el estroma del cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las primeras plantas terrestres, sin tejidos vasculares, fueron los:",
            "opciones": [
              "Pteridófitos",
              "Gimnospermas",
              "Briófitos",
              "Angiospermas"
            ],
            "correcta": 2,
            "explicacion": "Los briófitos colonizaron el medio terrestre sin tejidos vasculares."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pino piñonero Pinus pinea se reconoce por su copa:",
            "opciones": [
              "Columnar estrecha",
              "Cónica perfecta",
              "Aparasolada",
              "Llorona"
            ],
            "correcta": 2,
            "explicacion": "La copa aparasolada es el rasgo inconfundible del piñonero."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque mediterráneo se caracteriza por hojas:",
            "opciones": [
              "Aciculares en fascículos",
              "Carnosas y suculentas",
              "Esclerófilas, duras y perennes",
              "Grandes y blandas"
            ],
            "correcta": 2,
            "explicacion": "La esclerofilia perenne es el rasgo central mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La asociación simbiótica entre las raíces de la mayoría de plantas y ciertos hongos se llama:",
            "opciones": [
              "Liquen",
              "Haustorio",
              "Micorriza",
              "Nódulo radical"
            ],
            "correcta": 2,
            "explicacion": "La micorriza es la simbiosis raíz-hongo, presente en más del 80 % de las plantas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas que viven junto a los ríos y dependen del agua freática forman la vegetación:",
            "opciones": [
              "Halófila",
              "Rupícola",
              "Climácica",
              "De ribera o riparia"
            ],
            "correcta": 3,
            "explicacion": "La vegetación de ribera ocupa las orillas de los cauces."
          },
          {
            "tipo": "vf",
            "pregunta": "En la pluvisilva la mayor parte de los nutrientes está en la biomasa, no en el suelo, que es pobre y laterítico.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El reciclaje es rápido y el suelo laterítico es pobre."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas adaptadas a vivir en suelos salinos se denominan:",
            "opciones": [
              "Psamófilas",
              "Calcícolas",
              "Gipsófilas",
              "Halófilas"
            ],
            "correcta": 3,
            "explicacion": "Las halófilas viven en suelos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "La evolución es el cambio en las características hereditarias de las poblaciones a lo largo de las generaciones.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa es la definición de evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "La familia de plantas con flor papilionácea y nódulos fijadores de nitrógeno es:",
            "opciones": [
              "Leguminosae",
              "Orchidaceae",
              "Poaceae",
              "Cactaceae"
            ],
            "correcta": 0,
            "explicacion": "Las leguminosas fijan nitrógeno en nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un matorral serial es el que:",
            "opciones": [
              "Vive sumergido",
              "Procede de la degradación del bosque",
              "Crece solo sobre yeso",
              "Es la vegetación final y estable"
            ],
            "correcta": 1,
            "explicacion": "Los matorrales seriales son etapas de sustitución del bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El metabolismo CAM permite a las plantas de desierto:",
            "opciones": [
              "Abrir los estomas de noche para ahorrar agua",
              "Fijar nitrógeno",
              "Fotosintetizar sin luz",
              "Crecer sin raíces"
            ],
            "correcta": 0,
            "explicacion": "El CAM separa la captación nocturna de CO2 del uso diurno, ahorrando agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La encina ibérica del interior, indiferente al sustrato, es:",
            "opciones": [
              "Quercus pyrenaica",
              "Quercus suber",
              "Quercus ilex subsp. ballota",
              "Quercus robur"
            ],
            "correcta": 2,
            "explicacion": "La carrasca Q. ilex subsp. ballota domina el interior peninsular."
          },
          {
            "tipo": "multiple",
            "pregunta": "La acumulación de turba en zonas frías y encharcadas, por descomposición lenta sin oxígeno, da lugar a:",
            "opciones": [
              "Turberas",
              "Dunas",
              "Salares",
              "Podsoles"
            ],
            "correcta": 0,
            "explicacion": "En condiciones anóxicas y frías se forman turberas."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la tundra dominan las plantas de porte:",
            "opciones": [
              "Bajo, almohadillado o rastrero",
              "Epífito",
              "Trepador",
              "Arbóreo alto"
            ],
            "correcta": 0,
            "explicacion": "El frío y el viento favorecen el porte bajo y compacto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El orgánulo donde se realiza la fotosíntesis es:",
            "opciones": [
              "El núcleo",
              "El aparato de Golgi",
              "La mitocondria",
              "El cloroplasto"
            ],
            "correcta": 3,
            "explicacion": "La fotosíntesis ocurre en el cloroplasto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El bosque templado caducifolio pierde las hojas:",
            "opciones": [
              "Solo tras un incendio",
              "En otoño-invierno por el frío",
              "Nunca, es perenne",
              "En verano por la sequía"
            ],
            "correcta": 1,
            "explicacion": "Es un bosque caducifolio de invierno frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La innovación que permitió a los pteridófitos crecer en altura fue:",
            "opciones": [
              "Los tejidos vasculares",
              "La flor",
              "La semilla",
              "El fruto"
            ],
            "correcta": 0,
            "explicacion": "El xilema y el floema permitieron el transporte y el sostén en altura."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un bioma es:",
            "opciones": [
              "Un gran tipo de vegetación asociado a un clima",
              "Un catálogo florístico",
              "Una comunidad de un solo estrato",
              "Una sola especie dominante"
            ],
            "correcta": 0,
            "explicacion": "El bioma es un gran tipo de vegetación ligado a un clima."
          },
          {
            "tipo": "vf",
            "pregunta": "La flora es el catálogo de especies de un territorio, y la vegetación es cómo se organizan en el espacio con su abundancia.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Flora = catálogo de especies; vegetación = su organización y abundancia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El diagrama que ordena los biomas según temperatura y precipitación es el de:",
            "opciones": [
              "Whittaker",
              "Raunkiær",
              "Walter-Lieth",
              "Holdridge"
            ],
            "correcta": 0,
            "explicacion": "El diagrama de Whittaker usa temperatura y precipitación."
          },
          {
            "tipo": "vf",
            "pregunta": "El componente principal de la pared celular de las plantas es la celulosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La pared vegetal es básicamente de celulosa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sabina albar Juniperus thurifera es característica de:",
            "opciones": [
              "Las dunas costeras",
              "Los páramos fríos y secos del interior",
              "Las turberas atlánticas",
              "La alta montaña húmeda"
            ],
            "correcta": 1,
            "explicacion": "Forma bosques abiertos en parameras frías y secas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las estepas y praderas templadas aparecen en los interiores continentales porque:",
            "opciones": [
              "Falta luz",
              "Reciben menos lluvia que las costas, por la sombra de lluvias",
              "Hace demasiado calor",
              "El suelo es salino"
            ],
            "correcta": 1,
            "explicacion": "La menor precipitación interior impide el bosque cerrado."
          },
          {
            "tipo": "multiple",
            "pregunta": "El látex lechoso presente en casi todas sus especies es característico de la familia:",
            "opciones": [
              "Bromeliaceae",
              "Crassulaceae",
              "Euphorbiaceae",
              "Cactaceae"
            ],
            "correcta": 2,
            "explicacion": "El látex es típico de las euforbiáceas."
          }
        ]
      }
    ],
    "medio": [
      {
        "id": "GEN-M-01",
        "nombre": "Examen medio 1",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Calor y luz intensa",
              "Salinidad alta",
              "Sombra y frío",
              "Mucha agua disponible"
            ],
            "correcta": 0,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Marcescente y submediterráneo",
              "De clima tropical",
              "Perennifolio y esclerófilo",
              "Una conífera de montaña"
            ],
            "correcta": 0,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Vive en el agua",
              "No le afecta el fuego",
              "Sus semillas germinan tras el fuego",
              "Rebrota de raíz"
            ],
            "correcta": 2,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En primavera",
              "Solo de noche",
              "En pleno verano",
              "En invierno bajo la nieve"
            ],
            "correcta": 0,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Fotosintetizar de noche",
              "Resistir el fuego",
              "Tolerar la sal del suelo marino",
              "Fijar nitrógeno atmosférico"
            ],
            "correcta": 3,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "Aumenta la biodiversidad",
              "El suelo es muy fértil y se recupera solo",
              "No afecta al clima",
              "Los nutrientes están en la biomasa, no en el suelo"
            ],
            "correcta": 3,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "Solo en invierno",
              "Sin estomas",
              "De día con los estomas abiertos",
              "De noche"
            ],
            "correcta": 3,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Son anuales",
              "Crecen muy altos",
              "Toleran mejor el frío y la desecación",
              "Necesitan suelos profundos"
            ],
            "correcta": 2,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una palmera",
              "Un pino",
              "Un brezo arbustivo de la montaña",
              "Una encina arbustiva espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Nothofagus",
              "Quercus de hoja perenne",
              "Fagus",
              "Betula"
            ],
            "correcta": 0,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Brezos de la familia de las ericáceas",
              "Helechos",
              "Cactáceas",
              "Labiadas como romero y tomillo"
            ],
            "correcta": 3,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Son acuáticas",
              "Fueron plantadas por el hombre",
              "Antes ocupaban todo el hemisferio norte",
              "Vuelan sus semillas"
            ],
            "correcta": 2,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "El viento",
              "La lluvia ácida",
              "Los incendios recurrentes del verano",
              "Los ciclos de hielo y deshielo"
            ],
            "correcta": 3,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Suculencia",
              "Esclerofilia con hojas duras y perennes",
              "Tallos asimilantes con hojas reducidas",
              "Caulifloría"
            ],
            "correcta": 2,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "El gradiente de salinidad del suelo",
              "La altitud",
              "El régimen de fuego",
              "La luz disponible a lo largo del día"
            ],
            "correcta": 0,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Cambia de hospedador",
              "Pierde la mitad de sus cromosomas",
              "Deja de reproducirse",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo"
            ],
            "correcta": 3,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Una sola flor",
              "Un cono leñoso",
              "Un fruto carnoso",
              "Una espiga colgante"
            ],
            "correcta": 0,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es una conífera",
              "Es muy umbrófila y da sombra densa",
              "Vive en el desierto",
              "Necesita mucha luz"
            ],
            "correcta": 1,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Rebrotan de raíz",
              "No arden nunca",
              "Tienen piñas serótinas",
              "Producen semillas todo el año"
            ],
            "correcta": 2,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Una cúpula",
              "Un ala membranosa",
              "Una baya",
              "Un vilano"
            ],
            "correcta": 0,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El número de cromosomas",
              "El tipo de polinización",
              "La presencia de flores",
              "Si la separación es geográfica o se da en el mismo lugar"
            ],
            "correcta": 3,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Se ahorra agua",
              "Se elimina la fotosíntesis",
              "Se producen esporas más grandes",
              "Domina la generación diploide"
            ],
            "correcta": 3,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El fruto",
              "El polen",
              "La semilla",
              "La doble fecundación"
            ],
            "correcta": 1,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es una subespecie",
              "Es venenoso",
              "Es completamente estéril",
              "Es de origen híbrido"
            ],
            "correcta": 3,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Fijar nitrógeno",
              "Almacenar grandes reservas de polen",
              "Rebrotar tras el fuego",
              "Flotar en el agua"
            ],
            "correcta": 2,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Aciculares en haces",
              "Pequeñas, duras y perennes",
              "Grandes, blandas y caducas en otoño",
              "Carnosas y suculentas"
            ],
            "correcta": 1,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          }
        ]
      },
      {
        "id": "GEN-M-02",
        "nombre": "Examen medio 2",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "Incluye ancestro y todos los descendientes",
              "No tiene ancestro común",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Reúne linajes de orígenes distintos"
            ],
            "correcta": 2,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La salinización",
              "La gleyzación",
              "La laterización de suelos tropicales",
              "La podsolización"
            ],
            "correcta": 3,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "Las dunas costeras",
              "Los Pirineos húmedos",
              "El árido sureste peninsular seco",
              "La meseta seca"
            ],
            "correcta": 1,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Escurrir rápido el agua de lluvia",
              "Atraer polinizadores",
              "Defenderse de herbívoros",
              "Almacenar agua"
            ],
            "correcta": 0,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Vive flotando",
              "Excluye toda la sal por las raíces",
              "Pierde las hojas",
              "Es suculenta y acumula agua"
            ],
            "correcta": 3,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "Justo en las riberas de los ríos",
              "En la cima de las montañas",
              "A sotavento de las montañas",
              "En la costa"
            ],
            "correcta": 2,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Fijan nitrógeno atmosférico",
              "Almacenan agua",
              "Producen látex",
              "Acumulan grandes cantidades de sal"
            ],
            "correcta": 0,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Vive bajo tierra",
              "Es siempre acuática",
              "Solo lo usa como soporte",
              "Extrae savia del hospedador"
            ],
            "correcta": 2,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Polares",
              "Walker",
              "Ferrel",
              "Hadley"
            ],
            "correcta": 3,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "La forma de la flor",
              "El tamaño",
              "El color",
              "Las areolas del cactus frente al látex de la euforbia"
            ],
            "correcta": 3,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "El avance del matorral y el bosque",
              "La desaparición total del bosque",
              "La salinización del suelo",
              "La extinción de la flora"
            ],
            "correcta": 0,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Resiste el fuego",
              "Fija nitrógeno y tolera el encharcamiento",
              "Crece en desiertos",
              "Da frutos comestibles"
            ],
            "correcta": 1,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Carnívora",
              "Hemiparásita",
              "Epífita",
              "Saprófita o descomponedora"
            ],
            "correcta": 1,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La luz solar directa del mediodía",
              "La radiación",
              "Los vientos y las corrientes",
              "La gravedad"
            ],
            "correcta": 2,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Sequía total",
              "Una vertiente húmeda y otra seca",
              "Nieve en ambas caras",
              "Dos vertientes igual de húmedas"
            ],
            "correcta": 1,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "Bajo el suelo",
              "En el agua",
              "En la punta de las ramas",
              "En las semillas"
            ],
            "correcta": 0,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "Sus hojas son aciculares",
              "Sus bellotas cuelgan de un pedúnculo",
              "Es perennifolio",
              "No produce bellotas"
            ],
            "correcta": 1,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Termomediterráneo",
              "Supramediterráneo",
              "Oromediterráneo",
              "Crioromediterráneo"
            ],
            "correcta": 0,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "Bajo la epidermis superior de la hoja",
              "En la raíz profunda",
              "Dentro del xilema",
              "En la médula del tallo"
            ],
            "correcta": 0,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Una conífera",
              "Marcescente y acidófilo",
              "Una palmera",
              "Perennifolio y calcícola"
            ],
            "correcta": 1,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Atrapar insectos",
              "Sujetar el árbol",
              "Fijar nitrógeno",
              "Almacenar agua"
            ],
            "correcta": 1,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es muy umbrófila y da sombra densa",
              "Vive en el desierto",
              "Necesita mucha luz",
              "Es una conífera"
            ],
            "correcta": 0,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Bióticos",
              "De dispersión",
              "Climáticos",
              "Abióticos"
            ],
            "correcta": 0,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las raíces",
              "Las hojas jóvenes",
              "Las hojas viejas",
              "Las flores"
            ],
            "correcta": 2,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          }
        ]
      },
      {
        "id": "GEN-M-03",
        "nombre": "Examen medio 3",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Crioromediterráneo",
              "Termomediterráneo",
              "Supramediterráneo",
              "Oromediterráneo"
            ],
            "correcta": 1,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Pierde las hojas",
              "Es suculenta y acumula agua",
              "Vive flotando",
              "Excluye toda la sal por las raíces"
            ],
            "correcta": 1,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "No arden nunca",
              "Producen semillas todo el año",
              "Rebrotan de raíz",
              "Tienen piñas serótinas"
            ],
            "correcta": 3,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "Aumenta la biodiversidad",
              "Los nutrientes están en la biomasa, no en el suelo",
              "No afecta al clima",
              "El suelo es muy fértil y se recupera solo"
            ],
            "correcta": 1,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La salinización",
              "La gleyzación",
              "La podsolización",
              "La laterización de suelos tropicales"
            ],
            "correcta": 2,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Deja de reproducirse",
              "Pierde la mitad de sus cromosomas",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Cambia de hospedador"
            ],
            "correcta": 2,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "Si la separación es geográfica o se da en el mismo lugar",
              "El número de cromosomas",
              "La presencia de flores",
              "El tipo de polinización"
            ],
            "correcta": 0,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Da frutos comestibles",
              "Crece en desiertos",
              "Fija nitrógeno y tolera el encharcamiento",
              "Resiste el fuego"
            ],
            "correcta": 2,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Defenderse de herbívoros",
              "Almacenar agua",
              "Escurrir rápido el agua de lluvia",
              "Atraer polinizadores"
            ],
            "correcta": 2,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una palmera",
              "Un brezo arbustivo de la montaña",
              "Un pino",
              "Una encina arbustiva espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Aciculares en haces",
              "Grandes, blandas y caducas en otoño",
              "Pequeñas, duras y perennes",
              "Carnosas y suculentas"
            ],
            "correcta": 2,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "La forma de la flor",
              "El color",
              "El tamaño",
              "Las areolas del cactus frente al látex de la euforbia"
            ],
            "correcta": 3,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Caulifloría",
              "Tallos asimilantes con hojas reducidas",
              "Suculencia",
              "Esclerofilia con hojas duras y perennes"
            ],
            "correcta": 1,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "La semilla",
              "El fruto",
              "El polen",
              "La doble fecundación"
            ],
            "correcta": 2,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Extrae savia del hospedador",
              "Solo lo usa como soporte",
              "Es siempre acuática",
              "Vive bajo tierra"
            ],
            "correcta": 1,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las flores",
              "Las hojas jóvenes",
              "Las raíces",
              "Las hojas viejas"
            ],
            "correcta": 3,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "En la médula del tallo",
              "Bajo la epidermis superior de la hoja",
              "En la raíz profunda",
              "Dentro del xilema"
            ],
            "correcta": 1,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "El viento",
              "Los ciclos de hielo y deshielo",
              "Los incendios recurrentes del verano",
              "La lluvia ácida"
            ],
            "correcta": 1,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "No produce bellotas",
              "Sus hojas son aciculares",
              "Es perennifolio",
              "Sus bellotas cuelgan de un pedúnculo"
            ],
            "correcta": 3,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "La luz disponible a lo largo del día",
              "El régimen de fuego",
              "El gradiente de salinidad del suelo",
              "La altitud"
            ],
            "correcta": 2,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La gravedad",
              "Los vientos y las corrientes",
              "La luz solar directa del mediodía",
              "La radiación"
            ],
            "correcta": 1,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "El árido sureste peninsular seco",
              "Las dunas costeras",
              "La meseta seca",
              "Los Pirineos húmedos"
            ],
            "correcta": 3,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Fagus",
              "Betula",
              "Nothofagus",
              "Quercus de hoja perenne"
            ],
            "correcta": 2,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En primavera",
              "Solo de noche",
              "En invierno bajo la nieve",
              "En pleno verano"
            ],
            "correcta": 0,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Son acuáticas",
              "Antes ocupaban todo el hemisferio norte",
              "Vuelan sus semillas",
              "Fueron plantadas por el hombre"
            ],
            "correcta": 1,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La extinción de la flora",
              "La desaparición total del bosque",
              "El avance del matorral y el bosque",
              "La salinización del suelo"
            ],
            "correcta": 2,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          }
        ]
      },
      {
        "id": "GEN-M-04",
        "nombre": "Examen medio 4",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Sequía total",
              "Una vertiente húmeda y otra seca",
              "Dos vertientes igual de húmedas",
              "Nieve en ambas caras"
            ],
            "correcta": 1,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Rebrota de raíz",
              "No le afecta el fuego",
              "Sus semillas germinan tras el fuego",
              "Vive en el agua"
            ],
            "correcta": 2,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es venenoso",
              "Es una subespecie",
              "Es completamente estéril",
              "Es de origen híbrido"
            ],
            "correcta": 3,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Resiste el fuego",
              "Da frutos comestibles",
              "Fija nitrógeno y tolera el encharcamiento",
              "Crece en desiertos"
            ],
            "correcta": 2,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Acumulan grandes cantidades de sal",
              "Fijan nitrógeno atmosférico",
              "Almacenan agua",
              "Producen látex"
            ],
            "correcta": 1,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Salinidad alta",
              "Sombra y frío",
              "Calor y luz intensa",
              "Mucha agua disponible"
            ],
            "correcta": 2,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Una espiga colgante",
              "Un cono leñoso",
              "Un fruto carnoso",
              "Una sola flor"
            ],
            "correcta": 3,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Marcescente y acidófilo",
              "Perennifolio y calcícola",
              "Una conífera",
              "Una palmera"
            ],
            "correcta": 0,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Fijar nitrógeno",
              "Sujetar el árbol",
              "Atrapar insectos",
              "Almacenar agua"
            ],
            "correcta": 1,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Fotosintetizar de noche",
              "Resistir el fuego",
              "Fijar nitrógeno atmosférico",
              "Tolerar la sal del suelo marino"
            ],
            "correcta": 2,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la cima de las montañas",
              "En la costa",
              "Justo en las riberas de los ríos",
              "A sotavento de las montañas"
            ],
            "correcta": 3,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Una cúpula",
              "Una baya",
              "Un vilano"
            ],
            "correcta": 1,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Perennifolio y esclerófilo",
              "Marcescente y submediterráneo",
              "De clima tropical",
              "Una conífera de montaña"
            ],
            "correcta": 1,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "Sin estomas",
              "Solo en invierno",
              "De día con los estomas abiertos",
              "De noche"
            ],
            "correcta": 3,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Se ahorra agua",
              "Domina la generación diploide",
              "Se elimina la fotosíntesis",
              "Se producen esporas más grandes"
            ],
            "correcta": 1,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Epífita",
              "Saprófita o descomponedora",
              "Hemiparásita",
              "Carnívora"
            ],
            "correcta": 2,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "Si la separación es geográfica o se da en el mismo lugar",
              "El número de cromosomas",
              "La presencia de flores",
              "El tipo de polinización"
            ],
            "correcta": 0,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Flotar en el agua",
              "Fijar nitrógeno",
              "Rebrotar tras el fuego",
              "Almacenar grandes reservas de polen"
            ],
            "correcta": 2,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Cactáceas",
              "Labiadas como romero y tomillo",
              "Helechos",
              "Brezos de la familia de las ericáceas"
            ],
            "correcta": 1,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Ferrel",
              "Hadley",
              "Walker",
              "Polares"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Son anuales",
              "Necesitan suelos profundos",
              "Crecen muy altos",
              "Toleran mejor el frío y la desecación"
            ],
            "correcta": 3,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "No tiene ancestro común",
              "Reúne linajes de orígenes distintos",
              "Incluye ancestro y todos los descendientes"
            ],
            "correcta": 0,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "De dispersión",
              "Abióticos",
              "Climáticos",
              "Bióticos"
            ],
            "correcta": 3,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "En la punta de las ramas",
              "Bajo el suelo",
              "En las semillas",
              "En el agua"
            ],
            "correcta": 1,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          }
        ]
      },
      {
        "id": "GEN-M-05",
        "nombre": "Examen medio 5",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Salinidad alta",
              "Sombra y frío",
              "Calor y luz intensa",
              "Mucha agua disponible"
            ],
            "correcta": 2,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Sujetar el árbol",
              "Atrapar insectos",
              "Fijar nitrógeno",
              "Almacenar agua"
            ],
            "correcta": 0,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "Solo de noche",
              "En invierno bajo la nieve",
              "En primavera",
              "En pleno verano"
            ],
            "correcta": 2,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Antes ocupaban todo el hemisferio norte",
              "Vuelan sus semillas",
              "Fueron plantadas por el hombre",
              "Son acuáticas"
            ],
            "correcta": 0,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Flotar en el agua",
              "Rebrotar tras el fuego",
              "Almacenar grandes reservas de polen",
              "Fijar nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Almacenan agua",
              "Fijan nitrógeno atmosférico",
              "Producen látex",
              "Acumulan grandes cantidades de sal"
            ],
            "correcta": 1,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Domina la generación diploide",
              "Se ahorra agua",
              "Se producen esporas más grandes",
              "Se elimina la fotosíntesis"
            ],
            "correcta": 0,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Pequeñas, duras y perennes",
              "Carnosas y suculentas",
              "Grandes, blandas y caducas en otoño",
              "Aciculares en haces"
            ],
            "correcta": 0,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Son anuales",
              "Crecen muy altos",
              "Necesitan suelos profundos",
              "Toleran mejor el frío y la desecación"
            ],
            "correcta": 3,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Deja de reproducirse",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Pierde la mitad de sus cromosomas",
              "Cambia de hospedador"
            ],
            "correcta": 1,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "Aumenta la biodiversidad",
              "El suelo es muy fértil y se recupera solo",
              "Los nutrientes están en la biomasa, no en el suelo",
              "No afecta al clima"
            ],
            "correcta": 2,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "El árido sureste peninsular seco",
              "La meseta seca",
              "Las dunas costeras",
              "Los Pirineos húmedos"
            ],
            "correcta": 3,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Bióticos",
              "Climáticos",
              "Abióticos",
              "De dispersión"
            ],
            "correcta": 0,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Marcescente y submediterráneo",
              "Perennifolio y esclerófilo",
              "Una conífera de montaña",
              "De clima tropical"
            ],
            "correcta": 0,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "No tiene ancestro común",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Reúne linajes de orígenes distintos",
              "Incluye ancestro y todos los descendientes"
            ],
            "correcta": 1,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Hadley",
              "Polares",
              "Ferrel",
              "Walker"
            ],
            "correcta": 0,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Almacenar agua",
              "Defenderse de herbívoros",
              "Escurrir rápido el agua de lluvia",
              "Atraer polinizadores"
            ],
            "correcta": 2,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Helechos",
              "Brezos de la familia de las ericáceas",
              "Cactáceas",
              "Labiadas como romero y tomillo"
            ],
            "correcta": 3,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la cima de las montañas",
              "Justo en las riberas de los ríos",
              "En la costa",
              "A sotavento de las montañas"
            ],
            "correcta": 3,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "De día con los estomas abiertos",
              "De noche",
              "Solo en invierno",
              "Sin estomas"
            ],
            "correcta": 1,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "La forma de la flor",
              "El color",
              "El tamaño",
              "Las areolas del cactus frente al látex de la euforbia"
            ],
            "correcta": 3,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "El gradiente de salinidad del suelo",
              "La altitud",
              "El régimen de fuego",
              "La luz disponible a lo largo del día"
            ],
            "correcta": 0,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es una conífera",
              "Necesita mucha luz",
              "Vive en el desierto",
              "Es muy umbrófila y da sombra densa"
            ],
            "correcta": 3,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "El viento",
              "Los incendios recurrentes del verano",
              "Los ciclos de hielo y deshielo",
              "La lluvia ácida"
            ],
            "correcta": 2,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "En el agua",
              "En las semillas",
              "Bajo el suelo",
              "En la punta de las ramas"
            ],
            "correcta": 2,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Nieve en ambas caras",
              "Una vertiente húmeda y otra seca",
              "Sequía total",
              "Dos vertientes igual de húmedas"
            ],
            "correcta": 1,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          }
        ]
      },
      {
        "id": "GEN-M-06",
        "nombre": "Examen medio 6",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Oromediterráneo",
              "Crioromediterráneo",
              "Supramediterráneo",
              "Termomediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "Incluye ancestro y todos los descendientes",
              "No tiene ancestro común",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Reúne linajes de orígenes distintos"
            ],
            "correcta": 2,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas jóvenes",
              "Las flores",
              "Las raíces",
              "Las hojas viejas"
            ],
            "correcta": 3,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una encina arbustiva espinosa",
              "Un brezo arbustivo de la montaña",
              "Un pino",
              "Una palmera"
            ],
            "correcta": 0,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "La doble fecundación",
              "La semilla",
              "El polen",
              "El fruto"
            ],
            "correcta": 2,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "En la médula del tallo",
              "En la raíz profunda",
              "Dentro del xilema",
              "Bajo la epidermis superior de la hoja"
            ],
            "correcta": 3,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Extrae savia del hospedador",
              "Solo lo usa como soporte",
              "Es siempre acuática",
              "Vive bajo tierra"
            ],
            "correcta": 1,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es una subespecie",
              "Es venenoso",
              "Es completamente estéril",
              "Es de origen híbrido"
            ],
            "correcta": 3,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Rebrota de raíz",
              "Vive en el agua",
              "Sus semillas germinan tras el fuego",
              "No le afecta el fuego"
            ],
            "correcta": 2,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Una palmera",
              "Perennifolio y calcícola",
              "Una conífera",
              "Marcescente y acidófilo"
            ],
            "correcta": 3,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Una baya",
              "Un vilano",
              "Un ala membranosa",
              "Una cúpula"
            ],
            "correcta": 3,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La radiación",
              "La luz solar directa del mediodía",
              "Los vientos y las corrientes",
              "La gravedad"
            ],
            "correcta": 2,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Fagus",
              "Quercus de hoja perenne",
              "Betula",
              "Nothofagus"
            ],
            "correcta": 3,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Pierde las hojas",
              "Vive flotando",
              "Es suculenta y acumula agua",
              "Excluye toda la sal por las raíces"
            ],
            "correcta": 2,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Esclerofilia con hojas duras y perennes",
              "Tallos asimilantes con hojas reducidas",
              "Caulifloría",
              "Suculencia"
            ],
            "correcta": 1,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Saprófita o descomponedora",
              "Hemiparásita",
              "Carnívora",
              "Epífita"
            ],
            "correcta": 1,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Fijar nitrógeno atmosférico",
              "Fotosintetizar de noche",
              "Tolerar la sal del suelo marino",
              "Resistir el fuego"
            ],
            "correcta": 0,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Una espiga colgante",
              "Un cono leñoso",
              "Una sola flor",
              "Un fruto carnoso"
            ],
            "correcta": 2,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "El avance del matorral y el bosque",
              "La desaparición total del bosque",
              "La extinción de la flora",
              "La salinización del suelo"
            ],
            "correcta": 0,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Climáticos",
              "De dispersión",
              "Abióticos",
              "Bióticos"
            ],
            "correcta": 3,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "No produce bellotas",
              "Sus bellotas cuelgan de un pedúnculo",
              "Sus hojas son aciculares",
              "Es perennifolio"
            ],
            "correcta": 1,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "La meseta seca",
              "Los Pirineos húmedos",
              "El árido sureste peninsular seco",
              "Las dunas costeras"
            ],
            "correcta": 1,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Producen semillas todo el año",
              "Rebrotan de raíz",
              "No arden nunca",
              "Tienen piñas serótinas"
            ],
            "correcta": 3,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La salinización",
              "La podsolización",
              "La laterización de suelos tropicales",
              "La gleyzación"
            ],
            "correcta": 1,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          }
        ]
      },
      {
        "id": "GEN-M-07",
        "nombre": "Examen medio 7",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Un cono leñoso",
              "Una espiga colgante",
              "Una sola flor",
              "Un fruto carnoso"
            ],
            "correcta": 2,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Suculencia",
              "Caulifloría",
              "Tallos asimilantes con hojas reducidas",
              "Esclerofilia con hojas duras y perennes"
            ],
            "correcta": 2,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Calor y luz intensa",
              "Sombra y frío",
              "Salinidad alta",
              "Mucha agua disponible"
            ],
            "correcta": 0,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En pleno verano",
              "Solo de noche",
              "En invierno bajo la nieve",
              "En primavera"
            ],
            "correcta": 3,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es de origen híbrido",
              "Es una subespecie",
              "Es venenoso",
              "Es completamente estéril"
            ],
            "correcta": 0,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La radiación",
              "La luz solar directa del mediodía",
              "Los vientos y las corrientes",
              "La gravedad"
            ],
            "correcta": 2,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Vive flotando",
              "Es suculenta y acumula agua",
              "Excluye toda la sal por las raíces",
              "Pierde las hojas"
            ],
            "correcta": 1,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El fruto",
              "La semilla",
              "El polen",
              "La doble fecundación"
            ],
            "correcta": 2,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Marcescente y acidófilo",
              "Perennifolio y calcícola",
              "Una conífera",
              "Una palmera"
            ],
            "correcta": 0,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Una conífera de montaña",
              "De clima tropical",
              "Perennifolio y esclerófilo",
              "Marcescente y submediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es una conífera",
              "Vive en el desierto",
              "Necesita mucha luz",
              "Es muy umbrófila y da sombra densa"
            ],
            "correcta": 3,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Hemiparásita",
              "Carnívora",
              "Epífita",
              "Saprófita o descomponedora"
            ],
            "correcta": 0,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "No arden nunca",
              "Rebrotan de raíz",
              "Producen semillas todo el año",
              "Tienen piñas serótinas"
            ],
            "correcta": 3,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la costa",
              "Justo en las riberas de los ríos",
              "A sotavento de las montañas",
              "En la cima de las montañas"
            ],
            "correcta": 2,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "El régimen de fuego",
              "La altitud",
              "La luz disponible a lo largo del día",
              "El gradiente de salinidad del suelo"
            ],
            "correcta": 3,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Atraer polinizadores",
              "Almacenar agua",
              "Defenderse de herbívoros",
              "Escurrir rápido el agua de lluvia"
            ],
            "correcta": 3,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Toleran mejor el frío y la desecación",
              "Necesitan suelos profundos",
              "Son anuales",
              "Crecen muy altos"
            ],
            "correcta": 0,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Vive en el agua",
              "Rebrota de raíz",
              "No le afecta el fuego",
              "Sus semillas germinan tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "Los incendios recurrentes del verano",
              "El viento",
              "Los ciclos de hielo y deshielo",
              "La lluvia ácida"
            ],
            "correcta": 2,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Quercus de hoja perenne",
              "Fagus",
              "Betula",
              "Nothofagus"
            ],
            "correcta": 3,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Nieve en ambas caras",
              "Una vertiente húmeda y otra seca",
              "Dos vertientes igual de húmedas",
              "Sequía total"
            ],
            "correcta": 1,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Una baya",
              "Una cúpula",
              "Un vilano"
            ],
            "correcta": 2,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Cactáceas",
              "Brezos de la familia de las ericáceas",
              "Labiadas como romero y tomillo",
              "Helechos"
            ],
            "correcta": 2,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Se producen esporas más grandes",
              "Se ahorra agua",
              "Domina la generación diploide",
              "Se elimina la fotosíntesis"
            ],
            "correcta": 2,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El número de cromosomas",
              "El tipo de polinización",
              "Si la separación es geográfica o se da en el mismo lugar",
              "La presencia de flores"
            ],
            "correcta": 2,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas jóvenes",
              "Las hojas viejas",
              "Las raíces",
              "Las flores"
            ],
            "correcta": 1,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          }
        ]
      },
      {
        "id": "GEN-M-08",
        "nombre": "Examen medio 8",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "Sus hojas son aciculares",
              "Es perennifolio",
              "No produce bellotas",
              "Sus bellotas cuelgan de un pedúnculo"
            ],
            "correcta": 3,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La gleyzación",
              "La podsolización",
              "La laterización de suelos tropicales",
              "La salinización"
            ],
            "correcta": 1,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Hadley",
              "Walker",
              "Ferrel",
              "Polares"
            ],
            "correcta": 0,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "De noche",
              "Sin estomas",
              "Solo en invierno",
              "De día con los estomas abiertos"
            ],
            "correcta": 0,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Fueron plantadas por el hombre",
              "Antes ocupaban todo el hemisferio norte",
              "Son acuáticas",
              "Vuelan sus semillas"
            ],
            "correcta": 1,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "No le afecta el fuego",
              "Vive en el agua",
              "Rebrota de raíz",
              "Sus semillas germinan tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Fijar nitrógeno",
              "Almacenar agua",
              "Sujetar el árbol",
              "Atrapar insectos"
            ],
            "correcta": 2,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "En las semillas",
              "Bajo el suelo",
              "En el agua",
              "En la punta de las ramas"
            ],
            "correcta": 1,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Acumulan grandes cantidades de sal",
              "Fijan nitrógeno atmosférico",
              "Almacenan agua",
              "Producen látex"
            ],
            "correcta": 1,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Grandes, blandas y caducas en otoño",
              "Aciculares en haces",
              "Pequeñas, duras y perennes",
              "Carnosas y suculentas"
            ],
            "correcta": 2,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "Los nutrientes están en la biomasa, no en el suelo",
              "No afecta al clima",
              "Aumenta la biodiversidad",
              "El suelo es muy fértil y se recupera solo"
            ],
            "correcta": 0,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Cambia de hospedador",
              "Deja de reproducirse",
              "Pierde la mitad de sus cromosomas",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo"
            ],
            "correcta": 3,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Un pino",
              "Un brezo arbustivo de la montaña",
              "Una encina arbustiva espinosa",
              "Una palmera"
            ],
            "correcta": 2,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Da frutos comestibles",
              "Fija nitrógeno y tolera el encharcamiento",
              "Resiste el fuego",
              "Crece en desiertos"
            ],
            "correcta": 1,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Rebrotan de raíz",
              "Producen semillas todo el año",
              "No arden nunca",
              "Tienen piñas serótinas"
            ],
            "correcta": 3,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La salinización del suelo",
              "La desaparición total del bosque",
              "El avance del matorral y el bosque",
              "La extinción de la flora"
            ],
            "correcta": 2,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Extrae savia del hospedador",
              "Es siempre acuática",
              "Solo lo usa como soporte",
              "Vive bajo tierra"
            ],
            "correcta": 2,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "Los ciclos de hielo y deshielo",
              "La lluvia ácida",
              "Los incendios recurrentes del verano",
              "El viento"
            ],
            "correcta": 0,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "En la médula del tallo",
              "Dentro del xilema",
              "En la raíz profunda",
              "Bajo la epidermis superior de la hoja"
            ],
            "correcta": 3,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Flotar en el agua",
              "Almacenar grandes reservas de polen",
              "Fijar nitrógeno",
              "Rebrotar tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Supramediterráneo",
              "Termomediterráneo",
              "Oromediterráneo",
              "Crioromediterráneo"
            ],
            "correcta": 1,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "Las areolas del cactus frente al látex de la euforbia",
              "La forma de la flor",
              "El tamaño",
              "El color"
            ],
            "correcta": 0,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Fijar nitrógeno atmosférico",
              "Resistir el fuego",
              "Tolerar la sal del suelo marino",
              "Fotosintetizar de noche"
            ],
            "correcta": 0,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          }
        ]
      },
      {
        "id": "GEN-M-09",
        "nombre": "Examen medio 9",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Domina la generación diploide",
              "Se elimina la fotosíntesis",
              "Se producen esporas más grandes",
              "Se ahorra agua"
            ],
            "correcta": 0,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una encina arbustiva espinosa",
              "Un pino",
              "Una palmera",
              "Un brezo arbustivo de la montaña"
            ],
            "correcta": 0,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es venenoso",
              "Es de origen híbrido",
              "Es completamente estéril",
              "Es una subespecie"
            ],
            "correcta": 1,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Acumulan grandes cantidades de sal",
              "Producen látex",
              "Fijan nitrógeno atmosférico",
              "Almacenan agua"
            ],
            "correcta": 2,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "El árido sureste peninsular seco",
              "Los Pirineos húmedos",
              "Las dunas costeras",
              "La meseta seca"
            ],
            "correcta": 1,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Pierde la mitad de sus cromosomas",
              "Deja de reproducirse",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Cambia de hospedador"
            ],
            "correcta": 2,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las flores",
              "Las raíces",
              "Las hojas jóvenes",
              "Las hojas viejas"
            ],
            "correcta": 3,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Un fruto carnoso",
              "Un cono leñoso",
              "Una sola flor",
              "Una espiga colgante"
            ],
            "correcta": 2,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Fija nitrógeno y tolera el encharcamiento",
              "Da frutos comestibles",
              "Resiste el fuego",
              "Crece en desiertos"
            ],
            "correcta": 0,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El polen",
              "El fruto",
              "La semilla",
              "La doble fecundación"
            ],
            "correcta": 0,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La gleyzación",
              "La podsolización",
              "La laterización de suelos tropicales",
              "La salinización"
            ],
            "correcta": 1,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Son anuales",
              "Necesitan suelos profundos",
              "Crecen muy altos",
              "Toleran mejor el frío y la desecación"
            ],
            "correcta": 3,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Fijar nitrógeno",
              "Atrapar insectos",
              "Almacenar agua",
              "Sujetar el árbol"
            ],
            "correcta": 3,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Hemiparásita",
              "Carnívora",
              "Saprófita o descomponedora",
              "Epífita"
            ],
            "correcta": 0,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Escurrir rápido el agua de lluvia",
              "Almacenar agua",
              "Atraer polinizadores",
              "Defenderse de herbívoros"
            ],
            "correcta": 0,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "El régimen de fuego",
              "La altitud",
              "El gradiente de salinidad del suelo",
              "La luz disponible a lo largo del día"
            ],
            "correcta": 2,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "El tamaño",
              "La forma de la flor",
              "El color",
              "Las areolas del cactus frente al látex de la euforbia"
            ],
            "correcta": 3,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Tolerar la sal del suelo marino",
              "Resistir el fuego",
              "Fijar nitrógeno atmosférico",
              "Fotosintetizar de noche"
            ],
            "correcta": 2,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Fagus",
              "Nothofagus",
              "Betula",
              "Quercus de hoja perenne"
            ],
            "correcta": 1,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Vive flotando",
              "Excluye toda la sal por las raíces",
              "Pierde las hojas",
              "Es suculenta y acumula agua"
            ],
            "correcta": 3,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Perennifolio y calcícola",
              "Una conífera",
              "Una palmera",
              "Marcescente y acidófilo"
            ],
            "correcta": 3,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En primavera",
              "En pleno verano",
              "Solo de noche",
              "En invierno bajo la nieve"
            ],
            "correcta": 0,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "Dentro del xilema",
              "Bajo la epidermis superior de la hoja",
              "En la médula del tallo",
              "En la raíz profunda"
            ],
            "correcta": 1,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Es siempre acuática",
              "Extrae savia del hospedador",
              "Vive bajo tierra",
              "Solo lo usa como soporte"
            ],
            "correcta": 3,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El número de cromosomas",
              "Si la separación es geográfica o se da en el mismo lugar",
              "La presencia de flores",
              "El tipo de polinización"
            ],
            "correcta": 1,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Un vilano",
              "Una baya",
              "Una cúpula"
            ],
            "correcta": 3,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Carnosas y suculentas",
              "Pequeñas, duras y perennes",
              "Aciculares en haces",
              "Grandes, blandas y caducas en otoño"
            ],
            "correcta": 1,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          }
        ]
      },
      {
        "id": "GEN-M-10",
        "nombre": "Examen medio 10",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Bióticos",
              "De dispersión",
              "Climáticos",
              "Abióticos"
            ],
            "correcta": 0,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "No afecta al clima",
              "Los nutrientes están en la biomasa, no en el suelo",
              "El suelo es muy fértil y se recupera solo",
              "Aumenta la biodiversidad"
            ],
            "correcta": 1,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Fueron plantadas por el hombre",
              "Son acuáticas",
              "Vuelan sus semillas",
              "Antes ocupaban todo el hemisferio norte"
            ],
            "correcta": 3,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Flotar en el agua",
              "Fijar nitrógeno",
              "Rebrotar tras el fuego",
              "Almacenar grandes reservas de polen"
            ],
            "correcta": 2,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El fruto",
              "El polen",
              "La doble fecundación",
              "La semilla"
            ],
            "correcta": 1,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "Justo en las riberas de los ríos",
              "En la cima de las montañas",
              "En la costa",
              "A sotavento de las montañas"
            ],
            "correcta": 3,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La radiación",
              "La luz solar directa del mediodía",
              "Los vientos y las corrientes",
              "La gravedad"
            ],
            "correcta": 2,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "La altitud",
              "El gradiente de salinidad del suelo",
              "La luz disponible a lo largo del día",
              "El régimen de fuego"
            ],
            "correcta": 1,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Mucha agua disponible",
              "Sombra y frío",
              "Salinidad alta",
              "Calor y luz intensa"
            ],
            "correcta": 3,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Cactáceas",
              "Labiadas como romero y tomillo",
              "Helechos",
              "Brezos de la familia de las ericáceas"
            ],
            "correcta": 1,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Tolerar la sal del suelo marino",
              "Fijar nitrógeno atmosférico",
              "Resistir el fuego",
              "Fotosintetizar de noche"
            ],
            "correcta": 1,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Esclerofilia con hojas duras y perennes",
              "Caulifloría",
              "Suculencia",
              "Tallos asimilantes con hojas reducidas"
            ],
            "correcta": 3,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Rebrotan de raíz",
              "Tienen piñas serótinas",
              "No arden nunca",
              "Producen semillas todo el año"
            ],
            "correcta": 1,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La extinción de la flora",
              "El avance del matorral y el bosque",
              "La desaparición total del bosque",
              "La salinización del suelo"
            ],
            "correcta": 1,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "Reúne linajes de orígenes distintos",
              "No tiene ancestro común",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Incluye ancestro y todos los descendientes"
            ],
            "correcta": 2,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Vive en el desierto",
              "Es muy umbrófila y da sombra densa",
              "Es una conífera",
              "Necesita mucha luz"
            ],
            "correcta": 1,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Ferrel",
              "Hadley",
              "Polares",
              "Walker"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "En las semillas",
              "En la punta de las ramas",
              "En el agua",
              "Bajo el suelo"
            ],
            "correcta": 3,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "No produce bellotas",
              "Sus hojas son aciculares",
              "Es perennifolio",
              "Sus bellotas cuelgan de un pedúnculo"
            ],
            "correcta": 3,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "De noche",
              "Solo en invierno",
              "De día con los estomas abiertos",
              "Sin estomas"
            ],
            "correcta": 0,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Crioromediterráneo",
              "Oromediterráneo",
              "Supramediterráneo",
              "Termomediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Sequía total",
              "Una vertiente húmeda y otra seca",
              "Dos vertientes igual de húmedas",
              "Nieve en ambas caras"
            ],
            "correcta": 1,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Perennifolio y esclerófilo",
              "De clima tropical",
              "Marcescente y submediterráneo",
              "Una conífera de montaña"
            ],
            "correcta": 2,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "Los incendios recurrentes del verano",
              "Los ciclos de hielo y deshielo",
              "El viento",
              "La lluvia ácida"
            ],
            "correcta": 1,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          }
        ]
      },
      {
        "id": "GEN-M-11",
        "nombre": "Examen medio 11",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Tallos asimilantes con hojas reducidas",
              "Caulifloría",
              "Esclerofilia con hojas duras y perennes",
              "Suculencia"
            ],
            "correcta": 0,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Una conífera de montaña",
              "Perennifolio y esclerófilo",
              "De clima tropical",
              "Marcescente y submediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Extrae savia del hospedador",
              "Vive bajo tierra",
              "Solo lo usa como soporte",
              "Es siempre acuática"
            ],
            "correcta": 2,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Termomediterráneo",
              "Crioromediterráneo",
              "Supramediterráneo",
              "Oromediterráneo"
            ],
            "correcta": 0,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En pleno verano",
              "En invierno bajo la nieve",
              "Solo de noche",
              "En primavera"
            ],
            "correcta": 3,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Necesita mucha luz",
              "Vive en el desierto",
              "Es muy umbrófila y da sombra densa",
              "Es una conífera"
            ],
            "correcta": 2,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Sombra y frío",
              "Calor y luz intensa",
              "Mucha agua disponible",
              "Salinidad alta"
            ],
            "correcta": 1,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Excluye toda la sal por las raíces",
              "Vive flotando",
              "Es suculenta y acumula agua",
              "Pierde las hojas"
            ],
            "correcta": 2,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Sujetar el árbol",
              "Fijar nitrógeno",
              "Almacenar agua",
              "Atrapar insectos"
            ],
            "correcta": 0,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es venenoso",
              "Es de origen híbrido",
              "Es completamente estéril",
              "Es una subespecie"
            ],
            "correcta": 1,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El tipo de polinización",
              "Si la separación es geográfica o se da en el mismo lugar",
              "La presencia de flores",
              "El número de cromosomas"
            ],
            "correcta": 1,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Un fruto carnoso",
              "Una espiga colgante",
              "Un cono leñoso",
              "Una sola flor"
            ],
            "correcta": 3,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "No tiene ancestro común",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Reúne linajes de orígenes distintos",
              "Incluye ancestro y todos los descendientes"
            ],
            "correcta": 1,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Una vertiente húmeda y otra seca",
              "Sequía total",
              "Nieve en ambas caras",
              "Dos vertientes igual de húmedas"
            ],
            "correcta": 0,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "Bajo la epidermis superior de la hoja",
              "Dentro del xilema",
              "En la médula del tallo",
              "En la raíz profunda"
            ],
            "correcta": 0,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "Bajo el suelo",
              "En las semillas",
              "En la punta de las ramas",
              "En el agua"
            ],
            "correcta": 0,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La laterización de suelos tropicales",
              "La gleyzación",
              "La salinización",
              "La podsolización"
            ],
            "correcta": 3,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "No le afecta el fuego",
              "Vive en el agua",
              "Rebrota de raíz",
              "Sus semillas germinan tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Almacenan agua",
              "Acumulan grandes cantidades de sal",
              "Producen látex",
              "Fijan nitrógeno atmosférico"
            ],
            "correcta": 3,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Una conífera",
              "Perennifolio y calcícola",
              "Una palmera",
              "Marcescente y acidófilo"
            ],
            "correcta": 3,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Vuelan sus semillas",
              "Fueron plantadas por el hombre",
              "Son acuáticas",
              "Antes ocupaban todo el hemisferio norte"
            ],
            "correcta": 3,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Se elimina la fotosíntesis",
              "Domina la generación diploide",
              "Se producen esporas más grandes",
              "Se ahorra agua"
            ],
            "correcta": 1,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la costa",
              "En la cima de las montañas",
              "Justo en las riberas de los ríos",
              "A sotavento de las montañas"
            ],
            "correcta": 3,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La desaparición total del bosque",
              "El avance del matorral y el bosque",
              "La extinción de la flora",
              "La salinización del suelo"
            ],
            "correcta": 1,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Quercus de hoja perenne",
              "Betula",
              "Fagus",
              "Nothofagus"
            ],
            "correcta": 3,
            "explicacion": "Nothofagus domina los caducifolios australes."
          }
        ]
      },
      {
        "id": "GEN-M-12",
        "nombre": "Examen medio 12",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Rebrotar tras el fuego",
              "Fijar nitrógeno",
              "Almacenar grandes reservas de polen",
              "Flotar en el agua"
            ],
            "correcta": 0,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Producen látex",
              "Acumulan grandes cantidades de sal",
              "Fijan nitrógeno atmosférico",
              "Almacenan agua"
            ],
            "correcta": 2,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Pierde la mitad de sus cromosomas",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Cambia de hospedador",
              "Deja de reproducirse"
            ],
            "correcta": 1,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Brezos de la familia de las ericáceas",
              "Helechos",
              "Cactáceas",
              "Labiadas como romero y tomillo"
            ],
            "correcta": 3,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "No afecta al clima",
              "El suelo es muy fértil y se recupera solo",
              "Aumenta la biodiversidad",
              "Los nutrientes están en la biomasa, no en el suelo"
            ],
            "correcta": 3,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Son acuáticas",
              "Vuelan sus semillas",
              "Antes ocupaban todo el hemisferio norte",
              "Fueron plantadas por el hombre"
            ],
            "correcta": 2,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "La meseta seca",
              "El árido sureste peninsular seco",
              "Los Pirineos húmedos",
              "Las dunas costeras"
            ],
            "correcta": 2,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Almacenar agua",
              "Escurrir rápido el agua de lluvia",
              "Atraer polinizadores",
              "Defenderse de herbívoros"
            ],
            "correcta": 1,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es venenoso",
              "Es de origen híbrido",
              "Es una subespecie",
              "Es completamente estéril"
            ],
            "correcta": 1,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Una baya",
              "Un ala membranosa",
              "Una cúpula",
              "Un vilano"
            ],
            "correcta": 2,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la costa",
              "Justo en las riberas de los ríos",
              "A sotavento de las montañas",
              "En la cima de las montañas"
            ],
            "correcta": 2,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Ferrel",
              "Hadley",
              "Walker",
              "Polares"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Producen semillas todo el año",
              "Rebrotan de raíz",
              "No arden nunca",
              "Tienen piñas serótinas"
            ],
            "correcta": 3,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Hemiparásita",
              "Epífita",
              "Saprófita o descomponedora",
              "Carnívora"
            ],
            "correcta": 0,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Un pino",
              "Una encina arbustiva espinosa",
              "Un brezo arbustivo de la montaña",
              "Una palmera"
            ],
            "correcta": 1,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La gravedad",
              "Los vientos y las corrientes",
              "La luz solar directa del mediodía",
              "La radiación"
            ],
            "correcta": 1,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "De dispersión",
              "Abióticos",
              "Bióticos",
              "Climáticos"
            ],
            "correcta": 2,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Son anuales",
              "Toleran mejor el frío y la desecación",
              "Crecen muy altos",
              "Necesitan suelos profundos"
            ],
            "correcta": 1,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "Sus bellotas cuelgan de un pedúnculo",
              "Es perennifolio",
              "Sus hojas son aciculares",
              "No produce bellotas"
            ],
            "correcta": 0,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "Las areolas del cactus frente al látex de la euforbia",
              "La forma de la flor",
              "El color",
              "El tamaño"
            ],
            "correcta": 0,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Resiste el fuego",
              "Da frutos comestibles",
              "Fija nitrógeno y tolera el encharcamiento",
              "Crece en desiertos"
            ],
            "correcta": 2,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Pierde las hojas",
              "Excluye toda la sal por las raíces",
              "Es suculenta y acumula agua",
              "Vive flotando"
            ],
            "correcta": 2,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Carnosas y suculentas",
              "Grandes, blandas y caducas en otoño",
              "Aciculares en haces",
              "Pequeñas, duras y perennes"
            ],
            "correcta": 3,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas viejas",
              "Las raíces",
              "Las flores",
              "Las hojas jóvenes"
            ],
            "correcta": 0,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "Solo en invierno",
              "De día con los estomas abiertos",
              "De noche",
              "Sin estomas"
            ],
            "correcta": 2,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          }
        ]
      },
      {
        "id": "GEN-M-13",
        "nombre": "Examen medio 13",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Flotar en el agua",
              "Almacenar grandes reservas de polen",
              "Rebrotar tras el fuego",
              "Fijar nitrógeno"
            ],
            "correcta": 2,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Suculencia",
              "Esclerofilia con hojas duras y perennes",
              "Tallos asimilantes con hojas reducidas",
              "Caulifloría"
            ],
            "correcta": 2,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es una conífera",
              "Es muy umbrófila y da sombra densa",
              "Vive en el desierto",
              "Necesita mucha luz"
            ],
            "correcta": 1,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Una cúpula",
              "Un vilano",
              "Una baya"
            ],
            "correcta": 1,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "Los ciclos de hielo y deshielo",
              "La lluvia ácida",
              "El viento",
              "Los incendios recurrentes del verano"
            ],
            "correcta": 0,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "El gradiente de salinidad del suelo",
              "La altitud",
              "El régimen de fuego",
              "La luz disponible a lo largo del día"
            ],
            "correcta": 0,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "La presencia de flores",
              "Si la separación es geográfica o se da en el mismo lugar",
              "El tipo de polinización",
              "El número de cromosomas"
            ],
            "correcta": 1,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Saprófita o descomponedora",
              "Carnívora",
              "Epífita",
              "Hemiparásita"
            ],
            "correcta": 3,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Sombra y frío",
              "Calor y luz intensa",
              "Mucha agua disponible",
              "Salinidad alta"
            ],
            "correcta": 1,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Es siempre acuática",
              "Solo lo usa como soporte",
              "Extrae savia del hospedador",
              "Vive bajo tierra"
            ],
            "correcta": 1,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Toleran mejor el frío y la desecación",
              "Son anuales",
              "Crecen muy altos",
              "Necesitan suelos profundos"
            ],
            "correcta": 0,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Brezos de la familia de las ericáceas",
              "Helechos",
              "Labiadas como romero y tomillo",
              "Cactáceas"
            ],
            "correcta": 2,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "El color",
              "La forma de la flor",
              "El tamaño",
              "Las areolas del cactus frente al látex de la euforbia"
            ],
            "correcta": 3,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Nieve en ambas caras",
              "Sequía total",
              "Dos vertientes igual de húmedas",
              "Una vertiente húmeda y otra seca"
            ],
            "correcta": 3,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "De día con los estomas abiertos",
              "De noche",
              "Solo en invierno",
              "Sin estomas"
            ],
            "correcta": 1,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Deja de reproducirse",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Cambia de hospedador",
              "Pierde la mitad de sus cromosomas"
            ],
            "correcta": 1,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Nothofagus",
              "Fagus",
              "Quercus de hoja perenne",
              "Betula"
            ],
            "correcta": 0,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "Los Pirineos húmedos",
              "La meseta seca",
              "Las dunas costeras",
              "El árido sureste peninsular seco"
            ],
            "correcta": 0,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Un brezo arbustivo de la montaña",
              "Una encina arbustiva espinosa",
              "Una palmera",
              "Un pino"
            ],
            "correcta": 1,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La luz solar directa del mediodía",
              "La radiación",
              "La gravedad",
              "Los vientos y las corrientes"
            ],
            "correcta": 3,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Una conífera de montaña",
              "Marcescente y submediterráneo",
              "De clima tropical",
              "Perennifolio y esclerófilo"
            ],
            "correcta": 1,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Una sola flor",
              "Un fruto carnoso",
              "Una espiga colgante",
              "Un cono leñoso"
            ],
            "correcta": 0,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Almacenar agua",
              "Escurrir rápido el agua de lluvia",
              "Atraer polinizadores",
              "Defenderse de herbívoros"
            ],
            "correcta": 1,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          }
        ]
      },
      {
        "id": "GEN-M-14",
        "nombre": "Examen medio 14",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Ferrel",
              "Hadley",
              "Polares",
              "Walker"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El fruto",
              "La doble fecundación",
              "La semilla",
              "El polen"
            ],
            "correcta": 3,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Atrapar insectos",
              "Sujetar el árbol",
              "Fijar nitrógeno",
              "Almacenar agua"
            ],
            "correcta": 1,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Carnosas y suculentas",
              "Aciculares en haces",
              "Pequeñas, duras y perennes",
              "Grandes, blandas y caducas en otoño"
            ],
            "correcta": 2,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La gleyzación",
              "La laterización de suelos tropicales",
              "La salinización",
              "La podsolización"
            ],
            "correcta": 3,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Supramediterráneo",
              "Oromediterráneo",
              "Termomediterráneo",
              "Crioromediterráneo"
            ],
            "correcta": 2,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "Bajo la epidermis superior de la hoja",
              "En la raíz profunda",
              "Dentro del xilema",
              "En la médula del tallo"
            ],
            "correcta": 0,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Domina la generación diploide",
              "Se producen esporas más grandes",
              "Se elimina la fotosíntesis",
              "Se ahorra agua"
            ],
            "correcta": 0,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La salinización del suelo",
              "La extinción de la flora",
              "El avance del matorral y el bosque",
              "La desaparición total del bosque"
            ],
            "correcta": 2,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Fagus",
              "Betula",
              "Nothofagus",
              "Quercus de hoja perenne"
            ],
            "correcta": 2,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Vive en el agua",
              "Rebrota de raíz",
              "No le afecta el fuego",
              "Sus semillas germinan tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Dos vertientes igual de húmedas",
              "Nieve en ambas caras",
              "Sequía total",
              "Una vertiente húmeda y otra seca"
            ],
            "correcta": 3,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Resistir el fuego",
              "Fijar nitrógeno atmosférico",
              "Tolerar la sal del suelo marino",
              "Fotosintetizar de noche"
            ],
            "correcta": 1,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En primavera",
              "En pleno verano",
              "Solo de noche",
              "En invierno bajo la nieve"
            ],
            "correcta": 0,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Reúne linajes de orígenes distintos",
              "No tiene ancestro común",
              "Incluye ancestro y todos los descendientes"
            ],
            "correcta": 0,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "No afecta al clima",
              "Los nutrientes están en la biomasa, no en el suelo",
              "El suelo es muy fértil y se recupera solo",
              "Aumenta la biodiversidad"
            ],
            "correcta": 1,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Rebrotar tras el fuego",
              "Almacenar grandes reservas de polen",
              "Fijar nitrógeno",
              "Flotar en el agua"
            ],
            "correcta": 0,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es muy umbrófila y da sombra densa",
              "Vive en el desierto",
              "Necesita mucha luz",
              "Es una conífera"
            ],
            "correcta": 0,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas viejas",
              "Las flores",
              "Las raíces",
              "Las hojas jóvenes"
            ],
            "correcta": 0,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "Es perennifolio",
              "No produce bellotas",
              "Sus bellotas cuelgan de un pedúnculo",
              "Sus hojas son aciculares"
            ],
            "correcta": 2,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Abióticos",
              "De dispersión",
              "Climáticos",
              "Bióticos"
            ],
            "correcta": 3,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Marcescente y acidófilo",
              "Una conífera",
              "Una palmera",
              "Perennifolio y calcícola"
            ],
            "correcta": 0,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Es suculenta y acumula agua",
              "Vive flotando",
              "Pierde las hojas",
              "Excluye toda la sal por las raíces"
            ],
            "correcta": 0,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Da frutos comestibles",
              "Fija nitrógeno y tolera el encharcamiento",
              "Crece en desiertos",
              "Resiste el fuego"
            ],
            "correcta": 1,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "En la punta de las ramas",
              "En las semillas",
              "En el agua",
              "Bajo el suelo"
            ],
            "correcta": 3,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "Los ciclos de hielo y deshielo",
              "El viento",
              "La lluvia ácida",
              "Los incendios recurrentes del verano"
            ],
            "correcta": 0,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          }
        ]
      },
      {
        "id": "GEN-M-15",
        "nombre": "Examen medio 15",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Un vilano",
              "Una baya",
              "Una cúpula"
            ],
            "correcta": 3,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Rebrotan de raíz",
              "Producen semillas todo el año",
              "Tienen piñas serótinas",
              "No arden nunca"
            ],
            "correcta": 2,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es de origen híbrido",
              "Es venenoso",
              "Es una subespecie",
              "Es completamente estéril"
            ],
            "correcta": 0,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Sombra y frío",
              "Mucha agua disponible",
              "Salinidad alta",
              "Calor y luz intensa"
            ],
            "correcta": 3,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Helechos",
              "Cactáceas",
              "Labiadas como romero y tomillo",
              "Brezos de la familia de las ericáceas"
            ],
            "correcta": 2,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la cima de las montañas",
              "En la costa",
              "Justo en las riberas de los ríos",
              "A sotavento de las montañas"
            ],
            "correcta": 3,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Caulifloría",
              "Suculencia",
              "Tallos asimilantes con hojas reducidas",
              "Esclerofilia con hojas duras y perennes"
            ],
            "correcta": 2,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El tipo de polinización",
              "Si la separación es geográfica o se da en el mismo lugar",
              "La presencia de flores",
              "El número de cromosomas"
            ],
            "correcta": 1,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "De noche",
              "Sin estomas",
              "Solo en invierno",
              "De día con los estomas abiertos"
            ],
            "correcta": 0,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "La forma de la flor",
              "El color",
              "Las areolas del cactus frente al látex de la euforbia",
              "El tamaño"
            ],
            "correcta": 2,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Antes ocupaban todo el hemisferio norte",
              "Son acuáticas",
              "Fueron plantadas por el hombre",
              "Vuelan sus semillas"
            ],
            "correcta": 0,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Grandes, blandas y caducas en otoño",
              "Pequeñas, duras y perennes",
              "Carnosas y suculentas",
              "Aciculares en haces"
            ],
            "correcta": 1,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Deja de reproducirse",
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Pierde la mitad de sus cromosomas",
              "Cambia de hospedador"
            ],
            "correcta": 1,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La podsolización",
              "La laterización de suelos tropicales",
              "La gleyzación",
              "La salinización"
            ],
            "correcta": 0,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Ferrel",
              "Polares",
              "Hadley",
              "Walker"
            ],
            "correcta": 2,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Climáticos",
              "De dispersión",
              "Abióticos",
              "Bióticos"
            ],
            "correcta": 3,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La salinización del suelo",
              "El avance del matorral y el bosque",
              "La extinción de la flora",
              "La desaparición total del bosque"
            ],
            "correcta": 1,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Oromediterráneo",
              "Termomediterráneo",
              "Crioromediterráneo",
              "Supramediterráneo"
            ],
            "correcta": 1,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Un cono leñoso",
              "Una espiga colgante",
              "Un fruto carnoso",
              "Una sola flor"
            ],
            "correcta": 3,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Marcescente y acidófilo",
              "Perennifolio y calcícola",
              "Una conífera",
              "Una palmera"
            ],
            "correcta": 0,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una encina arbustiva espinosa",
              "Una palmera",
              "Un pino",
              "Un brezo arbustivo de la montaña"
            ],
            "correcta": 0,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Tolerar la sal del suelo marino",
              "Fijar nitrógeno atmosférico",
              "Fotosintetizar de noche",
              "Resistir el fuego"
            ],
            "correcta": 1,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "El suelo es muy fértil y se recupera solo",
              "Los nutrientes están en la biomasa, no en el suelo",
              "Aumenta la biodiversidad",
              "No afecta al clima"
            ],
            "correcta": 1,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "La altitud",
              "La luz disponible a lo largo del día",
              "El régimen de fuego",
              "El gradiente de salinidad del suelo"
            ],
            "correcta": 3,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "En la médula del tallo",
              "En la raíz profunda",
              "Dentro del xilema",
              "Bajo la epidermis superior de la hoja"
            ],
            "correcta": 3,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Domina la generación diploide",
              "Se elimina la fotosíntesis",
              "Se ahorra agua",
              "Se producen esporas más grandes"
            ],
            "correcta": 0,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Marcescente y submediterráneo",
              "Una conífera de montaña",
              "De clima tropical",
              "Perennifolio y esclerófilo"
            ],
            "correcta": 0,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "No produce bellotas",
              "Sus bellotas cuelgan de un pedúnculo",
              "Es perennifolio",
              "Sus hojas son aciculares"
            ],
            "correcta": 1,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          }
        ]
      },
      {
        "id": "GEN-M-16",
        "nombre": "Examen medio 16",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Sujetar el árbol",
              "Atrapar insectos",
              "Almacenar agua",
              "Fijar nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Nothofagus",
              "Betula",
              "Quercus de hoja perenne",
              "Fagus"
            ],
            "correcta": 0,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En primavera",
              "En pleno verano",
              "En invierno bajo la nieve",
              "Solo de noche"
            ],
            "correcta": 0,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Vive en el agua",
              "No le afecta el fuego",
              "Sus semillas germinan tras el fuego",
              "Rebrota de raíz"
            ],
            "correcta": 2,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Hemiparásita",
              "Epífita",
              "Saprófita o descomponedora",
              "Carnívora"
            ],
            "correcta": 0,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Es muy umbrófila y da sombra densa",
              "Es una conífera",
              "Necesita mucha luz",
              "Vive en el desierto"
            ],
            "correcta": 0,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Da frutos comestibles",
              "Crece en desiertos",
              "Resiste el fuego",
              "Fija nitrógeno y tolera el encharcamiento"
            ],
            "correcta": 3,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas viejas",
              "Las raíces",
              "Las flores",
              "Las hojas jóvenes"
            ],
            "correcta": 0,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "No tiene ancestro común",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "Reúne linajes de orígenes distintos",
              "Incluye ancestro y todos los descendientes"
            ],
            "correcta": 1,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Un cono leñoso",
              "Una sola flor",
              "Un fruto carnoso",
              "Una espiga colgante"
            ],
            "correcta": 1,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "El viento",
              "Los ciclos de hielo y deshielo",
              "La lluvia ácida",
              "Los incendios recurrentes del verano"
            ],
            "correcta": 1,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Necesitan suelos profundos",
              "Son anuales",
              "Toleran mejor el frío y la desecación",
              "Crecen muy altos"
            ],
            "correcta": 2,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El polen",
              "La doble fecundación",
              "La semilla",
              "El fruto"
            ],
            "correcta": 0,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "Los vientos y las corrientes",
              "La gravedad",
              "La luz solar directa del mediodía",
              "La radiación"
            ],
            "correcta": 0,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Almacenar agua",
              "Defenderse de herbívoros",
              "Atraer polinizadores",
              "Escurrir rápido el agua de lluvia"
            ],
            "correcta": 3,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "Las dunas costeras",
              "El árido sureste peninsular seco",
              "Los Pirineos húmedos",
              "La meseta seca"
            ],
            "correcta": 2,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Supramediterráneo",
              "Crioromediterráneo",
              "Oromediterráneo",
              "Termomediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El número de cromosomas",
              "El tipo de polinización",
              "La presencia de flores",
              "Si la separación es geográfica o se da en el mismo lugar"
            ],
            "correcta": 3,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es una subespecie",
              "Es completamente estéril",
              "Es venenoso",
              "Es de origen híbrido"
            ],
            "correcta": 3,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Acumulan grandes cantidades de sal",
              "Producen látex",
              "Fijan nitrógeno atmosférico",
              "Almacenan agua"
            ],
            "correcta": 2,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "Bajo el suelo",
              "En la punta de las ramas",
              "En las semillas",
              "En el agua"
            ],
            "correcta": 0,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Extrae savia del hospedador",
              "Solo lo usa como soporte",
              "Vive bajo tierra",
              "Es siempre acuática"
            ],
            "correcta": 1,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          }
        ]
      },
      {
        "id": "GEN-M-17",
        "nombre": "Examen medio 17",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "La doble fecundación",
              "La semilla",
              "El fruto",
              "El polen"
            ],
            "correcta": 3,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Fotosintetizar de noche",
              "Tolerar la sal del suelo marino",
              "Resistir el fuego",
              "Fijar nitrógeno atmosférico"
            ],
            "correcta": 3,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Suculencia",
              "Tallos asimilantes con hojas reducidas",
              "Esclerofilia con hojas duras y perennes",
              "Caulifloría"
            ],
            "correcta": 1,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Vive bajo tierra",
              "Extrae savia del hospedador",
              "Solo lo usa como soporte",
              "Es siempre acuática"
            ],
            "correcta": 2,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "En la costa",
              "A sotavento de las montañas",
              "Justo en las riberas de los ríos",
              "En la cima de las montañas"
            ],
            "correcta": 1,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Grandes, blandas y caducas en otoño",
              "Pequeñas, duras y perennes",
              "Aciculares en haces",
              "Carnosas y suculentas"
            ],
            "correcta": 1,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "Sus bellotas cuelgan de un pedúnculo",
              "Sus hojas son aciculares",
              "No produce bellotas",
              "Es perennifolio"
            ],
            "correcta": 0,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "La extinción de la flora",
              "El avance del matorral y el bosque",
              "La salinización del suelo",
              "La desaparición total del bosque"
            ],
            "correcta": 1,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Rebrota de raíz",
              "Vive en el agua",
              "Sus semillas germinan tras el fuego",
              "No le afecta el fuego"
            ],
            "correcta": 2,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "Solo en invierno",
              "De noche",
              "Sin estomas",
              "De día con los estomas abiertos"
            ],
            "correcta": 1,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Una conífera",
              "Marcescente y acidófilo",
              "Una palmera",
              "Perennifolio y calcícola"
            ],
            "correcta": 1,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Calor y luz intensa",
              "Sombra y frío",
              "Mucha agua disponible",
              "Salinidad alta"
            ],
            "correcta": 0,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "En el agua",
              "En las semillas",
              "Bajo el suelo",
              "En la punta de las ramas"
            ],
            "correcta": 2,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas viejas",
              "Las hojas jóvenes",
              "Las raíces",
              "Las flores"
            ],
            "correcta": 0,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La gleyzación",
              "La laterización de suelos tropicales",
              "La salinización",
              "La podsolización"
            ],
            "correcta": 3,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "Bióticos",
              "Climáticos",
              "Abióticos",
              "De dispersión"
            ],
            "correcta": 0,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La luz solar directa del mediodía",
              "Los vientos y las corrientes",
              "La radiación",
              "La gravedad"
            ],
            "correcta": 1,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Pierde las hojas",
              "Es suculenta y acumula agua",
              "Vive flotando",
              "Excluye toda la sal por las raíces"
            ],
            "correcta": 1,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Fijan nitrógeno atmosférico",
              "Acumulan grandes cantidades de sal",
              "Producen látex",
              "Almacenan agua"
            ],
            "correcta": 0,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "En la raíz profunda",
              "Bajo la epidermis superior de la hoja",
              "Dentro del xilema",
              "En la médula del tallo"
            ],
            "correcta": 1,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Toleran mejor el frío y la desecación",
              "Son anuales",
              "Necesitan suelos profundos",
              "Crecen muy altos"
            ],
            "correcta": 0,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "No arden nunca",
              "Producen semillas todo el año",
              "Rebrotan de raíz",
              "Tienen piñas serótinas"
            ],
            "correcta": 3,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "El color",
              "El tamaño",
              "La forma de la flor",
              "Las areolas del cactus frente al látex de la euforbia"
            ],
            "correcta": 3,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Una baya",
              "Una cúpula",
              "Un vilano"
            ],
            "correcta": 2,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Labiadas como romero y tomillo",
              "Brezos de la familia de las ericáceas",
              "Cactáceas",
              "Helechos"
            ],
            "correcta": 0,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Atraer polinizadores",
              "Defenderse de herbívoros",
              "Almacenar agua",
              "Escurrir rápido el agua de lluvia"
            ],
            "correcta": 3,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          }
        ]
      },
      {
        "id": "GEN-M-18",
        "nombre": "Examen medio 18",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Una palmera",
              "Una conífera",
              "Marcescente y acidófilo",
              "Perennifolio y calcícola"
            ],
            "correcta": 2,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Carnívora",
              "Saprófita o descomponedora",
              "Epífita",
              "Hemiparásita"
            ],
            "correcta": 3,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género Cistus, las jaras, es pirófito porque:",
            "opciones": [
              "Rebrota de raíz",
              "Vive en el agua",
              "No le afecta el fuego",
              "Sus semillas germinan tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El calor del incendio rompe la latencia de sus semillas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Dos vertientes igual de húmedas",
              "Nieve en ambas caras",
              "Sequía total",
              "Una vertiente húmeda y otra seca"
            ],
            "correcta": 3,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "No afecta al clima",
              "Aumenta la biodiversidad",
              "Los nutrientes están en la biomasa, no en el suelo",
              "El suelo es muy fértil y se recupera solo"
            ],
            "correcta": 2,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "vf",
            "pregunta": "La caulifloría consiste en que las flores y los frutos brotan directamente del tronco y las ramas gruesas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Es frecuente en árboles de la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La gran proporción de musgos y líquenes en la tundra se explica porque:",
            "opciones": [
              "Crecen muy altos",
              "Necesitan suelos profundos",
              "Toleran mejor el frío y la desecación",
              "Son anuales"
            ],
            "correcta": 2,
            "explicacion": "Su resistencia a frío y sequedad les da ventaja en la tundra."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Cambia de hospedador",
              "Deja de reproducirse",
              "Pierde la mitad de sus cromosomas"
            ],
            "correcta": 0,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En invierno bajo la nieve",
              "En pleno verano",
              "En primavera",
              "Solo de noche"
            ],
            "correcta": 2,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Sujetar el árbol",
              "Atrapar insectos",
              "Almacenar agua",
              "Fijar nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Da frutos comestibles",
              "Fija nitrógeno y tolera el encharcamiento",
              "Resiste el fuego",
              "Crece en desiertos"
            ],
            "correcta": 1,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Fijar nitrógeno",
              "Almacenar grandes reservas de polen",
              "Rebrotar tras el fuego",
              "Flotar en el agua"
            ],
            "correcta": 2,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "Los Pirineos húmedos",
              "El árido sureste peninsular seco",
              "La meseta seca",
              "Las dunas costeras"
            ],
            "correcta": 0,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "Una conífera de montaña",
              "Marcescente y submediterráneo",
              "Perennifolio y esclerófilo",
              "De clima tropical"
            ],
            "correcta": 1,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La competencia con otras plantas y la herbivoría son ejemplos de filtros:",
            "opciones": [
              "De dispersión",
              "Bióticos",
              "Climáticos",
              "Abióticos"
            ],
            "correcta": 1,
            "explicacion": "Las interacciones con otros seres vivos son filtros bióticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Walker",
              "Hadley",
              "Polares",
              "Ferrel"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una palmera",
              "Un brezo arbustivo de la montaña",
              "Una encina arbustiva espinosa",
              "Un pino"
            ],
            "correcta": 2,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Pinus contorta y Pinus banksiana regeneran tras los incendios porque:",
            "opciones": [
              "Producen semillas todo el año",
              "Tienen piñas serótinas",
              "Rebrotan de raíz",
              "No arden nunca"
            ],
            "correcta": 1,
            "explicacion": "Sus piñas serótinas liberan semilla tras el fuego."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Salicornia, planta del centro de los saladares, sobrevive a la sal porque:",
            "opciones": [
              "Pierde las hojas",
              "Es suculenta y acumula agua",
              "Vive flotando",
              "Excluye toda la sal por las raíces"
            ],
            "correcta": 1,
            "explicacion": "Acumula agua para diluir la sal interna: es suculenta halófila."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Se elimina la fotosíntesis",
              "Se ahorra agua",
              "Se producen esporas más grandes",
              "Domina la generación diploide"
            ],
            "correcta": 3,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La luz solar directa del mediodía",
              "La radiación",
              "Los vientos y las corrientes",
              "La gravedad"
            ],
            "correcta": 2,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los suelos poligonales y los círculos de piedra de la tundra se deben a:",
            "opciones": [
              "El viento",
              "Los incendios recurrentes del verano",
              "Los ciclos de hielo y deshielo",
              "La lluvia ácida"
            ],
            "correcta": 2,
            "explicacion": "La crioturbación remueve el suelo y ordena las piedras."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "La altitud",
              "El régimen de fuego",
              "La luz disponible a lo largo del día",
              "El gradiente de salinidad del suelo"
            ],
            "correcta": 3,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Fueron plantadas por el hombre",
              "Son acuáticas",
              "Antes ocupaban todo el hemisferio norte",
              "Vuelan sus semillas"
            ],
            "correcta": 2,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "No tiene ancestro común",
              "Reúne linajes de orígenes distintos",
              "Incluye ancestro y todos los descendientes",
              "Incluye al ancestro pero deja fuera a algunos descendientes"
            ],
            "correcta": 3,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          }
        ]
      },
      {
        "id": "GEN-M-19",
        "nombre": "Examen medio 19",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "El crecimiento secundario o en grosor se produce en tallos y raíces, pero no en las hojas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El engrosamiento por cámbium afecta a tallo y raíz, no a las hojas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El parénquima en empalizada, rico en cloroplastos, se sitúa:",
            "opciones": [
              "Bajo la epidermis superior de la hoja",
              "En la raíz profunda",
              "En la médula del tallo",
              "Dentro del xilema"
            ],
            "correcta": 0,
            "explicacion": "Está bajo la epidermis superior, donde la luz es más intensa."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Suculencia",
              "Caulifloría",
              "Tallos asimilantes con hojas reducidas",
              "Esclerofilia con hojas duras y perennes"
            ],
            "correcta": 2,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Epífita",
              "Hemiparásita",
              "Saprófita o descomponedora",
              "Carnívora"
            ],
            "correcta": 1,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un alopoliploide recupera la fertilidad cuando:",
            "opciones": [
              "Tras hibridar, se duplica el genoma y cada cromosoma halla su homólogo",
              "Pierde la mitad de sus cromosomas",
              "Cambia de hospedador",
              "Deja de reproducirse"
            ],
            "correcta": 0,
            "explicacion": "La duplicación tras la hibridación restablece el apareamiento meiótico."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "Solo de noche",
              "En pleno verano",
              "En primavera",
              "En invierno bajo la nieve"
            ],
            "correcta": 2,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Ferrel",
              "Hadley",
              "Walker",
              "Polares"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "multiple",
            "pregunta": "La distribución disyunta de las magnolias en Asia oriental y América se explica porque:",
            "opciones": [
              "Antes ocupaban todo el hemisferio norte",
              "Son acuáticas",
              "Fueron plantadas por el hombre",
              "Vuelan sus semillas"
            ],
            "correcta": 0,
            "explicacion": "Eran abundantes en el hemisferio norte y quedaron como relictos disyuntos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Resistir el fuego",
              "Tolerar la sal del suelo marino",
              "Fotosintetizar de noche",
              "Fijar nitrógeno atmosférico"
            ],
            "correcta": 3,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales basófilos mediterráneos, sobre suelos calizos, destacan por la abundancia de:",
            "opciones": [
              "Cactáceas",
              "Brezos de la familia de las ericáceas",
              "Labiadas como romero y tomillo",
              "Helechos"
            ],
            "correcta": 2,
            "explicacion": "En suelos calizos abundan las labiadas aromáticas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural en España ha provocado, en cuanto a la vegetación:",
            "opciones": [
              "El avance del matorral y el bosque",
              "La extinción de la flora",
              "La salinización del suelo",
              "La desaparición total del bosque"
            ],
            "correcta": 0,
            "explicacion": "Sin uso, la sucesión recupera matorral y bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "Sus hojas son aciculares",
              "Es perennifolio",
              "Sus bellotas cuelgan de un pedúnculo",
              "No produce bellotas"
            ],
            "correcta": 2,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas CAM, como los cactus, fijan el CO2:",
            "opciones": [
              "De día con los estomas abiertos",
              "Solo en invierno",
              "Sin estomas",
              "De noche"
            ],
            "correcta": 3,
            "explicacion": "Abren los estomas de noche para reducir la pérdida de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "El proceso edáfico de la taiga que lava el suelo y deja un horizonte gris ceniciento es:",
            "opciones": [
              "La gleyzación",
              "La laterización de suelos tropicales",
              "La salinización",
              "La podsolización"
            ],
            "correcta": 3,
            "explicacion": "La podsolización forma el característico horizonte gris del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Atraer polinizadores",
              "Defenderse de herbívoros",
              "Escurrir rápido el agua de lluvia",
              "Almacenar agua"
            ],
            "correcta": 2,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un grupo parafilético se diferencia de uno monofilético en que:",
            "opciones": [
              "Incluye ancestro y todos los descendientes",
              "Reúne linajes de orígenes distintos",
              "Incluye al ancestro pero deja fuera a algunos descendientes",
              "No tiene ancestro común"
            ],
            "correcta": 2,
            "explicacion": "El parafilético excluye a parte de la descendencia del ancestro."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las genisteas (escobas, aliagas, tojos) enriquecen suelos pobres porque:",
            "opciones": [
              "Acumulan grandes cantidades de sal",
              "Almacenan agua",
              "Fijan nitrógeno atmosférico",
              "Producen látex"
            ],
            "correcta": 2,
            "explicacion": "Como leguminosas, fijan nitrógeno y mejoran el suelo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera se describe como:",
            "opciones": [
              "Una palmera",
              "Un brezo arbustivo de la montaña",
              "Un pino",
              "Una encina arbustiva espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es un Quercus arbustivo y espinoso del matorral mediterráneo."
          },
          {
            "tipo": "multiple",
            "pregunta": "La esclerofilia mediterránea consiste en hojas:",
            "opciones": [
              "Aciculares en haces",
              "Carnosas y suculentas",
              "Pequeñas, duras y perennes",
              "Grandes, blandas y caducas en otoño"
            ],
            "correcta": 2,
            "explicacion": "Las hojas esclerófilas perennes resisten el verano seco."
          },
          {
            "tipo": "vf",
            "pregunta": "Al descongelarse, el permafrost puede liberar metano y CO2, gases de efecto invernadero.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Por eso su deshielo preocupa más allá de la botánica."
          },
          {
            "tipo": "vf",
            "pregunta": "La zonación es la organización de la vegetación en el espacio, y la sucesión, su organización en el tiempo.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Zonación = espacio; sucesión = tiempo."
          },
          {
            "tipo": "multiple",
            "pregunta": "El quejigo Quercus faginea es un Quercus:",
            "opciones": [
              "De clima tropical",
              "Perennifolio y esclerófilo",
              "Una conífera de montaña",
              "Marcescente y submediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El quejigo es marcescente, propio de ambientes submediterráneos algo más frescos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La 'sombra de lluvias' o efecto orográfico explica que las estepas aparezcan:",
            "opciones": [
              "Justo en las riberas de los ríos",
              "En la cima de las montañas",
              "En la costa",
              "A sotavento de las montañas"
            ],
            "correcta": 3,
            "explicacion": "A sotavento el aire desciende seco y reduce la lluvia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los cinco pisos bioclimáticos mediterráneos se ordenan, de más cálido a más frío, empezando por el:",
            "opciones": [
              "Termomediterráneo",
              "Oromediterráneo",
              "Crioromediterráneo",
              "Supramediterráneo"
            ],
            "correcta": 0,
            "explicacion": "El termomediterráneo es el más cálido de los cinco pisos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "La luz disponible a lo largo del día",
              "El régimen de fuego",
              "El gradiente de salinidad del suelo",
              "La altitud"
            ],
            "correcta": 2,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gramíneas C4, dominantes en las sabanas, rinden mejor que las C3 cuando hay:",
            "opciones": [
              "Sombra y frío",
              "Salinidad alta",
              "Mucha agua disponible",
              "Calor y luz intensa"
            ],
            "correcta": 3,
            "explicacion": "La vía C4 aventaja a la C3 con altas temperaturas e iluminación, propias de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia entre una epífita y una planta parásita es que la epífita:",
            "opciones": [
              "Solo lo usa como soporte",
              "Es siempre acuática",
              "Extrae savia del hospedador",
              "Vive bajo tierra"
            ],
            "correcta": 0,
            "explicacion": "La epífita no parasita: solo se sostiene sobre otra planta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según Raunkiær, los geófitos o criptófitos protegen sus yemas:",
            "opciones": [
              "Bajo el suelo",
              "En las semillas",
              "En la punta de las ramas",
              "En el agua"
            ],
            "correcta": 0,
            "explicacion": "Los geófitos sitúan las yemas bajo tierra."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia esencial entre especiación alopátrica y simpátrica es:",
            "opciones": [
              "El número de cromosomas",
              "Si la separación es geográfica o se da en el mismo lugar",
              "La presencia de flores",
              "El tipo de polinización"
            ],
            "correcta": 1,
            "explicacion": "Alopátrica = con barrera geográfica; simpátrica = en el mismo área."
          },
          {
            "tipo": "multiple",
            "pregunta": "El haya Fagus sylvatica forma bosques casi puros porque:",
            "opciones": [
              "Vive en el desierto",
              "Es una conífera",
              "Es muy umbrófila y da sombra densa",
              "Necesita mucha luz"
            ],
            "correcta": 2,
            "explicacion": "Su sombra densa impide la regeneración de otras especies."
          }
        ]
      },
      {
        "id": "GEN-M-20",
        "nombre": "Examen medio 20",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La zonación halófila de los saladares se organiza según:",
            "opciones": [
              "El régimen de fuego",
              "La luz disponible a lo largo del día",
              "El gradiente de salinidad del suelo",
              "La altitud"
            ],
            "correcta": 2,
            "explicacion": "Cada banda de plantas ocupa un nivel de salinidad distinto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El muérdago Viscum album hace fotosíntesis pero toma agua y sales de su hospedador; es una:",
            "opciones": [
              "Epífita",
              "Carnívora",
              "Saprófita o descomponedora",
              "Hemiparásita"
            ],
            "correcta": 3,
            "explicacion": "El muérdago es hemiparásito: fotosintetiza pero roba agua y sales."
          },
          {
            "tipo": "vf",
            "pregunta": "Las gramíneas suministran la mayor parte de los cultivos alimentarios del mundo, como el trigo, el arroz y el maíz.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los cereales, gramíneas, son la base de la alimentación mundial."
          },
          {
            "tipo": "multiple",
            "pregunta": "El melojo o rebollo Quercus pyrenaica es:",
            "opciones": [
              "Marcescente y acidófilo",
              "Perennifolio y calcícola",
              "Una conífera",
              "Una palmera"
            ],
            "correcta": 0,
            "explicacion": "El melojo es marcescente, acidófilo y de distribución occidental."
          },
          {
            "tipo": "multiple",
            "pregunta": "La diferencia diagnóstica decisiva entre una euforbia suculenta y un cactus es:",
            "opciones": [
              "El color",
              "Las areolas del cactus frente al látex de la euforbia",
              "El tamaño",
              "La forma de la flor"
            ],
            "correcta": 1,
            "explicacion": "Areolas = cactus; látex = euforbia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El lignotuber de muchas plantas mediterráneas sirve para:",
            "opciones": [
              "Almacenar grandes reservas de polen",
              "Fijar nitrógeno",
              "Flotar en el agua",
              "Rebrotar tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "El lignotuber permite rebrotar tras incendio o corta."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las raíces de contrafuerte de los grandes árboles de la selva sirven para:",
            "opciones": [
              "Almacenar agua",
              "Atrapar insectos",
              "Sujetar el árbol",
              "Fijar nitrógeno"
            ],
            "correcta": 2,
            "explicacion": "Dan estabilidad en los suelos someros de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "Deforestar la pluvisilva es muy grave porque:",
            "opciones": [
              "Aumenta la biodiversidad",
              "No afecta al clima",
              "Los nutrientes están en la biomasa, no en el suelo",
              "El suelo es muy fértil y se recupera solo"
            ],
            "correcta": 2,
            "explicacion": "Al retirar la biomasa, el suelo pobre se degrada deprisa."
          },
          {
            "tipo": "vf",
            "pregunta": "El bioma de bosque mediterráneo reaparece, por convergencia, en cinco regiones del planeta con clima similar.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "California, Chile central, Cabo, SO de Australia y cuenca mediterránea."
          },
          {
            "tipo": "vf",
            "pregunta": "Las plantas almohadillado-espinosas como Erinacea anthyllis son una adaptación al viento y al frío de la alta montaña.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El porte en cojín espinoso protege del viento y el frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El aliso Alnus glutinosa es útil en la restauración de riberas porque:",
            "opciones": [
              "Fija nitrógeno y tolera el encharcamiento",
              "Da frutos comestibles",
              "Resiste el fuego",
              "Crece en desiertos"
            ],
            "correcta": 0,
            "explicacion": "Fija nitrógeno y aguanta los suelos encharcados de ribera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El género arbóreo dominante del bosque caducifolio del hemisferio sur, las 'hayas del sur', es:",
            "opciones": [
              "Betula",
              "Fagus",
              "Quercus de hoja perenne",
              "Nothofagus"
            ],
            "correcta": 3,
            "explicacion": "Nothofagus domina los caducifolios australes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El fruto de las Fagaceae (bellota, hayuco, castaña) es un aquenio rodeado por:",
            "opciones": [
              "Un ala membranosa",
              "Una cúpula",
              "Un vilano",
              "Una baya"
            ],
            "correcta": 1,
            "explicacion": "La cúpula envuelve parcial o totalmente el aquenio."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'drip tips', puntas alargadas de las hojas del sotobosque tropical, sirven para:",
            "opciones": [
              "Escurrir rápido el agua de lluvia",
              "Almacenar agua",
              "Defenderse de herbívoros",
              "Atraer polinizadores"
            ],
            "correcta": 0,
            "explicacion": "Facilitan el goteo rápido del agua y evitan hongos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El roble Quercus robur se llama 'pedunculado' porque:",
            "opciones": [
              "No produce bellotas",
              "Sus hojas son aciculares",
              "Es perennifolio",
              "Sus bellotas cuelgan de un pedúnculo"
            ],
            "correcta": 3,
            "explicacion": "Sus bellotas penden de un largo pedúnculo, frente a Q. petraea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ciatio, inflorescencia típica de Euphorbia, simula:",
            "opciones": [
              "Una sola flor",
              "Un fruto carnoso",
              "Un cono leñoso",
              "Una espiga colgante"
            ],
            "correcta": 0,
            "explicacion": "El ciatio agrupa flores reducidas imitando una flor única."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las gimnospermas se independizaron del agua para la fecundación gracias a:",
            "opciones": [
              "El polen",
              "La semilla",
              "El fruto",
              "La doble fecundación"
            ],
            "correcta": 0,
            "explicacion": "El polen transporta los gametos sin necesidad de agua."
          },
          {
            "tipo": "multiple",
            "pregunta": "La simbiosis de las leguminosas con Rhizobium permite:",
            "opciones": [
              "Resistir el fuego",
              "Tolerar la sal del suelo marino",
              "Fotosintetizar de noche",
              "Fijar nitrógeno atmosférico"
            ],
            "correcta": 3,
            "explicacion": "Rhizobium fija nitrógeno en los nódulos radicales."
          },
          {
            "tipo": "multiple",
            "pregunta": "La reducción del gametófito a lo largo de la evolución vegetal tiene la ventaja de que:",
            "opciones": [
              "Se ahorra agua",
              "Domina la generación diploide",
              "Se elimina la fotosíntesis",
              "Se producen esporas más grandes"
            ],
            "correcta": 1,
            "explicacion": "Con el esporófito 2n dominante hay más material genético y combinaciones."
          },
          {
            "tipo": "multiple",
            "pregunta": "Un nutriente móvil como el nitrógeno muestra sus síntomas de deficiencia primero en:",
            "opciones": [
              "Las hojas viejas",
              "Las flores",
              "Las raíces",
              "Las hojas jóvenes"
            ],
            "correcta": 0,
            "explicacion": "Al ser móvil, la planta lo retira de las hojas viejas hacia las jóvenes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Coriolis, debido a la rotación terrestre, desvía:",
            "opciones": [
              "La radiación",
              "La luz solar directa del mediodía",
              "La gravedad",
              "Los vientos y las corrientes"
            ],
            "correcta": 3,
            "explicacion": "Coriolis desvía vientos y corrientes oceánicas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los escobones, de tallos verdes que sustituyen a las hojas en la fotosíntesis, presentan la adaptación de:",
            "opciones": [
              "Esclerofilia con hojas duras y perennes",
              "Caulifloría",
              "Tallos asimilantes con hojas reducidas",
              "Suculencia"
            ],
            "correcta": 2,
            "explicacion": "Reducen la hoja y fotosintetizan por los tallos verdes."
          },
          {
            "tipo": "vf",
            "pregunta": "Salvo los alerces del género Larix, las coníferas boreales mantienen las hojas perennes durante varios años.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Los alerces son las únicas coníferas boreales caducifolias."
          },
          {
            "tipo": "multiple",
            "pregunta": "El nombre Platanus × hispanica lleva el símbolo × porque:",
            "opciones": [
              "Es de origen híbrido",
              "Es una subespecie",
              "Es completamente estéril",
              "Es venenoso"
            ],
            "correcta": 0,
            "explicacion": "El signo × delante del epíteto indica origen híbrido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las grandes células de circulación atmosférica responsables de los desiertos subtropicales son las células de:",
            "opciones": [
              "Walker",
              "Ferrel",
              "Hadley",
              "Polares"
            ],
            "correcta": 2,
            "explicacion": "El aire descendente de las células de Hadley genera los desiertos de los 30º."
          },
          {
            "tipo": "vf",
            "pregunta": "Las monocotiledóneas, las magnólidas y las angiospermas basales tienen polen monocolpado, con un solo surco.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El monocolpado es primitivo; el tricolpado caracteriza a las eudicotiledóneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las geófitas nemorales (narcisos, anémonas) florecen:",
            "opciones": [
              "En pleno verano",
              "En invierno bajo la nieve",
              "Solo de noche",
              "En primavera"
            ],
            "correcta": 3,
            "explicacion": "Aprovechan la luz de primavera antes del cierre del dosel."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los abetales de Abies alba en la Península se sitúan en:",
            "opciones": [
              "Las dunas costeras",
              "El árido sureste peninsular seco",
              "Los Pirineos húmedos",
              "La meseta seca"
            ],
            "correcta": 2,
            "explicacion": "El abeto común ibérico es pirenaico y exige humedad."
          },
          {
            "tipo": "multiple",
            "pregunta": "El efecto Foehn produce, al pasar el aire una cordillera:",
            "opciones": [
              "Sequía total",
              "Nieve en ambas caras",
              "Dos vertientes igual de húmedas",
              "Una vertiente húmeda y otra seca"
            ],
            "correcta": 3,
            "explicacion": "El aire descarga lluvia al subir y baja seco y caliente."
          },
          {
            "tipo": "vf",
            "pregunta": "La encina Quercus ilex subsp. ballota es indiferente edáfica: vive tanto en suelos calizos como silíceos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La carrasca es indiferente al sustrato."
          }
        ]
      }
    ],
    "complicado": [
      {
        "id": "GEN-C-01",
        "nombre": "Examen complicado 1",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "La sal",
              "El fuego",
              "El frío",
              "La falta de luz"
            ],
            "correcta": 1,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Pierde las hojas",
              "Florece de golpe",
              "Cierra los estomas para ahorrar agua",
              "Abre más los estomas para captar más CO2"
            ],
            "correcta": 2,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "Su corta historia postglacial y su clima extremo",
              "La salinidad del suelo",
              "El exceso de competencia con especies tropicales",
              "La falta total de luz"
            ],
            "correcta": 0,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Xilema, cutícula, flor, semilla",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Semilla, flor, xilema, cutícula",
              "Flor, semilla, xilema, cutícula"
            ],
            "correcta": 1,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Un periodo frío reciente, el Dryas",
              "Un tipo de suelo",
              "Una corriente marina",
              "Una familia de gramíneas"
            ],
            "correcta": 0,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada",
              "Regeneran desde semillas tras el fuego",
              "Se reproducen por esporas"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los pteridófitos",
              "Los briófitos",
              "Las angiospermas",
              "Las gimnospermas"
            ],
            "correcta": 2,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "La encina sustituya al alcornoque",
              "Desaparezcan los Quercus",
              "Domine el alcornoque sobre la encina",
              "Aparezcan palmeras"
            ],
            "correcta": 0,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Ser un desierto sin flora",
              "Su altísimo porcentaje de endemismos",
              "Carecer de flores",
              "Su baja diversidad"
            ],
            "correcta": 1,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "El gametófito femenino haploide",
              "El tegumento 2n",
              "Otro endospermo triploide adicional",
              "La nucela diploide"
            ],
            "correcta": 0,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Tejados de paja",
              "Cuerdas",
              "Las cazoletas de pipa o briar",
              "Cestos"
            ],
            "correcta": 2,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Hace fotosíntesis nocturna",
              "Fija nitrógeno",
              "Es carnívora",
              "Parasita a un hongo micorrícico"
            ],
            "correcta": 3,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los enebros y sabinas, género Juniperus",
              "Los abetos",
              "Los pinos",
              "Las hayas"
            ],
            "correcta": 0,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La gravedad invertida",
              "La tensión-cohesión generada por la transpiración",
              "La presión del floema",
              "El bombeo de las raíces"
            ],
            "correcta": 1,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Viven bajo el agua",
              "El suelo, el viento o el frío impiden el bosque",
              "Proceden de talar repetidamente el bosque maduro",
              "Son cultivos abandonados"
            ],
            "correcta": 1,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "El suelo es salino",
              "Sopla mucho viento",
              "Se repiten incendios muy intensos cada año",
              "El permafrost se funde de forma irregular"
            ],
            "correcta": 3,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Los grandes desiertos subtropicales",
              "Los bosques boreales",
              "Las tundras",
              "Las grandes selvas ecuatoriales húmedas"
            ],
            "correcta": 0,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Cosmopolita",
              "Circumboreal",
              "Endémica muy restringida",
              "Disyunta intercontinental"
            ],
            "correcta": 2,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Sin variación",
              "A la misma temperatura",
              "Más frío",
              "Más cálido"
            ],
            "correcta": 3,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Lavan los óxidos del suelo",
              "Salinizan el suelo",
              "Forman caliza",
              "Fertilizan y enriquecen el suelo"
            ],
            "correcta": 0,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Estéril",
              "Más diversa que la sexual",
              "Genéticamente idéntica a la madre",
              "Siempre poliploide"
            ],
            "correcta": 2,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las que ya conviven en el sitio",
              "Solo las endémicas"
            ],
            "correcta": 1,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Apomixis o agamospermia",
              "Partenocarpia",
              "Heterostilia",
              "Autoincompatibilidad"
            ],
            "correcta": 3,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Poliploidía",
              "Homología de ancestro común",
              "Hibridación",
              "Convergencia adaptativa"
            ],
            "correcta": 3,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores sin néctar",
              "Flores grandes, nocturnas y olorosas",
              "Flores rojas e inodoras",
              "Flores diminutas y diurnas"
            ],
            "correcta": 1,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Necesitan sombra densa",
              "Crecen muy despacio",
              "Son perennifolias",
              "Colonizan rápido los claros"
            ],
            "correcta": 3,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "Escandinava, jutlandesa y de Kola",
              "Ibérica, itálica y balcánica",
              "De Bretaña, Cornualles y Gales",
              "De Crimea, Anatolia y Sinaí"
            ],
            "correcta": 1,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Temperatura y altitud",
              "La precipitación y la evapotranspiración potencial",
              "Lluvia y latitud",
              "Humedad y viento"
            ],
            "correcta": 1,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          }
        ]
      },
      {
        "id": "GEN-C-02",
        "nombre": "Examen complicado 2",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Elimina la fotosíntesis",
              "Reduce la pérdida de agua",
              "Aumenta la pérdida de agua",
              "Sirve para fijar nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La vegetación subtropical del Terciario",
              "La taiga boreal",
              "La actual selva amazónica del trópico húmedo",
              "La tundra glacial"
            ],
            "correcta": 0,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una subida brusca del mar",
              "Una erupción volcánica",
              "La evaporación casi total del Mediterráneo",
              "Una glaciación del Mediterráneo"
            ],
            "correcta": 2,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Décadas",
              "Siglos fijos e invariables",
              "Segundos",
              "Millones de años"
            ],
            "correcta": 0,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Praderas de gramíneas",
              "Matorrales de brezos y tojos costeros",
              "Bosques de coníferas",
              "Saladares interiores"
            ],
            "correcta": 1,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Fijan nitrógeno",
              "Producen frutos comestibles",
              "Acumulan agua y crean microhábitats",
              "Parasitan a los árboles que las sostienen"
            ],
            "correcta": 2,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Son todas acuáticas",
              "Carecen de polen",
              "Forman un grupo natural válido",
              "Reúnen linajes basales y eudicotiledóneas"
            ],
            "correcta": 3,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es muy ácido y se descompone con gran lentitud",
              "Se descompone rápido y es mucho más fértil",
              "Es salino",
              "Es turboso"
            ],
            "correcta": 1,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Solo vive sobre yeso",
              "Es acuática",
              "Rechaza el yeso",
              "Vive en cualquier suelo"
            ],
            "correcta": 0,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "El permafrost que lo conserva",
              "Semillas muy longevas",
              "La poliploidía",
              "La reproducción por acodo"
            ],
            "correcta": 3,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Florece en rojo intenso",
              "Sus bellotas maduras adquieren un tono rojo",
              "Sus hojas son escarlata",
              "De ese insecto se extraía un tinte rojo"
            ],
            "correcta": 3,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Queda por debajo del nivel de la encina",
              "Es litoral salino",
              "Es de alta montaña",
              "Está siempre por encima del pinsapo nevado"
            ],
            "correcta": 0,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Troncal o caulinar",
              "Radical exclusiva",
              "Foliar",
              "Inexistente"
            ],
            "correcta": 0,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una leguminosa espinosa",
              "Una labiada aromática",
              "Una gramínea",
              "Un brezo"
            ],
            "correcta": 0,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es un aislante natural que se regenera",
              "Fija nitrógeno",
              "Es venenoso",
              "Es comestible y muy nutritivo para el ganado"
            ],
            "correcta": 0,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Partenocarpia",
              "Autoincompatibilidad",
              "Apomixis o agamospermia",
              "Heterostilia"
            ],
            "correcta": 1,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Los desiertos cálidos subtropicales",
              "Las selvas tropicales húmedas",
              "Las tundras",
              "Las estepas"
            ],
            "correcta": 1,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "n, 2n y 3n",
              "n, n y 2n",
              "2n, 3n y 2n",
              "2n, n y 2n"
            ],
            "correcta": 3,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "50 %",
              "99 %",
              "85 %",
              "25 %"
            ],
            "correcta": 2,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Crece sobre dolomías y serpentinas",
              "Tolera la sequía estival más extrema",
              "Resiste el fuego intenso",
              "Vive en el agua"
            ],
            "correcta": 0,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Asciende y descarga lluvias",
              "Desciende seco",
              "Forma desiertos",
              "Se desplaza a los polos sin llover"
            ],
            "correcta": 0,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Una especie de alta montaña",
              "Totalmente indiferente al tipo de sustrato",
              "Calcífugo: no tolera los suelos calizos",
              "Una conífera perennifolia"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          }
        ]
      },
      {
        "id": "GEN-C-03",
        "nombre": "Examen complicado 3",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Más diversa que la sexual",
              "Genéticamente idéntica a la madre",
              "Siempre poliploide",
              "Estéril"
            ],
            "correcta": 1,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Un tipo de suelo",
              "Una familia de gramíneas",
              "Un periodo frío reciente, el Dryas",
              "Una corriente marina"
            ],
            "correcta": 2,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los pinos",
              "Las hayas",
              "Los enebros y sabinas, género Juniperus",
              "Los abetos"
            ],
            "correcta": 2,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Abre más los estomas para captar más CO2",
              "Florece de golpe",
              "Pierde las hojas",
              "Cierra los estomas para ahorrar agua"
            ],
            "correcta": 3,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Viven bajo el agua",
              "Son cultivos abandonados",
              "Proceden de talar repetidamente el bosque maduro",
              "El suelo, el viento o el frío impiden el bosque"
            ],
            "correcta": 3,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una leguminosa espinosa",
              "Una gramínea",
              "Un brezo",
              "Una labiada aromática"
            ],
            "correcta": 0,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Reduce la pérdida de agua",
              "Aumenta la pérdida de agua",
              "Sirve para fijar nitrógeno",
              "Elimina la fotosíntesis"
            ],
            "correcta": 0,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Hace fotosíntesis nocturna",
              "Parasita a un hongo micorrícico",
              "Es carnívora",
              "Fija nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "La falta total de luz",
              "La salinidad del suelo",
              "El exceso de competencia con especies tropicales",
              "Su corta historia postglacial y su clima extremo"
            ],
            "correcta": 3,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Forma desiertos",
              "Desciende seco",
              "Asciende y descarga lluvias",
              "Se desplaza a los polos sin llover"
            ],
            "correcta": 2,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Carecer de flores",
              "Su altísimo porcentaje de endemismos",
              "Su baja diversidad",
              "Ser un desierto sin flora"
            ],
            "correcta": 1,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Se reproducen por esporas",
              "Regeneran desde semillas tras el fuego",
              "Rebrotan vigorosamente desde la base quemada"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Fija nitrógeno",
              "Es comestible y muy nutritivo para el ganado",
              "Es venenoso",
              "Es un aislante natural que se regenera"
            ],
            "correcta": 3,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La vegetación subtropical del Terciario",
              "La tundra glacial",
              "La taiga boreal",
              "La actual selva amazónica del trópico húmedo"
            ],
            "correcta": 0,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es salino",
              "Se descompone rápido y es mucho más fértil",
              "Es turboso",
              "Es muy ácido y se descompone con gran lentitud"
            ],
            "correcta": 1,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Décadas",
              "Millones de años",
              "Segundos",
              "Siglos fijos e invariables"
            ],
            "correcta": 0,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Está siempre por encima del pinsapo nevado",
              "Es de alta montaña",
              "Queda por debajo del nivel de la encina",
              "Es litoral salino"
            ],
            "correcta": 2,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Disyunta intercontinental",
              "Endémica muy restringida",
              "Circumboreal",
              "Cosmopolita"
            ],
            "correcta": 1,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "De Bretaña, Cornualles y Gales",
              "Ibérica, itálica y balcánica",
              "Escandinava, jutlandesa y de Kola",
              "De Crimea, Anatolia y Sinaí"
            ],
            "correcta": 1,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Cestos",
              "Las cazoletas de pipa o briar",
              "Tejados de paja",
              "Cuerdas"
            ],
            "correcta": 1,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Vive en el agua",
              "Crece sobre dolomías y serpentinas",
              "Tolera la sequía estival más extrema",
              "Resiste el fuego intenso"
            ],
            "correcta": 1,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "El bombeo de las raíces",
              "La presión del floema",
              "La tensión-cohesión generada por la transpiración",
              "La gravedad invertida"
            ],
            "correcta": 2,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Forman un grupo natural válido",
              "Carecen de polen",
              "Son todas acuáticas",
              "Reúnen linajes basales y eudicotiledóneas"
            ],
            "correcta": 3,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Las tundras",
              "Las selvas tropicales húmedas",
              "Las estepas",
              "Los desiertos cálidos subtropicales"
            ],
            "correcta": 1,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Rechaza el yeso",
              "Solo vive sobre yeso",
              "Vive en cualquier suelo",
              "Es acuática"
            ],
            "correcta": 1,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          }
        ]
      },
      {
        "id": "GEN-C-04",
        "nombre": "Examen complicado 4",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Florece en rojo intenso",
              "Sus bellotas maduras adquieren un tono rojo",
              "De ese insecto se extraía un tinte rojo",
              "Sus hojas son escarlata"
            ],
            "correcta": 2,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Totalmente indiferente al tipo de sustrato",
              "Una conífera perennifolia",
              "Una especie de alta montaña",
              "Calcífugo: no tolera los suelos calizos"
            ],
            "correcta": 3,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Temperatura y altitud",
              "La precipitación y la evapotranspiración potencial",
              "Humedad y viento",
              "Lluvia y latitud"
            ],
            "correcta": 1,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Troncal o caulinar",
              "Inexistente",
              "Foliar",
              "Radical exclusiva"
            ],
            "correcta": 0,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "Otro endospermo triploide adicional",
              "El tegumento 2n",
              "La nucela diploide",
              "El gametófito femenino haploide"
            ],
            "correcta": 3,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Fijan nitrógeno",
              "Parasitan a los árboles que las sostienen",
              "Acumulan agua y crean microhábitats",
              "Producen frutos comestibles"
            ],
            "correcta": 2,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Necesitan sombra densa",
              "Colonizan rápido los claros",
              "Crecen muy despacio",
              "Son perennifolias"
            ],
            "correcta": 1,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los briófitos",
              "Las gimnospermas",
              "Las angiospermas",
              "Los pteridófitos"
            ],
            "correcta": 2,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una erupción volcánica",
              "Una subida brusca del mar",
              "Una glaciación del Mediterráneo",
              "La evaporación casi total del Mediterráneo"
            ],
            "correcta": 3,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Domine el alcornoque sobre la encina",
              "La encina sustituya al alcornoque",
              "Aparezcan palmeras",
              "Desaparezcan los Quercus"
            ],
            "correcta": 1,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las endémicas",
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las que ya conviven en el sitio"
            ],
            "correcta": 2,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "Se repiten incendios muy intensos cada año",
              "El suelo es salino",
              "El permafrost se funde de forma irregular",
              "Sopla mucho viento"
            ],
            "correcta": 2,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "2n, 3n y 2n",
              "2n, n y 2n",
              "n, n y 2n",
              "n, 2n y 3n"
            ],
            "correcta": 1,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Florece de golpe",
              "Abre más los estomas para captar más CO2",
              "Cierra los estomas para ahorrar agua",
              "Pierde las hojas"
            ],
            "correcta": 2,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Praderas de gramíneas",
              "Bosques de coníferas",
              "Saladares interiores",
              "Matorrales de brezos y tojos costeros"
            ],
            "correcta": 3,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Los bosques boreales",
              "Las tundras",
              "Los grandes desiertos subtropicales",
              "Las grandes selvas ecuatoriales húmedas"
            ],
            "correcta": 2,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Disyunta intercontinental",
              "Circumboreal",
              "Endémica muy restringida",
              "Cosmopolita"
            ],
            "correcta": 2,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Xilema, cutícula, flor, semilla",
              "Flor, semilla, xilema, cutícula",
              "Semilla, flor, xilema, cutícula",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto"
            ],
            "correcta": 3,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Fertilizan y enriquecen el suelo",
              "Salinizan el suelo",
              "Forman caliza",
              "Lavan los óxidos del suelo"
            ],
            "correcta": 3,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "85 %",
              "50 %",
              "99 %",
              "25 %"
            ],
            "correcta": 0,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores rojas e inodoras",
              "Flores diminutas y diurnas",
              "Flores sin néctar",
              "Flores grandes, nocturnas y olorosas"
            ],
            "correcta": 3,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Poliploidía",
              "Hibridación",
              "Homología de ancestro común",
              "Convergencia adaptativa"
            ],
            "correcta": 3,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "El frío",
              "La sal",
              "La falta de luz",
              "El fuego"
            ],
            "correcta": 3,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "La reproducción por acodo",
              "La poliploidía",
              "Semillas muy longevas",
              "El permafrost que lo conserva"
            ],
            "correcta": 0,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Sin variación",
              "Más frío",
              "Más cálido",
              "A la misma temperatura"
            ],
            "correcta": 2,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          }
        ]
      },
      {
        "id": "GEN-C-05",
        "nombre": "Examen complicado 5",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Todas las de la región que podrían llegar",
              "Solo las endémicas",
              "Solo las que ya conviven en el sitio",
              "Solo las cultivadas"
            ],
            "correcta": 0,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "La poliploidía",
              "Semillas muy longevas",
              "El permafrost que lo conserva",
              "La reproducción por acodo"
            ],
            "correcta": 3,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "El suelo es salino",
              "Sopla mucho viento",
              "El permafrost se funde de forma irregular",
              "Se repiten incendios muy intensos cada año"
            ],
            "correcta": 2,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los pteridófitos",
              "Los briófitos",
              "Las gimnospermas",
              "Las angiospermas"
            ],
            "correcta": 3,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Semilla, flor, xilema, cutícula",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Xilema, cutícula, flor, semilla",
              "Flor, semilla, xilema, cutícula"
            ],
            "correcta": 1,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La vegetación subtropical del Terciario",
              "La tundra glacial",
              "La actual selva amazónica del trópico húmedo",
              "La taiga boreal"
            ],
            "correcta": 0,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Sus hojas son escarlata",
              "Florece en rojo intenso",
              "De ese insecto se extraía un tinte rojo",
              "Sus bellotas maduras adquieren un tono rojo"
            ],
            "correcta": 2,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Heterostilia",
              "Autoincompatibilidad",
              "Apomixis o agamospermia",
              "Partenocarpia"
            ],
            "correcta": 1,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Los bosques boreales",
              "Las tundras",
              "Los grandes desiertos subtropicales",
              "Las grandes selvas ecuatoriales húmedas"
            ],
            "correcta": 2,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La presión del floema",
              "El bombeo de las raíces",
              "La tensión-cohesión generada por la transpiración",
              "La gravedad invertida"
            ],
            "correcta": 2,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "A la misma temperatura",
              "Más cálido",
              "Más frío",
              "Sin variación"
            ],
            "correcta": 1,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Ser un desierto sin flora",
              "Su altísimo porcentaje de endemismos",
              "Carecer de flores",
              "Su baja diversidad"
            ],
            "correcta": 1,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Viven bajo el agua",
              "Proceden de talar repetidamente el bosque maduro",
              "Son cultivos abandonados",
              "El suelo, el viento o el frío impiden el bosque"
            ],
            "correcta": 3,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "n, n y 2n",
              "2n, n y 2n",
              "n, 2n y 3n",
              "2n, 3n y 2n"
            ],
            "correcta": 1,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es comestible y muy nutritivo para el ganado",
              "Es venenoso",
              "Es un aislante natural que se regenera",
              "Fija nitrógeno"
            ],
            "correcta": 2,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "La evaporación casi total del Mediterráneo",
              "Una subida brusca del mar",
              "Una glaciación del Mediterráneo",
              "Una erupción volcánica"
            ],
            "correcta": 0,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es muy ácido y se descompone con gran lentitud",
              "Es turboso",
              "Es salino",
              "Se descompone rápido y es mucho más fértil"
            ],
            "correcta": 3,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Es de alta montaña",
              "Está siempre por encima del pinsapo nevado",
              "Queda por debajo del nivel de la encina",
              "Es litoral salino"
            ],
            "correcta": 2,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "El gametófito femenino haploide",
              "Otro endospermo triploide adicional",
              "La nucela diploide",
              "El tegumento 2n"
            ],
            "correcta": 0,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Fijan nitrógeno",
              "Acumulan agua y crean microhábitats",
              "Parasitan a los árboles que las sostienen",
              "Producen frutos comestibles"
            ],
            "correcta": 1,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Colonizan rápido los claros",
              "Crecen muy despacio",
              "Necesitan sombra densa",
              "Son perennifolias"
            ],
            "correcta": 0,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Es carnívora",
              "Fija nitrógeno",
              "Parasita a un hongo micorrícico",
              "Hace fotosíntesis nocturna"
            ],
            "correcta": 2,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Convergencia adaptativa",
              "Poliploidía",
              "Hibridación",
              "Homología de ancestro común"
            ],
            "correcta": 0,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          }
        ]
      },
      {
        "id": "GEN-C-06",
        "nombre": "Examen complicado 6",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Resiste el fuego intenso",
              "Vive en el agua",
              "Crece sobre dolomías y serpentinas",
              "Tolera la sequía estival más extrema"
            ],
            "correcta": 2,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "El fuego",
              "La sal",
              "La falta de luz",
              "El frío"
            ],
            "correcta": 0,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Siglos fijos e invariables",
              "Millones de años",
              "Décadas",
              "Segundos"
            ],
            "correcta": 2,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "La precipitación y la evapotranspiración potencial",
              "Lluvia y latitud",
              "Humedad y viento",
              "Temperatura y altitud"
            ],
            "correcta": 0,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Se reproducen por esporas",
              "Regeneran desde semillas tras el fuego",
              "Rebrotan vigorosamente desde la base quemada"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Totalmente indiferente al tipo de sustrato",
              "Una especie de alta montaña",
              "Calcífugo: no tolera los suelos calizos",
              "Una conífera perennifolia"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "La encina sustituya al alcornoque",
              "Desaparezcan los Quercus",
              "Aparezcan palmeras",
              "Domine el alcornoque sobre la encina"
            ],
            "correcta": 0,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Son todas acuáticas",
              "Forman un grupo natural válido",
              "Carecen de polen",
              "Reúnen linajes basales y eudicotiledóneas"
            ],
            "correcta": 3,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "La reproducción por acodo",
              "Semillas muy longevas",
              "La poliploidía",
              "El permafrost que lo conserva"
            ],
            "correcta": 0,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Forma desiertos",
              "Desciende seco",
              "Se desplaza a los polos sin llover",
              "Asciende y descarga lluvias"
            ],
            "correcta": 3,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Genéticamente idéntica a la madre",
              "Estéril",
              "Más diversa que la sexual",
              "Siempre poliploide"
            ],
            "correcta": 0,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una gramínea",
              "Un brezo",
              "Una leguminosa espinosa",
              "Una labiada aromática"
            ],
            "correcta": 2,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Radical exclusiva",
              "Foliar",
              "Troncal o caulinar",
              "Inexistente"
            ],
            "correcta": 2,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "99 %",
              "25 %",
              "85 %",
              "50 %"
            ],
            "correcta": 2,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Saladares interiores",
              "Matorrales de brezos y tojos costeros",
              "Bosques de coníferas",
              "Praderas de gramíneas"
            ],
            "correcta": 1,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Lavan los óxidos del suelo",
              "Forman caliza",
              "Salinizan el suelo",
              "Fertilizan y enriquecen el suelo"
            ],
            "correcta": 0,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Las selvas tropicales húmedas",
              "Las tundras",
              "Los desiertos cálidos subtropicales",
              "Las estepas"
            ],
            "correcta": 0,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Más cálido",
              "Sin variación",
              "Más frío",
              "A la misma temperatura"
            ],
            "correcta": 0,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Elimina la fotosíntesis",
              "Reduce la pérdida de agua",
              "Aumenta la pérdida de agua",
              "Sirve para fijar nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Rechaza el yeso",
              "Es acuática",
              "Solo vive sobre yeso",
              "Vive en cualquier suelo"
            ],
            "correcta": 2,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Partenocarpia",
              "Apomixis o agamospermia",
              "Heterostilia",
              "Autoincompatibilidad"
            ],
            "correcta": 3,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "Escandinava, jutlandesa y de Kola",
              "Ibérica, itálica y balcánica",
              "De Bretaña, Cornualles y Gales",
              "De Crimea, Anatolia y Sinaí"
            ],
            "correcta": 1,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores rojas e inodoras",
              "Flores sin néctar",
              "Flores diminutas y diurnas",
              "Flores grandes, nocturnas y olorosas"
            ],
            "correcta": 3,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "El exceso de competencia con especies tropicales",
              "La salinidad del suelo",
              "Su corta historia postglacial y su clima extremo",
              "La falta total de luz"
            ],
            "correcta": 2,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Tejados de paja",
              "Cestos",
              "Las cazoletas de pipa o briar",
              "Cuerdas"
            ],
            "correcta": 2,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Un periodo frío reciente, el Dryas",
              "Una corriente marina",
              "Un tipo de suelo",
              "Una familia de gramíneas"
            ],
            "correcta": 0,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los enebros y sabinas, género Juniperus",
              "Los pinos",
              "Las hayas",
              "Los abetos"
            ],
            "correcta": 0,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          }
        ]
      },
      {
        "id": "GEN-C-07",
        "nombre": "Examen complicado 7",
        "preguntas": [
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Carecer de flores",
              "Ser un desierto sin flora",
              "Su altísimo porcentaje de endemismos",
              "Su baja diversidad"
            ],
            "correcta": 2,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Fijan nitrógeno",
              "Producen frutos comestibles",
              "Acumulan agua y crean microhábitats",
              "Parasitan a los árboles que las sostienen"
            ],
            "correcta": 2,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Bosques de coníferas",
              "Praderas de gramíneas",
              "Saladares interiores",
              "Matorrales de brezos y tojos costeros"
            ],
            "correcta": 3,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Las tundras",
              "Los bosques boreales",
              "Las grandes selvas ecuatoriales húmedas",
              "Los grandes desiertos subtropicales"
            ],
            "correcta": 3,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "La evaporación casi total del Mediterráneo",
              "Una erupción volcánica",
              "Una glaciación del Mediterráneo",
              "Una subida brusca del mar"
            ],
            "correcta": 0,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Forma desiertos",
              "Se desplaza a los polos sin llover",
              "Desciende seco",
              "Asciende y descarga lluvias"
            ],
            "correcta": 3,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Inexistente",
              "Troncal o caulinar",
              "Radical exclusiva",
              "Foliar"
            ],
            "correcta": 1,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los pinos",
              "Las hayas",
              "Los abetos",
              "Los enebros y sabinas, género Juniperus"
            ],
            "correcta": 3,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es un aislante natural que se regenera",
              "Es comestible y muy nutritivo para el ganado",
              "Fija nitrógeno",
              "Es venenoso"
            ],
            "correcta": 0,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "El suelo es salino",
              "El permafrost se funde de forma irregular",
              "Sopla mucho viento",
              "Se repiten incendios muy intensos cada año"
            ],
            "correcta": 1,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Las cazoletas de pipa o briar",
              "Cuerdas",
              "Cestos",
              "Tejados de paja"
            ],
            "correcta": 0,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Es litoral salino",
              "Está siempre por encima del pinsapo nevado",
              "Es de alta montaña",
              "Queda por debajo del nivel de la encina"
            ],
            "correcta": 3,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores rojas e inodoras",
              "Flores grandes, nocturnas y olorosas",
              "Flores diminutas y diurnas",
              "Flores sin néctar"
            ],
            "correcta": 1,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Pierde las hojas",
              "Cierra los estomas para ahorrar agua",
              "Florece de golpe",
              "Abre más los estomas para captar más CO2"
            ],
            "correcta": 1,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "2n, 3n y 2n",
              "n, 2n y 3n",
              "n, n y 2n",
              "2n, n y 2n"
            ],
            "correcta": 3,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Son cultivos abandonados",
              "Proceden de talar repetidamente el bosque maduro",
              "El suelo, el viento o el frío impiden el bosque",
              "Viven bajo el agua"
            ],
            "correcta": 2,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Reduce la pérdida de agua",
              "Elimina la fotosíntesis",
              "Aumenta la pérdida de agua",
              "Sirve para fijar nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Necesitan sombra densa",
              "Colonizan rápido los claros",
              "Crecen muy despacio",
              "Son perennifolias"
            ],
            "correcta": 1,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Forman un grupo natural válido",
              "Carecen de polen",
              "Reúnen linajes basales y eudicotiledóneas",
              "Son todas acuáticas"
            ],
            "correcta": 2,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La presión del floema",
              "El bombeo de las raíces",
              "La gravedad invertida",
              "La tensión-cohesión generada por la transpiración"
            ],
            "correcta": 3,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Homología de ancestro común",
              "Hibridación",
              "Convergencia adaptativa",
              "Poliploidía"
            ],
            "correcta": 2,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Crece sobre dolomías y serpentinas",
              "Tolera la sequía estival más extrema",
              "Vive en el agua",
              "Resiste el fuego intenso"
            ],
            "correcta": 0,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "De Bretaña, Cornualles y Gales",
              "Escandinava, jutlandesa y de Kola",
              "De Crimea, Anatolia y Sinaí",
              "Ibérica, itálica y balcánica"
            ],
            "correcta": 3,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          }
        ]
      },
      {
        "id": "GEN-C-08",
        "nombre": "Examen complicado 8",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Desaparezcan los Quercus",
              "La encina sustituya al alcornoque",
              "Domine el alcornoque sobre la encina",
              "Aparezcan palmeras"
            ],
            "correcta": 1,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Humedad y viento",
              "Lluvia y latitud",
              "Temperatura y altitud",
              "La precipitación y la evapotranspiración potencial"
            ],
            "correcta": 3,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Una corriente marina",
              "Un tipo de suelo",
              "Un periodo frío reciente, el Dryas",
              "Una familia de gramíneas"
            ],
            "correcta": 2,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Hace fotosíntesis nocturna",
              "Parasita a un hongo micorrícico",
              "Fija nitrógeno",
              "Es carnívora"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Las gimnospermas",
              "Los briófitos",
              "Los pteridófitos",
              "Las angiospermas"
            ],
            "correcta": 3,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las endémicas",
              "Solo las cultivadas",
              "Solo las que ya conviven en el sitio",
              "Todas las de la región que podrían llegar"
            ],
            "correcta": 3,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "La falta total de luz",
              "La salinidad del suelo",
              "El exceso de competencia con especies tropicales",
              "Su corta historia postglacial y su clima extremo"
            ],
            "correcta": 3,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "n, n y 2n",
              "2n, 3n y 2n",
              "2n, n y 2n",
              "n, 2n y 3n"
            ],
            "correcta": 2,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Carecen de polen",
              "Reúnen linajes basales y eudicotiledóneas",
              "Forman un grupo natural válido",
              "Son todas acuáticas"
            ],
            "correcta": 1,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Genéticamente idéntica a la madre",
              "Más diversa que la sexual",
              "Siempre poliploide",
              "Estéril"
            ],
            "correcta": 0,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Vive en cualquier suelo",
              "Rechaza el yeso",
              "Solo vive sobre yeso",
              "Es acuática"
            ],
            "correcta": 2,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es turboso",
              "Es muy ácido y se descompone con gran lentitud",
              "Se descompone rápido y es mucho más fértil",
              "Es salino"
            ],
            "correcta": 2,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La taiga boreal",
              "La actual selva amazónica del trópico húmedo",
              "La tundra glacial",
              "La vegetación subtropical del Terciario"
            ],
            "correcta": 3,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada",
              "Regeneran desde semillas tras el fuego",
              "Se reproducen por esporas"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Flor, semilla, xilema, cutícula",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Semilla, flor, xilema, cutícula",
              "Xilema, cutícula, flor, semilla"
            ],
            "correcta": 1,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Endémica muy restringida",
              "Cosmopolita",
              "Disyunta intercontinental",
              "Circumboreal"
            ],
            "correcta": 0,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Totalmente indiferente al tipo de sustrato",
              "Calcífugo: no tolera los suelos calizos",
              "Una conífera perennifolia",
              "Una especie de alta montaña"
            ],
            "correcta": 1,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Sus hojas son escarlata",
              "Sus bellotas maduras adquieren un tono rojo",
              "Florece en rojo intenso",
              "De ese insecto se extraía un tinte rojo"
            ],
            "correcta": 3,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La gravedad invertida",
              "La tensión-cohesión generada por la transpiración",
              "La presión del floema",
              "El bombeo de las raíces"
            ],
            "correcta": 1,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "99 %",
              "25 %",
              "50 %",
              "85 %"
            ],
            "correcta": 3,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Las tundras",
              "Las estepas",
              "Las selvas tropicales húmedas",
              "Los desiertos cálidos subtropicales"
            ],
            "correcta": 2,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una gramínea",
              "Una labiada aromática",
              "Un brezo",
              "Una leguminosa espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "La nucela diploide",
              "El gametófito femenino haploide",
              "Otro endospermo triploide adicional",
              "El tegumento 2n"
            ],
            "correcta": 1,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Siglos fijos e invariables",
              "Décadas",
              "Segundos",
              "Millones de años"
            ],
            "correcta": 1,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Fertilizan y enriquecen el suelo",
              "Forman caliza",
              "Lavan los óxidos del suelo",
              "Salinizan el suelo"
            ],
            "correcta": 2,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Parasitan a los árboles que las sostienen",
              "Fijan nitrógeno",
              "Producen frutos comestibles",
              "Acumulan agua y crean microhábitats"
            ],
            "correcta": 3,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "La falta de luz",
              "El fuego",
              "El frío",
              "La sal"
            ],
            "correcta": 1,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          }
        ]
      },
      {
        "id": "GEN-C-09",
        "nombre": "Examen complicado 9",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Lluvia y latitud",
              "La precipitación y la evapotranspiración potencial",
              "Humedad y viento",
              "Temperatura y altitud"
            ],
            "correcta": 1,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Desciende seco",
              "Forma desiertos",
              "Se desplaza a los polos sin llover",
              "Asciende y descarga lluvias"
            ],
            "correcta": 3,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Genéticamente idéntica a la madre",
              "Siempre poliploide",
              "Más diversa que la sexual",
              "Estéril"
            ],
            "correcta": 0,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los abetos",
              "Los enebros y sabinas, género Juniperus",
              "Las hayas",
              "Los pinos"
            ],
            "correcta": 1,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La taiga boreal",
              "La tundra glacial",
              "La vegetación subtropical del Terciario",
              "La actual selva amazónica del trópico húmedo"
            ],
            "correcta": 2,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores diminutas y diurnas",
              "Flores rojas e inodoras",
              "Flores grandes, nocturnas y olorosas",
              "Flores sin néctar"
            ],
            "correcta": 2,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Hace fotosíntesis nocturna",
              "Parasita a un hongo micorrícico",
              "Es carnívora",
              "Fija nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Es litoral salino",
              "Es de alta montaña",
              "Queda por debajo del nivel de la encina",
              "Está siempre por encima del pinsapo nevado"
            ],
            "correcta": 2,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "La poliploidía",
              "El permafrost que lo conserva",
              "Semillas muy longevas",
              "La reproducción por acodo"
            ],
            "correcta": 3,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Florece de golpe",
              "Abre más los estomas para captar más CO2",
              "Pierde las hojas",
              "Cierra los estomas para ahorrar agua"
            ],
            "correcta": 3,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es salino",
              "Se descompone rápido y es mucho más fértil",
              "Es muy ácido y se descompone con gran lentitud",
              "Es turboso"
            ],
            "correcta": 1,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Inexistente",
              "Radical exclusiva",
              "Troncal o caulinar",
              "Foliar"
            ],
            "correcta": 2,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Más cálido",
              "Más frío",
              "Sin variación",
              "A la misma temperatura"
            ],
            "correcta": 0,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Bosques de coníferas",
              "Praderas de gramíneas",
              "Matorrales de brezos y tojos costeros",
              "Saladares interiores"
            ],
            "correcta": 2,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "Otro endospermo triploide adicional",
              "El tegumento 2n",
              "El gametófito femenino haploide",
              "La nucela diploide"
            ],
            "correcta": 2,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una erupción volcánica",
              "Una subida brusca del mar",
              "La evaporación casi total del Mediterráneo",
              "Una glaciación del Mediterráneo"
            ],
            "correcta": 2,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Las estepas",
              "Las selvas tropicales húmedas",
              "Los desiertos cálidos subtropicales",
              "Las tundras"
            ],
            "correcta": 1,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Domine el alcornoque sobre la encina",
              "Desaparezcan los Quercus",
              "La encina sustituya al alcornoque",
              "Aparezcan palmeras"
            ],
            "correcta": 2,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Las tundras",
              "Las grandes selvas ecuatoriales húmedas",
              "Los grandes desiertos subtropicales",
              "Los bosques boreales"
            ],
            "correcta": 2,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Cestos",
              "Cuerdas",
              "Tejados de paja",
              "Las cazoletas de pipa o briar"
            ],
            "correcta": 3,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada",
              "Regeneran desde semillas tras el fuego",
              "Se reproducen por esporas"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Segundos",
              "Décadas",
              "Siglos fijos e invariables",
              "Millones de años"
            ],
            "correcta": 1,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Son perennifolias",
              "Necesitan sombra densa",
              "Crecen muy despacio",
              "Colonizan rápido los claros"
            ],
            "correcta": 3,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Poliploidía",
              "Homología de ancestro común",
              "Convergencia adaptativa",
              "Hibridación"
            ],
            "correcta": 2,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Xilema, cutícula, flor, semilla",
              "Semilla, flor, xilema, cutícula",
              "Flor, semilla, xilema, cutícula",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto"
            ],
            "correcta": 3,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          }
        ]
      },
      {
        "id": "GEN-C-10",
        "nombre": "Examen complicado 10",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "De Crimea, Anatolia y Sinaí",
              "Escandinava, jutlandesa y de Kola",
              "De Bretaña, Cornualles y Gales",
              "Ibérica, itálica y balcánica"
            ],
            "correcta": 3,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "85 %",
              "99 %",
              "50 %",
              "25 %"
            ],
            "correcta": 0,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Reduce la pérdida de agua",
              "Aumenta la pérdida de agua",
              "Elimina la fotosíntesis",
              "Sirve para fijar nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Sus hojas son escarlata",
              "De ese insecto se extraía un tinte rojo",
              "Florece en rojo intenso",
              "Sus bellotas maduras adquieren un tono rojo"
            ],
            "correcta": 1,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Rechaza el yeso",
              "Solo vive sobre yeso",
              "Vive en cualquier suelo",
              "Es acuática"
            ],
            "correcta": 1,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Fertilizan y enriquecen el suelo",
              "Salinizan el suelo",
              "Forman caliza",
              "Lavan los óxidos del suelo"
            ],
            "correcta": 3,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Es de alta montaña",
              "Está siempre por encima del pinsapo nevado",
              "Es litoral salino",
              "Queda por debajo del nivel de la encina"
            ],
            "correcta": 3,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Son perennifolias",
              "Necesitan sombra densa",
              "Crecen muy despacio",
              "Colonizan rápido los claros"
            ],
            "correcta": 3,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las endémicas",
              "Solo las que ya conviven en el sitio"
            ],
            "correcta": 1,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Un brezo",
              "Una gramínea",
              "Una leguminosa espinosa",
              "Una labiada aromática"
            ],
            "correcta": 2,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es un aislante natural que se regenera",
              "Es comestible y muy nutritivo para el ganado",
              "Es venenoso",
              "Fija nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Las cazoletas de pipa o briar",
              "Tejados de paja",
              "Cestos",
              "Cuerdas"
            ],
            "correcta": 0,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Más frío",
              "Sin variación",
              "A la misma temperatura",
              "Más cálido"
            ],
            "correcta": 3,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Una familia de gramíneas",
              "Un periodo frío reciente, el Dryas",
              "Una corriente marina",
              "Un tipo de suelo"
            ],
            "correcta": 1,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Son cultivos abandonados",
              "El suelo, el viento o el frío impiden el bosque",
              "Proceden de talar repetidamente el bosque maduro",
              "Viven bajo el agua"
            ],
            "correcta": 1,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los pteridófitos",
              "Las gimnospermas",
              "Los briófitos",
              "Las angiospermas"
            ],
            "correcta": 3,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Vive en el agua",
              "Tolera la sequía estival más extrema",
              "Crece sobre dolomías y serpentinas",
              "Resiste el fuego intenso"
            ],
            "correcta": 2,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Apomixis o agamospermia",
              "Heterostilia",
              "Partenocarpia",
              "Autoincompatibilidad"
            ],
            "correcta": 3,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Endémica muy restringida",
              "Circumboreal",
              "Disyunta intercontinental",
              "Cosmopolita"
            ],
            "correcta": 0,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "El frío",
              "La falta de luz",
              "El fuego",
              "La sal"
            ],
            "correcta": 2,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Una especie de alta montaña",
              "Una conífera perennifolia",
              "Totalmente indiferente al tipo de sustrato",
              "Calcífugo: no tolera los suelos calizos"
            ],
            "correcta": 3,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "La falta total de luz",
              "Su corta historia postglacial y su clima extremo",
              "El exceso de competencia con especies tropicales",
              "La salinidad del suelo"
            ],
            "correcta": 1,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Ser un desierto sin flora",
              "Carecer de flores",
              "Su altísimo porcentaje de endemismos",
              "Su baja diversidad"
            ],
            "correcta": 2,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "El permafrost se funde de forma irregular",
              "Se repiten incendios muy intensos cada año",
              "Sopla mucho viento",
              "El suelo es salino"
            ],
            "correcta": 0,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          }
        ]
      },
      {
        "id": "GEN-C-11",
        "nombre": "Examen complicado 11",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Acumulan agua y crean microhábitats",
              "Fijan nitrógeno",
              "Producen frutos comestibles",
              "Parasitan a los árboles que las sostienen"
            ],
            "correcta": 0,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Las selvas tropicales húmedas",
              "Los desiertos cálidos subtropicales",
              "Las estepas",
              "Las tundras"
            ],
            "correcta": 0,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "La nucela diploide",
              "Otro endospermo triploide adicional",
              "El tegumento 2n",
              "El gametófito femenino haploide"
            ],
            "correcta": 3,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Radical exclusiva",
              "Troncal o caulinar",
              "Inexistente",
              "Foliar"
            ],
            "correcta": 1,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Crece sobre dolomías y serpentinas",
              "Vive en el agua",
              "Tolera la sequía estival más extrema",
              "Resiste el fuego intenso"
            ],
            "correcta": 0,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Flor, semilla, xilema, cutícula",
              "Xilema, cutícula, flor, semilla",
              "Semilla, flor, xilema, cutícula",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto"
            ],
            "correcta": 3,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "Se repiten incendios muy intensos cada año",
              "Sopla mucho viento",
              "El permafrost se funde de forma irregular",
              "El suelo es salino"
            ],
            "correcta": 2,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Desciende seco",
              "Forma desiertos",
              "Asciende y descarga lluvias",
              "Se desplaza a los polos sin llover"
            ],
            "correcta": 2,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores sin néctar",
              "Flores grandes, nocturnas y olorosas",
              "Flores rojas e inodoras",
              "Flores diminutas y diurnas"
            ],
            "correcta": 1,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una subida brusca del mar",
              "La evaporación casi total del Mediterráneo",
              "Una erupción volcánica",
              "Una glaciación del Mediterráneo"
            ],
            "correcta": 1,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "El suelo, el viento o el frío impiden el bosque",
              "Proceden de talar repetidamente el bosque maduro",
              "Viven bajo el agua",
              "Son cultivos abandonados"
            ],
            "correcta": 0,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Una familia de gramíneas",
              "Una corriente marina",
              "Un tipo de suelo",
              "Un periodo frío reciente, el Dryas"
            ],
            "correcta": 3,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "50 %",
              "99 %",
              "25 %",
              "85 %"
            ],
            "correcta": 3,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "El bombeo de las raíces",
              "La presión del floema",
              "La tensión-cohesión generada por la transpiración",
              "La gravedad invertida"
            ],
            "correcta": 2,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los enebros y sabinas, género Juniperus",
              "Las hayas",
              "Los pinos",
              "Los abetos"
            ],
            "correcta": 0,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "Escandinava, jutlandesa y de Kola",
              "De Bretaña, Cornualles y Gales",
              "De Crimea, Anatolia y Sinaí",
              "Ibérica, itálica y balcánica"
            ],
            "correcta": 3,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Poliploidía",
              "Hibridación",
              "Homología de ancestro común",
              "Convergencia adaptativa"
            ],
            "correcta": 3,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es comestible y muy nutritivo para el ganado",
              "Fija nitrógeno",
              "Es venenoso",
              "Es un aislante natural que se regenera"
            ],
            "correcta": 3,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Bosques de coníferas",
              "Saladares interiores",
              "Praderas de gramíneas",
              "Matorrales de brezos y tojos costeros"
            ],
            "correcta": 3,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Sus hojas son escarlata",
              "De ese insecto se extraía un tinte rojo",
              "Sus bellotas maduras adquieren un tono rojo",
              "Florece en rojo intenso"
            ],
            "correcta": 1,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada",
              "Se reproducen por esporas",
              "Regeneran desde semillas tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Sirve para fijar nitrógeno",
              "Aumenta la pérdida de agua",
              "Elimina la fotosíntesis",
              "Reduce la pérdida de agua"
            ],
            "correcta": 3,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Aparezcan palmeras",
              "Desaparezcan los Quercus",
              "Domine el alcornoque sobre la encina",
              "La encina sustituya al alcornoque"
            ],
            "correcta": 3,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Fertilizan y enriquecen el suelo",
              "Lavan los óxidos del suelo",
              "Forman caliza",
              "Salinizan el suelo"
            ],
            "correcta": 1,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "La salinidad del suelo",
              "El exceso de competencia con especies tropicales",
              "Su corta historia postglacial y su clima extremo",
              "La falta total de luz"
            ],
            "correcta": 2,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          }
        ]
      },
      {
        "id": "GEN-C-12",
        "nombre": "Examen complicado 12",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La actual selva amazónica del trópico húmedo",
              "La vegetación subtropical del Terciario",
              "La taiga boreal",
              "La tundra glacial"
            ],
            "correcta": 1,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Forman un grupo natural válido",
              "Carecen de polen",
              "Son todas acuáticas",
              "Reúnen linajes basales y eudicotiledóneas"
            ],
            "correcta": 3,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Rechaza el yeso",
              "Solo vive sobre yeso",
              "Es acuática",
              "Vive en cualquier suelo"
            ],
            "correcta": 1,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Temperatura y altitud",
              "Humedad y viento",
              "Lluvia y latitud",
              "La precipitación y la evapotranspiración potencial"
            ],
            "correcta": 3,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Carecer de flores",
              "Ser un desierto sin flora",
              "Su baja diversidad",
              "Su altísimo porcentaje de endemismos"
            ],
            "correcta": 3,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Disyunta intercontinental",
              "Endémica muy restringida",
              "Circumboreal",
              "Cosmopolita"
            ],
            "correcta": 1,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Más diversa que la sexual",
              "Siempre poliploide",
              "Genéticamente idéntica a la madre",
              "Estéril"
            ],
            "correcta": 2,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Siglos fijos e invariables",
              "Décadas",
              "Segundos",
              "Millones de años"
            ],
            "correcta": 1,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "n, n y 2n",
              "2n, n y 2n",
              "2n, 3n y 2n",
              "n, 2n y 3n"
            ],
            "correcta": 1,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Pierde las hojas",
              "Florece de golpe",
              "Cierra los estomas para ahorrar agua",
              "Abre más los estomas para captar más CO2"
            ],
            "correcta": 2,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Hace fotosíntesis nocturna",
              "Parasita a un hongo micorrícico",
              "Fija nitrógeno",
              "Es carnívora"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "La sal",
              "El fuego",
              "La falta de luz",
              "El frío"
            ],
            "correcta": 1,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Calcífugo: no tolera los suelos calizos",
              "Una especie de alta montaña",
              "Totalmente indiferente al tipo de sustrato",
              "Una conífera perennifolia"
            ],
            "correcta": 0,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Troncal o caulinar",
              "Foliar",
              "Inexistente",
              "Radical exclusiva"
            ],
            "correcta": 0,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Una corriente marina",
              "Un tipo de suelo",
              "Un periodo frío reciente, el Dryas",
              "Una familia de gramíneas"
            ],
            "correcta": 2,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los pteridófitos",
              "Las gimnospermas",
              "Las angiospermas",
              "Los briófitos"
            ],
            "correcta": 2,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Las grandes selvas ecuatoriales húmedas",
              "Los grandes desiertos subtropicales",
              "Los bosques boreales",
              "Las tundras"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "La falta total de luz",
              "Su corta historia postglacial y su clima extremo",
              "El exceso de competencia con especies tropicales",
              "La salinidad del suelo"
            ],
            "correcta": 1,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada",
              "Regeneran desde semillas tras el fuego",
              "Se reproducen por esporas"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una gramínea",
              "Una labiada aromática",
              "Un brezo",
              "Una leguminosa espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "El permafrost que lo conserva",
              "La poliploidía",
              "Semillas muy longevas",
              "La reproducción por acodo"
            ],
            "correcta": 3,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Colonizan rápido los claros",
              "Necesitan sombra densa",
              "Crecen muy despacio",
              "Son perennifolias"
            ],
            "correcta": 0,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Fija nitrógeno",
              "Es comestible y muy nutritivo para el ganado",
              "Es un aislante natural que se regenera",
              "Es venenoso"
            ],
            "correcta": 2,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las que ya conviven en el sitio",
              "Solo las endémicas"
            ],
            "correcta": 1,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es muy ácido y se descompone con gran lentitud",
              "Es salino",
              "Es turboso",
              "Se descompone rápido y es mucho más fértil"
            ],
            "correcta": 3,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Apomixis o agamospermia",
              "Autoincompatibilidad",
              "Partenocarpia",
              "Heterostilia"
            ],
            "correcta": 1,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          }
        ]
      },
      {
        "id": "GEN-C-13",
        "nombre": "Examen complicado 13",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Autoincompatibilidad",
              "Partenocarpia",
              "Heterostilia",
              "Apomixis o agamospermia"
            ],
            "correcta": 0,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Más frío",
              "Más cálido",
              "Sin variación",
              "A la misma temperatura"
            ],
            "correcta": 1,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "El gametófito femenino haploide",
              "La nucela diploide",
              "El tegumento 2n",
              "Otro endospermo triploide adicional"
            ],
            "correcta": 0,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las endémicas",
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las que ya conviven en el sitio"
            ],
            "correcta": 2,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Las grandes selvas ecuatoriales húmedas",
              "Los grandes desiertos subtropicales",
              "Los bosques boreales",
              "Las tundras"
            ],
            "correcta": 1,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Es acuática",
              "Solo vive sobre yeso",
              "Vive en cualquier suelo",
              "Rechaza el yeso"
            ],
            "correcta": 1,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Domine el alcornoque sobre la encina",
              "La encina sustituya al alcornoque",
              "Aparezcan palmeras",
              "Desaparezcan los Quercus"
            ],
            "correcta": 1,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Es carnívora",
              "Parasita a un hongo micorrícico",
              "Fija nitrógeno",
              "Hace fotosíntesis nocturna"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Una conífera perennifolia",
              "Una especie de alta montaña",
              "Calcífugo: no tolera los suelos calizos",
              "Totalmente indiferente al tipo de sustrato"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Siglos fijos e invariables",
              "Segundos",
              "Millones de años",
              "Décadas"
            ],
            "correcta": 3,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "De Crimea, Anatolia y Sinaí",
              "Ibérica, itálica y balcánica",
              "Escandinava, jutlandesa y de Kola",
              "De Bretaña, Cornualles y Gales"
            ],
            "correcta": 1,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Humedad y viento",
              "Lluvia y latitud",
              "La precipitación y la evapotranspiración potencial",
              "Temperatura y altitud"
            ],
            "correcta": 2,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Son todas acuáticas",
              "Reúnen linajes basales y eudicotiledóneas",
              "Forman un grupo natural válido",
              "Carecen de polen"
            ],
            "correcta": 1,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Parasitan a los árboles que las sostienen",
              "Producen frutos comestibles",
              "Fijan nitrógeno",
              "Acumulan agua y crean microhábitats"
            ],
            "correcta": 3,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los abetos",
              "Las hayas",
              "Los pinos",
              "Los enebros y sabinas, género Juniperus"
            ],
            "correcta": 3,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Praderas de gramíneas",
              "Saladares interiores",
              "Bosques de coníferas",
              "Matorrales de brezos y tojos costeros"
            ],
            "correcta": 3,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Cierra los estomas para ahorrar agua",
              "Pierde las hojas",
              "Florece de golpe",
              "Abre más los estomas para captar más CO2"
            ],
            "correcta": 0,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Los desiertos cálidos subtropicales",
              "Las estepas",
              "Las selvas tropicales húmedas",
              "Las tundras"
            ],
            "correcta": 2,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "Semillas muy longevas",
              "El permafrost que lo conserva",
              "La poliploidía",
              "La reproducción por acodo"
            ],
            "correcta": 3,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Cuerdas",
              "Las cazoletas de pipa o briar",
              "Tejados de paja",
              "Cestos"
            ],
            "correcta": 1,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Las angiospermas",
              "Las gimnospermas",
              "Los briófitos",
              "Los pteridófitos"
            ],
            "correcta": 0,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "99 %",
              "50 %",
              "25 %",
              "85 %"
            ],
            "correcta": 3,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "El permafrost se funde de forma irregular",
              "Se repiten incendios muy intensos cada año",
              "Sopla mucho viento",
              "El suelo es salino"
            ],
            "correcta": 0,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          }
        ]
      },
      {
        "id": "GEN-C-14",
        "nombre": "Examen complicado 14",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Un periodo frío reciente, el Dryas",
              "Una corriente marina",
              "Una familia de gramíneas",
              "Un tipo de suelo"
            ],
            "correcta": 0,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Desaparezcan los Quercus",
              "Aparezcan palmeras",
              "Domine el alcornoque sobre la encina",
              "La encina sustituya al alcornoque"
            ],
            "correcta": 3,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una glaciación del Mediterráneo",
              "Una subida brusca del mar",
              "La evaporación casi total del Mediterráneo",
              "Una erupción volcánica"
            ],
            "correcta": 2,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Los grandes desiertos subtropicales",
              "Los bosques boreales",
              "Las tundras",
              "Las grandes selvas ecuatoriales húmedas"
            ],
            "correcta": 0,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Un brezo",
              "Una gramínea",
              "Una labiada aromática",
              "Una leguminosa espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Homología de ancestro común",
              "Convergencia adaptativa",
              "Hibridación",
              "Poliploidía"
            ],
            "correcta": 1,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "La falta de luz",
              "El frío",
              "El fuego",
              "La sal"
            ],
            "correcta": 2,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La taiga boreal",
              "La tundra glacial",
              "La vegetación subtropical del Terciario",
              "La actual selva amazónica del trópico húmedo"
            ],
            "correcta": 2,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "El gametófito femenino haploide",
              "Otro endospermo triploide adicional",
              "La nucela diploide",
              "El tegumento 2n"
            ],
            "correcta": 0,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Cosmopolita",
              "Disyunta intercontinental",
              "Endémica muy restringida",
              "Circumboreal"
            ],
            "correcta": 2,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Se descompone rápido y es mucho más fértil",
              "Es salino",
              "Es turboso",
              "Es muy ácido y se descompone con gran lentitud"
            ],
            "correcta": 0,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Aumenta la pérdida de agua",
              "Elimina la fotosíntesis",
              "Sirve para fijar nitrógeno",
              "Reduce la pérdida de agua"
            ],
            "correcta": 3,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "2n, n y 2n",
              "2n, 3n y 2n",
              "n, n y 2n",
              "n, 2n y 3n"
            ],
            "correcta": 0,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Sus bellotas maduras adquieren un tono rojo",
              "Sus hojas son escarlata",
              "Florece en rojo intenso",
              "De ese insecto se extraía un tinte rojo"
            ],
            "correcta": 3,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Fija nitrógeno",
              "Es un aislante natural que se regenera",
              "Es comestible y muy nutritivo para el ganado",
              "Es venenoso"
            ],
            "correcta": 1,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Desciende seco",
              "Forma desiertos",
              "Se desplaza a los polos sin llover",
              "Asciende y descarga lluvias"
            ],
            "correcta": 3,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores diminutas y diurnas",
              "Flores grandes, nocturnas y olorosas",
              "Flores sin néctar",
              "Flores rojas e inodoras"
            ],
            "correcta": 1,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Parasitan a los árboles que las sostienen",
              "Fijan nitrógeno",
              "Acumulan agua y crean microhábitats",
              "Producen frutos comestibles"
            ],
            "correcta": 2,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Salinizan el suelo",
              "Fertilizan y enriquecen el suelo",
              "Forman caliza",
              "Lavan los óxidos del suelo"
            ],
            "correcta": 3,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Flor, semilla, xilema, cutícula",
              "Xilema, cutícula, flor, semilla",
              "Semilla, flor, xilema, cutícula"
            ],
            "correcta": 0,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "El suelo, el viento o el frío impiden el bosque",
              "Son cultivos abandonados",
              "Proceden de talar repetidamente el bosque maduro",
              "Viven bajo el agua"
            ],
            "correcta": 0,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Resiste el fuego intenso",
              "Vive en el agua",
              "Tolera la sequía estival más extrema",
              "Crece sobre dolomías y serpentinas"
            ],
            "correcta": 3,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Estéril",
              "Siempre poliploide",
              "Genéticamente idéntica a la madre",
              "Más diversa que la sexual"
            ],
            "correcta": 2,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Carecer de flores",
              "Su baja diversidad",
              "Su altísimo porcentaje de endemismos",
              "Ser un desierto sin flora"
            ],
            "correcta": 2,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La tensión-cohesión generada por la transpiración",
              "La presión del floema",
              "El bombeo de las raíces",
              "La gravedad invertida"
            ],
            "correcta": 0,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Queda por debajo del nivel de la encina",
              "Es litoral salino",
              "Está siempre por encima del pinsapo nevado",
              "Es de alta montaña"
            ],
            "correcta": 0,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          }
        ]
      },
      {
        "id": "GEN-C-15",
        "nombre": "Examen complicado 15",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Carecer de flores",
              "Su altísimo porcentaje de endemismos",
              "Su baja diversidad",
              "Ser un desierto sin flora"
            ],
            "correcta": 1,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "Su corta historia postglacial y su clima extremo",
              "La salinidad del suelo",
              "El exceso de competencia con especies tropicales",
              "La falta total de luz"
            ],
            "correcta": 0,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La vegetación subtropical del Terciario",
              "La taiga boreal",
              "La actual selva amazónica del trópico húmedo",
              "La tundra glacial"
            ],
            "correcta": 0,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "n, 2n y 3n",
              "2n, n y 2n",
              "n, n y 2n",
              "2n, 3n y 2n"
            ],
            "correcta": 1,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Humedad y viento",
              "Lluvia y latitud",
              "La precipitación y la evapotranspiración potencial",
              "Temperatura y altitud"
            ],
            "correcta": 2,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las cultivadas",
              "Solo las endémicas",
              "Todas las de la región que podrían llegar",
              "Solo las que ya conviven en el sitio"
            ],
            "correcta": 2,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Necesitan sombra densa",
              "Crecen muy despacio",
              "Son perennifolias",
              "Colonizan rápido los claros"
            ],
            "correcta": 3,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Es litoral salino",
              "Está siempre por encima del pinsapo nevado",
              "Es de alta montaña",
              "Queda por debajo del nivel de la encina"
            ],
            "correcta": 3,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Vive en cualquier suelo",
              "Rechaza el yeso",
              "Es acuática",
              "Solo vive sobre yeso"
            ],
            "correcta": 3,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Tejados de paja",
              "Las cazoletas de pipa o briar",
              "Cestos",
              "Cuerdas"
            ],
            "correcta": 1,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La gravedad invertida",
              "El bombeo de las raíces",
              "La presión del floema",
              "La tensión-cohesión generada por la transpiración"
            ],
            "correcta": 3,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Fertilizan y enriquecen el suelo",
              "Lavan los óxidos del suelo",
              "Forman caliza",
              "Salinizan el suelo"
            ],
            "correcta": 1,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "El frío",
              "La sal",
              "El fuego",
              "La falta de luz"
            ],
            "correcta": 2,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Proceden de talar repetidamente el bosque maduro",
              "Son cultivos abandonados",
              "Viven bajo el agua",
              "El suelo, el viento o el frío impiden el bosque"
            ],
            "correcta": 3,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Abre más los estomas para captar más CO2",
              "Pierde las hojas",
              "Florece de golpe",
              "Cierra los estomas para ahorrar agua"
            ],
            "correcta": 3,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Es carnívora",
              "Parasita a un hongo micorrícico",
              "Fija nitrógeno",
              "Hace fotosíntesis nocturna"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "Semillas muy longevas",
              "La reproducción por acodo",
              "La poliploidía",
              "El permafrost que lo conserva"
            ],
            "correcta": 1,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada",
              "Se reproducen por esporas",
              "Regeneran desde semillas tras el fuego"
            ],
            "correcta": 3,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "85 %",
              "99 %",
              "50 %",
              "25 %"
            ],
            "correcta": 0,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Sin variación",
              "Más cálido",
              "Más frío",
              "A la misma temperatura"
            ],
            "correcta": 1,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "Ibérica, itálica y balcánica",
              "De Crimea, Anatolia y Sinaí",
              "De Bretaña, Cornualles y Gales",
              "Escandinava, jutlandesa y de Kola"
            ],
            "correcta": 0,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Matorrales de brezos y tojos costeros",
              "Bosques de coníferas",
              "Praderas de gramíneas",
              "Saladares interiores"
            ],
            "correcta": 0,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Elimina la fotosíntesis",
              "Reduce la pérdida de agua",
              "Aumenta la pérdida de agua",
              "Sirve para fijar nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una leguminosa espinosa",
              "Una labiada aromática",
              "Un brezo",
              "Una gramínea"
            ],
            "correcta": 0,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Los desiertos cálidos subtropicales",
              "Las tundras",
              "Las selvas tropicales húmedas",
              "Las estepas"
            ],
            "correcta": 2,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          }
        ]
      },
      {
        "id": "GEN-C-16",
        "nombre": "Examen complicado 16",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Se desplaza a los polos sin llover",
              "Desciende seco",
              "Asciende y descarga lluvias",
              "Forma desiertos"
            ],
            "correcta": 2,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Florece en rojo intenso",
              "Sus hojas son escarlata",
              "De ese insecto se extraía un tinte rojo",
              "Sus bellotas maduras adquieren un tono rojo"
            ],
            "correcta": 2,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Poliploidía",
              "Hibridación",
              "Convergencia adaptativa",
              "Homología de ancestro común"
            ],
            "correcta": 2,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "Se repiten incendios muy intensos cada año",
              "El permafrost se funde de forma irregular",
              "Sopla mucho viento",
              "El suelo es salino"
            ],
            "correcta": 1,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Aumenta la pérdida de agua",
              "Elimina la fotosíntesis",
              "Reduce la pérdida de agua",
              "Sirve para fijar nitrógeno"
            ],
            "correcta": 2,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Inexistente",
              "Troncal o caulinar",
              "Radical exclusiva",
              "Foliar"
            ],
            "correcta": 1,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "El gametófito femenino haploide",
              "Otro endospermo triploide adicional",
              "La nucela diploide",
              "El tegumento 2n"
            ],
            "correcta": 0,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Forman un grupo natural válido",
              "Reúnen linajes basales y eudicotiledóneas",
              "Son todas acuáticas",
              "Carecen de polen"
            ],
            "correcta": 1,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una erupción volcánica",
              "La evaporación casi total del Mediterráneo",
              "Una glaciación del Mediterráneo",
              "Una subida brusca del mar"
            ],
            "correcta": 1,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Vive en el agua",
              "Tolera la sequía estival más extrema",
              "Crece sobre dolomías y serpentinas",
              "Resiste el fuego intenso"
            ],
            "correcta": 2,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Ser un desierto sin flora",
              "Su altísimo porcentaje de endemismos",
              "Carecer de flores",
              "Su baja diversidad"
            ],
            "correcta": 1,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "25 %",
              "50 %",
              "85 %",
              "99 %"
            ],
            "correcta": 2,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Heterostilia",
              "Partenocarpia",
              "Autoincompatibilidad",
              "Apomixis o agamospermia"
            ],
            "correcta": 2,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Necesitan sombra densa",
              "Crecen muy despacio",
              "Colonizan rápido los claros",
              "Son perennifolias"
            ],
            "correcta": 2,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Xilema, cutícula, flor, semilla",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Flor, semilla, xilema, cutícula",
              "Semilla, flor, xilema, cutícula"
            ],
            "correcta": 1,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Una conífera perennifolia",
              "Una especie de alta montaña",
              "Calcífugo: no tolera los suelos calizos",
              "Totalmente indiferente al tipo de sustrato"
            ],
            "correcta": 2,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es salino",
              "Es muy ácido y se descompone con gran lentitud",
              "Se descompone rápido y es mucho más fértil",
              "Es turboso"
            ],
            "correcta": 2,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Décadas",
              "Segundos",
              "Siglos fijos e invariables",
              "Millones de años"
            ],
            "correcta": 0,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una gramínea",
              "Una labiada aromática",
              "Un brezo",
              "Una leguminosa espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores diminutas y diurnas",
              "Flores rojas e inodoras",
              "Flores sin néctar",
              "Flores grandes, nocturnas y olorosas"
            ],
            "correcta": 3,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Cosmopolita",
              "Disyunta intercontinental",
              "Endémica muy restringida",
              "Circumboreal"
            ],
            "correcta": 2,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los pinos",
              "Las hayas",
              "Los abetos",
              "Los enebros y sabinas, género Juniperus"
            ],
            "correcta": 3,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los briófitos",
              "Las angiospermas",
              "Las gimnospermas",
              "Los pteridófitos"
            ],
            "correcta": 1,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Siempre poliploide",
              "Más diversa que la sexual",
              "Estéril",
              "Genéticamente idéntica a la madre"
            ],
            "correcta": 3,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Es litoral salino",
              "Es de alta montaña",
              "Queda por debajo del nivel de la encina",
              "Está siempre por encima del pinsapo nevado"
            ],
            "correcta": 2,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          }
        ]
      },
      {
        "id": "GEN-C-17",
        "nombre": "Examen complicado 17",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Pierde las hojas",
              "Abre más los estomas para captar más CO2",
              "Cierra los estomas para ahorrar agua",
              "Florece de golpe"
            ],
            "correcta": 2,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Tolera la sequía estival más extrema",
              "Resiste el fuego intenso",
              "Crece sobre dolomías y serpentinas",
              "Vive en el agua"
            ],
            "correcta": 2,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Forman caliza",
              "Fertilizan y enriquecen el suelo",
              "Lavan los óxidos del suelo",
              "Salinizan el suelo"
            ],
            "correcta": 2,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "El exceso de competencia con especies tropicales",
              "La salinidad del suelo",
              "La falta total de luz",
              "Su corta historia postglacial y su clima extremo"
            ],
            "correcta": 3,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Parasitan a los árboles que las sostienen",
              "Acumulan agua y crean microhábitats",
              "Producen frutos comestibles",
              "Fijan nitrógeno"
            ],
            "correcta": 1,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "Aparezcan palmeras",
              "Domine el alcornoque sobre la encina",
              "La encina sustituya al alcornoque",
              "Desaparezcan los Quercus"
            ],
            "correcta": 2,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es comestible y muy nutritivo para el ganado",
              "Es venenoso",
              "Es un aislante natural que se regenera",
              "Fija nitrógeno"
            ],
            "correcta": 2,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Sin variación",
              "A la misma temperatura",
              "Más cálido",
              "Más frío"
            ],
            "correcta": 2,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "De Bretaña, Cornualles y Gales",
              "De Crimea, Anatolia y Sinaí",
              "Ibérica, itálica y balcánica",
              "Escandinava, jutlandesa y de Kola"
            ],
            "correcta": 2,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Genéticamente idéntica a la madre",
              "Más diversa que la sexual",
              "Estéril",
              "Siempre poliploide"
            ],
            "correcta": 0,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Un periodo frío reciente, el Dryas",
              "Una familia de gramíneas",
              "Un tipo de suelo",
              "Una corriente marina"
            ],
            "correcta": 0,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Los desiertos cálidos subtropicales",
              "Las selvas tropicales húmedas",
              "Las estepas",
              "Las tundras"
            ],
            "correcta": 1,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Hibridación",
              "Poliploidía",
              "Homología de ancestro común",
              "Convergencia adaptativa"
            ],
            "correcta": 3,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Saladares interiores",
              "Praderas de gramíneas",
              "Matorrales de brezos y tojos costeros",
              "Bosques de coníferas"
            ],
            "correcta": 2,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Proceden de talar repetidamente el bosque maduro",
              "Son cultivos abandonados",
              "Viven bajo el agua",
              "El suelo, el viento o el frío impiden el bosque"
            ],
            "correcta": 3,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La tundra glacial",
              "La vegetación subtropical del Terciario",
              "La taiga boreal",
              "La actual selva amazónica del trópico húmedo"
            ],
            "correcta": 1,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La tensión-cohesión generada por la transpiración",
              "El bombeo de las raíces",
              "La presión del floema",
              "La gravedad invertida"
            ],
            "correcta": 0,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Hace fotosíntesis nocturna",
              "Parasita a un hongo micorrícico",
              "Fija nitrógeno",
              "Es carnívora"
            ],
            "correcta": 1,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Tejados de paja",
              "Las cazoletas de pipa o briar",
              "Cestos",
              "Cuerdas"
            ],
            "correcta": 1,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Disyunta intercontinental",
              "Cosmopolita",
              "Endémica muy restringida",
              "Circumboreal"
            ],
            "correcta": 2,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las endémicas",
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las que ya conviven en el sitio"
            ],
            "correcta": 2,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "La falta de luz",
              "La sal",
              "El fuego",
              "El frío"
            ],
            "correcta": 2,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "n, n y 2n",
              "2n, 3n y 2n",
              "n, 2n y 3n",
              "2n, n y 2n"
            ],
            "correcta": 3,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los briófitos",
              "Las gimnospermas",
              "Los pteridófitos",
              "Las angiospermas"
            ],
            "correcta": 3,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Una conífera perennifolia",
              "Una especie de alta montaña",
              "Totalmente indiferente al tipo de sustrato",
              "Calcífugo: no tolera los suelos calizos"
            ],
            "correcta": 3,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Carecen de polen",
              "Son todas acuáticas",
              "Forman un grupo natural válido",
              "Reúnen linajes basales y eudicotiledóneas"
            ],
            "correcta": 3,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          }
        ]
      },
      {
        "id": "GEN-C-18",
        "nombre": "Examen complicado 18",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Los grandes desiertos subtropicales",
              "Los bosques boreales",
              "Las grandes selvas ecuatoriales húmedas",
              "Las tundras"
            ],
            "correcta": 0,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Se desplaza a los polos sin llover",
              "Asciende y descarga lluvias",
              "Forma desiertos",
              "Desciende seco"
            ],
            "correcta": 1,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Humedad y viento",
              "La precipitación y la evapotranspiración potencial",
              "Temperatura y altitud",
              "Lluvia y latitud"
            ],
            "correcta": 1,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Millones de años",
              "Siglos fijos e invariables",
              "Décadas",
              "Segundos"
            ],
            "correcta": 2,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Xilema, cutícula, flor, semilla",
              "Semilla, flor, xilema, cutícula",
              "Flor, semilla, xilema, cutícula"
            ],
            "correcta": 0,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "Una erupción volcánica",
              "Una glaciación del Mediterráneo",
              "La evaporación casi total del Mediterráneo",
              "Una subida brusca del mar"
            ],
            "correcta": 2,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Foliar",
              "Troncal o caulinar",
              "Radical exclusiva",
              "Inexistente"
            ],
            "correcta": 1,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las bromelias tanque son importantes para la biodiversidad de la selva porque:",
            "opciones": [
              "Parasitan a los árboles que las sostienen",
              "Fijan nitrógeno",
              "Producen frutos comestibles",
              "Acumulan agua y crean microhábitats"
            ],
            "correcta": 3,
            "explicacion": "Su agua acumulada aloja invertebrados y anfibios."
          },
          {
            "tipo": "multiple",
            "pregunta": "El reservorio regional o species pool de un sitio incluye:",
            "opciones": [
              "Solo las cultivadas",
              "Todas las de la región que podrían llegar",
              "Solo las endémicas",
              "Solo las que ya conviven en el sitio"
            ],
            "correcta": 1,
            "explicacion": "El pool regional es el conjunto potencial, no solo las presentes."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores rojas e inodoras",
              "Flores grandes, nocturnas y olorosas",
              "Flores sin néctar",
              "Flores diminutas y diurnas"
            ],
            "correcta": 1,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Partenocarpia",
              "Heterostilia",
              "Apomixis o agamospermia",
              "Autoincompatibilidad"
            ],
            "correcta": 3,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Es acuática",
              "Rechaza el yeso",
              "Solo vive sobre yeso",
              "Vive en cualquier suelo"
            ],
            "correcta": 2,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Las hayas",
              "Los enebros y sabinas, género Juniperus",
              "Los abetos",
              "Los pinos"
            ],
            "correcta": 1,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "La poliploidía",
              "La reproducción por acodo",
              "Semillas muy longevas",
              "El permafrost que lo conserva"
            ],
            "correcta": 1,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La tundra glacial",
              "La actual selva amazónica del trópico húmedo",
              "La vegetación subtropical del Terciario",
              "La taiga boreal"
            ],
            "correcta": 2,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "Se reproducen por esporas",
              "Regeneran desde semillas tras el fuego",
              "No se ven afectadas",
              "Rebrotan vigorosamente desde la base quemada"
            ],
            "correcta": 1,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Se descompone rápido y es mucho más fértil",
              "Es muy ácido y se descompone con gran lentitud",
              "Es salino",
              "Es turboso"
            ],
            "correcta": 0,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "Se repiten incendios muy intensos cada año",
              "El suelo es salino",
              "El permafrost se funde de forma irregular",
              "Sopla mucho viento"
            ],
            "correcta": 2,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En las angiospermas el tejido nutritivo de la semilla es el endospermo 3n; en las gimnospermas es:",
            "opciones": [
              "El gametófito femenino haploide",
              "Otro endospermo triploide adicional",
              "La nucela diploide",
              "El tegumento 2n"
            ],
            "correcta": 0,
            "explicacion": "En gimnospermas alimenta el gametófito femenino haploide, no un endospermo 3n."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "Sus bellotas maduras adquieren un tono rojo",
              "De ese insecto se extraía un tinte rojo",
              "Sus hojas son escarlata",
              "Florece en rojo intenso"
            ],
            "correcta": 1,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "vf",
            "pregunta": "El pino negro Pinus uncinata es la conífera que alcanza mayor altitud en los Pirineos, en el límite superior del bosque.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Forma el límite arbóreo en la alta montaña pirenaica."
          },
          {
            "tipo": "multiple",
            "pregunta": "El piso termomediterráneo se llama 'infrailicino' porque:",
            "opciones": [
              "Está siempre por encima del pinsapo nevado",
              "Es de alta montaña",
              "Queda por debajo del nivel de la encina",
              "Es litoral salino"
            ],
            "correcta": 2,
            "explicacion": "Infrailicino = por debajo del dominio de la encina."
          },
          {
            "tipo": "multiple",
            "pregunta": "El alcornoque Quercus suber, a diferencia de la encina, es:",
            "opciones": [
              "Una conífera perennifolia",
              "Calcífugo: no tolera los suelos calizos",
              "Totalmente indiferente al tipo de sustrato",
              "Una especie de alta montaña"
            ],
            "correcta": 1,
            "explicacion": "El alcornoque rechaza la caliza, al contrario que la encina, indiferente al sustrato."
          },
          {
            "tipo": "vf",
            "pregunta": "El límite norte del bosque boreal coincide aproximadamente con la isoterma de 10 ºC del mes más cálido.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Esa isoterma estival marca el final del árbol hacia el norte."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que las dicotiledóneas tradicionales sean parafiléticas significa que:",
            "opciones": [
              "Reúnen linajes basales y eudicotiledóneas",
              "Son todas acuáticas",
              "Forman un grupo natural válido",
              "Carecen de polen"
            ],
            "correcta": 0,
            "explicacion": "Es un cajón artificial: agrupa basales y eudicots sin ser monofilético."
          }
        ]
      },
      {
        "id": "GEN-C-19",
        "nombre": "Examen complicado 19",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La organización del gametófito femenino en siete células y ocho núcleos es exclusiva de:",
            "opciones": [
              "Los briófitos",
              "Las gimnospermas",
              "Los pteridófitos",
              "Las angiospermas"
            ],
            "correcta": 3,
            "explicacion": "El saco embrionario de 7 células y 8 núcleos es propio de las angiospermas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las frondosas caducifolias como abedules y álamos actúan como pioneras en la taiga porque:",
            "opciones": [
              "Crecen muy despacio",
              "Necesitan sombra densa",
              "Son perennifolias",
              "Colonizan rápido los claros"
            ],
            "correcta": 3,
            "explicacion": "Su rápido crecimiento las hace pioneras tras la perturbación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Durante las glaciaciones cuaternarias, los tres grandes refugios de la flora europea fueron las penínsulas:",
            "opciones": [
              "De Crimea, Anatolia y Sinaí",
              "Ibérica, itálica y balcánica",
              "De Bretaña, Cornualles y Gales",
              "Escandinava, jutlandesa y de Kola"
            ],
            "correcta": 1,
            "explicacion": "Las tres penínsulas mediterráneas sirvieron de refugio glacial."
          },
          {
            "tipo": "multiple",
            "pregunta": "Hacia los 30º de latitud el aire de las células de Hadley desciende seco, lo que genera:",
            "opciones": [
              "Las tundras",
              "Los bosques boreales",
              "Las grandes selvas ecuatoriales húmedas",
              "Los grandes desiertos subtropicales"
            ],
            "correcta": 3,
            "explicacion": "El aire descendente y seco crea los cinturones desérticos."
          },
          {
            "tipo": "vf",
            "pregunta": "El boj Buxus sempervirens es un arbusto de madera muy dura y densa, no una rosácea espinosa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El boj es una buxácea de madera densísima, sin espinas."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "vf",
            "pregunta": "Los gnetófitos comparten con las angiospermas rasgos como los vasos en el xilema, pero esa semejanza es convergencia: hoy se sitúan próximos a las coníferas.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La semejanza con las angiospermas es convergente."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores grandes, nocturnas y olorosas",
              "Flores rojas e inodoras",
              "Flores sin néctar",
              "Flores diminutas y diurnas"
            ],
            "correcta": 0,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Old Tjikko, uno de los clones vivos más antiguos, es un Picea abies que persiste milenios gracias a:",
            "opciones": [
              "Semillas muy longevas",
              "La poliploidía",
              "El permafrost que lo conserva",
              "La reproducción por acodo"
            ],
            "correcta": 3,
            "explicacion": "El acodo de sus ramas bajas renueva el clon durante milenios."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Forma desiertos",
              "Se desplaza a los polos sin llover",
              "Desciende seco",
              "Asciende y descarga lluvias"
            ],
            "correcta": 3,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "El pinsapo Abies pinsapo escapa de la competencia de las quercíneas porque:",
            "opciones": [
              "Vive en el agua",
              "Resiste el fuego intenso",
              "Crece sobre dolomías y serpentinas",
              "Tolera la sequía estival más extrema"
            ],
            "correcta": 2,
            "explicacion": "Se refugia en suelos donde las encinas no compiten bien."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Cestos",
              "Tejados de paja",
              "Cuerdas",
              "Las cazoletas de pipa o briar"
            ],
            "correcta": 3,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "La apomixis, formación de semillas sin fecundación, da una descendencia:",
            "opciones": [
              "Genéticamente idéntica a la madre",
              "Siempre poliploide",
              "Más diversa que la sexual",
              "Estéril"
            ],
            "correcta": 0,
            "explicacion": "Sin meiosis ni fecundación, la descendencia es clonal."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una planta CAM, abrir los estomas de noche y cerrarlos de día:",
            "opciones": [
              "Reduce la pérdida de agua",
              "Aumenta la pérdida de agua",
              "Sirve para fijar nitrógeno",
              "Elimina la fotosíntesis"
            ],
            "correcta": 0,
            "explicacion": "El CAM ahorra agua, pero limita la velocidad de la fotosíntesis."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Xilema, cutícula, flor, semilla",
              "Semilla, flor, xilema, cutícula",
              "Flor, semilla, xilema, cutícula"
            ],
            "correcta": 0,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Cierra los estomas para ahorrar agua",
              "Florece de golpe",
              "Pierde las hojas",
              "Abre más los estomas para captar más CO2"
            ],
            "correcta": 0,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "El rechazo químico del polen propio por el estigma y el estilo, que evita la autofecundación, se denomina:",
            "opciones": [
              "Apomixis o agamospermia",
              "Heterostilia",
              "Partenocarpia",
              "Autoincompatibilidad"
            ],
            "correcta": 3,
            "explicacion": "La autoincompatibilidad impide germinar al polen del propio individuo."
          },
          {
            "tipo": "multiple",
            "pregunta": "De los factores que mantienen abiertas las sabanas, se considera probablemente el más importante:",
            "opciones": [
              "El frío",
              "El fuego",
              "La falta de luz",
              "La sal"
            ],
            "correcta": 1,
            "explicacion": "El fuego recurrente impide el cierre arbóreo de la sabana."
          },
          {
            "tipo": "multiple",
            "pregunta": "La crisis de salinidad messiniense, hace unos 6 millones de años, consistió en:",
            "opciones": [
              "La evaporación casi total del Mediterráneo",
              "Una subida brusca del mar",
              "Una erupción volcánica",
              "Una glaciación del Mediterráneo"
            ],
            "correcta": 0,
            "explicacion": "El Mediterráneo se desecó parcialmente, dejando depósitos salinos."
          },
          {
            "tipo": "multiple",
            "pregunta": "El gálbulo, cono carnoso y bayiforme, es característico de:",
            "opciones": [
              "Los enebros y sabinas, género Juniperus",
              "Las hayas",
              "Los abetos",
              "Los pinos"
            ],
            "correcta": 0,
            "explicacion": "El gálbulo es el pseudofruto carnoso de Juniperus."
          },
          {
            "tipo": "vf",
            "pregunta": "Las Cyperaceae se distinguen a menudo de las Poaceae por tener el tallo macizo y de sección triangular.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El tallo trígono y macizo separa las cíperas de las gramíneas."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las landas costeras atlánticas son:",
            "opciones": [
              "Saladares interiores",
              "Praderas de gramíneas",
              "Matorrales de brezos y tojos costeros",
              "Bosques de coníferas"
            ],
            "correcta": 2,
            "explicacion": "Las landas son brezales-tojales costeros sobre suelo ácido."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "No se ven afectadas",
              "Regeneran desde semillas tras el fuego",
              "Se reproducen por esporas",
              "Rebrotan vigorosamente desde la base quemada"
            ],
            "correcta": 1,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "La región florística de El Cabo, con el fynbos, destaca por:",
            "opciones": [
              "Ser un desierto sin flora",
              "Su baja diversidad",
              "Su altísimo porcentaje de endemismos",
              "Carecer de flores"
            ],
            "correcta": 2,
            "explicacion": "El Cabo concentra una flora riquísima y muy endémica."
          },
          {
            "tipo": "multiple",
            "pregunta": "Monotropa uniflora carece de clorofila y vive como mico-heterótrofa, lo que significa que:",
            "opciones": [
              "Parasita a un hongo micorrícico",
              "Hace fotosíntesis nocturna",
              "Es carnívora",
              "Fija nitrógeno"
            ],
            "correcta": 0,
            "explicacion": "Roba carbono al hongo, que a su vez lo obtiene de un árbol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los baobabs (Adansonia) almacenan agua en sus troncos descomunales; esta estrategia es la suculencia:",
            "opciones": [
              "Radical exclusiva",
              "Foliar",
              "Troncal o caulinar",
              "Inexistente"
            ],
            "correcta": 2,
            "explicacion": "Guardan agua en el tronco: suculencia caulinar."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Fija nitrógeno",
              "Es un aislante natural que se regenera",
              "Es comestible y muy nutritivo para el ganado",
              "Es venenoso"
            ],
            "correcta": 1,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El humus mull del bosque caducifolio se diferencia del mor de la taiga en que:",
            "opciones": [
              "Es salino",
              "Es turboso",
              "Es muy ácido y se descompone con gran lentitud",
              "Se descompone rápido y es mucho más fértil"
            ],
            "correcta": 3,
            "explicacion": "El mull es fértil y de descomposición rápida; el mor, ácido y lento."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erodium paularense, restringido a unos pocos kilómetros cuadrados del Sistema Central, tiene un área:",
            "opciones": [
              "Cosmopolita",
              "Disyunta intercontinental",
              "Circumboreal",
              "Endémica muy restringida"
            ],
            "correcta": 3,
            "explicacion": "Su distribución mínima lo convierte en un endemismo estricto."
          }
        ]
      },
      {
        "id": "GEN-C-20",
        "nombre": "Examen complicado 20",
        "preguntas": [
          {
            "tipo": "multiple",
            "pregunta": "La aulaga o aliaga Genista scorpius, frecuente en romerales, es:",
            "opciones": [
              "Una labiada aromática",
              "Un brezo",
              "Una gramínea",
              "Una leguminosa espinosa"
            ],
            "correcta": 3,
            "explicacion": "Es una genistea espinosa, leguminosa, de los romerales basófilos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Erica arborea, el brezo arbóreo, se aprovecha porque de su cepa leñosa se fabrican:",
            "opciones": [
              "Tejados de paja",
              "Cuerdas",
              "Las cazoletas de pipa o briar",
              "Cestos"
            ],
            "correcta": 2,
            "explicacion": "El briar de las pipas procede de la cepa de Erica arborea."
          },
          {
            "tipo": "multiple",
            "pregunta": "En una semilla de gimnosperma conviven el tegumento, el tejido nutritivo y el embrión, cuyas ploidías son respectivamente:",
            "opciones": [
              "2n, n y 2n",
              "n, n y 2n",
              "2n, 3n y 2n",
              "n, 2n y 3n"
            ],
            "correcta": 0,
            "explicacion": "Tegumento 2n materno, gametófito nutricio n y embrión 2n de la nueva generación."
          },
          {
            "tipo": "vf",
            "pregunta": "En las plantas C4 la primera fijación del CO2 y el ciclo de Calvin ocurren en células distintas, lo que mejora el rendimiento con calor y luz intensa.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La separación espacial Kranz da ventaja a las C4 en ambientes cálidos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los 'bosques borrachos', con árboles inclinados en todas direcciones, aparecen donde:",
            "opciones": [
              "Sopla mucho viento",
              "El permafrost se funde de forma irregular",
              "Se repiten incendios muy intensos cada año",
              "El suelo es salino"
            ],
            "correcta": 1,
            "explicacion": "El deshielo irregular del permafrost inclina los troncos."
          },
          {
            "tipo": "vf",
            "pregunta": "En el efecto solana-umbría, la cara de solana, orientada al sur en el hemisferio norte, es más cálida y seca que la umbría.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "La solana recibe más sol y es más seca; la umbría, más fresca y húmeda."
          },
          {
            "tipo": "multiple",
            "pregunta": "La sucesión correcta de innovaciones evolutivas, de más antigua a más reciente, es:",
            "opciones": [
              "Flor, semilla, xilema, cutícula",
              "Semilla, flor, xilema, cutícula",
              "Cutícula y embrión, xilema, semilla y polen, flor y fruto",
              "Xilema, cutícula, flor, semilla"
            ],
            "correcta": 2,
            "explicacion": "Briófitos, pteridófitos, gimnospermas y angiospermas en ese orden."
          },
          {
            "tipo": "multiple",
            "pregunta": "La coscoja Quercus coccifera debe su nombre a la cochinilla Kermes vermilio porque:",
            "opciones": [
              "De ese insecto se extraía un tinte rojo",
              "Sus hojas son escarlata",
              "Florece en rojo intenso",
              "Sus bellotas maduras adquieren un tono rojo"
            ],
            "correcta": 0,
            "explicacion": "El kermes daba el tinte carmín, de ahí coccifera."
          },
          {
            "tipo": "multiple",
            "pregunta": "El laurel y las laurisilvas de Canarias son restos vivos de:",
            "opciones": [
              "La tundra glacial",
              "La taiga boreal",
              "La vegetación subtropical del Terciario",
              "La actual selva amazónica del trópico húmedo"
            ],
            "correcta": 2,
            "explicacion": "Las laurisilvas son reliquias de la flora terciaria subtropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El síndrome floral quiropterófilo, de flores polinizadas por murciélagos, suele incluir:",
            "opciones": [
              "Flores rojas e inodoras",
              "Flores sin néctar",
              "Flores diminutas y diurnas",
              "Flores grandes, nocturnas y olorosas"
            ],
            "correcta": 3,
            "explicacion": "Grandes, nocturnas, claras y olorosas para atraer murciélagos."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas en cojín de alta montaña mantienen su interior, frente al aire exterior, unos grados:",
            "opciones": [
              "Más frío",
              "Sin variación",
              "Más cálido",
              "A la misma temperatura"
            ],
            "correcta": 2,
            "explicacion": "El cojín atrapa calor y crea un microclima más cálido dentro."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que la encina resista mejor el frío continental que el alcornoque explica que, hacia el interior frío y seco:",
            "opciones": [
              "La encina sustituya al alcornoque",
              "Desaparezcan los Quercus",
              "Aparezcan palmeras",
              "Domine el alcornoque sobre la encina"
            ],
            "correcta": 0,
            "explicacion": "La carrasca tolera mejor la continentalidad que el alcornoque."
          },
          {
            "tipo": "vf",
            "pregunta": "Los terófitos, que pasan la mala estación como semilla, son escasos en la tundra y abundantes en los desiertos cálidos.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "El verano corto de la tundra no favorece a las anuales; el desierto sí."
          },
          {
            "tipo": "vf",
            "pregunta": "En el nenúfar, los estomas se sitúan en el haz de la hoja, la cara que mira hacia arriba, al contrario que en las plantas terrestres.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Al flotar, el nenúfar coloca los estomas en el haz."
          },
          {
            "tipo": "multiple",
            "pregunta": "Dryas octopetala, planta emblemática de la tundra, da nombre a:",
            "opciones": [
              "Un periodo frío reciente, el Dryas",
              "Una corriente marina",
              "Una familia de gramíneas",
              "Un tipo de suelo"
            ],
            "correcta": 0,
            "explicacion": "El Dryas reciente toma su nombre de esta planta indicadora del frío."
          },
          {
            "tipo": "multiple",
            "pregunta": "El súber o corcho del alcornoque es valioso porque:",
            "opciones": [
              "Es un aislante natural que se regenera",
              "Fija nitrógeno",
              "Es venenoso",
              "Es comestible y muy nutritivo para el ganado"
            ],
            "correcta": 0,
            "explicacion": "El corcho aísla muy bien y la corteza se regenera."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la podsolización, los ácidos orgánicos liberan iones H+ que:",
            "opciones": [
              "Forman caliza",
              "Lavan los óxidos del suelo",
              "Fertilizan y enriquecen el suelo",
              "Salinizan el suelo"
            ],
            "correcta": 1,
            "explicacion": "El lavado deja el característico horizonte gris ceniciento del podsol."
          },
          {
            "tipo": "multiple",
            "pregunta": "Aproximadamente, las angiospermas representan qué porcentaje de la diversidad vegetal conocida actual:",
            "opciones": [
              "50 %",
              "25 %",
              "85 %",
              "99 %"
            ],
            "correcta": 2,
            "explicacion": "Las angiospermas suponen alrededor del 85 % de la flora conocida."
          },
          {
            "tipo": "vf",
            "pregunta": "La circulación termohalina oceánica está movida fundamentalmente por las diferencias de temperatura y salinidad del agua.",
            "opciones": [
              "Verdadero",
              "Falso"
            ],
            "correcta": 0,
            "explicacion": "Termo (temperatura) y halina (salinidad) gobiernan esa circulación."
          },
          {
            "tipo": "multiple",
            "pregunta": "Las plantas 'reclutadoras', frente a las 'rebrotadoras', tras el fuego:",
            "opciones": [
              "Se reproducen por esporas",
              "No se ven afectadas",
              "Regeneran desde semillas tras el fuego",
              "Rebrotan vigorosamente desde la base quemada"
            ],
            "correcta": 2,
            "explicacion": "No rebrotan: dependen de la germinación masiva tras el incendio."
          },
          {
            "tipo": "multiple",
            "pregunta": "Los matorrales de carácter permanente, frente a los seriales, se mantienen porque:",
            "opciones": [
              "Proceden de talar repetidamente el bosque maduro",
              "Viven bajo el agua",
              "Son cultivos abandonados",
              "El suelo, el viento o el frío impiden el bosque"
            ],
            "correcta": 3,
            "explicacion": "No son etapa de sustitución: el medio impide el bosque."
          },
          {
            "tipo": "multiple",
            "pregunta": "El abandono rural y los cambios de uso del suelo, como factores de dinamismo de la vegetación, actúan en una escala de:",
            "opciones": [
              "Segundos",
              "Décadas",
              "Millones de años",
              "Siglos fijos e invariables"
            ],
            "correcta": 1,
            "explicacion": "Los cambios de uso operan en pocas décadas, una escala rápida frente a la evolución."
          },
          {
            "tipo": "multiple",
            "pregunta": "Una gipsófila estricta se diferencia de una gypsovag o tolerante en que la estricta:",
            "opciones": [
              "Vive en cualquier suelo",
              "Rechaza el yeso",
              "Solo vive sobre yeso",
              "Es acuática"
            ],
            "correcta": 2,
            "explicacion": "La gipsófila estricta está confinada a los yesos."
          },
          {
            "tipo": "multiple",
            "pregunta": "En la Zona de Convergencia Intertropical, sobre el ecuador, el aire caliente y húmedo:",
            "opciones": [
              "Desciende seco",
              "Se desplaza a los polos sin llover",
              "Asciende y descarga lluvias",
              "Forma desiertos"
            ],
            "correcta": 2,
            "explicacion": "El ascenso ecuatorial provoca las lluvias de la pluvisilva."
          },
          {
            "tipo": "multiple",
            "pregunta": "Que especies sin parentesco de las cinco regiones mediterráneas hayan desarrollado hojas esclerófilas similares es un caso de:",
            "opciones": [
              "Convergencia adaptativa",
              "Hibridación",
              "Poliploidía",
              "Homología de ancestro común"
            ],
            "correcta": 0,
            "explicacion": "Misma solución foliar ante el mismo clima, sin ancestro común: convergencia."
          },
          {
            "tipo": "multiple",
            "pregunta": "El índice de aridez se define como el cociente entre:",
            "opciones": [
              "Lluvia y latitud",
              "Temperatura y altitud",
              "Humedad y viento",
              "La precipitación y la evapotranspiración potencial"
            ],
            "correcta": 3,
            "explicacion": "Relaciona el agua que llega con la que el clima podría evaporar."
          },
          {
            "tipo": "multiple",
            "pregunta": "La depresión de mediodía o 'siesta vegetal' consiste en que, en las horas de máximo calor, la planta:",
            "opciones": [
              "Cierra los estomas para ahorrar agua",
              "Abre más los estomas para captar más CO2",
              "Pierde las hojas",
              "Florece de golpe"
            ],
            "correcta": 0,
            "explicacion": "Cierra estomas al mediodía para no deshidratarse."
          },
          {
            "tipo": "multiple",
            "pregunta": "Según el diagrama de Whittaker, los biomas más productivos en biomasa por año son:",
            "opciones": [
              "Los desiertos cálidos subtropicales",
              "Las selvas tropicales húmedas",
              "Las estepas",
              "Las tundras"
            ],
            "correcta": 1,
            "explicacion": "Calor y humedad constantes maximizan la producción en la selva tropical."
          },
          {
            "tipo": "multiple",
            "pregunta": "El ascenso del agua por el xilema hasta la copa de un árbol alto se explica sobre todo por:",
            "opciones": [
              "La tensión-cohesión generada por la transpiración",
              "La presión del floema",
              "La gravedad invertida",
              "El bombeo de las raíces"
            ],
            "correcta": 0,
            "explicacion": "La transpiración tira de la columna de agua, cohesionada en el xilema."
          },
          {
            "tipo": "multiple",
            "pregunta": "La baja diversidad de especies de la taiga se explica sobre todo por:",
            "opciones": [
              "El exceso de competencia con especies tropicales",
              "Su corta historia postglacial y su clima extremo",
              "La falta total de luz",
              "La salinidad del suelo"
            ],
            "correcta": 1,
            "explicacion": "Recolonizada hace poco y con clima duro, conserva pocas especies."
          }
        ]
      }
    ]
  }
};
if (typeof module !== 'undefined' && module.exports) { module.exports = sandra_botanica_generales; }
if (typeof window !== 'undefined') { window.sandra_botanica_generales = sandra_botanica_generales; }
