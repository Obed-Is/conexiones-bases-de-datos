# Conexiones a Bases de Datos

Proyecto que demuestra cómo establecer conexiones a las bases de datos más comunes: MySQL, SQL Server y MongoDB.

## Características

- Conexión a MySQL
- Conexión a SQL Server  
- Conexión a MongoDB
- Servidor Express con recarga automática
- Variables de entorno configurables

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (gestor de paquetes de Node.js)
- Acceso a las bases de datos que desees probar

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Obed-Is/conexiones-bases-de-datos.git
```

2. Navegar al directorio del proyecto:
```bash
cd conexiones-bases-de-datos
```

3. Instalar las dependencias:
```bash
npm install
```

## Configuración

1. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```sh
# Configuración SQL Server
DB_USER_SERVER=TU_USUARIO_SQLSERVER
DB_PASSW_SERVER=TU_CONTRASENA_SQLSERVER
DB_NAMEDB_SERVER=TU_BASE_DE_DATOS_SQLSERVER
DB_NAMESERVER_SERVER=TU_HOST_SQLSERVER

# Configuración MySQL
DB_USER_MYSQL=TU_USUARIO_MYSQL
DB_PASSW_MYSQL=TU_CONTRASENA_MYSQL
DB_NAMEDB_MYSQL=TU_BASE_DE_DATOS_MYSQL
DB_NAMEHOST_MYSQL=TU_HOST_MYSQL

# Configuración MongoDB
DB_USER_MONGO=TU_USUARIO_MONGO
DB_PASSW_MONGO=TU_CONTRASENA_MONGO
DB_NAMEDB_MONGO=TU_BASE_DE_DATOS_MONGO
DB_NAMEHOST_MONGO=TU_HOST_MONGO

# Configuración del servidor
SERVER_PORT=4000
```

2. Para probar conexiones específicas, comenta o descomenta las líneas correspondientes en `index.js`:

```javascript
// CONEXIONES
await getMongo();        // Descomentar para probar MongoDB
await getSqlServer();    // Descomentar para probar SQL Server
await getMySql();        // Descomentar para probar MySQL
```

## Ejecución

Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Esto iniciará:
- El servidor Express en el puerto configurado (por defecto: 4000)
- Las conexiones a las bases de datos especificadas

## Resultados Esperados

Si las conexiones son exitosas, verás mensajes como estos en la terminal:

```bash
Server en ejecicion
Conexión a MongoDB exitosa 
Conexión a SQL Server exitosa 
Conexión a MySQL exitosa 
```

## Estructura del Proyecto

```
conexiones-bases-de-datos/
├── src/
│   ├── connection_mongo.js      # Conexión a MongoDB
│   ├── connection_mySql.js      # Conexión a MySQL
│   └── connection_sqlServer.js  # Conexión a SQL Server
├── .env                         # Variables de entorno
├── index.js                     # Archivo principal
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

## Dependencias

- **express**: Framework web para Node.js
- **mongoose**: ODM para MongoDB
- **mssql**: Driver para SQL Server
- **mysql2**: Driver mejorado para MySQL
- **dotenv**: Gestión de variables de entorno

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias de mejora, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia ISC.