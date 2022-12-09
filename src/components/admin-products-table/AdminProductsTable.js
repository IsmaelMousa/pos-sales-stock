import { nanoid } from "nanoid";
import AdminProductsData from "./AdminProductsData.json";
import ReadOnlyProductsRow from "./ReadOnlyProductsRow";
import EditProductsTableRow from "./EditProductsTableRow";
import { useState, Fragment } from "react";

const AdminProductsTable = () => {
  const [contacts, setContacts] = useState(AdminProductsData);
  const [addFormData, setAddFormData] = useState({
    category: "",
    subCategory: "",
    productName: "",
    costPrice: "",
    price: "",
    quantity: "",
  });

  const [editFormData, setEditFormData] = useState({
    category: "",
    subCategory: "",
    productName: "",
    costPrice: "",
    price: "",
    quantity: "",
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
      category: addFormData.category,
      subCategory: addFormData.subCategory,
      productName: addFormData.productName,
      costPrice: addFormData.costPrice,
      price: addFormData.price,
      quantity: addFormData.quantity,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      category: editFormData.category,
      subCategory: editFormData.subCategory,
      productName: editFormData.productName,
      costPrice: editFormData.costPrice,
      price: editFormData.price,
      quantity: editFormData.quantity,
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
      category: contact.category,
      subCategory: contact.subCategory,
      productName: contact.productName,
      costPrice: contact.costPrice,
      price: contact.price,
      quantity: contact.quantity,
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
      <h4 className="h4 text-center">Add New Product</h4>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className="col-2 text-center"
          type="text"
          name="category"
          required="required"
          placeholder="Category"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="text"
          name="subCategory"
          required="required"
          placeholder="Sub Category"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="text"
          name="productName"
          required="required"
          placeholder="Product"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="number"
          min="1"
          max="1000"
          name="costPrice"
          required="required"
          placeholder="Cost Price"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="number"
          name="price"
          min="2"
          max="10000"
          required="required"
          placeholder="Price"
          onChange={handleAddFormChange}
        />
        <input
          className="col-2 text-center"
          type="number"
          min="1"
          name="quantity"
          required="required"
          placeholder="Quantity"
          onChange={handleAddFormChange}
        />
        <div className="text-end">
          <button type="submit" className="btn">
            Add
          </button>
          <button type="reset" className="btn">
            Reset
          </button>
        </div>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">Category</th>
              <th scope="col">Sub-Category</th>
              <th scope="col">Product</th>
              <th scope="col">Cost Price</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditProductsTableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyProductsRow
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

export default AdminProductsTable;
