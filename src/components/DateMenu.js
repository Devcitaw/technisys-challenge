import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import styled from "styled-components";
registerLocale("es", es);

const StyledDatepicker = styled(DatePicker)`
	width: 100%;
	height: 35px;
	border: none;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	font-size: 15px;
`;

const StyledLabel = styled.label`
	font-size: 15px;
	margin-bottom: 15px;
	font-weight: 500;
`;

const DatepickerDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	:after {
		/* content: "📅"; */
		left: 330px;
		top: -30px;
		height: 34px;
		position: relative;
		pointer-events: none;
	}
`;

const DateMenu = ({ onChange, value }) => {
	return (
		<DatepickerDiv>
			<StyledLabel htmlFor="currency">
				Ingresá la fecha de cotización{" "}
			</StyledLabel>

			<StyledDatepicker
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
		</DatepickerDiv>
	);
};

export default DateMenu;
