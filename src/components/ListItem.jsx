import { memo } from "react";

const ListItem = ({ name, color, isSelected, handleClick }) => {
	return (
		<li
			className={`List__item List__item--${color}${isSelected ? " item-clicked" : ""}`}
			onClick={() => handleClick(name)}
		>
			{name}
		</li>
	);
};

export default memo(ListItem);
