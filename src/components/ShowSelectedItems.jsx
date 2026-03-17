const ShowSelectedItems = ({ selectedItems }) => {
	return (
		<main>
			<section>
				<h2>Selected Items</h2>
				<ul className='selected-items'>
					{selectedItems.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default ShowSelectedItems;
