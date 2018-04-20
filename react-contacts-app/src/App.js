import React, { Component } from 'react';
import ContactCard from './components/contactlist';
import ContactDetail from './components/contactdetail';
import { Grid, Panel } from "react-bootstrap";
import './App.css';

//Global Variables for API Fetch & Sorted Arrays

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const contactsAPI = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';

let contactFavoritesArray = [];
let contactNotFavoritesArray = [];

//Primary App Component

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
    //Fetch API Call - Needed to add proxyurl to get around Cors issue
    fetch(proxyurl + contactsAPI) 
      .then(response => response.json())
      .then(contents =>
        contents.map(
          (contact) => {
            if (contact.isFavorite === true) {
              contactFavoritesArray.push(contact)
              console.log(contactFavoritesArray);
            } else {
              contactNotFavoritesArray.push(contact)
            }
          }
        )
      )
      .then(() => {
        //Sorting Contact Favorites Array Alphabetically
        contactFavoritesArray.sort(function (a, b) {

          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();

          let sortedName;

          if (nameA < nameB) {
            sortedName = -1;
          } else if (nameA === nameB) {
            sortedName = 0;
          } else {
            sortedName = 1;
          };
          return sortedName;
        });
        
        //Sorting Main Contacts Array Alphabetically
        contactNotFavoritesArray.sort(function (a, b) {

          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();

          let sortedName;

          if (nameA < nameB) {
            sortedName = -1;
          } else if (nameA === nameB) {
            sortedName = 0;
          } else {
            sortedName = 1;
          };
          return sortedName;
        });
      }
      )
      .then(() => {
        this.setState({ contactFavorites: contactFavoritesArray });
        this.setState({ contactList: contactNotFavoritesArray });
      })

      .catch(() => console.log("Can’t access " + contactsAPI + " response. Blocked by browser?"))
  }

  //Method to Render Selected Contact Detailed Information
  contactDetailOnClick = (event) => {
    const selectedContact = event.target.parentElement.parentElement.id;
    const allContacts = [...this.state.contactList, ...this.state.contactFavorites];
    const selectedContactDetail = allContacts.find(function (contact) { return contact.id === selectedContact; });
    console.log(selectedContactDetail);
    if (selectedContactDetail !== undefined) {
      this.setState({ cardDetail: selectedContactDetail });
      this.setState({ cardSelected: true });
    }
  }

  //Couldn't get Method working to Favorite/Unfavorite Contacts

  // contactFavoriteOnClick = (event) => {
  //   const selectedContactFavorite = event.target.parentElement.parentElement.id;
  //   this.setState({ isFavorite: !this.isFavorite });

  detailSwitch = (event) => {
    this.setState({ cardSelected: false });
  }

  render() {
    return (
      <div className="Contacts-App">
        <Grid>
          {(this.state.cardSelected) ? <ContactDetail detailSwitch={this.detailSwitch} contactFavoriteOnClick={this.contactFavoriteOnClick} contact={this.state.cardDetail} /> :
            <div>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h1" id="contactsHeader">Contacts</Panel.Title>
                </Panel.Heading>
              </Panel>

              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Favorite Contacts</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  {this.state.contactFavorites.map(
                    (contact) =>
                      <ContactCard contact={contact} contactDetailOnClick={this.contactDetailOnClick} />
                  )
                  }
                </Panel.Body>
              </Panel>

              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Other Contacts</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  {this.state.contactList.map(
                    (contact) =>
                      <ContactCard contact={contact} contactDetailOnClick={this.contactDetailOnClick} />
                  )
                  }
                </Panel.Body>
              </Panel>

            </div>
          }
        </Grid>
      </div>
    );
  }
}

export default App;
