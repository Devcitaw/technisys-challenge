import React, { useState } from "react";

import SelectMenu from "./SelectMenu";
import useCurrency from "../hooks/useCurrency";
import DateMenu from "./DateMenu";
import LoadResults from "./LoadResults";

const General = () => {
	const baseDate = new Date();
	const [referenceDate, setReferenceDate] = useState(
		`${baseDate.getFullYear()}-0${baseDate.getMonth()}-${baseDate.getDate()}`
	);
	//CAMBIAR Y USAR MOMENT!! moment().format('YYYY-MM-DD')
	const [baseCurrency, setBaseCurrency] = useState("EUR");

	const { symbols } = useCurrency();

	return (
		<div>
			<SelectMenu
				symbolList={symbols}
				onChange={setBaseCurrency}
				value={baseCurrency}
			/>
			<DateMenu onChange={setReferenceDate} />
			{/* //BOTON */}
			<LoadResults baseCurrency={baseCurrency} referenceDate={referenceDate} />
		</div>
	);
};

export default General;
