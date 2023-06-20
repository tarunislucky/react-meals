import { useState, useContext } from "react";
import CartItem from "./CartItem/CartItem";
import styles from "./CartModal.module.css";
const CartModal = (props) => {
	return (
		<div className={`${styles["cart-modal"]} ${props.isOpen ? '' : styles.hidden}`}>
			<ul className={styles["cart-item-list"]}>
				{
					props.data.map(item => {
						if (item.itemAmount > 0) {
							return <CartItem item={item} key={item.id} quantityController={props.quantityController} />
						}
					})
				}
			</ul>
			<div className={styles["cart-modal--amount"]}>
				<span>Total Amount</span>
				<span> ${props.total.toFixed(2)}</span>
			</div>
			<div className={styles["cart-modal--btns"]}>
				<button onClick={props.onCloseModalbtn}>close</button>
				<button onClick={() => { console.log("Ordering...") }}>Order</button>
			</div>
		</div >
	)
}

export default CartModal;	