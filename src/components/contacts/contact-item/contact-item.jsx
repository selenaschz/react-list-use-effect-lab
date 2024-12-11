import dayjs from "dayjs"
import "./contact-item.css"

function ContactItem({ contact, onDelete }) {
    const { id, avatar, name, phoneNumber, gender, birthday, job, zodiacSign } = contact
    return (
        <div className="contact d-flex gap-2 bg-light rounded p-2">
            <img src={avatar} alt="avatar" className="avatar rounded"/>
            
            <div className="contact">
                <div className="d-flex justify-content-between">
                    <h6>{(gender === "female") ? "👩‍🦰" : "👨‍🦰"} {name}</h6>
                    <i className="fa fa-trash-o text-danger" 
                        role="button" aria-hidden="true" 
                        onClick={ () => onDelete(id) }>
                    </i>
                </div>
                <p>{`📞${phoneNumber}`}</p>
                <p>{zodiacSign}</p>
                {job && <p>{job.title}</p> }
                <p>{dayjs(birthday).format("MMM DD, YYYY")}</p>
            </div>
        </div>
    );
}

export default ContactItem;