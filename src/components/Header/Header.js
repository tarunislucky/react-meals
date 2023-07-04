import CartButton from "./CartButton/CartButton";
import styles from "./Header.module.css";
import meals from "../../assets/meals.jpg";
const HeaderImage = () => {
  return (
    <header className={styles.header_image}>
      <img src={meals} alt="meals" />
    </header>
  )
}
const Header = () => {
  return (
    <>
      <header className={styles.header_header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>

      <section>
        <HeaderImage />
      </section>
    </>
  )
}

export default Header;