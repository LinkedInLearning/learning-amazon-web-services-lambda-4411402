export const handler = async (event) => {
	const name = event.queryStringParameters && event.queryStringParameters.name;

	let message = 'Hello Lambda!';

	if (name) {
		message = `Hello ${name}!`;
	}

	const response = {
		statusCode: 200,
		body: JSON.stringify(message),
	};
	return response;
};
