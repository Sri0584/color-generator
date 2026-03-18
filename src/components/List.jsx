import { useCallback, useMemo, useState } from "react";
import ListItem from "./ListItem";
import ShowSelectedItems from "./ShowSelectedItems";

const List = ({ items }) => {
	const [selectedItems, setSelectedItems] = useState(new Set());

	const handleClick = useCallback((name) => {
		setSelectedItems((prev) => {
			const next = new Set(prev);
			next.has(name) ? next.delete(name) : next.add(name);
			return next;
		});
	}, []);

	const selectedArray = useMemo(() => [...selectedItems], [selectedItems]);

	return (
		<>
			{selectedItems?.size > 0 && (
				<ShowSelectedItems selectedItems={selectedArray} />
			)}
			<ul className='List'>
				{items.map((item) => {
					const { name, color } = item;
					return (
						<ListItem
							name={name}
							color={color}
							key={name}
							isSelected={selectedItems.has(name)}
							handleClick={handleClick}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default List;
