import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/contactlist';
import ContactDetail from './components/contactdetail';
import { Row, Grid } from "react-bootstrap";
// import contactdetail from './components/contactdetail/contactdetail';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const contactsAPI = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contactList: [],
      contactFavorites: [],
      cardDetail: {},
      cardSelected: false
    }
  }

  componentWillMount() {

    fetch(proxyurl + contactsAPI) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(contents => 
        contents.map(
          (contact) => {
            if (contact.isFavorite === true) {
              this.setState({ contactFavorites: [...this.state.contactFavorites, contact] })
            } else {
              this.setState({ contactList: [...this.state.contactList, contact] })
            }
          }
        )
      )
      .catch(() => console.log("Can’t access " + contactsAPI + " response. Blocked by browser?"))
  }

  contactDetailOnClick = (event) => { 
    const selectedContact = event.target.parentElement.parentElement.id;
    const allContacts = [...this.state.contactList, ...this.state.contactFavorites];
    const selectedContactDetail = allContacts.find (function (contact) { return contact.id === selectedContact; }); 
    console.log(selectedContactDetail);
    if (selectedContactDetail != undefined) {
    this.setState({cardDetail: selectedContactDetail});
    this.setState({cardSelected: true});
    // console.log(event.target.parentElement.parentElement.id);
    // debugger;
    }
  }

  detailSwitch = (event) => { 
    this.setState({cardSelected: false});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contacts</h1>
        </header>
        <Grid>
          {(this.state.cardSelected) ? <ContactDetail detailSwitch={this.detailSwitch} contact={this.state.cardDetail} /> :  
          <div>
          <Row>
            <h4>Favorite Contacts</h4>
            {this.state.contactFavorites.map(
              (contact) =>
                <ContactCard contact={contact} contactDetailOnClick={this.contactDetailOnClick} />
            )
          }
            </Row>
          <Row>
          <h4>Other Contacts</h4>

            {this.state.contactList.map(
              (contact) =>
                <ContactCard contact={contact} contactDetailOnClick={this.contactDetailOnClick}/>
            )
            }

          </Row>
          </div>
        } 

        </Grid>
      </div>
    );
  }
}

export default App;
