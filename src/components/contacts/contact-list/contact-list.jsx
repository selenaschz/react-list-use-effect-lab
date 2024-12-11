import usersData from "../../../data/users.json"
import { useEffect, useState } from "react";
import ContactItem from "../contact-item/contact-item"

function ContactList() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        setContacts(usersData);
    }, [] )

    return (
        <div className="d-flex flex-column gap-4">
            { contacts.map( contact => (
                <ContactItem key= {contact.id} contact= { contact } />
            ))}
        </div>
    )
}

export default ContactList;

// "id": "ff5e543d-c211-4037-b7ad-d9f535de23f4",
//     "name": "Roser Pantoja Flores",
//     "email": "roser_pantojaflores38@hotmail.com",
//     "phoneNumber": "+34917337344",
//     "gender": "female",
//     "birthday": "1995-08-20T00:39:51.136Z",