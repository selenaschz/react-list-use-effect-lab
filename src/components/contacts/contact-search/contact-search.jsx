function ContactSearch({ filter, onFilter }) {
    const onFilterName = event => {
        const { name, value } = event.target  //Destructuring name, value from the input
        onFilter({...filter, [name]: value}) //Pass the new filter to Home (parent) -> Initial filter + name: value
    }
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa fa-search" aria-hidden="true"></i>
      </span>
      <input className="form-control" placeholder="Find by name..." type="text" name="name" onChange={onFilterName}></input>
    </div>
  )
}

export default ContactSearch