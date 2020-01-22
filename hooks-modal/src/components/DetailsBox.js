import React from "react";

const DetailsBox = ({title, children}) => (
	<div className="details-box">
		<div className="label">{title}:</div>
		<div className="info">{children}</div>
	</div>
);
export default DetailsBox;