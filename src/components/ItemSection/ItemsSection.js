import styles from "./ItemsSection.module.css";
import Item from "./Item/Item";
const dummyData = [
	{
		id: 1,
		name: "Sushi",
		desc: "Finest fish aand veggies",
		price: 22.99
	},
	{
		id: 2,
		name: "Schnitzel",
		desc: "A german specialty!",
		price: 16.5
	},
	{
		id: 3,
		name: "Barbecue Burger",
		desc: "American, raw, meaty",
		price: 12.99

	},
	{
		id: 4,
		name: "Green Bowl",
		desc: "Healthy...and green...",
		price: 18.99

	}
];
const ItemsSection = () => {
	return (
		<div className={styles["items-section"]}>
			<ul className={styles["items-list"]}>
				{
					dummyData.map(item => {
						return <Item key={item.id} item={item} />
					})
				}
			</ul>
		</div>
	)
}

export default ItemsSection;