import React, { useState, useEffect } from "react";
import { URL_BASE } from "../constants/api";
import axios from "axios";

const LoadResults = ({ referenceDate, baseCurrency }) => {
	const [currencies, setCurrenciesList] = useState({});

	useEffect(() => {
		const cargar = `${URL_BASE}${referenceDate}?access_key=${process.env.REACT_APP_API_KEY}`;
		// console.log(cargar);
		axios
			.get(`${cargar}`)
			.then((res) => {
				const currencyList = res.data.rates;
				setCurrenciesList(Object.entries(currencyList));
				// console.log(Object.entries(currencyList));
			})
			.catch((err) => alert(`Error! ${err}`));
	}, []);

	console.log(currencies);

	// crear otro array que sea el que se renderiza, y que antes que nada con un filter que me traiga las 4 monedas que quiero (por key, no por posición, en caso de que cambie. Despues, tiene que ir agregando más con el boitón de agregar mas)
	if (currencies !== undefined) {
		return (
			<>
				{Object.keys(currencies).map((key) => {
					return (
						<div key={key}>
							{currencies[key].map((a) => {
								return <span key={a}>{a}</span>;
							})}
						</div>
					);
				})}
			</>
		);
	}
};
export default LoadResults;
