import React from "react";
import {Media, Col} from "react-bootstrap";
import './contactcard.css';

const ContactCard = (props) => {
    return(

<Col xs={12}>

<Media id={props.contact.id} onClick={props.contactDetailOnClick}>

<Media.Left>
  <img width={75} height={75} src={props.contact.smallImageURL} alt="thumbnail" />
</Media.Left>

<Media.Left>
    {(props.contact.isFavorite === false) ? <img width={20} height={20} src={require('../../images/Favorite-Star-False/Favorite-False.png')}  alt="star-false" /> : <img width={20} height={20} src={require('../../images/Favorite-Star-True/Favorite-True.png')}  alt="star-true" />} 
</Media.Left>

<Media.Left>
  <Media.Heading>{props.contact.name}</Media.Heading>
  <p>
  {props.contact.companyName}
  </p>
</Media.Left>

</Media>

</Col>
    )
}

export default ContactCard;