import React from 'react';

const ErrorInfo = ({ infoError }) => {
	return (
		<div className="error">{infoError != null ? infoError.message : null}</div>
	);
};

export default ErrorInfo;