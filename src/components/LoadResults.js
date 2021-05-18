import React from "react";
import Button from "./Button";
import styled from "styled-components";
import styles from "../style/styles.css";
import { device } from "../style/mediaQuery";

const LoadResults = ({ results, searchResult }) => {
	const RateResult = styled.div`
		display: flex;
		flex-direction: row;
		padding: 20px 0;
		border-top: 1px solid lightgray;
		box-sizing: border-box;

		.currency-flag {
			border-radius: 40%;
			width: 25px;
			height: 25px;
			overflow: hidden;
			background-position: center;
		}
	`;

	const RateData = styled.div`
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		width: 100%;

		.rate {
			margin-left: 15px;
		}
	`;

	const ResultsContainer = styled.div`
		margin: 40px 0;
		display: flex;
		flex-direction: column;

		:last-child::after {
			border-bottom: 5px solid gray;
			content: "---";
		}
	`;

	const ButtonContainer = styled.div`
		:before {
			border-bottom: 5px solid gray;
		}
	`;

	return (
		<div>
			<ResultsContainer>
				{results.map((a) =>
					a.map((b) => (
						<div>
							<RateResult>
								<div>
									<div
										className={`currency-flag currency-flag-${b[0].toLowerCase()}`}
									></div>
									{/* <div class="currency-flag currency-flag-usd"></div> */}
								</div>
								<RateData>
									<div className="rate">{b[0]}</div>
									<div className="value">{b[1]}</div>
								</RateData>
							</RateResult>
						</div>
					))
				)}
			</ResultsContainer>

			<ButtonContainer>
				{results.length > 0 ? (
					<Button buttonText="Ver más cotizaciones" onClick={searchResult} />
				) : (
					""
				)}
			</ButtonContainer>
		</div>
	);
};
export default LoadResults;
