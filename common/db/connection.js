import mysql from "mysql2/promise"

export async function getQueryData({query, values}){
    const dbConnection  = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12649050",
        database: "sql12649050",
        port: 3306,
        password: "6lLxwWpfxv",
    });

    try{
        const [data] = await dbConnection.execute(query,values);
        dbConnection.close();
        return data;
        
    } catch(err) {
        throw Error(err);

    }
}