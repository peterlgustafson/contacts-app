import React, { Component } from "react";
import {Media, Col} from "react-bootstrap";

const ContactDetail = (props) => {
    return(
<Col xs={12}>
<Media>
<Media.Left>
  <img width={128} height={128} src={props.contact.largeImageURL} alt="largethumbnail" />
</Media.Left>
<Media.Left>
  <Media.Heading>{props.contact.name}</Media.Heading>
  <p>
  {props.contact.companyName}
  {props.contact.phone.home}
  {props.contact.phone.mobile}
  {props.contact.phone.work}
  {props.contact.address.street}
  {props.contact.address.city}
  {props.contact.address.state}
  {props.contact.address.country}
  {props.contact.address.zipCode}
  </p>
</Media.Left>
</Media>
</Col>
    )
}

export default ContactDetail;