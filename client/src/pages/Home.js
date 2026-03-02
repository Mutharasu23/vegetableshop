import React from "react";
import "./home.css";

function Home() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2>🥦 VeggieMart</h2>

        <button onClick={logout}>Logout</button>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <h1>Fresh Vegetables</h1>
          <p>Direct from Farm to Your Home</p>

          <button>Shop Now</button>
        </div>

      </section>


      {/* Products */}
      <section className="products">

        <h2>Our Products</h2>

        <div className="product-grid">

          {/* Card */}
          <div className="card">
            <img src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" />
            <h3>Tomato</h3>
            <p>₹40 / Kg</p>
            <button>Add</button>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443" />
            <h3>Carrot</h3>
            <p>₹50 / Kg</p>
            <button>Add</button>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1582515073490-dc84a8cbba87" />
            <h3>Potato</h3>
            <p>₹30 / Kg</p>
            <button>Add</button>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25" />
            <h3>Onion</h3>
            <p>₹35 / Kg</p>
            <button>Add</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
