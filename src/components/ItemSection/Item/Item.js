import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import Input from "../../Input/Input";
import styles from "./Item.module.css";


const Item = (props) => {
	const dispatch = useDispatch();
	const item = props.item;

	const cartItem = useSelector(state => {
		return state.cart.items.find(cartItem => cartItem.id === item.id);
	})
	const addItemBtnHandler = () => {
		dispatch(cartActions.addItemsToCart(item));
	}
	return (
		<li className={styles["items"]}>
			<div className={styles["item-details"]}>
				{item.name}
				<p>{item.desc}</p>
				<span className={styles.price}>{item.price}</span>
			</div>

			<div className={styles["item-details--cart"]}>
				<div>
					Amount
					<Input amount={cartItem?.quantity || 0} />
				</div>

				<button onClick={addItemBtnHandler} className={styles["btn-add"]}>+Add</button>
			</div>

		</li >
	)
}
export default Item;