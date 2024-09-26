import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState();
  const [Quantity, setQuantity] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  console.log(item);

  function handleAddItem() {
    if (!item || !Quantity) {
      alert("Please enter item and quantity");
      return;
    }
    const newItem = {
      item: item,
      quantity: Quantity,
    };

    setCartItems([...cartItems, newItem]); //problem

    setItem("");
    setQuantity("");
  }

  function handleCheckout() {
    setCartItems([]);
    setIsCheckedOut(true);
  }

  return (
    <div>
      <h1>Add Items to shop: </h1>
      <div id="data">
        <label>Item Name: </label>
        <input
          placeholder="kitkat"
          type="text"
          onChange={(e) => setItem(e.target.value)}
        />

        <label>Quantity: </label>
        <input
          placeholder="2"
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddItem}>Add item</button>

      <div>
        <h3>Cart:</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
          {cartItems.map((cartItem, index) => (
            <tr key={index}>
              <td>{cartItem.item}</td>
              <td>{cartItem.quantity}</td>
            </tr>
          ))}
        </table>

        {cartItems.length === 0 && <div>Cart is empty</div>}
      </div>

      {cartItems.length > 0 && (
        <button onClick={handleCheckout}>Checkout</button>
      )}

      {isCheckedOut && (
        <div id="checkout-message">You have checked out successfully</div>
      )}
    </div>
  );
}

export default App;
