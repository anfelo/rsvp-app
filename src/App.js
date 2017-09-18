import React, { Component } from 'react';
import GuestList from './GuestList';
import AddGuestForm from './AddGuestForm';

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
  //getAttendingGuests = () =>
  //getConfirmedGuests = () =>

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <AddGuestForm 
          pendingGuest={this.state.pendingGuest}
          addGuest={this.addGuest}
          handleFormInputChange={e => this.handleFormInputChange(e.target.value)}/>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input 
              type="checkbox" 
              onChange={this.toggleFilter}
              checked={this.state.isFiltered}/> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList 
          guests={this.state.guests} 
          isFiltered={this.state.isFiltered}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}/>
      </div>
    </div>
    );
  }
}

export default App;
