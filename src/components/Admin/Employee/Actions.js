const Actions = ({
  contact,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr className="tr">
      <td className="td">{contact.name}</td>
      <td className="td">{contact.phone}</td>
      <td className="td">{contact.email}</td>
      <td className="td">{contact.address}</td>
      <td className="td">{contact.rank}</td>
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

export default Actions;
