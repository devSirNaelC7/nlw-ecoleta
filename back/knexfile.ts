import path from "path";

interface KnexConfig {
    [key: string]: object;
};

const connect:KnexConfig = {
    development:{
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + '/src/database/migrations',
        },
        seeds: {
            directory: __dirname + '/src/database/seeds',
        },
        useNullAsDefault: true,
    }
};

export default connect;