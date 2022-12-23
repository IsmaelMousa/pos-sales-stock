import React from "react";

const EditRow = ({ handleEditPostForm, products }) => {
  return (
    <>
      {products.map((product) => (
        <tr key={product.id} className="text-center">
          <td>{product.category}</td>
          <td>{product.subCategory}</td>
          <td>{product.productName}</td>
          <td>{product.costPrice}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>
            <button
              type="button"
              className=" btn btn-outline-primary ml-auto mb-2"
              data-bs-toggle="modal"
              data-bs-target="#editModalForm"
              onClick={(set) => handleEditPostForm(set, product)} 
            >
            Edit <i className="fa-solid fa-pen"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default EditRow;
