import { useState } from "react";
const Singer = ({ user }) => {
  if (!user) return null; // safe check

  return (
    <div style={{
        border: "1px solid pink",
        padding: "10px",
        margin:"4px",
        width:"400px",
        borderRadius:"10px"
    }}>
      <h3>
        Name:<span style={{ color: "green" }}>{user.name}</span></h3>
       <h3> Age::<span style={{ color: "green" }}>{user.age}</span></h3>
        <h3>Email:<span style={{ color: "green" }}>{user.email}</span>
      </h3>
    </div>
  );
};

export default Singer;


