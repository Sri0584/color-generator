import { useState } from "react";
import ListItem from "./ListItem";
import ShowSelectedItems from "./ShowSelectedItems";

const List = ({ items }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	return (
		<>
			{selectedItems?.length > 0 && (
				<ShowSelectedItems selectedItems={selectedItems} />
			)}
			<ul className='List'>
				{items.map((item) => {
					const { name, color } = item;
					return (
						<ListItem
							name={name}
							color={color}
							key={name}
							setSelectedItems={setSelectedItems}
							selectedItems={selectedItems}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default List;
