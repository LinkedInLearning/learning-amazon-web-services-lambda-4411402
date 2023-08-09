export const handler = async (event) => {
	console.log(event);

	console.log('Hello Lambda');

	const response = {
		statusCode: 200,
		body: JSON.stringify('Hello from Lambda!'),
	};
	return response;
};
