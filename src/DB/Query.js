const { Client } = require("pg");

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

client.connect();

exports.Query = async (query, values) => {
    const { rows } = await client.query(query, values);
    return rows;
};
