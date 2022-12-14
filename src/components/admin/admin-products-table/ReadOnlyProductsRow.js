const ReadOnlyProductsRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr className="tr">
      <td className="td">{contact.category}</td>
      <td className="td">{contact.subCategory}</td>
      <td className="td">{contact.productName}</td>
      <td className="td">{contact.costPrice}</td>
      <td className="td">{contact.price}</td>
      <td className="td">{contact.quantity}</td>
      <td className="td">
        <button
          type="button"
          className="btn"
          id="btn"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn"
          id="btn"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyProductsRow;
