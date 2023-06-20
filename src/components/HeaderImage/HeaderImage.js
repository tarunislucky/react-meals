import meals from "./meals.jpg";
import styles from "./HeaderImage.module.css";
const HeaderImage = (props) => {
	return (
		<header className={styles.header_image}>
			<img src={meals} alt="meals" />
		</header>
	)
}

export default HeaderImage;