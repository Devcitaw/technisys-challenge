import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import styled from "styled-components";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { highlightColor } from "../style/variables";
registerLocale("es", es);

const DateComponent = styled.div`
	margin-bottom: 50px;
`;

const DatepickerDiv = styled.div`
	display: flex;
	margin: 10px 0;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	height: 40px;
	width: 100%;
	position: relative;
	.react-datepicker-wrapper {
		width: 100%;
	}
`;

const StyledDatepicker = styled(DatePicker)`
	width: 100%;
	height: 35px;
	border: none;
	font-size: 15px;
	outline-style: none;
`;

const StyledLabel = styled.label`
	font-size: 15px;
	margin-bottom: 15px;
	font-weight: 400;
`;

const CalendarIcon = styled(Calendar)`
	pointer-events: none;
	position: absolute;
	margin-top: -7px;
	top: 10px;
	right: 10px;
	fill: ${highlightColor};
	height: 30px;
	z-index: 10;
`;

const DateMenu = ({ onChange, value, label }) => {
	return (
		<DateComponent>
			<StyledLabel htmlFor="currency">{label}</StyledLabel>
			<DatepickerDiv>
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
				<CalendarIcon />
			</DatepickerDiv>
		</DateComponent>
	);
};

export default DateMenu;
