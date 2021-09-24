let products = [
    {
        name: 'Guitarra criolla clásica Gracia M1 natural',
        description: 'Con un toque artesanal único plasmado en sus materiales, Gracia acompaña a la historia musical desde el año 1870. Sus guitarras poseen alcance internacional y son utilizadas tantos por principiantes como por grandes referentes de la música.',
        price: 10600,
        stock: 3,
        brand: 'Gracia',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_854592-MLA44116070158_112020-F.webp',
        qualification: [],
    },
    {
        name: 'Guitarra criolla clásica Fonseca 25 natural',
        description: 'Disfrutá con esta guitarra Fonseca de la conexión con la música. Está diseñada para aficionados y profesionales. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical.',
        price: 12700,
        stock: 4,
        brand: 'Fonseca',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_855433-MLA44283936308_122020-F.webp',
        qualification: [],
    },
    {
        name: 'Guitarra criolla clásica Fonseca 25 negra',
        description: 'Disfrutá con esta guitarra Fonseca de la conexión con la música. Está diseñada para aficionados y profesionales. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical.',
        price: 13500,
        stock: 3,
        brand: 'Fonseca',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_940459-MLA44283926435_122020-F.webp',
        qualification: [],
    },
    {
        name: 'Guitarra criolla clásica La Alpujarra 80',
        description: 'Disfrutá con esta guitarra La Alpujarra de la conexión con la música. Está diseñada para aficionados y profesionales. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical.',
        price: 34700,
        stock: 3,
        brand: 'La Alpujarra',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_916269-MLA44011711745_112020-F.webp',
        qualification: [],
    },
    {
        name: 'Guitarra Electrica Stratocaster 22 Trastes Con Palanca Cable',
        description: 'Formato de guitarra simil Stratocaster. Cuerpo de madera maciza. Mástil de arce. Diapasón: MDF Alta densidad. Clavijas de fundición cromadas. Cuerdas de metal. 3 micrófonos: 2 bobina simple, 1 humbucker. 3 perillas: 1 de volumen, 2 de Tono. Selectora de 5 posiciones. 22 trastes. Puente móvil simple estilo Stratocaster',
        price: 14200,
        stock: 2,
        brand: 'Disbyte',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_863411-MLA42437374450_072020-F.webp',
        qualification: [],
    },
    {
        name: 'Guitarra Electrica Schecter Banshee-6 Extreme Thrubody',
        description: 'La Guitarra Eléctrica Schecter Banshee-6 Extreme cuenta con una tapa de arce acolchada en color negro. Tiene un look visualmente impactante y único que destacará en el escenario. Un juego de pastillas de diamante de Schecter proporciona a la banshee extreme unos tonos increíblemente estruendosos, que ofrecen unos agudos agudos con unas cualidades de graves en auge.',
        price: 72395,
        stock: 2,
        brand: 'Schecter',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_836288-MLA41099294476_032020-F.webp',
        qualification: [],
    },
    {
        name: 'Combo Teclado Casio Ctk7200 5 Octavas + Soporte + Fuente',
        description: '61 teclas con sensibilidad al tacto, 64 polifonías. 820 tonos y 260 ritmos. El teclado cuenta con 50 tonos de órgano con barra de armónicos seleccionados especialmente. La secuenciación de ataque, tiempo de liberación, detenimiento, vibrato, reverberación/coro, DPS y otros parámetros pueden ajustarse y editarse.',
        price: 86145,
        stock: 4,
        brand: 'Casio',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_887367-MLA31356022737_072019-F.webp',
        qualification: [],
    },
    {
        name: 'Microfono Shure Dinamico De Mano',
        description: 'Ideal para presentaciones habladas, presentaciones multimedia, karaoke, y el uso en instrumentos. Unidireccional (cardioide) ayuda a reducir el patrón de captación de información y la realimentación, mientras que la respuesta de frecuencia de ancho y de alto rendimiento ofrecen una calidad de sonido excelente. Soporte amortiguado interno para reducir el ruido de manejo.',
        price: 5500,
        stock: 5,
        brand: 'Shure',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_648930-MLA41230531398_032020-F.webp',
        qualification: [],
    },
    {
        name: 'Combo 2 Microfonos Shure + 2 Soportes + Accesorios',
        description: 'Ideal para presentaciones habladas, presentaciones multimedia, karaoke, y el uso en instrumentos. Unidireccional (cardioide) ayuda a reducir el patrón de captación de información y la realimentación, mientras que la respuesta de frecuencia de ancho y de alto rendimiento ofrecen una calidad de sonido excelente. Soporte amortiguado interno para reducir el ruido de manejo.',
        price: 16250,
        stock: 3,
        brand: 'Shure',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_873836-MLA46166212925_052021-F.webp',
        qualification: [],
    },
    {
        name: 'Bateria Acustica Mapex Prodigy 5 Cuerpos Fierros Banqueta',
        description: 'Mapex da acceso al mundo de la batería con una gran calidad y estilo. Producido en tilo con acabado recubierto, los tambores están equipados con Prodigy el nuevo modelo que utiliza un solo punto de contacto.',
        price: 111650,
        stock: 3,
        brand: 'Mapex',
        categories: ['Percusion'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_636361-MLA40568777195_012020-F.webp',
        qualification: [],
    },
    {
        name: 'Bateria Acustica Completa Fierros Platos 5 Cuerpos Banqueta',
        description: 'Cascos de tilo de seis pliegues de alta calidad. Perfecta para principiantes y percusionistas en desarrollo.',
        price: 49999,
        stock: 5,
        brand: 'Natal',
        categories: ['Percusion'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_729829-MLA44492766909_012021-F.webp',
        qualification: [],
    },
    {
        name: 'Bateria Electronica Roland Td27kv',
        description: 'La Td-27kv de nivel medio proporciona el sonido inmersivo y la respuesta que solo ofrecen las V-Drums. Se basa en el nuevo y potente generador de sonido Td-27, que viene repleto de sonidos de platos y percusiones de alta calidad y totalmente personalizables. La avanzada tecnología de disparador digital detecta todos los matices de la interpretación con una definición ultra alta, mientras que los pads de percusiones y platos de gran diámetro ofrecen sensaciones excepcionales, con una espaciosa disposición de estilo acústico.',
        price: 823900,
        stock: 3,
        brand: 'Roland',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_609764-MLA42823013408_072020-F.webp',
        qualification: [],
    },
    {
        name: 'Bateria Electronica Octapad Roland Spd20x',
        description: 'Con sus sonidos versátiles, almohadillas con capacidad de respuesta ultrarrápida y tamaño de maletín, el OCTAPAD SPD-20X es perfecto para realizar percusionistas en movimiento. Envasado dentro del SPD-20X hay una amplia gama de sonidos que representan instrumentos de percusión de todo el mundo.',
        price: 156750,
        stock: 4,
        brand: 'Roland',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_750578-MLA40568773981_012020-F.webp',
        qualification: [],
    },
    {
        name: 'Bajo Eléctrico 4 Cuerdas Racker Plus 457 T/ Musicman Activo',
        description: 'Bajo Racker Plus Faim 457 Tipo MusicMan Stingray, con Microfonos Activos. Cuerpo de Lenga. Mango de guatambu. Trastera de jacaranda. Trastes alpaca 2.9. Mic tipo MusicMan ceramico de fabricacion propia. Circuito Activo con push/pull (hace al mic serie o paralelo).',
        price: 35648,
        stock: 6,
        brand: 'Music Man',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_754467-MLA42436050459_072020-F.webp',
        qualification: [],
    },
    {
        name: 'Bajo Racker Plus Tipo Musicman Stingray 5 Cuerdas',
        description: 'Bajo Racker Plus 458 Tipo MusicMan Stingray 5 cuerdas. Cuerpo de Lenga. Mango de guatambu. Trastera de jacaranda. Trastes alpaca 2.9. Mic tipo MusicMan ceramico de fabricacion propia.',
        price: 29540,
        stock: 4,
        brand: 'Racker Plus',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_823888-MLA47260971314_082021-F.webp',
        qualification: [],
    },
    {
        name: 'Bajo Eléctrico Squier Vintage Modified Jaguar Spcl Hb',
        description: 'Este instrumento cuenta con un mástil moderno diseñado para el confort y el rendimiento, con un perfil contemporáneo (silueta de la sección transversal del mástil) y un acabado posterior satinado ideal para los bajistas que emplean el pulgar en la parte posterior o lateral del diapasón. El potenciador de graves activo en el Vintage Modified Jaguar Bass Special aporta los graves que necesitas en todo momento y una potencia extra de sonido.',
        price: 84635,
        stock: 5,
        brand: 'Squier',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_928771-MLA31586793288_072019-F.webp',
        qualification: [],
    },
    {
        name: 'Combo Violin Estudio Madera 3/4 4/4 + Accesorios',
        description: 'Violin generico tamaño 1/2, 3/4 o 4/4. Clavijas de Madera en 1 sola pieza. 4 Microafinadores. Arco de Madera. Resina. Estuche de Lujo Incluido.',
        price: 15000,
        stock: 3,
        brand: 'Racker',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_924415-MLA33084043276_122019-F.webp',
        qualification: [],
    },
    {
        name: 'Violin 4/4 Yamaha V3ska 4/4 C/ Arco Funda',
        description: 'Cada instrumento está hecho a mano utilizando los mismos métodos tradicionales que se utilizan para violines de gama alta. Perfecto para el violinista que busca un instrumento de calidad, el violín V3SKA está fabricado con maderas de la mejor calidad; la tapa es de madera de Pino, el fondo y el mástil son de madera de Maple, acompañados por una trastera de Ebano, clavijas de Rosewood y un impresionante arco de Pernambuco. Para hacer la afinación lo más sencillo posible, el cordal incorpora afinaprimas Wittner en todas las cuerdas, lo que permite una afinación precisa y exacta.',
        price: 83250,
        stock: 5,
        brand: 'Yamaha',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_744487-MLA40568178554_012020-F.webp',
        qualification: [],
    },
    {
        name: 'Violin Electrico Sojing 4/4 Silent C/ Arco Funda',
        description: 'Material Madera. Perilla de volumen y tono. Se usa con auriculares o amplificador. Incluye arco y estuche. Color madera rojiza.',
        price: 32180,
        stock: 4,
        brand: 'Parquer',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_629712-MLA43916917911_102020-F.webp',
        qualification: [],
    },
    {
        name: 'Microfono P/ Violin Avvmic Activo De Contacto Condenser 5mm',
        description: 'Este micrófono para Violín cuenta con una capsula condenser de 5mm. Cumple con la condicion de cubrir los sonidos que se desarrollan debajo del diapason, escuchándose tanto los agudos y graves del Violin con un sonido calido y con cuerpo, a la intensidad que se considere apropiada.',
        price: 13000,
        stock: 6,
        brand: 'Avvmic',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_707051-MLA40568377877_012020-F.webp',
        qualification: [],
    },
    {
        name: 'Combo Violin Estudio Madera 1/4 1/2 3/4 4/4 + Accesorios',
        description: 'Excelente violín superior, en diferentes medidas (3/4, 1/2, 4/4). Construido en madera genuina, estacionada. Gran sonoridad y versatilidad, la mejor opción en relación precio / calidad.',
        price: 18100,
        stock: 5,
        brand: 'Racker',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_730201-MLA40568690781_012020-F.webp',
        qualification: [],
    },
    {
        name: 'Teclado Roland Go-61kl 61 Sintetizador Go Key',
        description: 'Con su innovadora función Loop Mix cualquier persona puede construir canciones totalmente producidas al instante, incluso sin tener experiencia musical previa. Cuenta con un divertido teclado inspiracional para músicos debutantes. Función Loop Mix permitiéndote construir canciones al simplemente ejecutar notas en el teclado. Manipula los sonidos de tus Loops con intuitivo control one-touch. Mas de 500 sonidos con calidad-profesional: pianos, synths, strings, bass, brass, y mas. Grabadora de canciones integrada a bordo con respaldo USB.',
        price: 73700,
        stock: 6,
        brand: 'Roland',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_619792-MLA41292931287_032020-O.webp',
        qualification: [],
    },
    {
        name: 'Combo Teclado Sintetizador Roland Xps10 + Soporte + Fuente',
        description: 'Perfecto para los músicos trabajadores y aficionados por igual, el XPS-10 entrega los respetados sonidos y las funciones Roland en un precio muy atractivo. Este elegante sintetizador listo para el desempeño, está equipado con más de 1500 sonidos de la librería Roland, incluyendo versátiles Tones modernos del JUNO-Di, clásicos de las series D-50 y XP, y muchos otros mas. Un amplio rango de sonidos de instrumentos étnicos están a bordo del XPS-10, e incluso es posible importar tus propios sonidos vía memoria USB ¡para asignarlos a las teclas!',
        price: 111600,
        stock: 5,
        brand: 'Roland',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_627409-MLA40579194224_012020-F.webp',
        qualification: [],
    },
    {
        name: 'Teclado Sintetizador Roland Xps10 61 Teclas',
        description: 'Perfecto para los músicos trabajadores y aficionados por igual, el XPS-10 entrega los respetados sonidos y las funciones Roland en un precio muy atractivo. Este elegante sintetizador listo para el desempeño, está equipado con más de 1500 sonidos de la librería Roland, incluyendo versátiles Tones modernos del JUNO-Di, clásicos de las series D-50 y XP, y muchos otros mas. Un amplio rango de sonidos de instrumentos étnicos están a bordo del XPS-10, e incluso es posible importar tus propios sonidos vía memoria USB ¡para asignarlos a las teclas!',
        price: 107800,
        stock: 6,
        brand: 'Roland',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_959425-MLA41915795116_052020-O.webp',
        qualification: [],
    },
    {
        name: 'Korg Volca Kick Generador Analogico De Bombos Sintetizador',
        description: 'El Volca Kick es un generador de bombo analógico pensado para el diseño sonoro. Un circuito analógico basado en el potente sonido del filtro resonante MS-20 original, permite crear una amplia gama de sonidos de bombo, que sólo son posibles con circuitos analógicos, desde bombos sólidos a impactantes bajos. El secuenciador de 16 pasos, un rasgo distintivo de los volca, ahora tiene una nueva función Touch FX que te permite controlar un efecto al instante, dándote aún más potencial para el directo.',
        price: 21545,
        stock: 6,
        brand: 'Korg',
        categories: ['Instrumentos eléctricos'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_987762-MLA41716596123_052020-F.webp',
        qualification: [],
    },
    {
        name: 'Caja Bafle Moon Audio STONE15A portátil con bluetooth negro 220V',
        description: 'Moon Audio STONE15A ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',
        price: 30780,
        stock: 5,
        brand: 'Moon',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_797497-MLA32793352280_112019-F.webp',
        qualification: [],
    },
    {
        name: 'Caja Bafle Potenciada As1014 Bluetooth Mp3 Microfono 1200w',
        description: 'El AS1014 es un centro completo de sonidos Multimedia. Todo lo que necesitás en un solo equipo , portátil, manijas, ruedas, batería propia, entrada USB, Bluetooth, Micrófono Inalámbrico, MP3, Display, entrada 12Vcc y Fuente a 220V. Entrada de señal por RCA y Para micrófonos por Plug 6.5. Luces led multicolores con encendido y apagado. Micrófono Inalámbrico incorporando con receptor UHF.',
        price: 29450,
        stock: 5,
        brand: 'Audio Sonic',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_789421-MLA31652465766_082019-F.webp',
        qualification: [],
    },
    {
        name: 'Caja Bafle Potenciado Jbl Eon615 1000w Activo Bluetooth',
        description: 'JBL Eon600 Eon615 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',
        price: 109999,
        stock: 6,
        brand: 'JBL',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_957668-MLA41255110787_032020-F.webp',
        qualification: [],
    },
    {
        name: 'Piano Vertical Yamaha Jx113cppm Jx113cp Pm Banqueta',
        description: 'La combinación de calidad y apariencia parece ideal para el entorno doméstico, el JX113 se ve muy bien con su panel de caoba. Además de su diseño exterior, la rica calidad tonal también hace que sea un gran instrumento para los estudiantes que toman estudios de piano intermedios. Estabilidad en la afinación, el acabado y la integridad musical en general se han mejorado más de lo que se espera de un piano convencional.',
        price: 950000,
        stock: 3,
        brand: 'Yamaha',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_820011-MLA20464952446_102015-O.webp',
        qualification: [],
    },
    {
        name: 'Piano Pearl River Acustico Vertical Up115ep Ebano Brillante',
        description: 'El piano institucional UP115E de 45 ”está diseñado pensando en profesores y estudiantes. Este modelo ofrece tapa con cerradura y cubiertas para llaves para mayor seguridad, un diseño de rueda giratoria doble que proporciona una excelente maniobrabilidad, un soporte para partituras de LONGITUD COMPLETA y una tabla de caída estilo "Boston".',
        price: 574215,
        stock: 3,
        brand: 'Pearl River',
        categories: ['Cuerda'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_833007-MLA43448230245_092020-F.webp',
        qualification: [],
    },
    {
        name: 'Consola Mixer Behringer Air Xr12 Digital 4 Pre Midas',
        description: 'El Behringer X AIR XR12 es un mezclador de 12 canales para iPad y tabletas Android. Tiene 4 preamplificadores MIDAS programables, 8 entradas de línea, un módulo WiFi integrado y un interfaz de audio multicanal USB. El XR12 es ideal para aplicaciones de directo y estudio. La libertad de movimiento y ajuste de parámetros con la aplicación gratuita para iOS, Android y PC permite conseguir el sorindo perfecto en cualquier lugar.',
        price: 135210,
        stock: 5,
        brand: 'Behringer',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_731090-MLA44581640474_012021-F.webp',
        qualification: [],
    },
    {
        name: 'Consola Mixer Phonic Am120fx Usb 4 Mic/line + 4 Stereo Dfx',
        description: 'Los mezcladores compactos AM1204FX USB cuentan con cuatro conexionesmic / línea mono junto con dos entradas de línea estéreo con posibilidades de entradas flexibles. Cada canal cuenta con un ecualizador de 3 bandas,mientras que los canales mono también ofrecen  filtros de 75Hz de corte bajo para eliminar vibraciones y otros sonidos de baja frecuencia no deseados. La AM 1204FX USB cuenta con un procesador DFX de 32 bits con16 efectos predefinidos cada uno con su propio parámetro ajustable por el usuario. ',
        price: 37526,
        stock: 5,
        brand: 'Phonic',
        categories: ['Electronica/audio'],
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_828139-MLA44726454691_012021-F.webp',
        qualification: [],
    },
    {
        name: 'Controlador Dj + Interface Moon Midi 1311',///////////yo
        description: 'Controlador de 4 canales MIDI con interfase incorporada - 8 canales para efectos - Crossfader, ecualizador de 3 bandas, control de navegación - Conexión para auriculares, mic y PA - Interfase de audio incorporada - Driver ASIO - Incluye software DJ LE para MacOSX 10.6/Win7 32bit/64bit, WinXP, Win8.',
        price: 46260,
        stock: 6,
        brand: 'Moon',
        categories: ['Electronica/audio'],
        image: 'D_NQ_NP_892644-MLA45285111635_032021-O.webp',
        qualification: [],
    },
    {
        name: 'Microfono Usb Fifine T669 Srteaming Podcast + Soporte',
        description: 'Micrófono de grabación USB plug and play para computadora PC. Diseño sólido y robusto de construcción metálica con soporte de trípode estable es conveniente cuando está haciendo voces en off o transmisiones en vivo en YouTube. Micrófono de condensador de diseño alimentado por USB para grabar, no necesita la fuente de alimentación Phantom de 48v, funciona bien con Cortana, Discord, chat de voz y reconocimiento de voz. El micrófono de condensador de patrón polar cardioide para computadora captura su voz correctamente, produce un sonido claro y nítido sin ruido estático.',
        price: 13545,
        stock: 7,
        brand: 'Fifine',
        categories: ['Electronica/audio'],
        image: 'D_NQ_NP_2X_768140-MLA44230258225_122020-F.webp',
        qualification: [],
    },
    {
        name: 'Monitor De Estudio Activo Apogee Studio 4 15w X Par',
        description: 'Monitor de Estudio Activo Apogee Studio 4 - 2 x 15 Watts RMS - Par. Potencia RMS: 2 X 15W. Potencia Programa: 2 X 30W. Potencia Máxima: 2 X 60W. Parlante: 4" (10CM). Tweeter: 1" (2.5CM). Sensibilidad: 80 dB. Respuesta de Frecuencia: 71Hz-20kHz. Fuente de Alimentación: 12V 2A.',
        price: 13420,
        stock: 8,
        brand: 'Apogee',
        categories: ['Electronica/audio'],
        image: 'D_NQ_NP_2X_957109-MLA45583723731_042021-F.webp',
        qualification: [],
    },
    {
        name: 'Monitor De Estudio Krk Systems V4s4 Activo X Unidad',
        description: 'La nueva V-Series combina lo mejor de la tecnología moderna, mientras que vuelve a lo que hizo KRK un estándar de la industria en los estudios profesionales durante los últimos 30 años. KRK V4 es un monitor de referencia de estudio de dos vías y gama completa con desempeño profesional y precisión para grabación, mezcla y masterización. Cuenta con un tweeter Kevlar diseñado de 1" y KRK de 4" de peso ligero diseñado woofer de Kevlar.',
        price: 75468,
        stock: 8,
        brand: 'KRK',
        categories: ['Electronica/audio'],
        image: 'D_NQ_NP_2X_882153-MLA41230531734_032020-F.webp',
        qualification: [],
    },
    {
        name: 'Interface De Audio Externa Maono Au-am200 Para Streaming',
        description: 'Interfaces de audio integradas para producciones de estudio, podcast, transmisiones en vivo, grabaciones, etc. 4 canales de mezcla de audio con conexiones para micrófonos, smartphones, PC, etc. Salidas multi-canal para Streaming. Entradas de mic. de 3,5mm. Compatible con Windows y MacOS. Estudio de producción de podcasts portátil todo en uno..',
        price: 15665,
        stock: 7,
        brand: 'Maono',
        categories: ['Electronica/audio'],
        image: 'D_NQ_NP_2X_761520-MLA44654215981_012021-F.webp',
        qualification: [],
    },
    {
        name: 'Bandeja Giradiscos Audio Technica At-lp120xusb Directa',
        description: 'Cuenta con un motor de accionamiento directo servocontrolado de CC, junto con un control antipatinaje dinámico ajustable y un preamplificador fonográfico seleccionable. El tocadiscos, totalmente manual, reproduce discos de 33-1/3, 45 y 78 rpm y está equipado con una salida USB que permite la conexión directa a su computadora.',
        price: 65530,
        stock: 7,
        brand: 'Audio-Technica',
        categories: ['Electronica/audio'],
        image: 'D_NQ_NP_2X_765934-MLA42806459413_072020-F.webp',
        qualification: [],
    },
    {
        name: 'Cajon Flamenco Golpe Cajonero Rock',
        description: 'Modelo Cajonero Rock: es el modelo 2018, Altura 45 cm, en fibro, con paredes de 15 mm, cuerdas afinables desde el exterior, chapa en guatambu de primera seleccion, patas de goma, asiento goma eva, barniz al agua transparente.',
        price: 4999,
        stock: 7,
        brand: 'Golpe',
        categories: ['Percusion'],
        image: 'D_NQ_NP_2X_953441-MLA31042111917_062019-F.webp',
        qualification: [],
    },
    {
        name: 'Cajon Peruano Flamenco Tierrapiano Tronador Generico',
        description: 'Tronador Genérico es recomendado para quien busca iniciarse en el mundo de la percusión acompañado por un instrumento cuyo sonido motive y facilite el aprendizaje. Tapa acústica de Cedro-Guaica. Sistema de bordonas regulables. Sistema de calibracion que permite ajustar el sonido agudo de las 9 bordonas. La tapa percutiva no posee tornillos y tiene un fino tratamiento con lacas y ceras que conservan la textura de la madera.',
        price: 15170,
        stock: 7,
        brand: 'Terrapiano',
        categories: ['Percusion'],
        image: 'D_NQ_NP_2X_616282-MLA41230455752_032020-F.webp',
        qualification: [],
    },
    {
        name: 'Bongo Meinl Hb-100 6 3/4 -8 Headliner Series Parches Bufalo',
        description: 'Bongos de la serie Headliner, son bongos de gama media construidos totalmente de madera y equipado con parches y herrajes de calidad. Medidas 6 3/4" y 8". Material: Rubber Wood. Parches de búfalo seleccionados a mano. Ganchos tensores 8 mm. Rims SSR 2 mm redondeados. Herrajes negros. Incluye llave de afinación.',
        price: 28117,
        stock: 5,
        brand: 'Meinl',
        categories: ['Percusion'],
        image: 'D_NQ_NP_2X_643710-MLA44182849231_112020-F.webp',
        qualification: [],
    },
    {
        name: 'Bongo Profesional Ftb101 Parche De Piel - Alta Calidad',
        description: 'Bongo Profesional. Medidas: 7 1/4" + 8 5/8". Construido en Madera. Tensores de Afinacion. Parche de piel de Cabra. Bongo de Alta Calidad, Replica del Matador/LP. Excelente Sonido.',
        price: 17412,
        stock: 4,
        brand: 'Lazer',
        categories: ['Percusion'],
        image: 'D_NQ_NP_2X_999555-MLA41010414294_032020-F.webp',
        qualification: [],
    },
    {
        name: 'Armónica Diatónica Lee Oskar Nota C Do Mayor Profesional',
        description: 'La armónica preferida para Blues, Rock, Country y Jazz. Sistema Richter. 10 celdas. Placa de lenguetas de latón atornillada thomann en 5 puntos. Cubiertas de acero inoxidable. Incluye estuche de plástico.',
        price: 7100,
        stock: 5,
        brand: 'Lee Oskar',
        categories: ['Viento'],
        image: 'D_NQ_NP_2X_885546-MLA31035897943_062019-F.webp',
        qualification: [],
    },
    {
        name: 'Armónica Hohner Blues Harp Diatónica',
        description: 'Hohner Blues Harp, una excelente armónica blusera hecha en Alemania con cuerpo de madera, lo que ofrece un tono natural, cañas de gran alcance para que la nota sea flexible y profunda. Legendaria armónica diatónica con cuerpo de madera. Recomendada tanto para los armoniquistas mas avanzados como así también para los que se inician.',
        price: 7835,
        stock: 5,
        brand: 'Hohner',
        categories: ['Viento'],
        image: 'D_NQ_NP_2X_791369-MLA31022482398_062019-F.webp',
        qualification: [],
    },
    {
        name: 'Trompeta En Bb Dorada Lincoln Wind + Estuche Cuero Jytr1401',
        description: 'Afinada en Bb. Cuerpo yellow brass. 3 pistones de acero inoxidable. Diámetro de campana de 125 mm. ESTUCHE: rígido forrado en cuero en su exterior y revestido de pana, acolchado en su interior',
        price: 33800,
        stock: 4,
        brand: 'Lincoln Wind',
        categories: ['Viento'],
        image: 'D_NQ_NP_2X_625680-MLA45228898112_032021-F.webp',
        qualification: [],
    },
    {
        name: 'Violoncello Stradella Mc6011 4/4 De Estudio Con Arco Y Funda',
        description: 'Violoncello 4/4. De Estudio. Tapa de pino. Color: Natural. Afinadores: 4 metálicos. Incluye funda y arco',
        price: 45105,
        stock: 5,
        brand: 'Stradella',
        categories: ['Cuerda'],
        image: 'D_NQ_NP_929949-MLA43914507651_102020-O.webp',
        qualification: [],
    },
    {
        name: 'Cello Violoncello Segovia 4/4 Madera Mate Tilo Funda',
        description: 'Terminación: madera oscura en mate. Tapa: madera contrachapada de tilo. Parte posterior y lateral: madera contrachapada de tilo. Diapasón y clavija: Ébano. Cordal: Ébano',
        price: 55476,
        stock: 3,
        brand: 'Segovia',
        categories: ['Cuerda'],
        image: 'D_NQ_NP_706388-MLA45653241451_042021-O.webp',
        qualification: [],
    },
    {
        name: 'Piano Electrico Casio Ap650mbk Celviano',
        description: 'La rica gama de colores y sonido sofisticado del modelo superior de la serie CELVIANO es sinónimo de una experiencia de sonido que está muy por encima del nivel de los pianos digitales comunes. Ofrece 250 tonos y 180 ritmos sinfín de oportunidades para expresarse musicalmente. Nueva generación de sonido AIR Dimensional. 256 notas de polifonía. Función de grabación de audio.',
        price: 209990,
        stock: 3,
        brand: 'Casio',
        categories: ['Instrumentos eléctricos'],
        image: 'D_NQ_NP_2X_618011-MLA41914542629_052020-F.webp',
        qualification: [],
    },
    {
        name: 'Guitarra Acustica Cort Ad810 Folk',
        description: 'La serie acústica más antigua de Cort, la Serie Estándar, define un excelente rendimiento y una buena relación calidad-precio. Las guitarras de la Serie Estándar son asequibles, pero ofrecen un buen rendimiento sólido para principiantes y aficionados por igual en una variedad de modelos con diferentes tipos de características para cualquier situación de ejecución.',
        price: 33588,
        stock: 6,
        brand: 'Cort',
        categories: ['Cuerda'],
        image: 'D_NQ_NP_2X_624236-MLA45535110053_042021-F.webp',
        qualification: [],
    },
    {
        name: 'Bateria Electronica Roland Spd-30 Octapad Usb Midi Loop',
        description: 'Octapad original de Roland que cambió profundamente el paisaje de la percusión electrónica. El tamaño de un maletín, el Octapad ofrece a los bateristas y percusionistas el equivalente de una plataforma electrónica en toda una unidad autónoma. Un nuevo nivel de conveniencia y de expresión. El SPD-30 combina los sonidos más importantes del mundo con la última tecnología de disparo en un paquete de carreteras difíciles que está listo para la mayoría de los artistas más exigentes.',
        price: 214500,
        stock: 4,
        brand: 'Roland',
        categories: ['Instrumentos eléctricos'],
        image: 'D_NQ_NP_812135-MLA40832847740_022020-O.webp',
        qualification: [],
    },
]

module.exports = products;