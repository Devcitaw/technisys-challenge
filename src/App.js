import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { textColor, backgroundColor, mainColor } from "./variables";
import General from "./components/General";

const GlobalStyle = createGlobalStyle`
*{
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: ${textColor};
}

body {
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
	padding: 0;
	margin: 0;
	background: ${backgroundColor};
	display: flex;
	justify-content: center; 
	
}
`;

const Main = styled.div`
	margin-top: 50px;
	background: ${mainColor};
	display: flex;
	flex-direction: column;
	width: 670px;
	box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.1),
		-3px -3px 5px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 50px;
`;

const App = () => {
	return (
		<Main>
			<GlobalStyle />
			<h1> Histórico de cotizaciones </h1>
			<General />
		</Main>
	);
};

export default App;
