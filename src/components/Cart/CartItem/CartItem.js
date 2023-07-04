import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import styles from "./CartItem.module.css";
const CartItem = (props) => {
	const item = props.item;
	const dispatch = useDispatch();
	const addItemHandler = (event) => {
		dispatch(cartActions.addItemsToCart(item));
	}
	const removeItemHandler = (event) => {
		dispatch(cartActions.removeItemFromCart(item.id));
	}

	return (
		<li className={styles["cart-item"]}>
			<div className={styles["cart-item-details"]}>
				<div className={styles["cart-item-name"]}>{item.name}</div>
				<div className={styles["cart-item-price-count-wrapper"]}>
					<span className={styles["cart-item-price"]}>${(item.price * item.quantity).toFixed(2)}</span>
					<div className={styles["cart-item-count"]}>x{item.quantity}</div>
				</div>
			</div>
			<div className={styles["cart-item-quantity-control-btns"]}>
				<button onClick={removeItemHandler} className={"btn-decrement"}>-</button>
				<button onClick={addItemHandler} className={"btn-increment"}>+</button>
			</div>
		</li>
	)
}
export default CartItem;