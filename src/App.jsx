import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
    const [started, setStarted] = useState(false);

    if (started) {
        return (
            <div>
                <AboutUs />

                <div style={{ textAlign: "center", margin: "30px" }}>
                    <button
                        className="get-started"
                        onClick={() => setStarted(false)}
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
                    onClick={() => setStarted(true)}
                >
                    Get Started
                </button>

            </div>
        </div>
    );
}

export default App;