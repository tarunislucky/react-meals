import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";

const Overlay = (props) => {
	return (
		<div onClick={props.onClick} className={styles.overlay}>
		</div>
	)
}
const CartModal = (props) => {
	return (
		<div className={styles["cart-modal"]}>
			<ul className={styles["cart-item-list"]}>
				{
					props.data.map(item => {
						if (item.itemAmount > 0) {
							return <CartItem item={item} key={item.id} quantityController={props.quantityController} />
						}
						return;
					})
				}
			</ul>
			<div className={styles["cart-modal--amount"]}>
				<span>Total Amount</span>
				<span> ${props.total}</span>
			</div>
			<div className={styles["cart-modal--btns"]}>
				<button onClick={props.onCloseModalbtn}>close</button>
				<button onClick={() => { console.log("Ordering...") }}>Order</button>
			</div>
		</div >
	)
}

const Cart = (props) => {
	const overlay = document.getElementById("overlay");
	return (
		<>
			<Overlay onClick={props.onCloseModalbtn} />
			<CartModal onCloseModalbtn={props.onCloseModalbtn} data={props.data} total={props.total} quantityController={props.quantityController} />
		</>
	)
}

export default Cart;	