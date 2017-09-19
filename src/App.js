import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: true
      }
    ],
  }

  toggleGuestPropertyAt = (property, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };  
        }
        return guest;
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  removeGuestAt = index => 
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
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

  addGuest = () => 
    this.setState({
      pendingGuest: "",
      guests: [
        ...this.state.guests,
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        }
      ],
    });

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
