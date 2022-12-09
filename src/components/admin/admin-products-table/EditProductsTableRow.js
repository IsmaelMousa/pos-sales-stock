const EditProductsTableRow = ({
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
          placeholder="Category"
          name="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="text"
          required="required"
          placeholder="Sub Category"
          name="subCategory"
          value={editFormData.subCategory}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="text"
          required="required"
          placeholder="Product"
          name="productName"
          value={editFormData.productName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="number"
          min="1"
          max="1000"
          required="required"
          placeholder="Cost Price"
          name="costPrice"
          value={editFormData.costPrice}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="number"
          min="2"
          max="10000"
          required="required"
          placeholder="Price"
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <input
          className="col-12 text-center"
          type="number"
          min="1"
          required="required"
          placeholder="Quantity"
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="td">
        <button type="submit " className="btn">
          Save
        </button>
        <button type="button" className="btn" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditProductsTableRow;
