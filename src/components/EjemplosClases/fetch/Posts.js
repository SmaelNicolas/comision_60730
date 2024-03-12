import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const Posts = () => {
	const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

	return <div>{data.map((post) => post.title)}</div>;
};
