import React, { useState, useEffect } from "react";

function ShoppingCart() {
  const [CartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  function deleteFromCart(id) {
    localStorage.setItem(
      "cart",
      JSON.stringify(CartItems.filter((item) => item.itemId !== id))
    );
  }
  function emptyCart() {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newItem = JSON.parse(localStorage.getItem("cart"));
      if (newItem !== CartItems) {
        setCartItems(newItem);
        setTotal(
          newItem.reduce(
            (amount, item) =>
              amount + parseInt(item.itemPrice) * parseInt(item.quantity),
            0
          )
        );
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {}, [total]);
  function createInvoiceTable(data) {
    let tableHTML = "<table>";
    tableHTML += "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>";
    for (const item of data) {
      tableHTML += `<tr><td>${item.itemName}</td><td>${item.itemPrice}</td><td>${item.quantity}</td></tr>`;
    }
    tableHTML +=
      `
    <tr><td><strong>Total</strong></td><td>` +
      total +
      `$</td><td></td></tr>
    `;
    tableHTML += "</table>";
    return tableHTML;
  }

  function PrintCart() {
    var printWindow = window.open("", "", "height=400,width=800");

    printWindow.document.write(`<html><head><title>Print</title></head><body>`);
    printWindow.document.write(createInvoiceTable(CartItems));
    printWindow.document.write("</body></html>");

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }

  return (
    <div className="container col-4 bg-light p-1">
      <div className="p-2 shadow ">
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {CartItems?.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.itemPrice}</td>
                <td onClick={() => deleteFromCart(item.itemId)}>
                  <i class="fa-solid text-danger text-hover fa-xl fa-ban"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="d-flex justify-content-center">
          <b>Total: {total}$</b>
        </div>
        <hr />
      </div>
      <br></br>
      <div className="d-flex p-3 justify-content-between shadow">
        <button onClick={PrintCart} className="btn btn-dark border-0">
          <b>
            Print <i class="fa-solid fa-print fa-xl"></i>
          </b>
        </button>
        <button onClick={emptyCart} className="btn btn-danger border-0">
          <b>
            Cancel <i class="fa-solid fa-trash fa-xl"></i>
          </b>
        </button>
      </div>
    </div>
  );
}
export default ShoppingCart;
