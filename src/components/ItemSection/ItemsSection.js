import styles from "./ItemsSection.module.css";
import Item from "./Item/Item";
const ItemsSection = (props) => {
	const ItemsData = props.data;
	return (
		<div className={styles["items-section"]}>
			<ul className={styles["items-list"]}>
				{
					ItemsData.map(item => {
						return <Item key={item.id} id={item.id} name={item.itemName} desc={item.itemDesc} price={item.itemPrice} amount={item.itemAmount} onAddAmount={props.onAddAmount} />
					})
				}
			</ul>
		</div>
	)
}

export default ItemsSection;