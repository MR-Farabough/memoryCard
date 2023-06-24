import { useState, useEffect } from 'react';
import blueButterfly from '../assets/blue-butterfly.jpg';
import blueGreen from '../assets/blue-green.jpg';
import blueJay from '../assets/blue-jay.jpg.webp';
import blueMoon from '../assets/blue-moon.jpg';
import bluePaint from '../assets/blue-paint.jpg';
import blueRaspberry from '../assets/blue-raspberries.jpg.webp';
import blueSheets from '../assets/blue-sheets.jpg.webp';
import blueYellowFlower from '../assets/blue-yellow-flower.jpg.webp';
import bugFlower from '../assets/bug-flower.jpg';
import deepSea from '../assets/deep-sea.jpg';
import ocean from '../assets/ocean.jpg';
import purpleBlueFlower from '../assets/purple-blue-flower.jpg';

interface AppState {
	AppGameState: Function;
}

function CardElements({ AppGameState }: AppState) {
	const initialState: (Element | null)[] = [];
	const [state, setState] = useState(initialState);
	const imgSrc = [
		blueButterfly,
		blueGreen,
		blueJay,
		blueMoon,
		bluePaint,
		blueRaspberry,
		blueSheets,
		blueYellowFlower,
		bugFlower,
		deepSea,
		ocean,
		purpleBlueFlower,
	];
	const [imageSrcState, setImageSrc] = useState(imgSrc);

	const shuffle = (array: string[]) => {
		let currentIndex = array.length,
			randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};
	const handleClick = (count: number) => {
		const chosenCard = document.querySelector(`.card${count}`);
		if (state.includes(chosenCard)) {
			setState([]);
			AppGameState('gameover');
			setImageSrc(shuffle(imgSrc));
			render();
		} else {
			const tempArr = [...state];
			tempArr.push(chosenCard);
			setState(tempArr);
			AppGameState('guess');
			setImageSrc(shuffle(imgSrc));
			render();
		}
	};
	useEffect(() => {
		render();
	}, [imageSrcState]);
	const render = () => {
		const newBoard = imageSrcState.map((src, index) => (
			<div
				onClick={() => handleClick(index)}
				key={index}
				className={`card${index} card`}
			>
				<img src={src} alt={`Card${index}`} />
				<h2>{`Card${index}`}</h2>
			</div>
		));
		setBoard(newBoard);
	};
	const [board, setBoard] = useState<React.ReactNode[]>([]);
	useEffect(() => {
		setBoard(
			imageSrcState.map((src, index) => (
				<div
					onClick={() => handleClick(index)}
					key={index}
					className={`card${index} card`}
				>
					<img src={src} alt={`Card${index}`} />
					<h2>{`Card${index}`}</h2>
				</div>
			))
		);
	}, [imageSrcState]);
	return <div className="gameboard">{board}</div>;
}

export default CardElements;
