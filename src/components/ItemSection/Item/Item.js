import styles from "./Item.module.css";
const Item = (props) => {
	const addAmount = () => {
		props.onAddAmount(props.id, "increment");
	}

	return (
		<li className={styles["items"]}>
			<div className={styles["item-details"]}>
				{props.name}
				<p>{props.desc}</p>
				<span className={styles.price}>{props.price}</span>
			</div>
			<div className={styles["item-details--cart"]}>
				<div>
					Amount
					<input type="number" value={props.amount} readOnly />
				</div>
				<button onClick={addAmount} className={styles["btn-add"]}>+Add</button>
			</div>
		</li>
	)
}
export default Item;