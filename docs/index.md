---
title: "Práctica 9 - Aplicación de procesamiento de notas de texto"
---

## Introduccion

En esta practica se implementará una alicación que permita procesar notas de texto a partir de la línea de comandos. Se debe poder añadir, elminar modificar, listar y leer las notas. Además estas las notas serán particulares para cada usuario por lo que se debe crear un directorio particular y almacenarlas en ficheros *JSON* de manera persistente. Se ha de usar *yargs* para gestionar las acciones de la aplicacion como comandos por la terminal.

## Almacenamiento

Para la creación de los directorios, se ha creado una funcion `createDir` que recibe el nombre del usuario. Si existe un directorio no hace nada, solo muestra un mensaje y si no hay crea el directorio y el fichero vacio para almacenar las notas.

```ts
export function createDir(u: string): void {
  if (existsSync('notas/'+u)) {
    console.log(chalk.green('Existe el directorio'));
    file = false;
  } else {
    mkdirSync('notas/'+u);
    openSync('notas/'+u+'/notas.txt', 'w');
    file = true;
  }
}
```

Para poder leer y escribir información como notas se ha creado un tipo de dato `notes`, que representa un aray de notas

```ts
type notes = {
    notas: {usuario:string, titulo:string, data:string, color:string}[]
};
```
## Añadir

En el caso de añadir una nota, cremos la función `add`  que recibe como parámetros los argumentos del comando de *yargs*. Primero leemos el fichero correspondiente al usuario y alamcenamos la información en una variable tipo `notes` y realizamos un *push* con los argumentos del comando en el caso de que el archivo no sea nuevo. Si es nuevo se asigna los valores uno por uno a la varible vacía. Por último reescribimos en el archivo lo que contenía anteriormente para poner todo lo que contiene la variable tipo `notes` usando `JSON.stringify`. También se comprueba si existe la nota ya ya que no pueden haber dos con el mismo nombre.

```ts
export function add(usuario: string, titulo: string, data:string, color:string):void {
  if (typeof usuario === 'string') {createDir(usuario);}
        readFile('notas/'+usuario+'/notas.txt', (_, d) => {
        if ((typeof titulo === 'string')&&(typeof data === 'string')&&(typeof usuario === 'string')&&(typeof color === 'string')) {
          let is_in:boolean;
          is_in = false;
          if (!file) {
            n = JSON.parse(d.toString());
            n.notas.forEach((element) => {if (element.titulo== titulo) {is_in = true}});
            if(is_in) {
              console.log(chalk.red('Nota existente'));
            }else {
              n.notas.push({usuario: usuario, titulo: titulo, data:data, color:color});
              console.log(chalk.green('Nueva nota añadida'));
          
            try {
              writeFileSync('notas/'+usuario+'/notas.txt', JSON.stringify(n));
              console.log(chalk.green('La información ha sido añadida correctamente'));
            } catch (err) {
              console.log(chalk.red('Se ha producido un error'));
            }
            }  
          }else {
            n = {notas: [{usuario:'', titulo:'', data:'', color:''}]};
            n.notas[0].usuario = usuario;
            n.notas[0].titulo = titulo;
            n.notas[0].data = data;
            n.notas[0].color = color;
            console.log(chalk.green('Nueva nota añadida'));
        
            try {
              writeFileSync('notas/'+usuario+'/notas.txt', JSON.stringify(n));
              console.log(chalk.green('La información ha sido añadida correctamente'));
            } catch (err) {
              console.log(chalk.red('Se ha producido un error'));
            }
          }
        }
      })
}
```

## Eliminar

Para eliminar se crea una función muy similar a la anterior pero que solo va a necesitar el ususario y el titulo de la nota. Funciona de la misma manera excepto que en vez de realizar un *push* de la nueva notas, realizamos un `splice` eliminado la necesaria y luego reescribimos el archivo. Además al principo de la funcion tras revisar el fichero se comprueba si es nuevo el archivo. Si el archivo es nuevo muestra u8n mensaje y termina ya que no podemos eliminar algo que no existe. Esto último se realiza en todas las funcionalidades restantes.

