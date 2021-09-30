# geolocation-api-django-example

## Instalación
Igual que en las auxiliares:
- Clonar repositorio
- Crear ambiente virtual
- `pip install -r requirements.txt`
- `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py runserver`

## Uso
En http://127.0.0.1:8000/ hay un botón para solicitar la ubicación y uno para enviar las coordenadas al servidor.
Debajo hay una lista de las ubicaciones guardadas, solo para ilustrar y confirmar la recepción.

## Breve explicación
Es básicamente lo mismo que hemos hecho en las auxiliares. Lo único que cambia es que metemos Javascript. Para eso creamos el archivo `static/js/scripts.js` y lo enlazamos al HTML poniendo esto en el `index.html`:
```
<script src="static/js/scripts.js"></script>
```
Nótese que tiene que ir al final del `<body>` para que los elementos del DOM ya hayan cargado cuando se cargue el script.

El script en sí no es complicado de entender. Lo importante es que entiendan:
- Cómo se conectan los botones del HTML con el JS (`onclick="..."`).
- Cómo el JS puede leer y manipular el DOM del HTML en `showPosition()`.
- Cómo se usó un `<form>` "fantasma" para poder simular un submit y hacer una request POST al servidor con la data.
- Cómo el servidor recibe este POST y guarda las coordenadas como `NumberField` en `views.py`

Entendiendo eso van a poder modificarlo para aplicarlo a su proyecto según lo que necesiten.

¡Éxito! c:
