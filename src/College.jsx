import { useState } from "react";

const Dollege=({c})=>{
    return (
      <div
        style={{
          backgroundColor: "#ccc",
          padding: "20px",
          borderBottom: "2px solid gray",
          margin: "20px",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <h4>Name: {c.name}</h4>
        <ul>
          <li>
            <h4>College City: {c.city}</h4>
          </li>
          <li>
            {" "}
            <h4>College Website: {c.website}</h4>
          </li>
        </ul>
        <ul>
          {c.student.map((s, idx) => (
            <li key={idx}>
              Name: {s.name}, Age: {s.age}, Email: {s.email}
            </li>
          ))}
        </ul>
      </div>
    );
}
export default Dollege;