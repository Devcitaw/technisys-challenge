import React from "react";
import { DEFAULT_CURRENCY } from "../constants/constants";
import styled from "styled-components";

const StyledSelect = styled.select`
	width: 100%;
	height: 35px;
	border: none;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	font-size: 15px;
	margin: 10px 0;
	appearance: none;
`;

const SelectDiv = styled.div`
	&:after {
		/* content: "🔽"; */
		left: 330px;
		top: -30px;
		height: 34px;
		position: relative;
		pointer-events: none;
	}
`;

const StyledLabel = styled.label`
	font-size: 15px;
`;

const SelectMenu = ({ onChange, symbolList, value }) => {
	const keys = Object.keys(symbolList);

	return (
		<SelectDiv>
			<StyledLabel htmlFor="currency">
				Selecciona la moneda de referencia
			</StyledLabel>
			<StyledSelect
				id="currency"
				name="currency"
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
			>
				{keys &&
					keys.map((u) => (
						<option value={u} key={u}>
							({u}) {symbolList[u]}
						</option>
					))}
				<fa-chevron-down />
			</StyledSelect>
		</SelectDiv>
	);
};

SelectMenu.defaultProps = {
	onChange: () => {},
	symbolList: [],
	value: DEFAULT_CURRENCY,
};
export default SelectMenu;
