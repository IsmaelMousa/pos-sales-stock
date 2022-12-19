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
    <div className>
      <div className>
        <div className>
          <table>
            <thead>
              <tr>
                <th className>Name</th>
                <th className>Qty</th>
                <th className>Price</th>
                <th className>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, index) => (
                <tr key={index}>
                  <td className>{item.name}</td>
                  <td>1</td>
                  <td>{item.price}</td>
                  <td onClick={() => DeleteItem(item)} className>❌</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className>
          <hr />
          <div className>Total:{total}$</div>
          <hr />
        </div>
      </div>
      <div className>
        <button onClick={() => PrintCart()}>Pay</button>
        <button onClick={() => DeleteCart()}>Cancel</button>
      </div>
    </div>
  );
}
export default Cart;
