import { colors, fruits, sizes } from "../utils/Data";

const items = sizes.reduce(
	(items, size) => [
		...items,
		...fruits.reduce(
			(acc, fruit) => [
				...acc,
				...colors.reduce(
					(acc, color) => [
						...acc,
						{
							name: `${size} ${color} ${fruit}`,
							color,
						},
					],
					[],
				),
			],
			[],
		),
	],
	[],
);
const useFetchItems = () => {
	return { items };
};

export default useFetchItems;
