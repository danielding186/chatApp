import React from 'react';

const UserError = ({infoError}) => {
	return (
    	<div className="error">{ infoError != null ? infoError.message : null }</div>
  	);
};

export default UserError;