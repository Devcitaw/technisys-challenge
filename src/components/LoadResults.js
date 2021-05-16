import React, { useState, useEffect, useRef } from "react";
import useCurrency from "../hooks/useCurrency";

const LoadResults = ({ referenceDate, baseCurrency }) => {
	const { orderedSymbols, getQuotation } = useCurrency();
	const [offset, setOffset] = useState(0);
	const [results, setResults] = useState([]);

	const searchResult = async () => {
		if (!orderedSymbols) {
			return false;
		}
		try {
			const symbols = orderedSymbols
				.filter((_el, i) => i >= offset && i <= offset + 3)
				.join(",");
			const res = await getQuotation(referenceDate, baseCurrency, symbols);
			setResults(res);
			setOffset(offset + 4);
		} catch (error) {
			console.log(error);
		}
	};

	const searchbtn = useRef(null);

	useEffect(() => {
		searchbtn.current.click();
	}, [searchbtn]);

	return (
		<div>
			{/* <div>{results && results.map((r) => JSON.stringify(r))}</div> */}
			<div>
				<p> RESULTADOS</p>
				<button onClick={searchResult} ref={searchbtn}>
					{" "}
					BUSCAR{" "}
				</button>
			</div>
		</div>
	);
};
export default LoadResults;
