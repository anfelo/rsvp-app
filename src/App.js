import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [],
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  toggleGuestPropertyAt = (property, id) => 
    this.setState({
      guests: this.state.guests.map( guest => {
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property]
          };  
        }
        return guest;
      })
    });

  toggleConfirmationAt = id =>
    this.toggleGuestPropertyAt("isConfirmed", id);

  removeGuestAt = id => 
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleEditingAt = id =>
    this.toggleGuestPropertyAt("isEditing", id);

  setNameAt = (name, id) => 
    this.setState({
      guests: this.state.guests.map( guest => {
        if (guest.id === id) {
          return {
            ...guest,
            name
          };  
        }
        return guest;
      })
    });

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered,
    });

  handleFormInputChange = name =>
    this.setState({
      pendingGuest: name
    });

  addGuest = () => {
    const id = this.newGuestId();
    this.setState({
      pendingGuest: "",
      guests: [
        ...this.state.guests,
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        }
      ],
    });
  };
    
  getTotalInvited = () => this.state.guests.length;
  
  getAttendingGuests = () => this.state.guests.reduce(( acc, curr ) => curr.isConfirmed ? acc + 1 : acc, 0)

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header 
          pendingGuest={this.state.pendingGuest}
          addGuest={this.addGuest}
          handleFormInputChange={e => this.handleFormInputChange(e.target.value)}/>
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          totalInvited={totalInvited}
          guests={this.state.guests} 
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}/>
    </div>
    );
  }
}

export default App;
