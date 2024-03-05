import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
	return products.map((prod) => <Item producto={prod} />);
};
