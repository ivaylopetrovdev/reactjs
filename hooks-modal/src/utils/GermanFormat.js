const convertToGermanFormat = (value) => {
	let newValue = value;
	if (typeof value === 'string') {
		newValue = parseFloat(value.split('.').join("").replace(/,/g, '.'));
	}
	return {
		stringValue: Number(newValue).toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
		numberValue: newValue
	}
};

export default convertToGermanFormat;
