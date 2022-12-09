import { nanoid } from "nanoid";
import AdminEmployeeData from "./AdminEmployeeData.json";
import ReadOnlyEmployeeRow from "./ReadOnlyEmployeeRow";
import EditEmployeeTableRow from "./EditEmployeeTableRow";
import { useState, Fragment } from "react";
import "./AdminEmployeeTable.css";

const AdminEmployeeTable = () => {
  const [contacts, setContacts] = useState(AdminEmployeeData);
  const [addFormData, setAddFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    rank: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    rank: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      phone: addFormData.phone,
      email: addFormData.email,
      address: addFormData.address,
      rank: addFormData.rank,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      phone: editFormData.phone,
      email: editFormData.email,
      address: editFormData.address,
      rank: editFormData.rank,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
      rank: contact.rank,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="container">
      <h4 className="h4-text-center">Add New Employee</h4>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className="col-2 text-center"
          type="text"
          name="name"
          required="required"
          placeholder="Name"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="text"
          name="phone"
          required="required"
          placeholder="Phone"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="email"
          name="email"
          required="required"
          placeholder="Email"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="text"
          name="address"
          required="required"
          placeholder="Address"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="text"
          name="rank"
          required="required"
          placeholder="Rank"
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn">
          Add
        </button>
        <button type="reset" className="btn">
          Reset
        </button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Rank</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditEmployeeTableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyEmployeeRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default AdminEmployeeTable;
