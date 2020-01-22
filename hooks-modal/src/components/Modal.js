import React, {useState} from "react";
import './Modal.css';
import convertToGermanFormat from "../utils/GermanFormat";
import DetailsBox from "../components/DetailsBox";

const Modal = ({company, onClose, onSubmit}) => {
	const [modalValue, setModalValue] = useState(company && company.budget);

	const onCloseModal = e => {
		onClose && onClose(e);
	};

	const onSubmitModal = () => {
		const newValue = convertToGermanFormat(modalValue).numberValue;
		if (newValue >= company.budget_spent && window.confirm('Please confirm the change')) {
			onSubmit && onSubmit({...company, ...{budget: newValue}});
			return onCloseModal();
		}
	};

	return(
		<div className="modal" id="modal">
			<h2>Company's Budget</h2>
			<div className="content">
				<div className="details-wrapper">
					<DetailsBox title="Company Name">
						{company.name}
					</DetailsBox>
					<DetailsBox title="New Total Budget">
						<input
							value={convertToGermanFormat(modalValue).stringValue}
							onChange={e => {
								const caret = e.target.selectionStart;
								const element = e.target;
								window.requestAnimationFrame(() => {
									element.selectionStart = caret;
									element.selectionEnd = caret
								});
								setModalValue(e.target.value);
							}}
						/>
					</DetailsBox>
				</div>
			</div>
			<div className="actions">
				<button className="submit" onClick={onSubmitModal}>
					submit
				</button>
				<button className="toggle-button" onClick={onCloseModal}>
					close
				</button>
			</div>
		</div>
	)
};

export default Modal;