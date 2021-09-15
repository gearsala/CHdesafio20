export default {
	development: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1.3307',
			user: 'arsala',
			password: 'arsala',
			database: 'e-commerce',
		},
		migrations: { directory: __dirname + '/db/migrations' },
		seeds: { directory: __dirname + '/db/seeds' },
	},
	development2: {
		client: 'sqlite3',
		connection: { filename: './messages' },
		useNullAsDefault: true,
		migrations: { directory: __dirname + '/db/migrations' },
		seeds: { directory: __dirname + '/db/seeds' },
	},
};