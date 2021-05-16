import React from "react";

const SelectMenu = ({ onChange, symbolList, value }) => {
	const keys = Object.keys(symbolList);

	return (
		<div>
			<label for="currency">Selecciona la moneda de referencia</label>
			<select
				id="currency"
				name="currency"
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
			>
				{keys &&
					keys.map((u) => (
						<option value={u}>
							({u}) {symbolList[u]}
						</option>
					))}
			</select>
		</div>
	);
};

SelectMenu.defaultProps = {
	onChange: () => {},
	symbolList: [],
	value: "EUR",
};
export default SelectMenu;
