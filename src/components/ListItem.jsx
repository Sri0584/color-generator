import { memo, useEffect, useState } from "react";

const ListItem = ({ name, color, setSelectedItems }) => {
	const [itemClicked, setItemClicked] = useState(false);
	console.log("list item");

	const handleClick = () => {
		setItemClicked((prev) => !prev);
	};

	useEffect(() => {
		itemClicked && setSelectedItems((prev) => [...prev, name]);
	}, [itemClicked]);

	return (
		<li
			className={
				itemClicked ?
					`List__item List__item--${color} item-clicked`
				:	`List__item List__item--${color}`
			}
			onClick={handleClick}
		>
			{name}
		</li>
	);
};

export default memo(ListItem);
