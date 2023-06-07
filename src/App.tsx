import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import items from "./items";

function App() {
  interface Item {
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  }

  const [cart, setCart] = useState<Item[]>([]);
  const [counts, setCounts] = useState<number[]>(Array(items.length).fill(1));
  const [total, setTotal] = useState(0);

  function addToCart(item: Item) {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItemIndex !== -1) {
      const updatedCounts = [...counts];
      updatedCounts[existingItemIndex] += 1;
      setCounts(updatedCounts);
    } else {
      setCart([...cart, item]);
      setCounts([...counts, 1]);
    }
    setTotal(total + item.price);
  }

  function increment(index: number) {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
    setTotal(total + cart[index].price);
  }

  function decrement(index: number) {
    const newCounts = [...counts];
    newCounts[index] -= 1;

    if (newCounts[index] === 0) {
      removeFromCart(index);
    } else {
      setCounts(newCounts);
      setTotal(total - cart[index].price);
    }
  }

  function removeFromCart(index: number) {
    const newCounts = [...counts];
    const newCart = [...cart];
    const removedItemCount = newCounts[index];
    newCounts.splice(index, 1);
    newCart.splice(index, 1);
    setCounts(newCounts);
    setCart(newCart);
    setTotal(total - cart[index].price * removedItemCount);
  }

  function clearCart() {
    setCart([]);
    setCounts(Array(items.length).fill(0));
    setTotal(0);
  }

  return (
    <>
      <div className="text-center p-5">
        <div className="row align-items-start">
          <div className="col bg-secondary-subtle">
            <h1>Items Section</h1>
            {items.map((item, index) => (
              <div key={index} className="d-flex m-4 bg-light p-2">
                <img src={item.image} alt="" />
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <h2>{item.price}</h2>
                  <button className="btn btn-warning" onClick={() => {addToCart(item)}}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="col bg-warning-subtle">
            <h1>Cart Section</h1>
            {cart.map((item, index) => (
              <div key={index}>
                <div className="d-flex">
                  <p>{item.title}</p>
                  <button className="btn btn-secondary" onClick={() => decrement(index)}> - </button>
                  <h1>{counts[index]}</h1>
                  <button className="btn btn-info" onClick={() => increment(index)}> + </button>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
            <h2>Total: ${total}</h2>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;