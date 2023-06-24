import './styles/App.css';
import Scoreboard from './components/Scoreboard';
import CardElements from './components/CardElements';
import { useState } from 'react';

interface State {
	currentScore: number;
	highScore: number;
}

function App() {
	const initialState: State = {
		currentScore: 0,
		highScore: 0,
	};
	let [state, setState] = useState(initialState);
	let [gameAction, setGameAction] = useState('');
	const correctChoice = () => {
		const newHS =
			state.currentScore + 1 > state.highScore
				? state.highScore + 1
				: state.highScore;
		setState({
			currentScore: state.currentScore + 1,
			highScore: newHS,
		});
		setGameAction('');
	};
	const incorrectChoice = () => {
		setState({
			currentScore: 0,
			highScore: state.highScore,
		});
		setGameAction('');
	};
	setTimeout(() => {
		if (gameAction == 'gameover') {
			incorrectChoice();
		} else if (gameAction == 'guess') {
			correctChoice();
		}
	}, 100);
	return (
		<div className="game">
			<div className="header">
				<Scoreboard
					currentScore={state.currentScore}
					highScore={state.highScore}
				/>
			</div>
			<CardElements AppGameState={setGameAction} />
		</div>
	);
}

export default App;