```js
export function del(usuario: string, titulo: string):void {
  if (file) {
    console.log(chalk.red('Se trata de un archivo nuevo'));
  } else {
  if (typeof usuario === 'string') {createDir(usuario);}
    readFile('notas/'+usuario+'/notas.txt', (_, d) => {
    if ((typeof titulo === 'string')&&(typeof usuario === 'string')) {
      let is_in:boolean;
      is_in = false;
      n = JSON.parse(d.toString());
      n.notas.forEach((element,i) => {if (element.titulo== titulo) {is_in = true, n.notas.splice(i,1); console.log(chalk.green('Borrada correctamente'))}});
      if (!is_in) {
        console.log(chalk.red('La nota no existe'))
      }
      try {
        writeFileSync('notas/'+usuario+'/notas.txt', JSON.stringify(n));
      } catch (err) {
        console.log(chalk.red('Se ha producido un error'));
      }
    }
  })
  }
}
```

## Modificar

En el caso de modificar funciona casi igual que añadir. La diferencia es que en el momento de ver si existe la nota, se ha añadido varias lineas en las que se le asigna al contenido y al color de la nota los valores del argumento del comando a la nota coincidente.

```ts
export function mod(usuario: string, titulo: string, data:string, color:string) {
  if (typeof usuario === 'string') {createDir(usuario);}
  if (file) {
    console.log(chalk.red('Se trata de un archivo nuevo'));
  } else {
    readFile('notas/'+usuario+'/notas.txt', (_, d) => {
    if ((typeof titulo === 'string')&&(typeof data === 'string')&&(typeof usuario === 'string')&&(typeof color === 'string')) {
      let is_in:boolean;
      is_in = false;
      n = JSON.parse(d.toString());
      n.notas.forEach((element) => {if (element.titulo == titulo) {
        is_in = true; 
        if ((typeof color === 'string')&&(typeof data === 'string')) {
          element.data = data;
          element.color = color;
          console.log(chalk.green('Modificado correctamente'));
        }}});
      if(!is_in) {
        console.log(chalk.red('Nota no existente'));
      }
      try {
        writeFileSync('notas/'+usuario+'/notas.txt', JSON.stringify(n));
        console.log(chalk.green('La información ha sido añadida correctamente'));
      } catch (err) {
        console.log(chalk.red('Se ha producido un error'));
      }
    }
  })
}
}
```

## Listar

Para listar, nuestra función solo necesita el nombre del usuario. Con este lee todas las notas de su archivo y imprime el título de cadadel color correspondiente.

```ts
export function list(usuario:string):void {
  if (typeof usuario === 'string') {createDir(usuario);}
  if (file) {
    console.log(chalk.red('Se trata de un archivo nuevo'));
  } else {
    readFile('notas/'+usuario+'/notas.txt', (_, data) => {
    if ((typeof usuario === 'string')) {
      n = JSON.parse(data.toString());
      n.notas.forEach((element) => printColor(element.color, element.titulo));
    }
  })
  }
}
```

Para imprimir con colores con *chalk* se ha creado una función `printColor` que recibe un color y texto, mostrando el texto de un color usando un `switch`. En nuestro caso están habilitados los colores rojo, azul, verde, amarillo y el gris por defecto.

```ts
export function printColor(c: string, data:string):void {
  switch(c) {
    case('rojo'):
      console.log(chalk.red(data));
      break;
    case('azul'):
      console.log(chalk.blue(data));
      break;
    case('verde'):
      console.log(chalk.green(data));
      break;
    case('amarillo'):
      console.log(chalk.yellow(data));
      break;
    default:
      console.log(chalk.gray(data));
      break;
  }
}
```

## Leer

Por último, a la hora de leer relizamos lo mismo que al listar sin embargo usamos el titulo de la nota para encontrarla entre las notas y mostramos con `printColor` el título seguido del contenido de la nota.

```ts
export function read(usuario:string, titulo:string):void {
  if (typeof usuario === 'string') {createDir(usuario);}
  if (file) {
    console.log(chalk.red('Se trata de un archivo nuevo'));
  } else {
    readFile('notas/'+usuario+'/notas.txt', (_, data) => {
    if ((typeof titulo === 'string')&&(typeof usuario === 'string')) {
      let is_in:boolean;
      is_in = false;
      n = JSON.parse(data.toString());
      n.notas.forEach((element) => {if (element.titulo== titulo) {is_in = true; printColor(element.color, element.titulo+': '+element.data);}});
      if(!is_in) {
        console.log(chalk.red('Nota no existente'));
      } 
    }
  })
  }
}
```