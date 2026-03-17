import { memo, useEffect, useState } from "react";

const ListItem = ({ name, color, setSelectedItems, selectedItems }) => {
	const [itemClicked, setItemClicked] = useState(false);

	const handleClick = () => {
		setItemClicked((prev) => !prev);
	};

	useEffect(() => {
		if (itemClicked) {
			setSelectedItems((prev) => [...prev, name]);
		} else {
			const filterItems =
				selectedItems.includes(name) ?
					[...selectedItems].filter((item) => item !== name)
				:	[...selectedItems];
			setSelectedItems(filterItems);
		}
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
