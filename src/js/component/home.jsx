import React, {useState} from "react";
import "../../styles/index.css"


//create your first component
const Home = () => {
	const [color, setColor] = useState(null);
	const [colorPrevio, setColorPrev] = useState(null)

	const lightColors = {
		red: color === "red" ? "red" : color === "purple" && colorPrevio == "red" ? "purple" : "gray",
		yellow: color === "yellow" ? "yellow" : color === "purple" && colorPrevio == "yellow" ? "purple" : "gray",
		green: color === "green" ? "green" : color === "purple" && colorPrevio == "green" ? "purple" : "gray"
	}

	return (
		<>
			<div className="semaforo">
				<div className="luz" style={{backgroundColor: lightColors.red}} onClick={() => setColor("red")}>

				</div>
				<div className="luz" style={{backgroundColor: lightColors.yellow}} onClick={() => setColor("yellow")}>

				</div>
				<div className="luz" style={{backgroundColor: lightColors.green}} onClick={() => setColor("green")}>

				</div>

			</div>
			<button onClick={()=>{
				const newColor = color === "red" ? "yellow" : color === "yellow" ? "green" : "red"
				setColor(newColor)
			}}>Alternar Color</button>
			<button onClick={()=>{
				setColorPrev(color)
				setColor("purple")
			}}>
				Purpura
			</button>
		</>
	);
};

export default Home;
