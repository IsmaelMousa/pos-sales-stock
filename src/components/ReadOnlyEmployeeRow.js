const ReadOnlyEmployeeRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>{contact.address}</td>
        <td>{contact.rank}</td>
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
  
  export default ReadOnlyEmployeeRow;