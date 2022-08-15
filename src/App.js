import { useState } from "react";
import classes from "./App.module.css";
import { products } from "./productsData/products";
import Order from "./order/order";

function App() {
  const [isFilterXS, setIsFilterXS] = useState(false);
  const [isFilterS, setIsFilterS] = useState(false);
  const [isFilterM, setIsFilterM] = useState(false);
  const [isFilterML, setIsFilterML] = useState(false);
  const [isFilterL, setIsFilterL] = useState(false);
  const [isFilterXL, setIsFilterXL] = useState(false);
  const [isFilterXXL, setIsFilterXXL] = useState(false);

  const [render, setRender] = useState(true);

  let isRepetition = true;

  const [order, setOrder] = useState([]);
  let orderList;

  const filterHandler = (size) =>
    products.map((product) => {
      if (product.size === size) {
        return productsRender.push(product);
      }
    });
  const checkboxXSHandler = (e) => {
    setIsFilterXS(e.target.checked);
  };
  const checkboxSHandler = (e) => {
    setIsFilterS(e.target.checked);
  };
  const checkboxMHandler = (e) => {
    setIsFilterML(e.target.checked);
  };
  const checkboxMLHandler = (e) => {
    setIsFilterM(e.target.checked);
  };
  const checkboxLHandler = (e) => {
    setIsFilterL(e.target.checked);
  };
  const checkboxXLHandler = (e) => {
    setIsFilterXL(e.target.checked);
  };
  const checkboxXXLHandler = (e) => {
    setIsFilterXXL(e.target.checked);
  };

  let productsRender = [];

  if (isFilterXS) {
    filterHandler("XS");
  }
  if (isFilterS) {
    filterHandler("S");
  }
  if (isFilterM) {
    filterHandler("M");
  }
  if (isFilterML) {
    filterHandler("ML");
  }
  if (isFilterL) {
    filterHandler("L");
  }
  if (isFilterXL) {
    filterHandler("XL");
  }
  if (isFilterXXL) {
    filterHandler("XXL");
  }

  const addOrderHandler = (e) => {
    products.forEach((product) => {
      if (order.length > 0) {
        order.map((order) => {
          if (
            order.order === product.title &&
            product.title === e.target.closest("div").children[0].innerText
          ) {
            isRepetition = false;
            return order.amount++;
          }
        });
      }
    });
    if (isRepetition) {
      products.forEach((product) => {
        if (product.title === e.target.closest("div").children[0].innerText) {
          orderList = {
            order: product.title,
            img: product.img,
            price: product.fullPrice,
            amount: product.amount,
          };
        }
      });
      setOrder([...order, orderList]);
    }

    setRender(!render);
    isRepetition = true;
  };

  return (
    <div className={classes.app}>
      <Order order={order} />
      <div className={classes.products}>
        <div className={classes.sizes}>
          <h4>Sizes:</h4>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxXSHandler}
              data-testid="checkbox"
              value="XS"
            ></input>
            <span className={classes.checkmark}>XS</span>
          </div>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxSHandler}
              data-testid="checkbox"
              value="S"
            ></input>
            <span className={classes.checkmark}>S</span>
          </div>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxMHandler}
              data-testid="checkbox"
              value="M"
            ></input>
            <span className={classes.checkmark}>M</span>
          </div>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxMLHandler}
              data-testid="checkbox"
              value="ML"
            ></input>
            <span className={classes.checkmark}>ML</span>
          </div>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxLHandler}
              data-testid="checkbox"
              value="L"
            ></input>
            <span className={classes.checkmark}>L</span>
          </div>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxXLHandler}
              data-testid="checkbox"
              value="XL"
            ></input>
            <span className={classes.checkmark}>XL</span>
          </div>
          <div className={classes.size}>
            <input
              type="checkbox"
              onChange={checkboxXXLHandler}
              data-testid="checkbox"
              value="XXL"
            ></input>
            <span className={classes.checkmark}>XXL</span>
          </div>
        </div>
        <p>16 Product(s) found</p>
        {productsRender.length !== 0 &&
          productsRender.map((product) => {
            return (
              <div
                key={product.id}
                className={`${classes.product} ${product.class}`}
              >
                <h3>{product.title}</h3>
                <h4>$ {product.price}</h4>
                <p>{product.pennies}</p>
                <button>Add to Cart</button>
              </div>
            );
          })}
        {productsRender.length === 0 &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className={`${classes.product} ${product.class}`}
              >
                <h3>{product.title}</h3>
                <h4>$ {product.price}</h4>
                <p>{product.pennies}</p>
                <button onClick={addOrderHandler}>Add to Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
