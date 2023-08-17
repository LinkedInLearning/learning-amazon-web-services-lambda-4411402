export const lambdaHandler = async (event) => {
	console.log('Roll dice with sides run');

	let sides = 6;
	if (event.queryStringParameters && event.queryStringParameters.sides) {
		sides = event.queryStringParameters.sides;
	}

	const result = rollDice(sides);

	const message = `The result is ${result}, you rolled a dice of ${sides} sides.`;

	try {
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: message,
			}),
		};
	} catch (err) {
		console.log(err);
		return err;
	}
};

function rollDice(sides) {
	const randomNumber = Math.floor(Math.random() * sides) + 1;

	return randomNumber;
}
