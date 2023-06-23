import blueButterfly from './assets/blue-butterfly.jpg';
import blueGreen from './assets/blue-green.jpg';
import blueJay from './assets/blue-jay.jpg.webp';
import blueMoon from './assets/blue-moon.jpg';
import bluePaint from './assets/blue-paint.jpg';
import blueRaspberry from './assets/blue-raspberries.jpg.webp';
import blueSheets from './assets/blue-sheets.jpg.webp';
import blueYellowFlower from './assets/blue-yellow-flower.jpg.webp';
import bugFlower from './assets/bug-flower.jpg';
import deepSea from './assets/deep-sea.jpg';
import ocean from './assets/ocean.jpg';
import purpleBlueFlower from './assets/purple-blue-flower.jpg';

function cardElements() {
	return (
		<div className="gameboard">
			<div className="card">
				<img src={blueButterfly} alt="blue-butterfly" />
				<h2>Blue Butterfly</h2>
			</div>
			<div className="card">
				<img src={blueGreen} alt="blue-green" />
				<h2>Blue Flower</h2>
			</div>
			<div className="card">
				<img src={blueJay} alt="blue-jay" />
				<h2>Blue Jay</h2>
			</div>
			<div className="card">
				<img src={blueMoon} alt="blue-moon" />
				<h2>Blue Moon</h2>
			</div>
			<div className="card">
				<img src={bluePaint} alt="blue-Paint" />
				<h2>Blue Paint</h2>
			</div>
			<div className="card">
				<img src={blueRaspberry} alt="Blue-Raspberry" />
				<h2>Blue Raspberry</h2>
			</div>
			<div className="card">
				<img src={blueSheets} alt="blue-sheets" />
				<h2>Blue Sheets</h2>
			</div>
			<div className="card">
				<img src={blueYellowFlower} alt="blue-yellow" />
				<h2>Blue Yellow plants</h2>
			</div>
			<div className="card">
				<img src={bugFlower} alt="bug-flower" />
				<h2>Bug Flower</h2>
			</div>
			<div className="card">
				<img src={deepSea} alt="deep-sea" />
				<h2>Blue Sea</h2>
			</div>
			<div className="card">
				<img src={ocean} alt="ocean" />
				<h2>Ocean</h2>
			</div>
			<div className="card">
				<img src={purpleBlueFlower} alt="purple-blue" />
				<h2>Blue Purple Plant</h2>
			</div>
		</div>
	);
}

export default cardElements;
