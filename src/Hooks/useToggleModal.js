import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../store/ui-slice";

export const useToggleModal = () => {
	const dispatch = useDispatch();
	const toggleModal = () => {
		dispatch(userInterfaceAction.toggleCart());
	}
	return toggleModal;
}
