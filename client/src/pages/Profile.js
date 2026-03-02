import React, {useEffect,useState} from "react";
import axios from "axios";

function Profile(){

  const [user,setUser] = useState({});

  useEffect(()=>{

    const id = JSON.parse(
      localStorage.getItem("user")
    ).id;

    axios.get("/api/users/"+id)
    .then(res=>setUser(res.data));

  },[]);

  return(
    <div style={{padding:50}}>

      <h2>My Profile</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

    </div>
  );
}

export default Profile;
