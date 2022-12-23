import React, { useState, useEffect} from "react";
import "./Cart.css";

function Cart() {
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
    <div className="cart">
      <div className="cart-info">
        <div className="cart-table">
          <table className="table">
            <thead>
              <tr>
                <th className="items-name">Name</th>
                <th className="items-qty">Qty</th>
                <th className="items-price">Price</th>
                <th className="remove-icon">Action</th>
              </tr>
            </thead>
            <tbody>
              {CartItems?.map((item, index) => (
                <tr key={index}>
                  <td className="items-name">{item.itemName}</td>
                  <td className="items-qty">{item.quantity}</td>
                  <td className="items-price">{item.itemPrice}</td>
                  <td
                    onClick={() => deleteFromCart(item.itemId)}
                    className="remove-icon"
                  >
                    ❌
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="total">
          <hr />
          <div className="total-price">Total:{total}$</div>
          <hr />
        </div>
      </div>
      <div className="cart-actions">
        <button onClick={PrintCart} className="btn btn-outline-dark">
          Pay
        </button>
        <button onClick={emptyCart} className="btn btn-outline-danger">
          Cancel
        </button>
      </div>
    </div>
  );
}
export default Cart;
