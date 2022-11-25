const EditEmployeeTableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Name"
            name="name"
            value={editFormData.name}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Phone"
            name="phone"
            value={editFormData.phone}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="email"
            required="required"
            placeholder="Email"
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Address"
            name="address"
            value={editFormData.address}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Rank"
            name="rank"
            value={editFormData.rank}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };
  
  export default EditEmployeeTableRow;