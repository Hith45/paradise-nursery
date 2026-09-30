import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleIncrease = (item) => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
            })
        );
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                })
            );
        }
    };

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    };

    const handleCheckout = () => {
        alert("Coming Soon!");
    };

    return (
        <div className="cart-page">

            <nav className="product-navbar">

                <h2>Paradise Nursery</h2>

                <div className="product-nav-links">
                    <a href="/">Home</a>
                    <a href="/#plants">Plants</a>
                    <a href="/cart">Cart</a>
                </div>

            </nav>


            <main className="cart-container">

                <h1>Shopping Cart</h1>

                {cartItems.length === 0 ? (

                    <div className="empty-cart">

                        <h2>Your cart is empty</h2>

                        <a href="/#plants">
                            Continue Shopping
                        </a>

                    </div>

                ) : (

                    <>

                        <div className="cart-items">

                            {cartItems.map((item) => (

                                <div
                                    className="cart-item"
                                    key={item.id}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />


                                    <div className="cart-item-details">

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <p>
                                            Unit Price: ${item.price}
                                        </p>

                                        <p>
                                            Quantity: {item.quantity}
                                        </p>

                                        <p>
                                            Plant Total: $
                                            {(item.price * item.quantity).toFixed(2)}
                                        </p>

                                    </div>


                                    <div className="quantity-controls">

                                        <button
                                            onClick={() =>
                                                handleDecrease(item)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                handleIncrease(item)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>


                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            handleDelete(item.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            ))}

                        </div>


                        <div className="cart-summary">

                            <h2>
                                Total Amount: $
                                {totalAmount.toFixed(2)}
                            </h2>

                            <button
                                className="checkout-button"
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>

                            <a
                                className="continue-shopping"
                                href="/#plants"
                            >
                                Continue Shopping
                            </a>

                        </div>

                    </>

                )}

            </main>

        </div>
    );
}

export default CartItem;