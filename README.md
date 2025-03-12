# <span style="color:red;">Readme de la página del Teatre Principal </span>
## <span style="color:red;">1. La estructura seguida en nuestro directorio es la siguiente:</span>

- **/ Treball-Marques** Directorio de nuestra página web
    - **/archivos_css.**  
        - **articles.css** Continene los estilos usados unicamene en articles.html.  
        - **detall.css** Continene los estilos usados unicamene en detall.html.
        - **index.css**  Continene los estilos usados unicamene en index.html.
        - **info.css**  Continene los estilos usados unicamene en info.html.
        - **tabla.css**  Conté l'estil emprat dins la nostra taula
        - **formular_contacte.css** Conté l'estil emprat dins el formulari de contacte
        - **formulari_contacte.css** Conté l'estil emprat dins el formulari d'entrades'
    - **/media.** Todas las imagnes que se usan en la pagina web estan alojadas en esta carpeta.
    - **detall.html** En esta sección se encuentra la descripción detallada de uno de los eventos que se llevarán a cabo en los proximos dias.
    - **info.html** Aqui se puede encontrar la información detallada del Teatro.
    - **index.html** La pagina principal de nuestra web. En ella estan una seleccion de tres eventos proximos
    - **articles.html** Aqui se ha hecho una descripcion completa del programa para el año 2025 de nuesto teatro.
    - **estilos.css** (Contiene la hoja de CSS).


## <span style="color:red;">2. Anotaciones relevantes:</span>

- En la sección **articles.html** se incluye unicamente un breve sumario de las tres actuaciones de mas cercanas en el tiempo. En el caso de haber tenido tiempo a añadir paginas detalladas para mas de las actuaciones cada una de estas tres obras tendrian hipervinculos que te llevarian a las secciones correspondientes

- En la seccion de **articles.html** se ha optado por incluir únicamente imagenes para los tres eventos más proximos en el tiempo. Debido a falta de tiempo y para no llenar la carpeta de **/media.** de imagenes de caracter bastante irrelevante hemos optado por dejar en su lugar imagenes de "placeholder" que tinen la finalidad de enseñar el que seria el diseño final completo de nuestra página.

- Al tener un archivo de **estilos.css** que a medida que se trabajaba sobre la pagina iba aumetando en temaño, se optó por la creacion de diferentes archivos cada uno de ellos con una función concreta para poder así acceder a eelos y comprender su contenido con mayor claridad. En la carpeta **/archivos_css** se encuentran los ficheros de estilo especifico para las paginas de nuestra web y ademas un archivo con la finalidad de unicamente llevar a cabo el diseño de la tabla que añadimos. En el archivo **estilos.css** se ha dejado el codigo que hace referencia a toda la pagina, el diseño del **body**, el diseño de la barra de navegacion, etc.
  
- El **settings.json** ha sido creado auttonmáticamente por visual studio code.
  
- Al adaptar la web para hacerla responsive el formato del mapa de la sección **info.html**, este aparece más pequeño y no hemos conseguido que salga en un tamaño mayor para la resolución de ordenador.

## <span style="color:red;">3. Division del trabajo:</span>

- A diferencia de lo que pone en el historial del repositorio de GitHUB, en el que se puede ver que la mayoria del trabajo durante los primeros dias fue subido por Tomeu, esto no es así, ya que durante esos dias estuvimos los dos miembros del grupo haciendo trabajo común en un mismo ordenador.

- Por tanto, la division final del trabajo ha sido la siguiente:

- **Trabajo común:** tanto todo el trabajo de tener la idea y plasmar todo el contenido que se pretendia añadir a nuestro proyecto fue realizado por los dos miembros del grupo. Ademas de esto la creacion de el cuerpo de todas las paginas y los esquemas bases de los bloques usados en cada una de ellas.

- **Trabajo realizado por Jesús Muñoz:** El diseño de los tres bloques que se pueden encontrar en la pagina **index.html** y todo el estilo de css que ello conlleva así como la práctica totalidad de la pagina de **info.html** y el **footer**fueron realizados por Jesus Muñoz

- **Trabajo realizado por Tomeu Garcias:** Todo el diseño de la pagina **articles.html** y el de **detall.html** y el estilo de css que ello conlleva ademas de el menú de navegacion y este archivo **readme.md** fueron realizados por Tomeu Gacias.

- **Ademas de esto:** en la practica totalidad de los casos, el diseño de cada uno de los bloques de diseño css fueron realizados al mismo timpo que se iban construyendo sus análogos en html. De esta forma, nos aseguramos de que cada uno de los miembros del grupo nos puediesemos dividir el trabajo de forma equitativa. Dicho esto, se tiene que recalcar que esto no fue así para la adaptacion de la pagina para dispositivos de diferente resolucion, que fueren llevados a cabo por Jesus Muñoz.

