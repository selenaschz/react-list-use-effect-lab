import dayjs from "dayjs"

function ContactItem({ contact }) {
    const { name, email, phoneNumber, gender, birthday } = contact
    return (
        <div className="list-unstyled">
            <li> {name}</li>
            <li>{email}</li>
            <li>{phoneNumber}</li>
            <li>{gender}</li>
            <li>{dayjs(birthday).format("MMM DD, YYYY")}</li>
        </div>
    );
}

export default ContactItem;