const EditEmployeeTableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="tr">
      <td className="td">
        <input
          className="col-12 text-center"
          type="text"
          required="required"
          placeholder="Name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="text"
          required="required"
          placeholder="Phone"
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="email"
          required="required"
          placeholder="Email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="text"
          required="required"
          placeholder="Address"
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="text"
          required="required"
          placeholder="Rank"
          name="rank"
          value={editFormData.rank}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <button type="submit" className="btn" id="btn">
          Save
        </button>
        <button type="button" className="btn"  id="btn" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditEmployeeTableRow;
