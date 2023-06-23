import './styles/App.css';
import Scoreboard from './components/Scoreboard';
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
	const correctChoice = () => {
		const newHS =
			state.currentScore + 1 > state.highScore
				? state.highScore + 1
				: state.highScore;
		setState({
			currentScore: state.currentScore + 1,
			highScore: newHS,
		});
	};
	const incorrectChoice = () => {
		setState({
			currentScore: 0,
			highScore: state.highScore,
		});
	};
	return (
		<div className="game">
			<Scoreboard
				currentScore={state.currentScore}
				highScore={state.highScore}
			/>
			<button onClick={correctChoice}>Correct</button>
			<button onClick={incorrectChoice}>inCorrect</button>
		</div>
	);
}

export default App;
