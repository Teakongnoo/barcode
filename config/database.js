module.exports = ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
			host: env('DATABASE_HOST', 'ec2-52-4-104-184.compute-1.amazonaws.com'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'd7tri15n0v2lta'),
			user: env('DATABASE_USERNAME', 'xtqlahmshrgyif'),
			password: env('DATABASE_PASSWORD', 'e1eb0572443e9fe42c112977d43153c9c0bb7de5d99350f16e468d88c7cf33c2'),
			ssl: env.bool('DATABASE_SSL', true),
			//ssl: false
		}
	}
});
