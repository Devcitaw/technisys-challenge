import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

const DateMenu = ({ onChange, value }) => {
	return (
		<React.Fragment>
			<label htmlFor="currency">Ingresá la fecha de cotización</label>
			<DatePicker
				id="currency"
				name="currency"
				locale="es"
				selected={value}
				onChange={(value) => onChange(value)}
				maxDate={moment()._d}
				showDisabledMonthNavigation
				dateFormat="dd/MM/yyyy"
				placeholderText=" DD / MM / YYYY"
			/>
		</React.Fragment>
	);
};

export default DateMenu;
