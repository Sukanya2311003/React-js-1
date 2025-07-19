import { Children, useState } from "react";

const Counter=()=>{
    const [count, setCount]=useState(0);
    const [display, setDisplay]= useState(true);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Counter </button>

            <h1>Toggle(component) in react js</h1>

            {
                display? <h2>Sukanya</h2>:<h1>No user</h1>
            }
            <button onClick={()=>setDisplay(!display)}>Click me</button>

        </div>
    )
}
function User(){
        const [display2, setDisplay2] = useState(true);
    return (
      <div>
        <h1>Toggle(actor) in react js</h1>

        {display2 ? <h2>Kim </h2> : <h1>Kim not found</h1>}
        <button onClick={() => setDisplay2(!display2)}>Click me</button>
      </div>
    );
}
function Dishes(){
    return (
      <div>
        <h1>Momos</h1>
      </div>
    );
}
// PROPS
function Toy({data, age}){
    console.log(data);
    let homeName="Golu";
    let ageC= 26;
    return(
        <div>
            
            <p>Name: {data}</p>
            <p>Age: {age}</p>
            
        </div>
    )
}
// Props to object
export const propObject={
    place:"Delhi",
    pin:"84",
    district:"Central"
}
// Props to arrays
function College({names}){
    return(
        <div>
            <h2>College</h2>
            <h3>{names}</h3>

        </div>
    )
}
// props: pass data in component with click
function Student({name}){
    return(
        <div>
            
            <h2>{name}</h2>
            

        </div>
    )
}
// Default props
function Candidate({ name = "New Candidate" }) {
  return (
    <div>
      <h1>Hi, {name}</h1>
    </div>
  );
}
// CHANGE STYLE WITH PROPS
function Wrapper({children, color}){
    return(
        <div style={{color:color, border:"5px solid green", width: "300px"}}>
          {/* <h2>Style with props</h2> */}
          {children}
        </div>
    )
}

export default Counter;
export {User, Dishes, Toy, College,Student, Candidate, Wrapper };