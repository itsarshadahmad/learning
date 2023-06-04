import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Balance = () => {
	// useSelector -> used to access state from store
	const amount = useSelector((state) => state.amount);
	const [style, setStyle] = useState({});

	useEffect(() => {
		if (amount < 0) {
			setStyle({
				color: "red",
			});
		} else if (amount > 0) {
			setStyle({
				color: "green",
			});
		} else {
			setStyle({
				color: "white",
			});
		}
	}, [amount]);

	return (
		<div>
			<h1>
				Your Balance: <span style={style}>{amount}</span>
			</h1>
		</div>
	);
};
