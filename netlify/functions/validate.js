

const answers = {
	task1: {
		answer: "a",
		magicNumber: 1
	},

	task2: {
		answer: "blue",
		magicNumber: 2
	},

	task3: {
		answer: "c",
		magicNumber: 3
	},

	task4: {
		answer: "d",
		magicNumber: 4
	},

	task5: {
		answer: "e",
		magicNumber: 5
	},

	task6: {
		answer: "f",
		magicNumber: 6
	},
}


const validate = (event) => {
	const {task, input} = event.queryStringParameters;

	if(answers[`task${task}`]?.answer === input){
		return answers[`task${task}`].magicNumber;
	}
	else{
		return "Invalid input";
	}
}

exports.handler = async (event) => {
	const result = validate(event);

	return {
		statusCode: 200,
		body: JSON.stringify(result),
	};
};
