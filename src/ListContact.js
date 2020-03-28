import React, { Component } from 'react'

class ListContact extends Component {
  render(){
    console.log("Props", this.props)
      return(
          <ol className="contact-list">
             {this.props.contacts.map((contact) => 
               <li key={contact.id} className="contact-list-item">
                   <div className="contact-avatar" style={{ background: `url(${contact.avatarURL})`}}></div>
                   <div className="contact-details">
                       <p>{contact.name}</p>
                       <p>{contact.handle}</p>
                   </div>
                   <button className="contact-remove">
                       Remove
                   </button>
               </li>
             )}
          </ol>
      )
  }
}

export default ListContact