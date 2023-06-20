import styles from "./CartItem.module.css";
const CartItem = (props) => {
	const item = props.item;
	return (
		<li className={styles["cart-item"]}>
			<div className={styles["cart-item-details"]}>
				<div className={styles["cart-item-name"]}>{item.itemName}</div>
				<div className={styles["cart-item-price-count-wrapper"]}>
					<span className={styles["cart-item-price"]}>${(item.itemPrice * item.itemAmount).toFixed(2)}</span>
					<div className={styles["cart-item-count"]}>x{item.itemAmount}</div>
				</div>
			</div>
			<div className={styles["cart-item-quantity-control-btns"]}>
				<button onClick={props.quantityController.bind(null, item.id, "decrement")} className={"btn-decrement"}>-</button>
				<button onClick={props.quantityController.bind(null, item.id, "increment")} className={"btn-increment"}>+</button>
			</div>
		</li>
	)
}
export default CartItem;