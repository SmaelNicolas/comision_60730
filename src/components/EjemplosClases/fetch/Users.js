import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const Users = () => {
	const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

	return <div>{data.map((user) => user.name)}</div>;
};
