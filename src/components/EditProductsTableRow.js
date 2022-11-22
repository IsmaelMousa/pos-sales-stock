const EditProductsTableRow = ({
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
          placeholder="Category"
          name="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Sub Category"
          name="subCategory"
          value={editFormData.subCategory}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Product"
          name="productName"
          value={editFormData.productName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
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
      <td>
        <input
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
      <td>
        <input
          type="number"
          min="1"
          required="required"
          placeholder="Quantity"
          name="quantity"
          value={editFormData.quantity}
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

export default EditProductsTableRow;