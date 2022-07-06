import Pool from "pg";

const pool = new Pool.Pool({
    user: "postgres",
    password: "24972497Vlad",
    host: "localhost",
    port: 5432,
    database: "node_ty_me",
});

export default pool;
