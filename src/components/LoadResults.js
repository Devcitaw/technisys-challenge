import React from "react";

const LoadResults = ({ results, searchResult }) => {
	//PROBANDO EL CAMBIO DEL DATE y CURRENCY
	// console.log(date);
	// console.log(baseCurrency);

	return (
		<div>
			{results.map((a) =>
				a.map((b) => (
					<li>
						<div>{b[0]}</div>
						<div>{b[1]}</div>
					</li>
				))
			)}
			<div>
				{results.length > 0 ? (
					<button onClick={searchResult}>Ver más cotizaciones</button>
				) : (
					""
				)}
			</div>
		</div>
	);
};
export default LoadResults;
