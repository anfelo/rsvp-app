import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import GuestList from './GuestList';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props =>
	<div className="main">
		<div>
			<h2>Invitees</h2>
			<ConfirmedFilter 
				toggleFilter={props.toggleFilter}
				isFiltered={props.isFiltered}/>
		</div>
		<Counter 
			numberAttending={props.numberAttending}
			numberUnconfirmed={props.numberUnconfirmed}
			totalInvited={props.totalInvited}/>
		<GuestList 
			guests={props.guests} 
			isFiltered={props.isFiltered}
			toggleConfirmationAt={props.toggleConfirmationAt}
			toggleEditingAt={props.toggleEditingAt}
			setNameAt={props.setNameAt}
			removeGuestAt={props.removeGuestAt}
			pendingGuest={props.pendingGuest}/>
	</div>;

MainContent.PropTypes = {
	toggleFilter: PropTypes.func.isRequired,
	isFiltered: PropTypes.bool.isRequired,
	numberAttending: PropTypes.number,
	numberUnconfirmed: PropTypes.number,
	totalInvited: PropTypes.number,
	guests: PropTypes.array.isRequired,
	toggleConfirmationAt: PropTypes.func.isRequired,
	toggleEditingAt: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
	removeGuestAt: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired
}

export default MainContent;