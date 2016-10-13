# express-pp
Primeros pasos con express

## Preparar entorno

### Instalar express-generator
En la línea de comando:
```sh
$ sudo npm install express-generator -g   
```

### Crear aplicación de express
En la línea de comando:
```sh
$ express express-pp
```

### Preparar aplicación
En la línea de comando:
``` sh
$ npm install
```

### Correr el servidor
En la línea de comando:
``` sh
$ npm start
```

Para conectarse a él ir al [localhost][localhost_3000].

## Generalidades
1. Las rutas están en: routes/
2. Las vistas (por defecto en Jade/Pug) están en: views/

## Crear un RESTFull web service con express
Ver routes/api.js

Si lo hago con [loopback][loopback]?

## Documentación del código fuente
JSDoc (lo básico). Docstrap para dejarlo mas atractivo.

``` sh
$ npm install jsdoc ink-docstrap --save-dev
```

## Seguridad del web service
### Passport
Passport parece ser lo mas utilizado
``` sh
$ npm install passport passport-local --save
```

### express-jwt???

## ORM
Squelize??


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [localhost_3000]: <http://localhost:3000>
   [loopback]: <https://loopback.io/>
