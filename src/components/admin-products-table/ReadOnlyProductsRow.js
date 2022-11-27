const ReadOnlyProductsRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.category}</td>
      <td>{contact.subCategory}</td>
      <td>{contact.productName}</td>
      <td>{contact.costPrice}</td>
      <td>{contact.price}</td>
      <td>{contact.quantity}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyProductsRow;