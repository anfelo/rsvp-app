import React from 'react';
import PropTypes from 'prop-types';
import AddGuestForm from './AddGuestForm';

const Header = props => 
	<header>
		<h1>RSVP</h1>
		<p>A Treehouse App</p>
		<AddGuestForm 
			pendingGuest={props.pendingGuest}
			addGuest={props.addGuest}
			handleFormInputChange={props.handleFormInputChange}/>
	</header>;

Header.PropTypes = {
	pendingGuest: PropTypes.string.isRequired,
	addGuest: PropTypes.func.isRequired,
	handleFormInputChange: PropTypes.func.isRequired
}

export default Header;