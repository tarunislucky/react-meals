import { useSelector } from "react-redux";
import { useToggleModal } from "../../Hooks/useToggleModal";

import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";


const Overlay = () => {
	const toggleModal = useToggleModal();
	return (
		<div onClick={toggleModal} className={styles.overlay}>
		</div>
	)
}
const CartModal = () => {
	const toggleModal = useToggleModal();
	const cart = useSelector(state => {
		return state.cart;
	})

	// calculation of total cart value
	let totalCartValue = 0;
	if (cart.items.length > 0) {
		totalCartValue = cart.items.reduce((prev, next) => parseFloat((prev + next.totalPrice).toFixed(2)), 0);
	};

	return (
		<div className={styles["cart-modal"]}>
			<ul className={styles["cart-item-list"]}>
				{
					cart.items.map(item => {
						return (
							<CartItem key={item.id} item={item} />
						);
					})
				}
			</ul>
			<div className={styles["cart-modal--amount"]}>
				<span>Total Amount</span>
				<span>{totalCartValue.toFixed(2)}</span>
			</div>
			<div className={styles["cart-modal--btns"]}>
				<button onClick={toggleModal}>close</button>
				<button onClick={() => { console.log("Ordering...") }}>Order</button>
			</div>
		</div >
	)
}

const Cart = () => {

	return (
		<>
			<Overlay />
			<CartModal />
		</>
	)
}

export default Cart;	