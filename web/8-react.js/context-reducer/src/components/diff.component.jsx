import React, { useContext } from "react";
import { UserContext } from "../contexts/user.context";

export default function Diff() {
	const { setUser } = useContext(UserContext);

	function handleUser() {
		setUser({
			name: "Joe",
			age: 23,
			major: "Computer Science",
		});
	}

	return <div onClick={handleUser}>Diff</div>;
}
