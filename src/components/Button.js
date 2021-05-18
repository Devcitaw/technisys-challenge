import React from "react";
import styled from "styled-components";
import { highlightColor, mainColor } from "../style/variables";

const HighlightedButton = styled.a`
	color: ${mainColor};
	background: ${(props) => (props.active ? `${highlightColor}` : "gray")};
	width: 100%;
	height: 45px;
	border: ${(props) =>
		props.active ? `1px solid ${highlightColor};` : "gray"};
	box-shadow: ${(props) =>
		props.active ? `5px 5px 5px 3px rgba(255, 113, 65, 0.2)` : ""};
	border-radius: 50px;
	font-size: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: ${(props) => (props.active ? "pointer" : "default")};
`;

const NormalButton = styled(HighlightedButton)`
	color: ${highlightColor};
	background: ${mainColor};
	border: 1px solid ${highlightColor};
	box-shadow: 5px 5px 5px 3px rgba(255, 113, 65, 0.2);
	cursor: pointer;
`;

const Button = ({ onClick, buttonText, highlight, active }) => {
	const isHighlight = highlight;
	const renderButton = isHighlight ? (
		<HighlightedButton onClick={onClick} highlight={highlight} active={active}>
			{buttonText}
		</HighlightedButton>
	) : (
		<NormalButton onClick={onClick} highlight={highlight} active={active}>
			{" "}
			{buttonText}{" "}
		</NormalButton>
	);

	return renderButton;
};

export default Button;
