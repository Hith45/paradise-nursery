import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
    const [page, setPage] = useState("home");

    if (page === "plants") {
        return <ProductList />;
    }

    if (page === "about") {
        return (
            <div>
                <AboutUs />

                <div style={{ textAlign: "center", margin: "30px" }}>
                    <button
                        className="get-started"
                        onClick={() => setPage("home")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="landing-page">
            <div className="landing-content">

                <h1>Paradise Nursery</h1>

                <p>
                    Bring nature into your home with beautiful,
                    healthy houseplants from Paradise Nursery.
                </p>

                <button
                    className="get-started"
                    onClick={() => setPage("plants")}
                >
                    Get Started
                </button>

            </div>
        </div>
    );
}

export default App;