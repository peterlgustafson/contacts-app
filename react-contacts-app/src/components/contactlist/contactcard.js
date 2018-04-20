import React, { Component } from "react";
import {Media, Col} from "react-bootstrap";

const ContactCard = (props) => {
    return(
//         <Col m={7} s={12}>
//         <Card className='small'
//         horizontal
//   header={<CardTitle image={props.contact.smallImageURL}></CardTitle>}
//   actions={[<a href='#'><img src={require('../../images/Favorite-Star-False/Favorite-False.png')} alt="star-false"/></a>]}>
//   <p><strong>{props.contact.name}</strong></p>
//   <p>{props.contact.companyName}</p>
// </Card>
// </Col>
<Col xs={12}>
<Media id={props.contact.id} onClick={props.contactDetailOnClick}>
<Media.Left>
  <img width={64} height={64} src={props.contact.smallImageURL} alt="thumbnail" />
</Media.Left>
<Media.Left>
    {(props.contact.isFavorite === false) ? <img width={16} height={16} src={require('../../images/Favorite-Star-False/Favorite-False.png')}  alt="star-false" /> : <img width={16} height={16} src={require('../../images/Favorite-Star-True/Favorite-True.png')}  alt="star-true" />} 
  
</Media.Left>
<Media.Left>
  <Media.Heading>{props.contact.name}</Media.Heading>
  <p>
  {props.contact.companyName}
  </p>
</Media.Left>
</Media>
</Col>
    //    <div>
    //         <div className="col-xs-4 col-sm-3">
    //             <img src={props.contact.smallImageURL} alt={props.contact.name} className="img-responsive img-circle" />
    //         </div>
    //         <div className="col-xs-8 col-sm-9">
    //             <span>{props.contact.name}</span><br/>
                
    //             <span title={props.contact.companyName}></span>
    //             <span>{props.contact.companyName}</span><br/>
                
    //         </div>
    //         <div className="clearfix"></div>
    //    </div>
        
    )
}

export default ContactCard;