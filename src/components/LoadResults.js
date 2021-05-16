import React from "react";
import Button from "./Button";

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
					<Button buttonText="Ver más cotizaciones" onClick={searchResult} />
				) : (
					""
				)}
			</div>
		</div>
	);
};
export default LoadResults;
