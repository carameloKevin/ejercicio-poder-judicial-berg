## Ejecutar la aplicacion
Para ejecutar la aplicacion en la Terminal (Linux) o CMD (Windows), dirigirse a la carpeta donde se descargo y ejecutar `./mvnw` (Linux) o `mvnw` (Windows).
Automaticamente se deberia abrir el navegador con la URL http://localhost:8080

## Ejercicio
Desarrollo de la aplicación
Se necesita desarrollar una aplicación para registrar y consultar Edificios y Dependencias del Poder
Judicial del Neuquén.
Cada Edificio está identificado por un ID y tiene los siguientes atributos:
- nombre, tipo String
- domicilio tipo String
A su vez las Dependencias están también identificadas por un ID y poseen los atributos:
- nombre, tipo String
- domicilio, tipo String
Un edificio puede tener una o más dependencias y una dependencia pertenece solo a 1 edificio.
Se deben agregar los campos necesarios para representar esta relación tanto en la base de datos, como así
también en el backend uitlizando JPA (ya viene integrado en spring-boot).
En el frontend, se deberán crear las funcionalidades para administrar los edificios y dependencias (ABM)
y para consultar los edificios de tal forma que al ingresar en un edificio se pueda visualizar fácilmente las
dependencias de cada edificio.
Para dar soporte a la aplicación se deberá crear el frontend y el backend, utilizando una base de datos en
memoria (para mayor simplicidad).
Deberán enviar un link al repositorio en donde reside el código fuente de la aplicación creada.
A su vez, se deberán indicar los pasos a seguir para ejecutar la aplicación (una vez descargada en una pc
local del Poder Judicial) y poder comprobar el correcto funcionamiento de la misma.
Se tendrá en cuenta para su evaluación, el tiempo que se tarda en el desarrollo de la misma y la calidad
del código fuente.
En cuanto a la tecnología a utilizar para desarrollar la aplicación, la misma deberá ser creada utilizando el
framework Hilla + React.

## Decisiones
- Hice una clase extra de domicilio para no repetir la informacion y tiene una relacion uno a uno con edificio. Un domicilio solo puede estar asociado a un edificio, asi que la BD no permite crear dos edificios en un mismo domicilio
- Las dependencias dependen de la id del edificio. Si no hay creado un edificio, no se pueden crear dependencias.
- Se deben eliminar los elementos en prioridad de Dependencia>Edificio>Domicilio, no se eliminan en cascada

## Funciones Faltantes
 - [ ] Mostrar mas informacion sobre que esta (o no) sucediendo. Principalmente cuando no se puede eliminar alguna entidad porque asociada a otra (mas que un console.log)  
 - [ ] No mostrar direcciones ya tomadas  
 - [ ] Busqueda por propiedades  
 - [ ] Verificacion de tipos de datos (principalmente numero en Domicilio)  