import axios from "axios";
import { URL_BASE } from "../constants/api";

export const getCurrencies = async () => {
	try {
		const res = await axios.get(
			`${URL_BASE}symbols?access_key=${process.env.REACT_APP_API_KEY}`
		);
		const symbolList = res.data.symbols;

		return symbolList;
	} catch (error) {
		console.log(error);
	}
};

export const getQuotation = async (referenceDate, baseCurrency, symbols) => {
	console.log(referenceDate, baseCurrency, symbols);
	try {
		const res = await axios.get(
			`${URL_BASE}${referenceDate}?access_key=${process.env.REACT_APP_API_KEY}&base=${baseCurrency}&symbols=${symbols}`
		);
		const symbolList = res.data.symbols;

		return symbolList;
	} catch (error) {
		console.log(error);
	}
};
