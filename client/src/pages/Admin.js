import React, { useState } from "react";
import axios from "axios";

function Admin() {

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");

  const addProduct = async () => {

    await axios.post("/api/products/add", {
      name, price, image
    });

    alert("Product Added");
  };

  return (
    <div style={{padding:50}}>

      <h2>Admin Panel</h2>

      <input placeholder="Name"
        onChange={e=>setName(e.target.value)}/>

      <input placeholder="Price"
        onChange={e=>setPrice(e.target.value)}/>

      <input placeholder="Image URL"
        onChange={e=>setImage(e.target.value)}/>

      <button onClick={addProduct}>Add</button>

    </div>
  );
}

export default Admin;
