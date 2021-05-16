import React, { useEffect, useState } from "react";
import moment from "moment";
import SelectMenu from "./SelectMenu";
import useCurrency from "../hooks/useCurrency";
import DateMenu from "./DateMenu";
import LoadResults from "./LoadResults";
import Button from "./Button";

const General = () => {
	const [referenceDate, setReferenceDate] = useState(moment()._d);
	const [baseCurrency, setBaseCurrency] = useState("EUR");
	const { symbols } = useCurrency();
	const [results, setResults] = useState([]);
	const { orderedSymbols, getRates } = useCurrency();
	const [offset, setOffset] = useState(0);
	const date = moment(referenceDate).format("YYYY-MM-DD");

	const searchResult = async () => {
		if (!orderedSymbols) {
			return false;
		}
		try {
			const symbols = orderedSymbols.slice(offset, offset + 4).join(",");
			const res = await getRates(date, baseCurrency, symbols);
			const entries = Object.entries(res);

			if (entries.length !== 0) {
				setResults((results) => [...results, entries]);

				setOffset(offset + 4);
			} else {
				alert(
					"Lo sentimos, no tiene permiso para cambiar la moneda de referencia a otra que no sea EUR. Necesita cambiar la API KEY"
				);
				setBaseCurrency("EUR");
			}
		} catch (error) {
			console.log(error);
		}
	};

	//RESET
	useEffect(() => {
		setResults([]);
		setOffset(0);
	}, [baseCurrency, referenceDate]);

	return (
		<div>
			<SelectMenu
				symbolList={symbols}
				onChange={setBaseCurrency}
				value={baseCurrency}
			/>

			<DateMenu onChange={setReferenceDate} value={referenceDate} />
			{results.length === 0 ? (
				<Button buttonText="Buscar cotizaciones" onClick={searchResult} />
			) : (
				""
			)}

			<LoadResults results={results} searchResult={searchResult} />
		</div>
	);
};

export default General;
