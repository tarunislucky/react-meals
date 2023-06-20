import CartButton from "../Button/CartButton";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={styles.header_header}>
      <h1>ReactMeals</h1>
      <CartButton count={props.count} onCartBtnclick={props.onCartBtnclick} />
    </header>
  )
}

export default Header;