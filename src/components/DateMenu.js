import React, { useState } from "react";
import DatePicker, { registerLocale, addDays } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

const DateMenu = () => {
	const [startDate, setStartDate] = useState(null);
	const handleChangeRaw = (value) => {
		if (value === "tomorrow") {
			setStartDate(addDays(new Date(), 1));
		}
	};

	return (
		<React.Fragment>
			<label>Ingresá la fecha de cotización</label>
			<DatePicker
				locale="es"
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				maxDate={new Date()}
				showDisabledMonthNavigation
				dateFormat="dd/MM/yyyy"
				placeholderText=" DD / MM / YYYY"
				onChangeRaw={(event) => handleChangeRaw(event.target.value)}
			/>
		</React.Fragment>
	);
};

export default DateMenu;
