import styles from "./Overlay.module.css";
const Overlay = (props) => {

	return (
		<div onClick={props.onClick} className={`${styles.overlay} ${props.isOpen ? '' : styles.hidden}`}>
		</div>
	)
}

export default Overlay;