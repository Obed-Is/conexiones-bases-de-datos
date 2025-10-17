
# Conexion a bases de datos
Conexiones a base de datos mas comunes. Incluye mySql, SQLServer y Mongo DB.
## Instalacion

Clonar el repositorio
```bash
  git clone https://github.com/Obed-Is/conexiones-bases-de-datos.git
```

Navegar a la carpeta que se creo
```bash
  cd conexiones-bases-de-datos
```
En la terminal del proyecto ejecutar 
```bash
  npm install
```
## Configuracion

En las variables de entorno ingresar los datos correspondientes a la base de datos

```sh
# Configuracion SqlServer
DB_USER_SERVER=TU_USUARIO_SQLSERVER
DB_PASSW_SERVER=TU_CONTRASENA_SQLSERVER
DB_NAMEDB_SERVER=TU_BASE_DE_DATOS_SQLSERVER
DB_NAMESERVER_SERVER=TU_HOST_SQLSERVER
```

En el archivo index.js descomentar las bases de datos q no se probaran

```javascript
// CONEXIONES
// await getMongo();
await getSqlServer();
// await getMySql();
```

## Ejecucion

En la terminal del proyecto ejecutar

```bash
  npm run dev
```
Esto ejecutara el archivo index.js inicializando la conexion a la base de datos establecida

Si la conexion es exitosa podra ver su respectivo mensaje en la terminal


```bash
  Conexion a SQL Server exitosa 😎
```