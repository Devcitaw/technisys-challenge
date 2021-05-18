import React from "react";
import { DEFAULT_CURRENCY } from "../constants/constants";
import styled from "styled-components";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import { highlightColor } from "../style/variables";

const SelectComponent = styled.div`
	margin: 30px 0;
`;

const SelectDiv = styled.div`
	display: flex;
	margin: 10px 0;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	height: 40px;
	position: relative;
`;

const StyledSelect = styled.select`
	width: 100%;
	border: none;
	font-size: 15px;
	appearance: none;
	margin: 0;
`;

const StyledLabel = styled.label`
	font-size: 15px;
	font-weight: 400;
`;
const ArrowIcon = styled(ArrowIosDownwardOutline)`
	pointer-events: none;
	position: absolute;
	margin-top: -7px;
	width: 40px;
	top: 8px;
	right: 5px;
	fill: ${highlightColor};
	z-index: 10;
`;

const SelectMenu = ({ onChange, symbolList, value, label }) => {
	const keys = Object.keys(symbolList);

	return (
		<SelectComponent>
			<StyledLabel htmlFor="currency">{label}</StyledLabel>
			<SelectDiv>
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
				</StyledSelect>
				<ArrowIcon />
			</SelectDiv>
		</SelectComponent>
	);
};

SelectMenu.defaultProps = {
	onChange: () => {},
	symbolList: [],
	value: DEFAULT_CURRENCY,
};

export default SelectMenu;
