import React from "react";
import styled from "styled-components";
import { highlightColor, mainColor } from "../variables";

const ColorButton = styled.a`
	color: ${mainColor};
	background: ${highlightColor};
`;

const Button = () => {
	return (
		<React.Fragment>
			<ColorButton>Buscar cotizaciones</ColorButton>
		</React.Fragment>
	);
};

export default Button;