## <span style="color:red;">4. Formato responsive:</span>

- Hemos optado por realizar un responsive que abarque un rango de resoluciones más elevado que el de un solo disposiivo, con el objetivo de que esta sea accesible en una mayor cantidad de dispositivos.

# <span style="color:red;">Readme de la segona entrega del treball </span>
## <span style="color:red;">1. Modificacions al treball previament entregat</span>

- Primer de tot, s'ha afegit dins totes les pagines d'html les anotacions pertinents per tal de poder millorar considerablement la seca comprensió, i facilitar-ne la correcció i futrs treballs.

- També s'ha afegit una nova carpeta al directori, anomenada media markdown, on es guardaran les capures de pantalla que es veuran a aquest document.

- Finalment, al punt 5 d'aquesta secció es podràn trobar tres captures de pantalla de la pàgina principal de la nostra web baix tres resolucions de pantalla arbitràries

## <span style="color:red;">2. Formularis</span>

- S'han afegit dos formularis dins la pàgina web, un primer dins la secció de sobre nosaltres, amb el que l'usuari es pot posar en contacte amb el teatre. I un segon dins la seccio del programa que permet rebre infomació sobre la disponibilitat de les entrades.

## <span style="color:red;">3. Expressions regulars dins els formularis</span>

- Dins els camps per introduir el correu s'ha afegit la seguent expressió regular: pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$". Aquesta regla asegura que el correu inserit seguesqui un format vàlid, es a dir, una primera succesió de lletres, nombre i simbols vàlids; seguits de una @; seguit de una altre succesió; un punt i finalment un domini vàlid.

## <span style="color:red;">4. Captures de pantalla formularis</span>

- A continuació adjunt captures de pantalla dels formularis fets:

1. [Captura del formualari d'informació de les entrades ](/media_markdown/formulari_entrades.png)

2. [Captura del formualari de contacte ](/media_markdown/formulari_entrades.png)

## <span style="color:red;">5. Captures responsive</span>

- A continuació, es poden trobar tres captures de pantalla de la nostra pagina principal vista des de tres resolucions diferents:

1. [Primera resoluciò ](media_markdown/resolucio_1.png)

2. [Segona resoluciò ](/media_markdown/resolucio_2.png)

3. [Tercera resoluciò ](media_markdown/resolucio_3.png)

## <span style="color:red;">6. Repartició del treball</span>

- Ho he fet sol :)

# <span style="color:red;">Readme de la segona entrega del treball </span>

## <span style="color:red;">1. Implementació d'estructura d'objectes</span>

-S'ha optat per afegir tres funcions a la consola de la pàgina web. La primera de totes pren la informació completa del programa anual del nostre teatre, organitzant-la dins un array d'objectes. La segona, filtra les actuacions per tal de només mostrar les que es duguin a terme a partir del mes de juny. I fimalment, la tarcera de totes es la encarregada de ordernar les acutacions per ordre invers de mesos, es a dir, de desembre fins a gener.

## <span style="color:red;">2. Mostrar/ocultar elements de la web</span>

-A la pàgina del programa s'ha afegit un botó que ens permet tant ocultar com ensenyar el formulari d'informació sobre l'adquisició d'entrades.

## <span style="color:red;">3. Mode clar i obscur</span>

-Al footer de cada una de les pagines de la nostra web, s'ha implementat un botó que dona l'opció d'alternar entre el tema classic vermellos de la nosta web i un de mes obscur.

## <span style="color:red;">4. Comentaris</span>

-A la zona inferior de la nostra web, s'ha afegit un formulari de comentaris, que permet a l'usuari afegir comentaris així com ensenyar i ocultar tots esl comentaris previament fets.

## <span style="color:red;">5. Element dinàmic</span>

-S'ha afegit mitjançant javascript el diseny dinàmic al boto de tema fosc/clar que el permet canviar lleugerament de color al passar el ratolí per sobre

## <span style="color:red;">6. Banner d'imatges</span>

-El petit resum de obres destacades que ocupava la pàgina principal de la nostra web ha estat substituit per un banner automàtic que retén la mateixa informació que ocupava previament el seu lloc.

## <span style="color:red;">7. Ampliació d'imatges</span>

-S'ha afegit l'opcio de poder fer gan les miniatures de cada una de les imatges de la secció del programa del nostre teatre. Cal recalcar que tot i que el programa funciona per a cada un dels articles de la secció nomes es apreciable als tres primers, que son els unics amb imatges concretes,

## <span style="color:red;">8. Validacio de formularis</span>

-A aquesta secció simplement s'ha substituit la validacio del formulari d'informacio, per un script identic amb javascript

## <span style="color:red;">9. Repartiment de feina</span>

-UN pic més, la totalita de la pràctica l'he feta jo :)