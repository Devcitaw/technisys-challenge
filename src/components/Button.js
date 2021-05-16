import React from "react";
import styled from "styled-components";
import { highlightColor, mainColor } from "../variables";

const ColorButton = styled.a`
	color: ${mainColor};
	background: ${highlightColor};
`;

const Button = ({ onClick, buttonText }) => {
	return (
		<div>
			<ColorButton onClick={onClick}> {buttonText}</ColorButton>
		</div>
	);
};

export default Button;
