import React, { useEffect, useState } from "react";
import moment from "moment";
import SelectMenu from "./SelectMenu";
import useCurrency from "../hooks/useCurrency";
import DateMenu from "./DateMenu";
import LoadResults from "./LoadResults";
import Button from "./Button";
import { DEFAULT_CURRENCY } from "../constants/constants";
import styled from "styled-components";
import { device } from "../style/mediaQuery";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: auto;

	h1 {
		margin-bottom: 30px;
		font-size: 25px;
		text-align: center;

		@media ${device.tablet} {
			font-size: 30px;
			text-align: left;
		}

		@media ${device.desktop} {
			font-size: 30px;
			text-align: left;
		}
	}

	@media ${device.desktop} {
		justify-content: space-around;
		width: 100%;
		height: auto;
	}
`;

const SearchDiv = styled.div``;

const ResultsDiv = styled(LoadResults)``;

const General = () => {
	const [referenceDate, setReferenceDate] = useState(moment()._d);
	const [baseCurrency, setBaseCurrency] = useState(DEFAULT_CURRENCY);
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
					"Su API key solo permite búsquedas para la moneda de referencia (EUR) Euro"
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

	useEffect(() => {
		searchResult();
		console.log("coso");
	}, []);

	return (
		<StyledDiv>
			<SearchDiv>
				<h1> Histórico de cotizaciones </h1>
				<SelectMenu
					symbolList={symbols}
					onChange={setBaseCurrency}
					value={baseCurrency}
					label="Selecciona la moneda de referencia"
				/>

				<DateMenu
					onChange={setReferenceDate}
					value={referenceDate}
					label="Ingresa la fecha de cotización"
				/>
				{results.length === 0 ? (
					<Button
						active
						highlight={true}
						buttonText="Buscar cotizaciones"
						onClick={searchResult}
					/>
				) : (
					<Button buttonText="Buscar cotizaciones" highlight={true} />
				)}
			</SearchDiv>
			{results.length > 0 && (
				<ResultsDiv results={results} searchResult={searchResult} />
			)}
		</StyledDiv>
	);
};

export default General;
