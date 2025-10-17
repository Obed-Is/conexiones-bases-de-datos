import mySql from 'mysql2/promise';

const configMySql = {
    host: process.env.DB_HOST_MS,
    port: process.env.DB_PORT_MS,
    database: process.env.DB_NAMEDB_MS,
    user: process.env.DB_USER_MS,
    password: process.env.DB_PASSW_MS,
    connectionLimit :10
}

export const getMySql = async () => {
    try {
        const connection = await mySql.createConnection(configMySql);

        connection.on('error',(err) => {
            console.error(err);
        })

        console.log('Conexion a mySql exitosa 😎');
    } catch (error) {
        console.log('Ocurrio un error al intentar conectarse a mySql Server 💀')
        console.error(error);
    }
}