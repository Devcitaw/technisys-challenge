import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { textColor, backgroundColor, mainColor } from "./style/variables.js";
import General from "./components/General";
import { device } from "./style/mediaQuery";

const GlobalStyle = createGlobalStyle`
*{
	@import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400&display=swap');
	
	font-family: 'Hind Madurai', sans-serif;
	font-weight: 400;
	color: ${textColor};
}

body {
	padding: 0;
	margin: 0;
	background: ${backgroundColor};
	display: flex;
	justify-content: center; 
	
}
`;

const Main = styled.div`
	background: ${mainColor};
	display: flex;
	flex-direction: column;
	min-width: 375px;
	max-width: 768px;
	padding: 20px 40px;
	box-sizing: border-box;
	margin: 50px;
	box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.1),
		-3px -3px 5px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;

	@media ${device.tablet} {
		width: 600px;
		margin: 50px;
		max-width: 90%;
		box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.1),
			-3px -3px 5px 1px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 50px 100px;
	}

	@media ${device.desktop} {
		min-width: 1000px;
	}
`;

console.log(device.desktop);

const App = () => {
	return (
		<Main>
			<GlobalStyle />
			<General />
		</Main>
	);
};

export default App;
