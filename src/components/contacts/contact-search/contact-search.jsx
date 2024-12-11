function ContactSearch({ filter, onFilter }) {
    const onFilterName = event => {
        const { name, value } = event.target  //Destructuring name, value from the input
        onFilter({...filter, [name]: value}) //Pass the new filter to Home (parent) -> Initial filter + name: value
    }
  return (
    <div className="mb-4">
        <input placeholder="Find by name..." name="name" onChange={onFilterName}></input>
    </div>
  )
}

export default ContactSearch