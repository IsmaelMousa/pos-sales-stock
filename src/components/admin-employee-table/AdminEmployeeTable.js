import {nanoid} from 'nanoid';
import AdminEmployeeData from '../../dummy-data/AdminEmployeeData.json';
import ReadOnlyEmployeeRow from './ReadOnlyEmployeeRow';
import EditEmployeeTableRow from "./EditEmployeeTableRow";
import { useState, Fragment } from "react";

const AdminEmployeeTable = () => {
    const [contacts, setContacts] = useState(AdminEmployeeData);
    const [addFormData, setAddFormData] = useState({
        name:'',
        phone:'',
        email:'',
        address:'',
        rank:''
    });

    const [editFormData, setEditFormData] = useState({
        name:'',
        phone:'',
        email:'',
        address:'',
        rank:''
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
        rank: addFormData.rank
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
        rank: contact.rank
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
    <div className="">
        
        <h4>Add New Employee</h4>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="name"
            required="required"
            placeholder="Name"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phone"
            required="required"
            placeholder="Phone"
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Email"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Address"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="rank"
            required="required"
            placeholder="Rank"
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
          <button type='reset'>Reset</button>
        </form>
        <form onSubmit={handleEditFormSubmit}>
        <table>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Rank</th>
                        <th>Action</th>
                    </tr>
            </thead>
            <tbody>
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