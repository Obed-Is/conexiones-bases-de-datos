import sqlSv from 'mssql';

const configSqlServer = {
    user: process.env.DB_USER_SERVER,
    password: process.env.DB_PASSW_SERVER,
    database: process.env.DB_NAMEDB_SERVER,
    server: process.env.DB_NAMESERVER_SERVER,
    options: {
        trustServerCertificate: true // cambiar a true cuando sea base de datos local en desarrollo
    }
}

export const getSqlServer = async () => {
    try {
        const sqlServer = await sqlSv.connect(configSqlServer);
        console.log('Conexion a SQL Server exitosa 😎');
    } catch (error) {
        console.log('Ocurrio un error al intentar conectarse a SQL Server 💀')
        console.error(error);
    }
}