import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useState} from "react";
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
    setCounts(Array(items.length).fill(1));
    setTotal(0);
  }

  return (
      <>
        <div className="text-center overflow-hidden">
          {/*<h1 className="m-3">Shopikart</h1>*/}
          <img className="" src="../public/logo.png" style={{height:"80px"}}/>
          <div className="row align-items-start">
            <div className="col-8 p-0 m-0" style={{width:"70%"}}>
              <div className="row m-auto">
                {items.map((item, index) => (
                    <div key={index} className="col-6" style={{paddingRight: "0"}}>
                      <div className="d-flex m-2 p-2 text-start overflow-scroll border border-1"
                           style={{height: "25vh"}}>
                        <img className="object-fit-contain" src={item.image} alt=""
                             style={{maxHeight: "100%", maxWidth: "50%"}}/>
                        <div className="p-2 w-100">
                          <h4>{item.title}</h4>
                          <p className="fw-light">{item.description}</p>
                          <div className="d-flex justify-content-between">
                            <h5>${item.price}</h5>
                            <button className="btn btn-warning btn-sm" onClick={() => addToCart(item)}>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>


            <div className="col-3 bg-body-tertiary m-auto p-0" style={{border:"2px"}}>
              <h3 className="bg-dark-subtle p-2">Cart</h3>
              <div style={{height:"55vh"}}>
              {cart.map((item, index) => (
                <div className="w-100" key={index}>
                  <div className="d-flex justify-content-between align-items-center m-2" style={{ border: "1px solid black", padding: "0.5rem" }}>
                    <h6 className="m-0 text-start">{item.title}<br /><span>${item.price}</span></h6>
                    <div className="d-flex bg-light-subtle" style={{}}>
                      <button className="m-0" onClick={() => decrement(index)}> -</button>
                      <p className="m-0">&nbsp;&nbsp;{counts[index]}&nbsp;&nbsp;</p>
                      <button className="m-0" onClick={() => increment(index)}> +</button>
                      <button className="m-0" onClick={() => removeFromCart(index)}>R</button>
                    </div>
                  </div>
                </div>
              ))}
                </div>
              <div className=" text-center">
                <h4>Total: ${total}</h4>
                <button className="btn btn-outline-success w-75">Checkout</button>
                <p className="m-2 text-danger" onClick={clearCart}>Clear Cart</p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;