export const handler = async (event) => {
	const value1 =
		event.queryStringParameters && event.queryStringParameters.value1;
	const value2 =
		event.queryStringParameters && event.queryStringParameters.value2;

	let message = 'value 1 and value 2 are needed';

	if (
		event.queryStringParameters !== null &&
		value1 !== null &&
		value2 !== null
	) {
		const sum = parseInt(value1) + parseInt(value2);
		message = `The result is ${sum}`;
	}

	const response = {
		statusCode: 200,
		body: JSON.stringify(message),
	};
	return response;
};
