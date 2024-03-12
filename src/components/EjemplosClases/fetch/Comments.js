import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const Comments = () => {
	const { data } = useFetch("https://jsonplaceholder.typicode.com/comments");

	return <div>{data.map((comment) => comment.name)}</div>;
};
