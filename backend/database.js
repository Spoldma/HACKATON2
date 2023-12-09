const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Kommikarp3", //add your password
    database: "hackaton",
    host: "localhost",
    port: "5432"
});

const execute = async(sql_query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(sql_query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "files" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        course VARCHAR(200) NOT NULL UNIQUE,
        file_name VARCHAR(200) NOT NULL UNIQUE,
        description VARCHAR(200) NOT NULL,
        date_added DATE NOT NULL
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "files" is created');
    }
});

module.exports = pool;