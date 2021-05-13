import React, { useEffect, useState } from "react";
import { URL_BASE } from "../constants/api";
import axios from "axios";

const SelectMenu = () => {
	const [currencys, setCurrencys] = useState([]);

	useEffect(() => {
		const cargar = `${URL_BASE}latest?access_key=${process.env.REACT_APP_API_KEY}`;
		console.log(cargar);
		axios
			.get(`${cargar}`)
			.then((res) => {
				const currencyList = res.data.rates;
				setCurrencys(Object.keys(currencyList));
			})
			.catch((err) => alert(`Error! ${err}`));
	}, []);

	console.log(currencys);

	return (
		<React.Fragment>
			<label for="currency">Selecciona la moneda de referencia</label>
			<select id="currency" name="currency">
				<option value="" selected disabled hidden>
					Moneda
				</option>
				{currencys.map((u) => (
					<option value={`${u}`}>{u}</option>
				))}
			</select>
		</React.Fragment>
	);
};

export default SelectMenu;
