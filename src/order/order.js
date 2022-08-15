import classes from "./order.module.css";
import { useState } from "react";
const Order = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [isRender, setIsRender] = useState(true);
  let fullAmount = 0;

  const orderList = [];

  const showOrder = () => {
    setIsShow(!isShow);
  };

  const addAmountHandler = (e) => {
    e.amount++;
    setIsRender(!isRender);
  };

  const removeAmountHandler = (e) => {
    e.amount--;

    setIsRender(!isRender);
  };

  const checkOutHanlder = () => {
    alert("thank you for choosing us");
  };

  props.order.forEach((order) => {
    fullAmount += order.price * order.amount;
    console.log(order.price);
  });

  props.order.map((order) => {
    if (order.amount !== 0) {
      orderList.push(order);
    }
  });
  return (
    <div className={classes.orderBlock}>
      {!isShow && (
        <div className={classes.order} onClick={showOrder}>
          <div className={classes.basket}></div>
        </div>
      )}
      {isShow && (
        <div>
          <button className={classes.close} onClick={showOrder}>
            <span>X</span>
          </button>
          <div className={classes.cart}>
            <div className={classes.logo}></div>
            <div className={classes.custom}>
              <h3>Cart</h3>
            </div>
            <div className={classes.content}>
              {orderList.length !== 0 ? (
                <div>
                  {orderList.map((order) => {
                    return (
                      <div>
                        <div className={classes.line}> </div>
                        <div
                          style={{ backgroundImage: `url(${order.img})` }}
                          className={classes.img}
                        ></div>
                        <div className={classes.title}>
                          <h6 className={classes.text1}>{order.order}</h6>
                          <p className={classes.text2}>
                            Quantity: {order.amount}
                          </p>
                        </div>
                        <div className={classes.amount}>
                          <p className={classes.price}>
                            {(order.price * order.amount).toFixed(2)}
                          </p>
                          <div className={classes.button}>
                            <button
                              onClick={() => {
                                addAmountHandler(order);
                              }}
                            >
                              +
                            </button>
                            <button
                              onClick={() => {
                                removeAmountHandler(order);
                              }}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>Add some products in the cart :)</p>
              )}
            </div>
          </div>
          <div className={classes.submit}>
            <p className={classes.subtotal}>SUBTOTAL</p>
            <p className={classes.fullAmount}>$ {fullAmount.toFixed(2)}</p>
            <button onClick={checkOutHanlder}>CHEKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
