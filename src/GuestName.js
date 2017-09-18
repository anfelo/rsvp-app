import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
	return (
		(props.isEditing)
		? <input type="text" value={props.children} onChange={props.handleNameEdits} />
		: <span>{props.children}</span>
	);
};

GuestName.PropTypes = {
	isEditing: PropTypes.func.isRequired,
	handleNameEdits: PropTypes.func.isRequired
}

export default GuestName;
