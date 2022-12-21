import React from "react";
import "./Cart.css";

function Cart({ products, empty, remove }) {
  let total = products.reduce(
    (amount, item) => amount + parseInt(item.price),0
  );
  const DeleteCart = () => {
    empty();
  };
  const PrintCart = () => {
    window.print();
  };
  const DeleteItem = (item) => {
    remove(item);
  };

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
              {products?.map((item, index) => (
                <tr key={index}>
                  <td className="items-name">{item.name}</td>
                  <td className="items-qty">1</td>
                  <td className="items-price">{item.price}</td>
                  <td onClick={() => DeleteItem(item)} className="remove-icon">❌</td>
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
        <button onClick={() => PrintCart()}className="btn btn-outline-dark">Pay</button>
        <button onClick={() => DeleteCart()}className="btn btn-outline-danger">Cancel</button>
      </div>
    </div>
  );
}
export default Cart;
