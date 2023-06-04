import React, { useContext } from "react";
import { UserContext } from "../contexts/user.context";

export default function Test() {
	const { user } = useContext(UserContext);

	if (user) console.log(user);

	return (
		<div>
			<h1>Test Block</h1>
			{user !== null ? (
				<div>
					<p>{user.name}</p>
					<p>{user.age}</p>
					<p>{user.major}</p>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}
