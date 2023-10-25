Servicio api creado en nodejs 
con el framework express
```
pasos para ejecutar el proyecto
```
npm install
npm run dev
```
ruta para obtener los datos
```
con este metodo obtenemos todo los datos de la base de datos
http://localhost:3000/api/v1/titleAll

para obtener un dato en especifico
http://localhost:3000/api/v1/titleAll/1

para crear un nuevo dato
http://localhost:3000/api/v1/create
body
{
    "title": "Pervis Estupiñán volvió a los entrenamientos del Brighton",
    "link": "https://www.ecuavisa.com/deportes/futbol-internacional/pervis-estupinan-lesion-entrenamientos-brighton-KY6212905",
    "guid": {
        "isPermaLink": "false",
        "__text": "3b456dc5-989d-4947-9459-f868211bffc3"
    },
    "pubDate": "Wed, 25 Oct 2023 18:59:35 GMT",
    "description": {
        "readingtime": "45",
        "__text": "<img src=\"https://www.ecuavisa.com/binrepository/f9tk3hbxwaazelw_1207556_20231025135504.jpg\"><p>El lateral<a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/seleccion-ecuador-pervis-estupinan-lesion-bolivia-colombia-LN6096085\"> <b>Pervis Estupiñán</b></a> había sido <b>baja con la Selección de Ecuador</b> para la última fecha FIFA, y para los <b>últimos encuentros del Brighton</b>, pero ya <b>retornó a los entrenamientos.</b></p><p>Estupiñán había<a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/pervis-estupinan-brighton-lesion-LD6104278\"> sufrido una <b>pequeña rotura isquiotibial</b></a>, el 4 de octubre, jugando con el <a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/pervis-estupinan-autogol-brighton-derrota-aston-villa-XA6064716\">Brighton ante el Aston Villa</a> por la Premier League, por ello <b>no fue convocado</b> por Félix Sánchez Bas.</p><p>Sin embargo, el Brighton quiso dar a conocer las buenas noticias en la red social X, tras publicar una foto de <b>Pervis Estupiñán tocando balón en los entrenamientos. </b></p><p><b>Lea más:</b> <a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/jordy-caicedo-gol-atlas-leon-liga-mx-HB6210009\">El ecuatoriano Jordy Caicedo anotó en el empate entre el Atlas contra el León por la Liga MX </a></p><p>El futbolista de 25 años <b>no parece que retornará este jueves, 26 de octubre</b>, para enfrentar al Ajax por la Europa League, pero estaría listo para <b>sumar minutos para jugar contra el Fulham</b>, el 29 de octubre.</p><p>El Brighton tuvo que jugar <b>tres partidos sin el ecuatoriano en cancha</b>, no ganó ninguno de ellos, perdiendo uno y empatando dos. </p><p>La noticia de que Pervis vuelva tocar balón es positiva para Félix Sánchez Bas, porque lo <b>podría considerar para la fecha FIFA</b> <a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/cuando-juega-ecuador-venezuela-quinta-fecha-eliminatorias-CX6167488\">contra <b>Venezuela</b></a>, el 16 de noviembre, y ante <b>Chile</b>, el 21 de noviembre, por las eliminatorias al Mundial 2026.</p>"
    }
}

para actualizar un datos
http://localhost:3000/api/v1/update/:id

{
    "title": "Pervis Estupiñán volvió a los entrenamientos del Brighton",
    "link": "https://www.ecuavisa.com/deportes/futbol-internacional/pervis-estupinan-lesion-entrenamientos-brighton-KY6212905",
    "guid": {
        "isPermaLink": "false",
        "__text": "3b456dc5-989d-4947-9459-f868211bffc3"
    },
    "pubDate": "Wed, 25 Oct 2023 18:59:35 GMT",
    "description": {
        "readingtime": "45",
        "__text": "<img src=\"https://www.ecuavisa.com/binrepository/f9tk3hbxwaazelw_1207556_20231025135504.jpg\"><p>El lateral<a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/seleccion-ecuador-pervis-estupinan-lesion-bolivia-colombia-LN6096085\"> <b>Pervis Estupiñán</b></a> había sido <b>baja con la Selección de Ecuador</b> para la última fecha FIFA, y para los <b>últimos encuentros del Brighton</b>, pero ya <b>retornó a los entrenamientos.</b></p><p>Estupiñán había<a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/pervis-estupinan-brighton-lesion-LD6104278\"> sufrido una <b>pequeña rotura isquiotibial</b></a>, el 4 de octubre, jugando con el <a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/pervis-estupinan-autogol-brighton-derrota-aston-villa-XA6064716\">Brighton ante el Aston Villa</a> por la Premier League, por ello <b>no fue convocado</b> por Félix Sánchez Bas.</p><p>Sin embargo, el Brighton quiso dar a conocer las buenas noticias en la red social X, tras publicar una foto de <b>Pervis Estupiñán tocando balón en los entrenamientos. </b></p><p><b>Lea más:</b> <a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/jordy-caicedo-gol-atlas-leon-liga-mx-HB6210009\">El ecuatoriano Jordy Caicedo anotó en el empate entre el Atlas contra el León por la Liga MX </a></p><p>El futbolista de 25 años <b>no parece que retornará este jueves, 26 de octubre</b>, para enfrentar al Ajax por la Europa League, pero estaría listo para <b>sumar minutos para jugar contra el Fulham</b>, el 29 de octubre.</p><p>El Brighton tuvo que jugar <b>tres partidos sin el ecuatoriano en cancha</b>, no ganó ninguno de ellos, perdiendo uno y empatando dos. </p><p>La noticia de que Pervis vuelva tocar balón es positiva para Félix Sánchez Bas, porque lo <b>podría considerar para la fecha FIFA</b> <a href=\"https://www.ecuavisa.com/deportes/futbol-internacional/cuando-juega-ecuador-venezuela-quinta-fecha-eliminatorias-CX6167488\">contra <b>Venezuela</b></a>, el 16 de noviembre, y ante <b>Chile</b>, el 21 de noviembre, por las eliminatorias al Mundial 2026.</p>"
    }
}

para eliminar un dato
http://localhost:3000/api/v1/delete/:id

```
