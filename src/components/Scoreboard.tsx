import '../styles/Scoreboard.css';

interface Props {
	currentScore: number;
	highScore: number;
}

const Scoreboard = ({ currentScore, highScore }: Props) => {
	return (
		<div className="scoreBoard">
			<p className="text">Current Score: {currentScore}</p>
			<p className="text">High Score: {highScore}</p>
		</div>
	);
};

export default Scoreboard;
