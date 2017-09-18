import React from 'react';
import PropTypes from 'prop-types';

const AddGuestForm = props =>
	<form>
		<input 
			type="text" 
			value={props.pendingGuest} 
			placeholder="Invite Someone" 
			onChange={props.handleFormInputChange}/>
		<button type="button" name="submit" value="submit" onClick={props.addGuest}>Submit</button>
	</form>;

AddGuestForm.PropTypes = {
	pendingGuest: PropTypes.string.isRequired,
	addGuest: PropTypes.func.isRequired,
	handleFormInputChange: PropTypes.func.isRequired
}

export default AddGuestForm;