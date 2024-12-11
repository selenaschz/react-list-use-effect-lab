import dayjs from "dayjs"

function ContactItem({ contact, onDelete }) {
    const { id, name, email, phoneNumber, gender, birthday } = contact
    return (
        <div className="list-unstyled">
            <li> {name}</li>
            <li>{email}</li>
            <li>{phoneNumber}</li>
            <li>{gender}</li>
            <li>{dayjs(birthday).format("MMM DD, YYYY")}</li>
            <i className="fa fa-trash-o text-danger" role="button" aria-hidden="true" onClick={ () => onDelete(id) }> </i>
        </div>
    );
}

export default ContactItem;