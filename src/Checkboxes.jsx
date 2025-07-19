import { useState } from "react";
import Singer from "./ReuseComponent";
function Checkboxes(){
    //   const [tech, setTech] = useState("Java");
      const [tech, setTech] = useState([]);
      const handleTech=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            // the below code prints all checked boxes value
            setTech([...tech, event.target.value]);
        }else{
            setTech([...tech.filter((item)=>item!=event.target.value)]);
            // it filters and removes all unchecked values..jo value target ki value ke unmatched h usko hata do. Spread operator allows to print them .
        }
      }


    return (
      <div>
        <h3 style={{ color: "yellow", border: "4px solid beige" }}>
          Learning checkboxes
        </h3>
        <input onChange={handleTech} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br></br>
        <input onChange={handleTech} type="checkbox" id="js" value="js" />
        <label htmlFor="php">JS</label>
        <br></br>
        <input onChange={handleTech} type="checkbox" id="css" value="CSS" />
        <label htmlFor="php">CSS</label>
        <br></br>
        <input onChange={handleTech} type="checkbox" id="flask" value="Flask" />
        <label htmlFor="php">Flask</label>

        <h3>{tech.toString()}</h3>
      </div>
    );
}

// RADIO BUTTONS
function RadioButton(){
    const [gender, setGender]=useState('male');
    const [city, setCity]=useState('gurgaon');
    return (
      <div>
        <h2>Radio Buttons and dropdown</h2>
        <h4>Select gender</h4>
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          value={"male"}
          checked={gender == "male"}
          name="gender"
          id="male"
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          value={"female"}
          checked={gender == "female"}
          name="gender"
          id="female"
        />
        <label htmlFor="male">Female</label>
        {/* Same name allows to choose only one of the options */}
        <h3>Selected gender is: {gender}</h3>
        <br/><br/><br/>
        <h4>Select city</h4>
        <select onChange={(event)=>setCity(event.target.value)} defaultValue={"gurgaon"}>
            <option value={"noida"}>Noida</option>
            <option value={"manali"}>Manali</option>
            <option value={"gurgaon"}>Gurgaon</option>
            <option value={"shimla"}>Shimla</option>
        </select>
        <h3>Selected city : {city}</h3>

      </div>
    );
}
// ARRAYS
function UserArray(){
    // const userDataforName= ['anil', 'himanshu', 'ayush', 'peter'];
    const userData = [
      {
        name: "Anil",
        age: "34",
        email: "abc@test.com",
        id: 1,
      },
      {
        name: "Anita",
        age: "14",
        email: "anic@test.com",
        id: 2,
      },
      {
        name: "Ayush",
        age: "19",
        email: "ayushc@test.com",
        id: 3,
      },
      {
        name: "Peter",
        age: "74",
        email: "peter@test.com",
        id: 4,
      }
    ];
    return (
      <div>
        <h2>Loop in JSX with Map function</h2>
        <table border="1">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {userData.map((candi) => (
              <tr key={candi.id}>
                <td>{candi.id}</td>
                <td>{candi.name}</td>
                <td>{candi.email}</td>
                <td>{candi.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anil</td>
              <td>anil@test.com</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>

        <h1>Reuse components using loop</h1>
        {
            userData.map((user)=>(
                <div key={user.id}>
                    <Singer user={user}/>
                </div>
            ))
        }
        {
            userData.map((user)=>(
                <div>
                      <Singer/>
                </div>
            ))
        }
      </div>
    );
}

export default Checkboxes;
export {RadioButton, UserArray};
