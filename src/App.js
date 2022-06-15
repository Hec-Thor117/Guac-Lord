import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Researchers believe that the avocado originated in which Mexican city over 10,000 years ago?',
			answerOptions: [
				{ answerText: 'Mexico City', isCorrect: false },
				{ answerText: 'Puebla', isCorrect: true },
				{ answerText: 'Chimalhuacan', isCorrect: false },
				{ answerText: 'Monterrey', isCorrect: false },
			],
		},
		{
			questionText: 'The avocado goes by many names, which of these is NOT one of them?',
			answerOptions: [
				{ answerText: 'Butter fruit', isCorrect: false },
				{ answerText: 'Alligator pear', isCorrect: false },
				{ answerText: 'Testicle fruit', isCorrect: false },
				{ answerText: 'Aztec apple', isCorrect: true },
			],
		},
		{
			questionText: 'Who is the largest producer of avocados in the US?',
			answerOptions: [
				{ answerText: 'Texas', isCorrect: false },
				{ answerText: 'California', isCorrect: true },
				{ answerText: 'Florida', isCorrect: false },
				{ answerText: 'New Mexico', isCorrect: false },
			],
		},
		{
			questionText: 'Avocados contain double the potassium of a banana?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'Do you like avocados?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const endMessage = () => {
		if (score === questions.length) {
			return 'Wow! You really ARE a Guac Lord!'
		} else {
			return 'You have proven that you are NOT a Guac Lord.'
		}
	}

	const answerButtons = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const resetButton = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	return (
		<main className='main'>
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
						<h3>{endMessage()}</h3>
						<button onClick={resetButton}>Try Again</button>
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => answerButtons(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</main>
	);
}