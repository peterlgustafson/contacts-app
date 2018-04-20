import React from "react";
import { Media, Panel } from "react-bootstrap";
import './contactdetail.css';

const ContactDetail = (props) => {
    return (
        <Panel>
            <Panel.Heading>
                <button id="backButton" onClick={props.detailSwitch}> Back to Contacts</button>
                {(props.contact.isFavorite === false) ? <img width={16} height={16} src={require('../../images/Favorite-Star-False/Favorite-False.png')} alt="star-false" onClick={props.contactFavoriteOnClick} /> : <img width={16} height={16} src={require('../../images/Favorite-Star-True/Favorite-True.png')} alt="star-true" onClick={props.contactFavoriteOnClick} />}
            </Panel.Heading>

            <Media>
                <img width={200} height={200} src={props.contact.largeImageURL} alt="largethumbnail" />
            </Media>

            <h3>{props.contact.name}</h3>
            <h4>{props.contact.companyName}</h4>
            <hr />
            <Panel.Body>
                <div>
                    <label>Home Phone:</label>
                    <p>
                        {props.contact.phone.home}
                    </p>
                </div>
                <hr />
                <div>
                    <label>Mobile Phone:</label>
                    <p>
                        {props.contact.phone.mobile}
                    </p>
                </div>
                <hr />
                <div>
                    <label>Work Phone:</label>
                    <p>
                        {props.contact.phone.work}
                    </p>
                </div>
                <hr />
                <label>Address:</label>
                <p>
                    {props.contact.address.street}
                </p>
                <p>
                    {props.contact.address.city}
                    <span>
                        {props.contact.address.state}
                    </span>
                    <span>
                        {props.contact.address.country}
                    </span>
                    <span>
                        {props.contact.address.zipCode}
                    </span>
                </p>
                <hr />
                <div>
                    <label>Birthdate:</label>
                    <p>
                        {props.contact.birthdate}
                    </p>
                    <hr />
                </div>
                <div>
                    <label>Email:</label>
                    <p>
                    {props.contact.emailAddress}
                    </p>
                    </div>
            </Panel.Body>
        </Panel>
    )
}

export default ContactDetail;