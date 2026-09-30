import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
    {
        id: 1,
        category: "Indoor Plants",
        name: "Snake Plant",
        price: 25,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300"
    },
    {
        id: 2,
        category: "Indoor Plants",
        name: "Peace Lily",
        price: 30,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300"
    },
    {
        id: 3,
        category: "Indoor Plants",
        name: "Monstera",
        price: 35,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300"
    },
    {
        id: 4,
        category: "Indoor Plants",
        name: "ZZ Plant",
        price: 28,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300"
    },
    {
        id: 5,
        category: "Indoor Plants",
        name: "Rubber Plant",
        price: 32,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=300"
    },
    {
        id: 6,
        category: "Indoor Plants",
        name: "Aloe Vera",
        price: 20,
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8e7a5a5?w=300"
    },

    {
        id: 7,
        category: "Flowering Plants",
        name: "Rose Plant",
        price: 22,
        image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=300"
    },
    {
        id: 8,
        category: "Flowering Plants",
        name: "Orchid",
        price: 40,
        image: "https://images.unsplash.com/photo-1566982632111-7b6f6a7c6a5a?w=300"
    },
    {
        id: 9,
        category: "Flowering Plants",
        name: "Jasmine",
        price: 26,
        image: "https://images.unsplash.com/photo-1597848212624-e19f3f0e8f5b?w=300"
    },
    {
        id: 10,
        category: "Flowering Plants",
        name: "Hibiscus",
        price: 24,
        image: "https://images.unsplash.com/photo-1597848212624-e19f3f0e8f5b?w=300"
    },
    {
        id: 11,
        category: "Flowering Plants",
        name: "Lavender",
        price: 29,
        image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=300"
    },
    {
        id: 12,
        category: "Flowering Plants",
        name: "Geranium",
        price: 27,
        image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=300"
    },

    {
        id: 13,
        category: "Succulents",
        name: "Echeveria",
        price: 18,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300"
    },
    {
        id: 14,
        category: "Succulents",
        name: "Haworthia",
        price: 20,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300"
    },
    {
        id: 15,
        category: "Succulents",
        name: "Jade Plant",
        price: 22,
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8e7a5a5?w=300"
    },
    {
        id: 16,
        category: "Succulents",
        name: "String of Pearls",
        price: 25,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300"
    },
    {
        id: 17,
        category: "Succulents",
        name: "Zebra Haworthia",
        price: 21,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300"
    },
    {
        id: 18,
        category: "Succulents",
        name: "Burro's Tail",
        price: 26,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300"
    }
];

function ProductList() {
    const dispatch = useDispatch();

    const cartItems = useSelector(
        state => state.cart?.items || []
    );

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const categories = [
        "Indoor Plants",
        "Flowering Plants",
        "Succulents"
    ];

    return (
        <div className="product-page">

            {/* Navbar */}
            <nav className="product-navbar">

                <h2>Paradise Nursery</h2>

                <div className="product-nav-links">
                    <a href="/">Home</a>
                    <a href="#plants">Plants</a>
                    <a href="/cart">
                        Cart ({cartCount})
                    </a>
                </div>

            </nav>


            <main id="plants">

                <h1>Our Plants</h1>

                {categories.map(category => {

                    const categoryProducts = products.filter(
                        product => product.category === category
                    );

                    return (
                        <section
                            className="plant-category"
                            key={category}
                        >

                            <h2>{category}</h2>

                            <div className="product-grid">

                                {categoryProducts.map(product => {

                                    const alreadyAdded =
                                        cartItems.some(
                                            item =>
                                                item.id === product.id
                                        );

                                    return (
                                        <div
                                            className="product-card"
                                            key={product.id}
                                        >

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />

                                            <h3>
                                                {product.name}
                                            </h3>

                                            <p>
                                                ${product.price}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        addItem(product)
                                                    )
                                                }
                                                disabled={alreadyAdded}
                                            >
                                                {alreadyAdded
                                                    ? "Added to Cart"
                                                    : "Add to Cart"}
                                            </button>

                                        </div>
                                    );
                                })}

                            </div>

                        </section>
                    );
                })}

            </main>

        </div>
    );
}

export default ProductList;