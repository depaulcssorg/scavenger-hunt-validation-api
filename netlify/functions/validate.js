
//
// const answers = {
// 	task1: {
// 		answer: "a",
// 		magicNumber: 1
// 	},
//
// 	task2: {
// 		answer: process.env[`TASK${task}_ANSWER`],
// 		magicNumber: process.env[`TASK${task}_MAGIC`]
// 	},
//
// 	task3: {
// 		answer: "c",
// 		magicNumber: 3
// 	},
//
// 	task4: {
// 		answer: "d",
// 		magicNumber: 4
// 	},
//
// 	task5: {
// 		answer: "e",
// 		magicNumber: 5
// 	},
//
// 	task6: {
// 		answer: "f",
// 		magicNumber: 6
// 	},
// }
//

// const validate = (event) => {
// 	const {task, input} = event.queryStringParameters;
//
// 	if(answers[`task${task}`]?.answer === input){
// 		return {
// 			success: true,
// 			magicNumber: answers[`task${task}`].magicNumber
// 		};
// 	}
// 	else{
// 		return {
// 			success: false,
// 			message: "Invalid input"
// 		};
// 	}
// }


const validate = (event) => {
	const { task, input } = event.queryStringParameters;

	const expectedAnswer = process.env[`TASK${task}_ANSWER`];
	const magicNumber = process.env[`TASK${task}_MAGIC`];

	if (expectedAnswer && input === expectedAnswer) {
		return {
			success: true,
			magicNumber: Number(magicNumber),
		};
	} else {
		return {
			success: false,
			message: "Invalid input",
		};
	}
};

exports.handler = async (event) => {
	const result = validate(event);

	return {
		statusCode: 200,
		body: JSON.stringify(result),
	};
};
